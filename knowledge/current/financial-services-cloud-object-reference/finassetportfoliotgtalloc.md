---
title: "FinAssetPortfolioTgtAlloc"
domain: financial-services-cloud-object-reference
topic: finassetportfoliotgtalloc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.311Z
estimatedTokens: 1301
keywords: [FinAssetPortfolioTgtAlloc, Stores, target, asset, allocation, financial, account, person, household, API, version, 62.0, later, Calls, Associated]
---

# FinAssetPortfolioTgtAlloc

> Stores target asset allocation for a financial account, person account, or
         household. This object is available in API version 62.0 and later.

# FinAssetPortfolioTgtAlloc

Stores target asset allocation for a financial account, person account, or household. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActualAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the actual amount of all assets. |
| ActualLastUpdated | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the last updated time of the Actual Percent. |
| ActualPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the actual allocation percentage of all assets. |
| AssetClass | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionDefines the major category of the asset type. |
| AssetSubclass | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the subclass of the asset class. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the asset allocation. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the asset portfolio target allocation. |
| NegativeTolerance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the allowed amount the actual allocation can be below the target, by rule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameOwnerRefers ToUser |
| PositiveTolerance | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the allowed amount the actual allocation can be above the target, by rule. |
| Sector | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents a group of stocks that have a lot in common. |
| TargetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionAssociates the target object with the asset allocation.This field is a polymorphic relationship field.Relationship NameTargetRefers ToAccount, FinancialAccount |
| TargetPercent | TypepercentPropertiesCreate, Filter, Sort, UpdateDescriptionRepresents the target allocation for the asset classification category. |
| VarianceAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the difference between the Target and Actual Amount. |
| VariancePercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRepresents the difference between the Target Percent and Actual Percent. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinAssetPortfolioTgtAllocChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinAssetPortfolioTgtAllocFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinAssetPortfolioTgtAllocHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FinAssetPortfolioTgtAllocShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FinAssetPortfolioTgtAllocChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinAssetPortfolioTgtAllocFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinAssetPortfolioTgtAllocHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- FinAssetPortfolioTgtAllocShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
