import * as mockProductsData from './mockProductsData';
import * as mockEventsData from './mockEventsData';
import * as mockBookingsData from './mockBookingsData';
import { verticalEmbedProviders } from 'wix-rich-content-plugin-vertical-embed';

const { event, booking, product } = verticalEmbedProviders;
const mockDataMap = {
  [event]: mockEventsData,
  [booking]: mockBookingsData,
  [product]: mockProductsData,
};

export const mockFetchVerticalEmbedFunc = vertical => {
  return () => Promise.resolve(mockDataMap[vertical]);
};
