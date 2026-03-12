---
title: "MaintenanceAsset"
domain: object-reference
topic: maintenanceasset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.666Z
estimatedTokens: 1025
keywords: [MaintenanceAsset, asset, covered, maintenance, plan, service, Assets, associated, multiple, plans, Calls, Special, Access, Rules, Objects]
---

# MaintenanceAsset

> Represents an asset covered by a maintenance plan in field service.
			Assets can be associated with multiple maintenance plans.

# MaintenanceAsset

Represents an asset covered by a maintenance plan in field service. Assets can be associated with multiple maintenance plans.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AssetId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe asset associated with the maintenance asset. |
| ContractLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContract line item associated with the maintenance asset. This field can only list a contract line item that is associated with the asset, and whose parent service contract is associated with the parent maintenance plan. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the maintenance asset was last modified. Its label in the user interface is Last Modified Date. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the product request was last viewed. |
| MaintenanceAssetNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, SortDescriptionAn auto-assigned number that identifies the maintenance asset. |
| MaintenancePlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionMaintenance plan associated with the maintenance asset. |
| NextSuggestedMaintenanceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe suggested date of service for the maintenance asset’s first work order (not the date the work order is created). This corresponds to the work order’s SuggestedMaintenanceDate. If left blank when the maintenance asset is created, this field inherits its initial value from the related maintenance plan.This field auto-updates after each batch is generated. Its label in the user interface is Date of the first work order in the next batch. |
| WorkTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWork type associated with the maintenance asset. Work orders generated from the maintenance plan inherit its work type’s duration, required skills and products, and linked articles. Maintenance assets covered by the plan use the same work type, though you can update them to use a different one. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[MaintenanceAssetChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 48.0)

Change events are available for the object.

[MaintenanceAssetFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[MaintenanceAssetHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- MaintenanceAssetChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- MaintenanceAssetFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- MaintenanceAssetHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
