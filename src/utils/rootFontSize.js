/*
 * 处理字体响应式
 * **/
;(function (w) {
  const maxWidth = 768
  //获取文档
  var doc = w.document
  var docuEle = doc.documentElement
  refreshRem()
  function refreshRem() {
    //getBoundingClientRect()获取某个元素的上右下左分别相对于浏览器窗口的位置会返回一个对象包含6个属性:top,right,bottom,left,width,height
    var width = docuEle.getBoundingClientRect().width
    var rem
    if (width >= maxWidth) {
      rem = 16
    } else {
      rem = (width / maxWidth) * 16
    }
    docuEle.style.fontSize = rem + 'px'
  }
  var timer = null
  w.addEventListener(
    'resize',
    function () {
      clearTimeout(timer)
      timer = setTimeout(refreshRem, 1)
    },
    false
  )
  //pageshow:事件类似于onload;onload在网页第一次加载是触发,pageshow事件在每次加载页面都会触发.即,onload在网页从六拉起缓存中读取时不触发
  //oageshow:事件对象中有一个persisted属性判断网页时候是从缓存中取得就返回true,否则false
  w.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        clearTimeout(timer)
        timer = setTimeout(refreshRem(), 1)
      }
    },
    false
  )
})(window)
