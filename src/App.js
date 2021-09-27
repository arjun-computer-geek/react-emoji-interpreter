import React, { useState } from 'react'
import './App.css'

var emojiDictionary = {
    "😀": "Grinning Face",
    "😍": "Smiling Face With Heart-Eyes",
    "😊": "Smiling Face",
    "😜": "Winking Face With Tongue",
    "😐": "Neutral Face",
    "😒": "Unamused face",
    "😈": "Smiling Face with Horns",
    "😘": "Face Blowing a Kiss",
    "😷": "Face with Medical Mask",
    "🤖": "Robot",
    "🤟": "Love-You Gesture",
    "🤙": "Call Me Hand"
  };

  const emojies = Object.keys(emojiDictionary);
const App = () => {

    const [meaning, setMeaning] = useState('');

    const emojiInputHandler = (e) => {
        const userInput = e.target.value;
        var meaning = emojiDictionary[userInput];

        if(meaning === undefined){
            meaning = "We don't have this in our database";
        }
            setMeaning(meaning);
        
    }
    const emojiClickHandler = (emoji) => {
        const meaning = emojiDictionary[emoji];
        setMeaning(meaning);
    }
    return (
        <div className="container">
            <h1>Search Emojies</h1>
            <input onChange={ emojiInputHandler}/>
            <h2>{meaning}</h2>

            <h3>Emoji we have</h3>
            {emojies.map(emoji => {
                return( 
                <span 
                className="emoji" 
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}>
                        {emoji}
                    </span>)
            })}
            
        </div>
    )
}

export default App
