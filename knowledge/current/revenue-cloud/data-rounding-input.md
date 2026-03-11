---
title: "Data Rounding Input"
domain: revenue-cloud
topic: data-rounding-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T14:37:50.125Z
keywords: [Data, Rounding, Input]
---

# Data Rounding Input

# Data Rounding Input

Input representation of the details of the data rounding input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 63.0 |
| dataRow​Inputs | Data Row Input[] | List of row inputs for rounding the data. | Required | 63.0 |