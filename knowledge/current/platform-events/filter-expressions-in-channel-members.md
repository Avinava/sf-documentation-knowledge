---
title: "Filter Expressions in Channel Members"
domain: platform-events
topic: filter-expressions-in-channel-members
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.793Z
estimatedTokens: 377
keywords: [Filter, Expressions, Channel, Members, Add, expression, member, that’s, associated, custom, associates, platform, event, holds, filtered]
---

# Filter Expressions in Channel Members

> Add a filter expression in a channel member that’s associated with a custom channel. The
    channel member associates a custom platform event with the channel and specifies the filter
    expression. The channel holds the filtered stream of event messages that match the filter
    expression for the specified custom platform event.

# Filter Expressions in Channel Members

Add a filter expression in a channel member that’s associated with a custom channel. The channel member associates a custom platform event with the channel and specifies the filter expression. The channel holds the filtered stream of event messages that match the filter expression for the specified custom platform event.

Let’s walk through the steps to create a channel, a channel member, and a filter expression. Then we can subscribe to the channel to validate receiving the filtered event stream.

-   **[Prerequisite: Define a Platform Event](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_pe.htm)**
    The examples in this section depend on a predefined custom platform event called Order\_Event\_\_e. To define this event in Salesforce, complete these steps.
-   **[Add a Filter with Tooling API](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_tooling_api_add_filter.htm)**
    Before you can add a filter, create a channel. Use PlatformEventChannel in Tooling API, and specify API version 56.0 or later.
-   **[Add a Filter with Metadata API](atlas.en-us.platform_events.meta/platform_events/platform_events_filter_metadata_api_add_filter.htm)**
    We recommend using Metadata API as part of the application lifecycle management process to develop, test, deploy, and release your apps to production. If you want to create the channel and filter expression, we recommend that you use Tooling API with REST.

## Related Topics

- Prerequisite: Define a Platform Event (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_pe.htm)
- Add a Filter with Tooling API (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_tooling_api_add_filter.htm)
- Add a Filter with Metadata API (atlas.en-us.platform_events.meta/platform_events/platform_events_filter_metadata_api_add_filter.htm)
