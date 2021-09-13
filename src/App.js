
import './App.css';
import Cards from './Components/Cards'
import Sdata from './Components/Sdata';

function ncards(val)
{
  return(
    <Cards 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )
}

function App() {
  return (
    <>
    <h1 className='heading'>Top 5 Netflix Series</h1>
    <hr></hr>
    <div className="maindiv">
    {Sdata.map(ncards)}
    </div>
    </>

  );
}

export default App;
