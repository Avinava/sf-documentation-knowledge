---
title: "External Record Alerts Bulk Actions (POST)"
domain: omnistudio
topic: external-record-alerts-bulk-actions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.790Z
keywords: [External, Record, Alerts, Bulk, Actions, POST, Note]
---

# External Record Alerts Bulk Actions (POST)

# External Record Alerts Bulk Actions (POST)

Snooze bulk external record alerts for a specified time period or dismiss them.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

You cannot peform multiple actions on a single record alert ID.

Resource

```

```

Resource Examples

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

RecordAlertBulkActionInputRepresentation

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actions | Record Alert Action Input[] | Representation of the record alert actions. | Required | 55.0 |

Response body for POST

[Record Alert Action Collection Map](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_alert_action_collection_map.htm "Output representation of the record alert bulk actions.")