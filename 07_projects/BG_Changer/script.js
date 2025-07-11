const buttons = document.querySelectorAll('.all-buttons');

const body = document.querySelector('body');

buttons.forEach(button => {
    // console.log(button);
    button.addEventListener('click', function(event){
        if(event.target.id === 'grey'){
            body.style.background = "grey";
        }
        else if (event.target.id === 'white'){
            body.style.background = event.target.id;
        }
        else if (event.target.id === 'blue'){
            body.style.background = event.target.id;
        }
        else if (event.target.id === 'yellow'){
            body.style.background = event.target.id;
        }
        else if (event.target.id === 'red'){
            body.style.background = event.target.id;
        }
        else if (event.target.id === 'green'){
            body.style.background = event.target.id;
        }
        else{
            body.style.background = event.target.id;
        }
    });
});


