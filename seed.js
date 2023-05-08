require('dotenv').config();
require('./config/database');

const BaseService = require('./models/baseService')

async function seed() {

    await BaseService.deleteMany({});

    const baseServices = await BaseService.create([
        {name: 'Chariot', dusting: true, floors: true, kitchenSurfaces: true, bathroomSurfaces: true, cabinetCleaning: false, interiorWindows: false, baseboards: false, refrigeratorInterior: false, ovenDegrease: false, organization: false, price: 75},
        {name: 'Wagon', dusting: true, floors: true, kitchenSurfaces: true, bathroomSurfaces: true, cabinetCleaning: true, interiorWindows: true, baseboards: true, refrigeratorInterior: false, ovenDegrease: false, organization: false, price: 100},
        {name: 'Carriage', dusting: true, floors: true, kitchenSurfaces: true, bathroomSurfaces: true, cabinetCleaning: true, interiorWindows: true, baseboards: true, refrigeratorInterior: true, ovenDegrease: true, organization: true, price: 150},
    ])

    console.log(baseServices)

    process.exit();

};

seed();