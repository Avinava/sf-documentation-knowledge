---
title: "FinclAcctPtyFinclAsset"
domain: automotive-cloud
topic: finclacctptyfinclasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:01.268Z
estimatedTokens: 1008
keywords: [FinclAcctPtyFinclAsset, financial, account, associated, asset, specific, contact, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# FinclAcctPtyFinclAsset

> Represents the financial account associated with the financial asset for a
         specific account or contact. This object is available in API version 60.0 and later.

# FinclAcctPtyFinclAsset

Represents the financial account associated with the financial asset for a specific account or contact. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Automotive and Vehicle and Asset Finance must be enabled.

## Fields

| Field | Details |
| --- | --- |
| AssociationEndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date till when the party asset was associated with the financial account. |
| AssociationStartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date from when the party asset was associated with the financial account. |
| AssociationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of association between the financial account and the party asset.Possible values are:CollateralTrade In |
| FinancialAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe financial account associated with the party asset.This field is a relationship field.Relationship NameFinancialAccountRelationship TypeLookupRefers ToFinancialAccount |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe unique identifier of the Financial Account Party Asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PartyFinancialAssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe party asset associated with the financial account.This field is a relationship field.Relationship NamePartyFinancialAssetRelationship TypeLookupRefers ToPartyFinancialAsset |
| PledgedAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe monetary value of the asset pledged as the collateral for the associated financial account. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the financial account party asset in an external system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FinclAcctPtyFinclAssetChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[FinclAcctPtyFinclAssetFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[FinclAcctPtyFinclAssetHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[FinclAcctPtyFinclAssetOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[FinclAcctPtyFinclAssetShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
