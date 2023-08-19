function addCommas(num) {
    let formattedNum = num.toLocaleString("en-US");
    console.log(typeof(formattedNum))
    return formattedNum
}

// %,d
console.log(addCommas(10));


module.exports = addCommas;





