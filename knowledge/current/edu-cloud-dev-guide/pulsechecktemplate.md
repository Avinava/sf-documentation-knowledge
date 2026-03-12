---
title: "PulseCheckTemplate"
domain: edu-cloud-dev-guide
topic: pulsechecktemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.786Z
estimatedTokens: 1076
keywords: [PulseCheckTemplate, common, template, Pulse, Check, records, API, version, 62.0, later, Calls, Associated, Objects]
---

# PulseCheckTemplate

> Represents a common template used to create Pulse Check records. This
      object is available in API version 62.0 and later.

# PulseCheckTemplate

Represents a common template used to create Pulse Check records. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssessmentQuestionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary assessment question associated with the Pulse Check Template.This field is a relationship field.Relationship NameAssessmentQuestionRefers ToAssessmentQuestion |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the category of the Pulse Check. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency associated with the Pulse Check.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Pulse Check Template. |
| ExpiryInDays | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days the Pulse Check is active. |
| IsRecurring | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the Pulse Check is recurring (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Pulse Check Template. |
| Occurrences | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of occurrences of the Pulse Check. |
| OmniProcessId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Omnistudio Process associated with the Pulse Check Template.This field is a relationship field.Relationship NameOmniProcessRefers ToOmniProcess |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| RecurrenceFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the frequency that the Pulse Check occurs.Possible values are:BiweeklyHalf-Yearly—Half YearlyMonthlyQuarterlyWeeklyYearly |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[PulseCheckTemplateHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[PulseCheckTemplateOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[PulseCheckTemplateShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- PulseCheckTemplateHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- PulseCheckTemplateOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- PulseCheckTemplateShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
