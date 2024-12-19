const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const ApiError = require('../utils/errorUtils');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")
    
        if(!token){
            throw new ApiResponse(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Unauthorized Access")
        }
        
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401,"Invalid acces token")
        
    }
};

module.exports = authMiddleware;
 