---
title: "ServiceChannelFieldPriority"
domain: object-reference
topic: servicechannelfieldpriority
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.787Z
estimatedTokens: 218
keywords: [ServiceChannelFieldPriority, secondary, routing, priority, field-value, mapping, API, version, 47.0, later, Calls, Special, Access, Rules]
---

# ServiceChannelFieldPriority

> Represents a secondary routing priority field-value mapping.
  This object is available in API version 47.0 and later.

# ServiceChannelFieldPriority

Represents a secondary routing priority field-value mapping. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

## Fields

| Field | Details |
| --- | --- |
| Priority | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe priority number assigned to the mapped field value. |
| ServiceChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the service channel. |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe value of the SecRoutingPriorityField field defined in parent ServiceChannel. |
