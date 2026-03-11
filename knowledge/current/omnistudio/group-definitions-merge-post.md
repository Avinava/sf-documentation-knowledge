---
title: "Group Definitions Merge (POST)"
domain: omnistudio
topic: group-definitions-merge-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.885Z
keywords: [Group, Definitions, Merge, POST]
---

# Group Definitions Merge (POST)

# Group Definitions Merge (POST)

Merge the details, members, member relationships, and relationships of a party relationship group.

Resource

```

```

Resource example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

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

Response body for POST

[Group Definition](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_group_output.htm "Output representation of a party relationship group definition.")