---
title: "ClaimCoverage"
domain: financial-services-cloud-object-reference
topic: claimcoverage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.722Z
estimatedTokens: 1095
keywords: [ClaimCoverage, insurance, policy, coverage, claim, stores, financial, activities, including, payouts, reserves, API, version, 51.0, later]
---

# ClaimCoverage

> Represents the insurance policy coverage for a claim. This object stores the
      information about financial activities related to the claim, including payouts and
      reserves. This object is available in API version 51.0 and later.

# ClaimCoverage

Represents the insurance policy coverage for a claim. This object stores the information about financial activities related to the claim, including payouts and reserves. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClaimId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe claim associated with this claim coverage. |
| ClaimItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim item associated with the claim coverage. |
| ClaimParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe claim participant associated with this claim coverage. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the coverage for the claim. |
| ExpenseReserveAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of expense reserve held for this claim coverage. |
| InsurancePolicyAssetId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy asset associated with this claim coverage. |
| InsurancePolicyCoverageId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy coverage associated with the claim coverage. |
| InsurancePolicyParticipantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe insurance policy participant associated with the claim coverage. |
| InternalReserveMode | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the rule for determining the loss reserve amount and expense reserve amount for the coverage of the claim. If the rule is Coverage Reserve, the reserve amounts are stored in the Loss Reserve and Expense Reserve fields of the Claim Coverage object. If the rule is Reserve Worksheet, the reserve amounts are stored in the Claim Coverage Reserve object. The values are added to and displayed in the Loss Reserve and Expense Reserve fields of the Claim Coverage object.Possible values are:CoverageReserve—Coverage ReserveReserveWorksheet—Reserve Worksheet |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| LossReserveAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount of loss reserve held for a claim coverage. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the claim coverage. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the record owner. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of a claim coverage.Possible values are:ClosedDeniedOpen |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClaimCoverageChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object in API version 63.0 and later.

## Related Topics

- ClaimCoverageChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
