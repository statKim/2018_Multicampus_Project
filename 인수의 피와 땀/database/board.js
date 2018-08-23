var express =require('express');
var router =express.Router();
var mysql = require('mysql');


var pool = mysql.createPool({
    connectionLimit : 10, 
    host : 'localhost',   
    user : 'root',    //데이터베이스 사용자 아이디
    password : '1234',
    database : 'test',
    debug : false      //데이터베이스 처리과정을 로그로 남길지 설정한다.
});

/*리스트 페이지 받아오기*/
router.get('/list', function (req, res, next){
    res.redirect('/board1');
})
router.get('/list/:page', function(req, res, next){
    
    var query = connection.query('select no, title, writer, hit, DATE_FORMAT(moddate, "%y/%m/%d/ %T") as moddate from board1',function(err,rows){
        if(err) console.log(err) 
            console.log('rows :' + rows);
        res.render('list', {title:'Board List', rows:rows});
});
});

module.exports = router;