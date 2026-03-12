---
title: "FinancialDealAsset"
domain: financial-services-cloud-object-reference
topic: financialdealasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.210Z
estimatedTokens: 1003
keywords: [FinancialDealAsset, assets, included, financial, deal, API, version, 54.0, later, Calls, Associated, Objects]
---

# FinancialDealAsset

> Represents the assets included in the financial deal. This object is
      available in API version 54.0 and later.

# FinancialDealAsset

Represents the assets included in the financial deal. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe location of the asset.This is a compound field of type Address and combines these fields: City, Country, GeocodeAccuracy, Latitude, Longitude, PostalCode, State, and Street. For more information, see Address Compound Fields. |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset involved in the financial deal.This is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| AssetType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of asset.Possible values are:Office SpaceResidential Space |
| FinancialDealId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe financial deal associated with the financial deal asset record.This is a relationship field.Relationship NameFinancialDealRelationship TypeLookupRefers ToFinancialDeal |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the financial deal asset record. |
| UnitCount | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total number of units. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unit of measure for the asset.This is a relationship field.Relationship NameUnitOfMeasureRelationship TypeLookupRefers ToUnitOfMeasure |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinancialDealAssetChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinancialDealAssetFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinancialDealAssetHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- FinancialDealAssetChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinancialDealAssetFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinancialDealAssetHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
