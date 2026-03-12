---
title: "AccountPlanObjective"
domain: object-reference
topic: accountplanobjective
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.649Z
estimatedTokens: 1540
keywords: [AccountPlanObjective, strategic, objectives, initiatives, pursued, relationship, team, customer, enhance, engagement, satisfaction, API, version, 62.0, later]
---

# AccountPlanObjective

> Represents strategic objectives or initiatives pursued by a relationship team
         with a customer to enhance customer engagement and satisfaction. This object is
      available in API version 62.0 and later.

# AccountPlanObjective

Represents strategic objectives or initiatives pursued by a relationship team with a customer to enhance customer engagement and satisfaction. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available if sales account plans are turned on.

## Fields

| Field | Details |
| --- | --- |
| AccountPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan associated with the objective.This field is a relationship field.Relationship NameAccountPlanRelationship TypeMaster-detailRefers ToAccountPlan |
| AccountPlanObjCategoryId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe category associated with the account plan objective. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license.This field is a relationship field.Relationship NameAccountPlanObjCategoryRefers ToAccountPlanObjectiveCategory |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the account plan objective. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe end date of the account plan objective. |
| ExternalStakeholderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe customer stakeholder contact associated with the account plan objective. The relationship team collaborates with the customer stakeholder to achieve a specific objective. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license.This field is a relationship field.Relationship NameExternalStakeholderRefers ToContact |
| LastInteractionSumGenDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when the most recent interaction summary was generated using Einstein Generative AI. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the account plan objective. |
| ObjectiveInteractionSummary | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe summary of interactions that occur with the account in relation to the account plan objective. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license. |
| ObjectiveOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe owner user associated with the objective.This field is a relationship field.Relationship NameObjectiveOwnerRefers ToUser |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Priority | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the level of importance placed on achieving the objective associated with the account plan. To access this field, you must have an FSC Sales or a Financial Services Cloud Extension license.Possible values are:HighLowMedium |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe start date of the account plan objective. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the status of the account plan objective.Possible values are:ClosedIn ProgressNew |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanObjectiveChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanObjectiveHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AccountPlanObjectiveOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AccountPlanObjectiveShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AccountPlanObjectiveChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- AccountPlanObjectiveHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- AccountPlanObjectiveOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AccountPlanObjectiveShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
