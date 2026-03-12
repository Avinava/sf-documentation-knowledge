---
title: "Retrieve Metadata"
domain: data-cloud
topic: retrieve-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.339Z
estimatedTokens: 423
keywords: [Retrieve, Metadata, Data, Cloud, API, includes, entities, including, Calculated, Insights, Engagement, Profile, their, relationships, objects]
---

# Retrieve Metadata

> Data Cloud Metadata API response includes metadata about all entities,
    including Calculated Insights, Engagement, Profile, and other entities, and their relationships
    to other objects. For Data Lake Objects (DLOs) and Data Model Objects (DMOs), the API response
    also includes information about key qualifier fields. For each DLO field and DMO field, the API
    response includes the name of the associated key qualifier field.

# Retrieve Metadata

Data Cloud Metadata API response includes metadata about all entities, including Calculated Insights, Engagement, Profile, and other entities, and their relationships to other objects. For Data Lake Objects (DLOs) and Data Model Objects (DMOs), the API response also includes information about key qualifier fields. For each DLO field and DMO field, the API response includes the name of the associated key qualifier field.

## GET /api/v1/metadata

Returns the metadata for Calculated Insights, Engagement, Profile, and other objects.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce API version 51.0 and later

Formats

REST

URI

/api/v1/metadata/

## Request Parameters

| Field Name | Description |
| --- | --- |
| entityType | Field TypestringDescriptionThe requested metadata entity type. By default, this parameter includes all of the available types. Acceptable values: DataLakeObject, DataModelObject, and CalculatedInsight |
| entityCategory | Field TypestringDescriptionThe requested metadata entity category. By default, this parameter includes all of the available categories. It isn’t applicable for Calculated Insight entities. Acceptable values: Profile, Engagement, and Related |
| entityName | Field TypestringDescriptionThe name of the requested metadata entity. By default, this parameter includes all of the available categories and an exhaustive list of entities. Example: UnifiedIndividual__dlm |

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
https://{TSE}.360a.salesforce.com/api/v1/metadata/
```

```
{
  "metadata": [
    {
      "fields": [
        {
          "name": "ssot__BirthDate__c",
          "displayName": "Birth Date",
          "type": "DATE_TIME"
        },
        {
          "name": "ssot__LastName__c",
          "displayName": "Last Name",
          "type": "STRING"
        },
        {
          "name": "KQ_Id__c",
          "displayName": "Key Qualifier Individual Id",
          "type": "STRING"
        },
        {
          "name": "ssot__Id__c",
          "displayName": "Individual Id",
          "type": "STRING",
          "keyQualifier": "KQ_Id__c"
        },
        {
          "name": "ssot__DataSourceObjectId__c",
          "displayName": "Data Source Object",
          "type": "STRING"
        },
        {
          "name": "ssot__YearlyIncome__c",
          "displayName": "Yearly Income",
          "type": "NUMBER"
        },
        {
          "name": "ssot__FirstName__c",
          "displayName": "First Name",
          "type": "STRING"
        }
      ],
      "indexes": [],
      "category": "Profile",
      "name": "ssot__Individual__dlm",
      "displayName": "Individual",
      "relationships": [
        {
          "fromEntity": "ssot__Individual__dlm",
          "toEntity": "IndividualIdentityLink__dlm",
          "fromEntityAttribute": "ssot__Id__c",
          "toEntityAttribute": "SourceRecordId__c",
          "cardinality": "ONETOONE"
        },
        {
          "fromEntity": "ssot__ContactPointPhone__dlm",
          "toEntity": "ssot__Individual__dlm",
          "fromEntityAttribute": "ssot__PartyId__c",
          "toEntityAttribute": "ssot__Id__c",
          "cardinality": "NTOONE"
        }
      ],
      "primaryKeys": [
        {
          "name": "ssot__Id__c",
          "displayName": "Individual Id",
          "indexOrder": "1"
        }
      ]
    },
    {
      "fields": [
        {
          "name": "ssot__DataSourceId__c",
          "displayName": "Data Source",
          "type": "STRING"
        },
        {
          "name": "ssot__DataSourceObjectId__c",
          "displayName": "Data Source Object",
          "type": "STRING"
        },
        {
          "name": "KQ_Id__c",
          "displayName": "Key Qualifier Party Id",
          "type": "STRING"
        },
        {
          "name": "ssot__Id__c",
          "displayName": "Party Identification Id",
          "type": "STRING",
          "keyQualifier": "KQ_Id__c"
        }
      ],
      "indexes": [],
      "category": "Related",
      "name": "ssot__PartyIdentification__dlm",
      "displayName": "Party Identification",
      "relationships": [],
      "primaryKeys": [
        {
          "name": "ssot__Id__c",
          "displayName": "Party Identification Id",
          "indexOrder": "1"
        }
      ]
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
