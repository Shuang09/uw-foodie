package com.uwfoodie.bean;

public class Comment {
    private String userName;
    private Integer outletId;
    private String comment;
    private Integer score;


    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public Integer getOutletId() {
        return outletId;
    }

    public void setOutletID(Integer outletId) {
        this.outletId = outletId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
