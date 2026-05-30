import groceryModal from "../modals/groceryModal.js";
import fs from 'fs';

//add grocery item 
const addGrocery = async(req,res)=>{
    let image_filename = `${req.file.filename}`

    const grocery  = new groceryModal({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
    })
    try {
        await grocery.save();
        res.json({success:true,message:"Grocery Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
//all grocery list
const listGrocery = async(req,res)=>{
    try {
        const groceries = await groceryModal.find({})
        res.json({succes:true,data:groceries})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove grocery item 
const removeGrocery = async(req,res)=>{
    try {
        const grocerie = await groceryModal.findById(req.body.id);
        fs.unlink(`uploads/${grocerie.image}`,()=>{})

        await groceryModal.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Grocery Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addGrocery,listGrocery,removeGrocery}