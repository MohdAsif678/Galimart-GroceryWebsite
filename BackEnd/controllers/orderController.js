import orderModal from "../modals/orderModal.js";
import userModal from "../modals/userModal.js";

//placing order for frontend
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModal({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModal.findByIdAndDelete(req.body.user, { cartData: {} });
    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//users order for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModal.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModal.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: "Error" });
  }
};

//api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModal.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// fetch only the latest order for this user
const userLatestOrder = async (req, res) => {
  try {
    const [latest] = await orderModal
      .find({ userId: req.body.userId })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!latest) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found" });
    }

    res.json({ success: true, data: latest });
  } catch (error) {
    console.error("userLatestOrder error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export { placeOrder, userOrders, listOrders, updateStatus, userLatestOrder };
