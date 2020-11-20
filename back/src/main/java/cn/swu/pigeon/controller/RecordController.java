package cn.swu.pigeon.controller;

import cn.swu.pigeon.entity.Record;
import cn.swu.pigeon.entity.User;
import cn.swu.pigeon.service.RecordService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;




@RestController
@CrossOrigin //允许跨域
@RequestMapping("record")
@Slf4j
public class RecordController {

    @Autowired
    private RecordService recordService;


    /**
     * 处理签到
     */
    @PostMapping("sign")
    public Map<String,Object> sign(@RequestBody Record record, HttpServletRequest request){
        User thisUser = (User) request.getServletContext().getAttribute("thisUser");
        Map<String,Object> map = new HashMap<>();
        try {
            if(!ObjectUtils.isEmpty(record)){
                record.setId(thisUser.getId());
                recordService.isSign(record);
                map.put("status",0);
                map.put("msg","签到成功");
            } else {
                map.put("status",1);
                map.put("msg","签到失败");
            }
            return map;
        } catch (Exception e){
            e.printStackTrace();
            map.put("status",1);
            map.put("msg","签到失败");
            return map;
        }

    }

    /**
     * 查看用户签到
     */
    @RequestMapping("find")
    public Map<String,Object> find(HttpServletRequest request){
        User thisUser = (User) request.getServletContext().getAttribute("thisUser");
        Map<String,Object> map = new HashMap<>();
        try {
            if(!ObjectUtils.isEmpty(thisUser)){
                List<Record> thisRecords = recordService.findRec(thisUser);
                map.put("status",0);
                map.put("msg","查看成功");
                map.put("data",thisRecords);
            } else {
                map.put("status",1);
                map.put("msg","查看失败");
            }
            return map;
        } catch (Exception e){
            e.printStackTrace();
            map.put("status",1);
            map.put("msg","查看失败");
            return map;
        }

    }

}
