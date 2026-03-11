---
title: "Group Merge Input"
domain: omnistudio
topic: group-merge-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.329Z
keywords: [Group, Merge, Input]
---

# Group Merge Input

# Group Merge Input

Input representation of a merge party relationship group request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| account​Detail | Account Input | Details of the merged account. | Required | 58.0 |
| external​Member | Member Record Input | Details of the external members of a party relationship group. | Optional | 58.0 |
| group​Detail | Group Input | Details of the party relationship group, such as category, address, group size, group income, and custom fields. | Required | 58.0 |
| member | Member Record Input | Details of the party relationship group members. | Required | 58.0 |
| primary​Account​Id | String | ID of the primary account. | Required | 58.0 |
| related​Account | Account Relation Input | Details of the related account. | Optional | 58.0 |
| related​Group | Account Relation Input | Details of the party relationship group. | Optional | 58.0 |
| secondary​Account​Id | String | ID of the secondary account. | Required | 58.0 |
| tasks | String[] | List of the records to create tasks for. For example, a task to assign benefits from the source party relationship group to the destination party relationship group. | Optional | 58.0 |