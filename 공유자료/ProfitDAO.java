package model;

import java.sql.ResultSet;

import model.dto.ProfitDTO;
import util.DBUtil;

public class ProfitDAO {

	public static ArrayList<ProfitDTO> getAll() throws SQLException{
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		
		ArrayList<ProfitDTO> all = null;
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select * from profit");
			rset = pstmt.executeQuery();
			
			//문제 없이 검색된 직후 실질적인 ArrayList객체 생성
			//?왜 접속 문제등이 발생될 경우엔 의미없는 객체는 안 만드는게 좋기 때문
			all = new ArrayList<>();
			while(rset.next()) {
				all.add(new ProfitDTO(rset.getString(1), rset.getInt(2), rset.getFloat(3), rset.getInt(4), 
										rset.getFloat(5), rset.getFloat(6), rset.getFloat(7), rset.getFloat(8), 
										rset.getFloat(9), rset.getFloat(10), rset.getFloat(11), rset.getFloat(12),
										rset.getInt(13), rset.getInt(14), rset.getInt(15), rset.getInt(16),
										rset.getInt(17), rset.getInt(18), rset.getInt(19), rset.getInt(20)
										));
			}
		}finally {
			DBUtil.close(con, pstmt, rset);
		}
		
		return all;
	}
	
}
