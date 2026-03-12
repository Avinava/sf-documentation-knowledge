---
title: "PrvdVstSmplLmtTransaction"
domain: life-sciences-dev-guide
topic: prvdvstsmpllmttransaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.192Z
estimatedTokens: 1128
keywords: [PrvdVstSmplLmtTransaction, samples, sample, shipment, requests, captured, visit, API, version, 65.0, later, Calls, Associated, Objects]
---

# PrvdVstSmplLmtTransaction

> Represents samples or sample shipment requests captured in a visit. This
      object is available in API version 65.0 and later.

# PrvdVstSmplLmtTransaction

Represents samples or sample shipment requests captured in a visit. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code associated with the currency values in the provider visit sample limit transaction.Possible values are:USD—U.S. DollarThe default value is USD. |
| IsRollback | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the record is a rollback transaction. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the provider visit sample limit transaction. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the owner or creator of this object.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ProviderSampleLimitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. The sample limit related to this transaction.This field is a relationship field.Relationship NameProviderSampleLimitRefers ToProviderSampleLimit |
| ProviderVisitId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Related call record.This field is a relationship field.Relationship NameProviderVisitRefers ToProviderVisit |
| RelatedTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the original sample limit transaction.This field is a relationship field.Relationship NameRelatedTransactionRefers ToPrvdVstSmplLmtTransaction |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates the status of the transaction.Possible values are:FailedNewPendingSuccess |
| TransactionInfo | TypetextareaPropertiesCreate, UpdateDescriptionRequired. This information is used to create sample limit events and updates to sample limit records. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrvdVstSmplLmtTransactionFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PrvdVstSmplLmtTransactionHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PrvdVstSmplLmtTransactionShare](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PrvdVstSmplLmtTransactionFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PrvdVstSmplLmtTransactionHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- PrvdVstSmplLmtTransactionShare (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_share.htm)
