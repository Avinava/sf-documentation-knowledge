---
title: "Chaining Asynchronous Callouts"
domain: apex-guide
topic: chaining-asynchronous-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.892Z
keywords: [Chaining, Asynchronous, Callouts, Note]
---

# Chaining Asynchronous Callouts

# Chaining Asynchronous Callouts

If the order of the callouts matters, or when a callout is conditional on the response of another callout, you can chain callout requests. Chaining callouts means that the next callout is made only after the response of the previous callout returns. For example, you might need to chain a callout to get warranty extension information after the warranty service response indicates that the warranty expired. You can chain up to three callouts.

The following Visualforce and Apex examples show how to chain one callout to another. The Visualforce page is shown first. The Visualforce page contains a button that invokes the action method invokeInitialRequest in the controller. The Visualforce process is suspended each time a continuation is returned. The Visualforce process resumes after each response is returned and renders each response in the outputPanel component.

```

```

This example show the controller class for the Visualforce page. The invokeInitialRequest method creates the first continuation. The callback method (processInitialResponse) processes the response of the first callout. If this response meets a certain condition, the method chains another callout by returning a second continuation. After the response of the chained continuation is returned, the second callback method (processChainedResponse) is invoked and processes the second response.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The response of a continuation must be retrieved before you create a new continuation and before the Visualforce request is suspended again. You can’t retrieve an old response from an earlier continuation in the chain of continuations.