package com.shop.comment.shopcomment.service.impl;

import com.shop.comment.shopcomment.dao.UserDao;
import com.shop.comment.shopcomment.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;

/**
 * @version v1.0
 * @ProjectName: shopcomment
 * @ClassName: UserServiceImpl
 * @Description: TODO(一句话描述该类的功能)
 * @Author: yan
 * @Date: 2020/3/25 10:28
 */
@Service
@Slf4j
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public Object register(String username, String password, String usertype) {
        return userDao.register(username, password, usertype);
    }

    @Override
    public Object login(String username, String password) {
        return userDao.login(username, password);
    }

    @Override
    public Object publishComment(HttpServletRequest httpServletRequest) {
        return userDao.publishComment(httpServletRequest);
    }

    @Override
    public Object shopCommentList(String storeId) {
        return userDao.shopCommentList(storeId);
    }

    @Override
    public Object del(String commentId) {
        return userDao.del(commentId);
    }

    @Override
    public Object allShopCommentList() {
        return userDao.allShopCommentList();
    }

    @Override
    public Object allUserList() {
        return userDao.allUserList();
    }

    @Override
    public Object delUser(String userId) {
        return userDao.delUser(userId);
    }

    @Override
    public Object myCommentList(String username) {
        return userDao.myCommentList(username);
    }
}
