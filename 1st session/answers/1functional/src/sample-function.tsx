function SampleFunction() 
{
    // they multiply all even numbers in an array by 10 and add them all, storing the final sum in the variable "result".
    const multiplyEvenBy10ThenSumI = (numList: number[]) => {
        let result = 0;
        for (let i = 0; i < numList.length; i++) {
          if (numList[i] % 2 === 0) {
            result += numList[i] * 10;
          }          
        }
        return result;
    }

    const multiplyEvenBy10ThenSumF = (numList: number[]) => {        

        /// Tej Solution Code 
        const isEven = numList.length % 2 === 0;

        return numList.filter((n: number) => n % 2 === 0)
            .map((a: number) => isEven ? a * 10 : a - 1)
            .reduce((a: number, b: number) => a + b, 0);        
        
        // return numList.filter((n: number) => n % 2 === 0)
        //     .map((a: number) => a * 10)
        //     .reduce((a: number, b: number) => a + b, 0);
    }    

    /// Tom's solution
    function doOperation(numList: number[], operation: (a : number) => number): number {
        return numList
          .filter((n: number) => n % 2 === 0)
          .map((a: number) => operation(a))
          .reduce((a: number, b: number) => a + b, 0)
      }
    
    const getResult = () => {        

        return multiplyEvenBy10ThenSumF([0, 1, 2, 3, 4]);
    }

    const getResultTom = () => {
        const input = [0, 1, 2, 3, 4];
        const operationplusone = (a: number) => a - 1;
        const operationtimesten = (a: number) => a * 10;
        return doOperation(input, input.length % 2 === 0 ? operationtimesten : operationplusone);
    }

    return <div>
        Tej Result is {getResult()}<br />
        Tom's Result is {getResultTom()}
    </div>
}

export default SampleFunction;