class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter correct option no.");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question= createElement('h3')
  this .option1=createElement('h4')
  this .option2=createElement('h4')
  this .option3=createElement('h4')
  this .option4=createElement('h4')


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
   this. Question.html("Question:- What is the measure of right angle ?");
   this. option1.html("1. 60 degree");
   this. option2.html("2. 10 degree");
   this. option3.html("3. 90 degree");
   this. option4.html("4. 100 degree");


    this.input1.position(150, 230);
    this. input2.position(380,230)
    this.button.position(290, 300);
    this.Question.position(70, 50);
    this.option1.position(70, 100);
    this.option2.position(70, 120);
    this.option3.position(70, 140);
    this.option4.position(70, 160);
    this.message.position(70, 350);
  
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Thank You ,Your Answer Has Been Submitted..")
    })


  }
}
