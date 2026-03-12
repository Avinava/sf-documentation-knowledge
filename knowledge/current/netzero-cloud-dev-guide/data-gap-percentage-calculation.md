---
title: "Data Gap Percentage Calculation"
domain: netzero-cloud-dev-guide
topic: data-gap-percentage-calculation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.940Z
estimatedTokens: 322
keywords: [Data, Gap, Percentage, Calculation, Calculate, record, whenever, emission, factors]
---

# Data Gap Percentage Calculation

> Calculate a record whenever you update data, such as emission factors.

# Data Gap Percentage Calculation

Calculate a record whenever you update data, such as emission factors.

Special Access Rules

Manage Data Gaps setting should be enabled in the Salesforce Organization.

Resource

/services/data/vXX.X/connect/sustainability/dgf/compute-datagap/sObjectParam/{sObjectParam}

-   {sObjectParam}: The sObjectParam is a path parameter representing the name of the sObject (Salesforce Object) such as StnryAssetEnvrSrc

Resource Example

https://yourInstance.salesforce.com/services/data/vXX.X/connect/sustainability/dgf/compute-datagap/sObjectParam/{sObjectParam}

Available Version

64.0

HTTP Method

POST

JSON Example

```

```

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | String | Specifies the reason for data gap percentage computation such as FuelConsumption. | Required | 64.0 |
| usageType | String | Specifies the usage category or purpose for the data such as ESG (Environmental, Social, and Governance). | Required | 64.0 |

Response

[Data Gap Percentage Calculation Output](atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_connect_response_datagap_percent_calc.htm "Output representation of Data Gap Percentage Calculation.")

## Code Examples

```
{
  "type": "string",
  "usageType": "string"
}
```

## Related Topics

- Data Gap Percentage Calculation Output (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/netzero_connect_response_datagap_percent_calc.htm)
