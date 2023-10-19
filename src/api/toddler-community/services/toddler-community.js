'use strict';

/**
 * toddler-community service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::toddler-community.toddler-community');
