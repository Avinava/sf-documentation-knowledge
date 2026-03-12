---
title: "FulfillmentPlan"
domain: revenue-cloud
topic: fulfillmentplan
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.429Z
estimatedTokens: 980
keywords: [FulfillmentPlan, steps, created, fulfill, order, API, version, 61.0, later, Calls, Associated, Objects]
---

# FulfillmentPlan

> Represents a set of steps to be created to fulfill the order.
      This object is available in API version 61.0 and later.

# FulfillmentPlan

Represents a set of steps to be created to fulfill the order. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ExecutionUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFor internal use only.Relationship NameExecutionUserRefers ToUser |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date when a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the fulfillment plan. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| Priority | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe priority of the fulfillment plan execution. This field is available in API version 63.0 and later.Valid values are:DefaultHighBulk |
| SourceIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, Update, idLookup (Available in API version 64.0 and later)DescriptionFor internal use only. |
| SourceType | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe type of source for the fulfillment plan. This field is available in API version 62.0 and later. |
| State | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe status of the fulfillment plan.Valid values are:CompletedInProgressNotStarted |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe business that uses Fulfillment Orchestration.Valid values are:IntegrationOrchestratorOrderFulfillmentStageManagement |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[FulfillmentPlanChangeEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[FulfillmentPlanHistory](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object starting API version 65.0.

[FulfillmentPlanShare](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- FulfillmentPlanChangeEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_change_event.htm)
- FulfillmentPlanHistory (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_history.htm)
- FulfillmentPlanShare (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_associated_objects_share.htm)
