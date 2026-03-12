---
title: "Send HTTP Requests"
domain: chatterapi
topic: send-http-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.846Z
estimatedTokens: 480
keywords: [Send, HTTP, Requests, Connect, REST, API, uses, receive, JSON, XML, content, it’s, easy, build, client]
---

# Send HTTP Requests

> Connect REST API uses HTTP methods to send and receive JSON and XML content, so it’s
  easy to build client applications using the tool or the language of your choice.

# Send HTTP Requests

Connect REST API uses HTTP methods to send and receive JSON and XML content, so it’s easy to build client applications using the tool or the language of your choice.

HTTP requests to a Connect REST API resource contain the following information.

-   An HTTP method (such as GET, POST, PATCH, or DELETE).
-   An OAuth 2.0 access token used to authenticate the request. See [Connect REST API Quick Start](atlas.en-us.chatterapi.meta/chatterapi/quickstart.htm "Connect to Salesforce and authenticate, then make a request to Connect REST API and look at the response.").
-   The Connect REST API resource URL.
-   Request parameters or a request body containing information needed for requests, such as information to update a record.

    The request body can contain JSON or XML. If you pass resource-specific request parameters and a request body, the request parameters are ignored. Request parameters that aren’t specific to a resource, such as parameters in a bearer token URL and the \_HttpMethod parameter, are processed along with the request body. Use bearer token parameters as they are. Don’t add or remove parameters.


The HTTP methods are used to indicate the desired action, such as retrieving information, as well as creating, updating, and deleting records.

-   GET is used to retrieve information, such as basic resource summary information.
-   POST is used to create a new item, such as a feed item or a comment or like, or subscribe to a group.
-   PATCH is used for partial updates to an item, for example, renaming a file.
-   PUT is used for whole updates to an item, for example, marking a conversation as read.
-   DELETE is used to delete an item, such as a feed element, or to unsubscribe from a group.
-   HEAD is used to retrieve resource metadata. It’s similar to using GET but doesn’t return a response body. You can use HEAD to test the availability of a resource.

## Related Topics

- Connect REST API Quick Start (atlas.en-us.chatterapi.meta/chatterapi/quickstart.htm)
