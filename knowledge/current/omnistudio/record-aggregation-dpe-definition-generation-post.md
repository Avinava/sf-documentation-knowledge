---
title: "Record Aggregation DPE Definition Generation (POST)"
domain: omnistudio
topic: record-aggregation-dpe-definition-generation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.778Z
keywords: [Record, Aggregation, DPE, Definition, Generation, POST, See]
---

# Record Aggregation DPE Definition Generation (POST)

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

[Data Processing Engine Definition List Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_dpe_generation_output.htm "Output representation of a Record Aggregation Data Processing Engine definition generation request.")

#### See Also

-   [*Salesforce Help*: Data Processing Engine Limits](https://help.salesforce.com/s/articleView?id=ind.dpe_limits.htm&type=5&language=en_US "Salesforce Help: Data Processing Engine Limits - HTML (New Window)")