---
title: "Tax Engine Log"
domain: revenue-cloud
topic: tax-engine-log
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:10.029Z
estimatedTokens: 119
keywords: [Tax, Engine, Log, Output, representation, logs, generates]
---

# Tax Engine Log

> Output representation of the logs that the tax engine generates.

# Tax Engine Log

Output representation of the logs that the tax engine generates.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdDate | String | Date when the tax engine creates the log. | Big, 62.0 | 62.0 |
| id | String | ID of the tax engine log record. | Big, 62.0 | 62.0 |
| resultCode | String | Result code associated with the created log. | Big, 62.0 | 62.0 |

## Code Examples

```
{
  "taxEngineLogs": [
    {
      "createdDate": "2022-03-09T10:55:38.000Z",
      "id": "3l1xx00000000PpAAI",
      "resultCode": "Success"
    }
  ]
}
```
