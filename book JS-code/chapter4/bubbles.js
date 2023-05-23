var scores =[69,50,60,58,54,54,58,50,53,48,57,69,33,34,35,38,44,51,69];

function printAndGetHightScore(scores){
    var output;
    var hightScores=0; 

    for (var i=0; i< scores.length; i++){
            output = "Bubble solution # " + i + " score: "+ scores[i];
            console.log(output);
    if( scores[i]> hightScores){
     hightScores=scores[i];
    }
   } return hightScores;
}

function getBestResults(hightScores, scores){
    var newBubbleArray=[];
    for(var i=0; i< scores.length;i++){
        if (scores[i]== hightScores){
            newBubbleArray.push(i)  
        }   
} return newBubbleArray;
}


var hightScores = printAndGetHightScore(scores);
console.log( "Bubble tests: "+ scores.length);
console.log("Highest bubble score: " + hightScores);

var bestSolution = getBestResults(hightScores, scores);
console.log("Solutions with the highest csore: " + bestSolution);