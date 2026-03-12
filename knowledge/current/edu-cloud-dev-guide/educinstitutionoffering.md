---
title: "EducInstitutionOffering"
domain: edu-cloud-dev-guide
topic: educinstitutionoffering
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.195Z
estimatedTokens: 1058
keywords: [EducInstitutionOffering, junction, institution's, account, objects, program, learning, academic, term, API, version, 64.0, later, Calls, Associated]
---

# EducInstitutionOffering

> Represents a junction between an institution's account and other objects,
         such as program, learning program, and academic term. This object is available in API
      version 64.0 and later.

# EducInstitutionOffering

Represents a junction between an institution's account and other objects, such as program, learning program, and academic term. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AcademicTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe academic term related to the institution offering.This field is a relationship field.Relationship NameAcademicTermRefers ToAcademicTerm |
| ApplicationTimelineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe application timeline related to the institution offering.This field is a relationship field.Relationship NameApplicationTimelineRefers ToApplicationTimeline |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency related to the educational institution offering.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EducInstitutionAccountId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe institution's account related to the institution offering.This field is a relationship field.Relationship NameEducInstitutionAccountRelationship TypeMaster-detailRefers ToAccount (the master object) |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the institution offering. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the institution offering is active (true) or not (false).The default value is false. |
| IsPubliclySearchable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the institution offering is publicly searchable (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe learning program related to the institution offering.This field is a relationship field.Relationship NameLearningProgramRefers ToLearningProgram |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the educational institution offering. |
| ProgramId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program related to the institution offering.This field is a relationship field.Relationship NameProgramRefers ToProgram |
| ProgramTermApplnTimelineId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe program term application timeline related to the institution offering.This field is a relationship field.Relationship NameProgramTermApplnTimelineRefers ToProgramTermApplnTimeline |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the institution offering. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[EducInstitutionOfferingHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- EducInstitutionOfferingHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
