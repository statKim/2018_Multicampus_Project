## 최종 분석 데이터로 정제 과정
setwd("C:\\Users\\student\\Desktop\\데이터\\정제데이터")
getwd()

data <- read.csv("C:\\Users\\student\\Desktop\\데이터\\정제데이터\\data2.csv")
head(data)

rent <- read.csv("C:\\Users\\student\\Desktop\\데이터\\서울시임대료_18년1분기.csv")
head(rent)
str(rent)

library(sqldf)

dt <- merge(data, rent, by="구")
str(dt)
write.csv(dt, "finalData.csv", row.names=FALSE)
# 엑셀로 전처리

# 엑셀로 필요없는 열 없앤 데이터 불러오기
data <- read.csv("data.csv")
head(data)
sum(is.na(data)) # 결측치 없음
levels(data$region)


max(data$workingPeople)
min(data$workingPeople)

# 구 데이터
locat <- read.csv("entrc_seoul.csv")
head(locat)

# dummy variable 생성1:강남지역,  2.영등포신촌지역, 3.도심지역, 4.기타지역)
data <- transform(data,
                  region = ifelse(region=="강남지역", "1", 
                                  (ifelse(region=="영등포신촌지역", "2",
                                          (ifelse(region=="도심지역", "3", "4"))))))
head(data)
str(data)

# region변수 factor 지정 
data$region <- factor(data$region)

### 분석용 최종 데이터(market)
market <- data[,-7]
head(market)
str(market)


cor(market[1:6])
plot(market[1:5])


### random forest

library(randomForest)
rf.market<-randomForest(profit~., data=market, ntree=500, mtry=3, importance=T)
rf.market
summary(rf.market)

names(rf.market)
head(rf.market$predicted,30)

importance(rf.market,type=1)

profit.hat = predict(rf.market, newdata=market)
mean((market$profit-profit.hat)^2) #mean square error(mse)

plot(market$profit, profit.hat,xlab='Observed Values', ylab='Fitted Values')
abline(0,1)


head(market)
str(market)
library(randomForest)
set.seed(1000)
train <- sample(1:nrow(market),nrow(market)*0.8) #회귀트리와 같아 1/2만 훈련셋
market.test <- market[-train,"profit"]
rf.market <- randomForest(profit~.,market,subset=train,mtry=4, ntree=500, importance=T, do.trace=500)
rf.market
yhat.rf <- predict(rf.market,market[-train,])
mean((yhat.rf-market.test)^2)
plot(rf.market)




# k-fold cv에서 hyperpara k 찾기
set.seed(1000)
k <- 10
n <- dim(market)[1]
str(market)
#ind <- (1:n)%%k+1
#folds <- sample(ind,n)
rf_mse <- matrix(0,ncol=10,nrow=k)
for (i in 2:k){
  ind <- (1:n)%%i+1
  folds <- sample(ind,n)
  for (j in 1:i){
    rf_fit <- randomForest(profit~., data=market[folds!=j,1:7], mtry=3, ntree=5, importance=T)
    pred <- predict(rf_fit,newdata=market[folds==j,1:7])
    rf_mse[j,i] <- mean((pred-market$profit[folds==j])^2)	
  }
}
apply(rf_mse,2,mean)


# cv로 k-fold cv에서 hyperpara mtry 찾기
library(randomForest)
set.seed(1000)
k <- 10
n <- dim(market)[1]
ind <- (1:n)%%k+1
folds <- sample(ind,n)
rf_mse <- matrix(0,ncol=6,nrow=k)
for (i in 1:k){
  for (j in 1:6){
    rf_fit <- randomForest(profit~., data=market[folds!=i,1:7], mtry=j, ntree=500, importance=T)
    pred <- predict(rf_fit,newdata=market[folds==i,1:7])
    rf_mse[i,j] <- mean((pred-market$profit[folds==i])^2)	
  }
  rf_list <- append(rf_list, ls)
}
rf_mse_mtry <- rf_mse
apply(rf_mse_mtry,2,mean)
plot(apply(rf_mse_mtry,2,mean), type="l") # 최적 mtry = 4


# k-fold cv에서 hyperpara k 찾기
set.seed(1000)
k <- 10
n <- dim(market)[1]
str(market)
rf_mse <- matrix(0,ncol=10,nrow=k)
for (i in 2:k){
  ind <- (1:n)%%i+1
  folds <- sample(ind,n)
  for (j in 1:i){
    rf_fit <- randomForest(profit~., data=market[folds!=j,1:7], mtry=4, ntree=500, importance=T)
    pred <- predict(rf_fit,newdata=market[folds==j,1:7])
    rf_mse[j,i] <- mean((pred-market$profit[folds==j])^2)	
  }
}
apply(rf_mse,2,mean)
result <- rep(0,9)
for (i in 2:10) {
  result[i-1] <- sum(rf_mse[,i])/i
}
result
plot(result, type="l") 


## 최종!!
## 10-fold CV로 mtry=4로 실행
set.seed(1000)
k <- 10
n <- dim(market)[1]
ind <- (1:n)%%k+1
folds <- sample(ind,n)
rf_mse <- rep(0,10)
#rf_mse <- matrix(0,ncol=5,nrow=k)
for (i in 1:k){
  #for (j in 1:5){
  rf_fit <- randomForest(profit~., data=market[folds!=i,1:7], mtry=4, ntree=1000, importance=T)
  pred <- predict(rf_fit,newdata=market[folds==i,1:7])
  #rf_mse[i,j] <- mean((pred-market$profit[folds==i])^2)	
  rf_mse[i] <- mean((pred-market$profit[folds==i])^2)	
  #}
}
mean(rf_mse)
plot(rf_mse, type="l")
rf_fit_1000 <- rf_fit
rf_mse_1000 <- rf_mse


str(market)

# 랜덤포레스트 모형
library(randomForest)
set.seed(1000)
n <- dim(market)[1]
train <- sample(1:n, 0.9*n)
model_rf <- randomForest(profit~., data=market[train,], mtry=3, ntree=500, importance=T, do.trace=500)
model_rf
plot(model_rf)
pred_test <- predict(model_rf,newdata=market[-train,])
rf_mse <- mean((pred_test-market$profit[-train])^2)	
rf_mse

importance(model_rf)
varImpPlot(model_rf, main = "Variable importance as measured by Random forest")

market[1,]
predict(model_rf, newdata=d)
predict(model_rf, newdata=market[1,])

#### input값 test(profit은 형식 맞추기 위해서 넣음 => 연산에는 사용 안함)
d <- data.frame("profit"=0, "livingPeople"=377, "numberStore"=3, "workingPeople"=684,
                "movingPeople"=46866, "rent"=61.97619, "region"=factor(1,c(1,2,3,4)))

## db 받아왔을 때 예시
test_data <- data.frame("profit"=0, "region"="강서구", "livingPeople"=377, 
                        "numberStore"=3, "workingPeople"=684, "movingPeople"=46866)
rent_test<-rent
colnames(rent_test) <- c("region", "rent", "region_1")
head(rent_test)
test_data <- merge(test_data, rent_test, by="region")
test_data
# region 변수 수정(1:강남지역,  2.영등포신촌지역, 3.도심지역, 4.기타지역)
test_data <- transform(test_data,
                       region = ifelse(region_1=="강남지역", "1", 
                                       (ifelse(region_1=="영등포신촌지역", "2",
                                               (ifelse(region_1=="도심지역", "3", "4"))))))

test_data$region <- factor(test_data$region, c(1,2,3,4))
str(test_data)
test_data <- data.frame(test_data[2:7], test_data[1])
test_data
str(test_data)
predict(model_rf, newdata=test_data)

