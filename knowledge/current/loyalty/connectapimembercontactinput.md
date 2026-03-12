---
title: "ConnectApi.MemberContactInput"
domain: loyalty
topic: connectapimembercontactinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.725Z
estimatedTokens: 188
keywords: [ConnectApi.MemberContactInput, Input, representation, loyalty, member, contact]
---

# ConnectApi.MemberContactInput

> Input representation of the loyalty member contact.

# ConnectApi.MemberContactInput

Input representation of the loyalty member contact.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalContact​FieldValues | Map<String, String> | The additional attributes that must be saved in the person account. | Optional | 55.0 |
| allowDuplicate​Records | Boolean | Indicates whether a duplicate record can be created for a member when an existing person account record already exists (true) or not (false). | Optional | 55.0 |
| email | String | The email ID of the contact. | Optional | 55.0 |
| firstName | String | The first name of the contact. | Optional | 55.0 |
| lastName | String | The last name of the contact. | Required | 55.0 |
