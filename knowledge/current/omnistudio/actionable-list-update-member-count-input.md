---
title: "Actionable List Update Member Count Input"
domain: omnistudio
topic: actionable-list-update-member-count-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.997Z
keywords: [Actionable, List, Update, Member, Count, Input]
---

# Actionable List Update Member Count Input

# Actionable List Update Member Count Input

Actionable List Member Count input.

JSON example

```

```

Properties

Specify either an actionableListId or filters, but not both.

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| actionable​ListId | String | ID of the actionable list to be updated. | Required if no filters | 59.0 |
| filters | Actionable List Update Member Count Filter List Input[] | List of filters to identify the actionable lists to be updated. | Required if no actionable​ListId | 59.0 |