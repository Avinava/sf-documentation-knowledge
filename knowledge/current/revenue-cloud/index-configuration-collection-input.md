---
title: "Index Configuration Collection Input"
domain: revenue-cloud
topic: index-configuration-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.154Z
keywords: [Index, Configuration, Collection, Input]
---

# Index Configuration Collection Input

# Index Configuration Collection Input

Input representation of the collection of index configurations.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 62.0 |
| index​Configurations | Index Configuration Input[] | List of index configurations. | Required | 62.0 |