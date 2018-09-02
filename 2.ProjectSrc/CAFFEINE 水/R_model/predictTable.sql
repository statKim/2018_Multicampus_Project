-- 매출액 예측을 위한 table 구문
-- MySQL 사용

use khs;
-- 사용자 생성
CREATE USER 'khs'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES on testdb.* TO 'khs'@'localhost';
FLUSH PRIVILEGES;
SELECT host, user FROM user;

create table predict(
	region varchar(20),			--지역 - region, rent
	livingPeople number(10),	--상주인구 - livingPeople
	workingPeople number(10),	--직장인구 - workingPeople
	movingPeole number(10),		--유동인구 - movingPeople
	numberStore	number(10),		--유사점포수 - numberStore
	output
);

create table predict(
	region varchar(20),			#지역 - region, rent
	livingPeople FLOAT(10,2),	#상주인구 - livingPeople
	numberStore	FLOAT(10,2),	#유사점포수 - numberStore
	workingPeople FLOAT(10,2),	#직장인구 - workingPeople
	movingPeople FLOAT(10,2),	#유동인구 - movingPeople
	predOutput int(15)		#예상매출액
);

insert into predict(region, livingPeople, numberStore, workingPeople, movingPeople) 
values("강서구",377,3,684,46866);