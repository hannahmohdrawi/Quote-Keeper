# Quote Keeper Project
This project was to practice writing a feature test for the development of a web application that allows users to save and display a collection of their favourite quotes. 


## Description
This code was created as part of Codecademy's Full Stack Engineer Course Module 28, Back-End and Feature Testing.
This project only covers feature tests up to the point of getting an error about the exercise phase of your test suite as it focuses on the top level of the TDD testing.
To progress, one would need to drop down to the server layer of the Testing Pyramid.

## Codecademy instructions:
1.

The overall scope of our testing suite is that we want to test behavior that happens when a user visits our project root, which will be the homepage of our website.

In the file user-visits-root-test.js, write a describe block with a docstring that states the context that you will be testing your feature in, followed by an empty callback function.
2.

Nest a second describe block with a docstring that states what feature you are testing, followed by an empty callback function.
3.

Inside the empty callback function, add an it block with a docstring that describes the desired behavior of the feature you are testing, followed by an empty callback function.
4.

For the next step you will need to have a quote to use as an example in writing your test. The information you will need is

    The quote itself
    Who the quote is attributed to
    The source of the quote

For example:

The quote itself: ‘Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.’

Who the quote is attributed to: Marianne Williamson.

The source of the quote: A Return to Love: Reflections on the Principles of A Course in Miracles.

If would like help choosing a quote, you can view Bruce Lee Quotes by clicking here.
5.

Setup Inside the callback function for the it block, setup three const variables that you will use to mimic the user’s responses to each of the input fields we are testing for. Set each of the variables to a string based on the example quote you chose in the previous step. The variable names should be:

    quote
    attributed
    source

6.

Exercise Use the global browser variable to set the url of our test browser to the root of our project by calling .url() and passing it an argument of '/'.
7.

Next, fill in the contents of the quote by telling our browser to set the value of a particular <textarea> element.

To do so, call browser.setValue() with textarea[id=quote], followed by the quote variable that you created earlier.
8.

Call .setValue() on the global browser variable to set the value of an input element with id=attributed, to your const variable named attributed.
9.

Call .setValue() on the global browser variable to set the value of an input element with id=source, to your const variable named source.
10.

Call .click() on the global browser variable, and pass it as an argument an input with the type=submit.
11.

Verify

Write three assert statements, to verify that the substring of each of your three const variables from the setup phase of your test are included in the string that is made up of all the text from the element with id=quotes.
12.

Eventually, we will want to verify that once the user submits their data, it will be sent to the server, and then be accessible in the browser, inside a div with id=quotes and name=quotes in our index.html. In this course, we are only dealing with tests at the top level of the Testing Pyramid, so the final step in this project will be writing the necessary HTML code in index.html to get the test to pass— until the point of receiving an assertion error about the exercise phase.

Go to your index.html file.
13.

Run your test suite and fix each error you receive one at a time, focusing on the feedback about the HTML that the test expected. input and textarea elements should be given both name and id attributes with the same value.

Address each error by creating the necessary element in your index.html page, until you reach the assertion error concerning your exercise phase, which would propel you to move down to the server level test.


## Languages used:
* HTML
* JavaScript

##Project completed Date:
* 07 Jul 24
