import type { Schema, Attribute } from '@strapi/strapi';

export interface FeesRegistrationFees extends Schema.Component {
  collectionName: 'components_fees_registration_fees';
  info: {
    displayName: 'school_fees';
    icon: 'apps';
    description: '';
  };
  attributes: {
    type: Attribute.String;
    daily: Attribute.String;
    monthly: Attribute.String;
    termly: Attribute.String;
    annual: Attribute.String;
  };
}

export interface RegRegistrationFees extends Schema.Component {
  collectionName: 'components_reg_registration_fees';
  info: {
    displayName: 'registration_fees';
    icon: 'connector';
  };
  attributes: {
    type: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fees.registration-fees': FeesRegistrationFees;
      'reg.registration-fees': RegRegistrationFees;
    }
  }
}
