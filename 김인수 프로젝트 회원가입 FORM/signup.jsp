<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>자러 왔다.</title>
<link rel ="stylesheet" type ="text/css" href ="css/signup.css">
</head>
<body>
<div id ="toppadding"></div>
<form method ="post" action ="newprocess" > <!-- 서버로 데이터 넘기는 form --> 
	<div style ="text-align:center">

	<table>
		<tr><td height=100px></td></tr>    <!-- 간격띠는 행 -->
		<tr><td colspan="2"><a href ="form.jsp"><img width="135px" src = "image/이것이휴게실이다3.png"></a></td></tr>    <!-- 자러왔다. 이미지  -->
		<tr ><td colspan="2" height="20px"><h3>회원가입</h3></td></tr>
		<tr colspan="2"><td align ="left" colspan="2">학번. </td></tr>
		<tr><td colspan="2" ><input type ="text" id="id" name ="id" required autofocus placeholder="학번을 입력하세요." ></td></tr>
		<tr><td align="left" colspan="2"> 비밀번호. </td></tr>
		<tr><td colspan="2"><input type ="password" id ="pw" name ="pw"  required placeholder="비밀번호를 입력하세요."></td></tr>
		<tr><td colspan="2" align="left"> 비밀번호 확인.  </td></tr>
		<tr><td colspan="2"><input type ="password" id= "pwcheck" name ="pwcheck"  required placeholder="비밀번호를 입력하세요."></td></tr>
		<tr><td colspan="2" align ="left"> 이름.  </td></tr>
		<tr><td colspan="2"><input type ="text" id ="name" name ="name"  required placeholder="너의 이름은?"></td></tr>
		<tr><td colspan="2" align ="left"> 생년월일.  </td></tr>
		<tr><td colspan="2"><input type ="text" id="birth" name ="birth" required placeholder="EX)941005"></td></tr>
		<tr><td colspan="2" align ="left"> 학과. </td></tr>
		<tr><td colspan="2"><input type ="text" id ="department" name ="department"  required placeholder="학과를 입력하세요."></td></tr>
		<tr><td colspan="2" align="left">닉네임</td></tr>
		<tr colspan="2"><td width="80%"><input  height="100%" type ="text" id ="nick" name ="nick" ></td><td width="20%"><input  width="98%" type ="button" id = "nickchangebtn" ></td></tr>
		<tr colspan ="2"><td></td></tr>
		<tr><td colspan="2"><input  id ="check" type ="image" src="image/signup.png" value="가입" height="100%"></td></tr> 
	
	</table>
	</div>
</form>
</body>
</html>