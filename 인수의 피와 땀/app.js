/*Create,Read, Update, Delete에 필요한 모듈*/
const express = require('express');
const path = require('path');
var fs =require('fs');
var ejs =require('ejs');
var static = require('serve-static');

var bodyParser = require('body-parser');
const http = require('http');
/*=====================mysql모듈 사용=====================*/
const mysql = require('mysql');
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

/*==================라우터 함수를 쓰기 위해 express의 router메소드를 호출하는 객체 ==================*/
var router =express.Router();
/*==============ejs뷰 엔진 설정하기==============*/
app.set('views',__dirname + '/');
app.set('view engine', 'ejs');

/*웹 포트 지정해주기*/

/*======================연결할 DB정보 입력=================*/
var pool = mysql.createPool({
    connectionLimit : 10, 
    host : 'localhost',   
    user : 'root',    //데이터베이스 사용자 아이디
    password : '1234',
    database : 'user',
    debug : false      //데이터베이스 처리과정을 로그로 남길지 설정한다.
});
/*====================DB에 저장 라우터 함수====================*/
router.route('/process/addboard').post(function(erq, res){
    console.log('/process/addboard 라우팅 함수 호출됨');
    var writer =req.body.writer || req.query.writer;
    var day = req.body.day || req. query.day;
    var title = req.body.title || req.query.title;
    var content = req.body.content || req.query.content;
    console.log('요청 파라미터' + writer + ', ' + day +', ' + title + ', '+ content);
    
    addboard(writer, day, title, content, function(err, addedboard){
        if(err) {
            console.log('에러발생');
            res.writerHead(200, {"Content-Type":"text/html;charset=utf8"});
            res.writer('<h1>에러 발생 </h1>');
            res.end();
            return;
        }
        /*=====결과객체 있으면 성공 응답 전송=====*/
        if(addedboard){
            console.dir(addedboard);
            res.redirect('/form.html');
            res.end();
        }
        else{
            console.log('에러 발생');
            res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
            res.write('<h1>사용자 추가 실패</h1>');
            res.end();
        }
        
        
    });
});

/*========================DB 연결========================*/
var addboard =function(writer, day, title, content, callback){
    console.log('addboard 호출됨.');
    
    pool.getConnection(function(err, conn){
        if(err) {
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        console.log('데이터베이스 연결의 스레드 아이디 : ' + conn.threadId);
        /*====데이터를 객체로 만든다.====*/
        var data = {writer: writer, day: day, title:tityle, content: content};
        /*===SQL문을 실행====*/
        var exec = conn.query('INSERT INTO board VALUES ?', data, function( err, result){
            conn.release();
            console.log('실행된 SQL : ' + exec.sql);
            if(err){
                console.log('SQL실행 시 에러 발생.');
                callback(err, null);
                return;
            }
            
            callback(null, result);
        
        });
    
    });
}



/*===================select 쿼리문 사용===================*/

/*connection.query('INSERT INTO board VALUES (NULL,"노드", "노드가 췩오", "2018-8-21", "인수합병 화이팅입니다.")', (error, result, fields) =>{
    if(error) throw error;
    console.log(result);
});
    
connection.query('SELECT * FROM board', (error, result, fields) =>{
    if(error) throw error;
    console.log(result);
    
    //response.send(ejs.render(data, {data: results,}));
});*/

/*=======================연결 종료========================*/



/*============404에러 예외 처리============*/
const expressErrorHandler = require('express-error-handler');
const errorHandler =expressErrorHandler({
    static :{
         '404':'./public/error.html'
    }
});
    
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);
/*==========서버 생성===============*/
const server = http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 웹서버 생성됨 : ' + app.get('port'));
})