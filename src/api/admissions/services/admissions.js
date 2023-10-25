'use strict';

/**
 * admissions service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admissions.admissions');
