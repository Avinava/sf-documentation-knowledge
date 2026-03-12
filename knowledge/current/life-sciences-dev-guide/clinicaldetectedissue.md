---
title: "ClinicalDetectedIssue"
domain: life-sciences-dev-guide
topic: clinicaldetectedissue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.085Z
estimatedTokens: 1357
keywords: [ClinicalDetectedIssue, detected, issue, resulting, clinical, activity, API, version, 55.0, later, Calls, Usage, Associated, Objects]
---

# ClinicalDetectedIssue

> Represents information about a detected issue resulting from a
         clinical activity. This object is available in API version 55.0 and later.

# ClinicalDetectedIssue

Represents information about a detected issue resulting from a clinical activity. This object is available in API version 55.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CategoryCodeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe code of the category associated with the issue.This field is a polymorphic relationship field.Relationship NameCategoryCodeRelationship TypeLookupRefers ToCodeSet, CodeSetBundle |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionAdditional information about the issue. |
| IdentificationEndDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the issue identification was complete. |
| IdentificationStartDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the issue was identified. |
| IdentifiedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account, healthcare provider, user, or device that detected the issue.This field is a polymorphic relationship field.Relationship NameIdentifiedByRelationship TypeLookupRefers ToAccount, CareRegisteredDevice, HealthcareProvider, User |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
|  |  |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe system-generated name of the clinical detected issue record. |
| PatientId | TypeMaster-detail referencePropertiesCreate, Filter, Group, SortDescriptionThe patient associated with the issue.This field is a relationship field.Relationship NamePatientRelationship TypeLookupRefers ToAccount |
| ReferenceUri | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe medical references available on the issue. |
| SeverityLevel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the impact level of the issue.Possible values are:HighLowModerate |
| SourceSysModifiedDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the record was last modified in its source system. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from where the record was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier for the record in its source system. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the status of the issue.Possible values are:AmendedCancelledCorrectedEntered in ErrorFinalPreliminaryRegisteredUnknown |

## Usage

Indicates an actual or potential clinical issue associated with a clinical action for a patient. The category of the clinical issue, for example, drug-drug interactions or duplicate therapy, is stored in the Category Code field that has a lookup to the CodeSetBundle and CodeSet objects.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ClinicalDetectedIssueFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ClinicalDetectedIssueHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ClinicalDetectedIssueChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 61.0)

Change events are available for the object.

## Related Topics

- ClinicalDetectedIssueFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- ClinicalDetectedIssueHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
- ClinicalDetectedIssueChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
