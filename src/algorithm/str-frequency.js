/**
 * Js counts the letters/Numbers that appear most frequently in a string
 */

 getFrequency = str => {

    let strArry = [... str];
    let obj = {};
    let maxValue = '';
    let maxNum = 0;

    strArry.forEach(s => {
        if(!obj[s]){
            obj[s] = 1;
        } else {
            obj[s] ++;
            if(obj[s] > maxNum){
                maxNum = obj[s];
                maxValue = s;
            }
        }
    });

    return 'maxValue = ' + maxValue +', maxNum ='  + maxNum;
 }

 

 console.log(getFrequency('1120000023334545667kkliiiihyu'));