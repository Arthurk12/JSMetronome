const audioSpeedSlider = document.querySelector('.audioSpeedSlider')
const audioPlayButton = document.querySelector('.audioPlayButton')
const audioSpeedText = document.querySelector('.audioSpeedText')
const audio = document.querySelector('audio')

const minuteInMS = (1000*60)
let currentBPM = 60
let isPlaying = false
let metronome = null

function tick(){
    audio.currentTime = 0
    audio.play()
}

function resetTick(){
    clearInterval(metronome)
    if(isPlaying){
        metronome = setInterval(tick, minuteInMS/currentBPM)
    }
    console.log({minuteInMS, currentBPM})
}

audioPlayButton.addEventListener('click', function(){
    if(isPlaying){
        clearInterval(metronome)
        isPlaying = false
        audioPlayButton.innerHTML = 'Play'
        audioPlayButton.style.setProperty('background', '#ed6663')
    }else{
        metronome = setInterval(tick, minuteInMS/currentBPM)
        isPlaying = true
        audioPlayButton.innerHTML = 'Stop'
        audioPlayButton.style.setProperty('background', '#ed6663')
    }
})

audioPlayButton.addEventListener('mouseenter', function(){
    audioPlayButton.style.setProperty('background', '#f5eaea')
})

audioPlayButton.addEventListener('mouseout', function(){
    if(isPlaying){
        audioPlayButton.style.setProperty('background', '#ed6663')
    }else{
        audioPlayButton.style.setProperty('background', '#5b5656')
    }
    
})


audioSpeedSlider.addEventListener('input', function(){
    currentBPM = parseInt(audioSpeedSlider.value)
    audioSpeedText.innerHTML = currentBPM
})

audioSpeedSlider.addEventListener('change', resetTick)