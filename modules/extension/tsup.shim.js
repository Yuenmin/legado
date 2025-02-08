const localStorageShim = { getItem() {} };
const locationShim = {};
const importMetaShim = { env: {} };
export {
  localStorageShim as localStorage,
  locationShim as location,
  importMetaShim as "import.meta",
};
