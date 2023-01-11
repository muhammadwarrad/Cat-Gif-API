import "./App.css";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
  

  

function App() {
  
  const [gifs, setGifs] = useState([]);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    getGif();
  }, []);

  const getGif = () => {
    fetch(
      "https://thingproxy.freeboard.io/fetch/http://api.giphy.com/v1/gifs/search?q=cat&api_key=tuOPOQklxsdCJTh6gEiuj5ZaPKWJ8CQW",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setGifs(data.data);
      });
  };
// function limit (){
// if (index === 0) 
// return (
// (index + 5)
// )
// };
  function handleClick(){
    setIndex(prev => {
      if(prev < 49) {
        return prev + 1
      } else {
        return 0
      }
    })
    console.log(handleClick)
    
  };
  function back(){
    setIndex(prev => {
      if (prev > 0){
        return prev - 1
      } else {
        return 49
      }
    } )
    
  };
  
  


  return (
    <div className="App">
      
      {gifs.length && 
        <>
       <h1>CAT Gifs!!!!</h1>
        <h2>{gifs[index].title}</h2>
        <h3> NO DATA= Refresh Data</h3>
       
          <div className="container">
         
          <button className="bob" onClick={back}><AiOutlineArrowLeft/></button>
          <img src={gifs[index].images.original.url} alt="bruh"/>
          <button className= "foop" onClick={handleClick}><AiOutlineArrowRight/></button>
          </div>

        </>
      }
    </div>
  );
}
export default App;