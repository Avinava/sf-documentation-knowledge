---
title: "ServiceChannelStatusField"
domain: object-reference
topic: servicechannelstatusfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.795Z
estimatedTokens: 282
keywords: [ServiceChannelStatusField, indicate, completed, in-progress, work, item, status, Status-Based, Capacity, routing, model, API, version, 49.0, later]
---

# ServiceChannelStatusField

> Represents the values that you use to indicate completed and
			in-progress work item status for the status field in the Status-Based Capacity routing
			model.  This object is available in API version 49.0 and later.

# ServiceChannelStatusField

Represents the values that you use to indicate completed and in-progress work item status for the status field in the Status-Based Capacity routing model. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) and Status-Based Capacity Model must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ServiceChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the service channel. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionFor the field that you use to track work status, specifies whether the values are for completed or in-progress work. |
| Value | TypestringPropertiesCreate, Filter, Group, SortDescriptionSpecifies the values that you use to indicate completed and in-progress work status. Valid values are Completed, InProgress, and Paused. |
