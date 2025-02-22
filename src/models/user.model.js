const { Schema } = require("mongoose");
const { BaseSchema, ROLES } = require("../../configs/app.config");
const { required, ref } = require("joi");


const authSchema = {
    confirmation_token: {
        type: String,
        required: false,
        default: null,
    },
    confirmed_at: {
        type: Date,
        required: false,
        default: null,
    },
    remember_token: {
        type: String,
        required: false,
        default: null,
    },
    reset_password_token: {
      type: String,
      required: false,
      default: null,
      },
    reset_password_at: {
        type: Date,
        required: false,
        default: null,
    }
};

;

const userSchema = {
  last_name: {
    type: String,
    required: false,
    default: null,
  },
  first_name: {
    type: String,
    required: false,
    default: null,
  },
  username: {
    type: String,
    required: false,
    default: null,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ROLES,
    required: false,
    default: ROLES[0],
  },

  orders: [
    {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "orders",
    },
  ],
  
  favourites: [
    {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "products",
    },
  ],
};
const User = BaseSchema('users', { ...userSchema, ...authSchema });


module.exports = {User};