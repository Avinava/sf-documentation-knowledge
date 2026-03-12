---
title: "Example: Subscribe to and Replay Events Using a Java Client (EMP
      Connector)"
domain: api-streaming
topic: example-subscribe-to-and-replay-events-using-a-java-client-emp-connector
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.263Z
estimatedTokens: 971
keywords: [Subscribe, Replay, Events, Java, Client, EMP, Connector, sample, uses, library, Enterprise, Messaging, Platform, thin, wrapper]
---

# Example: Subscribe to and Replay Events Using a Java Client (EMP
      Connector)

> The Java sample uses a library called Enterprise Messaging Platform (EMP) Connector.
    EMP Connector is a thin wrapper around the CometD library. It hides the complexity of creating a
    CometD client and subscribing to Streaming API in Java. The example subscribes to a channel,
    receives notifications, and supports replaying events with durable streaming.

# Example: Subscribe to and Replay Events Using a Java Client (EMP Connector)

The Java sample uses a library called Enterprise Messaging Platform (EMP) Connector. EMP Connector is a thin wrapper around the CometD library. It hides the complexity of creating a CometD client and subscribing to Streaming API in Java. The example subscribes to a channel, receives notifications, and supports replaying events with durable streaming.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

#### Important

The EMP Connector sample is deprecated and will be archived in the future. The EMP Connector code is an example only and isn’t intended for production environments. It hasn’t been rigorously tested nor performance tested for throughput and scale.

Are you looking for a code sample for subscribing to platform events and change events? Check out the [Java Quick Start for Pub/Sub API](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/qs-java-quick-start.html) in the Pub/Sub API Guide.

The CometD-based subscription mechanism in EMP Connector can receive any type of Salesforce event. Just pass in the channel name of the desired event. For example, the events that EMP Connector can receive include:

-   Platform events
-   Change Data Capture events
-   PushTopic events (legacy)
-   Generic events (legacy)

EMP Connector is based on Java and uses CometD version 3.1.0. It supports username and password authentication and OAuth bearer token authentication.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

The example requires API version 37.0 or later. For a code example that supports earlier API versions, refer to an earlier version of this documentation.

-   **[Prerequisites](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_prereqs.htm)**
    You need access and appropriate permissions to complete the code example.
-   **[Step 1: Create an Object](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_create_object.htm)**
    Create an Invoice Statement object from the user interface.
-   **[Step 2: Create a PushTopic (Legacy)](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_create_pushtopic.htm)**
    Create a PushTopic in the Developer Console. Event notifications are generated for updates that match the query.
-   **[Step 3: Download and Build the Project](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_download_jars.htm)**
    Before you can run the connector examples, download the Java source files and build the Java project.
-   **[Step 4: Use the Connector with Username and Password Login](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_add_source.htm)**
    Now that you’ve downloaded and built EMP Connector, use it to connect to CometD and subscribe to the PushTopic.
-   **[(Optional) Step 5: Use the Connector with OAuth Bearer Token Login](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_add_source_oauth.htm)**
    You can use the connector with OAuth authentication as an alternative to username and password authentication. This step is optional and requires an OAuth token.
-   **[Learn More About EMP Connector](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_emp_connector.htm)**
    Let’s take a closer look at the components of EMP Connector.

#### See Also

-   [*Platform Events Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro_emp.htm "
    Platform Events Developer Guide
    - HTML (New Window)")

-   [*Change Data Capture Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm "
    Change Data Capture Developer Guide
    - HTML (New Window)")

## Related Topics

- Prerequisites (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_prereqs.htm)
- Step 1: Create an Object (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_create_object.htm)
- Step 2: Create a PushTopic (Legacy) (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_create_pushtopic.htm)
- Step 3: Download and Build the Project (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_download_jars.htm)
- Step 4: Use the Connector with Username and Password Login (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_add_source.htm)
- (Optional) Step 5: Use the Connector with OAuth Bearer Token Login (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_add_source_oauth.htm)
- Learn More About EMP Connector (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_emp_connector.htm)
