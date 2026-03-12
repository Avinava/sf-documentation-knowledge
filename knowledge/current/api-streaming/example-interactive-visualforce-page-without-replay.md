---
title: "Example: Interactive Visualforce Page without Replay"
domain: api-streaming
topic: example-interactive-visualforce-page-without-replay
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.242Z
estimatedTokens: 577
keywords: [Interactive, Visualforce, Replay, how, implement, Streaming, API, sample, uses, Dojo, library, CometD, subscribe, PushTopic, events]
---

# Example: Interactive Visualforce Page without Replay

> The interactive Visualforce example shows you how to implement Streaming API from a Visualforce page. The
  sample uses the Dojo library and CometD to subscribe to PushTopic events.

# Example: Interactive Visualforce Page without Replay

The interactive Visualforce example shows you how to implement Streaming API from a Visualforce page. The sample uses the Dojo library and CometD to subscribe to PushTopic events.

On the Visualforce page, you enter the name of the PushTopic channel you want to subscribe to and click **Subscribe** to receive notifications on the page. Click **Unsubscribe** to unsubscribe from the channel and stop receiving notifications.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

This sample doesn’t use the replay extension and can’t receive past events. To use a replay option, check out [Example: Subscribe to and Replay Events Using a Visualforce Page](atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm "The Visualforce sample app shows you how to subscribe to durable streaming events for PushTopic and generic events. The app contains two interactive Visualforce pages: one for PushTopic events and one for generic events. You can generate test events and view them on each page. You specify which events are retrieved and displayed by setting replay options.").

-   **[Prerequisites](atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_prereqs.htm)**
    You need access and appropriate permissions to complete the code example.
-   **[Step 1: Create an Object](atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_object.htm)**
    Create an Invoice Statement object from the user interface.
-   **[Step 2: Create a PushTopic](atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_pushtopic.htm)**
    Use the Developer Console to create the PushTopic record that contains a SOQL query. Event notifications are generated for updates that match the query.
-   **[Step 3: Create the Static Resources](atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_static_resources.htm)**

-   **[Step 4: Create a Visualforce Page](atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_VF_page.htm)**

-   **[Step 5: Test the PushTopic Channel](atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_test_pushtopic_channel.htm)**

## Related Topics

- Example: Subscribe to and Replay Events Using a Visualforce Page (atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm)
- Prerequisites (atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_prereqs.htm)
- Step 1: Create an Object (atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_object.htm)
- Step 2: Create a PushTopic (atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_pushtopic.htm)
- Step 3: Create the Static Resources (atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_static_resources.htm)
- Step 4: Create a Visualforce Page (atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_create_VF_page.htm)
- Step 5: Test the PushTopic Channel (atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_test_pushtopic_channel.htm)
