---
title: "Get Picklist Values Action"
domain: financial-services-cloud-object-reference
topic: get-picklist-values-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:27.880Z
estimatedTokens: 214
keywords: [Picklist, Action, REST, HTTP, Inputs, Outputs]
---

# Get Picklist Values Action

> Get picklist values for the specified fields of an object.

# Get Picklist Values Action

Get picklist values for the specified fields of an object.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getPicklistValues

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| inputData | TypestringDescriptionRequired.JSON structure that contains objects and field names for which the picklist values must be retrieved. You can also specify a record type ID. |

## Outputs

| Output | Details |
| --- | --- |
| outputData | TypestringDescriptionPicklist values for the specified objects and fields. |

## Example

POST

This sample request is for the Get Picklist Values action.

```

```

This sample response is for the Get Picklist Values action.

```

```

## Code Examples

```
{
  "inputs": {
    "inputData": [
      {
        "objectName": "FinancialPlan",
        "recordTypeId": "",
        "fields": [
          "Status",
          "Type",
          "InvalidField",
          "CustomStatus__c"
        ]
      },
      {
        "objectName": "ApplicationTest__c",
        "recordTypeId": "012xx00000068A8AAI",
        "fields": [
          "status__c"
        ]
      },
      {
        "objectName": "ApplicationTest__c",
        "fields": [
          "status__c"
        ]
      }
    ]
  }
}
```

```
{
  "actionName": "createIntegrationPlan",
  "isSuccess": true,
  "outputValues": {
    "outputData": [
      {
        "objectName": "FinancialPlan",
        "fieldMetadata": [
          {
            "fieldName": "Status",
            "picklistValues": [
              {
                "apiName": "Completed",
                "label": "Completed"
              },
              {
                "apiName": "InProgress",
                "label": "In Progress"
              },
              {
                "apiName": "NotStarted",
                "label": "Not Started"
              }
            ]
          },
          {
            "fieldName": "Type",
            "picklistValues": [
              {
                "apiName": "Education",
                "label": "Education"
              },
              {
                "apiName": "Other",
                "label": "Other"
              },
              {
                "apiName": "Retirement",
                "label": "Retirement"
              }
            ]
          },
          {
            "fieldName": "InvalidField",
            "errorMessage": "Unable to retrieve picklist values. Please verify object and field name are valid. Error ID: 1375398684-2405 (467112832)."
          },
          {
            "fieldName": "CustomStatus__c",
            "picklistValues": [
              {
                "apiName": "Inprogress",
                "label": "Inprogress"
              },
              {
                "apiName": "Pending",
                "label": "Pending"
              }
            ]
          }
        ]
      },
      {
        "objectName": "ApplicationTest__c",
        "fieldMetadata": [
          {
            "fieldName": "status__c",
            "picklistValues": [
              {
                "apiName": "completed",
                "label": "completed"
              },
              {
                "apiName": "Inprogress",
                "label": "Inprogress"
              },
              {
                "apiName": "processing",
                "label": "processing"
              }
            ]
          }
        ]
      },
      {
        "objectName": "ApplicationTest__c",
        "fieldMetadata": [
          {
            "fieldName": "status__c",
            "picklistValues": [
              {
                "apiName": "completed",
                "label": "completed"
              },
              {
                "apiName": "Inprogress",
                "label": "Inprogress"
              },
              {
                "apiName": "pending",
                "label": "pending"
              },
              {
                "apiName": "processing",
                "label": "processing"
              }
            ]
          }
        ]
      }
    ],
    "hasErrors": true
  },
  "version": 1
}
```
