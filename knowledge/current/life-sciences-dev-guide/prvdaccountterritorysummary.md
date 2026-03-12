---
title: "PrvdAccountTerritorySummary"
domain: life-sciences-dev-guide
topic: prvdaccountterritorysummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.150Z
estimatedTokens: 1341
keywords: [PrvdAccountTerritorySummary, summaries, generated, provider, account, terrories, aligned, API, version, 65.0, later, Calls, Associated, Objects]
---

# PrvdAccountTerritorySummary

> Represents the summaries generated for a provider account for the terrories
         it is aligned to. This object is available in API version 65.0 and later.

# PrvdAccountTerritorySummary

Represents the summaries generated for a provider account for the terrories it is aligned to. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionAccount for which the summary is generated.This field is a relationship field.Relationship NameAccountRefers ToAccount |
| ChangeInfoSummaryDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time at which change information summary is generated. |
| ChangeInfoSummaryHistory | TypetextareaPropertiesNillableDescriptionHistory of latest change history summaries. |
| ChangeInformationHash | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHash of the change information for which summary is generated. |
| ChangeInformationSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSummary of the change information of the account since the user's last interaction. |
| KeyInfoSummaryDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time at which key information summary is generated. |
| KeyInfoSummaryHistory | TypetextareaPropertiesNillableDescriptionHistory of latest Key info summaries. |
| KeyInformationHash | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionHash of the key information for which the summary is generated. |
| KeyInformationSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSummary of the key information of the account. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record may have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the provider account territory summary. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionID of the record in the external system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the external system that generated the record. |
| Territory2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionTerritory of the account for which the summary is generated.This field is a relationship field.Relationship NameTerritory2Refers ToTerritory2 |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionContext of the user for which the account summary is generated.This field is a relationship field.Relationship NameUserRefers ToUser |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrvdAccountTerritorySummaryChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[PrvdAccountTerritorySummaryFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PrvdAccountTerritorySummaryHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PrvdAccountTerritorySummaryShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrvdAccountTerritorySummaryChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- PrvdAccountTerritorySummaryFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PrvdAccountTerritorySummaryHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PrvdAccountTerritorySummaryShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
