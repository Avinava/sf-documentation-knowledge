---
title: "CallOptions"
domain: metadata-api
topic: calloptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.505Z
estimatedTokens: 109
keywords: [CallOptions, Specifies, API, client, identifier., Version, Supported, Calls, Fields, Sample, Code—Java]
---

# CallOptions

> Specifies the API client identifier.

# CallOptions

Specifies the API client identifier.

## Version

This call is available in all API versions.

## Supported Calls

All Metadata API calls.

## Fields

| Field Name | Type | Description |
| --- | --- | --- |
| client | string | A value that identifies an API client. |

## Sample Code—Java

To change the API client ID, add the CallOptions header to the metadata connection before you perform a call as follows:

```

```

## Code Examples

```
metadataConnection.setCallOptions("client ID");
```
