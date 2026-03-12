---
title: "CPQ Message"
domain: revenue-cloud
topic: cpq-message
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.333Z
estimatedTokens: 139
keywords: [CPQ, Message, Output, representation, API, messages]
---

# CPQ Message

> Output representation of the API messages.

# CPQ Message

Output representation of the API messages.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | Code specifying the type of message. Valid value is CartValidationError. | Small, 60.0 | 60.0 |
| detail | String | Required details other than the message text. | Small, 60.0 | 60.0 |
| message | String | Text of the API message. | Small, 60.0 | 60.0 |
| severity | String | Severity of the API message. Valid values are:ErrorInfoWarning | Small, 60.0 | 60.0 |
