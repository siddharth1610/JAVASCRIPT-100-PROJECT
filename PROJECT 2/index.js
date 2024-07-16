(function(){
    const buttons = document.querySelectorAll('.btn-counter')
    let count = 0;

    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.classList.contains('dec-btn')){
                count--;
            }
            else if(button.classList.contains('inc-btn')){
                count++;
            }

            const counter = document.querySelector('.counter')
            counter.textContent=count
        })
    })
})()