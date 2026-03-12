---
title: "Connect in Apex Features"
domain: apex-guide
topic: connect-in-apex-features
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.409Z
estimatedTokens: 519
keywords: [Connect, Apex, Features, topic, classes, work, common]
---

# Connect in Apex Features

> This topic describes which classes and methods to use to work with common Connect in
    Apex features.

# Connect in Apex Features

This topic describes which classes and methods to use to work with common Connect in Apex features.

You can also go directly to the [ConnectApi Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_connect_api.htm) reference content.

-   **[Working with Action Links](atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links.htm)**
    An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.
-   **[Working with Feeds and Feed Elements](atlas.en-us.apexcode.meta/apexcode/connectapi_features_feeds_feed_elements.htm)**
    The Chatter feed is a container of feed elements. The abstract class ConnectApi.FeedElement is a parent class to the ConnectApi.FeedItem class, representing feed posts, and the ConnectApi.GenericFeedElement class, representing bundles and recommendations in the feed.
-   **[Accessing ConnectApi Data in Experience Cloud Sites](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_communities.htm)**
    Many ConnectApi methods work within the context of a single Experience Cloud site.
-   **[Methods Available to Experience Cloud Guest Users](atlas.en-us.apexcode.meta/apexcode/apex_connectapi_public_communities.htm)**
    If your Experience Cloud site allows access without logging in, guest users have access to many Apex methods. These methods return information the guest user has access to.
-   **[Supported Validations for DBT Segments](atlas.en-us.apexcode.meta/apexcode/connectapi_features_cdp_dbt_validations.htm)**
    When creating or updating a segment, the ConnectApi.CdpSegmentInput class is subject to some SQL validations.

## Related Topics

- Working with Action Links (atlas.en-us.apexcode.meta/apexcode/connectapi_features_action_links.htm)
- Working with Feeds and Feed Elements (atlas.en-us.apexcode.meta/apexcode/connectapi_features_feeds_feed_elements.htm)
- Accessing ConnectApi Data in Experience Cloud Sites (atlas.en-us.apexcode.meta/apexcode/apex_connectapi_communities.htm)
- Methods Available to Experience Cloud Guest Users (atlas.en-us.apexcode.meta/apexcode/apex_connectapi_public_communities.htm)
- Supported Validations for DBT Segments (atlas.en-us.apexcode.meta/apexcode/connectapi_features_cdp_dbt_validations.htm)
