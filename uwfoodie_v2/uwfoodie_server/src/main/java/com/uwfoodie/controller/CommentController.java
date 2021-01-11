package com.uwfoodie.controller;

import com.uwfoodie.bean.Comment;
import com.uwfoodie.bean.Result;
import com.uwfoodie.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController {


    @Autowired
    private CommentService commentService;

    @PostMapping()
    public Result addComment(Comment comment) {
        return commentService.addComment(comment);
    }

    @GetMapping(value = "/{id}")
    public Result showComment(@PathVariable("id") Integer id) {
        return commentService.showComment(id);
    }


}
