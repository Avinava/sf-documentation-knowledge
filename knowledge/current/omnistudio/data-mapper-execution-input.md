---
title: "Data Mapper Execution Input"
domain: omnistudio
topic: data-mapper-execution-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.149Z
keywords: [Data, Mapper, Execution, Input]
---

# Data Mapper Execution Input

# Data Mapper Execution Input

Input representation of the execution details of a data mapper.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataMapperInput | Data Mapper Execute Input Data | Details for executing the data mapper. | Required | 64.0 |
| inputType | String | Type of data mapper input. For example, JSON, XML, or custom class. | Required | 64.0 |
| options | Data Mapper Execution Options | Optional parameters to refine the data mapper execution. | Optional | 64.0 |