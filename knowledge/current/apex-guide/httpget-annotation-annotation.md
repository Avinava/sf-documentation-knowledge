---
title: "HttpGet Annotation Annotation"
domain: apex-guide
topic: httpget-annotation-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.471Z
estimatedTokens: 120
keywords: [HttpGet, Annotation, @HttpGet, annotation, used, level, enables, expose, Apex, REST, resource., called, HTTP, GET, request, sent, specified]
---

# HttpGet Annotation Annotation

> The @HttpGet annotation is used at the method level and
   enables you to expose an Apex method as a REST resource. This method is called when an HTTP
    GET request is sent, and returns the specified
   resource.

# HttpGet Annotation Annotation

The @HttpGet annotation is used at the method level and enables you to expose an Apex method as a REST resource. This method is called when an HTTP GET request is sent, and returns the specified resource.

These are some considerations when using this annotation:

-   To use this annotation, your Apex method must be defined as global static.
-   Methods annotated with @HttpGet are also called if the HTTP request uses the HEAD request method.
