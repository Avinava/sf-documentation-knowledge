---
title: "Record Alert Action Input"
domain: omnistudio
topic: record-alert-action-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.478Z
keywords: [Record, Alert, Action, Input]
---

# Record Alert Action Input

# Record Alert Action Input

Input representation of the record alert action.

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