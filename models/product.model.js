const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const product = mongoose.model(
    "Product",
    mongoose.Schema(
        {
            productName: {
                type: String,
                required: true,
                unique: true,
            },
            category: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category",
            },
            productShortDescription: {
                type: String,
                required: true,
            },
            productDescription: {
                type: String,
                required: false,
            },
            productPrice: {
                type: Number,
                required: true,
            },
            productSalePrice: {
                type: Number,
                required: true,
                default: 0
            },
            productImge: {
                type: String
            },
            productSKU: {
                type: String,
                required: false,
            },
            ProductType: {
                type: String,
                required: true,
                default: "simple"
            },
            stockStatus: {
                type: String,
                default: "IN"
            }
        }, {
            toJSON: {
                tranform: function (doc, ret) {
                    ret.productId = ret._id.toString();
                    delete ret._id;
                    delete ret.__v;
                }
            }
        }
    )
);

module.exports = {
    product,
}