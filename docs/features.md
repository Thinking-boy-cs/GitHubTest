# 功能说明

## 客户端功能

### 与安卓的交互实现

**安卓对webview的通信**：使用`webView.evaluateJavascript`函数对js方法进行调用，并获取对应返回值
**webview调用安卓**：在安卓端定义接口，注入到Webview的window实例中，js可以通过定义的接口，自由调用相机等安卓API

### 拍照签到功能

- 定义并实现拍照流程的接口
- 在安卓端注入webview的接口中编写调用过程的函数
- 前端使用js调用接口，获取拍照后返回的base64图片数据
- 上传至服务器完成签到

## 后台功能流程

### ...w

## 后台管理前端

### 迁徙图产生

- 获取签到人员在一段时间的签到地点记录
- 对签到人员的在一段时间内的地点轨迹构建有向图
- 累加每条边的权重信息
- 使用echarts画图

## 树莓派相关

### NFC配置

- 系统 Debian 9
- 硬件模块：PN532 NFC模块
- 安装相关依赖配置环境（不赘述）
- 通过i2c与PN532通信，使用python脚本监听读卡信息
- 监听到刷卡之后，获取卡中的员工信息，并使用后台api进行登录/签到

**注意：要提到需要在后期配套集成红外系统测温，将服务器交互逻辑转移到红外线或者总控板**