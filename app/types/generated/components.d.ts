import type { Schema, Struct } from '@strapi/strapi';

export interface SharedTesting extends Struct.ComponentSchema {
  collectionName: 'components_shared_testings';
  info: {
    displayName: 'template';
    icon: 'bell';
  };
  attributes: {
    day: Schema.Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
    >;
    description: Schema.Attribute.Blocks;
    end_time: Schema.Attribute.DateTime;
    instructor: Schema.Attribute.String;
    region: Schema.Attribute.Enumeration<
      ['Depok', 'Kalimalang', 'Karawachi', 'Kenari']
    >;
    room: Schema.Attribute.String;
    start_time: Schema.Attribute.DateTime;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.testing': SharedTesting;
    }
  }
}
