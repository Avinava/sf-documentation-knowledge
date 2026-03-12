---
title: "WorkOrderLineItemHistory"
domain: object-reference
topic: workorderlineitemhistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:19.755Z
estimatedTokens: 369
keywords: [WorkOrderLineItemHistory, history, changes, made, tracked, work, order, line, item, API, version, 36.0, later, Calls, Special]
---

# WorkOrderLineItemHistory

> Represents the history of changes made to tracked fields
				on a work order line item. This object is available in API version 36.0
		and later.

# WorkOrderLineItemHistory

Represents the history of changes made to tracked fields on a work order line item. This object is available in API version 36.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

Work orders or Field Service must be enabled in your organization, and field tracking for work order line item fields must be configured.

## Fields

| Field Name | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe value of the field before it was changed. |
| WorkOrderLineItemId | TypereferencePropertiesFilter, Group, SortDescriptionID of the work order line item being tracked. The history is displayed on the detail page for this record.This is a relationship field.Relationship NameWorkOrderLineItemRelationship TypeLookupRefers ToWorkOrderLineItem |
