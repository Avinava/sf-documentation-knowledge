---
title: "POST /interaction/v1/eventDefinitions"
domain: mc-apis
topic: post-interactionv1eventdefinitions
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.951Z
estimatedTokens: 1204
keywords: [POST, interaction, eventDefinitions, Creates, event, definition, schema, key, resource, uses, firing, send, appropriate, journey, Typically, marketers, Builder, instead, **Overview**]
---

> Creates an event definition (name and data schema for an event) and defines an event definition key. The resource uses this key when firing an event to send it to the appropriate journey. Typically, marketers create the event definition in the Journey Builder UI. Use this resource instead if you are

# POST /interaction/v1/eventDefinitions

## **Overview**

Creates an event definition (name and data schema for an event) and defines an event definition key. The resource uses this key when firing an event to send it to the appropriate journey. Typically, marketers create the event definition in the Journey Builder UI. Use this resource instead if you are using a custom application for Journey Builder functionality. To call this resource, assign your API Integration the Automation | Interactions | Read scope.

| Name | Type |  | Description |
| --- | --- | --- | --- |
| type | string | Required | Event represents the most generic type of Event Definition. Other possible values include ContactEvent, DateEvent, or RestEvent. |
| name | string | Required | A name for your Event Definition that identifies the event in Marketing Cloud |
| description | string |  | Description of Event Definition |
| mode | string |  | You can run Event Definitions in Production (default) or Test mode. |
| eventDefinitionKey | string | Required | Unique Id for an Event Definition in Marketing Cloud. Don't include special characters. |
| sourceApplicationExtensionId | string |  | A link to the application extension that defines the configuration screens for this type. Journey Builder uses this ID to filter shared entry sources. For example, for the Event Definition to be visible in the Existing Entry sources panel in the UI, this field needs to be populated. To obtain this value, perform a GET eventDefinition on similar events in Journey Builder. |
| iconUrl | string |  | URL to an icon displayed in Event Administration and the Journey Builder Canvas that identifies an Event Definition |
| isVisibleInPicker | boolean |  | Indicates whether the Event Picker shows the Event Definition to users when configuring a journey. To see your Event Definition in Journey Builder, use true. |
| category | string |  | Broad category of the event type. The default value is event. |
| arguments | object |  | Contains filter criteria for the Event Definition. Only required for types other than event. |
| arguments.criteria | string |  | When the API call defines a filter template, use this parameter as a template when a user chooses and configures the Event Definition. If you are not defining an additional filter for the Event Definition, leave this empty. |
| configuration | object |  | Optional configuration data for the event. Only required for types other than event. |
| metaData | object |  | Optional data describing the event and its configuration. Only required for types other than event. |
| dataExtensionId | string | Required | The ID for the data extension associated with the event. Events fired from the API write to this data extension. Required only when not providing a schema. |
| dataExtensionName | string |  | The read-only name of the data extension associated with the event. POST and PUT methods ignore this field. |
| schema | object | Required | Schema information for an event. The call uses this information to create a data extension associated with the Event Definition. Only required when not providing a dataExtensionId value. See Event Definition Schema for additional information. |
| sendableCustomObjectField | string |  | Defines the subscriber key or email address within a data extension. Required when defining a schema. |
| sendableSubscriberField | string |  | Indicates type of sendable subscriber field. The default value is SubscriberKey. Required when defining a schema. |
| schedule | string |  | Creates an automation run daily according to the defined schedule. The call automatically adds a Fire Event activity to the automation. This automation fires events from the data extension defined as part of the Event Definition. See Firing an Event Using Automation Studio for additional information. |

### Usage

**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST /interaction/v1/eventDefinitions
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
        "type": "Event",
        "name": "New event definition via API",
        "description": "",
        "mode": "Production",
        "eventDefinitionKey": "NeweventviaAPI",
        "dataExtensionId": "####-####-####-####-####",
        "dataExtensionName": "some data extension",
        "sourceApplicationExtensionId": "####-####-####-####-####",
        "filterDefinitionTemplate": "FilterDefinition/FilterDefinition",
        "iconUrl": "/events/images/customer.png",
        "arguments":
            {
            "criteria": "null"
             },
         "isVisibleInPicker": true,
         "category": "Event"
}
```

**Example Response**

```js
HTTP/1.1 200
{
        "eventDefinitionKey": "NeweventviaAPI",
}
```

Last Updated: Jun 8, 2021

## Related Topics

- Event Definition Schema (atlas.en-us.noversion.mc-apis.meta/mc-apis/event-definition-schema.htm)
- schedule (atlas.en-us.noversion.mc-apis.meta/mc-apis/event-definition-schedule.htm)
