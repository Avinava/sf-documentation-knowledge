---
title: "GET /api/v1/insight/metadata"
domain: data-cloud
topic: get-apiv1insightmetadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.535Z
estimatedTokens: 118
keywords: [api, insight, metadata, includes, dimension, measure, part, calculated, Examples, HTTP, Responses]
---

# GET /api/v1/insight/metadata

> The metadata includes the dimension and measure that are part of the calculated
    insight.

# GET /api/v1/insight/metadata

The metadata includes the dimension and measure that are part of the calculated insight.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/insight/metadata

## Examples

Request

```

```

Response

```

```

## HTTP Responses

| Response | Reason |
| --- | --- |
| 200 OK | Callback successfully verified |
| 400 Bad Request | Invalid request |
| 500 Server Error | Internal error |

## Code Examples

```
https://{TSE}.360a.salesforce.com/api/v1/insight/metadata
```

```
{
    "metadata": [
        {
            "name": "runner_ci__cio",
            "displayName": "runner ci",
            "dimensions": [
                {
                    "name": "runner_id__c",
                    "displayName": "runner id",
                    "type": "NUMBER"
                }
            ],
            "measures": [
                {
                    "name": "total_exercises__c",
                    "displayName": "total exercises",
                    "type": "NUMBER",
                    "rollupable": true
                },
                {
                    "name": "total_km__c",
                    "displayName": "total km",
                    "type": "NUMBER",
                    "rollupable": true
                }
            ],
            "relationships": [
                {
                    "fromEntity": "runner__dlm",
                    "toEntity": "runner_ci__cio"
                },
                {
                    "fromEntity": "Exercises__dlm",
                    "toEntity": "runner_ci__cio"
                }
            ],
            "partitionBy": "runner_id__c"
        },
        {
           "name": "Avg_Spends__cio",
           "displayName": "Avg Spends",
           "dimensions": [
              {
                 "name": "Id__c",
                 "displayName": "Id",
                 "type": "STRING"
              },
              {
                 "name": "FirstName__c",
                 "displayName": "First Name",
                 "type": "STRING"
              }
           ],
           "measures": [
              {
                 "name": "Avg_Spend__c",
                 "displayName": "Avg Spend",
                 "type": "NUMBER",
                 "rollupable": true
              }
           ],
           "relationships": [
              {
                 "fromEntity": "ssot__Individual__dlm",
                 "toEntity": "Avg_Spends__cio"
              }
           ],
           "partitionBy": "Id__c"
        }
    ]
}
```
