
window.addEventListener('load', function() {

    // FAQs
    let quests = document.getElementsByClassName('faq-quest');
    if (quests) {
        Array.from(quests).forEach((quest) => {
            quest.addEventListener('click', () => {
                quest.parentElement.classList.toggle('quest-active');
                let answer = quest.nextElementSibling;
    
                if (answer.style.height) {
                    answer.style.height = null;
                } else {
                    answer.style.height = answer.scrollHeight + 'px';
                }
            });
        });
    }

    // Range inputs
    let rangeInputs = document.getElementsByClassName('thm-range');
    if (rangeInputs) {
        Array.from(rangeInputs).forEach((quest) => {
            quest.addEventListener('change', (event) => {
                event.target.parentElement.getElementsByClassName('thm-range-value-left')[0].innerHTML = event.target.value + '€'
            });
        });
    }

    // Video control
    let playPauseBtn = document.getElementById('play_pause_btn');
    let boatVideo = document.getElementById('boat_video');
    if (playPauseBtn && boatVideo) {
        let playSvg = document.getElementById('play_svg');
        let pauseSvg = document.getElementById('pause_svg');

        playPauseBtn.addEventListener('click', (event) => {
            if (boatVideo.paused) {
                boatVideo.play();
            } else {
                boatVideo.pause();
            }
        });

        boatVideo.addEventListener('play', (event) => {
            console.log('play')
            playSvg.classList.add('d-none');
            pauseSvg.classList.remove('d-none');
        });

        boatVideo.addEventListener('pause', (event) => {
            console.log('pause')
            playSvg.classList.remove('d-none');
            pauseSvg.classList.add('d-none');
        });
    }

    // Hamburger
    let hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        const navLinks = document.querySelector('.nav-items');
        const links = document.querySelectorAll('.nav-items li');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('toggle');
            navLinks.classList.toggle('open');
        });
    }

});