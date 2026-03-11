---
title: "Actionable List Member Count"
domain: omnistudio
topic: actionable-list-member-count
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.569Z
keywords: [Actionable, List, Member, Count]
---

# Actionable List Member Count

# Actionable List Member Count

Update the member count of an actionable list.

Resource

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

Specify either an actionableListId or filters, but not both.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionable​ListId | String | ID of the actionable list to be updated. | Required if no filters | 59.0 |
| filters | Actionable List Update Member Count Filter List Input[] | List of filters to identify the actionable lists to be updated. | Required if no actionable​ListId | 59.0 |

Response body for POST

[Actionable List Update Member Count Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_actionable_list_update_member_count_output.htm "Actionable List Member Count output.")