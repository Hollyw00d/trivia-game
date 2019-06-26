$(document).ready(function() {

    // Get HTML elements in variables
    var $timer = $('#timer');
    var $timerSpan = $timer.find('span');
    var $questionsMessages = $('#questions-messages');
    var $questionsQuestion = $('#questions-question');
    var $questionsMultipleChoice = $('#questions-multiple-choice');
    var $answerSubmit = $('#answer-submit');

    /*
    "Anchor Man" movie trivia quiz
    
    1. What are Ron Burgundy's first words spoken in the movie?
    ANSWER: a. Mmm. I look good.
    a. Mmm. I look good.
    b. How now brown cow.
    c. Great Odin's raven!
    d. Hey, everyone! Come and see how good I look!
    
    2. What is Ron's middle name?
    ANSWER: c. Beverly
    a. Shirley
    b. Brandie
    c. Beverly
    d. Marianne
    
    3. According to the movie narrator, what does Sinatra look like compared to Ron in one of his fine suits?
    ANSWER: b. A hobo
    a. A bum
    b. A hobo
    c. A poser
    d. A wannabe
    
    4. What does the "Escupimos en su Alimento" restaurant mean in English, that Veronica and the ladies from the station visit?
    ANSWER: d. We Spit in Your Food
    a. I Spit in Your Food
    b. I Blow my Nose in Your Food
    c. I Give you Food for Free
    d. We Spit in Your Food
    
    5. What degree did Will Ferrell graduate from in college?
    ANSWER: c. Journalism
    a. English
    b. Creative Writing
    c. Journalism
    d. Communications
    
    6. What is the name of Ron's dog?
    ANSWER: d. Baxter
    a. Quincy
    b. Ronny
    c. Sparky
    d. Baxter
    
    7. What is Ron's license plate number?
    ANSWER: c. IM #1
    a. SAN DIEGO
    b. #1 NEWS
    c. IM #1
    d. ANCHOR
    
    8. In the night club, what instrument does Ron play?
    ANSWER: b. Jazz flute
    a. Classical harp
    b. Jazz flute
    c. Jazz saxophone
    d. Jazz trumpet
    
    9. What does Champ (the sports anchor from Ron's news team) do in the fight with a rival news team?
    ANSWER: d. Throw a man into a car windshield that breaks.
    a. Kick another man in the crotch.
    b. Scream and run away.
    c. Use the Spock pinch to subdue a man.
    d. Throw a man into a car windshield that breaks.
    
    10. What diss does Brick Tamland (weather man from Ron's new team) tell the rival news team?
    ANSWER: a. "Where'd you get those clothes from, the toilet store?"
    a. "Where'd you get those clothes from, the toilet store?"
    b. "Who's your mom, Mother Teresa?"
    c. "You smell like a moldy car!"
    d. "Where do you work, a toilet store?"
    */

    /*      
    2. What is Ron's middle name?
    ANSWER: c. Beverly
    a. Shirley
    b. Brandie
    c. Beverly
    d. Marianne
    */

    var abcdArr = [
        'a',
        'b',
        'c',
        'd'
    ];

    // Questions and answers object
    var questionsAndAnswers = [
        {
            // Question 1
            // Correct anwer is:
            // 0. "Mmm. I look good."
            question: "What are Ron Burgundy's first words spoken in the movie?",
            answers: [
                "Mmm. I look good.",
                "How now brown cow.",
                "Great Odin's raven!",
                "Hey, everyone! Come and see how good I look!"
            ],
            // index of answers array
            correctAnswer: 0
        },
        {
            // Question 2
            // Correct anwer is:
            // 2. "Beverly"
            question: "What is Ron's middle name?",
            answers: [
                "Shirley",
                "Brandie",
                "Beverly",
                "Marianne"
            ],
            correctAnswer: 2
        },
        {
            // Question 3
            // Correct anwer is:
            // 1. "A hobo"
            question: "According to the movie narrator, what does Sinatra look like compared to Ron in one of his fine suits?",
            answers: [
                "A bum",
                "A hobo",
                "A poser",
                "A wannabe"
            ],
            // index of answers array
            correctAnswer: 1
        },
        {
            // Question 4
            // Correct anwer is:
            // 3. "We Spit in Your Food"
            question: "What does the \"Escupimos en su Alimento\" restaurant mean in English, that Veronica and the ladies from the station visit?",
            answers: [
                "I Spit in Your Food",
                "I Blow my Nose in Your Food",
                "I Give you Food for Free",
                "We Spit in Your Food"
            ],
            // index of answers array
            correctAnswer: 3
        },
        {
            // Question 5
            // Correct anwer is:
            // 2. "Journalism"
            question: "What degree did Will Ferrell graduate from in college?",
            answers: [
                "English",
                "Creative Writing",
                "Journalism",
                "Communications"
            ],
            // index of answers array
            correctAnswer: 2
        },
        {
            // Question 6
            // Correct anwer is:
            // 3. "Baxter"
            question: "What is the name of Ron's dog?",
            answers: [
                "Quincy",
                "Ronny",
                "Sparky",
                "Baxter"
            ],
            // index of answers array
            correctAnswer: 3
        },
        {
            // Question 7
            // Correct anwer is:
            // 2. "IM #1"
            question: "What is Ron's license plate number?",
            answers: [
                "SAN DIEGO",
                "#1 NEWS",
                "IM #1",
                "ANCHOR"
            ],
            // index of answers array
            correctAnswer: 2
        },
        {
            // Question 8
            // Correct anwer is:
            // 2. "Jazz flute"
            question: "In the night club, what instrument does Ron play?",
            answers: [
                "Classical harp",
                "Jazz flute",
                "Jazz saxophone",
                "Jazz trumpet"
            ],
            // index of answers array
            correctAnswer: 1
        },
        {
            // Question 9
            // Correct anwer is:
            // 3. "Throw a man into a car windshield that breaks."
            question: "What does Champ (the sports anchor from Ron's news team) do in the fight with a rival news team?",
            answers: [
                "Kick another man in the crotch.",
                "Scream and run away.",
                "Use the Spock pinch to subdue a man.",
                "Throw a man into a car windshield that breaks."
            ],
            // index of answers array
            correctAnswer: 3
        },
        {
            // Question 10
            // Correct anwer is:
            // 0. Where'd you get those clothes from, the toilet store?
            question: "What diss does Brick Tamland (weather man from Ron's new team) tell the rival news team?",
            answers: [
                "Where'd you get those clothes from, the toilet store?",
                "Who's your mom, Mother Teresa?",
                "You smell like a moldy car!",
                "Where do you work, a toilet store?"
            ],
            // index of answers array
            correctAnswer: 0
        }
    ];

    var playGame = {
        startGame: false,
        currentQuestionArrIndex: 0,
        timer25SecCountDownStart: 25,
        clockRunning: false,
        answerChosen: false,
        convertedTime: 0,
        intervalId: 0,
        selectedAnswerArr: [],
        reset: function() {
            $questionsMessages
                .html('Click Button to Start Trivia Quiz')
                .removeClass('d-none');
            $answerSubmit.html('Start Quiz');    
        },
        startGameFunc: function() {
            if(!this.startGame) {
                $answerSubmit.html('Submit Answer');
                $timer.removeClass('d-none');
                $timerSpan.html(this.timer25SecCountDownStart);
                $questionsMessages
                    .addClass('font-italic')
                    .html('Game Started!');
                this.startGame = true;  
            }
        },
        timeConverter: function(t) {
            //  Takes the current time in seconds 
            // and convert it to seconds with two digits (ss).
            var seconds = t;  
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            return seconds;
        },
        countDown: function() {
            playGame.timer25SecCountDownStart--;
            playGame.convertedTime = playGame.timeConverter(playGame.timer25SecCountDownStart);

            var current25SecCountDownTime = playGame.timeConverter(playGame.convertedTime);

            if(current25SecCountDownTime.length === 3) {
                current25SecCountDownTime = current25SecCountDownTime.slice(1);
            }
            if(current25SecCountDownTime === '00') {
                // Stop time at 0 or '00'
                clearInterval(playGame.intervalId);
                this.clockRunning = false;
                setInterval(playGame.intervalId);
                this.clockRunning = true;
            }

            $timerSpan.html(current25SecCountDownTime);
        },
        resetTime: function() {
            playGame.timer25SecCountDownStart = 26;
        },
        start25SecCountDown: function() {
            if (!this.clockRunning) {
                console.log('inside start25SecCountDown');
                clearInterval(this.intervalId);
                this.intervalId = setInterval(playGame.countDown, 1000);
                this.clockRunning = true;
            }
        },
        populateQuestions: function(arrOfObjects) {
            this.currentQuestionArrIndex = Number($questionsQuestion.attr('data-question-arr'));

            switch(this.currentQuestionArrIndex) {
                case 0:
                    $questionsQuestion
                        .empty()
                        .removeClass('d-none')
                        .html(arrOfObjects[this.currentQuestionArrIndex].question);
                    $questionsMultipleChoice
                        .removeClass('d-none')
                        .empty();
                    arrOfObjects[this.currentQuestionArrIndex].answers.map(function(answer, index) {
                        $questionsMultipleChoice
                            .append('<li><label><input type="radio" name="question' + playGame.currentQuestionArrIndex + '" value="' + index + '">' + answer + '</label></li>');
                    });                   
            }
        },
        ifAnswerSelected: function() {
            var selectedAnswer = Number($("input[name='question" + playGame.currentQuestionArrIndex + "']:checked").val());
            if(selectedAnswer) {
                playGame.selectedAnswerArr.push(selectedAnswer);
                playGame.clockRunning = false;
                console.log(playGame.clockRunning);
                return selectedAnswer;
            }
        },
        showRightAnswer: function() {
            var correctAnswerIndex = questionsAndAnswers[playGame.currentQuestionArrIndex].correctAnswer;
            var correctAnswerAnswer = questionsAndAnswers[playGame.currentQuestionArrIndex].answers[correctAnswerIndex];
            $questionsMessages.html('The correct answer is ' + abcdArr[correctAnswerIndex] + ':<br />' + correctAnswerAnswer); 
        }
    };

    if(!playGame.startGame) {
        playGame.reset();
    }

    $answerSubmit.on('click', function() {
        if(!playGame.startGame && !playGame.answerChosen) {
            playGame.startGameFunc();
            playGame.start25SecCountDown();
            playGame.populateQuestions(questionsAndAnswers);
        }
        else if(playGame.startGame && playGame.ifAnswerSelected()) {
            playGame.resetTime();
            playGame.start25SecCountDown();
            playGame.showRightAnswer();
        }

    });



});