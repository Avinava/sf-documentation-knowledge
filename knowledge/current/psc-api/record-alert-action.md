---
title: "Record Alert Action"
domain: psc-api
topic: record-alert-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.171Z
estimatedTokens: 126
keywords: [Record, Alert, Action, Output, representation]
---

# Record Alert Action

> Output representation of the record alert action.

# Record Alert Action

Output representation of the record alert action.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| recordAlert | Record Alert | Record alert on which an action is performed. | Small, 53.0 | 53.0 |
| recordAlertErrors | Record Alert Error[] | Lists any errors returned by the record alert action request. | Small, 55.0 | 55.0 |
| status | String | Specifies the status of the request. | Small, 55.0 | 55.0 |

## Related Topics

- Record Alert (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert.htm)
- Record Alert Error (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert_error.htm)
