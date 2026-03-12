---
title: "InsuranceAsyncBulkRecordDetail"
domain: financial-services-cloud-object-reference
topic: insuranceasyncbulkrecorddetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:30.627Z
estimatedTokens: 637
keywords: [InsuranceAsyncBulkRecordDetail, API, version, 64.0, later, Calls, Associated, Objects]
---

# InsuranceAsyncBulkRecordDetail

> This object is available in API version 64.0 and later.

# InsuranceAsyncBulkRecordDetail

This object is available in API version 64.0 and later.

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete()

## Fields

| Field | Details |
| --- | --- |
| AdditionalInformation | TypetextareaPropertiesNillableDescriptionAdditional information related to Insurance Async Bulk Record Detail record processing. For example, a JSON key value pair that is captured for mode detailed analysis. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe short description related to the Insurance Async Bulk Record Detail record processing. For example: Insurance Policy creation failed for Group Census Member. |
| InsuranceAsyncBulkRequestItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe reference record that's processed in the associated Insurance Async Bulk Request.This field is a relationship field.Relationship NameInsuranceAsyncBulkRequestItemRelationship TypeMaster-detailRefers ToInsuranceAsyncBulkRequestItem (the master object) |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the Insurance Async Bulk Record Detail. |
| ReferenceRecordId | TypereferencePropertiesFilter, Group, SortDescriptionThe reference record that's processed in the associated Insurance Async Bulk Request.This field is a polymorphic relationship field.Relationship NameReferenceRecordRefers ToGroupCensus, GroupCensusMember, InsurancePolicy, QuoteLineItem |
| SourceSystemIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the reference record in the source system. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies the status of the Insurance Async Bulk Record Detail record.Possible values are:FailedIn ProgressScheduledSuccess |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[InsuranceAsyncBulkRecordDetailHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- InsuranceAsyncBulkRecordDetailHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
