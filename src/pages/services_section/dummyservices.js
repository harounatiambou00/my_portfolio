export const services = [
    {
        title: 'fullstack_website',
        plans: [
            {
                id: 0,
                title: 'basic',
                advantagesIndexes:[
                    1, 3, 5  
                ],
                priceperHour: {
                    'USD': 1,
                    'FCFA': 500
                }
            },
            {
                id: 1,
                title: 'standard',
                advantagesIndexes:[
                    1, 2, 3, 5, 6  
                ],
                priceperHour: {
                    'USD': 1.5,
                    'FCFA': 750
                }
            },
            {
                id: 3,
                title: 'premium',
                advantagesIndexes:[
                    0,1, 2, 3, 4, 5, 6, 7
                ],
                priceperHour: {
                    'USD': 2,
                    'FCFA': 1000
                }
            }
        ]
    },
    {
        title: 'frontend_website',
        plans: [
            {
                id: 0,
                title: 'standard',
                advantagesIndexes:[
                    1, 3 
                ],
                priceperHour: {
                    'USD': 0.75,
                    'FCFA': 400
                }
            },
            {
                id: 1,
                title: 'premium',
                advantagesIndexes:[
                    0, 1, 2, 3, 4 
                ],
                priceperHour: {
                    'USD': 1,
                    'FCFA': 500
                }
            },
        ]
    },
    {
        title: "restful_api",
        plans: [
            {
                id: 0,
                title: 'standard',
                advantagesIndexes:[
                    1, 3 
                ],
                priceperHour: {
                    'USD': 0.75,
                    'FCFA': 500
                }
            },
            {
                id: 1,
                title: 'premium',
                advantagesIndexes:[
                    0, 1, 2, 3, 4 
                ],
                priceperHour: {
                    'USD': 1,
                    'FCFA': 500
                }
            },
        ]
    },
    {
        title: 'design_web',
        plans: [
            {
                id: 0,
                title: 'standard',
                advantagesIndexes: [
                    0
                ],
                priceperHour: {
                    'USD': 0.5,
                    'FCFA': 250
                }
            }
        ]
    }
]