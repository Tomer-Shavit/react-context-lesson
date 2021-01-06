import { createContext } from "react";
import { collectionsToPreview } from "./collections.utils";
import SHOP_DATA from "./shop.data";

const CollectionsContext = createContext({
  collections: SHOP_DATA,
  displayCollections: collectionsToPreview(SHOP_DATA),
});

export default CollectionsContext;
