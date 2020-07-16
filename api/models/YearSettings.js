/**
 * GeneralSettings.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        year: {
            type: 'Integer',
            primaryKey: true,
            unique: true,
            defaultsTo: function() {return new Date().getFullYear();}
        },

        mealPrice: {
            type: 'Integer',
            required: false,
            defaultsTo: 15
        },

        forumPrice: {
            type: 'Integer',
            required: true,
            defaultsTo: 1200
        },

        sjdPrice: {
            type: 'Integer',
            required: false,
            defaultsTo: 1700
        },

        forumPricePME: {
            type: 'Integer',
            required: true,
            defaultsTo: 800
        },

        sjdPricePME: {
            type: 'Integer',
            required: false,
            defaultsTo: 600
        },

        forumPriceResearch: {
            type: 'Integer',
            required: true,
            defaultsTo: 500
        },

        sjdPriceResearch: {
            type: 'Integer',
            required: false,
            defaultsTo: 1000
        },

        forumPriceFoundation: {
            type: 'Integer',
            required: true,
            defaultsTo: 800
        },

        sjdPriceFoundation: {
            type: 'Integer',
            required: false,
            defaultsTo: 600
        },

        offerPrice: {
            type: 'Integer',
            required: false,
            defaultsTo: 0
        },

        forumPriceINSAStartUp:{
            type:'Integer',
            required:true,
            defaultsTo:0
        }    

    }
};

