
// take children's names from local storage
const childrenNames = JSON.parse(localStorage.getItem('childrenNames'));

//to git all couse container
var myDiv = document.getElementsByClassName("wrapperCourses")[0];

// multidimensional array for courses
const courses = [
  { name: 'Introduction to Coding for Kids', tutor: 'Norah Alghamdi', prerequisite: 'Mathematics' , inHtml:myDiv.children[0].innerHTML/*myDiv.querySelector(".firstclass")*/},
  { name: 'Building Interactive Websites for Kids', tutor: 'Mohammed Alothman', prerequisite: 'Introduction to Coding' , inHtml:myDiv.children[1].innerHTML},
  { name: 'Introduction to Game Development for Kids', tutor: 'Sarah Albadr', prerequisite: 'Building Interactive Websites' ,inHtml:myDiv.children[2].innerHTML},
  { name: 'Advanced Coding Concepts for Kids', tutor: 'Mishal Alotaibi', prerequisite: 'Game Development' ,inHtml:myDiv.children[3].innerHTML},
  { name: 'Introduction to Robotics and Coding for Kids', tutor: 'Yasmin Ahmed', prerequisite: 'Advanced Coding Concepts' ,inHtml:myDiv.children[4].innerHTML},
  { name: 'App Development for Kids', tutor: 'Yasmin Ahmed', prerequisite: 'Introduction to Robotics and Coding' ,inHtml:myDiv.children[5].innerHTML},
  { name: 'Web Development for Kids', tutor: 'Sarah Albadr', prerequisite: null ,inHtml:myDiv.children[6].innerHTML},
  { name: 'Robotics Development for Kids', tutor: 'Mohammed Alothman', prerequisite: null ,inHtml:myDiv.children[7].innerHTML},
  { name: 'Coding Development for Kids', tutor: 'Norah Alghamdi', prerequisite: null ,inHtml:myDiv.children[8].innerHTML}

];

// arrays for tutors and prerequisites
var tutors = [...new Set(courses.map(course => course.tutor))];
const prerequisites = [...new Set(courses.filter(course => course.prerequisite !== '').map(course => course.prerequisite))];

// fill in the filter options from the array
const tutorFilter = document.getElementById('selectTutor');
tutors.forEach(tutor => {
  const anOption = document.createElement('option');
  anOption.value = tutor;
  anOption.textContent = tutor;
  tutorFilter.appendChild(anOption);
});

const prerequisiteFilter = document.getElementById('selectprerequisite');
prerequisites.forEach(prerequisite => {
  const option = document.createElement('option');
  option.value = prerequisite;
  option.textContent = prerequisite;
  prerequisiteFilter.appendChild(option);
});

// functio to filter courses based on tutor or prerequisite
function filterCourses() {
  const selectedTutor = tutorFilter.value;
  const selectedPrerequisite = prerequisiteFilter.value;
  
  const filteredCourses = courses.filter(course => {
    return (course.tutor === selectedTutor) || (course.prerequisite === selectedPrerequisite);
  });
  
  // add the filtered courses to the form
  myDiv.innerHTML = '';
  for (var i=0 ; i<filteredCourses.length;i++){
    var aCourse = filteredCourses[i].inHtml;
    myDiv.innerHTML += '<div class="containerPicture">'+aCourse+'</div>';
  }
  
}

// /*----------------------------------------- ------------------------------*/

// document.querySelector('form').addEventListener('submit', handleFormSubmit);
document.getElementsByTagName("form")[1].addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {

  event.preventDefault();

  var selectedChild = document.getElementById('selectedKid').value;
  var checkbox1Checked = document.getElementById("course1").checked;
  var checkbox2Checked = document.getElementById("course2").checked;
  var checkbox3Checked = document.getElementById("course3").checked;
  var checkbox4Checked = document.getElementById("course4").checked;
  var checkbox5Checked = document.getElementById("course5").checked;
  var checkbox6Checked = document.getElementById("course6").checked;
  var checkbox7Checked = document.getElementById("course7").checked;
  var checkbox8Checked = document.getElementById("course8").checked;
  var checkbox9Checked = document.getElementById("course9").checked;

  if (!selectedChild || selectedChild === "") {////////////////////////////////////////
    alert('Please select a kid.');
    return;
  }



  if (!checkbox1Checked && !checkbox2Checked && !checkbox3Checked&&!checkbox4Checked &&
    !checkbox5Checked && !checkbox6Checked && !checkbox7Checked&&!checkbox8Checked&&!checkbox9Checked) {
    alert('Please select at least one course.');
    return;
  }
  var courseCheckboxes = document.querySelectorAll('input[name="course"]:checked');
  var infoContainer = document.getElementById('info');

  infoContainer.innerHTML = `
<h1 style="margin: 0 auto 30px" >Course Enrollment Details</h1>
<h2>Selected Kid: ${selectedChild}</h2>
<h2>Selected Courses:</h2>`; 
for (var i = 0; i < courseCheckboxes.length; i++) {
  for (var j = 0; j < courses.length; j++) {
    if (courseCheckboxes[i].value === courses[j].name) {
      infoContainer.innerHTML  += '<p>Course:' + courses[j].name + "<br>" + "Tutor: " + courses[j].tutor + "<br></p>";
      break;
    }
  }
}
document.getElementById("info").style.color = "black";
  document.querySelector('form').reset();
  alert("The Course Enrollment Details is displayed in begining of the page");
}