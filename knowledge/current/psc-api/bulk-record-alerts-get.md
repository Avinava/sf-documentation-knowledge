---
title: "Bulk Record Alerts (GET)"
domain: psc-api
topic: bulk-record-alerts-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:30.485Z
estimatedTokens: 353
keywords: [Bulk, Record, Alerts, Retrieve]
---

# Bulk Record Alerts (GET)

> Retrieve bulk record alerts.

# Bulk Record Alerts (GET)

Retrieve bulk record alerts. Use to fetch bulk record alerts associated with Salesforce objects and parent accounts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=psc_api)

#### Note

You cannot use a combination of whatIds and parentIds to fetch record alerts in bulk.

Resource

```

```

Resource Examples

```

```

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parentIds | String | The IDs of the related parent records on which record alerts are created.For the supported polymorphic objects, see RecordAlert. | OptionalNoteThis parameter is required when whatIds aren't provided. | 55.0 |
| whatIds | String | The Salesforce object record IDs on which record alerts are created.NoteFor internal alerts, whatId can only be polymorphic objects, including all custom objects. For external alerts, whatId can be any valid Salesforce ID. For the supported polymorphic objects, see RecordAlert. | OptionalNoteThis parameter is required when parentIds aren't provided. | 55.0 |

Response body for GET

[Record Alert Collection Map](atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert_collection_map.htm "Output representation of the bulk record alerts request.")

## Code Examples

```
/recordalerts/batch
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/recordalerts/batch?
whatIds=03R0000026YJ8uIAG,001R0000026YJ8uIAG,00Dx00000004X2F
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/recordalerts/batch?
parentIds=03R0000026YJ8uIAG,001R0000026YJ8uIAG,00Dx00000004X2F
```

## Related Topics

- Record Alert Collection Map (atlas.en-us.psc_api.meta/psc_api/connect_responses_record_alert_collection_map.htm)
