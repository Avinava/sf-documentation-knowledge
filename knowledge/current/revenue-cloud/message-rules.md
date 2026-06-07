---
title: "Message Rules"
domain: revenue-cloud
topic: message-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:40.046Z
estimatedTokens: 151
keywords: [Message]
---

> Output representation of the details of the message rules.

# Message Rules

Output representation of the details of the message rules.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| message | String | List of message strings to display to the user. | Small, 67.0 | 67.0 |
| messageType | String | Severity level of the message. Valid values are:INFOWARNINGERROR | Small, 67.0 | 67.0 |
| primaryRecordId | String | ID of the primary sales transaction item record. | Small, 67.0 | 67.0 |
| relatedRecordId | String | ID of the related record. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "message": "Constraints is running for laptop",
  "messageType": "Info",
  "primaryRecordId": "0QLxx0000004CU0GAM",
  "relatedRecordId": "0QLxx0000004CU1GAM"
}
```
