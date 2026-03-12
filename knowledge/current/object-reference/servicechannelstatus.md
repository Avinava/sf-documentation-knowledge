---
title: "ServiceChannelStatus"
domain: object-reference
topic: servicechannelstatus
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.792Z
estimatedTokens: 220
keywords: [ServiceChannelStatus, status, that’s, associated, specific, service, channel, API, version, 32.0, later, Calls, Special, Access, Rules]
---

# ServiceChannelStatus

> Represents the status that’s associated with a specific service
   channel. This object is available in API version 32.0 and later.

# ServiceChannelStatus

Represents the status that’s associated with a specific service channel. This object is available in API version 32.0 and later.

## Supported Calls

create(), delete(), query(), update(), retrieve()

## Special Access Rules

To access this object, [Omni-Channel](https://help.salesforce.com/articleView?id=omnichannel_intro.htm&type=5&language=en_US) must be enabled.

As of Spring ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field | Details |
| --- | --- |
| ServiceChannelId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the service channel. |
| ServicePresenceStatusId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the presence status that’s associated with the service channel that’s specified by the ServicePresenceChannelId. |
