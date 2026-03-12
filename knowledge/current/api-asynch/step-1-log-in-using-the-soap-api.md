---
title: "Step 1: Log In Using the SOAP API"
domain: api-asynch
topic: step-1-log-in-using-the-soap-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.249Z
estimatedTokens: 310
keywords: [Step, Log, SOAP, API, Bulk, doesn't, provide, login, operation]
---

# Step 1: Log In Using the SOAP API

> The Bulk API doesn't provide a login operation, so you must use SOAP API to log
    in.

# Step 1: Log In Using the SOAP API

The Bulk API doesn't provide a login operation, so you must use SOAP API to log in.

To establish a session, you need to use SOAP API’s login() function as described in the *SOAP API Developer Guide*:

-   [Step 4: Walk Through the Sample Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_steps_walk_through_code.htm).
-   [login()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_login.htm).

The login() function returns an XML response that includes <sessionId\> and <serverUrl\> elements. Note the values of the <sessionId\> element and the first part of the host name (instance), such as yourInstance\-api, from the <serverUrl\> element. Use these values in subsequent requests to the Bulk API.

#### See Also

-   [Set a Session Header](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_session_header.htm "All HTTP requests must contain a valid API session ID obtained with the SOAP API login() call. The session ID is returned in the SessionHeader.")

-   [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "SOAP API Developer Guide - html (New Window)")

## Related Topics

- Set a Session Header (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_basics_session_header.htm)
