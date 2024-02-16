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
        return numList.filter((n: number) => n % 2 === 0)
            .map((a: number) => a * 10)
            .reduce((a: number, b: number) => a + b, 0);
    }    

    const getResult = () => {
        return multiplyEvenBy10ThenSumF([0, 1, 2, 3, 4]);
    }

    return <div>
        My Result is {getResult()}
    </div>
}

export default SampleFunction;