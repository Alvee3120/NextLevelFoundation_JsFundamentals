const getChaseVerdict = (target, scored, ballsleft) => {
  let runsNeed = target - scored;

  if (runsNeed <= 0) {
    return "won";
  }

  if (ballsleft <= 0) {
    return "lost";
  }

  let requiredRate = (runsNeed / ballsleft) * 6;
  if (requiredRate <= 6) {
    return `Need ${runsNeed} runs in ${ballsleft} balls | Comfortable`;
  } else if (requiredRate > 6 && requiredRate < 12) {
    return `Need ${runsNeed} runs in ${ballsleft} balls | Tough`;
  }else if (requiredRate > 12 ) {
    return `Need ${runsNeed} runs in ${ballsleft} balls | Almost Impossible`;
  }
};


console.log(getChaseVerdict(150, 149, 1));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(200, 200, 12));





