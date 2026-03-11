---
title: "Actionable List Update Member Count Filter Input"
domain: omnistudio
topic: actionable-list-update-member-count-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:07.992Z
keywords: [Actionable, List, Update, Member, Count, Filter, Input]
---

# Actionable List Update Member Count Filter Input

# Actionable List Update Member Count Filter Input

Actionable List Member Count input for one filter.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | API Name of the field used in the filter. | Required if filters is specified | 59.0 |
| index | String | Integer that represents this filter in the filterLogic. | Required if filters is specified | 59.0 |
| operator | String | The operator used in the filter. Valid values are:EqualsNot equalsLess thanLess or equalGreater thanGreater or equalLike | Required if filters is specified | 59.0 |
| value | String | Value of the field used in the filter. | Required if filters is specified | 59.0 |