---
title: "Actionable List Update Member Count Filter List Input"
domain: omnistudio
topic: actionable-list-update-member-count-filter-list-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.995Z
keywords: [Actionable, List, Update, Member, Count, Filter, Input]
---

# Actionable List Update Member Count Filter List Input

# Actionable List Update Member Count Filter List Input

Actionable List Member Count input for filters.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditions | Actionable List Update Member Count Filter Input[] | List criteria in the form fieldName, operator, value, with an index to identify the filter in the filterLogic. | Required if filters is specified | 59.0 |
| filterLogic | String | Filter indexes with AND and OR logic to determine the overall outcome. | Required if filters is specified | 59.0 |
| querySize | Integer | Number of records to be returned, between 200 and 2000. The default is 2000. | Optional | 59.0 |