package com.alibaba.mapper;

import com.alibaba.bean.Comment;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;


@Mapper
@Repository
public interface CommentMapper {

    @Insert("insert into comment values( #{commentID},#{userID},#{outletID},#{comment},#{score})")
    @Options(useGeneratedKeys = true, keyProperty = "commentID", keyColumn = "commentID")
    void addComment(Comment comment);


    @Select(value = "select * from COMMENT c where c.outletID =#{outletID}")
    @Results
            ({@Result(property = "userid", column = "userid"),
                    @Result(property = "comment", column = "comment"),
                    @Result(property = "score", column = "score")})
    List<Comment> showComment(@Param("outletID") Integer outletid);


}

