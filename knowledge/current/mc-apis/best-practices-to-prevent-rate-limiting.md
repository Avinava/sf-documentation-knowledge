---
title: "Best Practices to Prevent Rate-Limiting"
domain: mc-apis
topic: best-practices-to-prevent-rate-limiting
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.436Z
estimatedTokens: 1070
keywords: [Best, Practices, Prevent, Rate-Limiting, keep, API, traffic, flowing, Marketing, Cloud, rate-limits, requests, preserve, system, stability, under, unexpectedly, high, load, Rate, Limits, Authentication, Layer, Service, Happens, Rate-Limited, Don’t, token, every, minutes, expires, _in, offline, scope, Retry, exponential, backoff, Honor, HTTP, error, code, Items]
---

> To keep API traffic flowing, Marketing Cloud rate-limits API requests to preserve system stability under unexpectedly high load.

# Best Practices to Prevent Rate-Limiting

To keep API traffic flowing, Marketing Cloud rate-limits API requests to preserve system stability under unexpectedly high load.

In general, Marketing Cloud API rate-limiting happens at two levels:

-   API authentication layer
-   Service layer

## Rate Limits

### API Authentication Layer

For Marketing Cloud OAuth 2.0 API routes, the system can apply a rate limit on the number of token creation requests for an app if it detects an unexpectedly high load.

### Service Layer

In addition to API authentication rate-limiting, some services enforce their own service-level rate-limiting. To help minimize rate-limiting, check the [REST reference documentation](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/routes.htm) for a batch route you can use.

## What Happens If You Are Rate-Limited

If you, the API client or corresponding tenant, are rate-limited, you can’t make API requests on the rate-limited route until the number of requests is reduced. We recommend that you monitor the response codes and errors, such as 429 errors, for your API requests.

## Best Practices to Prevent Rate-Limiting

Because rate-limiting affects your API integration with Marketing Cloud, we recommend preventing it as much as possible by following these best practices.

### Don’t request more than one access token every 20 minutes

Requesting lots of tokens in a short time period, such as for every API request, doesn’t offer a performance advantage and can cause rate-limiting. Instead, consider caching the token and reusing it until it expires.

### Use the expires\_in token response parameter

When you request an [access token](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/access-token-app.htm) using OAuth 2.0, the expires\_in response parameter returns the length of time in seconds that the access token is valid. Request a new token based on the time returned.

For example, based on the value returned in the expire\_in response parameter, you can refresh an access token or request a new token five minutes before the token expires.

### Use offline scope

For web and public app integrations, offline scope allows you to refresh a token even without an active user session. With offline scope, you can renew an access token that is expired or about to expire. Offline scope works by using a valid refresh token, which has a longer lifetime.

### Retry with exponential backoff

Because you can encounter transient errors or timeouts, your API client probably contains logic to handle failures. If that logic is to continuously retry on failure, however, you can be rate-limited. Instead of continuous retry on failures, consider using exponential backoff for retries with web services or any cloud-based services.

Exponential backoff exponentially increases the wait time between subsequent retries. For example, the first retry happens after 2 seconds, the second retry happens 4 seconds after the first retry, the third retry happens 8 seconds after second retry, and so on, perhaps until a maximum retry length is reached. The exact logic depends on the language and pattern that you use.

### Honor the HTTP 429 error code

To find out if you are rate-limited, look for the HTTP 429 Too Many Requests response status code. This response status code indicates that you sent too many requests in a given amount of time and need to make adjustments.

If you receive the 429 error code, you can use exponential backoff logic. As part of the error response, the Retry-After response HTTP header indicates how long the user agent must wait before making a follow-up request:

Retry-After: <delay-seconds>

Delay-seconds is a non-negative decimal integer that indicates how many seconds to delay after the response is received.

## Related Items

-   [Create an OAuth 2.0 API Integration](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/create-integration-enhanced.htm)
-   [Optimize API Calls and Data Structures to Improve Performance](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/optimizing_api_calls_and_data_structures_to_improve_performance_in_the_salesforce_marketing_cloud.htm)
