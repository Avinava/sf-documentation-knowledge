---
title: "AssessmentStagedData"
domain: psc-api
topic: assessmentstageddata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.062Z
estimatedTokens: 868
keywords: [AssessmentStagedData, responses, assessment, questions, user, captures, submits, Discovery, Framework, Data, Capture, Flow, mobile, device, records]
---

# AssessmentStagedData

> Represents the responses to assessment questions when a user captures and
         submits information with the Discovery Framework Data Capture Flow on a mobile device. The
         information is used to create assessment and related records. This object is available
      in API version 63.0 and later.

# AssessmentStagedData

Represents the responses to assessment questions when a user captures and submits information with the Discovery Framework Data Capture Flow on a mobile device. The information is used to create assessment and related records. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DynamicDataCaptureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Dynamic Data Capture associated with the assessment staged data.This field is a relationship field.Relationship NameDynamicDataCaptureRefers ToDynamicDataCapture |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionAuto-assigned number that identifies the assessment staged data record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe parent associated with the assessment staged data record.This field is a relationship field.Relationship NameParentRefers ToAssessmentStagedData |
| Response | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe response to assessment questions as submitted by users, in JSON format. |
| ResponseProcessingError | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe error encountered while processing the question responses for creating assessment and related records. |
| ResponseProcessingStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the processing of question responses, and the creation of the assessment and its related records.Possible values are:CompletedFailedPendingThe default value is Pending. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentStagedDataChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentStagedDataFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[AssessmentStagedDataHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[AssessmentStagedDataOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[AssessmentStagedDataShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
