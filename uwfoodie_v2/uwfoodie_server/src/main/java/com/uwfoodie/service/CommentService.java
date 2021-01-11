package com.uwfoodie.service;

import com.uwfoodie.bean.Comment;
import com.uwfoodie.bean.Result;
import com.uwfoodie.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(rollbackFor = RuntimeException.class)
public class CommentService {

    @Autowired
    private CommentMapper commentMapper;

    public Result addComment(Comment comment) {
        Result result = new Result();
        result.setSuccess(false);
        result.setDetail(null);
        try {
            commentMapper.addComment(comment);
            result.setMsg("add comment successfully");
            result.setSuccess(true);
            result.setDetail(comment);
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;

    }

    public Result showComment(Integer storeId) {
        Result result = new Result();
        result.setSuccess(false);
        result.setDetail(null);
        try {
            List<Comment> comments = commentMapper.showComment(storeId);
            System.out.println(storeId);
            result.setMsg("successfully");
            result.setSuccess(true);
            result.setDetail(comments);
        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
}
