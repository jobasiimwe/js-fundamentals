
// strings, arrays, maps, sets, and others
// .keys(), .values(), .entries(), ... spread syntax, for..of
describe('iterables', () => {
    it('can copy array by spread', () => {
        const original = [1, 2, 3];
        const copy = [...original]
        expect(original).toStrictEqual(copy)
    })

    it('map', () => {
        const map = new Map()
        map.set('id', 1);
        map.set('id2', 2);
        // array destructuring
        for(let [key, value] of map) {
            console.log(key, value)
        }
        //for( let value of map.values()) { //... }
        for( let key of map.keys()) { //... 
            console.log('key', key)
        }
        //for (let [idx,val] of arr.entries())
        
    });
});