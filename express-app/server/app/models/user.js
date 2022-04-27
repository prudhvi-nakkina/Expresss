const mongoose = require('mongoose')

// schema for users
const userSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    profilePic: { type: String, default: '' },
    mood: {type: String, default:''},
    addedOn: { type: Number, default: Date.now() }
})

userSchema.method({
    saveData: async function () {
        return this.save()
    },
    findOneAndUpdate: async function (_id,body) {
        return this.findOneAndUpdate(_id,body)
    }
})
userSchema.static({
    findData: function (findObj) {
        return this.find(findObj)
    },
    findOneData: function (findObj) {
        return this.findOne(findObj)
    },
    findOneAndUpdateData: function (findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        })
    },
})
export default mongoose.model('wc-user', userSchema)
