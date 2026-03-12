---
title: "GET /api/v1/dataGraph/metadata?entityName={dataGraphName}"
domain: data-cloud
topic: get-apiv1datagraphmetadataentitynamedatagraphname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.648Z
estimatedTokens: 224
keywords: [GET, api, dataGraph, metadata?entityName=, dataGraphName, Request, metadata, single, data, graph, object., Returned, includes, object's, primary, model, related, objects, fields., Syntax]
---

# GET /api/v1/dataGraph/metadata?entityName={dataGraphName}

> Request the metadata for a single
    data
    graph
    object. Returned data includes the object's
    primary
    data
    model
    object,
    related objects, and fields.

# GET /api/v1/dataGraph/metadata?entityName={dataGraphName}

Request the metadata for a single data graph object. Returned data includes the object's primary data model object, related objects, and fields.

## Syntax

HTTP method

GET

Availability

Data Cloud v1.0, Salesforce v51.0

Formats

REST

URI

/api/v1/dataGraph/metadata?entityName={dataGraphName}

## Request Parameters

| Field Name | Field Type | Description |
| --- | --- | --- |
| entityName | string | API name of the data graph for which metadata is being requested. When a data graph is created, the API name is the value set in the DataGraphApiName field. |

## Examples

In this example, metadata for the data graph UnifiedIndividual\_DG is requested. The response returns metadata values for the primary data model object, related objects, and each field included in the data graph.

Request

```

```

Response

```

```

## Code Examples

```
https://{TSE}.360a.salesforce.com/api/v1/dataGraph/metadata?entityName=UnifiedIndividual_DG
```

```
{
  "metadata": [
    {
      "developerName": "UnifiedIndividual_DG",
      "description": "",
      "dataspaceName": "default",
      "primaryObjectName": "UnifiedssotIndividualIr1__dlm",
      "valuesDmoName": "Individual_DG_VALUE__dlm",
      "idDmoName": "Individual_DG_ID__dlm",
      "version": "1",
      "primaryObjectType": "DMO",
      "status": "READY",
      "object": {
        "developerName": "UnifiedssotIndividualIr1__dlm",
        "type": "DMO",
        "memberDmoName": "ssotIndividualIr1_FRAGMENT15__dlm",
        "fields": [
          {
            "developerName": "ssot__Id__c",
            "lookupCol": "false",
            "length": "1",
            "dataType": "STRING",
            "keyCol": "true"
          }
        ],
        "relatedObjects": [
          {
            "developerName": "UnifiedLinkssotIndividualIr1__dlm",
            "type": "DMO",
            "memberDmoName": "LinkssotIndividual_FRAGMENT7__dlm",
            "fields": [
              {
                "developerName": "SourceRecordId__c",
                "lookupCol": "false",
                "length": "1",
                "dataType": "STRING",
                "keyCol": "true"
              },
              {
                "developerName": "UnifiedRecordId__c",
                "lookupCol": "false",
                "length": "1",
                "dataType": "STRING",
                "keyCol": "false"
              }
            ],
            "paths": [
              {
                "fieldName": "UnifiedRecordId__c",
                "parentFieldName": "ssot__Id__c",
                "cardinality": "NTOONE"
              }
            ],
            "relatedObjects": [
              {
                "developerName": "ssot__Individual__dlm",
                "type": "DMO",
                "memberDmoName": "Individual_FRAGMENT32__dlm",
                "fields": [
                  {
                    "developerName": "ssot__FirstName__c",
                    "lookupCol": "false",
                    "length": "1",
                    "dataType": "STRING",
                    "keyCol": "false"
                  },
                  {
                    "developerName": "ssot__Id__c",
                    "lookupCol": "false",
                    "length": "1",
                    "dataType": "STRING",
                    "keyCol": "true"
                  },
                  {
                    "developerName": "ssot__LastName__c",
                    "lookupCol": "false",
                    "length": "1",
                    "dataType": "STRING",
                    "keyCol": "false"
                  }
                ],
                "paths": [
                  {
                    "fieldName": "UnifiedRecordId__c",
                    "parentFieldName": "ssot__Id__c",
                    "cardinality": "NTOONE"
                  },
                  {
                    "fieldName": "ssot__Id__c",
                    "parentFieldName": "SourceRecordId__c",
                    "cardinality": "ONETOONE"
                  }
                ],
                "relatedObjects": [
                  {
                    "developerName": "ssot__SalesOrder__dlm",
                    "type": "DMO",
                    "memberDmoName": "SalesOrder_FRAGMENT16__dlm",
                    "fields": [
                      {
                        "developerName": "ssot__PurchaseOrderDate__c",
                        "lookupCol": "false",
                        "length": "1",
                        "dataType": "DATE_TIME",
                        "keyCol": "false"
                      },
                      {
                        "developerName": "ssot__Id__c",
                        "lookupCol": "false",
                        "length": "1",
                        "dataType": "STRING",
                        "keyCol": "true"
                      },
                      {
                        "developerName": "ssot__SoldToCustomerId__c",
                        "lookupCol": "false",
                        "length": "1",
                        "dataType": "STRING",
                        "keyCol": "false"
                      },
                      {
                        "developerName": "ssot__TotalProductAmount__c",
                        "lookupCol": "false",
                        "length": "1",
                        "dataType": "NUMBER",
                        "keyCol": "false"
                      }
                    ],
                    "paths": [
                      {
                        "fieldName": "UnifiedRecordId__c",
                        "parentFieldName": "ssot__Id__c",
                        "cardinality": "NTOONE"
                      },
                      {
                        "fieldName": "ssot__Id__c",
                        "parentFieldName": "SourceRecordId__c",
                        "cardinality": "ONETOONE"
                      },
                      {
                        "fieldName": "ssot__SoldToCustomerId__c",
                        "parentFieldName": "ssot__Id__c",
                        "cardinality": "NTOONE"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
```
