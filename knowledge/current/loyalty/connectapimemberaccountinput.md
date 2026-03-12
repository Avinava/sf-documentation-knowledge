---
title: "ConnectApi.MemberAccountInput"
domain: loyalty
topic: connectapimemberaccountinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.720Z
estimatedTokens: 192
keywords: [ConnectApi.MemberAccountInput, Input, representation, loyalty, member, account]
---

# ConnectApi.MemberAccountInput

> Input representation of the loyalty member account.

# ConnectApi.MemberAccountInput

Input representation of the loyalty member account.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalAccount​FieldValues | Map<String, String> | The additional attribute values that must be saved in the account record. | Optional | 55.0 |
| allowDuplicate​Records | Boolean | Indicates whether a duplicate member record can be created when a record with identical details already exists (true) or not (false). | Optional | 55.0 |
| name | String | The name of the account. | Required | 55.0 |
| phone | String | The phone number associated with the account. | Optional | 55.0 |
| website | String | The website associated with the account. | Optional | 55.0 |
