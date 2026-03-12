---
title: "InvalidateSessionsResult"
domain: api
topic: invalidatesessionsresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.349Z
estimatedTokens: 151
keywords: [InvalidateSessionsResult, invalidateSessions, call, array, LogoutResult, objects]
---

# InvalidateSessionsResult

> The invalidateSessions() call returns an array of
  LogoutResult objects.

# InvalidateSessionsResult

The invalidateSessions() call returns an array of LogoutResult objects.

See [invalidateSessions()](atlas.en-us.api.meta/api/sforce_api_calls_invalidatesessions.htm "Ends one or more sessions specified by a sessionId.").

Each LogoutResult object has these properties.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Indicates whether the session was successfully terminated (true) or not (false). |
| errors | Error[] | If an error occurred during the call, an array of one or more Error objects. Each object contains an error code and description. |

## Related Topics

- invalidateSessions() (atlas.en-us.api.meta/api/sforce_api_calls_invalidatesessions.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
