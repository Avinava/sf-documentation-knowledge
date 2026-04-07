---
title: "GET /interaction/v1/interactions/{id}/audit/{action}"
domain: mc-apis
topic: get-interactionv1interactionsidauditaction
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:17.183Z
estimatedTokens: 1491
keywords: [interaction, interactions, audit, action, Retrieves, log, journey, versions, key, Pass, different, actions, creating, modifying, activating, deactivating, stopping, deleting, **Overview**]
---

> Retrieves an audit log of a journey and its versions by ID or key. Pass in different actions to see history about creating, modifying, activating, deactivating, stopping, and deleting a journey.

# GET /interaction/v1/interactions/{id}/audit/{action}

## **Overview**

Retrieves an audit log of a journey and its versions by ID or key. Pass in different actions to see history about creating, modifying, activating, deactivating, stopping, and deleting a journey.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| id | string | Required | The ID or key of the audit log to retrieve. Required if not using a key. The ID returns the audit log for all versions of the journey, unless a versionNumber is provided. |
| key | string | Required | The key of the audit log to retrieve. Required if not using ID. Prefix the parameter with key:. For example, /interactions/key:{key}. |
| action | string | Required | The actions used to build your audit log. Specify all to return all actions. Use one of these possible values:allcreatemodifypublishunpublishdelete |
| versionNumber | integer |  | The version number of the journey audit log to retrieve |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
GET /interaction/v1/interactions/unique-UUID-provided-by-SFMC/audit/all?versionNumber=2
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Example Response** The response includes a log containing these elements:

-   Page count
-   Page size
-   Count of all actions passed in
-   An item object The item object includes specific information depending on the action passed in. All item objects include these elements for all actions:
-   Customer key
-   Journey ID (or key), name, and description
-   Original definition ID
-   Date and time of the action
-   Name and id of user who performed the action

```js
HTTP/1.1 200
{
     "Page": 1,
     "PageSize": 50,
     "Count": 5,
     "Items": [
        {
            //This log shows the creation date and time for the journey. The log also includes sourceInteraction if a user created the journey as a copy of an existing journey.
            "action": "Create",
            "key": "some-journey-key",
            "versionNumber": 2,
            "id": "####-####-####-####-####",
            "originalDefinitionId": "####-####-####-####-####",
            "name": "Complete journey",
            "description": "This journey contains a trigger, goal and activities",
            "timeStamp": "2015-10-30T11:49:55.99",
            "user": {
                "name": "Test User 1",
                "UserId": 1234
                },
            "executionMode": "Production",
            "sourceInteraction": {
                "id":"####-####-####-####-####",
                "version": 3,
                "key": "My journey"
                }
        },
        {
            //This log shows a record for each modification of the journey.
            "action": "Modify",
            "key": "some-journey-key",
            "versionNumber": 2,
            "id": "####-####-####-####-####",
            "originalDefinitionId": "####-####-####-####-####",
            "name": "Complete journey",
            "description": "This journey contains a trigger, goal and activities",
            "timeStamp": "2015-10-30T11:49:55.99",
            "user": {
                "name": "Test User 1",
                "UserId": 1234
                },
            "executionMode": "Production"
        },
        {
            //This log shows the publish status for the journey, in this case an error.
            "action": "Publish",
            "key": "some-journey-key",
            "versionNumber": 2,
            "id": "####-####-####-####-####",
            "originalDefinitionId": "####-####-####-####-####",
            "name": "Complete journey",
            "description": "This journey contains a trigger, goal and activities",
            "timeStamp": "2015-10-30T11:49:55.99",
            "user": {
                "name": "Test User 2",
                "userId": 5678
                },
            "executionMode": "Production",
            "publishStatus": "Error",
            "PublishRequestId": "####-####-####-####-####",
            "errors": [
                {
                    "ErrorDetail": "An activity must be created and configured before activation can be successful",
                    "ErrorCode": "VALIDATE_GENERAL_EXCEPTION"
                },
                {
                    "ErrorDetail": "An entry event must be configured before activation can be successful",
                    "ErrorCode": "VALIDATE_GENERAL_EXCEPTION"
                }
            ]
        },
        {
            //This log shows the publish status for the journey (in this case, a success).
            "action": "Publish",
            "key": "some-journey-key",
            "versionNumber": 2,
            "id": "####-####-####-####-####",
            "originalDefinitionId": "####-####-####-####-####",
            "name": "Complete journey",
            "description": "This journey contains a trigger, goal and activities",
            "timeStamp": "2015-10-30T11:49:55.99",
            "user": {
                "name": "Test User 2",
                "userId": 5678
                },
            "executionMode": "Production",
            "publishStatus": "PublishCompleted",
            "publishRequestId": "####-####-####-####-####"
        },
        {
            //This log shows the journey ejected 20 contacts when stopped.
            "action": "Stop",
            "key": "some-journey-key",
            "versionNumber": 2,
            "id": "####-####-####-####-####",
            "originalDefinitionId": "####-####-####-####-####",
            "name": "Complete journey",
            "description": "This journey contains a trigger, goal and activities",
            "timeStamp": "2015-10-30T11:49:55.99",
            "user": {
                "name": "Test User 1",
                "userId": 1234
                },
            "ContactsEjected": 20
        }
    ]
}
```

Last Updated: Jun 8, 2021
