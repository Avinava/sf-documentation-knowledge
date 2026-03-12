---
title: "SustainabilityPurchase"
domain: netzero-cloud-dev-guide
topic: sustainabilitypurchase
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.194Z
estimatedTokens: 1305
keywords: [SustainabilityPurchase, sustainability, credits, purchases, carbon, API, version, 56.0, later, Calls, Associated, Objects]
---

# SustainabilityPurchase

> Represents information related to the sustainability credits purchases such
         as carbon credits. This object is available in API version 56.0 and later.

# SustainabilityPurchase

Represents information related to the sustainability credits purchases such as carbon credits. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe billing address associated with the sustainability purchase. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing city associated with the sustainability purchase. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing country associated with the sustainability purchase. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy level of the geocode for the billing address.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe billing address latitude associated with the sustainability purchase. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe billing address longitude associated with the sustainability purchase. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing address postal code associated with the sustainability purchase. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing state associated with the sustainability purchase. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe billing street associated with the sustainability purchase. |
| BrokerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the organization responsible for facilitating the supply of carbon credits.This field is a relationship field.Relationship NameBrokerRelationship TypeLookupRefers ToSupplier |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the sustainability purchase. |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external identifier of the data that is imported for the carbon credit project. |
| InvoiceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice number associated with the sustainability purchase. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the sustainability purchase record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe primary user associated with the sustainability purchase.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PurchaseOrderNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe purchase order number associated with the sustainability purchase. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the sustainability purchase.Possible values are:CARBON_CREDITS—Carbon Credits |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[SustainabilityPurchaseFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SustainabilityPurchaseHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[SustainabilityPurchaseShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- SustainabilityPurchaseFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- SustainabilityPurchaseHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- SustainabilityPurchaseShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
