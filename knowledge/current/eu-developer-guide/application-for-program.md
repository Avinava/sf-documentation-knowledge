---
title: "Application for Program"
domain: eu-developer-guide
topic: application-for-program
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.007Z
estimatedTokens: 297
keywords: [Application, Program]
---

# Application for Program

> Create an application for a program.

# Application for Program

Create an application for a program.

Resource

```

```

Example URI

```

```

Available version

58.0

HTTP methods

POST

Request body for POST

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

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applicationDetails | Object |  | Required | 58.0 |

Response body for POST

[Program Application Output](atlas.en-us.eu_developer_guide.meta/eu_developer_guide/connect_responses_program_application_output.htm "Output representation of an application request to a Program.")

## Code Examples

```
/connect/eu-program/applications
```

```
https://yourInstance.salesforce.com/services/data/66.0/connect/eu-program/applications
```

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

- Program Application Item Input[] (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/connect_requests_program_application_item_input.htm)
- Program Application File Input[] (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/connect_requests_program_application_file_input.htm)
- Program Application Output (atlas.en-us.eu_developer_guide.meta/eu_developer_guide/connect_responses_program_application_output.htm)
