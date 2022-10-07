export function trialDivision(number) {
  let interaction = 1;
  let zeroWastedivision = 0;
  while(interaction <= number ) {
    if(number % interaction == 0) {
      zeroWastedivision = zeroWastedivision + 1;
    }
    interaction = interaction + 1;
  }
  return zeroWastedivision == 2;
}
