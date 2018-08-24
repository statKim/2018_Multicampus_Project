
//Express 기본 모듈 불러오기
var http =require('http');
var path = require('path');
var express = require('express');
var fs =require('fs');


//Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var static = require('serve-static');
var cookieParser = require('cookie-parser');

//에러 핸들러 모듈 사용하기
var expressErrorHandler = require('express-error-handler');


//Session 미들웨어 불러오기
/*==================세션모듈가져오기===================*/
var expressSession =require('express-session');

//모듈로 분리한 데이터베이스 파일 불러오기
//var database =require('./database/database');

//익스프레스 객체 생성
var app = express();

/*======================ejs뷰엔진 설정하기==============*/
var ejs = require('ejs');
app.set('views',__dirname + '/views/');
app.set('view engine', 'ejs');

/*=============포트번호 app에 설정하기===================*/
app.set('port', process.env.PORT || 3000);
app.use(static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());
//라우터 함수를 쓰기 위해 express의 router매소드를 호출하는 객체 router
var router =express.Router();


/*====쿠키=============쿠키 미들웨어=====================*/
app.use(cookieParser());

/*=====================세션 미들웨어=====================*/
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));
/*쿠키===================쿠키설정하기=====================*/
/*쿠키========/process/showCookie 라우터 함수============*/
router.route('/process/showCookie').get(function(req, res){
    console.log('/process/showCookie 라우터 함수 호출');
    res.send(req.cookies);
})
/*쿠키======/process/setUserCookie 라우터 함수==========*/
router.route('/process/setUserCookie').get(function(req, res){
    console.log('/process/setUserCookie 라우터 객체 호출');
    res.cookie('user',{id:'milk',name:'우유',author:'true'});
    res.redirect('/process/showCookie');  //redirect로 응답주기
});

/*세션======================*/
/*DB에 저장 라우터======/process/adduser요청 라우터 함수로 처리하기=======*/
router.route('/process/adduser').post(function(req, res){
    console.log('/process/adduser 라우팅 함수 호출됨');
    var id = req.body.id || req.query.id;
    var password  = req.body.password || req.query.password;
    var name = req.body.name || req.query.name;
    var age = req.body.age || req.query.age;
    var age = Number(age);
    var romanCalender =req.body.romanCalender || req.query.romanCalender;
    var address = req.body.address || req.query.address;
    var email1 = req.body.email1 || req.query.email1;
    var gender = req.body.gender || req.query.gender;
    console.log('요청 파라미터 : '+ id+', '+password+', '+ name +', '+ age +', ' +gender + ', ' + address + ', ' + email1 + ', ' +romanCalender);
    
    addUser(id, name, age, password, romanCalender, address, email1, gender,  function(err, addedUser){
        if (err) { //동일한 아이디로 추가할 때 오류 발생 - 클라이언트 오류 전송
            console.log('에러발생.');
                res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
                res.write('<h1>에러 발생 </h1>');
                res.end();
                return;
        }
        //결과 객체 있으면 성공 응답 전송
        if(addedUser) {
            console.dir(addedUser);
            res.redirect('/form.html');
            /*res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
            res.write('<h1>사용자 추가 성공</h1>');*/
            res.end();
           }//addedUser가 없으면
            else{
                console.log('에러 발생.');
                res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
                res.write('<h1>사용자 추가 실패</h1>');
                res.end();
            }
    });
});
/*DB검색로그인============/process/login 라우트 함수===============*/
router.route('/process/login').post(function(req, res){
    console.log('/process/login 라우트 함수 호출.');
    var id = req.body.id || req.query.id;
    var password = req.body.password || req.query.password;
    console.log('요청 파라미터 : ' + id + ', ' + password);
   
     authUser(id, password, function(err, rows){
        if(err){
             console.log('에러 발생.');
            res.writeHead(200, {"Content-Tyep":"text/html;charset=utf8"});
             res.write('<h1>에러발생</h1>');
            res.end();
            return;
        }
            
        if(rows){
            console.dir(rows);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
            
            var context ={userid: id, username: rows[0].name};
            
            req.app.render('homepagelogin', context, function(err, html){
                if(err){
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
                    console.error('뷰 렌더링 중 에러 발생 : ' + err.stack);
                    res.write('<h2>뷰렌더링 중 오류 발생</h2>');
                    console.log('에러발생.');
                    res.write('<p>' + err.stack + '</p>');
                    res.end();
                    
                    return;
                }
                //console.log('rendered  : ' + html); 
                res.end(html);
            });
            /*
            res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
            res.write('<h1>사용자 로그인 성공</h1>');
            res.write('<div><p>사용자 :' + rows[0].name + '</p></div>');
            res.end();*/
            
        }else{
            console.log('에러발생.');
            res.send('<h2>사용자 데이터 조회 안됨.</h2>');
            res.end();
        }
        });
    
    
});
/*==========mysql 데이터베이스를 사용할 수 있는 mysql 모듈 불러오기==========*/
var mysql =require('mysql');
/*==========mysql 데이터 베이스 연결 설정==========*/
//pool을 만들면 오픈하고나면 꼭 닫아줘야 한다.
//connection은 한정되어 있으니까 쓸 때만 꺼내쓰고 pool에 반납
//mysql을 연결하기 위한 pool
var pool = mysql.createPool({
    connectionLimit : 10, 
    host : 'localhost',   
    user : 'root',    //데이터베이스 사용자 아이디
    password : '1234',
    database : 'test',
    debug : false      //데이터베이스 처리과정을 로그로 남길지 설정한다.
});

/*==============사용자를 등록하는 함수 addUser===============*/
var addUser = function(id, name, age, password,  romanCalender, address, email1, gender, callback){
    console.log('addUser 호출됨.');
    
    pool.getConnection(function(err, conn){   //커넥션 풀에서 연결 객체를 가져온다.
        if(err) { //연결 객체 가져오지 못하면 'err'이고 conn은 연결객체가 없지만 가진 연결객체를 개방한다.
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        
        console.log('데이터베이스 연결의 스레드 아이디 : ' + conn.threadId);
        //데이터를 객체로 만든다.
        var data ={id: id, name: name, age: age, password: password, romanCalender: romanCalender,address: address,email1: email1,gender: gender };
        //SQL문을 실행한다.
        
        var exec = conn.query('insert into user set ?',data, function(err, result){
            conn.release();
            console.log('실행된 SQL : ' + exec.sql);
            
            if(err){
                console.log('SQL실행 시 에러 발생. ');
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    });
}


/*====================사용자 인증 함수 authUser===================*/
var authUser = function(id, password, callback){
    console.log('authUser함수 호출됨 :' + id+','+password);
    /*dbpool 에서 객체 하나 가져옴*/
    pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        console.log('데이터베이스 연결 스레드 아이디 :' + conn.threadId);
        var tablename = 'user';
        var colums = ['id','name','age'];
        
        var exec = conn.query("select ?? from ?? where id =? and password =?", [colums, tablename, id, password], function(err, rows){
            conn.release();
            console.log('실행된 SQL : ' + exec.sql);
            
            if (err){
                callback(err, null);  //null값 리턴
                return;
            }
            if(rows.length >0){
                console.log('사용자 찾음');
                callback(null, rows);        //row값 리턴
            }else{
                console.log('사용자 찾지 못함.');
                callback(null, null);
            }
        });
    });
}


/*==================로그아웃===================*/

router.route('/process/logout').get(function(req, res){
    console.log('/process/logout 라우터 함수를 호출');
    if(req.session.user){
        console.log('로그아웃합니다.');
        req.session.destroy(function (err){
            if(err) {
                console.log('세션 삭제 시 에러 발생');
                return;
            }
            console.log('세션을 삭제하고 로그아웃했습니다.');
            res.redirect('/homepate.html');
        });
    }else{
        //로그인이 안된 상태
        console.log('아직 로그인되어 있지 않습니다.');
        res.redirect('/homepage.html');
    }
});

/*===============게시판 보여주기==============*/
app.get('/process/board', (req,res) =>{
     console.log('/process/board 라우터 함수를 호출');
     pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
    console.log('데이터베이스 연결 스레드 아이디 :' + conn.threadId);
    fs.readFile('board.ejs','utf-8',(error, data) =>{
        if (err){
                console.log('ejs오류' + error);  //null값 리턴
                return;
            }
       
        conn.query('select no, title, writer, hit, DATE_FORMAT(moddate, "%Y/%m/%d %T") as moddate from board1 order by no desc', function(err, rows){
            conn.release();
            if (err){
                console.log('페이징 에러'+ err);
                //callback(err, null);  //null값 리턴
                return;
            }
            
            console.log(rows);
            console.log(rows[0].title);
             res.render('board', {rows: rows }); // view 디렉토리에 있는 list 파일로 이동합니다.
            //res.send(ejs.render(data, {data:rows}));
            
        });
    });
     });
});

/*=============================*/
/*============게시판 글읽기& hit 수 증가시키기============*/
app.get('/board/read/:no', function(req, res, next){
    console.log('/read/:id 라우터 함수를 호출');
    var no = req.params.no;
     
     pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        conn.beginTransaction(
            
            function(err){
            if(err) console.log(err);
        /*====1. 함수 : hit수 증가시키기*/
            conn.query('update board1 set hit =hit+1 where no=?', [no], function(err){
                if(err) {
                /*이 쿼리에서 에러가 발생하면 쿼리문 수행 취소하고 콜백*/
                console.log(err);
                conn.rollback(function(){
                    console.error('rollback error1');
                })
                }
            /*====2. 함수 : 글 호출하기*/
            
                
                conn.query('select no, title, content, writer, hit, DATE_FORMAT(moddate, "%Y/%m/%d %T") as moddate, DATE_FORMAT(regdate, "%Y/%m/%d %T") as regdate from board1 where no=?', [no], function(err,rows){
                    if(err){
                        /*이 쿼리에서 에러 나면 쿼리문 취소하고 롤백*/
                        console.log(err);
                        conn.rollback(function(){
                            console.error('rollback error2');
                        })
                    }
                    else{
                        conn.commit(function(err){
                            if(err) console.log(err);
                            console.log("row :" + rows[4]);
                            //console.log("title : " +  rows[0].title);
                            res.render('read', {read: rows[0].title, read :rows[0]});
                        })
                    }
                    
                })
            })
        })
     });
})
/*===============게시판 삭제하기===============*/
app.get('/delete/:id', function(req, res){
     console.log('/delete/:id 라우터 함수를 호출');
     pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
         
    console.log('데이터베이스 연결 스레드 아이디 :' + conn.threadId);
    conn.query('DELETE FROM board1 WHERE no =?',[req.params.id], function(){
            conn.release();
            if (err){
                console.log('페이징 에러'+ err);
                //callback(err, null);  //null값 리턴
                return;
            }
            res.redirect('/process/board');
        });
     
     });
});

/*==========게시판 글쓰기===========*/
/*==============get방식의 요청이 들어왔을 때 write페이지로 이동================*/
app.get('/process/write', function(req, res, next){
    console.log('write.ejs로 경로 이동');
    //res.redirect('views/write')
    res.render('write', {title: '글 쓰기 페이지'});
});

app.post('/board/write',function(req,res,next){
    console.log('/write 라우터 함수 실행.');
    var body =req.body;
    var writer = body.writer;
    var title =req.body.title;
    var content = req.body.content;
    var password = req.body.password;
    pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        console.log('데이터베이스 연결 스레드 아이디 :' + conn.threadId);
        conn.beginTransaction(function(err){
            if(err) console.log(err);
            conn.query('insert into board1 (title, writer, content, password) values(?,?,?,?)', [title, writer, content, password], function(err){
                if(err){
                    /*이 쿼리문 에러나면 쿼리 수행취소하고 롤백*/
                    console.log(err);
                    conn.rollBack(function(){
                        console.error('rollback error1');
                    })    
                }
                conn.query('SELECT LAST_INSERT_ID() as no', function(err, rows){
                    if(err){
                        /*이 쿼리 실행해서 에러나면 실행취소하고 롤백*/
                        console.log(err);
                        conn.rollBack(function(){
                            console.error('rollback error2');
                        })
                    }else{
                        conn.commit(function(err){
                            if(err) console.log(err);
                            console.log("row :" + rows);
                            var no =rows[0].no;
                            res.redirect('/board/read/'+no);
                        });
                    } 
                });
            });
        });
    });
});
  /* =============사용자한테 5개 값 받아오기=============*/  
var addvalue = function(region, livingPeople, numberStore, workingPeople, movingPeople, callback){
    console.log('addUser 호출됨.');
    
    pool.getConnection(function(err, conn){   //커넥션 풀에서 연결 객체를 가져온다.
        if(err) { //연결 객체 가져오지 못하면 'err'이고 conn은 연결객체가 없지만 가진 연결객체를 개방한다.
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        
        console.log('데이터베이스 연결의 스레드 아이디 : ' + conn.threadId);
        //데이터를 객체로 만든다.
        
        //SQL문을 실행한다.
        
        var exec = conn.query('insert into predict (region, livingPeople, numberStore, workingPeople, movingPeople) values (?,?,?,?,?)',[region, livingPeople, numberStore, workingPeople, movingPeople], function(err, result){
            conn.release();
            console.log('실행된 SQL : ' + exec.sql);
            
            if(err){
                console.log('SQL실행 시 에러 발생. ');
                callback(err, null);
                return;
            }
            callback(null, result);
        });
    });
}



/*==============매출 분석 값 받아오기==============*/
app.post('/process/value',function(req,res,next){
    console.log('/process/value 라우터 함수 실행.');
    var region = req.body.region || req.query.region;
    var livingPeople  = req.body.livingPeople || req.query.livingPeople;
    var numberStore = req.body.numberStore || req.query.numberStore;
    var workingPeople = req.body.workingPeople || req.query.workingPeople;
    var movingPeople = req.body.movingPeople || req.query.movingPeople;
    pool.getConnection(function(err, conn){
        if(err){
            if(conn){
                conn.release();
            }
            callback(err, null);
            return;
        }
        console.log('데이터베이스 연결 스레드 아이디 :' + conn.threadId);
        
        conn.beginTransaction(function(err){
            if(err) console.log(err);
            
        /*=================== 1.클라이언트 단 넘어온 값 DB 저장==========================*/
        console.log('요청 파라미터 : '+ region+', '+livingPeople+', '+ numberStore +', '+ workingPeople+', '+ movingPeople);
    
        addvalue(region, livingPeople, numberStore, workingPeople, movingPeople, function(err, addedvalue){
             if(err) {
                /*이 쿼리에서 에러가 발생하면 쿼리문 수행 취소하고 콜백*/
                console.log(err);
                conn.rollback(function(){
                    console.error('rollback error1');
                })
                }
                console.log('DB에 저장 완료');
            /*2. cmd 명령어 실행*/
/*=================cmd 명령어 처리====================*/
var exec = require('child_process').exec;
        exec("Rscript C:\\Users\\kinso\\testbrackets\\DefualtExample\\R_model\\predictModel.R", function(err, stdout, stderr){
            if(err) {
            /*이 쿼리에서 에러가 발생하면 쿼리문 수행 취소하고 콜백*/
            console.log(err);
            conn.rollback(function(){
                console.error('rollback error1');
            })
            }
            console.log('분석 성공!!');
/*3. ==================DB에서 분석 결과값 가져오기=======================*/
            conn.query('select * from predict where region = ? and livingPeople =? and numberStore=? and workingPeople=? and movingPeople=?', [region, livingPeople, numberStore, workingPeople, movingPeople], function(err,rows){
                if(err){
                    /*이 쿼리에서 에러 나면 쿼리문 취소하고 롤백*/
                    console.log(err);                        
                    conn.rollback(function(){
                    console.error('rollback error2');
                    })
                }
                else{
                    conn.commit(function(err){
                        if(err) console.log(err);
                        console.log("rows :" + rows[0].predOutput);
                        res.render('signup', {rows :rows[0]});
                        //res.render('signup', {rows :rows[0].predOutput});
                    })
                }
                
            })
        });        
    });  
});// beginTransaction 끝
});
});

app.get('/signup', function(req, res){
    console.log('/signup로 경로 이동');
    //res.redirect('signup');
    res.render('signup', {title: '매출 분석'});
});

app.use('/', router);
//====================404에러 페이지 처리 객체====================

var errorHandler = expressErrorHandler({
    static:{
        '404':'./public/error.html'
    }
});
app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

/*==========================web server생성========================*/
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('익스프레스로 웹 서버를 실행함 :' + app.get('port'));
})
