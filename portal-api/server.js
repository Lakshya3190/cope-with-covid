const express = require('express')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const database = {
    entities: [
        {
            kind: 'Medical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Amrapali Leisure Valley',
            description: 'Extra masks by a quantity of 4.',
            created: new Date()
        },
        {
            kind: 'Technical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Amrapali Leisure Valley',
            description: 'Can provide vehicle repair equipment.',
            created: new Date()
        },
        {
            kind: 'Supplies',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Ace Aspire',
            description: 'Can offer 10kgs of rice and 4 kgs of sugar.',
            created: new Date()
        },
        {
            kind: 'Medical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Shipra Riviera',
            description: 'Hand Sanitizers x 10',
            created: new Date()
        },
        {
            kind: 'Technical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Shipra Riviera',
            description: 'Can provide vehicle jump start.',
            created: new Date()
        },
        {
            kind: 'Supplies',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Ace Aspire',
            description: 'Water Bottles x 10',
            created: new Date()
        },
        {
            kind: 'Medical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Gaur City',
            description: 'Extra masks by a quantity of 4.',
            created: new Date()
        },
        {
            kind: 'Technical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Gaur City',
            description: 'Can provide assistance with electrical issues.',
            created: new Date()
        },
        {
            kind: 'Technical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Gaur City',
            description: 'Extra masks by a quantity of 4.',
            created: new Date()
        },
        {
            kind: 'Technical',
            email: 'lakshya_tyagi@icloud.com',
            phone: '8384081791',
            society: 'Amrapali Leisure Valley',
            description: 'Extra masks by a quantity of 4.',
            created: new Date()
        }
    ]
}

const shop_database = {
    entities: [
        {
            type: 'Medical',
            delivery_type: "Home Delivery",
            contact: '9599844401',
            shop_name: 'A1 Pharmacy',
            society_name: 'Amrapali Leisure Valley',
            description: 'Extra masks by a quantity of 4.',
            created: new Date()
        },
        {
            type: 'Groceries',
            delivery_type: "Home Delivery",
            contact: '9599844402',
            shop_name: 'A1 Groceries',
            society_name: 'Amrapali Leisure Valley',
            description: 'Large stock of milk.',
            created: new Date()
        },
        {
            type: 'Medical',
            delivery_type: "Pick-up",
            contact: '9599844409',
            shop_name: 'A1 Pharmacy',
            society_name: 'Amrapali Leisure Valley',
            description: 'Restocked with cough and cold medicine.',
            created: new Date()
        },
        {
            type: 'Hygiene',
            delivery_type: "Home Delivery",
            contact: '9599844406',
            shop_name: 'Bean Groceries',
            society_name: 'Amrapali Leisure Valley',
            description: 'Lizol restocked',
            created: new Date()
        },
        {
            type: 'Fruits/Vegetables',
            delivery_type: "Home Delivery",
            contact: '9599844408',
            shop_name: 'Grocery Mart',
            society_name: 'Amrapali Leisure Valley',
            description: '40 kgs of Bananas and 12 kgs of mangoes recieved.',
            created: new Date()
        },
        {
            type: 'Fruits/Vegetables',
            delivery_type: "Pick-Up",
            contact: '9599844401',
            shop_name: 'A1 Fruits',
            society_name: 'Amrapali Leisure Valley',
            description: '40 kgs of oranges. ',
            created: new Date()
        }

    ]
}




app.post('/register', (req, res) => {
    const {kind, email, phone, society, description} = req.body;
    database.entities.push({
        kind: kind,
        email:email,
        phone: phone,
        society: society,
        description: description,
        created: new Date()
    })

    res.json(database.entities[database.entities.length-1])
})

app.post('/findService', (req,res) => {
    const {societyName} = req.body;

    const portalData = {
        data: [

        ]}

    for(let i=0;i<database.entities.length;i++){
        if(database.entities[i].society === societyName){
            portalData.data.push(database.entities[i])
        }
    }
    return res.json(portalData.data)
})


app.post('/registerShop', (req, res) => {
    const {societyName} = req.body;

    const shopData = {
        shop_data: [

        ]}
        for(let i=0;i<shop_database.entities.length;i++){
            if(shop_database.entities[i].society_name === societyName){
                shopData.shop_data.push(shop_database.entities[i])
            }
        }
        return res.json(shopData.shop_data)

})


app.post('/vulnerabilityAnalysis', (req, res) => {
    const {ques1, ques2, ques3, ques4, ques5} = req.body;
    
    const marks_ques1 = parseInt(ques1);
    const marks_ques2 = parseInt(ques2);
    const marks_ques3 = parseInt(ques3);
    const marks_ques4 = parseInt(ques4);
    const marks_ques5 = parseInt(ques5);

    const total = marks_ques1 + 
             marks_ques2 +
             marks_ques3 +
             marks_ques4 +
             marks_ques5;
    
    const result = total/5;
    return res.json(result)
    
})


app.listen(3005, () => {
    console.log('The server is running on port 3005');
})