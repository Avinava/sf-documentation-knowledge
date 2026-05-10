---
title: "HttpPatch Annotation"
domain: apex-guide
topic: httppatch-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:50.390Z
estimatedTokens: 77
keywords: [HttpPatch, Annotation, @HttpPatch, level, expose, Apex, REST, resource, HTTP, PATCH, sent, updates]
---

> The @HttpPatch annotation is used at the method level
   and enables you to expose an Apex method as a REST resource. This method is called when an HTTP
    PATCH request is sent, and updates the specified
   resource.

# HttpPatch Annotation

The @HttpPatch annotation is used at the method level and enables you to expose an Apex method as a REST resource. This method is called when an HTTP PATCH request is sent, and updates the specified resource.

To use this annotation, your Apex method must be defined as global static.
