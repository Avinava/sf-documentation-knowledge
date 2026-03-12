---
title: "TrainingCourseParticipant"
domain: psc-api
topic: trainingcourseparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.547Z
estimatedTokens: 946
keywords: [TrainingCourseParticipant, trainings, completed, person, API, version, 49.0, later, Calls, Associated, Objects]
---

# TrainingCourseParticipant

> Represents the trainings completed by a person. This object is available
    in API version 49.0 and later.

# TrainingCourseParticipant

Represents the trainings completed by a person. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact record of the individual taking the training. |
| CourseOfferingId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the course offered. |
| InstituitionName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the institution offereing the training. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the training course participant. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner. |
| Result | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionResult of the training course.Possible values are:Completed |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the participant's training. |
| TotalCredits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total training credits the participant earned. |
| TotalHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe total hours the participant spent in the training course. |
| VerificationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the training participation was verified. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the status of the training participation verification.Possible values are:Not VerifiedVerified |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[TrainingCourseParticipantHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[TrainingCourseParticipantShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Share is available for the object.

[TrainingCourseParticipantOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rule is available for the object.

[TrainingCourseParticipantFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- TrainingCourseParticipantHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- TrainingCourseParticipantShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
- TrainingCourseParticipantOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- TrainingCourseParticipantFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
