---
title: "Connect REST API Limits"
domain: chatterapi
topic: connect-rest-api-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.816Z
estimatedTokens: 838
keywords: [Connect, REST, API, Limits, requests, subject, rate, different, limit, Salesforce, APIs, per, user, application, hour]
---

# Connect REST API Limits

> Connect REST API requests are subject to rate limits. Connect REST
      API has a different rate limit than other Salesforce APIs. Connect REST API has a per user,
      per application, per hour rate limit. When you exceed the rate limit, Connect REST API
      resources return a 503 Service Unavailable error code.

# Connect REST API Limits

Connect REST API requests are subject to rate limits. Connect REST API has a different rate limit than other Salesforce APIs. Connect REST API has a per user, per application, per hour rate limit. When you exceed the rate limit, Connect REST API resources return a 503 Service Unavailable error code.

## Rate Limits

For migrated orgs and orgs created in Summer ’24 and later, only requests to [Chatter REST API resources](atlas.en-us.chatterapi.meta/chatterapi/connect_chatter_resources_overview.htm "These REST API resources require Chatter and can have different rate limit allocations.") are subject to the per user, per application, per hour rate limit. The documentation for every Chatter resource specifies that Chatter is required. Requests to resources that don’t require Chatter count toward the [Salesforce Platform total API request allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm), which are per org and span a 24-hour period.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Load, performance, and other system issues can prevent some limits from being reached. Limits can change without notice. Ensure that your applications make efficient use of available requests and gracefully handle the 503 error code.

For applications using a session ID from Salesforce, the rate limit is per user, per hour—there isn’t a separate bucket for applications. All applications the user accesses with a session ID use this general quota. To take advantage of the per user, per application, per hour limit, use OAuth tokens.

To build apps that don’t hit the rate limit, use these guidelines.

-   If you hit limits when running tests, use multiple users to simulate a real-world scenario.
-   When polling for feed updates, don’t exceed 1 poll per minute (60 polls per hour). To return more results in one request, increase the page size.
-   When polling for private messages, don’t exceed 60 polls per hour.
-   To avoid making multiple requests, cache metered static assets such as file and dashboard renditions (group and user profile pictures are not metered).
-   Set up two client apps: one for automated testing and one for manual testing and development. Don’t share client apps with other developers.
-   Use a unique client app for the production environment.
-   Don’t share client apps between applications.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

To extract data, use REST API or SOAP API to operate on sObjects. Do not use Connect REST API to extract data.

Salesforce Platform REST API rate limits and query language work better for these use cases.

-   Migrate or synchronize user profiles between systems.
-   Create analytic applications.
-   Write queries that return records and fields.

## Integer Limits

Connect REST API supports most 64-bit integers. Integers greater than 231\-1 and less than 1018 must be in quotes. Integers larger than 1018 aren’t supported.

#### See Also

-   [When to Use Connect REST API](atlas.en-us.chatterapi.meta/chatterapi/intro_using_chatter_connect.htm "Is Connect REST API the right API for you?")

## Related Topics

- Chatter REST API
                resources (atlas.en-us.chatterapi.meta/chatterapi/connect_chatter_resources_overview.htm)
- When to Use Connect REST API (atlas.en-us.chatterapi.meta/chatterapi/intro_using_chatter_connect.htm)
