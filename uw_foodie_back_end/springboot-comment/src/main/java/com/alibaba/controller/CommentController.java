package com.alibaba.controller;


import com.alibaba.bean.Comment;
import com.alibaba.bean.Result;
import com.alibaba.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController {


    @Autowired
    private CommentService commentService;

    @PostMapping(value = "/addComment")
    public Result addComment(Comment comment) {
        return commentService.addComment(comment);
    }

    @PostMapping(value = "/showComment")
    public Result showComment(Integer storeId) {
        return commentService.showComment(storeId);
    }


}
