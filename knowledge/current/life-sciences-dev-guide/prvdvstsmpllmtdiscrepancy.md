---
title: "PrvdVstSmplLmtDiscrepancy"
domain: life-sciences-dev-guide
topic: prvdvstsmpllmtdiscrepancy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.181Z
estimatedTokens: 1071
keywords: [PrvdVstSmplLmtDiscrepancy, discrepancies, occur, samples, sample, shipment, requests, exceed, limit, API, version, 65.0, later, Calls, Associated]
---

# PrvdVstSmplLmtDiscrepancy

> Represents discrepancies that occur when samples or sample shipment requests
         exceed a sample limit. This object is available in API version 65.0 and
      later.

# PrvdVstSmplLmtDiscrepancy

Represents discrepancies that occur when samples or sample shipment requests exceed a sample limit. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AlertMessage | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. A description of the discrepancy that occurred. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO currency code associated with the currency values in the provider visit sample limit discrepancy.Possible values are:USD—U.S. DollarThe default value is USD. |
| DiscrepancyAlertType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies whether the discrepancy is an error or a warning.Possible values are:ErrorWarningThe default value is Error. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view.If this value is null, and LastReferenceDate is not null, the user accessed this record or list view indirectly. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. |
| ProviderSampleLimitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The sample limit record on which this discrepancy occurred.This field is a relationship field.Relationship NameProviderSampleLimitRelationship TypeMaster-detailRefers ToProviderSampleLimit (the master object) |
| PrvdVisitSampleRefRecId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The call sample or call sample order on which the discrepancy occurred.This field is a polymorphic relationship field.Relationship NamePrvdVisitSampleRefRecRefers ToProductDisbursement, ProviderVisitRqstSample |
| PrvdVstSmplLmtTransactionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe associated provider visit sample limit transaction record related to sample discrepancy.This field is a relationship field.Relationship NamePrvdVstSmplLmtTransactionRefers ToPrvdVstSmplLmtTransaction |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe ID of the record in the external source system for data integrations. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the external source system from which the record was imported. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Indicates the status of a provider visit sample limit discrepancy as it is triaged by an admin.Possible values are:ClosedInProgressOpenThe default value is Open. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PrvdVstSmplLmtDiscrepancyFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[PrvdVstSmplLmtDiscrepancyHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- PrvdVstSmplLmtDiscrepancyFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- PrvdVstSmplLmtDiscrepancyHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
