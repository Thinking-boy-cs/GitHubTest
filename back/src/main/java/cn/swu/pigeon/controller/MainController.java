/*
 * @Date: 2020-11-11 10:46:13
 * @LastEditors: Jecosine
 * @LastEditTime: 2020-11-11 11:13:55
 */
package cn.swu.pigeon.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import cn.swu.pigeon.entity.User;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
@Controller
@Slf4j
public class MainController {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private SimpMessagingTemplate template;
    
    @ResponseBody
    @RequestMapping("/sendMessage")
    public String sender() {
        log.info("msg");
        template.convertAndSendToUser("1606060960448", "/queue/getResponse", "test!");
        return "...";
    }

    @RequestMapping("/page")
    public String loginPage()
    {
        return "login";
    }
    @RequestMapping("/checkLogin")
    @ResponseBody
    //public boolean getDbType(@RequestBody(required=false) User user) {
    public boolean getDbType() {
        //String theId = user.getId();
        //String thePwd = user.getPassword();
        String theId = "001";
        String thePwd = "123";
        System.out.println(theId);
        System.out.println(thePwd);
        String sql = "select * from staff";
        List list = jdbcTemplate.queryForList(sql);

        Iterator iterator = list.iterator();
        while (iterator.hasNext()) {
            Map userMap = (Map) iterator.next();


            if (userMap.get("id").equals(theId) && userMap.get("passWord").equals(thePwd)) {
                System.out.println("登录验证成功！！！");
                return true;
            } else {
                System.out.println("登录验证失败！！！");
                return false;
            }

        }
        return false;
    }

    @RequestMapping("404")
    public String errorPage404() {
        return "404.html";
    }

    @RequestMapping("500")
    public String errorPage500() {
        return "500";
    }
}



