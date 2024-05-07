//get all keys
const keys = document.querySelectorAll(".key");

// play the notes
function PlayNotes(event) {

    //getkeyCode == DONE
     let audioKeyCode = getKeyCode(event);
    //press a key == Done
     const key = document.querySelector(`.key[data-key = "${audioKeyCode}"]`)

     
    //if key exist
    const keyNotFound = !key;

    
    if(keyNotFound) {
        return;
    }
    
    //play piano
    const audio = document.querySelector(`audio[data-key = "${audioKeyCode}"]`)

    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
  }
  
    function getKeyCode(event) {
        let keyCode;
    
        let isAKeydown = event.type === "keydown";

        if (isAKeydown) {
            keyCode = event.keyCode
        } else {
             keyCode = event.target.dataset.key
        }
        
        return keyCode
    }

    function playAudio(audioKeyCode) {
        const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
        audio.currentTime = 0;
        audio.play()
      }
      
      function removePlayingClass(event) {
        event.target.classList.remove("playing")
      }
      
      function registerEvents() {
        // click with mouse
        keys.forEach( function(key) {
          key.addEventListener("click", PlayNotes)
          key.addEventListener("transitionend", removePlayingClass)
        })
      
        // keyboard type
        window.addEventListener("keydown", PlayNotes)
      }
      
      window.addEventListener("load", registerEvents)