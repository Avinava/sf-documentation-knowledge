---
title: "HttpDelete Annotation"
domain: apex-guide
topic: httpdelete-annotation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:50.375Z
estimatedTokens: 78
keywords: [HttpDelete, Annotation, @HttpDelete, level, expose, Apex, REST, resource, HTTP, sent, deletes]
---

> The @HttpDelete annotation is used at the method level
   and enables you to expose an Apex method as a REST resource. This method is called when an HTTP
    DELETE request is sent, and deletes the specified
   resource.

# HttpDelete Annotation

The @HttpDelete annotation is used at the method level and enables you to expose an Apex method as a REST resource. This method is called when an HTTP DELETE request is sent, and deletes the specified resource.

To use this annotation, your Apex method must be defined as global static.
