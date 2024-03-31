let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = 'block';  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Sample data (replace with actual attendance data)
const totalAttendance = 50;
const studentsPresent = 35;
const studentsAbsent = totalAttendance - studentsPresent;

// Calculate percentage of attendance
const attendancePercentage = (studentsPresent / totalAttendance) * 100;

// Update HTML elements with attendance data
document.getElementById('total-attendance').textContent = totalAttendance;
document.getElementById('students-present').textContent = studentsPresent;
document.getElementById('students-absent').textContent = studentsAbsent;

// Update width of attendance bars based on percentage
document.getElementById('bar-present').style.width = attendancePercentage + '%';
document.getElementById('bar-absent').style.width = (100 - attendancePercentage) + '%';



function handleButtonClick(sectionNumber) {
  // You can define the behavior for each button click here
  console.log("Button " + sectionNumber + " clicked!");
  // For example, you can navigate to a different page or perform some action
}
