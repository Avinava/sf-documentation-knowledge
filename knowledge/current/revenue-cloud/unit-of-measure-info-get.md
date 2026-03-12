---
title: "Unit of Measure Info (GET)"
domain: revenue-cloud
topic: unit-of-measure-info-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.984Z
estimatedTokens: 234
keywords: [Unit, Measure, Info, specific, records]
---

# Unit of Measure Info (GET)

> Get details about the unit of measure for a specific set of
      records.

# Unit of Measure Info (GET)

Get details about the unit of measure for a specific set of records.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

GET

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlationId | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 63.0 |
| ids | String | IDs of the unit of measure records. | Optional | 63.0 |

Response body for GET

[Bulk Unit Of Measure Info](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_bulk_unit_of_measure_info_output.htm "Output representation of the details of the unit of measure records along with error details.")

## Code Examples

```
/connect/pcm/unit-of-measure/info
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/pcm/unit-of-measure/info
```

## Related Topics

- Bulk Unit Of Measure
              Info (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_bulk_unit_of_measure_info_output.htm)
