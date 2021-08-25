import React from 'react';
import Color from './Color.js';
import { faHome, faShieldAlt, faCopy, faCog, faBell, faChurch, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faComment, faShareSquare } from '@fortawesome/free-regular-svg-icons';

export default {
  company: 'Increment Technologies',
  APP_NAME: '@SYNQT_',
  APP_NAME_BASIC: 'SYNQT',
  APP_EMAIL: 'support@wearesynqt.com',
  APP_WEBSITE: 'support@wearesynqt.com',
  APP_HOST: 'com.synqt',
  pusher: {
    broadcast_type: 'pusher',
    channel: 'runway',
    notifications: 'App\\Events\\Notifications',
    orders: 'App\\Events\\Orders',
    typing: 'typing',
    messages: 'App\\Events\\Message',
    messageGroup: 'App\\Events\\MessageGroup',
    rider: 'App\\Events\\Rider',
  },
  DrawerMenu: [
    {
      title: 'Homepage',
      route: 'Homepage',
      icon: faHome,
      borderBottom: false,
      currentPage: 'drawerStack'
    },
    {
      title: 'Dashboard',
      route: 'Dashboard',
      icon: faTachometerAlt,
      borderBottom: false,
      currentPage: 'Dashboard'
    },
    {
      title: 'Settings',
      route: 'Settings',
      icon: faCog,
      borderBottom: false,
      currentPage: 'Settings'
    },
    {
      title: 'Donations',
      route: 'Donations',
      icon: faCog,
      borderBottom: false,
      currentPage: 'Donations'
    },
    {
      title: 'Community',
      route: 'communityStack',
      icon: faChurch,
      borderBottom: false,
      currentPage: 'Community'
    }
    // {
    //   title: 'Subscription',
    //   route: 'subscriptionStack',
    //   icon: faBell,
    //   borderBottom: false,
    //   currentPage: 'Subscription'
    // },
    // {
    //   title: 'Share Profile',
    //   route: 'share',
    //   icon: faShareSquare,
    //   borderBottom: true,
    //   currentPage: 'share'
    // }
  ],
  DrawerMenu1: [{
    title: 'Terms & Conditions',
    route: 'termsAndConditionStack',
    icon: faCopy,
    borderBottom: false
  },
  {
    title: 'Privacy Policy',
    route: 'privacyStack',
    icon: faShieldAlt,
    borderBottom: false
  }],
  tutorials: [],
  referral: {
    message:
      `Share the benefits of <<popular products>> with your friends and family. ` +
      `Give them ₱100 towards their first purchase when they confirm your invite. ` +
      `You’ll get ₱100 when they do!`,
    emailMessage: "I'd like to invite you on RunwayExpress!",
  },
  categories: [
    {
      type: 'Asian',
    },
    {
      type: 'American',
    },
    {
      type: 'Beverages',
    },
  ],
  retrieveDataFlag: 1,
  validateEmail(email) {
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  },
  cuisines:
  {
    1:'Filipino',
    2: 'Chinese',
    3: 'Japanese',
    4: 'Indian',
    5: 'Italian',
    6: 'Thai',
    7: 'Spanish',
    8: 'French',
    9: 'Korean',
    10: 'Turkish'
  }
};
