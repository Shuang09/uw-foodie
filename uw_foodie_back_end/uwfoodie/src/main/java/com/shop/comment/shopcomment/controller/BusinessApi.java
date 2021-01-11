package com.shop.comment.shopcomment.controller;

import com.shop.comment.shopcomment.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * @version v1.0
 * @ProjectName: shopcomment
 * @ClassName: BusinessApi
 * @Description: TODO(一句话描述该类的功能)
 * @Author: yan
 * @Date: 2020/3/24 15:38
 */
@RestController
@RequestMapping("/business")
@RequiredArgsConstructor
public class BusinessApi {

    private final UserService userService;


    /**
     * log in
     *
     * @param username
     * @param password
     * @return
     */
    @RequestMapping("/login")
    public Object login(@RequestParam String username, @RequestParam String password) {
        return userService.login(username, password);
    }

    /**
     * register
     *
     * @param username
     * @param password
     * @param usertype
     * @return
     */
    @RequestMapping("/register")
    public Object register(@RequestParam String username, @RequestParam String password, @RequestParam String usertype) {

        return userService.register(username, password, usertype);
    }

    /**
     * post comment
     *
     * @param httpServletRequest
     * @return
     */
    @RequestMapping("/publishComment")
    public Object publishComment(HttpServletRequest httpServletRequest) {
        return userService.publishComment(httpServletRequest);
    }

    /**
     * outlet comment
     *
     * @param storeId
     * @return
     */

    @RequestMapping("/shopCommentList")
    public Object shopCommentList(@RequestParam String storeId) {
        return userService.shopCommentList(storeId);
    }


    @RequestMapping("/del/{commentId}")
    public Object del(@PathVariable String commentId) {
        return userService.del(commentId);
    }

    /**
     * all comment
     *
     * @return
     */
    @RequestMapping("/allShopCommentList")
    public Object allShopCommentList() {
        return userService.allShopCommentList();
    }


    /**
     * all user
     *
     * @return
     */
    @RequestMapping("/allUserList")
    public Object allUserList() {
        return userService.allUserList();
    }

    /**
     * delete user
     *
     * @param userId
     * @return
     */
    @RequestMapping("/delUser/{userId}")
    public Object delUser(@PathVariable String userId) {
        return userService.delUser(userId);
    }

    /**
     * my comment
     *
     * @param username
     * @return
     */
    @RequestMapping("/myCommentList")
    public Object myCommentList(@RequestParam String username) {
        return userService.myCommentList(username);
    }


}
