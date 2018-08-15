package controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.MovingPeopleDAO;
import model.dto.MovingPeopleDTO;

@WebServlet("/cont")
public class MovingPeopleController extends HttpServlet {
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		/* 정상 실행
		 * 		- 데이터 있다
		 * 			요청 객체에 데이터 저장해서 ajax/res.jsp로 이동
		 * 		- 데이터 없다
		 * 			msg.jsp로 요청 데이터가 없습니다.
		 * 비정상 실행
		 * 		- error.jsp
		 * 			죄송합니다. 잠시후에 다시 요청해 주세요
		 */
		String url = "error.jsp";
		ArrayList<MovingPeopleDTO> data = null;
		try {
			data = MovingPeopleDAO.getAll();
			if(data.size() != 0) {
				request.setAttribute("datas", data);
				url = "jsonRes.jsp";
			}else {
				request.setAttribute("message", "요청한 데이터는 없습니다");
				url = "msg.jsp";
			}
		} catch (SQLException e) {
			e.printStackTrace();//예외 발생 히스토리를 관리자가 콘솔창에서 확인
			request.setAttribute("errorMsg", "죄송합니다, 재 요청해주세요");
		}
		request.getRequestDispatcher(url).forward(request, response);
		
	}

}


