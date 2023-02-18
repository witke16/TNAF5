import { useState } from "react";


    
class Osoba{
    id = -1;
    nazwa = "";
    dataUrodzenia =  new Date();
    email = "";
    constructor(id, nazwa, dataUrodzenia, email) {
        this.id = id
        this.nazwa = nazwa;
        this.dataUrodzenia = dataUrodzenia;
        this.email = email;

    }
}
const test1 = new Osoba (1,"Jan Kowalski", '01 Jan 1970', "asasa@sasa.pl");
const test2 = new Osoba (2,"Jan Nowak", '15 May 1985', "jn@pl.pl");
const test3 = new Osoba (3,"Joe Doe", '25 May 1999', "jdoe@com.pl");
let userslist = [test1, test2, test3]

function SelectFunction() {
    
    const [selected, setSelected] = useState(userslist[0]);
    const handleChange = event => {
       
      setSelected(userslist.find(user => user.id==event.target.value));
    };
  
  
    return (
      <div className="Select">
        <select onChange={handleChange}>
          { userslist.map(osoba => <option value={osoba.id}>{osoba.nazwa}</option>)}
        </select>
        <div>
          <h1> {selected.nazwa} <br></br></h1>
           {selected.dataUrodzenia} <br></br>
           {selected.email}
        </div>
      </div>
  
    );
  }

export default SelectFunction;
