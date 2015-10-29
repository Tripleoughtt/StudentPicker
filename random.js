Array.prototype.remove = function(val) {
    var i = this.indexOf(val);
         return i>-1 ? this.splice(i, 1) : [];
};

function teamMaker(arr, val){
	var availStuds = students.concat();
	while (availStuds.length){
		var team = []
		for (var i = 0; i < teamNumber; i++){
			var teamMemb = availStuds[Math.floor(Math.random * availStuds.length)]
			team.push(teamMemb)
		}

	} 
}

var students = [];
var addButton = document.getElementById("add");
var studentInput = document.getElementById("studentName").value;

function addStudents(){
	var studentInput = document.getElementById("studentName").value;
	var studentsSplit = studentInput.split(',');

	studentsSplit.forEach(function(input){
		input = input.trim();
		students.push(input);
	});

	var list = document.getElementById("list");
	list.innerHTML = "";

	students.forEach(function(toList){

		var studentItem = document.createElement("LI");
		var studentText = document.createTextNode(toList);
		//document.body.parent.child.
		studentItem.id = toList;
		studentItem.appendChild(studentText);
		list.appendChild(studentItem);
	});	
}

addButton.addEventListener('click', addStudents);

// 	var studentInput = document.getElementById("studentName").value;
// 	var studentsSplit = studentInput.split(',')
// 	studentsSplit.forEach(function(input){
// 		input = input.trim();
// 		students.push(input)
// 	})
// 	var list = document.getElementById("list")
// 		list.innerHTML = ""
// 	students.forEach(function(toList){		
// 		var studentItem = document.createElement("LI")
// 		var studentText = document.createTex tNode(toList)
// 		//document.body.parent.child.
// 		studentItem.className = toList
// 		studentItem.appendChild(studentText)
// 		list.appendChild(studentItem)
// 	})
// 	
// });

var randomButton = document.getElementById("getRandom");

function keyPressed(event){

	if (event.charCode === 13){
		addStudents();
	}
}

var studentsDiv = document.getElementById("picks");
var removeStudents = document.getElementById('picks');

randomButton.addEventListener('click', function() {
	
	var teamNumber = document.getElementById('studentNum').value;
	var studentDiv = document.createElement("DIV");
	for ( var i = 0; i < teamNumber; i++){

		
	    var studentBox = document.createElement("box");
	    var random = students[Math.floor(Math.random() * students.length)];

	    if (students.length) {

		    var studentName = document.createTextNode(random);
		    studentDiv.className = "studentDiv";
		    studentBox.className =  "student";

			    if(teamNumber < 2){
			    	removeStudents.innerHTML = "";
				    studentBox.appendChild(studentName);
				    studentDiv.appendChild(studentBox);
				    
				}

				 else if (teamNumber > 1){
				 	document.getElementById(random).remove();
				    students.remove(random);
				    studentBox.appendChild(studentName);
				    studentDiv.appendChild(studentBox);
				    
				}
			studentsDiv.appendChild(studentDiv);

		} else if (random === undefined){
			break;
		}
	}
});
