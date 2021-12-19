## Notes

### Add Javascript to a webpage from a separate JS file
1. Create a separate file and give it the .js extension
2. In the head section add the following text `<script src="file.js"></script>`
3. Replace `file.js` with the name of your Javascript file. 

### Buttons
The user can click on these and it will do whatever we have set it up to do. This will typically be to execute a Javascript function.

To get a button to call a Javascript function you add `onclick="func()"` to the button html. This will call the function named func when the button is clicked.

### Input Field
To get the text of the input field we can use `value = document.getElementById("input_name").value`

### Console Log
To see what is happening in your program you can log out text to the console. You can view this text in the developer panel.