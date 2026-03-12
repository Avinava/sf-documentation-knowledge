---
title: "Program Application Input"
domain: chatterapi
topic: program-application-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.548Z
estimatedTokens: 168
keywords: [Program, Application, Input, representation]
---

# Program Application Input

> Input representation of an application to a program.

# Program Application Input

Input representation of an application to a program.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| accountId | String | A valid ID of an account. | Required | 58.0 |
| applicationItems | Program Application Item Input[] | A list of application line items associated with the program. | Required | 58.0 |
| description | String | Description of the application. | Optional | 58.0 |
| files | Program Application File Input[] | A list of ContentDocument IDs. | Optional | 58.0 |
| programId | String | A valid ID of a program. | Required | 58.0 |

## Code Examples

```
{
  "programId": "11Wxx0000004GkaEAE",
  "accountId": "001xx000003GlBHAA0",
  "description": "Individual Application created for Program EV Charger Rebate",
  "applicationItems": {
    "records": [
      {
        "programProductId": "11mxx0000004PROAA2"
      }
    ]
  },
  "files": {
    "records": [
      {
        "contentDocumentId": "069xx0000004DWWAA2"
      }
    ]
  }
}
```

## Related Topics

- Program Application Item Input[] (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_program_application_item_input.htm)
- Program Application File Input[] (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_program_application_file_input.htm)
