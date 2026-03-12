---
title: "Status Codes and Error Responses"
domain: rest-api
topic: status-codes-and-error-responses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.997Z
estimatedTokens: 886
keywords: [Status, Codes, Error, Responses, Either, occurs, successful, HTTP, code, usually]
---

# Status Codes and Error Responses

> Either when an error occurs or when a response is successful, the response header
			contains an HTTP code, and the response body usually contains:

# Status Codes and Error Responses

Either when an error occurs or when a response is successful, the response header contains an HTTP code, and the response body usually contains:

-   The HTTP response code
-   The message accompanying the HTTP response code
-   The field or object where the error occurred (if the response returns information about an error)

| HTTP response code | Description |
| --- | --- |
| 200 | “OK” success code, for GET, HEAD, and some PATCH requests. |
| 201 | “Created” success code, for POST requests and some PATCH requests. |
| 204 | “No Content” success code, for DELETE requests and some PATCH requests. |
| 300 | The value returned when an external ID exists in more than one record. The response body contains the list of matching records. |
| 304 | The request content hasn’t changed since a specified date and time. The date and time is provided in a If-Modified-Since header. See Get Object Metatdata Changes for an example. |
| 400 | The request couldn’t be understood, usually because the JSON or XML body contains an error. |
| 401 | The session ID or OAuth token used has expired or is invalid. The response body contains the message and errorCode. |
| 403 | The request has been refused. Verify that the logged-in user has appropriate permissions. If the error code is REQUEST_LIMIT_EXCEEDED, you’ve exceeded API request limits in your org. |
| 404 | The requested resource couldn’t be found. Check the URI for errors, and verify that there are no sharing issues. |
| 405 | The method specified in the Request-Line isn’t allowed for the resource specified in the URI. |
| 409 | The request couldn’t be completed due to a conflict with the current state of the resource. Check that the API version is compatible with the resource you’re requesting. |
| 410 | The requested resource has been retired or removed. Delete or update any references to the resource. |
| 412 | The request wasn’t executed because one or more of the preconditions that the client specified in the request headers wasn’t satisfied. For example, the request includes an If-Unmodified-Since header, but the data was modified after the specified date. |
| 414 | The length of the URI exceeds the 16,384-byte limit. |
| 415 | The entity in the request is in a format that’s not supported by the specified method. |
| 420 | Salesforce Edge doesn’t have routing information available for this request host. Contact Salesforce Customer Support. |
| 428 | The request wasn’t executed because it wasn’t conditional. Add one of the Conditional Request Headers, such as If-Match, to the request and resubmit it. |
| 431 | The combined length of the URI and headers exceeds the 16,384-byte limit. |
| 500 | An error has occurred within Lightning Platform, so the request couldn’t be completed. Contact Salesforce Customer Support. |
| 502 | Salesforce Edge wasn’t able to communicate successfully with the Salesforce instance. |
| 503 | The server is unavailable to handle the request. Typically this issue occurs if the server is down for maintenance or is overloaded. |

Incorrect ID example

Using a non-existent ID in a request using JSON or XML (request\_body.json or request\_body.xml)

```

```

Resource doesn’t exist

Requesting a resource that doesn’t exist, for example, you try to create a record using a misspelled object name

```

```

For extended error codes, see [Core Data Types Used in API Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm).

## Code Examples

```
[
{
  "fields" : [ "Id" ],
  "message" : "Account ID: id value of incorrect type: 001900K0001pPuOAAU",
  "errorCode" : "MALFORMED_ID"
}
]
```

```
[
{
  "message" : "The requested resource does not exist",
  "errorCode" : "NOT_FOUND"
}
]
```

## Related Topics

- Get Object
								Metatdata Changes (atlas.en-us.api_rest.meta/api_rest/sobject_describe_with_ifmodified_header.htm)
- If-Unmodified-Since (atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm)
- Conditional Request Headers (atlas.en-us.api_rest.meta/api_rest/intro_rest_conditional_requests.htm)
