---
title: "Event Definition Schema"
domain: mc-apis
topic: event-definition-schema
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:16.894Z
estimatedTokens: 439
keywords: [Event, Definition, Schema, creating, API, uses, contained, extension, nullability, included, JSON, Items]
---

> When creating an event definition, the API uses the information contained in the schema object to create a data extension associated with the event definition. The schema defines the name, nullability, and default values of the fields to be included in the data extension.

# Event Definition Schema

When creating an event definition, the API uses the information contained in the schema object to create a data extension associated with the event definition. The schema defines the name, nullability, and default values of the fields to be included in the data extension.

## Example JSON Schema Definition

```json
{
"schema": {
      "sendableCustomObjectField" : "contactKey",
      "SendableSubscriberField" : "contactKey",
        "fields": [
            {
                "name": "firstName",
                "dataType": "text",
                "maxLength": "100",
                "isNullable": false,
                "defaultValue": ""
            },
            {
                "name": "contactKey",
                "dataType": "text",
                "maxLength": "100",
                "isNullable": false,
                "defaultValue": ""
            }
        ]
    }
}
```

## Schema Fields

The event definition schema must specify a subscriber key field. This can be a subscriber key or email address, depending on the account type. The field specified will be used as the contact key when invoking journeys.

| Field | Description |
| --- | --- |
| SendableCustomObjectField | This field maps to the subscriber key (or subscriber id/email address). This field should hold, in most cases, the contact key. Journey Builder uses this field to populate the contact key when invoking journeys. Journeys require a contact key. |
| SendableSubscriberField | Valid options are SubscriberKey, SubscriberId or EmailAddress. Most API implementations use the SubscriberKey value. |

## Related Items

[Supported Schema Field Types](https://help.salesforce.com/articleView?id=mc_es_data_extension_data_types.htm&type=5)
