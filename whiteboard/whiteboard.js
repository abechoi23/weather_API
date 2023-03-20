/* Given a string and an array of integers representing indices, capitalize all letters at the given indices.
For example:
capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits. */

function capitalize(str, arr) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (arr.includes(i)) {
        result += str.charAt(i).toUpperCase();
      } else {
        result += str.charAt(i);
      }
    }
    return result;
  }

  console.log(capitalize("abcdef",[1,2,5]))

  constcapitalize = (s, arr) => {
    s = s.split('')
    for (let i = 0; i < arr.length; i++) {
        s[arr[i]] ? s[arr[i]] = s[arr[i]].toUpperCase() : ''
    /*  Above Ternary Op runs same code as if statement below  
        if(s[arr[i]]){
            s[arr[i]] = s[arr[i]].toUpperCase()
        }*/
    } 
    return s.join('')
}