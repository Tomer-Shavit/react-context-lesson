import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import CollectionsContext from "../../context/collections/collections.context";
import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const { displayCollections } = useContext(CollectionsContext);
  return (
    <div className="collections-overview">
      {displayCollections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
