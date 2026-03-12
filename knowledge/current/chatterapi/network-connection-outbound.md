---
title: "Network Connection, Outbound"
domain: chatterapi
topic: network-connection-outbound
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.924Z
estimatedTokens: 168
keywords: [Network, Connection, Outbound, Provision, sync, tear, down]
---

# Network Connection, Outbound

> Provision, sync, or tear down the outbound network
    connection.

# Network Connection, Outbound

Provision, sync, or tear down the outbound network connection.

Resource

```

```

Available version

49.0

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action to take on the network connection. Values are:ProvisionSyncTearDown | Required | 49.0 |

Response body for POST

In version 49.0–50.0, the response is empty.

In version 51.0 and later, the response body is [Network Connection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_connection.htm "External network connection.").

## Code Examples

```
/network-connection/outbound/connections/developerName
```

## Related Topics

- Network Connection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_network_connection.htm)
