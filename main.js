


    


    function playGame(e){
        e.preventDefault();
        let number = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
        console.log(number)
        let guess_count = 0;
        if (guess > number){
            document.getElementById("result").innerHTML = "To high try again"

        } else if (guess < number){
            document.getElementById("result").innerHTML = "To Low try again"

        } else (guess == number)
            document.getElementById("result").innerHTML = "You got it!"

        


    }