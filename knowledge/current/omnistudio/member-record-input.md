---
title: "Member Record Input"
domain: omnistudio
topic: member-record-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.368Z
keywords: [Member, Record, Input]
---

# Member Record Input

# Member Record Input

Input representation of the member records of a party relationship group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| acrId | String | ID of the Account Contact relationship. | The acrId property is required if an account ID is specified when defining a party relationship group. | 58.0 |
| contactId | String | ID of the Contact. | Required | 58.0 |
| customFields | Map<String, Object> | Custom fields associated with a party relationship group member. | Optional | 58.0 |
| dataRollupCategory | String | Category of the data roll-up summary field. | Optional | 58.0 |
| direct | Boolean | Indicates whether the member relationship is a direct relationship (true) or not (false). | Optional | 58.0 |
| endDate | Date | Date when the member relationship ends. | Optional | 58.0 |
| relations | Relationships Input | Details of the member record relationship. | Optional | 58.0 |
| roles | String | Role of the member in the party relationship group. For example, a decision maker role or a caregiver role. | Required | 58.0 |
| startDate | Date | Date when the member relationship starts. | Optional | 58.0 |