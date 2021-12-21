var CaesarCipher = function (shift) {
    return{
     encode: function(str){
       //encrypting function
       let res= '';
       str = str.toUpperCase();
       let newChar;
       for(let i = 0; i < str.length; i++){
            //convert the input to an ascii char in order to shift it 
         if(str.charCodeAt(i) > 90 | str.charCodeAt(i) < 65){
           res += str[i]
           continue;
         }
         newChar = str.charCodeAt(i) + shift
         if(newChar > 90){
           newChar  -= 90;
           newChar += 64;
         }
          res += String.fromCharCode(newChar);
         
       }
       return res 
     },
     decode: function (str){
       //function to decode an encrypted input
      //encode the function
       let res= '';
       str = str.toUpperCase();
       let newChar;
       for(let i = 0; i < str.length; i++){
           //taking of strange characters in code such as slash 
         if(str.charCodeAt(i) > 90 | str.charCodeAt(i) < 65){
           res += str[i]
           continue;
         }
         
         newChar = str.charCodeAt(i) - shift
         if(newChar < 65){
           newChar  = 65 - newChar;
           newChar = 91 - newChar;
         }
          res += String.fromCharCode(newChar);
         
       }
       return res 
     }
   }
 };
 var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
 c.encode('WAFFLES'); // returns 'HTIJBFWX'
 c.decode('BFKKQJX');  //returns WAFFLES