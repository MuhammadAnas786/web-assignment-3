let DBData=[];

/*-----------------------functions---------------------------*/
function removeRows() {
    var empTab = document.querySelector('.index_table')
    var rowCnt = empTab.rows.length

    for (var i = rowCnt - 1; i > 0 - 1; i--) {
        if (i > 0)
            document.querySelector('.index_table').deleteRow(i);

    }
}


function showData(user){
    for (var val of user) {

        var { id, name, address,email,phone_number,gender,course_code } = val
        var empTab = document.querySelector('.index_table')
        var rowCnt = empTab.rows.length // GET TABLE ROW COUNT.
        var tr = empTab.insertRow(rowCnt)
        for (var c = 0; c < 9; c++) {
            var td = document.createElement('td') // TABLE DEFINITION.
            td = tr.insertCell(c)
            if (c == 0) {
                td.innerHTML = id;
            }
            if (c == 1) {
                td.innerHTML = name
            }
            if (c == 2) {
                td.innerHTML = gender
            }
           
            if (c == 3) {
                td.innerHTML = email
            }
            if (c == 4) {
                td.innerHTML = phone_number
            }
            if (c == 5) {
                td.innerHTML = course_code
            }
            if (c == 6) {
                td.innerHTML = address.street_address+'\n'
                + address.city+', '+address.country
            }
            if (c == 7) {
                var button = document.createElement('a');

                // SET INPUT ATTRIBUTE.
                button.innerHTML = "EDIT";
                button.setAttribute('class', 'mybutt');
                // ADD THE BUTTON's 'onclick' EVENT.
                /* button.setAttribute('onclick', '#');*/
                button.setAttribute('onclick', 'UpdateForm(this)');
                button.setAttribute('id', `${id}`)
                button.setAttribute('name', `EDIT`)
                td.appendChild(button);

                

                var button3 = document.createElement('a');

                // SET INPUT ATTRIBUTE.
                button3.innerHTML = "Delete";
                button3.setAttribute('class', 'mybutt');
                // ADD THE BUTTON's 'onclick' EVENT.
                /* button.setAttribute('onclick', '#');*/
                button3.setAttribute('onclick', 'Delete(this)');
                button3.setAttribute('name', `customerdetails`)
                button3.setAttribute('id', `${id}`)
                td.appendChild(button3);
            }


        }

    }
}

function search3(event) {
    removeRows()
    
    let searchField = event.value
    const FilteredMonsters = DBData.filter(db=>
        db.id.includes(searchField)||db.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.email.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.gender.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.course_code.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.address.street_address.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.address.city.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())||
        db.address.country.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
          )
         
          showData(FilteredMonsters)
          


}
function Add(event){
    localStorage.clear();
    window.location.href="Form.html"
}

function UpdateForm(event) {
    // console.log(event.id)
    
    if(event.name==="EDIT"){
    localStorage.setItem("id",event.id);
    window.location.href="Form.html"
}
   

    
}


function Delete(event) {
    let  url=`https://faculty-app1.herokuapp.com/api/v1/${event.id}`
   let options = {
       method: 'DELETE',
       headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
   }
    fetch(url,options).then(res=>{
        
        
            if(res.status==200)
           location.reload();
            else window.alert("some error")
        }).catch(err=>{
            console.log(err);
            window.alert("No results Found")
        });
}
/*---------------------End Functions--------------------------*/