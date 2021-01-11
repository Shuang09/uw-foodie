package com.uwfoodie.mapper;

import com.uwfoodie.bean.Comment;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;


@Mapper
@Repository
public interface CommentMapper {

    @Insert("insert into comment values( #{userName},#{outletId},#{comment},#{score})")
    void addComment(Comment comment);

    @Select(value = "select * from COMMENT where outlet_id = #{outletId}")
    List<Comment> showComment(Integer outletId);




}

