import express from 'express'
const router = express.Router()

// Arrow functions
router.get('/', (req, res, next) => {
  res.send({message: 'Users Page'})
});

// Exporting an object as the default import for this module
export default router