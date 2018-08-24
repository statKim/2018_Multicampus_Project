#####################
#### R_DB 연동
#### 	1. 웹에서 받아온 데이터 db에 저장
####	2. 만들어놓은 model(.rData 파일) loading
####	3. db에서 input 값 가져옴
####	4. model로 predict
####	5. output값 db에 저장
#####################

# model loading(.rData 파일로 작업공간 불러오기)
load(file="C:/Users/kinso/testbrackets/DefualtExample/R_model/rf_model_market.RData")

# DB 접속
library(rJava)
library(DBI)
library(RMySQL)
library(randomForest)

# MySql DB Connection 
con <- dbConnect(MySQL(), dbname = 'test', user = 'root', password="1234")

# db의 table 확인
#dbListTables(con)

## 작업공간에 저장할것!!! 
#rent_test <- rent
#colnames(rent_test) <- c("region", "rent", "region_1")


# DB에서 데이터 가져옴(select 문)
input <- dbGetQuery(con, "select * from predict")
for (col in colnames(input)) {
  try ({
    Encoding(input[[col]]) <- "UTF-8"
  }, silent=T)
}
#input


### 가져온 데이터를 predict하기 위한 형태로 변환
pred_data <- data.frame("profit"=0, input[dim(input)[1],1:5])

#head(rent_test)


pred_data <- merge(pred_data, rent_test, by="region")

# mysql에서 cmd로 하니까 문자가 다 깨짐 -> 이런식으로 해결!!
x <- c(levels(rent_test[,3]))
#x = c("강남지역"       "기타지역"       "도심지역"       "영등포신촌지역")
#pred_data
# region 변수 수정(1:강남지역,  2.영등포신촌지역, 3.도심지역, 4.기타지역)
pred_data <- transform(pred_data,
                       region = ifelse(region_1 == x[1], "1", 
                                       (ifelse(region_1 == x[4], "2",
                                               (ifelse(region_1 == x[3], "3", "4"))))))

pred_data$region <- factor(pred_data$region, c(1,2,3,4))
#str(pred_data)
pred_data <- data.frame(pred_data[2:7], pred_data[1])
#pred_data
#str(pred_data)

# model 이용하여 predict(.rData파일에 저장된 작업공간)
#db table에서 가장 마지막에 추가된 데이터 사용
pred <- predict(model_rf, newdata=pred_data)
#pred

# predict 결과 다시 db로 전달
query <- paste("UPDATE predict SET predOutput =", pred, "where predOutput is null")
#query
dbGetQuery(con, query)

