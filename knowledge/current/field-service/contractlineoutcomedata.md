---
title: "ContractLineOutcomeData"
domain: field-service
topic: contractlineoutcomedata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.564Z
keywords: [ContractLineOutcomeData, Supported, Calls, Special, Access, Rules, Fields, Associated, Objects]
---

# ContractLineOutcomeData

# ContractLineOutcomeData

Represents the contract line outcome’s captured data. It stores the data that was captured between the contract line outcome’s start date and end date. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

-   Field Service must be enabled.
-   Entitlements must be enabled.

## Fields

| Field | Details |
| --- | --- |
| CalculatedValue | TypedoublePropertiesFilter, Nillable, SortDescriptionThe value calculated based on the contract line outcome’s calculation method and the captured data. |
| CaptureDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date and time when the data was captured. |
| ContractLineOutcomeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe contract line outcome associated with the contract line outcome data record.This field is a relationship field.Relationship NameContractLineOutcomeRelationship TypeLookupRefers ToContractLineOutcome |
| KeyPerformanceIndicator | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe key performance indicators (fields or asset attributes) that define the contract line outcome’s compliance status. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contract line outcome data record was last modified. Its UI label is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the contract line outcome data record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the contract line outcome data record. |
| Value | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe actual value of the key performance indicator. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

ContractLineOutcomeDataChangeEvent

Change events are available for the object.

ContractLineOutcomeDataFeed

Feed tracking is available for the object.

ContractLineOutcomeDataHistory

History is available for tracked fields of the object.

ContractLineOutcomeDataOwnerSharingRule

Sharing rules are available for the object.

ContractLineOutcomeDataShare

Sharing is available for the object.