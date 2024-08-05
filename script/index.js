function main( input, submit, copy ){
  const about = "https://proxy.雾雨咖啡厅.us.kg/-----"
  VANTA.GLOBE({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color2: 0xd43a3a,
    size: 0.90
  })
  input.oninput = function(){
    if( this.value.trim() !== "" ){
      submit.href = about + this.value
      copy.href = `javascript:(async function(){
        await navigator.clipboard.writeText( "${submit.href}" );
        swal( "Yes", "写入成功", "success" );
      })()`
      // Promise对象太费时间，所以就await同步执行了，倒不用担心出问题，因为如果错误了就直接throw了()
    } else {
      submit.href = copy.href = "javascript:swal( 'Error', '还没告诉我要去哪里呢w', 'error' )"
    }
  }
}