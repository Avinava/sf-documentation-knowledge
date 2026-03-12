---
title: "LearningPathwayTmplPgmPlan"
domain: edu-cloud-dev-guide
topic: learningpathwaytmplpgmplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.498Z
estimatedTokens: 625
keywords: [LearningPathwayTmplPgmPlan, junction, Learning, Program, Plan, Pathway, Template, objects, API, version, 61.0, later, Calls, Associated]
---

# LearningPathwayTmplPgmPlan

> Represents a junction between Learning Program Plan and Learning Pathway
         Template objects. This object is available in API version 61.0 and later.

# LearningPathwayTmplPgmPlan

Represents a junction between Learning Program Plan and Learning Pathway Template objects. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO code for the currency.Possible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LearningPathwayTemplateId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Learning Pathway Template associated with the Learning Program Plan.This field is a relationship field.Relationship NameLearningPathwayTemplateRelationship TypeMaster-detailRefers ToLearningPathwayTemplate (the master object) |
| LearningProgramPlanId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe Learning Program Plan associated with the Learning Pathway Template.This field is a relationship field.Relationship NameLearningProgramPlanRelationship TypeLookupRefers ToLearningProgramPlan |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the Learning Pathway Template Program Plan. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[LearningPathwayTmplPgmPlanHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- LearningPathwayTmplPgmPlanHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
