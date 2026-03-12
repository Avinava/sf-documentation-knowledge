---
title: "Message(severity, summary, detail, id)"
domain: pages
topic: messageseverity-summary-detail-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.505Z
estimatedTokens: 168
keywords: [Message, severity, summary, detail, Creates, new, instance, ApexPages.Message, component]
---

# Message(severity, summary, detail, id)

> Creates a new instance of the ApexPages.Message class using the specified severity, summary,
detail, and component ID.

# Message(severity, summary, detail, id)

Creates a new instance of the ApexPages.Message class using the specified severity, summary, detail, and component ID.

## Signature

public Message(ApexPages.Severity severity, String summary, String detail, String id)

## Parameters

severity

Type: [ApexPages.Severity](atlas.en-us.pages.meta/pages/apex_pages_message.htm#apexpages_severity_enum)

The severity of a Visualforce message.

summary

Type: String

The summary Visualforce message.

detail

Type: String

The detailed Visualforce message.

id

Type: String

The ID of the Visualforce component to associate with the message, for example, a form field with an error.

## Related Topics

- ApexPages.Severity (atlas.en-us.pages.meta/pages/apex_pages_message.htm)
