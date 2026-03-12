---
title: "PersonExamination"
domain: psc-api
topic: personexamination
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.196Z
estimatedTokens: 950
keywords: [PersonExamination, examinations, taken, person, API, version, 49.0, later, Calls, Associated, Objects]
---

# PersonExamination

> Represents the examinations taken by a person. This object is available in
    API version 49.0 and later.

# PersonExamination

Represents the examinations taken by a person. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the contact related to this record. |
| EffectiveFrom | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate from which the examination is effective from. |
| EffectiveTo | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate till which the examination is effective. |
| ExaminationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate the examination was taken. |
| ExaminationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the examination. |
| InstituitionName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the institution offering the examination. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the examination taken by the person. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this record. |
| Result | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionResult of the examination.Possible values are:FailPass |
| Score | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionScore secured in the examination. |
| VerificationDateTime | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time the examination details were verified. |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the examination details verification.Possible values are:Not VerifiedVerified |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PersonExaminationFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[PersonExaminationHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[PersonExaminationOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PersonExaminationShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Share is available for the object.

## Related Topics

- PersonExaminationFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PersonExaminationHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PersonExaminationOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PersonExaminationShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
