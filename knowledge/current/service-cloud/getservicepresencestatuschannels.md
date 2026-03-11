---
title: "getServicePresenceStatusChannels"
domain: service-cloud
topic: getservicepresencestatuschannels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.050Z
keywords: [getServicePresenceStatusChannels, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getServicePresenceStatusChannels

# getServicePresenceStatusChannels

Retrieves the service channels that are associated with an Omni-Channel user’s current presence status. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the channels associated with a presence status are retrieved. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if retrieving the current presence status channels was successful; false if the retrieving the current presence status channels wasn’t successful. |
| channels | JSON string of channel objects | Returns the IDs and API names of the channels associated with the presence status. |