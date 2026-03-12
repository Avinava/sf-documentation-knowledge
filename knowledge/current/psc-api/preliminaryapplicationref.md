---
title: "PreliminaryApplicationRef"
domain: psc-api
topic: preliminaryapplicationref
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.236Z
estimatedTokens: 888
keywords: [PreliminaryApplicationRef, saved, applications, pre-screening, forms, API, version, 49.0, later, Calls, Associated, Objects]
---

# PreliminaryApplicationRef

> Represents the saved applications and pre-screening forms. This object is
    available in API version 49.0 and later.

# PreliminaryApplicationRef

Represents the saved applications and pre-screening forms. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| ApplicantInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe information about the applicant provided in the application form.Available in API version 62.0 and later. Talent Recruitment Management must be enabled. |
| ApplicationName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionName of the preliminary application. |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionType of application.Possible values are:BusinessLicenseApplication—Business License ApplicationBusinessPrescreening—License Requirement AssessmentIndividualApplication—Individual Application |
| BusinessAccountNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the business account related to the application. |
| IsSubmitted | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the application was submitted. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the preliminary application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner who owns the record. |
| SavedApplicationUrl | TypeurlPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRelative path of the saved application. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[PreliminaryApplicationRefFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[PreliminaryApplicationRefHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

[PreliminaryApplicationRefOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PreliminaryApplicationRefShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Share is available for the object.

## Related Topics

- PreliminaryApplicationRefFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- PreliminaryApplicationRefHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- PreliminaryApplicationRefOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- PreliminaryApplicationRefShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
