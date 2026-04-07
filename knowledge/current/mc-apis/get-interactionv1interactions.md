---
title: "GET /interaction/v1/interactions"
domain: mc-apis
topic: get-interactionv1interactions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.049Z
estimatedTokens: 2742
keywords: [interaction, interactions, Retrieves, collection, journeys, journey, resources, embedded, items, sort, order, paging, minimize, size, time]
---

# GET /interaction/v1/interactions

> Retrieves a collection of all journeys. The journey collection resources are embedded in the items property of the response body. Use both a sort order and paging to minimize the response size and response time. To call this resource, assign your API Integration the Automation | Interactions | Read 

# GET /interaction/v1/interactions

## **Overview**

Retrieves a collection of all journeys. The journey collection resources are embedded in the **items** property of the response body. Use both a sort order and paging to minimize the response size and response time. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| status | string |  | A status description upon which to filter journeys. Can be one of: Draft, Published, ScheduledToPublish, Stopped, Unpublished, Deleted. The default value is blank, which returns all statuses. ScheduledToSend, Sent, and Stopped are unique to single-send journeys. A single send journey can be 'Cancelled' via the UI, but the API status for this is 'Stopped.' |
| versionNumber | number |  | Version number of the journey to retrieve. The default value is published version or latest available version number which meets other search criteria. |
| specificApiVersionNumber | number |  | Version number of the workflowApiVersion upon which to filter journeys. The default value is 1. |
| mostRecentVersionOnly | boolean |  | A flag to indicate whether to fetch only the most recent version of matching journeys. The default value is true. |
| definitionType | enum |  | Type of definition to retrieve. Valid values include: transactional (retrieves all transactional send definitions). |
| nameOrDescription | string |  | A search string inside the journey's name or description properties upon which to match for filtering. |
| extras | string |  | A list of additional data to fetch. Available values are: all, activities, outcome and stats. The default value is blank, which returns all extras. |
| $orderBy | string |  | Specify how to order the journeys. Valid ordering columns are: ModifiedDate (default), Name, Performance. Valid values are: DESC, ASC. The default value is 'ModifiedDate DESC'. |
| tag | string |  | Specify a single tag to filter results to only include journeys associated with that tag. |
| $page | number |  | The number of pages to retrieve. The default value is 1. |
| $pageSize | number |  | The number of results to return on a page. The default and maximum is 50. |
| Name | Type |  | Description |
| --- | --- | --- | --- |
| key | string |  | The user-defined key for a specific journey to retrieve |
| id | string |  | The GUID (UUID) for a specific journey to retrieve. The ID returns all versions of that journey. |

### Usage

**Example Request 1**

The following request retrieves all journeys and includes activities "extras" (up to 50 per page).

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions?$page=2&$pageSize=2&extras=activities
Content-Type: application/json
```

**Example Response 1**

```
HTTP/1.1 200
{
  "count": 10,
  "page": 2,
  "pageSize": 2,
  "links": {},
  "items": [
    {
      "id": "unique-UUID-provided-by-SFMC",
      "key": "a-key-that-is-unique-for-MID",
      "name": "5 days gone by",
      "lastPublishedDate": "0001-01-01T00:00:00",
      "description": "",
      "version": 1,
      "workflowApiVersion": 1,
      "createdDate": "2015-08-17T10:21:38.98",
      "modifiedDate": "2015-08-17T10:22:22.01",
      "activities": [
        {
          "id": "unique-UUID-provided-by-SFMC",
          "key": "WAIT-2",
          "name": "",
          "description": "",
          "type": "WAIT",
          "arguments": {},
          "configurationArguments": {
            "waitDuration": 1,
            "waitUnit": "DAYS"
          },
          "metaData": {
            "waitType": "duration"
          },
          "schema": {
            "arguments": {
              "endDate": {
                "dataType": "Date",
                "isNullable": false,
                "direction": "Out",
                "readOnly": false,
                "access": "Hidden"
              },
              "waitDefinitionId": {
                "dataType": "Text",
                "isNullable": false,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "waitForEventId": {
                "dataType": "Text",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "executionMode": {
                "dataType": "Text",
                "isNullable": false,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "startActivityKey": {
                "dataType": "Text",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "waitQueueId": {
                "dataType": "LongNumber",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              }
            }
          }
        },
        {
          "id": "unique-UUID-provided-by-SFMC",
          "key": "EMAILV2-1",
          "name": "",
          "description": "",
          "type": "EMAILV2",
          "arguments": {},
          "configurationArguments": {},
          "metaData": {},
          "schema": {
            "arguments": {
              "emailSubjectDataBound": {
                "dataType": "Text",
                "isNullable": true,
                "direction": "In",
                "readOnly": true,
                "access": "Hidden"
              },
              "contactId": {
                "dataType": "Number",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "contactKey": {
                "dataType": "Text",
                "isNullable": false,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "emailAddress": {
                "dataType": "Text",
                "isNullable": false,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "sourceCustomObjectId": {
                "dataType": "Text",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "sourceCustomObjectKey": {
                "dataType": "LongNumber",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "fieldType": {
                "dataType": "Text",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "eventData": {
                "dataType": "Text",
                "isNullable": true,
                "direction": "In",
                "readOnly": false,
                "access": "Hidden"
              },
              "customObjectKey": {
                "dataType": "LongNumber",
                "isNullable": true,
                "direction": "In",
                "readOnly": true,
                "access": "Hidden"
              }
            }
          }
        }
      ],
      "triggers": [],
      "goals": [],
      "tags": [
          {"name": "Fun Run"},
          {"name": "5K"}
      ],
      "stats": {
        "currentPopulation": 0,
        "cumulativePopulation": 0,
        "metGoal": 0,
        "goalPerformance": 0
      },
      "entryMode": "SingleEntryAcrossAllVersions",
      "defaults": {
        "email": [
          ""
        ]
      },
      "executionMode": "Production",
      "status": "Draft",
      "definitionId": "unique-UUID-provided-by-SFMC"
    }
  ]
}
```

**Example Request 2**

The following request retrieves all journeys and includes outcome "extras" (up to 50 per page).

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions?$page=2&$pageSize=2&extras=outcome
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response 2**

```
HTTP/1.1 200
{
  "count": 10,
  "page": 2,
  "pageSize": 2,
  "links": {},
  "items": [
    {
      "id": "unique-UUID-provided-by-SFMC",
      "key": "a-key-that-is-unique-for-MID",
      "name": "Welcome journey",
      "lastPublishedDate": "0001-01-01T00:00:00",
      "description": "",
      "version": 0,
      "workflowApiVersion": 1,
      "createdDate": "2014-08-07T12:24:43.537",
      "modifiedDate": "2015-03-23T10:30:26.29",
      "goals": [
        {
          "id": "unique-UUID-provided-by-SFMC",
          "key": "GOAL",
          "name": "GOAL",
          "description": "to go to the web storefront.",
          "type": "ContactDecision",
          "outcomes": [],
          "arguments": {},
          "configurationArguments": {
            "criteria": "<FilterDefinition Source='SubscriberAttribute'><ConditionSet Operator='AND' ConditionSetName='Grouping'><Condition ID='cbc0db2e-9a1d-e411-9805-78e3b50b4f00' isParam='false' Operator='Contains' operatorTemplate='undefined' operatorEditable='1' valueEditable='1' conditionValid='1'><Value><![CDATA[5]]></Value></Condition></ConditionSet></FilterDefinition>",
            "schemaVersionId": 69
          },
          "metaData": {
            "isExitCriteria": false,
            "conversionUnit": "percentage",
            "conversionValue": "50",
            "eventDefinitionId": "unique-UUID-provided-by-SFMC",
            "eventDefinitionKey": "CONTACT-EVENT-600890d9-ada9-fc77-34e8-7125ca74d4f8",
            "configurationDescription": "[Email Demographics: myNTO_Balance Contains 5]"
          },
          "schema": {
            "arguments": {
              "conditionOutcome": {
                "dataType": "Boolean",
                "isNullable": false,
                "direction": "Out",
                "readOnly": false,
                "access": "Hidden"
              },
              "filterResult": {
                "dataType": "Boolean",
                "isNullable": false,
                "direction": "In",
                "readOnly": true,
                "access": "Hidden"
              }
            }
          }
        }
      ],
      "stats": {
        "currentPopulation": 0,
        "cumulativePopulation": 0,
        "metGoal": 0,
        "goalPerformance": 0
      },
      "entryMode": "SingleEntryAcrossAllVersions",
      "defaults": {
        "email": [
          ""
        ]
      },
      "executionMode": "Production",
      "status": "Draft",
      "definitionId": "unique-UUID-provided-by-SFMC"
    }
  ]
}
```

Last Updated: Jun 8, 2021
