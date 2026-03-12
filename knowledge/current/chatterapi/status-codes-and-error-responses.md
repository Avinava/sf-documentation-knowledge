---
title: "Status Codes and Error Responses"
domain: chatterapi
topic: status-codes-and-error-responses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:10.898Z
estimatedTokens: 537
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
| 200 | A request succeeded. The information returned with the response depends on the method of the request. |
| 201 | A request succeeded, and a new resource was created. |
| 202 | A request was accepted for processing, but processing isn't complete. |
| 204 | A request succeeded, and there isn't content to send in the response, such as with a DELETE request. |
| 400 | The request isn’t understood, usually because the ID isn’t valid for the particular resource. For example, if you use a userId where a groupId is required, the request returns 400. |
| 401 | The session ID or OAuth token expired or is invalid. Or, if the request is made by a guest user, the resource isn’t accessible to guest users. The response body contains the message and errorCode. |
| 403 | The request is refused. Verify that the context user has the appropriate permissions to access the requested data, or that the context user is not an external user. |
| 404 | Either the specified resource isn’t found, or the resource is deleted. |
| 409 | A conflict occurred. For example, an attempt to update a request to join a group results in a conflict when that request was already approved or rejected. |
| 410 | The requested resource is retired or removed. Delete or update references to the resource. |
| 412 | A precondition failed. For example, in a batch request, if haltOnError is true and a subrequest fails, subsequent subrequests return 412. |
| 422 | The request couldn’t be processed because it contains invalid data. |
| 429 | Too many requests in a 24-hour period. |
| 500 | An error occurred within Salesforce, so the request couldn’t complete. |
| 503 | Too many requests in an hour, or the server is down for maintenance. |

## Example

This request requires a comment ID, but it uses a feed item ID instead.

```

```

The response body is:

```

```

## Code Examples

```
GET /chatter/comments/0D5D0000000XZoHKAW
```

```
HTTP/1.1 400 Bad Request
Date: Fri, 22 May 2015 17:32:10 GMT
Set-Cookie: BrowserId=D_3feNw7RYmP4DA;Path=/;Domain=.salesforce.com;Expires=Tue, 21-Jul-2015 17:32:10 GMT
Expires: Thu, 01 Jan 1970 00:00:00 GMT
Content-Type: application/json;charset=UTF-8
Transfer-Encoding: chunked


[ {
  "errorCode" : "INVALID_ID_FIELD",
  "message" : "Invalid identifier: 0D5D0000000XZoHKAW"
} ]
```
