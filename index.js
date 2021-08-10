
function saturdayFun(activity = 'roller-skate') {
   return `This Saturday, I want to ${activity}!`;
}

function mondayWork(mondayWork = 'go to the office') {
    return `This Monday, I will ${mondayWork}.`
}

function wrapAdjective(star = "*") {
    return function(phrase = "special"){
        return `You are ${star}${phrase}${star}!`
    }}