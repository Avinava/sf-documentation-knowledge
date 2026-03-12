---
title: "SessionHeader"
domain: tooling-api
topic: sessionheader
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:44.446Z
estimatedTokens: 151
keywords: [SessionHeader, Specifies, session, returned, login, server, after, successful, used, subsequent, calls., API, Calls, Fields, Sample, Code]
---

# SessionHeader

> Specifies the session ID returned from the login server
   after a successful login(). This session ID is used in all
   subsequent calls.

# SessionHeader

Specifies the session ID returned from the login server after a successful login(). This session ID is used in all subsequent calls.

In version 12.0 and later, include the API namespace in the SOAP message associated with this header. The namespace is defined in the enterprise or partner WSDL.

## API Calls

All calls, including utility calls.

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| sessionId | string | Session ID returned by the login() call to be used for subsequent call authentication. |

## Sample Code

See the examples provided for login().
