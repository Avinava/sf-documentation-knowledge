---
title: "Handle Errors in REST API"
domain: mc-apis
topic: handle-errors-in-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:16.861Z
estimatedTokens: 838
keywords: [Validation, Authorization, Authentication, Runtime, Handle, Errors, REST, API]
---

# Handle Errors in REST API

## Validation

| Description | Resolution | HTTP Error | Custom |
| --- | --- | --- | --- |
| Generic Exception | Ensure you included the proper endpoint and resource. | 400 | 10000 |
| Invalid Data Type | Ensure the parameters of your request include the required data types. | 400 | 10001 |
| Missing Required Field | Ensure you include all required fields in the body of the request. | 400 | 10002 |
| Incorrect Format | Ensure you properly format your request. | 400 | 10003 |
| Invalid Message Format | Serialization error, please ensure the body has balanced braces and brackets. | 400 | 10004 |
| Invalid Value | Ensure you provide valid values in your request. | 400 | 10005 |
| Aggregate Error | Check additionalErrors for detailed error messages. | 400 | 10006 |
| Unsupported Media Type | Ensure you send a valid and accepted media format. | 415 |  |

## Authorization

| Description | Resolution | HTTP Error | Custom |
| --- | --- | --- | --- |
| General Exception | Ensure you provide the correct resource. | 403 | 20000 |
| Business Rule Not Set | Review the associated permissions and ensure you provide the proper configuration. | 403 | 20001 |
| Insufficient Privileges | Your account lacks the privileges necessary to perform the request. | 403 | 20002 |

## Authentication

| Description | Resolution | HTTP Error | Custom |
| --- | --- | --- | --- |
| Not Authorized | The token was not found in the request, or it is invalid or expired. | 401 | 0 |
| Authorization token invalid on URL or request body | Ensure that access token is passed in the request header. | 401 | 40004 |
| General | Ensure you provide the correct resource. | 403 | 40000 |
| Not Authenticated | Ensure you provide a valid token. | 403 | 40001 |
| Authorization token invalid on this endpoint | Use the stack-level endpoint that matches your token. | 403 | 40002 |
| Authorization token invalid on URL | Ensure that access token is passed in the request header. | 403 | 40003 |
| Internal Server Error | See the response returned by the HTTP routing assertion. | 500 |  |
| Service Not Found | The resource you are trying to access does not exist. Ensure you provide the correct resource. | 596 |  |

## Runtime

| Description | Resolution | HTTP Error | Custom |
| --- | --- | --- | --- |
| Generic | Ensure you provide the correct resource. | 400 | 30000 |
| Invalid Operation | Your request uses an invalid HTTP operation for the resource. Modify the request to use a valid operation. | 400 | 30001 |
| Invalid State Transition | This operation requests an invalid state transition for the resource. Ensure you request a valid state transition. | 409 | 30002 |
| Object Not Found | Your request cannot find any available data. Ensure you properly created your request. | 404 | 30003 |
| Object Already Exists | Another object with the same credentials already exists. | 409 | 30004 |
| Too many requests | Retry the API call after number of seconds specified in “Retry-After” header field. | 429 | 50100 |
| Too many requests | Your API requests are temporarily blocked due to too many concurrent requests. Contact Salesforce Marketing Cloud technical support to resolve the failure. | 429 | 50200 |
| Service Unavailable | Retry the API call after number of seconds specified in “Retry-After” header field. | 503 | 50300 |

## Related Topics

- 50100 (atlas.en-us.noversion.mc-apis.meta/mc-apis/rate-limiting-errors.htm)
- 50200 (atlas.en-us.noversion.mc-apis.meta/mc-apis/rate-limiting-errors.htm)
