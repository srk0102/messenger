//Importing Scheemas
const USER = require("../scheema/userSignupScheema")

/**
 * function to validate data
 * @param {Object} req
 * @param {staus} res
 * @param {Function} next
 */
const validData = async(req, res, next) => {
  next()
}

module.exports = {
  validData
}