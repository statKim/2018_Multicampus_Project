package model.dto;

public class ProfitDTO {

	String servicecodename; //상권코드명
	int avgrunning; //유사업종점포수
	float similarstore; //평균영업개월수
	int monthprofit; //당월매출금액
	float ratemenprofit; //남성 매출비율
	float ratewomenprofit; //여성매출비율
	float rate10sprofit; //10대 매출비율
	float rate20sprofit; //20대 매출비율
	float rate30sprofit; //30대 매출비율
	float rate40sprofit; //40대 매출비율
	float rate50sprofit; //50대 매출비율
	float rate60sprofit; //60대 매출비율
	int menprofit; //남성 매출금액
	int womenprofit; //여성매출금액
	int profit10; //10대 매출금액
	int profit20; //20대 매출금액
	int profit30; //30대 매출금액
	int profit40; //40대 매출금액
	int profit50; //50대 매출금액
	int profit60; //60대 매출금액
	
	public ProfitDTO() {}
	public ProfitDTO(String servicecodename, int avgrunning, float similarstore, int monthprofit, float ratemenprofit,
			float ratewomenprofit, float rate10sprofit, float rate20sprofit, float rate30sprofit, float rate40sprofit,
			float rate50sprofit, float rate60sprofit, int menprofit, int womenprofit, int profit10, int profit20,
			int profit30, int profit40, int profit50, int profit60) {
		super();
		this.servicecodename = servicecodename;
		this.avgrunning = avgrunning;
		this.similarstore = similarstore;
		this.monthprofit = monthprofit;
		this.ratemenprofit = ratemenprofit;
		this.ratewomenprofit = ratewomenprofit;
		this.rate10sprofit = rate10sprofit;
		this.rate20sprofit = rate20sprofit;
		this.rate30sprofit = rate30sprofit;
		this.rate40sprofit = rate40sprofit;
		this.rate50sprofit = rate50sprofit;
		this.rate60sprofit = rate60sprofit;
		this.menprofit = menprofit;
		this.womenprofit = womenprofit;
		this.profit10 = profit10;
		this.profit20 = profit20;
		this.profit30 = profit30;
		this.profit40 = profit40;
		this.profit50 = profit50;
		this.profit60 = profit60;
	}
	
	public String getServicecodename() {
		return servicecodename;
	}
	public void setServicecodename(String servicecodename) {
		this.servicecodename = servicecodename;
	}
	public int getAvgrunning() {
		return avgrunning;
	}
	public void setAvgrunning(int avgrunning) {
		this.avgrunning = avgrunning;
	}
	public float getSimilarstore() {
		return similarstore;
	}
	public void setSimilarstore(float similarstore) {
		this.similarstore = similarstore;
	}
	public int getMonthprofit() {
		return monthprofit;
	}
	public void setMonthprofit(int monthprofit) {
		this.monthprofit = monthprofit;
	}
	public float getRatemenprofit() {
		return ratemenprofit;
	}
	public void setRatemenprofit(float ratemenprofit) {
		this.ratemenprofit = ratemenprofit;
	}
	public float getRatewomenprofit() {
		return ratewomenprofit;
	}
	public void setRatewomenprofit(float ratewomenprofit) {
		this.ratewomenprofit = ratewomenprofit;
	}
	public float getRate10sprofit() {
		return rate10sprofit;
	}
	public void setRate10sprofit(float rate10sprofit) {
		this.rate10sprofit = rate10sprofit;
	}
	public float getRate20sprofit() {
		return rate20sprofit;
	}
	public void setRate20sprofit(float rate20sprofit) {
		this.rate20sprofit = rate20sprofit;
	}
	public float getRate30sprofit() {
		return rate30sprofit;
	}
	public void setRate30sprofit(float rate30sprofit) {
		this.rate30sprofit = rate30sprofit;
	}
	public float getRate40sprofit() {
		return rate40sprofit;
	}
	public void setRate40sprofit(float rate40sprofit) {
		this.rate40sprofit = rate40sprofit;
	}
	public float getRate50sprofit() {
		return rate50sprofit;
	}
	public void setRate50sprofit(float rate50sprofit) {
		this.rate50sprofit = rate50sprofit;
	}
	public float getRate60sprofit() {
		return rate60sprofit;
	}
	public void setRate60sprofit(float rate60sprofit) {
		this.rate60sprofit = rate60sprofit;
	}
	public int getMenprofit() {
		return menprofit;
	}
	public void setMenprofit(int menprofit) {
		this.menprofit = menprofit;
	}
	public int getWomenprofit() {
		return womenprofit;
	}
	public void setWomenprofit(int womenprofit) {
		this.womenprofit = womenprofit;
	}
	public int getProfit10() {
		return profit10;
	}
	public void setProfit10(int profit10) {
		this.profit10 = profit10;
	}
	public int getProfit20() {
		return profit20;
	}
	public void setProfit20(int profit20) {
		this.profit20 = profit20;
	}
	public int getProfit30() {
		return profit30;
	}
	public void setProfit30(int profit30) {
		this.profit30 = profit30;
	}
	public int getProfit40() {
		return profit40;
	}
	public void setProfit40(int profit40) {
		this.profit40 = profit40;
	}
	public int getProfit50() {
		return profit50;
	}
	public void setProfit50(int profit50) {
		this.profit50 = profit50;
	}
	public int getProfit60() {
		return profit60;
	}
	public void setProfit60(int profit60) {
		this.profit60 = profit60;
	}
	
	@Override
	public String toString() {
		return "ProfitDTO [servicecodename=" + servicecodename + ", avgrunning=" + avgrunning + ", similarstore="
				+ similarstore + ", monthprofit=" + monthprofit + ", ratemenprofit=" + ratemenprofit
				+ ", ratewomenprofit=" + ratewomenprofit + ", rate10sprofit=" + rate10sprofit + ", rate20sprofit="
				+ rate20sprofit + ", rate30sprofit=" + rate30sprofit + ", rate40sprofit=" + rate40sprofit
				+ ", rate50sprofit=" + rate50sprofit + ", rate60sprofit=" + rate60sprofit + ", menprofit=" + menprofit
				+ ", womenprofit=" + womenprofit + ", profit10=" + profit10 + ", profit20=" + profit20 + ", profit30="
				+ profit30 + ", profit40=" + profit40 + ", profit50=" + profit50 + ", profit60=" + profit60 + "]";
	}
	
	
}
