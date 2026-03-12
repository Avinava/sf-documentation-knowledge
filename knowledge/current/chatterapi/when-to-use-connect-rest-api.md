---
title: "When to Use Connect REST API"
domain: chatterapi
topic: when-to-use-connect-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.844Z
estimatedTokens: 739
namespace: ConnectApi
keywords: [Connect, REST, API, right, How, Different, Salesforce, APIs, Apex]
---

# When to Use Connect REST API

> Is Connect REST API the right API for you?

**Namespace:** `ConnectApi`

# When to Use Connect REST API

Is Connect REST API the right API for you?

Use Connect REST API to:

-   Build a mobile app.
-   Integrate a third-party web application with Salesforce so it can notify groups of users about events.
-   Display a feed on an external system, such as an intranet site, after users are authenticated.
-   Make feeds actionable and integrated with third-party sites. For example, an app that posts a Chatter item to X (formerly Twitter) whenever the post includes #tweet hashtag.
-   Create simple games that interact with the feed for notifications.
-   Creating a custom, branded skin for Chatter for your organization.

## How Is Connect REST API Different from Other Salesforce APIs?

Connect REST API differs from REST API in multiple ways, including:

-   Data is structured for rendering on websites and mobile devices.
-   Returned information is localized to the user’s time zone and language.
-   Changed values that are tracked in a feed are returned as value-pair representations.
-   Rate limiting for Connect REST API is per user, per application, per hour. Rate limiting for Salesforce Platform APIs is per 24-hour period, per org.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

    #### Note

    For migrated orgs and orgs created in Summer ’24 and later, only requests to [Chatter REST API resources](atlas.en-us.chatterapi.meta/chatterapi/connect_chatter_resources_overview.htm "These REST API resources require Chatter and can have different rate limit allocations.") are subject to the per user, per application, per hour rate limit. The documentation for every Chatter resource specifies that Chatter is required. Requests to resources that don’t require Chatter count toward the [Salesforce Platform total API request allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm), which are per org and span a 24-hour period.


If needed, extract an ID from REST API and use it in requests to Connect REST API.

## Connect in Apex

Many Connect REST API resource actions are exposed as static methods on Apex classes in the ConnectApi namespace. This namespace is also referred to as *Connect in Apex*. Use Connect in Apex to develop applications on the Lightning Platform without using HTTP callouts from Apex.

The documentation for Connect in Apex is available in the *Apex Developer Guide* and the *Apex Reference Guide*.

#### See Also

-   [Connect REST API Limits](atlas.en-us.chatterapi.meta/chatterapi/intro_rate_limits.htm "Connect REST API requests are subject to rate limits. Connect REST API has a different rate limit than other Salesforce APIs. Connect REST API has a per user, per application, per hour rate limit. When you exceed the rate limit, Connect REST API resources return a 503 Service Unavailable error code.")

## Related Topics

- Chatter REST API
                resources (atlas.en-us.chatterapi.meta/chatterapi/connect_chatter_resources_overview.htm)
- Connect REST API Limits (atlas.en-us.chatterapi.meta/chatterapi/intro_rate_limits.htm)
