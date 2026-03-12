---
title: "Link Program Member Partner Input"
domain: loyalty
topic: link-program-member-partner-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.908Z
estimatedTokens: 117
keywords: [Link, Program, Member, Partner, Input]
---

# Link Program Member Partner Input

> Input details to link a program member and partner.

# Link Program Member Partner Input

Input details to link a program member and partner.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalAttributes | Object | Attributes of the member that must be saved in the linkage record. | Optional | 66.0 |
| externalId | String | External ID of the loyalty program member associated with the partner. | Optional | 66.0 |

## Code Examples

```
{
  "externalId": "U10001",
  "additionalAttributes": {
    "Card_Type__c": "Green Card"
  }
```
