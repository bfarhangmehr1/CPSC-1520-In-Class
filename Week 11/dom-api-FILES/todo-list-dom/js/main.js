/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

// required vars
var todos = document.querySelector('.todo-list');
var todoCount = 0;

// todo form submit handler, adds a new todo item to the 'list'
document.querySelector('.todo-frm').addEventListener('submit', function (evt) {
	
	var div,
		checkbox,
		label,
		labelText,
		todoText;

	todoText = evt.target.elements['todo-item'].value;
	//                 \<form>  / \ <input name=".."/\text/


	// adding a todo regardless, so might as well increment now...
	todoCount += 1;
	
	if (todoText === '') {
		todoText = 'Todo ' + (todoCount); //  defualt text for TODO item
	}

	// create required elements  - they are sort of "free-floating" at this point
	div = document.createElement('div'); // this creates a div nodes with ability to have attributes
	checkbox = document.createElement('input'); // creates an <input> node
	label = document.createElement('label'); // a <label> node 
	labelText = document.createTextNode(todoText); //  a node that only has "raw" text - "Todo 1"

	// set appropriate attributes
	checkbox.setAttribute('type', 'checkbox');  // <input type="cheakbox"  />
	checkbox.setAttribute('id', 'todo-' + todoCount); //  <input type="cheakbox" id="todo-1"  />
	label.setAttribute('for', 'todo-' + todoCount); // <label for="todo-1"/>
	label.setAttribute('contenteditable', ''); // <label for="todo-1" contenteditable />
	/*
	   .setAttribute(attributeName, attributeValue)
	   .getAttribute(attibuteName) - reuturn the attributeValue
	   .hasAttribute(attributeName)  -returne true if the attribute exists
	   .removeAttribute(attributeName)  -returen the attribute from the element
	 */
	 

	// build document fragment  - "assemble" the variious elements
	label.appendChild(labelText);  // <label for="todo-1" contenteditable> Todo 1 </label>	                                
	div.appendChild(checkbox);    //<div>
								 //  <div> <input type="chekbox"  id = todo-1/>
								 //</div>								
								
	div.appendChild(label);     //<div>
								  // <input type="chekbox"  id= todo-1/>
								  // <label for="todo-1" contenteditable> Todo 1</label>
								  //</div>

   	// TODO: Add the code to put a down arrow=\u21e9	

	var dnArrow = document.createElement('span');
    var dn= '\u21e9'; //unicode valu of up arrow
	var dnText = document.createTextNode(dn);
	dnArrow.setAttribute('class','arrow down');
	dnArrow.appendChild(dnText);
	div.appendChild(dnArrow);

	//add some up/down arrows to our <div>
	var upArrow = document.createElement('span');
	var up= '\u21e7'; //unicode valu of up arrow
	var upText = document.createTextNode(up);
	upArrow.setAttribute('class','arrow up');
	upArrow.appendChild(upText);
	div.appendChild(upArrow);

	// add the document fragment to the document for rendering
	todos.appendChild(div);    // I place my "free-floating"  <div> into the DOM of my page

	// clear the form
	evt.target.reset();
	evt.preventDefault(); // prevent teh defualt behaviour of the "submit" event
});

document.querySelector('.todo-list').addEventListener('click', function (evt) {
	// check for click on an arrow

	if (evt.target.classList.contains('arrow')) {
		var targetTodo = evt.target.parentNode;   // the <div> containing my <span class="arrow ..">
		var todoList = targetTodo.parentNode;      // the <div> containig my <div> <input /> <label/> <span /></div>
		var siblingTodo;
	// identify the type of arrow (i.e. down or up)
	if (evt.target.classList.contains('dn')) {
	siblingTodo = targetTodo.nextElementSibling;
	// insert the sibling before the target
	todoList.insertBefore(siblingTodo,targetTodo);  // footnote #1
	} else if (evt.target.classList.contains('up')) {
	siblingTodo = targetTodo.previousElementSibling;
	// insert the sibling before the target
	todoList.insertBefore(targetTodo, siblingTodo);  //footnote #1
	  }
	}
   });

   /** 1) there is no insertAfter method. It can be emulated by combining the insertBefor method with nextSibiling

    */