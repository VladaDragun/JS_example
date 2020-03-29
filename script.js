	function delete_elem() {
	let tel = document.getElementById('select_choice').value;
	let select = document.querySelector('select');

	//select.remove(tel);
  select.removeChild(select.options[select.selectedIndex]);
	console.log(tel);

	function addRow() {
		var table = document.getElementById('results');
		var row = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		td1.innerHTML = document.all.results.rows.length;
		td2.innerHTML = tel;
		td3.innerHTML = select.options.length;
		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		table.children[1].appendChild(row);
	}

	addRow();
}

function add_opt() {
	let text = document.getElementById('input').value;
	let select = document.getElementById('select_choice');

 
//select.options[2] = new Option(text, text, true, true);
 
var second = select.options[2];
var newOpt = document.createElement("option");
newOpt.text = text;
newOpt.value = text;
console.log(newOpt);
select.insertBefore(newOpt, second);

  /*for (var i=0; i<select.options.length; i++) {
  	if(!text === '') {
  		var opt = select.options[i];
  		var nextopt = select.options[i+1];
  		select.insertBefore(nextopt, opt);

  	}
  }*/
} 


function image() {
	let invisible = document.querySelector('div.invisible');

	invisible.style.display = "inline-block";
}