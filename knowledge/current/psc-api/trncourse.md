---
title: "TrnCourse"
domain: psc-api
topic: trncourse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.564Z
estimatedTokens: 721
keywords: [TrnCourse, authorized, trainings, qualify, license, permit, API, version, 49.0, later, Calls, Associated, Objects]
---

# TrnCourse

> Represents information about the authorized trainings that qualify a license or
      permit. This object is available in API version 49.0 and later.

# TrnCourse

Represents information about the authorized trainings that qualify a license or permit. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert(), search()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the course. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the course. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the owner of this record. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the course.Possible values are:ActiveInactive |
| TotalCredits | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal credits offered for the course. |
| TotalHours | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal hours needed to complete the course. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[TrnCourseOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[TrnCourseShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

[TrnCourseFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed is available for the object.

[TrnCourseHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the object.

## Related Topics

- TrnCourseOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- TrnCourseShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
- TrnCourseFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- TrnCourseHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
