---
title: "Connect REST API Introduction"
domain: chatterapi
topic: connect-rest-api-introduction
apiVersion: 67.0
release: summer-26-v67
docType: release-note
lastCollected: 2026-03-12T09:34:21.863Z
estimatedTokens: 947
keywords: [Connect, REST, API, Introduction, Consider, architecture, rate, limits, how, resources, requests, responses, work]
---

# Connect REST API Introduction

> Consider the Connect REST API architecture, rate limits, and how the resources,
                requests, and responses work.

# Connect REST API Introduction

Consider the Connect REST API architecture, rate limits, and how the resources, requests, and responses work.

-   **[When to Use Connect REST API](atlas.en-us.chatterapi.meta/chatterapi/intro_using_chatter_connect.htm)**
    Is Connect REST API the right API for you?
-   **[Connect REST API Architecture](atlas.en-us.chatterapi.meta/chatterapi/intro_architecture.htm)**
    To use Connect REST API, understand a few characteristics of its architecture, like how to authenticate, and which data formats it supports.
-   **[Connect REST API Limits](atlas.en-us.chatterapi.meta/chatterapi/intro_rate_limits.htm)**
    Connect REST API requests are subject to rate limits. Connect REST API has a different rate limit than other Salesforce APIs. Connect REST API has a per user, per application, per hour rate limit. When you exceed the rate limit, Connect REST API resources return a 503 Service Unavailable error code.
-   **[Build the Resource URL](atlas.en-us.chatterapi.meta/chatterapi/intro_building_url.htm)**
    Access Connect REST API resources by using the URI for your company's instance, combined with version and Experience Cloud site information, and the URI for the resource.
-   **[Send HTTP Requests](atlas.en-us.chatterapi.meta/chatterapi/intro_using_curl.htm)**
    Connect REST API uses HTTP methods to send and receive JSON and XML content, so it’s easy to build client applications using the tool or the language of your choice.
-   **[HTTP Request Flow and a Response Body](atlas.en-us.chatterapi.meta/chatterapi/intro_understanding_chatter_connect_resources.htm)**
    Review the process flow for Connect REST API, including resource and response examples.
-   **[Inputs and Binary File Upload Examples](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)**
    Make HTTP POST, PATCH, and PUT requests using inputs and learn more about uploading binary files.
-   **[Wildcards](atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)**
    Use wildcard characters to match text patterns in Connect REST API and Connect in Apex searches.
-   **[Specify Response Sizes](atlas.en-us.chatterapi.meta/chatterapi/connect_returns_filters.htm)**
    Use filter parameters to return only the data the application needs. To specify the response size by group (big, medium, or small), use filterGroup as a request parameter or in a request body. In addition, to exclude or include specific properties, use either exclude or include as a request parameter or in a request body.
-   **[Response Body Encoding](atlas.en-us.chatterapi.meta/chatterapi/intro_encoding.htm)**
    Responses are minimally HTML entity-encoded by default.
-   **[Status Codes and Error Responses](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)**
    The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.
-   **[OAuth and Connect REST API](atlas.en-us.chatterapi.meta/chatterapi/intro_using_oauth.htm)**
    Connect REST API uses OAuth to securely identify your application before connecting to Salesforce.
-   **[Connect REST API Release Notes](atlas.en-us.chatterapi.meta/chatterapi/intro_release_notes.htm)**
    Use the Salesforce Release Notes to learn about the most recent updates and changes to Connect REST API.
-   **[API End-of-Life Policy](atlas.en-us.chatterapi.meta/chatterapi/intro_api_eol.htm)**
    Salesforce is committed to supporting each API version for a minimum of three years from the date of first release. In order to mature and improve the quality and performance of the API, versions that are more than three years old sometimes are no longer supported.

## Related Topics

- When to Use Connect REST API (atlas.en-us.chatterapi.meta/chatterapi/intro_using_chatter_connect.htm)
- Connect REST API Architecture (atlas.en-us.chatterapi.meta/chatterapi/intro_architecture.htm)
- Connect REST API Limits (atlas.en-us.chatterapi.meta/chatterapi/intro_rate_limits.htm)
- Build the Resource URL (atlas.en-us.chatterapi.meta/chatterapi/intro_building_url.htm)
- Send HTTP Requests (atlas.en-us.chatterapi.meta/chatterapi/intro_using_curl.htm)
- HTTP Request Flow and a Response Body (atlas.en-us.chatterapi.meta/chatterapi/intro_understanding_chatter_connect_resources.htm)
- Inputs and Binary File Upload Examples (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- Specify Response Sizes (atlas.en-us.chatterapi.meta/chatterapi/connect_returns_filters.htm)
- Response Body Encoding (atlas.en-us.chatterapi.meta/chatterapi/intro_encoding.htm)
