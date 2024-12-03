// questions.js

const questions = [
  // Add your questions here

   question1 = {
    question_text: "How can you create a new branch directory to work in?",
    question_type: "multiple_choice",
    options: ["git branch", "git check", "git checkout", "git status"],
    correct_option: ["git branch"],
    correct_explanation: "We use Git branches to work on different features or changes separately without affecting the main codebase."
  }
  ,
   question2 = {
    question_text: "When giving feedback is best to:",
    question_type: "multiple_choice",
    options: ["State your subjective opinions and convince the other person no matter what", "Rush through the topic to bamboozle the feedback receiver","Adopt an assertive approach to understand and give better advice.", "Try to say the least possible."],
    correct_option: ["Rush through the topic to bamboozle the feedback receiver"],
    correct_explanation: "This approach allows for clear, constructive, and respectful feedback that encourages improvement and understanding."
  }
  ,
   question3 = {
    question_text: "In pair programming we can see the relation between the developers as:",
    question_type: "multiple_choice",
    options: ["Batman and Robin", "Director and coach", "Driver and navigator", "Fugitive and police"],
    correct_option: ["Driver and navigator"],
    correct_explanation: `In pair programming, the "driver" is the person writing the code, while the "navigator" provides guidance, reviews the code, and thinks strategically about the overall solution.`,
  }
  ,
   question4 = {
    question_text: "Before asking for help with an issue make sure to:",
    question_type: "multiple_choice",
    options: ["Understand what is you are trying to ask","Look worried to give a sense of urgency","State that you can't go further if it's not solved.","Make a list of demands."],
    correct_option: ["Understand what is you are trying to ask"],
    correct_explanation: "It's important to clearly understand the issue before asking for help, as this ensures you can communicate effectively and get the assistance you need.",
  }
  ,
   question5 = {
    question_text: "The method of coming back to the same topic to reinforce it into our memory is called:",
    question_type: "multiple_choice",
    options: ["Memory palace","Spaced repetition","Memory gymnastics","Neural networking"],
    correct_option: ["Spaced repetition"],
    correct_explanation: "Spaced repetition is a learning technique where information is reviewed at increasing intervals to enhance long-term retention and reinforce memory.",
  }
  ,
   question6 = {
    question_text: "Which language do you use to style a website?",
    question_type: "multiple_choice",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    correct_option: ["CSS"],
    correct_explanation: "CSS styles websites by defining layout, colors, fonts, and spacing, enhancing the appearance provided by HTML. It enables responsive designs and animations.",
  }
  ,
   question7 = {
    question_text: "Which year was JavaScript developed?",
    question_type: "multiple_choice",
    options: ["1992", "1995", "2000", "1998"],
    correct_option: ["1998"],
    correct_explanation: "Created by Brendan Eich at Netscape in 1995, adds interactivity to web pages and is now essential for web development."
  }
  ,
   question8 = {
    question_text: "What is a flow diagram used for?",
    question_type: "multiple_choice",
    options: ["Representing financial data","Showing a process or workflow","Writing code","Managing storage"],
    correct_option: ["Showing a process or workflow"],
    correct_explanation:  "A flow diagram visually represents processes or workflows using symbols and arrows to show steps and decisions. It helps analyze, simplify, and improve processes.",
  }
  
  ,
   question9 = {
    question_text: "What does MVP stand for?",
    question_type: "multiple_choice",
    options: ["Minimum Viable Product","Most Valuable Player","Multi-Version Protocol","Maximum Value Proposition"],
    correct_option: ["Minimum Viable Product"],
    correct_explanation: "MVP stands for Minimum Viable Product. It is the simplest version of a product with core features to test the market, gather feedback, and improve based on user input.",
  }
  ,
   question10 = {
    question_text: "What should be your priority to learn effectively?",
    question_type: "multiple_choice",
    options: ["Order a greasy McDonalds for dinner", "Have 8 hours of sleep", "Play FIFA all night", "Work endlessly until you solve the problem"],
    correct_option: ["Have 8 hours of sleep"],
    correct_explanation: "For learning the brain needs to be fully rested, so is necessary to have a minimum amount of hours of sleep",
  }

];



// Don't worry about this, we're just exporting the questions
module.exports = questions;


/*



const question1 = {
  question_text: 
  question_type: "multiple_choice",
  options: 
  correct_option:
  correct_explanation:
}
  */
/*
Add your questions as objects in the array, following the schema above
Make sure your questions:
Are about Week 1 content
Have 4 options each
Have clear explanations for the correct answers
Follow the exact schema format


Questions: 
Which language do you use to style website
Which year JS has been developed 
What is a flow diagram for
What is MVP

Questions



1
How can you create a new branch directory to work in?
- git branch V
- git check
- git checkout
- git status


2
When giving feedback is best to 
- State your subjective opinions and convince the other person no matter what.
- Rush through the topic to bamboozle the feedback receiver
- Adopt an assertive approach to understand and give better advice. V
- Try to say the least possible.

3
In pair programming we can see the relation between the developers as:
- Batman and Robin
- Director and coach
- Driver and navigator
- Fugitive and police.

4
Before asking for help with an issue make sure to:
 - Understand what is you are trying to ask
 - Look worried to give a sense of urgency
 - State that you can't go further if it's not solved.
 - Make a list of demands.


 5
The method of coming back to the same topic to reinforce it into our memory is called:
Memory palace
Spaced Repetition
Memory gymnastics
Neural networking

Question 1: Which language do you use to style a website?
A. HTML
B. CSS
C. JavaScript
D. SQL
Correct Answer: B. CSS

Question 2: Which year was JavaScript developed?
A. 1992
B. 1995
C. 2000
D. 1998
Correct Answer: B. 1995


Question 3: What is a flow diagram used for?
A. Representing financial data
B. Showing a process or workflow
C. Writing code
D. Managing storage
Correct Answer: B. Showing a process or workflow


Question 4: What does MVP stand for?
A. Minimum Viable Product
B. Most Valuable Player
C. Multi-Version Protocol
D. Maximum Value Proposition
Correct Answer: A. Minimum Viable Product


*/