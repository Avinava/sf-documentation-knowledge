---
title: "GET /interaction/v1/rest"
domain: mc-apis
topic: get-interactionv1rest
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:23.395Z
estimatedTokens: 2063
keywords: [interaction, rest, Retrieves, discovery, document, collection, journey, resources, call, resource, assign, API, Integration, Automation, Interactions]
---

# GET /interaction/v1/rest

> Retrieves the discovery document for the collection of journey resources. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

# GET /interaction/v1/rest

## **Overview**

Retrieves the discovery document for the collection of journey resources. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

### Usage

**Example Request**

This request retrieves the Journey API discovery document. This document allows developers to quickly identify all methods available for the Journey service.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/rest
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response**

```js
HTTP/1.1 200

{
    "methods": {
        "discovery": {
            "path": "rest",
            "httpMethod": "get",
            "description": "Returns discovery document",
            "parameters": {}
        },
        "postInteraction": {
            "path": "interactions",
            "httpMethod": "post",
            "description": "Create or save a journey",
            "parameters": {}
        },
        "updateInteraction": {
            "path": "interactions",
            "httpMethod": "put",
            "description": "Update a journey version",
            "parameters": {}
        },
        "updateInteractionByKey": {
            "path": "interactions/key:{key}",
            "httpMethod": "put",
            "description": "Update a journey version",
            "parameters": {}
        },
        "updateInteractionById": {
            "path": "interactions/{id}",
            "httpMethod": "put",
            "description": "Update a journey version",
            "parameters": {}
        },
        "publishInteractionById": {
            "path": "interactions/publishAsync/{id}",
            "httpMethod": "post",
            "description": "Publish a journey version asynchronously",
            "parameters": {}
        },
        "publishInteractionByKey": {
            "path": "interactions/publishAsync/key:{key}",
            "httpMethod": "post",
            "description": "Publish a journey version asynchronously",
            "parameters": {}
        },
        "publishStatus": {
            "path": "interactions/publishStatus/{id}",
            "httpMethod": "get",
            "description": "Check the status of a publication",
            "parameters": {}
        },
        "stop": {
            "path": "interactions/stop/{id}",
            "httpMethod": "post",
            "description": "Stops a running journey.",
            "parameters": {}
        },
        "stopByKey": {
            "path": "interactions/stop/key:{key}",
            "httpMethod": "post",
            "description": "Stops a running journey.",
            "parameters": {}
        },
        "getGoalStatistics": {
            "path": "goalstatistics/{id}",
            "httpMethod": "get",
            "description": "Retrieve goal statistics for a journey",
            "parameters": {
                "id": "String id of the journey"
            }
        },
        "postGoalStatistics": {
            "path": "goalstatistics/clear/{id}",
            "httpMethod": "post",
            "description": "Clear goal statistics for a journey",
            "parameters": {
                "id": "String id of the journey"
            }
        },
        "getInteraction": {
            "path": "interactions/{id}",
            "httpMethod": "get",
            "description": "Retrieve a journey.",
            "parameters": {}
        },
        "deleteInteraction": {
            "path": "interactions/{id}",
            "httpMethod": "delete",
            "description": "Delete a journey.",
            "parameters": {}
        },
        "deleteInteractionByKey": {
            "path": "interactions/key:{key}",
            "httpMethod": "delete",
            "description": "Delete a journey.",
            "parameters": {}
        },
        "getInteractionCollection": {
            "path": "interactions",
            "httpMethod": "get",
            "description": "Retrieve a collection of journeys.",
            "parameters": {}
        },
        "getWaitStatistics": {
            "path": "waitstatistics/{id}",
            "httpMethod": "get",
            "description": "Retrieve wait activity counts for a journey",
            "parameters": {
                "id": "String id of the journey"
            }
        },
        "getJourneyMap": {
            "path": "map",
            "httpMethod": "get",
            "description": "Get a Journey Map.",
            "parameters": {}
        },
        "createUpdateJourneyMap": {
            "path": "map",
            "httpMethod": "post",
            "description": "Create/update a Journey Map.",
            "parameters": {}
        },
        "searchTraceEvents": {
            "path": "interactions/traceevents/search",
            "httpMethod": "post",
            "description": "Search for trace events stored in ElasticSearch",
            "parameters": {}
        },
        "getTriggerStatistics": {
            "path": "triggerstats/{eventDefinitionID}",
            "httpMethod": "get",
            "description": "Retrieve trigger statistics",
            "parameters": {
                "eventDefinitionID": "Event definition Id"
            }
        },
        "createTriggerTest": {
            "path": "interactions/triggerTest/{eventDefinitionId}",
            "httpMethod": "post",
            "description": "Create a trigger test",
            "parameters": {}
        },
        "updateTriggerTest": {
            "path": "interactions/triggerTest/{eventDefinitionId}",
            "httpMethod": "put",
            "description": "Update a trigger test",
            "parameters": {}
        },
        "deleteTriggerTest": {
            "path": "interactions/triggerTest/{eventDefinitionId}",
            "httpMethod": "delete",
            "description": "Delete a trigger test",
            "parameters": {}
        },
        "postEventDefinition": {
            "path": "eventDefinitions",
            "httpMethod": "post",
            "description": "Create an event definition",
            "parameters": {}
        },
        "updateEventDefinitionById": {
            "path": "eventDefinitions/{id}",
            "httpMethod": "put",
            "description": "Update an event definition by ID",
            "parameters": {}
        },
        "updateEventDefinitionByKey": {
            "path": "eventDefinitions/key:{key}",
            "httpMethod": "put",
            "description": "Update an event definition by key",
            "parameters": {}
        },
        "getEventDefinitionByKey": {
            "path": "eventDefinitions/key:{key}",
            "httpMethod": "get",
            "description": "Get an event definition by key",
            "parameters": {}
        },
        "getEventDefinitionById": {
            "path": "eventDefinitions/{id}",
            "httpMethod": "get",
            "description": "Get an event definition by id",
            "parameters": {}
        },
        "getEventDefinitionCollection": {
            "path": "eventDefinitions",
            "httpMethod": "get",
            "description": "Retrieve a collection of  event definitions.",
            "parameters": {}
        },
        "deleteEventDefinitionById": {
            "path": "eventDefinitions/{id}",
            "httpMethod": "delete",
            "description": "Delete an event definition by id",
            "parameters": {}
        },
        "deleteEventDefinitionByKey": {
            "path": "eventDefinitions/key:{key}",
            "httpMethod": "delete",
            "description": "Delete an event definition by key",
            "parameters": {}
        },
        "postInteractionsEvents": {
            "path": "events",
            "httpMethod": "post",
            "description": "Post an event to journeys",
            "parameters": {}
        },
        "getHistory": {
            "path": "history",
            "httpMethod": "get",
            "description": "Retrieve a collection of history",
            "parameters": {}
        }
    }
}
```

If successful, the API returns a 200 OK response. If unsuccessful, the API returns a 400 with more details on the error.

Last Updated: Jun 8, 2021
