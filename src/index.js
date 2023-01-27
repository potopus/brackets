  module.exports =   function check(str, bC) {
  // your solution
  let strParse = str.split('');//массив из приходящих скобок
  let stack=[];//сам стэк, в который вкладываем скобки
  const OPEN_BRACKETS = bC.map(x=>x=x[0]);//что бы понимать какой тип открытые или закрытые скобки
  // console.log(OPEN_BRACKETS);
  const BRACKETS_LIB=Object.fromEntries(bC.map(x=>x=x.reverse())); // для того  что бы знать какой тип должен лежать на верхушке стека, что бы этот элемент могли убрать из стэка
  // console.log(BRACKETS_LIB);
  //let count = 0;
  for (let i = 0; i<strParse.length; i++) {
    let currentSymbol = strParse[i];
    if (OPEN_BRACKETS.includes(currentSymbol)) { //если текущий символ является открытой скобкой то добавить в СТЭК
    stack.push(currentSymbol);  
    } else if (stack.length === 0){  // если текущий символ НЕ ОТкРЫТАЯ скобка и длина СТЭКА == 0, то строка проверяемая строка str не верна
      return false;
     }else if (BRACKETS_LIB[currentSymbol] === stack[stack.length-1]) { // если текущая закрытая скобка соответствует типу верхней открытой скобки в СТЭКЕ, то удалить открытую скобку из СТЭКА (сокращаем пару скобок)
      stack.pop()
    } else { //если закрытая тукущая скобка не совпадает с типом открытой скобки в верху СТЭКА, то сокрщение выполнить невомжно => FALSE
      return false
    }
  };
  // console.log("stack.length:  "+stack.length);
  return stack.length === 0
}

// console.log(check('()', [['(', ')']]))// -> true
// console.log(check('((()))()', [['(', ')']]));// -> true
// console.log(check('())(', [['(', ')']])); // -> false
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]));// -> true
// console.log(check('[(])', [['(', ')'], ['[', ']']])) // -> false
// console.log(check('[]()', [['(', ')'], ['[', ']']])) // -> true
// console.log(check('[]()(', [['(', ')'], ['[', ']']])) // -> false
