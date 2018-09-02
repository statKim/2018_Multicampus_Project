#######################
#### 데이터 전처리
#######################

setwd("C:/Users/student/Desktop/데이터")

data1 <- read.csv("상권-추정매출.csv")
str(data1)
d1_3 <- subset(data1, 기준년월코드==201803 & 서비스업종코드명=="커피음료")
d1_4 <- subset(data1, 기준년월코드==201804 & 서비스업종코드명=="커피음료")
head(d1_3)
head(d1_4)
str(d1_3)
str(d1_4)

library(reshape)
df2 <- melt(df, id="상권코드")
head(df2)
code <- df[1]
service <- 
  
df2 <- df[df$상권코드==1744,]
head(df2)

data6 <- read.csv("상권-상주인구.csv")
str(data6)
d6_3 <- subset(data6, 기준년월코드==201803)[-c(1,3)]
d6_4 <- subset(data6, 기준년월코드==201804)[-c(1,3)]
head(d6_3)
head(d6_4)

data7 <- read.csv("상권-점포.csv")
str(data7)
d7_3 <- subset(data7, 기준년월코드==201803 & 서비스업종코드명=="커피음료")[-c(1,3,8:11)]
d7_4 <- subset(data7, 기준년월코드==201804 & 서비스업종코드명=="커피음료")[-c(1,3,8:11)]
head(d7_3)
head(d7_4)

data8 <- read.csv("상권-직장인구.csv")
str(data8)
d8_3 <- subset(data8, 기준년월코드==201803)[-c(1,3)]
d8_4 <- subset(data8, 기준년월코드==201804)[-c(1,3)]
head(d8_3)
head(d8_4)

data9 <- read.csv("상권-추정유동인구.csv")
str(data9)
d9_3 <- subset(data9, 기준년월코드==201803)[-c(1,3)]
d9_4 <- subset(data9, 기준년월코드==201804)[-c(1,3)]
head(d9_3)
head(d9_4)



## 데이터 inner join


## 3월 - 상권
market_3 <- merge(d1_3, d6_3, by="상권코드")
market_3 <- merge(market_3, d7_3, by="상권코드")
market_3 <- merge(market_3, d8_3, by="상권코드")
market_3 <- merge(market_3, d9_3, by="상권코드")
head(market_3)
str(market_3)
dim(market_3)

sum(is.na(market_3))
market_3 <- na.omit(market_3)
sum(is.na(market_3))

write.csv(market_3, "market_3.csv", row.names=FALSE)


## 4월 - 상권
market_4 <- merge(d1_4, d6_4, by="상권코드")
market_4 <- merge(market_4, d7_4, by="상권코드")
market_4 <- merge(market_4, d8_4, by="상권코드")
market_4 <- merge(market_4, d9_4, by="상권코드")
head(market_4)
str(market_4)
dim(market_4)

sum(is.na(market_4))
market_4 <- na.omit(market_4)
sum(is.na(market_4))

write.csv(market_4, "market_4.csv", row.names=FALSE)

# 구 데이터
locat <- read.csv("entrc_seoul.csv")
head(locat)

# 구 데이터와 join
market_3 <- read.csv("market_3.csv")
market_4 <- read.csv("market_4.csv")

market_3 <- merge(market_3,locat, by="상권코드명")
market_4 <- merge(market_4,locat, by="상권코드명")
sum(is.na(market_3)) # 결측치X
sum(is.na(market_4)) # 결측치X

str(market_3)
dim(market_3)
dim(market_4)
str(market_4)

write.csv(market_3,"market_3.csv", row.names=FALSE)
write.csv(market_4,"market_4.csv", row.names=FALSE)

getwd()
setwd("C:\\Users\\student\\Desktop\\데이터\\정제데이터")
market_3 <- read.csv("market_3.csv")
market_4 <- read.csv("market_4.csv")


data <- rbind(market_3,market_4)
data <- read.csv("C:\\Users\\student\\Desktop\\데이터\\정제데이터\\data2.csv")
head(data)

write.csv(data, "data2.csv", row.names=FALSE)

str(data)

# 당월매출금액 상권 내 점포수로 나누고 다시 일어들임
data <- read.csv("C:\\Users\\student\\Desktop\\데이터\\data2.csv")
library(sqldf)
newData <- sqldf("select 지역구분 as 'gu',
                 sum(당월매출금액)/(2*count(당월매출금액)) as 'totalProfit',
                 sum(남성매출금액)/(2*count(당월매출금액)) as 'maleProfit',
                 sum(여성매출금액)/(2*count(당월매출금액)) as 'femaleProfit',
                 sum(연령대10매출금액)/(2*count(당월매출금액)) as 'profit_10',
                 sum(연령대20매출금액)/(2*count(당월매출금액)) as 'profit_20',
                 sum(연령대30매출금액)/(2*count(당월매출금액)) as 'profit_30',
                 sum(연령대40매출금액)/(2*count(당월매출금액)) as 'profit_40',
                 sum(연령대50매출금액)/(2*count(당월매출금액)) as 'profit_50',
                 sum(연령대60이상매출금액)/(2*count(당월매출금액)) as 'profit_60',
                 sum(총상주인구수)/2 as 'totalLivingPeople',
                 sum(남성상주인구수)/2 as 'maleLivingPeople',
                 sum(여성상주인구수)/2 as 'femaleLivingPeople',		
                 sum(연령대10상주인구수)/2 as 'LivingPeople_10',
                 sum(연령대20상주인구수)/2 as 'LivingPeople_20',
                 sum(연령대30상주인구수)/2 as 'LivingPeople_30',
                 sum(연령대40상주인구수)/2 as 'LivingPeople_40',
                 sum(연령대50상주인구수)/2 as 'LivingPeople_50',
                 sum(연령대60이상상주인구수)/2 as 'LivingPeople_60',
                 sum(총직장인구수)/2 as 'totalWorkingPeople',
                 sum(남성직장인구수)/2 as 'maleWorkingPeople',
                 sum(여성직장인구수)/2 as 'femaleWorkingPeople',		
                 sum(연령대10직장인구수)/2 as 'WorkingPeople_10',
                 sum(연령대20직장인구수)/2 as 'WorkingPeople_20',
                 sum(연령대30직장인구수)/2 as 'WorkingPeople_30',
                 sum(연령대40직장인구수)/2 as 'WorkingPeople_40',
                 sum(연령대50직장인구수)/2 as 'WorkingPeople_50',
                 sum(연령대60이상직장인구수)/2 as 'WorkingPeople_60',
                 sum(총유동인구수)/2 as 'totalMovingPeople',
                 sum(남성유동인구수)/2 as 'maleMovingPeople',
                 sum(여성유동인구수)/2 as 'femaleMovingPeople',		
                 sum(연령대10유동인구수)/2 as 'MovingPeople_10',
                 sum(연령대20유동인구수)/2 as 'MovingPeople_20',
                 sum(연령대30유동인구수)/2 as 'MovingPeople_30',
                 sum(연령대40유동인구수)/2 as 'MovingPeople_40',
                 sum(연령대50유동인구수)/2 as 'MovingPeople_50',
                 sum(연령대60이상유동인구수)/2 as 'MovingPeople_60'
                 from data group by 지역구분")

write.csv(newData, "market.csv", row.names=FALSE)
str(newData)

