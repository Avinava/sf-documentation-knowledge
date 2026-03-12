---
title: "LoginResult"
domain: api
topic: loginresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.399Z
estimatedTokens: 285
keywords: [LoginResult, login, call]
---

# LoginResult

> The login() call returns a LoginResult object, which has the following properties:

# LoginResult

The [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") call returns a LoginResult object, which has the following properties:

| Name | Type | Description |
| --- | --- | --- |
| metadataServerUrl | string | URL of the endpoint that will process subsequent metadata API calls. Your client application needs to set the endpoint. |
| passwordExpired | boolean | Indicates whether the password used during the login attempt is expired (true) or not (false). If the password has expired, then the API returns a valid sessionId, but the only allowable operation is the setPassword() call. |
| serverUrl | string | URL of the endpoint that will process subsequent API calls. Your client application needs to set the endpoint. |
| sessionId | string | Unique ID associated with this session. Your client application needs to set this value in the session header. |
| userId | ID | ID of the user associated with the specified username and password. |
| userInfo | getUserInfoResult | User information fields. For a list of these fields, see getUserInfoResult. |

## Related Topics

- login() (atlas.en-us.api.meta/api/sforce_api_calls_login.htm)
- setPassword() (atlas.en-us.api.meta/api/sforce_api_calls_setpassword.htm)
- getUserInfoResult (atlas.en-us.api.meta/api/sforce_api_calls_getuserinfo_getuserinforesult.htm)
