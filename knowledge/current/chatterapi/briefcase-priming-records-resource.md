---
title: "Briefcase Priming Records Resource"
domain: chatterapi
topic: briefcase-priming-records-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.662Z
estimatedTokens: 417
keywords: [Briefcase, Priming, Records, Resource, offline]
---

# Briefcase Priming Records Resource

> Get a list of records related to an offline briefcase.

# Briefcase Priming Records Resource

Get a list of records related to an offline briefcase.

A client app only gets records from briefcases that are assigned to it.

To ensure a reasonable response time, the priming API limits the single request processing time and the number of records returned in a single response.

Briefcase rules are processed sequentially. When either the processing time or limit is reached, the processing stops, and a response is returned to the client that includes the records for the rules processed. If the non-null relayToken in the response indicates that not all the rules were processed, then the client must continue making requests until the relayToken returns a null value.

Resource

```

```

Available since release

54.0

HTTP methods

GET

Request parameters for GET

| Parameter | Return Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changedAfter​Timestamp | String | ISO 8601 date string. When present, filters the data for priming by records that were created or modified after the specified time.This parameter applies only to top-level briefcase rules, and not to related rules.You can include either changedAfterTimestamp or relayToken in a request, but not both. | Optional | 55.0 |
| relayToken | String | When present, identifies the relay point to start processing from.You can include either changedAfterTimestamp or relayToken in a request, but not both. | Optional | 54.0 |

Response body for GET

[Priming Record Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_priming_record_collection.htm "Collection of records for offline priming.")

## Code Examples

```
/connect/briefcase/priming-records
```

## Related Topics

- Priming Record Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_priming_record_collection.htm)
