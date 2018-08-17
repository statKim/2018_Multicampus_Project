package model.dto;

public class MovingPeopleDTO {
	
	String servicecodename; //상권코드명
	int totalmp; //총유동인구수
    int menmp; //남성유동인구수
    int womenmp; //여성유동인구수
    int mp10; //10유동인구수
    int mp20; //20유동인구수
    int mp30; //30유동인구수
    int mp40; //40유동인구수
    int mp50; //50유동인구수
    int mp60; //60직장인구수
    
	public MovingPeopleDTO() {}

	public MovingPeopleDTO(String servicecodename, int totalmp, int menmp, int womenmp, int mp10, int mp20, int mp30,
			int mp40, int mp50, int mp60) {
		super();
		this.servicecodename = servicecodename;
		this.totalmp = totalmp;
		this.menmp = menmp;
		this.womenmp = womenmp;
		this.mp10 = mp10;
		this.mp20 = mp20;
		this.mp30 = mp30;
		this.mp40 = mp40;
		this.mp50 = mp50;
		this.mp60 = mp60;
	}

	public String getServicecodename() {
		return servicecodename;
	}

	public void setServicecodename(String servicecodename) {
		this.servicecodename = servicecodename;
	}

	public int getTotalmp() {
		return totalmp;
	}

	public void setTotalmp(int totalmp) {
		this.totalmp = totalmp;
	}

	public int getMenmp() {
		return menmp;
	}

	public void setMenmp(int menmp) {
		this.menmp = menmp;
	}

	public int getWomenmp() {
		return womenmp;
	}

	public void setWomenmp(int womenmp) {
		this.womenmp = womenmp;
	}

	public int getMp10() {
		return mp10;
	}

	public void setMp10(int mp10) {
		this.mp10 = mp10;
	}

	public int getMp20() {
		return mp20;
	}

	public void setMp20(int mp20) {
		this.mp20 = mp20;
	}

	public int getMp30() {
		return mp30;
	}

	public void setMp30(int mp30) {
		this.mp30 = mp30;
	}

	public int getMp40() {
		return mp40;
	}

	public void setMp40(int mp40) {
		this.mp40 = mp40;
	}

	public int getMp50() {
		return mp50;
	}

	public void setMp50(int mp50) {
		this.mp50 = mp50;
	}

	public int getMp60() {
		return mp60;
	}

	public void setMp60(int mp60) {
		this.mp60 = mp60;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("MovingPeopleDTO [servicecodename=");
		builder.append(servicecodename);
		builder.append(", totalmp=");
		builder.append(totalmp);
		builder.append(", menmp=");
		builder.append(menmp);
		builder.append(", womenmp=");
		builder.append(womenmp);
		builder.append(", mp10=");
		builder.append(mp10);
		builder.append(", mp20=");
		builder.append(mp20);
		builder.append(", mp30=");
		builder.append(mp30);
		builder.append(", mp40=");
		builder.append(mp40);
		builder.append(", mp50=");
		builder.append(mp50);
		builder.append(", mp60=");
		builder.append(mp60);
		builder.append("]");
		return builder.toString();
	}
    
	
    
}
