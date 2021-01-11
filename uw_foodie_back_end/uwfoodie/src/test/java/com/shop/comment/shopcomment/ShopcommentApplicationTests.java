package com.shop.comment.shopcomment;

import com.shop.comment.shopcomment.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.servlet.http.HttpServletRequest;

@SpringBootTest
class ShopcommentApplicationTests {

    @Autowired
    private UserService userService;

    @Test
    void contextLoads() {
    }

    /**
     * Interface Registration
     */
    @Test
    void register() {
        userService.register("robin liu", "123456", "1");
    }

    /**
     * Interface Login
     */
    @Test
    void login(){userService.login("yan","123123");}

    /**
     * Interface shopCommentList
     */
    @Test
    void shopCommentList(){userService.shopCommentList("1");}

    /**
     * Interface del
     */
    @Test
    void del(){userService.del("10");}

    /**
     * Interface allShopCommentList
     */
    @Test
    void allShopCommentList(){userService.allShopCommentList();}

    /**
     * Interface allUserList
     */
    @Test
    void allUserList(){userService.allUserList();}

    /**
     * Interface delUser
     */
    @Test
    void delUser(){userService.delUser("1");}

    /**
     * Interface myCommentList
     */
    @Test
    void myCommentList(){userService.myCommentList("yan");}
}
