---
title: "Person Account Input"
domain: referral-marketing
topic: person-account-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.757Z
estimatedTokens: 193
keywords: [Person, Account, Input, representation, advocate’s]
---

# Person Account Input

> Input representation of a advocate’s person account details.

# Person Account Input

Input representation of a advocate’s person account details.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalPerson​AccountFieldValues | Map<String, String> | Custom fields for a person account in the form of API names and string values. | Optional | 59.0 |
| allowDuplicate​Records | Boolean | Indicates whether to allow creation of a duplicate person account if matching details are found (true) or not (false). The default value is false. | Optional | 59.0 |
| email | String | Email of the advocate. | Required | 59.0 |
| firstName | String | First name of the advocate. | Required | 59.0 |
| lastName | String | Last name of the advocate. | Required | 59.0 |
