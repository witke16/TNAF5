
class Osoba{

    nazwa = "";
    dataUrodzenia =  new Date();
    email = "";
    constructor(nazwa, dataUrodzenia, email) {
        this.nazwa = nazwa;
        this.dataUrodzenia = dataUrodzenia;
        this.email = email;

    }
}

const test1 = new Osoba ("Jan Kowalski", Date.parse('01 Jan 1970'), "asasa@sasa.pl");
const test2 = new Osoba ("Jan Nowak", Date.parse('15 May 1985'), "jn@pl.pl");
const test3 = new Osoba ("Joe Doe", Date.parse('25 May 1999'), "jdoe@com.pl");

function WyswietlInfo(value)
{
 
        if (value == "Jan Kowalski"){
            return (
        <>
        <h1>hello, {test1.nazwa}!
    
        data urodzenia: {test1.dataUrodzenia}!
    
        email: {test1.email}!
        
        </h1> 
        </>
            );
        }
        else if (value == "Jan Nowak"){
            return (  <>
            <h1>hello, {test2.nazwa}!
        
            data urodzenia: {test2.dataUrodzenia}!
        
            email: {test2.email}!
            
            </h1> 
            </>
             );}
        else  if (value == "Joe Doe"){
            return (     <>
                <h1>hello, {test3.nazwa}!
            
                data urodzenia: {test3.dataUrodzenia}!
            
                email: {test3.email}!
                
                </h1> 
                </>
                 );}
    
   
}

function SelectFunction()
{


    


return(
    
    <form>
      <label>
        Wybierz osobe
        <br></br>
        <select onChange={WyswietlInfo("Jan Kowalski")}>
          <option value="Jan Kowalski">Jan Kowalski</option>
          <option value="Jan Nowak">Jan Nowak</option>
          <option value="Joe Doe" >Joe Doe</option>
        </select>
      </label>
    </form>
);
}  


export default SelectFunction;
