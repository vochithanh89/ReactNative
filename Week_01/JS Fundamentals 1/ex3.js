/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

1. Calculate the average score for each team, using the test data below */
const dolphins = {
    team1: [96, 108, 89],
    team2: [97, 112, 101],
    team3: [97, 112, 101],
};
const koalas = {
    team1: [88, 91, 110],
    team2: [109, 95, 123],
    team3: [109, 95, 106],
};

/* 2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score) */

const calcAvgAni = (ani) => {
    const aniScores = [];
    for (let teamKey in ani) {
        if (Array.isArray(ani[teamKey])) {
            const avgScore = ani[teamKey].reduce((prev, score) => prev += score, 0) 
            / ani[teamKey].length;
            aniScores.push({
                name: teamKey,
                avgScore: avgScore
            });
        }
    }
    return aniScores;
}

console.log(calcAvgAni(dolphins))

const dolphinsAvg = calcAvgAni(dolphins);
const koalasAvg = calcAvgAni(koalas);

console.log('dolphins: ', dolphinsAvg);
console.log('koalas: ', koalasAvg);

/* 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points.
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy */


// const findWinTeam = (animates) => {

// }


// console.log('Win teams is: ', findWinTeam([
//     {name: 'dolphins', scores: dolphinsAvg}, 
//     {name: 'koalas', scores: koalasAvg}
// ]));