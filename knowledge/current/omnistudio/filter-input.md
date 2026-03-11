---
title: "Filter Input"
domain: omnistudio
topic: filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.311Z
keywords: [Filter, Input]
---

# Filter Input

# Filter Input

Input representation for a filter query to fetch actionable list members.

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | Name of the field used for filtering actionable list members. Specify the field name in relation to its parent, such as Actionablelist.Name | Required | 57.0 |
| operator | String | Operator used for filtering:EqualsLikeNotEquals | Required | 57.0 |
| value | String | Value for filtering actionable list members | Required | 57.0 |