---
title: "ConnectApi.ChatterStreamInput"
domain: apex-reference
topic: connectapichatterstreaminput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.175Z
keywords: [ConnectApi.ChatterStreamInput]
---

# ConnectApi.ChatterStreamInput

# ConnectApi.ChatterStreamInput

A Chatter feed stream.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the stream, up to 1,000 characters. | Optional | 39.0 |
| name | String | Name of the stream, up to 120 characters. | Required when creating a streamOptional when updating a stream | 39.0 |
| subscriptions​ToAdd | List<ConnectApi.​Stream​Subscription​Input> | List of up to 25 entities whose feeds are included in the stream.Adding an entity that is already added results in no operation. Including the same entity in subscriptionsToAdd and subscriptionsToRemove results in no operation. | Optional | 39.0 |
| subscriptions​ToRemove | List<ConnectApi.​Stream​Subscription​Input> | List of entities whose feeds are removed from the stream.Removing an entity that is already removed results in no operation. Including the same entity in subscriptionsToAdd and subscriptionsToRemove results in no operation. | Optional when updating a streamNot supported when creating a stream | 39.0 |