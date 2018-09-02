-- 회원가입 테이블 만들기
CREATE TABLE sign(
	id varchar(20) not null primary key, 
	name varchar(33) not null, 
	age varchar(3) not null, 
	password varchar(20) not null
);
		
-- 게시판 테이블
 CREATE TABLE board1 (
  no int(3) not null primary key auto_increment ,
  title VARCHAR(50) NOT NULL COMMENT '',
  writer VARCHAR(50) NOT NULL COMMENT '',
  content MEDIUMTEXT NULL COMMENT '',
  hit INT(10) NOT NULL DEFAULT 0 COMMENT '',
  regdate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  moddate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '',
  password VARCHAR(50) NULL COMMENT ''
);
  
-- 네이버 유정 정보 저장 테이블
CREATE  TABLE naveruser (
  email INT NOT NULL,
  name VARCHAR(50) NULL ,
  age VARCHAR(8) NULL ,
  gender VARCHAR (2) NULL
);

-- input값과 예측값 저장 테이블
create table predict(
	region varchar(20), 
	livingPeople FLOAT(10, 2), 
	numberStore	FLOAT(10, 2), 
	workingPeople FLOAT(10, 2), 
	movingPeople FLOAT(10, 2), 
	predOutput int(15)
);