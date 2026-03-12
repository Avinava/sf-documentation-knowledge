---
title: "PartyFinancialAsset"
domain: psc-api
topic: partyfinancialasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.080Z
estimatedTokens: 1423
keywords: [PartyFinancialAsset, financial, asset, owned, individual, account, API, version, 58.0, later, Calls, Associated, Objects]
---

# PartyFinancialAsset

> Represents the financial asset owned by an individual or
         account. This object is available in API version 58.0 and later.

# PartyFinancialAsset

Represents the financial asset owned by an individual or account. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe asset owned by the party. Available in API version 59.0 and later.This field is a relationship field.Relationship NameAssetRelationship TypeLookupRefers ToAsset |
| DeclarationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the asset is declared. |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe description of the asset. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the asset. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| OwnershipEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset ends. |
| OwnershipPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe share owned by the party in percentage. |
| OwnershipStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the ownership of the asset starts. |
| PartyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The party that owns the asset.This field is a polymorphic relationship field.Relationship NamePartyRelationship TypeLookupRefers ToAccount, Contact |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the asset.Possible values are:ActiveInactive |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe unique identifier of the party asset in an external system. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of asset. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage type of the party financial asset.Possible value:PublicSector—Program and Benefit ManagementAvailable in API version 60.0 and later. |
| ValuationAmount | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The worth of the asset after valuation. |
| ValuationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the asset valuation was done. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PartyFinancialAssetChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 62.0)

Change events are available for the object.

[PartyFinancialAssetFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PartyFinancialAssetHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PartyFinancialAssetOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API Version 59.0)

Sharing rules are available for the object.

[PartyFinancialAssetShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API Version 59.0)

Sharing is available for the object.

## Related Topics

- PartyFinancialAssetChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- PartyFinancialAssetFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PartyFinancialAssetHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PartyFinancialAssetOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PartyFinancialAssetShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
