const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Bow = db.define('bow', {
  centershot: {
    type: Sequelize.ENUM(['on-center', 'past-center']),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  drawWeight: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 30,
      max: 75
    },
    drawLength: {
      type: Sequelize.INTEGER,
      defaultValue: 28,
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 23,
        max: 32
      }
    }
  }
})

module.exports = Bow

/**
 * instanceMethods
 */

// Bow.prototype.peakDrawWeight = function () {
//       if (this.drawlength < 28) {

//       }
// }

// User.encryptPassword = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// /**
//  * hooks
//  */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.beforeCreate(setSaltAndPassword)
// User.beforeUpdate(setSaltAndPassword)
// User.beforeBulkCreate(users => {
//   users.forEach(setSaltAndPassword)
// })
