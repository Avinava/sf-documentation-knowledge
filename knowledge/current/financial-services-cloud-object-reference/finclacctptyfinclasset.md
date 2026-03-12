---
title: "FinclAcctPtyFinclAsset"
domain: financial-services-cloud-object-reference
topic: finclacctptyfinclasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.061Z
estimatedTokens: 1323
keywords: [FinclAcctPtyFinclAsset, party, asset, associated, financial, account, API, version, 61.0, later, Calls, Special, Access, Rules, Objects]
---

# FinclAcctPtyFinclAsset

> Represents information about a party asset associated with a financial
         account. This object is available in API version 61.0 and later.

# FinclAcctPtyFinclAsset

Represents information about a party asset associated with a financial account. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This is a standard object and is available only when you turn on the Financial Account Management Standard Objects setting.

## Fields

| Field | Details |
| --- | --- |
| AssociationEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party asset's association ends with the financial account. |
| AssociationStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the party asset was associated with the financial account. |
| AssociationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of association between the financial account and the party asset.Possible values are:CollateralTrade In |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe financial account associated with the party asset.This field is a relationship field.Relationship NameFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party asset associated with the financial account.This field is a relationship field.Relationship NamePartyFinancialAssetRelationship TypeLookupRefers ToPartyFinancialAsset |
| PledgedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe monetary value of the asset pledged as the collateral for the associated financial account. |
| SourceSystemIdentifier | Typeexternal lookupPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the financial account party asset in an external system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinclAcctPtyFinclAssetChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FinclAcctPtyFinclAssetFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FinclAcctPtyFinclAssetHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FinclAcctPtyFinclAssetOwnerSharingRule](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FinclAcctPtyFinclAssetShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FinclAcctPtyFinclAssetChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- FinclAcctPtyFinclAssetFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- FinclAcctPtyFinclAssetHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- FinclAcctPtyFinclAssetOwnerSharingRule (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- FinclAcctPtyFinclAssetShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
