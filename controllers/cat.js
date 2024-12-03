const Cat = require("../models/Cat")




// app.post('/api/cart', async (req, res) => {
//     try {
//         const { userId, cart, totalPrice } = req.body;

//         const newCart = new CartModel({
//             userId,
//             cart,
//             totalPrice,
//         });

//         await newCart.save();
//         res.status(200).json({ message: 'Cart saved successfully!' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to save cart.' });
//     }
// });
// create new category
const createCat = async(req, res, next)=>{
    try{
    //     console.log(req.body.desc);
    //     const newCat = new Cat({
    //         desc:req.body.desc,
    //     })
    //   ;
    //     const saveCat = await newCat.save();
    //     res.status(200).json({
    //         message:`category hasbeen created `,
    //         success:true, 
    //         saveCat
    //     })    
        const newCat = new Cat({
           
            ...req.body

        });
        const saveCat = await newCat.save()
        res.status(200).json(saveCat);
        console.log(saveCat)   
         
        
    }catch(err){ 
        console.log(err)  
        next(err)   ; 
    }    
}   


// get all category
const getCat = async (req, res, next) => {
    try {

        const category = await Cat.find({});
        res.status(200).json({
            message: `category Lists `,
            success: true,
            category
        })
    } catch (err) {
        next(err)
    }
}



module.exports = {createCat, getCat}