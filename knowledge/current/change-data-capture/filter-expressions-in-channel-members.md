---
title: "Filter Expressions in Channel Members"
domain: change-data-capture
topic: filter-expressions-in-channel-members
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.567Z
estimatedTokens: 309
keywords: [Filter, Expressions, Channel, Members, Add, expression, member, that’s, associated, custom, standard, ChangeEvents, recommend, filtered, stream]
---

# Filter Expressions in Channel Members

> Add a filter expression in a channel member that’s associated with a custom or the
    standard ChangeEvents channel. We recommend that you use a custom channel so that the filtered
    stream is isolated from the standard event stream and subscribers expect the stream to be
    filtered. The channel holds the filtered stream of events that match the filter expression for
    the specified change event.

# Filter Expressions in Channel Members

Add a filter expression in a channel member that’s associated with a custom or the standard ChangeEvents channel. We recommend that you use a custom channel so that the filtered stream is isolated from the standard event stream and subscribers expect the stream to be filtered. The channel holds the filtered stream of events that match the filter expression for the specified change event.

Let’s walk through the steps to create a channel, a channel member, and a filter expression. Then we can subscribe to the channel to validate receiving the filtered event stream.

-   **[Add a Filter with Tooling API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_tooling_api_add_filter.htm)**
    Create a channel and channel member in Tooling API using API version 56.0 or later.
-   **[Add a Filter with Metadata API](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_metadata_api_add_filter.htm)**
    We recommend using Metadata API as part of the application lifecycle management process to develop, test, deploy, and release your apps to production. If you want to create the channel and filter expression, we recommend that you use Tooling API with REST.

## Related Topics

- Add a Filter with Tooling API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_tooling_api_add_filter.htm)
- Add a Filter with Metadata API (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_filter_metadata_api_add_filter.htm)
