create table profit3(      --20columns
    servicecodename varchar2(50) primary key,--����ڵ��
    avgrunning    NUMBER(10),   --�������������
    similarstore   NUMBER(10,2),  -- ��տ���������
    monthprofit   NUMBER(10), -- �������ݾ�
    ratemenprofit    NUMBER(10,2),    --���� �������
    ratewomenprofit    NUMBER(10,2),  -- �����������
    rate10sprofit   NUMBER(10,2), --10�� �������
    rate20sprofit   NUMBER(10,2),    --20�� �������
    rate30sprofit   NUMBER(10,2),    --30�� �������
    rate40sprofit   NUMBER(10,2),    --40�� �������
    rate50sprofit   NUMBER(10,2),    --50�� �������
    rate60sprofit   NUMBER(10,2),    --60�� �������
    menprofit     NUMBER(10),   --���� ����ݾ�
    womenprofit   NUMBER(10),    --��������ݾ�
    profit10   NUMBER(10),     --10�� ����ݾ�
    profit20   NUMBER(10),     --20�� ����ݾ�
    profit30   NUMBER(10),     --30�� ����ݾ�
    profit40   NUMBER(10),     --40�� ����ݾ�
    profit50   NUMBER(10),     --50�� ����ݾ�
    profit60   NUMBER(10)     --60�� ����ݾ�
);
create table leavingPeople3(  -- �� columns�� 10��
    servicecodename  varchar2(50) primary key,--����ڵ��
    totallp   NUMBER(10),-- �ѻ��α���
    menlp   NUMBER(10),-- �������α���
    womenlp   NUMBER(10),-- �������α���
    lp10   NUMBER(10),-- 10�����α���
    lp20   NUMBER(10),-- 20���α���
    lp30   NUMBER(10),-- 30���α���
    lp40   NUMBER(10),-- 40���α���
    lp50   NUMBER(10),-- 50���α���
    lp60   NUMBER(10)-- 60���α���
);
create table workingpeople3( --�� columns�� 10��
	servicecodename  varchar2(50) primary key, --����ڵ��
	totalwp NUMBER(4), -- �������α���
    menwp   NUMBER(4), -- ���������α���
    womenwp NUMBER(4), -- ���������α���
    wp10   NUMBER(10),-- 10�����α���
    wp20   NUMBER(10),-- 20�����α���
    wp30   NUMBER(10),-- 30�����α���
    wp40   NUMBER(10),-- 40�����α���
    wp50   NUMBER(10),-- 50�����α���
    wp60   NUMBER(10)-- 60�����α���
);
create table movingPeople3(  --columns�� :10��
	servicecodename  varchar2(50) primary key, --����ڵ��
	totalmp  NUMBER(10), --�������α���
    menmp    NUMBER(10), --���������α���
    womenmp NUMBER(10),--���������α���
    mp10   NUMBER(10),-- 10�����α���
    mp20   NUMBER(10),-- 20�����α���
    mp30   NUMBER(10),-- 30�����α���
    mp40   NUMBER(10),-- 40�����α���
    mp50   NUMBER(10),-- 50�����α���
    mp60   NUMBER(10)-- 60�����α���
);
create table profit4(      --20columns
    servicecodename varchar2(50) primary key,--����ڵ��
    avgrunning    NUMBER(10),   --�������������
    similarstore   NUMBER(10),  -- ��տ���������
    monthprofit   NUMBER(10),-- �������ݾ�
    ratemenprofit    NUMBER(10),    --���� �������
    ratewomenprofit    NUMBER(10),  -- �����������
    rate10sprofit   NUMBER(10), --10�� �������
    rate20sprofit   NUMBER(10),    --20�� �������
    rate30sprofit   NUMBER(10),    --30�� �������
    rate40sprofit   NUMBER(10),    --40�� �������
    rate50sprofit   NUMBER(10),    --50�� �������
    rate60sprofit   NUMBER(10),    --60�� �������
    menprofit     NUMBER(10),     --���� ����ݾ�
    womenprofit   NUMBER(10),    --��������ݾ�
    profit10   NUMBER(10),     --10�� ����ݾ�
    profit20   NUMBER(10),     --20�� ����ݾ�
    profit30   NUMBER(10),     --30�� ����ݾ�
    profit40   NUMBER(10),     --40�� ����ݾ�
    profit50   NUMBER(10),     --50�� ����ݾ�
    profit60   NUMBER(10)     --60�� ����ݾ�
);
create table leavingPeople4(  -- �� columns�� 10��
    servicecodename  varchar2(50) primary key,--����ڵ��
    totallp   NUMBER(10),-- �ѻ��α���
    menlp   NUMBER(10),-- �������α���
    womenlp   NUMBER(10),-- �������α���
    lp10   NUMBER(10),-- 10�����α���
    lp20   NUMBER(10),-- 20���α���
    lp30   NUMBER(10),-- 30���α���
    lp40   NUMBER(10),-- 40���α���
    lp50   NUMBER(10),-- 50���α���
    lp60   NUMBER(10)-- 60���α���
);
create table workingpeople4( --�� columns�� 10��
	servicecodename  varchar2(50) primary key, --����ڵ��
	totalwp NUMBER(4), -- �������α���
    menwp   NUMBER(4), -- ���������α���
    womenwp NUMBER(4), -- ���������α���
    wp10   NUMBER(10),-- 10�����α���
    wp20   NUMBER(10),-- 20�����α���
    wp30   NUMBER(10),-- 30�����α���
    wp40   NUMBER(10),-- 40�����α���
    wp50   NUMBER(10),-- 50�����α���
    wp60   NUMBER(10)-- 60�����α���
)	;
create table movingPeople4(  --columns�� :10��
	servicecodename  varchar2(50) primary key, --����ڵ��
	totalmp  NUMBER(10), --�������α���
    menmp    NUMBER(10), --���������α���
    womenmp NUMBER(10),--���������α���
    mp10   NUMBER(10),-- 10�����α���
    mp20   NUMBER(10),-- 20�����α���
    mp30   NUMBER(10),-- 30�����α���
    mp40   NUMBER(10),-- 40�����α���
    mp50   NUMBER(10),-- 50�����α���
    mp60   NUMBER(10)-- 60�����α���
);


create table address ( -- �������� table
	marketcode varchar(30) primary key, -- ����ڵ�
	goo varchar(10)  -- �� ����
	
);

create table rent ( -- �Ӵ�� table
	goo varchar(10) primary key,	-- �� ����
	avgRent number(10,2),	-- ��� �Ӵ��
	geoMeasure varchar(20)	-- ���� 4�� ī�װ��� ����
							-- (��������, ��������, ��������������, ��Ÿ����)
);
	
	
	
	
	
	
	
	
	
	
	
	
	