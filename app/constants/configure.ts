const config = require('./config.json');

declare global {
  interface StoreData {
    type: string;
    name: string;
    url: string;
    sizes: string[];
  }
}

export function getStores(): StoreData[] {
  return config.stores;
}

export function getTemp(): any {
  return null;
}
