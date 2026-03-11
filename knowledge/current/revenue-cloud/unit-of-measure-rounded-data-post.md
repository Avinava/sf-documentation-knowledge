---
title: "Unit of Measure Rounded Data (POST)"
domain: revenue-cloud
topic: unit-of-measure-rounded-data-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:50.349Z
keywords: [Unit, Measure, Rounded, Data, POST]
---

# Unit of Measure Rounded Data (POST)

# Unit of Measure Rounded Data (POST)

Round off and scale decimal data for a specific set of fields.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 63.0 |
| dataRow​Inputs | Data Row Input[] | List of row inputs for rounding the data. | Required | 63.0 |

Response body for POST

[Data Rounding](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_data_rounding_output.htm "Output representation of the data rounding response.")