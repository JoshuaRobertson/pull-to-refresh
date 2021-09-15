// Pull to refresh view
function refresh(event) {
  const trigger = document.querySelector('.trigger')
  const message = document.querySelector('.message')
  const touch   = event.targetTouches[0]
  let pos       = touch.pageY
  const space   = Math.floor(pos * 1.5)

  console.log(pos)

  if (pos < 300) {
    trigger.style.height = space + 'px'
    trigger.style.transition = '.2s'

    setTimeout(function(){
      trigger.style.height = '100px'
    }, 200)
  }
  else {
    trigger.style.height = '100px'
    trigger.style.transition = '.2s'
    message.innerHTML = "<h2 class='title'>Refreshing...</h2>"

    setTimeout(function(){
      location.reload()
    }, 500)
  }
}
