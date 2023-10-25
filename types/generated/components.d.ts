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

export interface StaffGalleryStaffGallery extends Schema.Component {
  collectionName: 'components_staff_gallery_staff_galleries';
  info: {
    displayName: 'staff_gallery';
    icon: 'apps';
  };
  attributes: {
    staff_image: Attribute.Component<'staff-image.staff-image', true>;
    section: Attribute.String;
  };
}

export interface StaffImageStaffImage extends Schema.Component {
  collectionName: 'components_staff_image_staff_images';
  info: {
    displayName: 'staff_image';
    icon: 'chartBubble';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fees.registration-fees': FeesRegistrationFees;
      'reg.registration-fees': RegRegistrationFees;
      'staff-gallery.staff-gallery': StaffGalleryStaffGallery;
      'staff-image.staff-image': StaffImageStaffImage;
    }
  }
}
