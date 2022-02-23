import asyncHandler from 'asyncHandler';

// @deac    Get goals
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message:'Hello and welcome to MERN stack goals API'})
})

// @deac    Set goals
// @route   POST /api/goals
// @access  Private
export const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set Goal'})
})

// @deac    Update goals
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

// @deac    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})