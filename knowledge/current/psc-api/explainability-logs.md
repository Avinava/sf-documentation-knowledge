---
title: "Explainability Logs"
domain: psc-api
topic: explainability-logs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.959Z
estimatedTokens: 128
keywords: [Explainability, Logs, Output, representation, action]
---

# Explainability Logs

> Output representation of the list of explainability action
    logs.

# Explainability Logs

Output representation of the list of explainability action logs.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionLogs | Explainability Log Detail[] | The list of explainability logs that matches the search criteria. | Small, 56.0 | 56.0 |
| queryMore | String | A string that can be passed to the next call to fetch the next batch of explainability log records. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "actionLogs": [
    {
      "actionContextCode": "001x0000005SdzIAAS",
      "actionLog": "{This is a sample action log data.}",
      "applicationLogDate": "Mon Aug 01 10:29:35 GMT 2022",
      "applicationSubtype": "ASD1",
      "applicationType": "0",
      "name": "EAD1",
      "processType": "BPT1"
    }
  ],
  "queryMore": " "
}
```

## Related Topics

- Explainability Log Detail (atlas.en-us.psc_api.meta/psc_api/connect_responses_explainability_log_detail.htm)
