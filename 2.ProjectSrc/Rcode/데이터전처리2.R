setwd("C:/Users/student/Desktop/데이터")



x <- merge(data1, data2, by="상권코드")
sum(is.na(x))
head(x)
dim(x)
new_x <- na.omit(x)
dim(new_x)
summary(data)




data1 <- read.csv("상권-추정매출.csv")
str(data1)
d1_3 <- subset(data1, 기준년월코드==201803 & 서비스업종코드명=="커피음료")
d1_4 <- subset(data1, 기준년월코드==201804 & 서비스업종코드명=="커피음료")
head(d1_3)
head(d1_4)
str(d1_3)
str(d1_4)

data2 <- read.csv("상권배후지-상주인구.csv")
str(data2)
d2_3 <- subset(data2, 기준년월코드==201803)[c(2,4:12)]
d2_4 <- subset(data2, 기준년월코드==201804)[c(2,4:12)]
head(d2_3)
head(d2_4)
str(d2_3)

data3 <- read.csv("상권배후지-소득소비.csv")
str(data3)
d3_3 <- subset(data3, 기준년월코드==201803)[c(2,4:15)]
d3_4 <- subset(data3, 기준년월코드==201804)[c(2,4:15)]
head(d3_3)
head(d3_4)
str(d3_3)

data4 <- read.csv("상권배후지-점포.csv")
str(data4)
d4_3 <- subset(data4, 기준년월코드==201803 & 서비스업종코드명=="커피음료")[-c(1,3)]
d4_4 <- subset(data4, 기준년월코드==201804 & 서비스업종코드명=="커피음료")[-c(1,3)]
head(d4_3)
head(d4_4)

data5 <- read.csv("상권배후지-추정유동인구.csv")
str(data5)
d5_3 <- subset(data5, 기준년월코드==201803)[-1]
d5_4 <- subset(data5, 기준년월코드==201804)[-1]
head(d5_3)
head(d5_4)



data6 <- read.csv("상권-상주인구.csv")
str(data6)
d6_3 <- subset(data6, 기준년월코드==201803)
d6_4 <- subset(data6, 기준년월코드==201804)
head(d6_3)
head(d6_4)

data7 <- read.csv("상권-점포.csv")
str(data7)
d7_3 <- subset(data7, 기준년월코드==201803 & 서비스업종코드명=="커피음료")[-c(1,3)]
d7_4 <- subset(data7, 기준년월코드==201804 & 서비스업종코드명=="커피음료")[-c(1,3)]
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


## 필요 없을듯..
data10 <- read.csv("상권-집객시설.csv")
str(data10)
d10_3 <- subset(data10, 기준년월코드==201803)
d10_4 <- subset(data10, 기준년월코드==201804)
head(d10_3)
head(d10_4)

## 데이터 inner join
## 3월 - 상권배후지
marketback_3 <- merge(d1_3, d2_3, by="상권코드")
marketback_3 <- merge(marketback_3, d3_3, by="상권코드")
marketback_3 <- merge(marketback_3, d4_3, by="상권코드")
marketback_3 <- merge(marketback_3, d5_3, by="상권코드")
head(marketback_3)
str(marketback_3)
dim(marketback_3)

write.csv(marketback_3, "marketback_3.csv")

## 3월 - 상권
market_3 <- merge(d6_3, d7_3, by="상권코드")
market_3 <- merge(market_3, d8_3, by="상권코드")
market_3 <- merge(market_3, d9_3, by="상권코드")
head(market_3)
str(market_3)
dim(market_3)

write.csv(market_3, "market_3.csv")

## 4월 - 상권배후지
marketback_4 <- merge(d1_4, d2_4, by="상권코드")
marketback_4 <- merge(marketback_4, d3_4, by="상권코드")
marketback_4 <- merge(marketback_4, d4_4, by="상권코드")
marketback_4 <- merge(marketback_4, d5_4, by="상권코드")
head(marketback_4)
str(marketback_4)
dim(marketback_4)

write.csv(marketback_4, "marketback_4.csv")

## 4월 - 상권
market_4 <- merge(d6_4, d7_4, by="상권코드")
market_4 <- merge(market_4, d8_4, by="상권코드")
market_4 <- merge(market_4, d9_4, by="상권코드")
head(market_4)
str(market_4)
dim(market_3)

write.csv(market_3, "market_3.csv")


