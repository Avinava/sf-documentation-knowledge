---
title: "Context Attributes Input"
domain: omnistudio
topic: context-attributes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.103Z
keywords: [Context, Attributes, Input]
---

# Context Attributes Input

# Context Attributes Input

Input representation of context attribute.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextAttributeId | String | ID of the attribute. | Required | 59.0 |
| dataType | String | Data type of the attribute. | Required | 59.0 |
| domainSet | String | Comma separated node names referenced by this attribute. | Optional | 59.0 |
| fieldType | String | Field type of the attribute. | Required | 59.0 |
| isKey | Boolean | Specifies if it used for transposable feature (true) or not (false). | Optional | 59.0 |
| isValue | Boolean | Specifies if it used for transposable feature (true) or not (false). | Optional | 59.0 |
| name | String | Name of the attribute. | Required | 59.0 |
| tags | Context Tag Input[] | List of tags for the attribute. | Optional | 59.0 |