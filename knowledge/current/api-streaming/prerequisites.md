---
title: "Prerequisites"
domain: api-streaming
topic: prerequisites
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.214Z
estimatedTokens: 237
keywords: [Prerequisites, permissions, run, durable, streaming, samples, access, appropriate, code]
---

# Prerequisites

> You need access and appropriate permissions to complete the code example.

# Prerequisites

You need access and appropriate permissions to complete the code example.

-   Java Development Kit 8 or later (see [Java Downloads](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html))
-   Eclipse IDE for Java Developers (get a recent version from [http://www.eclipse.org/downloads/eclipse-packages/](http://www.eclipse.org/downloads/eclipse-packages/)). This example walks you through the steps of building the project with the Eclipse IDE but you can you use your preferred IDE to build the Java client.
-   To run the tool from the command line: Apache Maven (see [https://maven.apache.org/index.html](https://maven.apache.org/index.html "HTML (New Window)"))
-   Access to a Developer Edition org

    To create a Developer Edition org, go to [developer.salesforce.com/signup](https://developer.salesforce.com/signup) and follow the instructions for signing up for a Developer Edition organization.

-   The API Enabled permission must be enabled for your Developer Edition org. This permission is enabled by default, but an admin might have changed it.
-   The Streaming API permission must be enabled in Setup, in the User Interface page. This permission is enabled by default, but an admin might have been changed it.
-   The logged-in user must have Read permission on the PushTopic standard object to receive notifications.
-   The logged-in user must have Create permission on the PushTopic standard object to create and manage PushTopic records.
-   The logged-in user must have Author Apex permission to create a PushTopic from the Developer Console.
