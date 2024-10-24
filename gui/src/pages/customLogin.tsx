import QRCode from 'qrcode';
import './css/customLogin.css'
import { useEffect } from "react";

// 登录页面
function CustomLogin() {
    useEffect(() => {
        QRCode.toCanvas(document.getElementById("qrcode"), 'https://www.baidu.com', {
            width: 180,
            height: 180
        })
    }, [])
    return (
        <div className="loginPage">
            <h1>Continue</h1>
            <div className="info">为您提供便利、快捷、智能的ai服务</div>
            <div className="feishuBlock">
                <div className="feishuInfo">请使用飞书扫码登录</div>
                <canvas id="qrcode"></canvas>
            </div>
            <div className="colorRect leftTop"></div>
            <div className="colorRect rightTop"></div>
            <div className="colorRect leftBottom"></div>
            <div className="colorRect rightBottom"></div>
        </div>
    )
}

export default CustomLogin;