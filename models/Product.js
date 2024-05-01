const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    Alink: {
        type: String
    },
    Aprice: {
        type: Number
    },
    Flink: {
        type: String
    },
    Fprice: {
        type: Number
    },
    price: {
        type: Number,
        required: true
    },
    availableQty: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
ProductSchema.set('toJSON', {
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);