import { useState } from "react";

function PlainTextToCipherText() {
  // We will keep track of two different piece of states namely plaintext and ciphertext using useState hook

  const [plaintext, setPlaintext] = useState(""); 
  const [ciphertext, setCiphertext] = useState("");

  /* This funtion will generate the corressponding ciphertext for a plaintext. We expect the user to enter 
    only character from [A...Z] and spaces
    We will iterate through our plaintext. For each character in the plaintext, we will first get its ASCII value
    we will subtract this value by 65 to get the index of the character (Here we assume that A is 0 indexed and Z is 25 indexed)
    Now, for a particular index we will calculate the index of its corressponding cipher character. This will be equal to
    25-i, where i is index. For example, if character is 'B', the index will be 1 and hence the correspoding index will be 25-1 = 24,
    this 24 will corresspond to Y
    After calculating this index, we will add 65 to get the ASCII value and then get the correspoding character to regenrate the ciphertext
  */
  const getCipherText = (text) => {
      let ret="";
      for(let i=0;i<text.length; i++){
          if(text[i]==' '){
              ret+=' ';
              continue;
          }
          const a = text.charCodeAt(i)-65;
          let char = String.fromCharCode(65+25-a);
          ret+=char;
      }  
      return ret;
  }
  const containerStyle = {
    width: "1000px",
    height: "200px",
    backgroundColor: "lightGray",
    border: "10px"
    };


  return (
      <div >
          <form>
            <label><h1>Enter your plaintext to be enciphered:</h1>
                <textarea
                    type="text" 
                    style={containerStyle}
                    value={plaintext}
                    onChange={(e) => {
                        setPlaintext(e.target.value);
                        setCiphertext(getCipherText(e.target.value));
                    }}
                />
            </label>
         </form>
         <h1>Cipher Text:</h1>
         <div style={containerStyle}>
            {ciphertext}
         </div>
     </div>
    
  )
}

export default PlainTextToCipherText;