import userModal from "../modals/userModal.js";

//add items to userCart
const addToCart = async (req, res) => {
  try {
    let userData = await userModal.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModal.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log("Error");
    res.json({ success: false, message: "Error" });
  }
};

//remove items from userCart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModal.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModal.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log("Error");
    res.json({ success: false, message: "Error" });
  }
};

//fetch userCart data
const getCart = async (req, res) => {
  try {
    let userData = await userModal.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log("Error")
    res.json({success:false,message:"Error"})
  }
};

export { addToCart, removeFromCart, getCart };
