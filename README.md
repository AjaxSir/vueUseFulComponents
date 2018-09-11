粘性组件demo:
<sticky :className="'sub-navbar'">
     <span style="float:left;color:white;margin-left:20px">设备数据</span>
</sticky>
'sub-navbar' 传入自己的一些样式
.sub-navbar {
    height: 50px;
    line-height: 50px;
    position: relative;
    width: 100%;
    text-align: right;
    white-space: nowrap;
    padding-right: 20px;
    -webkit-transition: 600ms ease position;
    transition: 600ms ease position;
    background: -webkit-gradient(linear, left top, right top, from(#20b6f9), color-stop(0%, #20b6f9), color-stop(100%, #2178f1), to(#2178f1));
    background: linear-gradient(90deg, #20b6f9 0%, #20b6f9 0%, #2178f1 100%, #2178f1 100%);
	top: 0px;
	z-index: 999;
	height: 50px;
}