import {regions} from "./regions.js"
const hotels = [

]
function setHotel (name, region) {
    const regionId = regions.filter((item) => item.region_id === region)
    const item = {
        id: hotels.length + 1,
        name,
        regionId: regionId[0].region_id

    }
    return item
}
console.log(setHotel('fkkf', 21));
