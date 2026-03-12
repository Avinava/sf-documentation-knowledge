---
title: "Record Alerts APIs"
domain: omnistudio
topic: record-alerts-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.519Z
estimatedTokens: 350
keywords: [Record, Alerts, APIs, Business, give, users, seamless, API, experience]
---

# Record Alerts APIs

> Use the Record Alerts Business APIs to give users a seamless API
      experience for Record Alerts.

# Record Alerts APIs

Use the Record Alerts Business APIs to give users a seamless API experience for Record Alerts.

The Record Alerts API allows you to retrieve a list of active record alerts created on the Salesforce object records. As alerts generate, you can perform an action to snooze the alerts for a specified time or dismiss them.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

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

-   **[REST Reference](atlas.en-us.industries_reference.meta/industries_reference/record_alerts_apis_rest_references.htm)**
    You can access Record Alerts APIs using REST endpoints. These REST APIs follow similar conventions as Connect REST APIs.

## Related Topics

- /recordalerts (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_get_record_alerts.htm)
- /recordalerts/id/${alertId}/actions (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_internal_record_alerts_actions.htm)
- /recordalerts/externalId/${sourceSystemId}/actions (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_external_record_alerts_actions.htm)
- /recordalerts/batch (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_get_bulk_record_alerts.htm)
- /recordalerts/ids/actions (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_internal_bulk_alerts_actions.htm)
- /recordalerts/externalIds/actions (atlas.en-us.industries_reference.meta/industries_reference/connect_resources_external_bulk_alerts_actions.htm)
- REST Reference (atlas.en-us.industries_reference.meta/industries_reference/record_alerts_apis_rest_references.htm)
