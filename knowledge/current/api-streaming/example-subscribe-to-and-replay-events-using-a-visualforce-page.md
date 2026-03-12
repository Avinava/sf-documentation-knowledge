---
title: "Example: Subscribe to and Replay Events Using a Visualforce
    Page"
domain: api-streaming
topic: example-subscribe-to-and-replay-events-using-a-visualforce-page
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.209Z
estimatedTokens: 463
keywords: [Subscribe, Replay, Events, Visualforce, sample, app, how, durable, streaming, PushTopic, generic, two, interactive, pages, generate]
---

# Example: Subscribe to and Replay Events Using a Visualforce
    Page

> The Visualforce sample app shows you how to subscribe to durable streaming events for
    PushTopic and generic events. The app contains two interactive Visualforce pages: one for
    PushTopic events and one for generic events. You can generate test events and view them on each
    page. You specify which events are retrieved and displayed by setting replay
    options.

# Example: Subscribe to and Replay Events Using a Visualforce Page

The Visualforce sample app shows you how to subscribe to durable streaming events for PushTopic and generic events. The app contains two interactive Visualforce pages: one for PushTopic events and one for generic events. You can generate test events and view them on each page. You specify which events are retrieved and displayed by setting replay options.

For each Visualforce page, the logic for replaying events is contained within a Visualforce component. The component registers the Salesforce-provided CometD extension and sets replay options.

-   **[Prerequisites](atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_prereqs.htm)**
    Set up permissions that are required to run the durable streaming samples.
-   **[Deploy a Sample Project to Your Org](atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_deploy_project.htm)**
    Use the Salesforce CLI to copy all project components to your org.
-   **[Durable PushTopic Streaming Sample](atlas.en-us.api_streaming.meta/api_streaming/code_sample_combined_pushtopic_intro.htm#code_sample_vfp_pushtopic_intro)**
    The Durable PushTopic Streaming Visualforce sample shows you how to use replay options to subscribe and receive durable PushTopic event notifications.
-   **[Durable Generic Streaming Sample](atlas.en-us.api_streaming.meta/api_streaming/code_sample_combined_generic_intro.htm#code_sample_vfp_generic_intro)**
    The Durable Generic Streaming Visualforce sample shows you how to use replay options to subscribe and receive durable generic event notifications.
-   **[Replay Events Sample: Code Walkthrough](atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_walkthrough.htm)**
    Learn how to register and use the CometD replay extension in JavaScript.

## Related Topics

- Prerequisites (atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_prereqs.htm)
- Deploy a Sample Project to Your Org (atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_deploy_project.htm)
- Durable PushTopic Streaming Sample (atlas.en-us.api_streaming.meta/api_streaming/code_sample_combined_pushtopic_intro.htm)
- Durable Generic Streaming Sample (atlas.en-us.api_streaming.meta/api_streaming/code_sample_combined_generic_intro.htm)
- Replay Events Sample: Code Walkthrough (atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_walkthrough.htm)
