---
title: "BranchUnitRelatedRecord"
domain: financial-services-cloud-object-reference
topic: branchunitrelatedrecord
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.627Z
estimatedTokens: 798
keywords: [BranchUnitRelatedRecord, record, case, account, associated, attributed, branch, unit, API, version, 51.0, later, Calls, Objects]
---

# BranchUnitRelatedRecord

> Represents a record such as a case or account that is associated with or
      attributed to a branch unit. This object is available in API version 51.0 and later.

# BranchUnitRelatedRecord

Represents a record such as a case or account that is associated with or attributed to a branch unit. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of a customer account associated with the related record. |
| BranchUnitId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the branch unit that's associated with the related record. |
| BusinessUnitMemberId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the business unit member who was active at the branch when this association was made. |
| Comment | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments about the relationship between the related record and the branch. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the branch unit related record association. |
| Reason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies a reason or rationale for associating the record with the branch. |
| RelatedObjectName | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object name or record type of the related record.Possible values are:AccountCaseLead (Lead and Referral)OpportunityContactInteractionSummary |
| RelatedRecordAssocCriteriaId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the association criteria that triggered the creation of this record. |
| RelatedRecordId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the related record. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[branchunitrelatedrecordChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

## Related Topics

- branchunitrelatedrecordChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
