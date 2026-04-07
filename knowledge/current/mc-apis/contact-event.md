---
title: "Contact Event"
domain: mc-apis
topic: contact-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:20.677Z
estimatedTokens: 489
keywords: [Contact, Event, entry, provide, check, against, contact's, attributes, determines, injected, journey, decision, split, activity, Specification]
---

# Contact Event

> The event is used as the default entry event to provide a boolean check against a contact's attributes, that determines if a contact should be injected into a journey. This is the same check used in the decision split activity.

# Contact Event

The event is used as the default entry event to provide a boolean check against a contact's attributes, that determines if a contact should be injected into a journey. This is the same check used in the decision split activity.

## Journey Specification Format

The activity must be formatted as specified below. The following JSON object will be included in the triggers array of a journey, as defined in the Journey Specification.

## Helpful Hints

The schemaVersionId comes from the GET /schema resource.

## Sample Request

```js
{
    "arguments": {},
    "configurationArguments": {
        "criteria": "<filterXML>",
        "schemaVersionId": 125
    },
    "description": "The description for the entry event",
    "key": "<user-defined-key-for-this-entry-event-OR-app-extension-key>",
    "metaData": {
        "configurationDescription": "",
        "eventDefinitionId": "<GUID>",
        "eventDefinitionKey": "<event-key-from-entry-event-admin>"
    },
    "name": "The name of this entry event",
    "outcomes": [],
    "type": "Event"
}
```

## Sample Response

```js
{
    "arguments": {},
    "configurationArguments": {
        "criteria": "<filterXML>",
        "schemaVersionId": 125
    },s
    "description": "The description for the entry event",
    "id": "<unique-GUID-provided-by-SFMC>",
    "key": "<user-defined-key-for-this-entry-event>",
    "metaData": {
        "configurationDescription": "",
        "eventDefinitionId": "<GUID>",
        "eventDefinitionKey": "<event-key-from-entry-event-admin>"
    },
    "eventDefinitionId": "<GUID>",
    "eventDefinitionKey": "<event-key-from-entry-event-admin>",
    "name": "The name of this entry event",
    "outcomes": [],
    "type": "Event"
}
```

## Related Items

-   [Journey Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
-   [GET /schema Resource](atlas.en-us.noversion.mc-apis.meta/mc-apis/schemasCollection.htm)

## Related Topics

- Journey Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
- GET /schema Resource (atlas.en-us.noversion.mc-apis.meta/mc-apis/schemasCollection.htm)
