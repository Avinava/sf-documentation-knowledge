---
title: "Status Codes and Error Responses"
domain: uiapi
topic: status-codes-and-error-responses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.026Z
estimatedTokens: 493
keywords: [Status, Codes, Error, Responses, HTTP, code, isn’t, successful, message, appropriate, occurred]
---

# Status Codes and Error Responses

> The response header contains an HTTP status code. If the response isn’t successful, the
    response body contains an error message, and if appropriate, information about the field or
    object where the error occurred.

# Status Codes and Error Responses

The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.

| HTTP Status Code | Description |
| --- | --- |
| 200 | Success with GET, PATCH, or HEAD request |
| 201 | Success with POST request |
| 204 | Success with DELETE |
| 400 | The request could not be understood, usually because the ID is not valid for the particular resource. If the request is for a batch record operation, see the corresponding usage guidelines.Create a Batch of RecordsUpdate a Batch of RecordsDelete a Batch of Records |
| 401 | The session ID or OAuth token has expired or is invalid. Or, if the request is made by a guest user, the resource isn’t accessible to guest users. The response body contains the message and errorCode. |
| 403 | The request has been refused. Verify that the context user has the appropriate permissions to access the requested data, or that the context user is not an external user. |
| 404 | Either the specified resource was not found, or the resource has been deleted. |
| 409 | A conflict has occurred. For example, an attempt was made to update a request to join a group, but that request had already been approved or rejected. |
| 410 | The requested resource has been retired or removed. Delete or update any references to the resource. |
| 412 | A precondition has failed. For example, in a batch request, if haltOnError is true and a subrequest fails, subsequent subrequests return 412. |
| 500 | An error has occurred within Lightning Platform, so the request could not be completed. Contact Salesforce Customer Support. |
| 503 | Too many requests in an hour or the server is down for maintenance. |

## Example

This request requires a 15 or 18 character record ID, but this record ID doesn't contain enough characters.

```

```

The response body is:

```

```

## Code Examples

```
GET /ui-api/record-ui/003R000000
```

```
HTTP/1.1 400 Bad Request
Date: Tue, 29 Nov 2016 00:16:36 GMT
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: reflected-xss block;report-uri /_/ContentDomainCSPNoAuth?type=xss
Content-Security-Policy: referrer origin-when-cross-origin
Set-Cookie: BrowserId=q27CK9tSSCeI3klUaYMo6A;Path=/;Domain=.salesforce.com;Expires=Sat, 28-Jan-2017 00:16:36 GMT
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked


[ {
  "errorCode" : "ILLEGAL_QUERY_PARAMETER_VALUE",
  "message" : "recordId should be a valid record ID: 003R000000"
} ]
```

## Related Topics

- Create a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_post.htm)
- Update a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_update.htm)
- Delete a Batch of Records (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_records_batch_delete.htm)
