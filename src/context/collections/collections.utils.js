export const collectionsToPreview = (collections) => {
  return Object.keys(collections).map((key) => collections[key]);
};
