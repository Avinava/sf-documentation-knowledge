---
title: "Microbatching"
domain: chatterapi
topic: microbatching
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.778Z
estimatedTokens: 328
keywords: [Microbatching, Ingest, records]
---

# Microbatching

> Ingest microbatching records.

# Microbatching

Ingest microbatching records.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentDocumentIds | String[] | List of content document IDs to create content document links between files and records. | Optional | 56.0 |
| groupBy | String | Grouping of records for batch creation. The default behavior groups records by network ID. For example, if you specify account ID, records are grouped by network ID and account ID. You can specify one value, and there isn’t validation of the property. | Optional | 55.0 |
| keyPrefix | String | Object keyPrefix that a specified processType is tied to in the microbatching framework. | Required for GENERIC process type, otherwise optional | 55.0 |
| processType | String | Logical name of the flow in the microbatching framework, for example, LEAD_MS or GENERIC. | Required | 55.0 |
| requestBody | Map<String, Object> | Map of input fields in name value pairs. | Required | 55.0 |

Response body for POST

[Microbatching Ingestion Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_ingestion_output.htm "Microbatching ingestion response.")

## Code Examples

```
/connect/communities/communityId/microbatching
```

```
{
"requestBody":
   {"LastName":"Inc","Description":"Lead for xyz", "Status":"New"},
"processType":"LEAD_MS",
"groupBy":"sampleGroupByValue"
}
```

## Related Topics

- Microbatching Ingestion Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_microbatching_ingestion_output.htm)
