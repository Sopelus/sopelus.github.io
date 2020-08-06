//video play-pause
let videoBtn = document.getElementsByClassName('video__button');
let video = document.getElementsByClassName('video__background');
videoBtn[0].addEventListener('click', function(){
    video[0].paused?video[0].play():video[0].pause();
});



//form accordeon
let main = document.getElementsByClassName('form__title')
let acc = document.getElementsByClassName('form__select__container')
let form = document.getElementsByClassName('form__select')
for (let i = 0; i < main.length; i++) {
    main[i].classList.add('js-active')
}
acc[3].style.display = 'block';
form[3].style.borderColor = '#ffcc00';
form[3].style.backgroundImage = "url(/build/images/form-pressed-select.png)";
acc[3].style.backgroundColor = "#a30000";
form[3].style.backgroundColor = "#ffcc00";
main[3].style.color = "#a30000";
for (let i = 0; i < main.length; i++) {
    main[i].addEventListener('click', function () {
        for (let i = 0; i < acc.length; i++) {
            if (main[i].className == "form__title js-active") {
                acc[i].style.display = "none";
                main[i].classList.add('js-hidden')
                main[i].classList.remove('js-active')
                form[i].style.borderColor = '#ffffff';
                form[i].style.backgroundImage = "url(/build/images/form-idle-select.png)";
                form[i].style.backgroundColor = "#ba0000";
                acc[i].style.backgroundColor = "#ba0000";
                main[i].style.color = "#ffffff";
               
            }
        }
        let panel = this.nextElementSibling;
        if (panel.style.display === "none" && main[i].className == "form__title js-hidden") {
            panel.style.display = "block";            
            main[i].classList.remove('js-hidden')
            main[i].classList.add('js-active')
            form[i].style.borderColor = '#ffcc00';
            form[i].style.backgroundImage = "url(/build/images/form-pressed-select.png)";
            form[i].style.backgroundColor = "#ffcc00";
            acc[i].style.backgroundColor = "#a30000";
            main[i].style.color = "#a30000";
            
        } else {
            panel.style.display = "none";
            main[i].classList.add('js-hidden')
            main[i].classList.remove('js-active')
            form[i].style.borderColor = '#ffffff';
        }

    });

}


//Form-buttons onClick
let expressBtn = document.getElementsByClassName('form__express');
let logisticsBtn = document.getElementsByClassName('form__logistics');
let formWrapper = document.getElementsByClassName('form__form');
let mainForm = document.getElementsByClassName('form__select__container__main');
let hiddenForm = document.getElementsByClassName('form__select__container__hidden');
expressBtn[0].addEventListener('click', function () {
    mainForm[0].style.display = "flex";
    hiddenForm[0].style.display = "none";
    formWrapper[0].style.backgroundColor = "#ba0000";

});

logisticsBtn[0].addEventListener('click', function () {
    mainForm[0].style.display = "none";
    hiddenForm[0].style.display = "flex";
    formWrapper[0].style.backgroundColor = "#ffcc00";

});


//clients onCick
let clientsForm = document.getElementsByClassName('clients__client__container');
for(let i = 0; i<clientsForm.length; i++){
    clientsForm[i].addEventListener('click', function(){
        clientsForm[i].classList.add('js-client-active')
    });
}



