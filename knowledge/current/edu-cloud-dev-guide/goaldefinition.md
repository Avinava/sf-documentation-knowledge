---
title: "GoalDefinition"
domain: edu-cloud-dev-guide
topic: goaldefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.272Z
estimatedTokens: 358
keywords: [GoalDefinition, definition, care, plan, goal, reusable, PGI, library, that’s, part, Integrated, Management, instantiated, records, GoalAssignment]
---

# GoalDefinition

> The definition of a care plan goal in the reusable PGI library that’s a part
         of Integrated Care Management. When instantiated, GoalDefinition records create
         GoalAssignment records that serve as goals in care plans. This object is available in
      API version 57.0 and later.

# GoalDefinition

The definition of a care plan goal in the reusable PGI library that’s a part of Integrated Care Management. When instantiated, GoalDefinition records create GoalAssignment records that serve as goals in care plans. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Category | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe category that the defined goal belongs to.Possible values are:AcademicExtra CurricularWell-Being |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of the defined goal.Possible values are:Individual—Intermediate GoalStrategic—Top GoalThe default value is Individual. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThis field is not used in Integrated Care Management.Possible values are:Improvement |

For more information, see [GoalDefinition in Health Cloud](https://developer.salesforce.com/docs/atlas.en-us.260.0.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_objects_icm_goaldefinition.htm "HTML (New Window)").
