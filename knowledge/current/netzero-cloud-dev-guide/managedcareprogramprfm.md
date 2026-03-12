---
title: "ManagedCareProgramPrfm"
domain: netzero-cloud-dev-guide
topic: managedcareprogramprfm
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:59.456Z
estimatedTokens: 972
keywords: [ManagedCareProgramPrfm, rating, enrollee, retention, rate, according, plan, average, medicare, advantage, API, version, 59.0, later, Calls]
---

# ManagedCareProgramPrfm

> Represents the rating and enrollee retention rate according to the
         plan type of an average medicare advantage plan. This object is available in API
      version 59.0 and later.

# ManagedCareProgramPrfm

Represents the rating and enrollee retention rate according to the plan type of an average medicare advantage plan. This object is available in API version 59.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AverageProgramRating | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe rating of an average medicare advantage plan for a managed care plan type. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the managed care program. |
| DisclsReportingPeriodId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe reporting period for which the managed care plan performance is reported.This field is a relationship field.Relationship NameDisclsReportingPeriodRelationship TypeLookupRefers ToDisclsReportingPeriod |
| EnrolleeRetentionRate | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe enrollee retention rate of a plan type. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the managed care program record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ProgramType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of managed care plan.Possible values are:Health Maintenance Organizations (HMOs)Local Preferred Provider Organizations (PPOs)Private Fee-for-Service Plans (PFFS)Regional Preferred Provider Organizations (PPOs)Special Needs Plans (SNPs) |
| SubsidiaryAccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe account that's identified as the supplier account.This field is a relationship field.Relationship NameSubsidiaryAccountRelationship TypeLookupRefers ToAccount |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ManagedCareProgramPrfmFeed](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[ManagedCareProgramPrfmHistory](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ManagedCareProgramPrfmShare](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ManagedCareProgramPrfmFeed (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_feed.htm)
- ManagedCareProgramPrfmHistory (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ManagedCareProgramPrfmShare (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/sforce_api_associated_objects_share.htm)
