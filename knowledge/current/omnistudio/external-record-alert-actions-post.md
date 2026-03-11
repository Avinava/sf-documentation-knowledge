---
title: "External Record Alert Actions (POST)"
domain: omnistudio
topic: external-record-alert-actions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.794Z
keywords: [External, Record, Alert, Actions, POST]
---

# External Record Alert Actions (POST)

# External Record Alert Actions (POST)

Snooze external record alerts that are from an external source system for a specified time period or dismiss them.

Resource

```

```

Resource Examples

```

```

Available version

54.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

Root XML tag

RecordAlertActionInput

JSON example

Dismiss a record alert:

```

```

Snooze a record alert:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionName | String | The action to perform on a record alert.Possible values are:Dismiss—The record alert notification doesn’t appear again.Snooze—The record alert notification reappears after the specified time period. | Required | 54.0 |
| actionParameters | Record Alert Action Parameter Input[] | Represents the parameter specified for the record alert action. | Optional | 54.0 |

Response body for POST

[Record Alert](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_record_alert.htm "Output representation of the details of a record alert.")