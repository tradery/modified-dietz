# Modified Dietz
The Modified Dietz Return is an algebraic method used to calculate the rate of return of an investment portfolio based on the cash flows of the portfolio. The method also accounts for the timing of when the cash flows come in and out of the portfolio.

## Usage
Include this package as follows:

```
const { getModifiedDietz } = require('modified-dietz');
```

The main function accepts a starting portfolio balance, and ending portfolio balance,
and an array of cashflows, one for each period in the set. 

For example, if my beginning portfolio balance was $1000, and at the end of 4 months it
is $1200, and I had cashflows of +$500 at the end of month one, and -$800 at the end of
month three, then I would call:

```
console.log(getModifiedDietz(1000, 1200, [500, 0, -800, 0]));
```

And the output returned would be `0.425531914893617`