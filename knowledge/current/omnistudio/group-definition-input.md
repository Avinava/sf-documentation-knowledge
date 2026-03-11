---
title: "Group Definition Input"
domain: omnistudio
topic: group-definition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.321Z
keywords: [Group, Definition, Input]
---

# Group Definition Input

# Group Definition Input

Input representation of a party relationship group definition.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account​Detail | Map<String, Object> | Account details associated with the party relationship group. | Required | 58.0 |
| external​Member | Member Record Input[] | External member details of the party relationship group. | Optional | 58.0 |
| group​Detail | Map<String, Object> | Party relationship group details, such as group size, group income, address, and associated custom fields. | Required | 58.0 |
| member | Member Record Input[] | Member details of the party relationship group being created. | Required | 58.0 |
| related​Account | Account Relation Input[] | Data of the account that’s related to the party relationship group being created. | Optional | 58.0 |
| related​Group | Account Relation Input[] | Data of the group that’s related to the party relationship group being created. | Optional | 58.0 |