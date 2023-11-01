const User = require('./User')
const Post = require('./Post')

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Post}