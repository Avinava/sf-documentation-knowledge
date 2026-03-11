---
title: "Making Multiple Asynchronous Callouts"
domain: apex-guide
topic: making-multiple-asynchronous-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.899Z
keywords: [Making, Multiple, Asynchronous, Callouts]
---

# Making Multiple Asynchronous Callouts

# Making Multiple Asynchronous Callouts

To make multiple callouts to a long-running service simultaneously from a Visualforce page, you can add up to three requests to the Continuation instance. An example of when to make simultaneous callouts is when you’re making independent requests to a service, such as getting inventory statistics for two products.

When you’re making multiple callouts in the same continuation, the callout requests run in parallel and suspend the Visualforce request. Only after all callout responses are returned does the Visualforce process resume.

The following Visualforce and Apex examples show how to make two asynchronous callouts simultaneously by using a single continuation. The Visualforce page is shown first. The Visualforce page contains a button that invokes the action method startRequestsInParallel in the controller. When the Visualforce process resumes, the outputPanel component is rendered again. This panel displays the responses of the two asynchronous callouts.

```

```

This example shows the controller class for the Visualforce page. The startRequestsInParallel method adds two requests to the Continuation. After all callout responses are returned, the callback method (processAllResponses) is invoked and processes the responses.

```

```