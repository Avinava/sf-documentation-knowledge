---
title: "FulfillmentStepDependencyDef"
domain: revenue-cloud
topic: fulfillmentstepdependencydef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.490Z
estimatedTokens: 1269
keywords: [FulfillmentStepDependencyDef, dependency, created, two, fulfillment, step, records, API, version, 62.0, later, Calls, Associated, Objects]
---

# FulfillmentStepDependencyDef

> Represents a dependency that must be created between two fulfillment
         step records. This object is available in API version 62.0 and later.

# FulfillmentStepDependencyDef

Represents a dependency that must be created between two fulfillment step records. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DependencyScope | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe scope of the fulfillment step dependency definition. For example, Order or Order Item.Valid values are:BundleLineItemPlanCrossPlanCustomThe default value is Plan. |
| DependsOnStepDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe fulfillment step definition that must be executed before this step.This field is a relationship field.Relationship NameDependsOnStepDefinitionRefers ToFulfillmentStepDefinition |
| FulfillmentStepDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe identifier of the fulfillment step definition.This field is a relationship field.Relationship NameFulfillmentStepDefinitionRelationship TypeMaster-detailRefers ToFulfillmentStepDefinition (the master object) |
| IsCompensateInReverse | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the order to insert the compensated group steps is reversed when a fulfillment step is canceled (true) or not (false).The default value is false. This field is available in API version 63.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the fulfillment step dependency definition. |
| PropagateStateToDependentStep | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe state that’s propagated to the dependent fulfillment step when the source fulfillment step is amended or canceled in the fulfillment plan.Valid values are:AmendedBothCanceledNoneThis field is available in API version 63.0 and later. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentStepDependencyDefChangeEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FulfillmentStepDependencyDefFeed](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[FulfillmentStepDependencyDefHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[FulfillmentStepDependencyDefOwnerSharingRule](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[FulfillmentStepDependencyDefShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FulfillmentStepDependencyDefChangeEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm)
- FulfillmentStepDependencyDefFeed (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_feed.htm)
- FulfillmentStepDependencyDefHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- FulfillmentStepDependencyDefOwnerSharingRule (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_ownersharingrule.htm)
- FulfillmentStepDependencyDefShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
