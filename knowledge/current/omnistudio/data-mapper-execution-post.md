---
title: "Data Mapper Execution (POST)"
domain: omnistudio
topic: data-mapper-execution-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.721Z
keywords: [Data, Mapper, Execution, POST]
---

# Data Mapper Execution (POST)

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