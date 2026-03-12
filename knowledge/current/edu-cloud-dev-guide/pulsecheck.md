---
title: "PulseCheck"
domain: edu-cloud-dev-guide
topic: pulsecheck
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.776Z
estimatedTokens: 1406
keywords: [PulseCheck, wellbeing, learner, primary, metric, criteria, specific, date, time, API, version, 62.0, later, Calls, Associated]
---

# PulseCheck

> Represents the wellbeing of a learner based on a primary metric or criteria
         at a specific date and time. This object is available in API version 62.0 and later.

# PulseCheck

Represents the wellbeing of a learner based on a primary metric or criteria at a specific date and time. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssociatedObjectId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe object associated with the student's responses to a Pulse Check.This field is a relationship field.Relationship NameAssociatedObjectRefers ToProgram |
| AssociatedRecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe record type of the object associated with the student's responses to a Pulse Check.This field is a relationship field.Relationship NameAssociatedRecordTypeRefers ToRecordType |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the Pulse Check. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency associated with the Pulse Check.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| DaysOfWeek | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe days of the week for which the pulse check is scheduled. This field contains a bit mask.Monday = 64Tuesday = 32Wednesday = 16Thursday = 8Friday = 4Saturday = 2Sunday = 1Multiple days are represented as the sum of their numerical values. For example, Tuesday and Thursday = 32 + 8 = 40. |
| Description | TypetextareaPropertiesCreate, UpdateDescriptionThe description of the Pulse Check. |
| EndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the Pulse Check ends. |
| ExpiryInDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days the Pulse Check is active. |
| Frequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency that the Pulse Check occurs.Possible values are:BiweeklyHalf-Yearly—Half YearlyMonthlyQuarterlyWeeklyYearly |
| IsRecurring | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Pulse Check is recurring (true) or not (fales).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name for the Pulse Check. |
| Occurrences | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of occurrences of the Pulse Check. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PrimaryQuestionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary assessment question associated with the Pulse Check.This field is a relationship field.Relationship NamePrimaryQuestionRefers ToAssessmentQuestion |
| PulseCheckTemplateId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Pulse Check Template associated with the Pulse Check.This field is a relationship field.Relationship NamePulseCheckTemplateRefers ToPulseCheckTemplate |
| Source | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe criteria based sharing rule or flow that triggered the Pulse Check. |
| StartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the Pulse Check starts. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PulseCheckHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PulseCheckOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PulseCheckShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PulseCheckHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- PulseCheckOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- PulseCheckShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
