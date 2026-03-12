---
title: "Record Alerts APIs"
domain: psc-api
topic: record-alerts-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.619Z
estimatedTokens: 340
keywords: [Record, Alerts, APIs, Business, give, users, seamless, API, experience]
---

# Record Alerts APIs

> Use the Record Alerts Business APIs to give users a seamless API
      experience for Record Alerts.

# Record Alerts APIs

Use the Record Alerts Business APIs to give users a seamless API experience for Record Alerts.

The Record Alerts API allows you to retrieve a list of active record alerts created on the Salesforce object records. As alerts generate, you can perform an action to snooze the alerts for a specified time or dismiss them.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

The Record Alert system doesn’t support sending of SMS, email, or push based alerts to users.

Available resources are:

| Resource | Description |
| --- | --- |
| /recordalerts | Retrieve a list of active record alerts. |
| /recordalerts/id/${alertId}/actions | Dismiss or snooze an internal record alert. |
| /recordalerts/externalId/${sourceSystemId}/actions | Dismiss or snooze an external record alert. |
| /recordalerts/batch | Retrieve bulk record alerts. |
| /recordalerts/ids/actions | Snooze bulk internal record alerts for a specified time period or dismiss them. |
| /recordalerts/externalIds/actions | Snooze bulk external record alerts for a specified time period or dismiss them. |

-   **[REST Reference](atlas.en-us.psc_api.meta/psc_api/record_alerts_apis_rest_references.htm)**
    You can access Record Alerts APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.

## Related Topics

- /recordalerts (atlas.en-us.psc_api.meta/psc_api/connect_resources_get_record_alerts.htm)
- /recordalerts/id/${alertId}/actions (atlas.en-us.psc_api.meta/psc_api/connect_resources_internal_record_alerts_actions.htm)
- /recordalerts/externalId/${sourceSystemId}/actions (atlas.en-us.psc_api.meta/psc_api/connect_resources_external_record_alerts_actions.htm)
- /recordalerts/batch (atlas.en-us.psc_api.meta/psc_api/connect_resources_get_bulk_record_alerts.htm)
- /recordalerts/ids/actions (atlas.en-us.psc_api.meta/psc_api/connect_resources_internal_bulk_alerts_actions.htm)
- /recordalerts/externalIds/actions (atlas.en-us.psc_api.meta/psc_api/connect_resources_external_bulk_alerts_actions.htm)
- REST Reference (atlas.en-us.psc_api.meta/psc_api/record_alerts_apis_rest_references.htm)
