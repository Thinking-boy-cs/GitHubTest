package cn.swu.pigeon.dao;

import cn.swu.pigeon.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

@Mapper //用来创建DAO对象
public interface UserDAO {
    //注册存入用户
    void save(User user);

    Map findByTel(String telNumber);

    User findUserByTel(String telNumber);
}
