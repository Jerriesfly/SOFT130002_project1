const URL = window.URL || window.webkitURL || window.mozURL;

function uploadImg(e, dom) {
    //根据浏览器不同设置不同获取对象方式
    const fileObj = dom instanceof HTMLElement ? dom.files[0] : $(dom)[0].files[0];
    const container = document.querySelector('#preview');
    const img = new Image();
    img.src = URL.createObjectURL(fileObj);
    //清空容器内之前的内容（包括文字提示）并加入上传的图片，调整图片大小适应宽高
    img.onload = function () {
        container.innerHTML = "";
        container.appendChild(img);
        resizeAndReposition(400, 400, "preview", false);
    }
}