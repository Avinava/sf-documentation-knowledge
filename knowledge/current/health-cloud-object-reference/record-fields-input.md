---
title: "Record Fields Input"
domain: health-cloud-object-reference
topic: record-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.148Z
estimatedTokens: 143
keywords: [Record, Input, representation, generic, account, referral]
---

# Record Fields Input

> Input representation of the request to create a generic object, such
      as an account, or referral details.

# Record Fields Input

Input representation of the request to create a generic object, such as an account, or referral details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | Map<String, Object> | Map of API names and values. | RequiredThis is an optional field for performers and requester. | 59.0 |
| id | String | ID of the object.If you don’t specify an ID, the API creates an object with the provided fields. | RequiredThis is an optional field for performers and requester. | 59.0 |
