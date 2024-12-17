let navbar = document.querySelector('.header .flex .navbar');

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classlist.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber =>{
    inputNumber.oninput = () =>{
        if(inputNumber.value.length > inputNumber.maxlength) inputNumber.value
        =inputNumber.value.slice(0, inputNumber.maxlength);
    };
});

// // script.js
// document.querySelectorAll('.save job-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Job saved successfully!');
//         // Logic to save job to profile
//     });
// });

// document.querySelectorAll('.Apply Now-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Applied successfully!');
//         // Logic to redirect to company link
//     });
// });

        // // Event listener for 'Apply Now' button
        // document.getElementById('applyBtn').addEventListener('click', function (e) {
        //     e.preventDefault(); // Prevent form submission
        //     showMessage('applyMessage');
        // });

        // // Event listener for 'Save Job' button
        // document.getElementById('saveBtn').addEventListener('click', function () {
        //     showMessage('saveMessage');
        // });

        // // Function to show message
        // function showMessage(messageId) {
        //     const message = document.getElementById(messageId);
        //     message.style.display = 'block'; // Show the message
        //     setTimeout(() => {
        //         message.style.display = 'none'; // Hide the message after 3 seconds
        //     }, 3000);
        // }

        // document.addEventListener("DOMContentLoaded", function () {
        //     // Find the form and Apply Now button
        //     const form = document.querySelector('.flex-btn');
        //     const applyButton = document.querySelector('input[name="apply"]');
        
        //     // Add event listener to the Apply Now button
        //     applyButton.addEventListener('click', function (e) {
        //         e.preventDefault(); // Prevent the form submission
        //         showSuccessMessage(); // Call the function to show the message
        //     });
        
        //     // Function to show the success message
        //     function showSuccessMessage() {
        //         // Check if the message already exists
        //         let existingMessage = document.querySelector('.success-message');
        //         if (!existingMessage) {
        //             const messageDiv = document.createElement('div');
        //             messageDiv.classList.add('success-message');
        //             messageDiv.textContent = 'Applied successfully!';
        
        //             // Remove the message after 3 seconds
        //             setTimeout(() => {
        //                 messageDiv.remove();
        //             }, 3000);
        //         }
        //     }
        // });

//  // Select the Apply Now button
//  const applyButton = document.getElementById('applyBtn');
//  // Select the Save Job button
//  const saveButton = document.getElementById('saveBtn');

//  // Event Listener for Apply Now Button
//  applyButton.addEventListener('click', function (e) {
//      e.preventDefault(); // Prevent form submission
//      alert("Applied successfully!");
//  });

//  // Event Listener for Save Job Button
//  saveButton.addEventListener('click', function () {
//      alert("Job saved successfully!");
//  });


