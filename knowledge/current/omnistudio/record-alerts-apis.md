---
title: "Record Alerts APIs"
domain: omnistudio
topic: record-alerts-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.330Z
keywords: [Record, Alerts, APIs, Note]
---

# Record Alerts APIs

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