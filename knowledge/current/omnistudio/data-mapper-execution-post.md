---
title: "Data Mapper Execution (POST)"
domain: omnistudio
topic: data-mapper-execution-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.977Z
estimatedTokens: 299
keywords: [Data, Mapper, Execution, POST, Execute, Apex, classes, specifying, along, additional, inputs, options]
---

# Data Mapper Execution (POST)

> Execute a data mapper from Apex classes by specifying the name of the data mapper along
    with additional inputs and options.

# Data Mapper Execution (POST)

Execute a data mapper from Apex classes by specifying the name of the data mapper along with additional inputs and options.

Resource

```

```

Resource example

```

```

Available version

64.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | Name of the data mapper. | Required | 64.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataMapperInput | Data Mapper Execute Input Data | Details for executing the data mapper. | Required | 64.0 |
| inputType | String | Type of data mapper input. For example, JSON, XML, or custom class. | Required | 64.0 |
| options | Data Mapper Execution Options | Optional parameters to refine the data mapper execution. | Optional | 64.0 |

Response body for POST

[Data Mapper Execution Details](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_data_mapper_execution_output.htm "Output representation of the execution details of a data mapper.")

## Code Examples

```apex
/connect/omni-global/data-mapper/execute/name
```

```apex
https://yourInstance.salesforce.com/services/data/v66.0/connect/omni-global/data-mapper/execute/Get Account Details
```

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
- Data Mapper Execution
              Details (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_data_mapper_execution_output.htm)
