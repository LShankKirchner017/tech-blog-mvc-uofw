const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model { }

Post.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    content: {
        type: DataTypes.TEXT('medium'),
        allowNull: false
    }, 
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'user',
            key: 'id'
        }
    },
    
    dataCreated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
},
    {
        hooks: {
            beforeCreate: async (post) => {
                const date = post.dataValues.dataCreated
                const newDate = new Date(date).toLocaleDateString()
                date = newDate
                return post
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post