---
title: "DiagnosticSummary"
domain: health-cloud-object-reference
topic: diagnosticsummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:34.383Z
estimatedTokens: 2775
keywords: [DiagnosticSummary, findings, interpretations, summaries, tests, performed, patients, API, version, 51.0, later, Calls, Usage, Additional, Objects]
---

# DiagnosticSummary

> Represents the findings, interpretations, and summaries of tests performed on
      patients. This object is available in API version 51.0 and later.

# DiagnosticSummary

Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AttachmentLanguage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecords the language of the attached document. |
| BasedOnId | TypePolymorphic referencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the medication or clinical service request that the diagnostic summary is based on.Referenced ObjectsMedicationStatementClinicalServiceRequest |
| CareObservationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the care observation that’s a part of the diagnostic summary.Referenced ObjectsClinicalServiceRequest |
| Category | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies the category of the department or service that the diagnostic summary is a product of.Possible values are:CommunityInpatientOutpatientPatient Specified |
| ClinicalEncounterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the encounter that the diagnostic summary is about.Referenced ObjectsClinicalEncounter |
| CodeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe system-defined code that describes the diagnostic summary.Referenced ObjectsCodeSetBundle |
| CaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe case associated with the diagnostic summary.This field is a relationship field.Relationship NameCaseRefers ToCase |
| ContentDocumentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe content document associated with diagnostic summary. You can include up to 5 documents in the PDF format. This field is available in API version 62.0 and later.This field is a relationship field.Referenced ObjectsContentDocument |
| EffectiveEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date and time of the clinically relevant period of the summary. |
| EffectiveStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date and time of the clinically relevant period of the summary. |
| ImageComments1 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments about the first image linked in the report. |
| ImageComments2 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments about the second image linked in the report. |
| ImageComments3 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments about the third image linked in the report. |
| ImageComments4 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments about the fourth image linked in the report. |
| ImageComments5 | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionComments about the fifth image linked in the report. |
| ImageUrl1 | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link to a key image associated with the diagnostic summary. |
| ImageUrl2 | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link to a key image associated with the diagnostic summary. |
| ImageUrl3 | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link to a key image associated with the diagnostic summary. |
| ImageUrl4 | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link to a key image associated with the diagnostic summary. |
| ImageUrl5 | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe link to a key image associated with the diagnostic summary. |
| InterpretedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the person or organization responsible for interpreting the diagnostic summary and its conclusions.Referenced ObjectsCarePerformer |
| IssuedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe care performer that issues the diagnostic summary.Referenced ObjectsCarePerformer |
| IssuedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the diagnostic summary was issued. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last date that the record was viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the diagnostic summary record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the diagnostic summary record. Available in API version 56.0 and later.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroupUser |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionReferences the patient who is the subject of the diagnostic summary.Referenced ObjectsAccount |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the record in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe status of the diagnostic summary.Possible values are:ActiveCompletedEntered-in-errorIntendedNot-takenOn-holdStoppedUnknown |
| Summary | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe clinical conclusion of the tests performed in the diagnostic service. |
| SummaryCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system-defined code that represents the clinical conclusion of the tests as reported in the diagnostic service.Referenced ObjectsCodeSetBundle |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the information in the record represents a diagnostic summary or a document reference.Possible values are:DiagnosticSummary—Diagnostic SummaryDocumentReference—Document Reference |

## Usage

DiagnosticSummary is used to store records representing both DiagnosticReport and DocumentReference type information from FHIR-based systems. You can use the UsageType field to specify which records represent diagnostic reports and which records represent document references.

For document reference records, you can also use the DiagnosticSummaryDetail child object to associate authors, related documents, and related encounters to your DiagnosticSummary record.

## Additional Information for DiagnosticSummary in Other Objects

In addition to creating a record using these fields, you can add more details to your DiagnosticSummary record by creating records in certain other objects, and referencing your DiagnosticSummary record as the parent record. Here’s the list of objects you can associate to DiagnosticSummary in this way, the type of information they add, and the field they use to reference DiagnosticSummary.

| Object | Type of Information | Reference Field |
| --- | --- | --- |
| Identifier | Associates an identifier value to the diagnostic summary. | ParentRecordId |
| DiagnosticSummaryDetail | Associates document reference-type DiagnosticSummary records with various other records and defines the nature of association. For instance, authors, related documents, and related encounters. | DiagnosticSummaryId |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[DiagnosticSummaryChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 58.0)

Change events are available for the object.

[DiagnosticSummaryFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[DiagnosticSummaryHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[DiagnosticSummaryOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.") (API version 56.0)

Sharing rules are available for the object.

[DiagnosticSummaryShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 56.0)

Sharing is available for the object.

-   **[DiagnosticSummaryDetail](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_diagnosticsummarydetail.htm)**
    Represents additional information associated with document reference-type DiagnosticSummary records. This additional information may be related documents, authors, or related encounters. This object is available in API version 52.0 and later.

## Related Topics

- DiagnosticSummaryChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- DiagnosticSummaryFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- DiagnosticSummaryHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- DiagnosticSummaryOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- DiagnosticSummaryShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
- DiagnosticSummaryDetail (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_diagnosticsummarydetail.htm)
