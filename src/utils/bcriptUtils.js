const bcript = require('bcrypt');

async function genHashPassword(password) {
    const saltRound = 10;
    const currentPass = password;

   return bcript.genSalt(saltRound)
    .then((salt) => {
        return bcript.hash(currentPass, salt)
    })
};

async function verifyPass(currPassword, password) {
   return await bcript.compare(currPassword, password);
};

module.exports = {
    genHashPassword,
    verifyPass,
}