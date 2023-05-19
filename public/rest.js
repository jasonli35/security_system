document.addEventListener("DOMContentLoaded", (event)=> {
    toggle_button = document.querySelector("#toggle_button");
    video = document.querySelector("#video");
    toggle_button.addEventListener("click", () => {
       
        if(video.style.visibility == 'hidden' ){
            video.style.visibility = 'visible';
        }
        else {
            video.style.visibility = 'hidden';
        }
        
        fetch("/toggle_video", {method: 'POST'})
        .catch((error) => {
            console.log(response);
            console.error(error);
           
        });
    });
    motor_left_button = document.querySelector("#motor_left_button");
    motor_left_button.addEventListener("click", leftClick);
    mortor_right_butt = document.querySelector("#motor_right_button");
    mortor_right_butt.addEventListener("click", rightClick);
    buzzer_button = document.querySelector("#buzzer_button");
    buzzer_button.addEventListener("click", buzzerClick);

    stop_buzzer_button = document.querySelector("#stop_buzzer_button");
    stop_buzzer_button.addEventListener("click", stopBuzzerClick);

});


function leftClick() {
    fetch("/motor_left", {method: 'POST'})
    .catch((error) => {
        console.log(response);
        console.error(error);
       
    });
}

function rightClick() {
    fetch("/motor_right", {method: 'POST'})
    .catch((error) => {
        console.log(response);
        console.error(error);
       
    });
}

function buzzerClick() {
    fetch("/buzzer", {method: 'POST'})
    .catch((error) => {
        console.log(response);
        console.error(error);
       
    });
}

function stopBuzzerClick() {
    fetch("/stop_buzzer", {method: 'POST'})
    .catch((error) => {
        console.log(response);
        console.error(error);
       
    })
}