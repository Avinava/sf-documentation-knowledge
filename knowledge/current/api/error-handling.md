---
title: "Error Handling"
domain: api
topic: error-handling
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.630Z
estimatedTokens: 525
keywords: [Error, Handling, API, calls, data, client, application, identify, resolve, runtime, errors, Session, Expiration]
---

# Error Handling

> The API calls return error data that your client application can use to identify and
    resolve runtime errors.

# Error Handling

The API calls return error data that your client application can use to identify and resolve runtime errors.

If an error occurs during the invocation of most API calls, then the API provides these types of error handling.

-   For errors resulting from badly formed messages, failed authentication, or similar problems, the API returns a SOAP fault message with an associated [ExceptionCode](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#exception_code_topic).
-   For most calls, if the error occurs because of a problem specific to the query, the API returns an [Error](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#error_topic). For example, if a [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data.") request contains more than 200 objects.

## Error Handling for Session Expiration

When you sign on via the [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") call, a new client session begins and a corresponding unique session ID is generated. Sessions expire automatically after a predetermined length of inactivity, which can be configured in Salesforce from Setup by clicking **Security Controls**. The default is 120 minutes (two hours). If you make an API call, the inactivity timer is reset to zero.

When your session expires, the exception code INVALID\_SESSION\_ID is returned. If this code is returned, you must invoke the [login()](atlas.en-us.api.meta/api/sforce_api_calls_login.htm "Logs in to the login server and starts a client session.") call again.

## More About Error Handling

For more information about errors, see these topics.

-   [API Fault Element](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#api_fault_element)
-   [ExceptionCode](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#exception_code_topic)
-   [Error](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#error_topic)

## Related Topics

- ExceptionCode (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- login() (atlas.en-us.api.meta/api/sforce_api_calls_login.htm)
- API Fault Element (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
