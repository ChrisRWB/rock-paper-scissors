function getComputerChoice(){
const array = ['Rock','Paper','Scissors']
const random = [Math.floor(Math.random()*array.length)]
const compChoice = array[random]
return compChoice
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'Rock' && computerSelection === 'Rock'){
    return 'tie!!! both selected the same'
    
    }else if (playerSelection === 'Paper' && computerSelection === 'Paper'){
    return 'tie!!! both selected the same'
    
    }else if (playerSelection === 'Scissors' && computerSelection === 'Scissors'){
    return 'tie!!! both selected the same'
        
    }else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        return 'tie, both selected the same'
    
    }else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        return 'tie, both selected the same'
        
    }else if (playerSelection === 'Rock' && computerSelection === 'Rock'){
        return 'tie, both selected the same'
    }
}
const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));