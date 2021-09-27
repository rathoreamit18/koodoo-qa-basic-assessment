const {
    standardDeviation,
    sanitizeAmounts,
    roundToTwoDp,
    analysePayments
} = require('./analyze.js')
const test = require('ava')

test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([1, 2, 2, 2, 1, 1]), 0.5)
})

test('Payments are analysed correctly', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
            "Amount": 1,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 3,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 4,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: 2.5,
        median: 2.5,
        min: 1,
        standardDeviation: 1.12,
    })
})

test('Standard Deviation calculation', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([0.1,2,3,4]), 7.68)
})

test('Payments are analysed correctly', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
            "Amount": 0.1,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 3,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 4,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: 2.5,
        median: 2.5,
        min: 1,
        standardDeviation: 1.12,
    })
})

test('Standard Deviation calculation', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([0.1,2.99999,3,4]), 7.68)
})

test('Payments are analysed correctly', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([{
            "Amount": 0.1,
            "TransactionInformation": "Payment One"
        },
        {
            "Amount": 2.9999,
            "TransactionInformation": "Payment Two"
        },
        {
            "Amount": 3,
            "TransactionInformation": "Payment Three"
        },
        {
            "Amount": 4,
            "TransactionInformation": "Payment Four"
        }
    ]), {
        max: 4,
        mean: 2.5,
        median: 2.5,
        min: 1,
        standardDeviation: 1.12,
    })
})

test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([10.97,25.95,15.50]), 0.5)
})

test('Do not consider Payments with null amount/TransactionInformation ', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([
    {
        "Amount": 10.97,
        "TransactionInformation": "50 Dogs Bar"
    },
    {
        "TransactionInformation": "Bank Account Verification"
    },
    {
        "Amount": 25.95,
        "TransactionInformation": "Shorts Direct"
    },
    {
        "Amount": 15.50,
        "TransactionInformation": "Barrel Flop"
    }
]), {
		max: 25.95,
        mean: 17.47,
        median: 15.50,
        min: 10.97,
        standardDeviation: 7.68,        
    })
})

test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([10.97,25.95,15.50]), 0.5)

})

test('Transaction amount less than 0 is not considered', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([
    {
        "Amount": 10.97,
        "TransactionInformation": "50 Dogs Bar"
    },
    {
        "Amount": 25.95,
        "TransactionInformation": "Shorts Direct"
    },
    {
        "Amount": -50
    },
    {
        "Amount": 15.50,
        "TransactionInformation": "Barrel Flop"
    }
]), {
        max: 25.95,
        mean: 17.47,
        median: 15.50,
        min: 10.97,
        standardDeviation: 7.68, 
    })
})

test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([10.97,25.95,&,15.50]), 0.5)
})

test('Transaction amount not in number format is not considered', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([
    {
        "Amount": 10.97,
        "TransactionInformation": "50 Dogs Bar"
    },
    {
        "Amount": 25.95,
        "TransactionInformation": "Shorts Direct"
    },
    {
        "Amount": &,
        "TransactionInformation": "Koodoo Mortgage Co."
    },
    {
        "Amount": 15.50,
        "TransactionInformation": "Barrel Flop"
    }
]), {
        max: 25.95,
        mean: 17.47,
        median: 15.50,
        min: 10.97,
        standardDeviation: 7.68, 
    })
})

test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([10.97,25.95,__,15.50]), 0.5)
})

test('Transaction amount not in number format is not considered', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([
    {
        "Amount": 10.97,
        "TransactionInformation": "50 Dogs Bar"
    },
    {
        "Amount": 25.95,
        "TransactionInformation": "Shorts Direct"
    },
    {
        "Amount": __,
        "TransactionInformation": "Koodoo Mortgage Co."
    },
    {
        "Amount": 15.50,
        "TransactionInformation": "Barrel Flop"
    }
]), {
        max: 25.95,
        mean: 17.47,
        median: 15.50,
        min: 10.97,
        standardDeviation: 7.68, 
    })
})

test('Standard Deviation is correct for Basic Data', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(standardDeviation([10.97,25.95,__,15.50]), 0.5)
})

test('Transaction amount not in number format is not considered', t => {
    //First Argument for t.is is actual, second is expected
    t.deepEqual(analysePayments([
    {
        "Amount": 10.97,
        "TransactionInformation": "50 Dogs Bar"
    },
    {
        "Amount": 25.95,
        "TransactionInformation": "Shorts Direct"
    },
    {
        "Amount": ,
        "TransactionInformation": "Koodoo Mortgage Co."
    },
    {
        "Amount": 15.50,
        "TransactionInformation": "Barrel Flop"
    }
]), {
        max: 25.95,
        mean: 17.47,
        median: 15.50,
        min: 10.97,
        standardDeviation: 7.68, 
    })
})