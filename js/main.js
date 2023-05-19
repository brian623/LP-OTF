$(document).ready(function() {
    function setActiveMenu() {
        $('.menu-link-lp').click(function() {
        $('.menu-link-lp').removeClass('active');
        $(this).addClass('active');
        });
    }

    // call function to active menu
    setActiveMenu();

    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the page from refreshing when submitting the form
      
        // Get the values of the fields
        const textValue = document.getElementById("text").value;
        const selectValue = document.getElementById("select").value;
        const dateValue = document.getElementById("date").value;
        const textareaValue = document.getElementById("textarea").value;
        const checkboxValue = document.getElementById("checkbox").checked;
      
        // Save the values in an object
        const formData = {
          text: textValue,
          select: selectValue,
          date: dateValue,
          textarea: textareaValue,
          checkbox: checkboxValue
        };
      
        // Add the object to an array
        const dataArr = [];
        dataArr.push(formData);
      
        // Print the array to the console
        console.log(dataArr);
      
        // Show the success message
        document.getElementById("message").textContent = "The information has been saved successfully.";
      });
});