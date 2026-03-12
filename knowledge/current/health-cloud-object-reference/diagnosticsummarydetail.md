---
title: "DiagnosticSummaryDetail"
domain: health-cloud-object-reference
topic: diagnosticsummarydetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.623Z
estimatedTokens: 1126
keywords: [DiagnosticSummaryDetail, additional, associated, document, reference-type, DiagnosticSummary, records, may, documents, authors, encounters, API, version, 52.0, later]
---

# DiagnosticSummaryDetail

> Represents additional information associated with document reference-type
         DiagnosticSummary records. This additional information may be related documents, authors,
         or related encounters. This object is available in API version 52.0 and later.

# DiagnosticSummaryDetail

Represents additional information associated with document reference-type DiagnosticSummary records. This additional information may be related documents, authors, or related encounters. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DetailRecordId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences a record that adds information to a DiagnosticSummary record.Referenced ObjetsAccount, CareRegisteredDevice, ClinicalEncounter, DiagnosticSummary, HealthcareProvider |
| DetailType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the relation between the DiagnosticSummary record and the detail record.Possible values are:AuthorClinicalEncounter—Clinical EncounterRelatedDocument—Related DocumentSpecimen |
| DiagnosticSummaryId | TypeMaster-Detail referencePropertiesCreate, Filter, Group, SortDescriptionThe parent DiagnosticSummary record that the detail record is associated to.Referenced ObjetsDiagnosticSummary |
| DocumentRelationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the detail type is Related Document, then this field specifies the type of relationship between the two documents.Possible values are:AdditionConversionReplacementSignature |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced the record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed the record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the DiagnosticSummaryDetail record. |

## Usage

-   Use the DiagnosticSummaryId field to reference the parent DiagnosticSummary record that the additional information is being associated to.
-   Use the DetailType picklist to specify the type of information that’s being associated to the DiagnosticSummary record.
-   Use the DetailRecordId field to reference the record with the associated information. The records that correspond to each detail type are as follows.
    -   **Author**: Account, CareRegisteredDevice, and HealthcareProvider
    -   **ClinicalEncounter**: ClinicalEncounter
    -   **RelatedDocument**: DiagnosticSummary
-   If the detail type is related document, then use the DocumentRelationType picklist to specify the type of the relation between the two documents.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[DiagnosticSummaryDetailFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DiagnosticSummaryDetailHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DiagnosticSummaryDetailChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- DiagnosticSummaryDetailFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- DiagnosticSummaryDetailHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DiagnosticSummaryDetailChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
