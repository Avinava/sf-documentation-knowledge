---
title: "ProviderAcctTerritoryInfo"
domain: life-sciences-dev-guide
topic: provideracctterritoryinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.861Z
estimatedTokens: 1827
keywords: [ProviderAcctTerritoryInfo, engagement, data, account, user, assigned, territory, includes, provider, visit, date, preferred, address, planned, activities]
---

# ProviderAcctTerritoryInfo

> Represents the engagement data between an account and a user within an
         assigned territory, which includes next provider visit date, preferred address, and planned
         activities. This object is available in API version 65.0 and later.

# ProviderAcctTerritoryInfo

Represents the engagement data between an account and a user within an assigned territory, which includes next provider visit date, preferred address, and planned activities. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe account ID associated with provider account territory info.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| AssignmentApprovalStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe approval status when an account is added to the territory through manual request.Possible values are:ApprovedPendingRejected |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the provider account territory info is active.The default value is false. |
| IsAvailableOffline | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record will be downloaded to the mobile application.The default value is false. |
| IsTargetedAccount | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account is a target for the territory.The default value is false. |
| LastProviderVisitDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date of the last submitted visit for this account in this territory. |
| LastProviderVisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID associated with the last submitted visit for this account in this territory.This field is a relationship field.Relationship NameLastProviderVisitRefers ToProviderVisit |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the provider account territory info. |
| NextProviderVisitDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date of the next planned visit for this account in this territory. |
| NextProviderVisitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the next planned provider visit record.This field is a relationship field.Relationship NameNextProviderVisitRefers ToProviderVisit |
| NextProviderVisitObjective | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe objective for the next visit with the healthcare provider, derived from the next visit objective on the last visit in this territory. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PreferredAddressId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID associated with the contact point record that stores the preferred address of the account for the specified territory.This field is a relationship field.Relationship NamePreferredAddressRefers ToContactPointAddress |
| ProviderOrganizationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe healthcare facility associated with the provider account.This field is a relationship field.Relationship NameProviderOrganizationRefers ToAccount |
| RecommendedPresentationInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe next best content recommended for sharing with the healthcare provider during a future visit. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external system that generated the record. |
| SourceType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source of adding the account to the territory. |
| TargetedPresentationInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionA list of IDs representing the targeted presentations for the account within the territory. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe territory ID associated with the provider account territory info.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |
| YearToDateProviderVisitCount | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the number of provider visits to the account during the current year to date. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ProviderAcctTerritoryInfoChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ProviderAcctTerritoryInfoFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ProviderAcctTerritoryInfoHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ProviderAcctTerritoryInfoShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ProviderAcctTerritoryInfoChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- ProviderAcctTerritoryInfoFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ProviderAcctTerritoryInfoHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ProviderAcctTerritoryInfoShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
