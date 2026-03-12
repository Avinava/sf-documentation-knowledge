---
title: "Program Application Output"
domain: eu-developer-guide
topic: program-application-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.014Z
estimatedTokens: 126
keywords: [Program, Application, Output, representation]
---

# Program Application Output

> Output representation of an application request to a
    Program.

# Program Application Output

Output representation of an application request to a Program.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applicationId | String | Tracking number for an application. | Small, 58.0 | 58.0 |
| message | String | Response message. | Small, 58.0 | 58.0 |
| success | Boolean | Indicates if the application is successfully created (true) or not (false). | Small, 58.0 | 58.0 |

## Code Examples

```
{
  "success": true, 
  "message": "Your application has been submittted successfully",
  "applicationId": "IA-0000000456"
}
```
