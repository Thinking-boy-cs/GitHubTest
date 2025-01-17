package cn.swu.pigeon.service;

import cn.swu.pigeon.dao.LeaveDao;
import cn.swu.pigeon.entity.Leave;
import cn.swu.pigeon.entity.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 *服务层实现类
 */
@Service
@Transactional
@Slf4j
public class LeaveServiceImpl implements LeaveService{

    @Resource
    @Autowired
    private LeaveDao leaveDao;

    @Override
    public void submitLeave( Leave leave) {
        leave.setSubmitTime(new Date());
//        leave.setSubmitTime()
//        leave.setStatus()
        leave.setState("待审核");
        log.info("[{}]",leave.getReason());
        log.info("[{}]",leave.toString());
        /**
         * 注意需要获取当前用户的id
         */
        leaveDao.submitAct(leave);

    }

    @Override
    public void backLeave(int LeaveId) {
        leaveDao.backAct(LeaveId);

    }

    @Override
    public List<Leave> findLeave(String userId) {
        return leaveDao.findAct(userId);
    }

    @Override
    public void endLev(int id) {
        leaveDao.endLev(id);
    }
}
