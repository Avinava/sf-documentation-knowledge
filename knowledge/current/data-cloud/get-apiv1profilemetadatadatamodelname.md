---
title: "GET /api/v1/profile/metadata/{dataModelName}"
domain: data-cloud
topic: get-apiv1profilemetadatadatamodelname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.392Z
estimatedTokens: 237
keywords: [api, profile, metadata, dataModelName, data, model, includes, indexes, lookup, Examples, HTTP, Responses]
---

# GET /api/v1/profile/metadata/{dataModelName}

> Returns the metadata for the data model object. Metadata includes the list of fields,
    data types, and indexes available for lookup.

# GET /api/v1/profile/metadata/{dataModelName}

Returns the metadata for the data model object. Metadata includes the list of fields, data types, and indexes available for lookup.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/profile/metadata/{dataModelName}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataModelName | string | Required. Data model object API name. Example: UnifiedIndividual__dlm |

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
| 403 Forbidden | Failed to pass authorization. |
| 404 Not Found | Incorrect callback ID, verification key, or both. |
| 422 Unprocessable Entity | Attribute name used in fields/filter parameter doesn’t exist. |
| 500 Server Error | Internal error |

## Code Examples

```
https://{TSE}.360a.salesforce.com/api/v1/profile/metadata/{dataModelName}
```

```
{
  "metadata": [
    { 
      "indexes": [
        { 
          "fields": [
            {
              "name": "FirstName__c",
              "type": "STRING"
            }
          ]
        }
      ],
      "name": "Individual__dlm",
      "category": "Profile",
      "displayName" : "Individual",
      "fields": [
        { 
          "name": "BirthDate__c",
          "displayName": "Birth Date",
          "type": "DATE" 
        },
        {
          "name": "FirstName__c",
          "displayName" : "First Name",
          "type": "STRING" 
        }
      ],
      "relationships" : [
        {
          "fromEntity" : "ContactPointEmail__dlm",
          "toEntity" : "Individual__dlm",
          "fromEntityAttribute" : "PartyId__c",
          "toEntityAttribute" : "Id__c",
          "cardinality" : "NTOONE"
        }
      ],
      "primaryKeys" : [
        { 
          "name" : "Id__c", 
          "displayName" : "Individual Id",
          "indexOrder" : "1"
        }
      ]
    }
  ]
}
```
