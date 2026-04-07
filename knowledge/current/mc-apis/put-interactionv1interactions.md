---
title: "PUT /interaction/v1/interactions"
domain: mc-apis
topic: put-interactionv1interactions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:18.391Z
estimatedTokens: 1138
keywords: [PUT, interaction, interactions, Updates, journey, call, resource, assign, API, Integration, Automation, scope, **Overview**]
---

> Updates a journey version. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

# PUT /interaction/v1/interactions

## **Overview**

Updates a journey version. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| key | string | Required | The user-defined Key for the journey to update |
| name | string | Required | The name of this journey |
| workflowApiVersion | number | Required | The Journey Spec version to use for this journey. Possible values: 0.5, 1.0. |
| version | number | Required | The version of this journey |
| id | string |  | The GUID (UUID) to be used while referencing this journey. |
| modifiedDate | string |  | This field must match the current Database value from Marketing Cloud or the request will be rejected. You are not actually updating this field; it is used in mapping to the correct version of this journey |
| description | string |  | A description of this journey |
| goals | array |  | The goal for this particular journey. Expressed as an object of type ContactDecision from the Journey Spec. |
| triggers | array |  | The trigger for this particular journey. Expressed as an object of type ContactEvent from the Journey Spec. |
| activities | array |  | The activities which compose this particular journey. Expressed as objects of types supported by the Journey Spec |

### Usage

**Example Request**

This request updates the journey version specified by the versionNumber Query Parameter.

This example represents the minimum required parameters to update the journey version, as prescribed by the [Journey Spec](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm). To understand how to leverage the full capability of updating journeys via the API, the Journey Spec documentation provides a comprehensive list of all available parameters.

These JSON parameters are always provided by Journey Builder and can never be updated:

-   id
-   lastPublishedDate
-   createdDate
-   modifiedDate, used in the request body, but only for mapping
-   definitionId
-   status

> Although the modifiedDate may not be updated, you are required to pass current value that matches the database record. This prevents simultaneous writes that would overwrite other users' changes.

```
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
PUT /interaction/v1/interactions/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
    "key": "ixn-created-via-the-api",
    "modifiedDate": "2014-08-06T08:11:12",
    "name": "API-Created journey updated",
    "version": 2,
    "description": "This is a journey created via the API created in this account",
    "workflowApiVersion": 1.0
}
```

**Example Successfully Update Journey Response**

```
HTTP/1.1 200
{
    id: "unique-UUID-provided-by-SFMC"
    key: "ixn-created-via-the-api"
    name: "API-Created journey updated"
    lastPublishedDate: "0001-01-01T00:00:00"
    description: "This is a journey created via the API created in this account"
    version: 2
    workflowApiVersion: 1
    createdDate: "2014-08-06T23:27:08.15"
    modifiedDate: "2014-08-06T23:27:08.15"
    triggers: []
    goals: []
    status: "Draft"
    definitionId: "unique-UUID-provided-by-SFMC"
}
```

**Example Error Messages**

```
HTTP/1.1 304 NO CHANGE // when the supplied parameters don't differ from the existing version implementation
{
    message: "No change has been processed, supplied data matches that on the server."
    errorcode: 304
    documentation: ""
}
```
```
HTTP/1.1 404 NOT FOUND // when the journey is not found based on the key provided
{
    message: "Interaction not found."
    errorcode: 30003
    documentation: ""
}
```
```
HTTP/1.1 400 BAD REQUEST // when the request is formed in an anti-pattern to what has been prescribed above
{
    message: "Please validate that your request is properly formed."
    errorcode: 400
    documentation: ""
}
```
```
HTTP/1.1 409 CONFLICT // when the change requested is valid, but the journey is a: running, save, publish, validate or error state
{
    message: "Conflict, this change would cause a current operation on the specified interaction or a running interaction to be changed, which is not permitted"
    errorcode: 409
    documentation: ""
}
```
```
HTTP/1.1 500 SERVER ERROR // when the change was unable to be processed based on a server side error in Journey Builder
{
    message: "There was a problem processing your request, please try again or contact support"
    errorcode: 500
    documentation: ""
}
```

Last Updated: Jun 8, 2021

## Related Topics

- Journey Spec (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
