const db = require("./conn");

class CrittersList {
    constructor() {
        this.name;
    };
    static async getall() {
        try {
            const res = await db.any(`SELECT * FROM critters;`);
            console.log(res);
            return res;
        }catch (err) {
                return err.message;
            
        }
    }
}
module.exports = CrittersList;