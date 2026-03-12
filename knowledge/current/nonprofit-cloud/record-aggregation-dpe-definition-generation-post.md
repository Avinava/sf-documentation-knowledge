---
title: "Record Aggregation DPE Definition Generation (POST)"
domain: nonprofit-cloud
topic: record-aggregation-dpe-definition-generation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:00.850Z
estimatedTokens: 439
keywords: [Record, Aggregation, DPE, Definition, Generation, POST, Generate, Data, Processing, Engine, definitions, configured, Run, aggregate, records]
---

# Record Aggregation DPE Definition Generation (POST)

> Generate a Data Processing Engine (DPE) definition for the record
      aggregation definitions that you have configured. Run the DPE definition to aggregate
      records.

# Record Aggregation DPE Definition Generation (POST)

Generate a Data Processing Engine (DPE) definition for the record aggregation definitions that you have configured. Run the DPE definition to aggregate records.

Generate a DPE definition for a record aggregation definition or for all the record aggregation definitions that you have configured.

After you generate a DPE definition, if you configure a new record aggregation definition, generate a DPE definition for all your record aggregation definitions. If you generate a DPE definition for only the new record aggregation definition, the request overwrites the definition that you generated before and doesn’t append to it.

The DPE definition is generated subject to the Data Processing Engine limits.

Resource

```

```

Resource example

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| definitionId | String | ID of a record aggregation definition component.To generate a Data Processing Engine definition for all the active record aggregation definition components, specify ALL. | Required | 59.0 |

Response body for POST

[Data Processing Engine Definition List Output](atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_dpe_generation_output.htm "Output representation of a Record Aggregation Data Processing Engine definition generation request.")

#### See Also

-   [*Salesforce Help*: Data Processing Engine Limits](https://help.salesforce.com/s/articleView?id=ind.dpe_limits.htm&type=5&language=en_US "Salesforce Help: Data Processing Engine Limits - HTML (New Window)")

## Code Examples

```
/connect/record-aggregation/dpe-generation
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/record-aggregation/dpe-generation
```

```
{   
   "definitionId": "ALL"
}
```

## Related Topics

- Data Processing Engine Definition List Output (atlas.en-us.nonprofit_cloud.meta/nonprofit_cloud/connect_responses_dpe_generation_output.htm)
