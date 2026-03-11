---
title: "Bulk Record Alerts (GET)"
domain: omnistudio
topic: bulk-record-alerts-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.823Z
keywords: [Bulk, Record, Alerts, GET, Note]
---

# Bulk Record Alerts (GET)

# Bulk Record Alerts (GET)

Retrieve bulk record alerts. Use to fetch bulk record alerts associated with Salesforce objects and parent accounts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

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

[Record Alert Collection Map](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_alert_collection_map.htm "Output representation of the bulk record alerts request.")