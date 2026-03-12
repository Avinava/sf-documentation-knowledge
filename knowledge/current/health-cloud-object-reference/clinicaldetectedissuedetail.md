---
title: "ClinicalDetectedIssueDetail"
domain: health-cloud-object-reference
topic: clinicaldetectedissuedetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.249Z
estimatedTokens: 1348
keywords: [ClinicalDetectedIssueDetail, additional, clinical, detected, issue, API, version, 55.0, later, Calls, Usage, Associated, Objects]
---

# ClinicalDetectedIssueDetail

> Represents additional information about a clinical detected
         issue. This object is available in API version 55.0 and later.

# ClinicalDetectedIssueDetail

Represents additional information about a clinical detected issue. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ClinicalDetectedIssueId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent clinical detected issue associated with the issue detail.This field is a relationship field.Relationship NameClinicalDetectedIssueRelationship TypeLookupRefers ToClinicalDetectedIssue |
| DetailCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code associated with the Clinical Detected Issue Detail record.This field is a polymorphic relationship field.Relationship NameDetailCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| DetailRecordId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe reference to a record that adds information to a Clinical Detected Issue record.This field is a polymorphic relationship field.Relationship NameDetailRecordRelationship TypeLookupRefers ToAccount, ClinicalEncounterDiagnosis, DiagnosticSummary, HealthcareProvider |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the relation between the Clinical Detected Issue record and the detail record.Possible values are:EvidenceImplicatedMitigation |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| MitigationAuthorId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe owner who is responsible for creating and executing the mitigation plan.This field is a polymorphic relationship field.Relationship NameMitigationAuthorRelationship TypeLookupRefers ToHealthcarePractitionerFacility, HealthcareProvider, User |
| MitigationAuthoringDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time of authoring the mitigation details. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the clinical detected issue detail record. |

## Usage

-   Use the ClinicalDetectedIssueId field to reference the parent ClinicalDetectedIssue record that the additional information is being associated to.
-   Use the DetailRecordId field to reference the record with the associated information. This field looks up to the following objects:
    -   Account
    -   ClinicalEncounterDiagnosis
    -   DiagnosticSummary
    -   HealthcareProvider
-   Use the DetailType picklist to specify the type of information that’s being associated to the ClinicalDetectedIssue record.
-   If the detail type is Evidence, specify either a detail code or detail record or both. If the detail type is Implicated, specify a detail record, but do not add a detail code. If the detail type is Mitigation, specify a detail code, but do not add a detail record.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClinicalDetectedIssueDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalDetectedIssueDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalDetectedIssueDetailChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalDetectedIssueDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- ClinicalDetectedIssueDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- ClinicalDetectedIssueDetailChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
