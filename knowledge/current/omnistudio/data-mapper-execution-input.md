---
title: "Data Mapper Execution Input"
domain: omnistudio
topic: data-mapper-execution-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:48.210Z
estimatedTokens: 145
keywords: [Data, Mapper, Execution, Input, representation, execution, details, data, mapper.]
---

# Data Mapper Execution Input

> Input representation of the execution details of a data mapper.

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

## Code Examples

```
{
  "dataMapperInput": {
    "inputs": [
      {
        "Name": "Get Account Details"
      }
    ]
  },
  "inputType": "JSON",
  "options": {
    "ignoreCache": false
  }
}
```

## Related Topics

- Data
                        Mapper Execute Input Data (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_data_mapper_execute_input_data.htm)
- Data
                        Mapper Execution Options (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_data_mapper_execution_options.htm)
