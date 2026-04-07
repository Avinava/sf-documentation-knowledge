---
title: "POST /interaction/v1/interactions"
domain: mc-apis
topic: post-interactionv1interactions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:22.996Z
estimatedTokens: 745
keywords: [POST, interaction, interactions, Creates, saves, journey, new, provide, appropriate, Specification, Please, Spec, understand, via, API]
---

# POST /interaction/v1/interactions

> Creates or saves a journey. To create a new journey provide the request body in the appropriate Journey Specification. Please read the Journey Spec page to understand which properties are required to create a journey via the API. The id, key, createdDate, modifiedDate, status and definitionId are as

# POST /interaction/v1/interactions

## **Overview**

Creates or saves a journey. To create a new journey provide the request body in the appropriate [Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm). Please read the Journey Spec page to understand which properties are required to create a journey via the API. The **id**, **key**, **createdDate**, **modifiedDate**, **status** and **definitionId** are assigned by Journey Builder and are never to be passed in as parameters for creating a journey. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| key | string | Required | The customer key as a GUID (UUID) to be used while referencing this journey |
| name | string | Required | The name of this journey |
| description | string |  | A description of this journey |
| workflowApiVersion | number | Required | The Journey Spec version to use for this journey. Possible values: 0.5, 1.0. |
| goals | array |  | The goal for this particular journey. Expressed as an object of type ContactDecision from the Journey Spec. |
| triggers | array |  | The trigger for this particular journey. Expressed as an object of type ContactEvent from the Journey Spec. |
| activities | array |  | The activities which compose this particular journey. Expressed as objects of types supported by the Journey Spec. |

### Usage

**Example Request**

This request creates a journey. This example represents the minimum required parameters to create a journey, as prescribed by the [Journey Spec](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm). These JSON paramters are always provided by Journey Builder and can never be supplied:

-   id
-   lastPublishedDate
-   createdDate
-   modifiedDate
-   definitionId

To understand how to leverage the full capability of creating journeys via the API, the Journey Spec documentation provides a comprehensive list of all available paramters. This enables you to create multiple combinations of entry events, waits, data-binding, activities and outcomes for a journey.

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/interactions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "key": "ixn-created-via-the-api",
    "name": "API-Created journey",
    "workflowApiVersion": 1.0 ,
    "triggers": [],
    "goals": [],
    "activities": []
}
```

**Example Response**

```js
HTTP/1.1 200
{
    id: "unique-UUID-provided-by-SFMC"
    key: "ixn-created-via-the-api"
    name: "API-Created journey"
    lastPublishedDate: "0001-01-01T00:00:00"
    description: ""
    workflowApiVersion: 1
    createdDate: "2014-08-06T23:27:08.15"
    modifiedDate: "2014-08-06T23:27:08.15"
    triggers:[]
    goals:[]
    activities:[]
    status: "Draft"
    definitionId: "unique-UUID-provided-by-SFMC"
}
```

Last Updated: Jun 8, 2021

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
- Journey Spec (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
