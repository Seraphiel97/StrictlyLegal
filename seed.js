require('dotenv').config();
require('./config/database');

const State = require('./models/state')
const Category = require('./models/category')

async function seed() {

    await State.deleteMany({});

    const states = await State.create([
        {name: 'Alabama', population: 5024279},
        {name: 'Alaska', population: 733391},
        {name: 'American Samoa', population: 48710},
        {name: 'Arkansas', population: 3011524},
        {name: 'California', population: 39538223},
        {name: 'Colorado', population: 5773714},
        {name: 'Connecticut', population: 3605944},
        {name: 'Delaware', population: 989948},
        {name: 'District of Columbia', population: 689545},
        {name: 'Florida', population: 21538187},
        {name: 'Georgia', population: 39538223},
        {name: 'Guam', population: 153836},
        {name: 'Hawaii', population: 1455271},
        {name: 'Idaho', population: 1839106},
        {name: 'Illinois', population: 12812508},
        {name: 'Indiana', population: 6785528},
        {name: 'Iowa', population: 3190369},
        {name: 'Kansas', population: 2937880},
        {name: 'Kentucky', population: 4505836},
        {name: 'Louisiana', population: 4657757},
        {name: 'Maine', population: 1362359},
        {name: 'Maryland', population: 6177224},
        {name: 'Massachusetts', population: 7029917},
        {name: 'Michigan', population: 10077331},
        {name: 'Minnesota', population: 5706494},
        {name: 'Mississippi', population: 2961279},
        {name: 'Missouri', population: 6154913},
        {name: 'Montana', population: 1084225},
        {name: 'Nebraska', population: 1961504},
        {name: 'Nevada', population: 3104614},
        {name: 'New Hampshire', population: 1377529},
        {name: 'New Jersey', population: 9288994},
        {name: 'New Mexico', population: 2117522},
        {name: 'New York', population: 20201249},
        {name: 'North Carolina', population: 10439388},
        {name: 'North Dakota', population: 779094},
        {name: 'Northern Mariana Islands', population: 47329},
        {name: 'Ohio', population: 11799448},
        {name: 'Oklahoma', population: 3959353},
        {name: 'Oregon', population: 4237256},
        {name: 'Pennsylvania', population: 13002700},
        {name: 'Puerto Rico', population: 3285874},
        {name: 'Rhode Island', population: 1097379},
        {name: 'South Carolina', population: 5118425},
        {name: 'South Dakota', population: 886667},
        {name: 'Tennessee', population: 6910840},
        {name: 'Texas', population: 29145505},
        {name: 'U.S. Virgin Islands', population: 87146},
        {name: 'Utah', population: 3271616},
        {name: 'Vermont', population: 643077},
        {name: 'Virginia', population: 8631393},
        {name: 'Washington', population: 7705281},
        {name: 'West Virginia', population: 1793716},
        {name: 'Wisconsin', population: 5893718},
        {name: 'Wyoming', population: 576851},
    ])

    await Category.deleteMany({});
    
    const categories = await Category.create([
        {name: 'Business and Consumer', description: 'Laws relating to the relationships between people and businesses'},
        {name: 'Criminal', description: 'Laws relating to actions with criminal charges(drugs, driving, assault)'},
        {name: 'Education', description: 'Laws relating to education systems'},
        {name: 'Employment', description: 'Laws relating to the protection of workers and business interests'},
        {name: 'Family', description: 'Laws relating to the caretaking of children and marital relationships'},
        {name: 'General Civil', description: 'Laws relating to general life in the United States'},
        {name: 'Real Estate', description: 'Laws relating to housing'},
        {name: 'Tax', description: 'Laws relating to money owed to government and financial burden of consumers'},
    ])

    console.log(states)
    console.log(categories)

    process.exit();

};

seed();