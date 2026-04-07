---
title: "Event Definition Overview"
domain: mc-apis
topic: event-definition-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:16.878Z
estimatedTokens: 352
keywords: [Event, Definition, definitions, define, schema, created, API, key, uses, route, events, appropriate, journeys, Acme-MovieRented, Items]
---

> Event definitions define the name and a data schema for an event. When an event definition is created, the API defines the event definition key. The API then uses the event definition key to route events to the appropriate journeys. For example, an event definition has the key "Acme-MovieRented". Tw

# Event Definition Overview

Event definitions define the name and a data schema for an event. When an event definition is created, the API defines the event definition key. The API then uses the event definition key to route events to the appropriate journeys. For example, an event definition has the key "Acme-MovieRented". Two or more journeys should be invoked when a contact rents a movie. Use the same event definition key to invoke both journeys when a contact rents a movie.

The Journey Specification requires an event (trigger) object to have an event definition key set in order for the journey to be published.

## Example Event Object

```
{
    "key": "a-simple-journey",
    "name": "My Workflow",
    "description": "This is a description of my workflow.",
    "version": 1,
    "workflowApiVersion": 1.0,
    "triggers": [
        {
            "key": "move-rented-event-activity-key",
            "name": "Move Rented",
            "type": "Event",
            "arguments": [],
            "eventDefinitionKey": "Acme-MovieRented"
        }
    ]
}
```

## Related Items

-   [POST /eventDefinition Resource](atlas.en-us.noversion.mc-apis.meta/mc-apis/createEventDefinition.htm)
-   [List of All Event Definition Resources](atlas.en-us.noversion.mc-apis.meta/mc-apis/jb-api-specification.htm)
-   [Fire an Entry Event](atlas.en-us.noversion.mc-apis.meta/mc-apis/how-to-fire-an-event.htm)

## Related Topics

- POST /eventDefinition Resource (atlas.en-us.noversion.mc-apis.meta/mc-apis/createEventDefinition.htm)
- List of All Event Definition Resources (atlas.en-us.noversion.mc-apis.meta/mc-apis/jb-api-specification.htm)
- Fire an Entry Event (atlas.en-us.noversion.mc-apis.meta/mc-apis/how-to-fire-an-event.htm)
