---
title: "CarePlanTemplateProblem"
domain: health-cloud-object-reference
topic: careplantemplateproblem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:37.445Z
estimatedTokens: 1147
keywords: [CarePlanTemplateProblem, problems, Care, Plan, Templates, may, goals, their, direct, children, determines, position, hierarchy, specific, referenced]
---

# CarePlanTemplateProblem

> Represents problems in Care Plan Templates. These problems may or may not
         have goals as their direct children. This object determines the position of problems
      in the hierarchy of care plan templates. The specific details of problems are referenced from
      ProblemDefinition records in the PGI library. This object is available in API version 57.0 and
      later.

# CarePlanTemplateProblem

Represents problems in Care Plan Templates. These problems may or may not have goals as their direct children. This object determines the position of problems in the hierarchy of care plan templates. The specific details of problems are referenced from ProblemDefinition records in the PGI library. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CarePlanTemplateId | TypeMaster-detailPropertiesCreate, Filter, Group, SortDescriptionThe parent care plan template record.Relationship NameCarePlanTemplateRefers ToCarePlanTemplate |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the record was last viewed. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the record. |
| OwnerId | TypePolymorphic lookupPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the record.Relationship NameOwnerRefers ToGroupUser |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the priority of the templatized problem.Possible values are:HighLowMedium |
| ProblemDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReferences the problem definition in the PGI library that contains the clinical information related to the templatized problem. If the templatized problem has a goal as its direct child, then reference a ProblemGoalDefinition record instead.This field is a polymorphic relationship field.Relationship NameProblemDefinitionRelationship TypeLookupRefers ToProblemDefinitionProblemGoalDefinition |
| SequenceNumber | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the spot of the templatized problem in the list of all templatized problems in the care plan template. |
| SourceSystem | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe source system from which the care plan template problem was brought into Salesforce. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the care plan template problem in its source system. |
| SourceSystemModified | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time when the care plan template problem was last modified in its source system. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CarePlanTemplateProblemFeed](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[CarePlanTemplateProblemHistory](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[CarePlanTemplateProblemOwnerSharingRule](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[CarePlanTemplateProblemShare](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- CarePlanTemplateProblemFeed (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- CarePlanTemplateProblemHistory (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_history.htm)
- CarePlanTemplateProblemOwnerSharingRule (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- CarePlanTemplateProblemShare (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_share.htm)
