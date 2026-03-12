---
title: "Code Examples"
domain: api-streaming
topic: code-examples
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T09:34:00.168Z
estimatedTokens: 532
keywords: [Code, Examples, Check, streaming, events, Java, Aura, components, Visualforce]
---

# Code Examples

> Check out code examples for streaming events in Java, Aura components, and
  Visualforce.

# Code Examples

Check out code examples for streaming events in Java, Aura components, and Visualforce.

-   **[Example: Subscribe to and Replay Events Using a Java Client (EMP Connector)](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_client_intro.htm)**
    The Java sample uses a library called Enterprise Messaging Platform (EMP) Connector. EMP Connector is a thin wrapper around the CometD library. It hides the complexity of creating a CometD client and subscribing to Streaming API in Java. The example subscribes to a channel, receives notifications, and supports replaying events with durable streaming.
-   **[Example: Subscribe to and Replay Events Using a Lightning Component](atlas.en-us.api_streaming.meta/api_streaming/code_sample_lightning_cmp.htm)**
    Subscribe to event streaming channels with the empApi component in your Lightning web component or Aura component. The empApi component provides access to methods for subscribing to a streaming channel and listening to event messages.
-   **[Example: Subscribe to and Replay Events Using a Visualforce Page](atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm)**
    The Visualforce sample app shows you how to subscribe to durable streaming events for PushTopic and generic events. The app contains two interactive Visualforce pages: one for PushTopic events and one for generic events. You can generate test events and view them on each page. You specify which events are retrieved and displayed by setting replay options.
-   **[Example: Interactive Visualforce Page without Replay](atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_intro.htm)**
    The interactive Visualforce example shows you how to implement Streaming API from a Visualforce page. The sample uses the Dojo library and CometD to subscribe to PushTopic events.
-   **[Example: Authentication](atlas.en-us.api_streaming.meta/api_streaming/code_sample_authentication_intro.htm)**
    You can set up a simple authentication scheme for developer testing. For production systems, use robust authorization, such as OAuth 2.0.

## Related Topics

- Example: Subscribe to and Replay Events Using a Java Client (EMP Connector) (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_client_intro.htm)
- Example: Subscribe to and Replay Events Using a Lightning Component (atlas.en-us.api_streaming.meta/api_streaming/code_sample_lightning_cmp.htm)
- Example: Subscribe to and Replay Events Using a Visualforce Page (atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm)
- Example: Interactive Visualforce Page without Replay (atlas.en-us.api_streaming.meta/api_streaming/code_sample_interactive_vfp_intro.htm)
- Example: Authentication (atlas.en-us.api_streaming.meta/api_streaming/code_sample_authentication_intro.htm)
