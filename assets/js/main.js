
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
});