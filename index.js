class Aclass {
    #_isUsed
    Numbers = [];
    constructor(_n) 
    {
        this.n = _n;
        if (this.constructor == Aclass) throw new Error("Abstract classes can't be instantiated.")
        this.fill(this.n)
        this.#_isUsed = true
    }

    sort() { throw new Error("Abstract Method has no implementation"); }

    factorial() 
    {
        let temp = []
        for(let i = 0; i < this.Numbers.length; i++){
            var result = 1;
            let el = this.Numbers[i]
            while (el) {
                result *= el--;
            }
            temp.push(result)
        }
        return temp
    }

    fill(n) 
    {
        // так же можно было сделать метод приватным `#`
        if (this.#_isUsed == true) throw new Error("Метод “fill” можно вызывать только из методов класса AClass ");

        for (let i = 0; i < n; i++)     this.Numbers.push(Math.floor(Math.random() * 10));
    }

}

class Class1 extends Aclass 
{
    // bubble sort
    sort() 
    {
        const { length } = this.Numbers;
        for (let i = 0; i < length; i++) 
        {
            for (let j = 0; j < length - 1 - i; j++) 
            { 
                if (this.Numbers[j] > this.Numbers[j + 1]) 
                {
                    let temp = this.Numbers[j];
                    this.Numbers[j] = this.Numbers[j+1];
                    this.Numbers[j+1] = temp;
                }
            }
        }
        // console.log(this.Numbers)
        return this.factorial();
    }
}
class Class2 extends Aclass 
{
    // insertion sort
    sort()
    {
        const { length } = this.Numbers;
        let temp;
        for (let i = 1; i < length; i++) {
            let j = i;
            temp = this.Numbers[i];
            while (j > 0 && (this.Numbers[j - 1] > temp)) {
                this.Numbers[j] = this.Numbers[j - 1];
                j--;
            }
            this.Numbers[j] = temp;
        }
        // console.log(this.Numbers)
        return this.factorial();
    }
}

let e = new Class2(5)

console.log(e.Numbers)
console.log(e.sort())


Aclass