module.exports = function toReadable (number) {
  const numsObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
  };

  let result = [];
  
  if(number<20) result.push(numsObj[number]);

  if(number > 19) {
    let hundreds = Math.floor(number/100);
    if(hundreds>0) result.push(`${numsObj[hundreds]} hundred`);
    
    if(number%100!==0) {
      number -= hundreds*100;
      let decases = Math.floor(number/10) * 10;
      (decases<20) ? result.push(numsObj[number]) : result.push(`${numsObj[decases]}`);
      
      if(number%10!==0 && number>20) result.push(`${numsObj[number.toString().slice(-1)]}`);
    }
    
  }   
  return result.join(' ');
}
