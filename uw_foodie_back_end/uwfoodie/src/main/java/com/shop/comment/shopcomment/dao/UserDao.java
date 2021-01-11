package com.shop.comment.shopcomment.dao;

import javax.servlet.http.HttpServletRequest;

/**
 * @version v1.0
 * @ProjectName: shopcomment
 * @ClassName: UserDao
 * @Description: TODO(一句话描述该类的功能)
 * @Author: xt
 * @Date: 2020/3/25 11:43
 */
public interface UserDao {
    Object register(String username, String password, String usertype);

    Object login(String username, String password);

    Object publishComment(HttpServletRequest httpServletRequest);

    Object shopCommentList(String storeId);

    Object del(String commentId);

    Object allShopCommentList();

    Object allUserList();

    Object delUser(String userId);

    Object myCommentList(String username);
}
