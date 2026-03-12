---
title: "Data Mapper Execution Details"
domain: omnistudio
topic: data-mapper-execution-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.676Z
estimatedTokens: 174
keywords: [Data, Mapper, Execution, Output, representation]
---

# Data Mapper Execution Details

> Output representation of the execution details of a data mapper.

# Data Mapper Execution Details

Output representation of the execution details of a data mapper.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | Error message if the execution fails. | Small, 64.0 | 64.0 |
| response | Data Mapper Execution Response [] | List of responses corresponding to the custom inputs that are provided during the data mapper execution. | Small, 64.0 | 64.0 |
| status | String | Execution status of the data mapper. Valid values are:Error—Data mapper execution has failed due to an error.Success—Data mapper execution is successful. | Small, 64.0 | 64.0 |

## Code Examples

```
{
  "response": [
    {
      "error": "Specify a Data Mapper name",
      "response": [
        {
          "status": false
        }
      ],
      "responseType": "JSON"
    }
  ],
  "status": "Success"
}
```

## Related Topics

- Data Mapper Execution Response (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_data_mapper_execution_response_output.htm)
