package com.shop.comment.shopcomment.dao.impl;

import com.shop.comment.shopcomment.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @version v1.0
 * @ProjectName: shopcomment
 * @ClassName: UserDaoImpl
 * @Description: TODO(一句话描述该类的功能)
 * @Author: yan
 * @Date: 2020/3/24 11:57
 */
@Repository
public class UserDaoImpl implements UserDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public Object register(String username, String password, String usertype) {
        Map<String, Object> result = new HashMap<>(10);
        final List<Map<String, Object>> user = jdbcTemplate.queryForList("select * from `USER` where username=?", username);
        if (user != null && user.size() > 0) {
            result.put("code", 1);
            result.put("msg", "username is already exists");
            return result;
        }
        jdbcTemplate.update("insert into `USER`(username,password,usertype,createtime) values (?,?,?,?)", username, password, usertype, new Date().toLocaleString());
        result.put("code", 0);
        result.put("msg", "registration successful");
        return result;
    }

    @Override
    public Object login(String username, String password) {
        final List<Map<String, Object>> user = jdbcTemplate.queryForList("select * from USER where username=? and password=?", username, password);
        Map<String, Object> result = new HashMap<>(10);
        if (!user.isEmpty()) {
            result.put("code", 0);
            result.put("msg", "success");
            result.put("data", user.get(0));
            return result;
        }
        result.put("code", 1);
        result.put("msg", "unknown username or bad password");
        return result;
    }

    @Override
    public Object publishComment(HttpServletRequest httpServletRequest) {
        Map<String, Object> result = new HashMap<>(10);
        final String username = httpServletRequest.getParameter("username");
        final String outletID = httpServletRequest.getParameter("outletID");
        final String comment = httpServletRequest.getParameter("comment");
        if (StringUtils.isEmpty(username) || StringUtils.isEmpty(outletID) || StringUtils.isEmpty(comment)) {
            result.put("code", 1);
            result.put("msg", "user|outlet ID|comment cannot be empty");
            return result;
        }
        jdbcTemplate.update("insert into `COMMENT`(username,outletID,comment,createtime) values (?,?,?,?)", username, outletID, comment, new Date().toLocaleString());
        result.put("code", 0);
        result.put("msg", "comment increasing success");
        return result;
    }

    @Override
    public Object shopCommentList(String storeId) {
        Map<String, Object> result = new HashMap<>(10);
        final List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from COMMENT where outletID=?", storeId);
        result.put("code", 0);
        result.put("msg", "success");
        result.put("data", list);
        return result;
    }

    @Override
    public Object del(String commentId) {
        Map<String, Object> result = new HashMap<>(10);
        jdbcTemplate.update("delete from COMMENT where commentId=?", commentId);
        result.put("code", 0);
        result.put("msg", "success");
        return result;
    }

    @Override
    public Object allShopCommentList() {
        Map<String, Object> result = new HashMap<>(10);
        final List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from COMMENT order by commentId desc");
        result.put("code", 0);
        result.put("msg", "success");
        result.put("data", list);
        return result;
    }

    @Override
    public Object allUserList() {
        Map<String, Object> result = new HashMap<>(10);
        final List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from `USER` order by userId desc");
        result.put("code", 0);
        result.put("msg", "success");
        result.put("data", list);
        return result;
    }

    @Override
    public Object delUser(String userId) {
        Map<String, Object> result = new HashMap<>(10);
        jdbcTemplate.update("delete from `USER` where userId=?", userId);
        result.put("code", 0);
        result.put("msg", "success");
        return result;
    }

    @Override
    public Object myCommentList(String username) {
        Map<String, Object> result = new HashMap<>(10);
        final List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from COMMENT where username=?", username);
        result.put("code", 0);
        result.put("msg", "success");
        result.put("data", list);
        return result;
    }
}
