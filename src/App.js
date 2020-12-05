
import './Style.css';
import Video from "./video.mp4";
import Image from "./start1.jpg";




function App() {
  return (
    <div className="App">
      <h1 className="titleRed">Hello there!!  </h1>
     <div  style={{border:"solid 1px black", maxWidth:"100%"}}>




<br />
<img  className="Photo" src="/break.png" alt="image" />
<br  />

<img   className="Photo"src="/breath.png" alt="image" />
<br/>

<img   className="Photo"src={Image} alt ='Image' />

</div>

<video autostart autoPlay muted src={Video} type="video/mp4"  style={{width:700, height:240}} />



    </div>
  );
}

export default App;
