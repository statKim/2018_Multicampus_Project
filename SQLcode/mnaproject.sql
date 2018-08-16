create table profit3(      --20columns
    servicecodename varchar2(50) primary key,--상권코드명
    avgrunning    NUMBER(10),   --유사업종점포수
    similarstore   NUMBER(10,2),  -- 평균영업개월수
    monthprofit   NUMBER(10), -- 당월매출금액
    ratemenprofit    NUMBER(10,2),    --남성 매출비율
    ratewomenprofit    NUMBER(10,2),  -- 여성매출비율
    rate10sprofit   NUMBER(10,2), --10대 매출비율
    rate20sprofit   NUMBER(10,2),    --20대 매출비율
    rate30sprofit   NUMBER(10,2),    --30대 매출비율
    rate40sprofit   NUMBER(10,2),    --40대 매출비율
    rate50sprofit   NUMBER(10,2),    --50대 매출비율
    rate60sprofit   NUMBER(10,2),    --60대 매출비율
    menprofit     NUMBER(10),   --남성 매출금액
    womenprofit   NUMBER(10),    --여성매출금액
    profit10   NUMBER(10),     --10대 매출금액
    profit20   NUMBER(10),     --20대 매출금액
    profit30   NUMBER(10),     --30대 매출금액
    profit40   NUMBER(10),     --40대 매출금액
    profit50   NUMBER(10),     --50대 매출금액
    profit60   NUMBER(10)     --60대 매출금액
);
create table leavingPeople3(  -- 총 columns수 10개
    servicecodename  varchar2(50) primary key,--상권코드명
    totallp   NUMBER(10),-- 총상구인구수
    menlp   NUMBER(10),-- 남성상구인구수
    womenlp   NUMBER(10),-- 여성상구인구수
    lp10   NUMBER(10),-- 10상주인구수
    lp20   NUMBER(10),-- 20상구인구수
    lp30   NUMBER(10),-- 30상구인구수
    lp40   NUMBER(10),-- 40상구인구수
    lp50   NUMBER(10),-- 50상구인구수
    lp60   NUMBER(10)-- 60상구인구수
);
create table workingpeople3( --총 columns수 10개
	servicecodename  varchar2(50) primary key, --상권코드명
	totalwp NUMBER(4), -- 총직장인구수
    menwp   NUMBER(4), -- 남성직장인구수
    womenwp NUMBER(4), -- 여성직장인구수
    wp10   NUMBER(10),-- 10직장인구수
    wp20   NUMBER(10),-- 20직장인구수
    wp30   NUMBER(10),-- 30직장인구수
    wp40   NUMBER(10),-- 40직장인구수
    wp50   NUMBER(10),-- 50직장인구수
    wp60   NUMBER(10)-- 60직장인구수
);
create table movingPeople3(  --columns수 :10개
	servicecodename  varchar2(50) primary key, --상권코드명
	totalmp  NUMBER(10), --총유동인구수
    menmp    NUMBER(10), --남성유동인구수
    womenmp NUMBER(10),--여성유동인구수
    mp10   NUMBER(10),-- 10유동인구수
    mp20   NUMBER(10),-- 20유동인구수
    mp30   NUMBER(10),-- 30유동인구수
    mp40   NUMBER(10),-- 40유동인구수
    mp50   NUMBER(10),-- 50유동인구수
    mp60   NUMBER(10)-- 60직장인구수
);
create table profit4(      --20columns
    servicecodename varchar2(50) primary key,--상권코드명
    avgrunning    NUMBER(10),   --유사업종점포수
    similarstore   NUMBER(10),  -- 평균영업개월수
    monthprofit   NUMBER(10),-- 당월매출금액
    ratemenprofit    NUMBER(10),    --남성 매출비율
    ratewomenprofit    NUMBER(10),  -- 여성매출비율
    rate10sprofit   NUMBER(10), --10대 매출비율
    rate20sprofit   NUMBER(10),    --20대 매출비율
    rate30sprofit   NUMBER(10),    --30대 매출비율
    rate40sprofit   NUMBER(10),    --40대 매출비율
    rate50sprofit   NUMBER(10),    --50대 매출비율
    rate60sprofit   NUMBER(10),    --60대 매출비율
    menprofit     NUMBER(10),     --남성 매출금액
    womenprofit   NUMBER(10),    --여성매출금액
    profit10   NUMBER(10),     --10대 매출금액
    profit20   NUMBER(10),     --20대 매출금액
    profit30   NUMBER(10),     --30대 매출금액
    profit40   NUMBER(10),     --40대 매출금액
    profit50   NUMBER(10),     --50대 매출금액
    profit60   NUMBER(10)     --60대 매출금액
);
create table leavingPeople4(  -- 총 columns수 10개
    servicecodename  varchar2(50) primary key,--상권코드명
    totallp   NUMBER(10),-- 총상구인구수
    menlp   NUMBER(10),-- 남성상구인구수
    womenlp   NUMBER(10),-- 여성상구인구수
    lp10   NUMBER(10),-- 10상주인구수
    lp20   NUMBER(10),-- 20상구인구수
    lp30   NUMBER(10),-- 30상구인구수
    lp40   NUMBER(10),-- 40상구인구수
    lp50   NUMBER(10),-- 50상구인구수
    lp60   NUMBER(10)-- 60상구인구수
);
create table workingpeople4( --총 columns수 10개
	servicecodename  varchar2(50) primary key, --상권코드명
	totalwp NUMBER(4), -- 총직장인구수
    menwp   NUMBER(4), -- 남성직장인구수
    womenwp NUMBER(4), -- 여성직장인구수
    wp10   NUMBER(10),-- 10직장인구수
    wp20   NUMBER(10),-- 20직장인구수
    wp30   NUMBER(10),-- 30직장인구수
    wp40   NUMBER(10),-- 40직장인구수
    wp50   NUMBER(10),-- 50직장인구수
    wp60   NUMBER(10)-- 60직장인구수
)	;
create table movingPeople4(  --columns수 :10개
	servicecodename  varchar2(50) primary key, --상권코드명
	totalmp  NUMBER(10), --총유동인구수
    menmp    NUMBER(10), --남성유동인구수
    womenmp NUMBER(10),--여성유동인구수
    mp10   NUMBER(10),-- 10유동인구수
    mp20   NUMBER(10),-- 20유동인구수
    mp30   NUMBER(10),-- 30유동인구수
    mp40   NUMBER(10),-- 40유동인구수
    mp50   NUMBER(10),-- 50유동인구수
    mp60   NUMBER(10)-- 60직장인구수
);


create table address ( -- 지역구분 table
	marketcode varchar(30) primary key, -- 상권코드
	goo varchar(10)  -- 구 구분
	
);

create table rent ( -- 임대료 table
	goo varchar(10) primary key,	-- 구 구분
	avgRent number(10,2),	-- 평균 임대료
	geoMeasure varchar(20)	-- 구를 4개 카테고리로 구분
							-- (도심지역, 강남지역, 영등포신촌지역, 기타지역)
);
	
	
	
	
	
	
	
	
	
	
	
	
	