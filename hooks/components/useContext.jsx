import { useContext } from "react";
import { ToggleTheme } from "../src/App";
import { useState } from "react";


function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"white":"black",
    padding:"2rem",
    margin:"2rem",
  }
  const [likes, setLikes] = useState(0);
  const [isContentBtnClkd, setIsContentBtnClkd] = useState(false);
  
  const increaseLike = ()=>{
    setLikes(likes+1);
  }

   const ContentBtnClkd = () => {
     alert("Content button is clicked");
     setIsContentBtnClkd(true);
   };

  return (
    <div style={themeStyle}>
      <p style={{ display: isContentBtnClkd ? "block" : "none" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <button onClick={ContentBtnClkd}>Continent</button>
      <p>{likes}</p>
      <button onClick={increaseLike}>Likes</button>
    </div>
  );
}

export default UseContext;
