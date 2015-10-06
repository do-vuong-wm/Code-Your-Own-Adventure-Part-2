// Vars
var checkAnswerStart = prompt("Are you ready to play?");
var x = "Please Restart";
var conTin= ("Please click ok to continue, ");
var reStart= ("Click ok to start again");
var ansYes = "Yes";
var ansyes = "yes";
var ansYES = "YES";


switch (checkAnswerStart) {
        case ansYes:
            var name = prompt("Hi put a name to start");

            var contName = conTin + name;

            var greeting = function (name) {

                confirm("Great to see you," + " " + name);
            };
            console.log(confirm(contName));
            var answer = prompt("1. What is 10 * 11?");
            switch (parseInt(answer)) {
                case 10 * 11:
                    console.log(confirm(contName));
                    var answer2 = prompt("2. What is 100 / 10?");
                    switch (parseInt(answer2)) {
                        case 100 / 10:
                            console.log(confirm(contName));
                            var answer3 = prompt("3. What is 20 / 4");
                            switch (parseInt(answer3)) {
                                case 20 / 4:
                                    console.log(confirm(contName));
                                    var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                    switch (parseInt(answer4)) {
                                        case 1359839234 + 7245742576:
                                            console.log(confirm(contName));
                                            var answer5 = prompt("5. What is 2634234 * 25");
                                            switch (parseInt(answer5)) {
                                                case 2634234 * 25:
                                                    console.log(confirm(contName));
                                                    var answer6 = prompt("6. What is 45724567245 / 5");
                                                    switch (parseInt(answer6)) {
                                                        case 45724567245 / 5:
                                                            console.log(confirm("You finished the game!"));
                                                            var rating = prompt("Rate this game out of 10");
                                                            if (rating > 8) {
                                                                confirm("Thanks for the rating")
                                                            }
                                                            else {
                                                                confirm("Thanks for the rating")
                                                            }
                                                            break;
                                                        default :
                                                            confirm("You got 5 of 6 correct.");
                                                            console.log(confirm(reStart));
                                                            break;
                                                    }
                                                    break;
                                                default :
                                                    confirm("You got 4 of 6 correct.");
                                                    console.log(confirm(reStart));
                                                    break;
                                            }
                                            break;
                                        default :
                                            confirm("You got 3 of 6 correct.");
                                            console.log(confirm(reStart));
                                            break;
                                    }
                                    break;
                                default :
                                    confirm("You got 2 of 6 correct.");
                                    console.log(confirm(reStart));
                                    break;
                            }
                            break;
                        default :
                            confirm("You got 1 of 6 correct.");
                            console.log(confirm(reStart));
                            break;
                    }
                    break;
                default :
                    confirm("You got 0 of 6 correct.");
                    console.log(confirm(reStart));
            }
            break;
        case ansYES:
            var name = prompt("Hi put a name to start");

            var contName = conTin + name;

            var greeting = function (name) {

                confirm("Great to see you," + " " + name);
            };
            console.log(confirm(contName));
            var answer = prompt("1. What is 10 * 11?");
            switch (parseInt(answer)) {
                case 10 * 11:
                    console.log(confirm(contName));
                    var answer2 = prompt("2. What is 100 / 10?");
                    switch (parseInt(answer2)) {
                        case 100 / 10:
                            console.log(confirm(contName));
                            var answer3 = prompt("3. What is 20 / 4");
                            switch (parseInt(answer3)) {
                                case 20 / 4:
                                    console.log(confirm(contName));
                                    var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                    switch (parseInt(answer4)) {
                                        case 1359839234 + 7245742576:
                                            console.log(confirm(contName));
                                            var answer5 = prompt("5. What is 2634234 * 25");
                                            switch (parseInt(answer5)) {
                                                case 2634234 * 25:
                                                    console.log(confirm(contName));
                                                    var answer6 = prompt("6. What is 45724567245 / 5");
                                                    switch (parseInt(answer6)) {
                                                        case 45724567245 / 5:
                                                            console.log(confirm("You finished the game!"));
                                                            var rating = prompt("Rate this game out of 10");
                                                            if(rating > 8){
                                                                confirm("Thanks for the rating")
                                                            }
                                                            else
                                                            {
                                                                confirm("Thanks for the rating")
                                                            }
                                                            break;
                                                        default :
                                                            confirm("You got 5 of 6 correct.");
                                                            console.log(confirm(reStart));
                                                            break;
                                                    }
                                                    break;
                                                default :
                                                    confirm("You got 4 of 6 correct.");
                                                    console.log(confirm(reStart));
                                                    break;
                                            }
                                            break;
                                        default :
                                            confirm("You got 3 of 6 correct.");
                                            console.log(confirm(reStart));
                                            break;
                                    }
                                    break;
                                default :
                                    confirm("You got 2 of 6 correct.");
                                    console.log(confirm(reStart));
                                    break;
                            }
                            break;
                        default :
                            confirm("You got 1 of 6 correct.");
                            console.log(confirm(reStart));
                            break;
                    }
                    break;
                default :
                    confirm("You got 0 of 6 correct.");
                    console.log(confirm(reStart));
            }
            break;
        case ansyes:
            var name = prompt("Hi put a name to start");

            var contName = conTin + name;

            var greeting = function (name) {

                confirm("Great to see you," + " " + name);
            };
            console.log(confirm(contName));
            var answer = prompt("1. What is 10 * 11?");
            switch (parseInt(answer)) {
                case 10 * 11:
                    console.log(confirm(contName));
                    var answer2 = prompt("2. What is 100 / 10?");
                    switch (parseInt(answer2)) {
                        case 100 / 10:
                            console.log(confirm(contName));
                            var answer3 = prompt("3. What is 20 / 4");
                            switch (parseInt(answer3)) {
                                case 20 / 4:
                                    console.log(confirm(contName));
                                    var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                    switch (parseInt(answer4)) {
                                        case 1359839234 + 7245742576:
                                            console.log(confirm(contName));
                                            var answer5 = prompt("5. What is 2634234 * 25");
                                            switch (parseInt(answer5)) {
                                                case 2634234 * 25:
                                                    console.log(confirm(contName));
                                                    var answer6 = prompt("6. What is 45724567245 / 5");
                                                    switch (parseInt(answer6)) {
                                                        case 45724567245 / 5:
                                                            console.log(confirm("You finished the game!"));
                                                            var rating = prompt("Rate this game out of 10");
                                                            if(rating > 8){
                                                                confirm("Thanks for the rating")
                                                            }
                                                            else
                                                            {
                                                                confirm("Thanks for the rating")
                                                            }
                                                            break;
                                                        default :
                                                            confirm("You got 5 of 6 correct.");
                                                            console.log(confirm(reStart));
                                                            break;
                                                    }
                                                    break;
                                                default :
                                                    confirm("You got 4 of 6 correct.");
                                                    console.log(confirm(reStart));
                                                    break;
                                            }
                                            break;
                                        default :
                                            confirm("You got 3 of 6 correct.");
                                            console.log(confirm(reStart));
                                            break;
                                    }
                                    break;
                                default :
                                    confirm("You got 2 of 6 correct.");
                                    console.log(confirm(reStart));
                                    break;
                            }
                            break;
                        default :
                            confirm("You got 1 of 6 correct.");
                            console.log(confirm(reStart));
                            break;
                    }
                    break;
                default :
                    confirm("You got 0 of 6 correct.");
                    console.log(confirm(reStart));
            }
            break;
        default :
            confirm(reStart);
            break;
}

// Vars
var checkAnswerStart = prompt("Are you ready to play?");

switch (checkAnswerStart) {
    case ansYes:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating")
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    case ansYES:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating")
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    case ansyes:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating");
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating");
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    default :
        confirm(reStart);
        break;
}

// Vars
var checkAnswerStart = prompt("Are you ready to play?");

switch (checkAnswerStart) {
    case ansYes:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if (rating > 8) {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        else {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    case ansYES:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating")
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    case ansyes:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating")
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    default :
        confirm(reStart);
        break;
}

// Vars
var checkAnswerStart = prompt("Are you ready to play?");

switch (checkAnswerStart) {
    case ansYes:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating")
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    case ansYES:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating")
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating")
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    case ansyes:
        var name = prompt("Hi put a name to start");

        var contName = conTin + name;

        var greeting = function (name) {

            confirm("Great to see you," + " " + name);
        };
        console.log(confirm(contName));
        var answer = prompt("1. What is 10 * 11?");
        switch (parseInt(answer)) {
            case 10 * 11:
                console.log(confirm(contName));
                var answer2 = prompt("2. What is 100 / 10?");
                switch (parseInt(answer2)) {
                    case 100 / 10:
                        console.log(confirm(contName));
                        var answer3 = prompt("3. What is 20 / 4");
                        switch (parseInt(answer3)) {
                            case 20 / 4:
                                console.log(confirm(contName));
                                var answer4 = prompt("4. What is 1359839234 + 7245742576?");
                                switch (parseInt(answer4)) {
                                    case 1359839234 + 7245742576:
                                        console.log(confirm(contName));
                                        var answer5 = prompt("5. What is 2634234 * 25");
                                        switch (parseInt(answer5)) {
                                            case 2634234 * 25:
                                                console.log(confirm(contName));
                                                var answer6 = prompt("6. What is 45724567245 / 5");
                                                switch (parseInt(answer6)) {
                                                    case 45724567245 / 5:
                                                        console.log(confirm("You finished the game!"));
                                                        var rating = prompt("Rate this game out of 10");
                                                        if(rating > 8){
                                                            confirm("Thanks for the rating");
                                                        }
                                                        else
                                                        {
                                                            confirm("Thanks for the rating");
                                                        }
                                                        break;
                                                    default :
                                                        confirm("You got 5 of 6 correct.");
                                                        console.log(confirm(reStart));
                                                        break;
                                                }
                                                break;
                                            default :
                                                confirm("You got 4 of 6 correct.");
                                                console.log(confirm(reStart));
                                                break;
                                        }
                                        break;
                                    default :
                                        confirm("You got 3 of 6 correct.");
                                        console.log(confirm(reStart));
                                        break;
                                }
                                break;
                            default :
                                confirm("You got 2 of 6 correct.");
                                console.log(confirm(reStart));
                                break;
                        }
                        break;
                    default :
                        confirm("You got 1 of 6 correct.");
                        console.log(confirm(reStart));
                        break;
                }
                break;
            default :
                confirm("You got 0 of 6 correct.");
                console.log(confirm(reStart));
        }
        break;
    default :
        confirm(reStart);
        break;
}











