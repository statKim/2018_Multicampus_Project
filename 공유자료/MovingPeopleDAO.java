package model;

import java.sql.ResultSet;

import model.dto.MovingPeopleDTO;
import util.DBUtil;

public class ProfitDAO {

	public static ArrayList<MovingPeopleDTO> getAll() throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		
		ArrayList<MovingPeopleDTO> all = null;
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select * from movingpeople");
			rset = pstmt.executeQuery();
			
			//문제 없이 검색된 직후 실질적인 ArrayList객체 생성
			//?왜 접속 문제등이 발생될 경우엔 의미없는 객체는 안 만드는게 좋기 때문
			all = new ArrayList<>();
			while(rset.next()) {
				all.add(new MovingPeopleDTO(rset.getString(1), rset.getInt(2), rset.getInt(3), rset.getInt(4), 
										rset.getInt(5), rset.getInt(6), rset.getInt(7), rset.getInt(8), 
										rset.getInt(9), rset.getInt(10)
										));
			}
		}finally {
			DBUtil.close(con, pstmt, rset);
		}
		
		return all;
	}
	
}
