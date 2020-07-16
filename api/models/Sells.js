/**
 * Sells.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        year: {
            type: 'integer',
            required: true
        },
        companySiret: {
            type: 'string',
            required: true
        },
        companyName: {
            type: 'string'
        },

        companyType: {
            type: 'string',
            enum: ['INSA Start-up','Entreprise classique', 'Start-up/PME', 'Organisme de recherche', 'Entreprise Fondation INSA Toulouse'],
            required: true
        },

        /* Command */
        
        orderOption: {
            type: 'string',
            required: true
        },
        optionPrice: {
            type: 'integer',
            required: true
        },
        orderMeals: {
            type: 'integer',
            defaultsTo: 0,
            required: false
        },
        mealPrice: {
            type: 'integer',
            required: false
        },
        billNumber: {
            type: 'integer',
            required: true
        },
        didPay: {
            type: 'boolean',
            defaultsTo: false
        }
    },

    // lifecycle callback
    beforeValidate: (data, next) => {
        //convert to boolean


        next();
    }
};
