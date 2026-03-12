---
title: "OrderSummaryRoutingSchedule"
domain: object-reference
topic: ordersummaryroutingschedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.093Z
estimatedTokens: 867
keywords: [OrderSummaryRoutingSchedule, attempt, route, order, summary, inventory, locations, fulfillment, schedule, future, attempts, record, completed, API, version]
---

# OrderSummaryRoutingSchedule

> Represents an attempt to route an order summary to one or more inventory
      locations for fulfillment. You can use it to schedule future attempts and to record completed
      attempts. This object is available in API version 51.0 and later.

# OrderSummaryRoutingSchedule

Represents an attempt to route an order summary to one or more inventory locations for fulfillment. You can use it to schedule future attempts and to record completed attempts. This object is available in API version 51.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the order summary routing schedule. |
| OrderSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescription(Master-Detail) The order summary associated with the routing schedule. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the User who currently owns this order summary routing schedule. Default value is the User logged in to the API to perform the create. |
| Reason | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReason for the routing attempt. You can customize this list.The list has one default value:Unknown |
| ScheduleStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionIdentifies whether this routing attempt has already run or is scheduled to run.Possible values are:ABANDONEDCOMPLETEDSCHEDULED |
| ScheduledDatetime | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionIdentifies when this routing attempt was run or is scheduled to run. If the ScheduleStatus is ABANDONED or COMPLETED, then you can’t modify this value. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[OrderSummaryRoutingScheduleOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[OrderSummaryRoutingScheduleShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

## Related Topics

- OrderSummaryRoutingScheduleOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- OrderSummaryRoutingScheduleShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
