---
title: "SessionHeader"
domain: metadata-api
topic: sessionheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.617Z
keywords: [SessionHeader, Version, Supported, Calls, Fields, Sample, Code—Java]
---

# SessionHeader

# SessionHeader

Specifies the session ID that the login call returns. This session ID is used to authenticate all subsequent Metadata API calls.

## Version

This header is available in all API versions.

## Supported Calls

All Metadata API calls.

## Fields

| Field Name | Type | Description |
| --- | --- | --- |
| sessionId | string | The session ID that the login call returns. |

## Sample Code—Java

Add the SessionHeader to the metadata connection before you perform a call as follows:

```

```