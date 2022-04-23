    let record = [];// to store result
    let index = 0;

    function saveRecord(w,b,r){
        record[index] = {
            width:w,
            breadth:b,
            result:r
        };
        index++;
    }
    
    function calcArea(width,breadth){
        let calc = width * breadth;
        let result = calc+" sqft";
        saveRecord(width,breadth,result);
        return result;
    }

    //ငွေလဲနှုန်း
    let rates = {
        usd:1636,
        eur:1933,
        sgd:1288
    }

    function exchangeToMmk(amount,currency){
        let calc = amount*rates[currency];
        let result =calc + " mmk";
        return result;
    }

    function exchangeFromMmk(amount,currency){
        let calc = amount/rates[currency];
        let result =calc +" "+ currency;
        return result;
    }

    let fruitPrice = {
        orange:100,
        mango:250,
        apple:70
    }

    function calcTax(amount,percentage=5){
        return (amount*percentage)/100;
    }

    function calcCost(quantity,fruit){
        let calc = quantity*fruitPrice[fruit];
        let result = calc + " mmk";
        return {
            name : fruit,
            unitPrice:fruitPrice[fruit],
            quantity,
            cost:calc,
            tax:calcTax(calc),
            total:calc + calcTax(calc)
        };
    }