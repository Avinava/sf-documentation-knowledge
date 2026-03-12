---
title: "Get Started with Ingestion API"
domain: data-cloud
topic: get-started-with-ingestion-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:12.319Z
estimatedTokens: 1521
keywords: [Get, Started, Ingestion, API, Before, Data, Cloud, complete, prerequisites, set, authentication, know, limits, apply, bulk, ingestion, streaming, ingestion., Prerequisites, Authentication]
---

# Get Started with Ingestion API

> Before using Ingestion API in Data Cloud, complete the prerequisites, set
  up authentication, and know the limits that apply to bulk ingestion and streaming
  ingestion.

# Get Started with Ingestion API

Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion.

## Prerequisites

-   Setup [Ingestion API connector](https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-ingestion-api.html) to define the endpoints and payload to ingest data.
-   Create an Ingestion API data stream to configure ingestion jobs and expose the API for external consumption.
-   Contact your admin to get endpoint details configured.

## Authentication

Set up a connected app to authenticate and request access to Data Cloud Ingestion API. The connected app enables standard OAuth protocols for authentication and authorization. Follow the instructions in [*Salesforce Help* Create a Connected App](https://help.salesforce.com/articleView?id=sf.connected_app_create.htm&type=5&language=en_US), and configure the app as needed. In your connected app, make sure **Enable OAuth Settings** and necessary OAuth scopes are selected. The possible scopes are:

-   Access and manage your Data Cloud Ingestion API data (cdp\_ingest\_api).
-   Access and manage your data (api).
-   Perform requests on your behalf at any time (refresh\_token, offline\_access).

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

Your orgs must be provisioned with Data Cloud licenses and the users must be assigned to appropriate roles for having full access to objects in the Data Cloud. Refer to [User Roles and Permission Sets in Data Cloud](https://help.salesforce.com/s/articleView?id=sf.c360_a_userpermissions.htm&type=5&language=en_US) before setting up the Connected App.

**Acquire a Salesforce Access Token**

Send a request for acquiring the Salesforce access token. Here’s how a sample request is going to look like.

```

```

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Refer to [OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration](https://help.salesforce.com/articleView?id=remoteaccess_oauth_jwt_flow.htm&language=en_US "HTML (New Window)") for creating a JWT assertion.

**Response Format**

This example shows a response from Salesforce.

```

```

**Exchanging Salesforce Access Token for Data Cloud Access Token**

Now that you've acquired the Salesforce access token, use it to get the Data Cloud access token to invoke the Ingestion API.

This example shows a request for Data Cloud access token.

```

```

This example shows a sample response.

```

```

## Bulk Ingest API Limits

| Item | Description |
| --- | --- |
| API usage limits | After each request, your app must check the response code. The HTTP 429 Too Many Requests status code indicates the app must reduce its request frequency. |
| Bulk Job Retention Time | Any open bulk jobs with the status of Open or Upload Complete that are older than 7 days, are deleted from the ingestion queue. |
| Maximum Number of Files per Job | You can upload one file at a time per bulk job. A job can have a maximum of 100 files. |
| Maximum Payload size | CSV files uploaded via Bulk API have a maximum size of 150 MB. |
| Number of Requests or Jobs Allowed per Hour | 20 |
| Number of Concurrent Requests or Jobs Allowed at One Time | 5 |

## Streaming Ingest API Limits

| Item | Description |
| --- | --- |
| API usage limits | After each request, your app must check the response code. The HTTP 429 Too Many Requests status code indicates the app must reduce its request frequency. |
| Expected Latency | Data is processed asynchronously approximately every 3 minutes. |
| Maximum Payload Size Per Request | JSON data uploaded via Streaming API have a maximum body size of 200 KB per request |
| Maximum Number of Records that can be Deleted | You can delete a maximum of 200 records via Streaming API. |
| Total Number of Requests per Second Across All Ingestion API Object Endpoints | 250 requests |

## Status Codes and Error Responses

| HTTP Response Code | Description |
| --- | --- |
| 200 OK | Request succeeded. |
| 201 Created | Indicates that the resource was successfully created. |
| 202 Accepted | The request was accepted and the data will be processed asynchronously. |
| 204 No Content | Job was successfully deleted. |
| 400 Bad Request | Server can’t process the request due to client error. Possible causes are a malformed request syntax or invalid request body. |
| 401 Unauthorized | Authentication failed because the JWT is invalid or expired. Refresh the token. |
| 404 Not Found | Client error: the requested resource doesn’t exist. |
| 409 Conflict | Client error: unable to update the job state given its status. |
| 429 Conflict | The user has sent too many requests in a given amount of time. Implement a back-off policy to reduce the number of requests. |
| 500 Internal Server Error | Internal server error. Retry the request. |

## Data Upload Limits

-   For streaming: Small payloads (up to 200 KB per single request)
-   For bulk: Large CSVs up to 150 MB

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

For guidance on overall limitations view [Data Cloud Limits and Guidelines](https://help.salesforce.com/s/articleView?id=sf.c360_a_limits_and_guidelines.htm&type=5&language=en_US).

-   **[Streaming Ingestion Walkthrough](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_streaming_insert_example.htm)**
    Use this walkthrough to understand the steps for loading records using streaming ingestion.
-   **[Bulk Ingestion Walkthrough](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_bulk_insert_example.htm)**
    This walkthrough guides you through the steps for loading records using bulk ingestion.

#### See Also

-   [*Data Cloud Reference Guide*: Get Started](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm "Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.")

## Code Examples

```
POST https://login.salesforce.com/services/oauth2/token
Content-Type : x-www-form-urlencoded
grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer
&assertion=<JWT_ASSERTION_TOKEN>
```

```json
{
  "access_token": "<SALESFORCE_ACCESS_TOKEN>",
  "scope": "cdp_ingest_api",
  "instance_url": "https://<YOUR_INSTANCE>.salesforce.com",
  "id": "https://<YOUR_INSTANCE>.salesforce.com/id/<ORG_ID>/<USER_ID>",
  "token_type": "Bearer"
}
```

```
POST https://<DATA_CLOUD_INSTANCE>/services/a360/token
Content-Type : x-www-form-urlencoded
grant_type=urn:salesforce:grant-type:external:cdp
&subject_token=<SALESFORCE_ACCESS_TOKEN>
&subject_token_type=urn:ietf:params:oauth:token-type:access_token
```

```json
{
  "access_token": "<DATA_CLOUD_ACCESS_TOKEN>",
  "instance_url": "https://<DATA_CLOUD_INSTANCE>",
  "token_type": "Bearer",
  "issued_token_type": "urn:ietf:params:oauth:token-type:jwt",
  "expires_in": 7191
}
```

## Related Topics

- Streaming Ingestion Walkthrough (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_streaming_insert_example.htm)
- Bulk Ingestion Walkthrough (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_bulk_insert_example.htm)
- Data Cloud Reference Guide: Get Started (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm)
