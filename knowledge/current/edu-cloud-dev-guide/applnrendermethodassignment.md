---
title: "ApplnRenderMethodAssignment"
domain: edu-cloud-dev-guide
topic: applnrendermethodassignment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.921Z
estimatedTokens: 774
keywords: [ApplnRenderMethodAssignment, assignment, application, render, component, that's, rendered, API, version, 60.0, later, Calls, Associated, Objects]
---

# ApplnRenderMethodAssignment

> Represents an assignment of the application render method to a component
         that's rendered in the application. This object is available in API version 60.0 and
      later.

# ApplnRenderMethodAssignment

Represents an assignment of the application render method to a component that's rendered in the application. This object is available in API version 60.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApplicationComponentId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe component that's rendered in an application.This field is a relationship field.Relationship NameApplicationComponentRelationship TypeLookupRefers ToApplicationStageDefinition |
| ApplicationRenderMethodId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Application Render Method associated with the component that's rendered in an application.This field is a relationship field.Relationship NameApplicationRenderMethodRelationship TypeLookupRefers ToApplicationRenderMethod |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPossible values are:GBP—British PoundUSD—U.S. DollarThe default value is USD. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the assignment is active (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescription |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the Application Render Method Assignment. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ApplnRenderMethodAssignmentHistory](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ApplnRenderMethodAssignmentOwnerSharingRule](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[ApplnRenderMethodAssignmentShare](atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ApplnRenderMethodAssignmentHistory (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_history.htm)
- ApplnRenderMethodAssignmentOwnerSharingRule (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- ApplnRenderMethodAssignmentShare (atlas.en-us.edu_cloud_dev_guide.meta/edu_cloud_dev_guide/sforce_api_associated_objects_share.htm)
