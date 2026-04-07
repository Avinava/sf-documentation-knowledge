---
title: "Fire an Entry Event"
domain: mc-apis
topic: fire-an-entry-event
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:22.374Z
estimatedTokens: 356
keywords: [Fire, Entry, Event, There, two, ways, send, events, Journey, Builder, Results, Items]
---

# Fire an Entry Event

> There are two ways to send events to Journey Builder:

# Fire an Entry Event

There are two ways to send events to Journey Builder:

-   Using a Fire Event Activity in Automation Studio
-   By POSTing an event to the Journey Builder API

To send events using the API:

1.  Define the event and its properties.
    -   If defining the event in Marketing Cloud, make note of the Event Definition Key for API.
    -   If defining the event via the API, use the POST /eventDefinition resource.
2.  Use a valid OAuth access token to authorize requests to the Marketing Cloud REST APIs.
3.  Using the POST /events resource, POST the required fields and event properties to the API.

## Results

When an event is posted to the API, the data schema of the associated data extension validates that all fields from the API call exist in the data extension. The data extension associated with an event is defined in the DataExtensionID field in the EventDefinition table.

-   If a field is missing, a validation exception is thrown.
-   If the request is successful, an eventInstanceId is returned. This ID is a unique identifier for this specific request.

## Related Items

-   [Fire Event Activity in Automation Studio](https://help.salesforce.com/articleView?id=mc_jb_fire_event.htm&type=5)
-   [POST /eventDefinition Resource](atlas.en-us.noversion.mc-apis.meta/mc-apis/createEventDefinition.htm)
-   [POST /events Resource](atlas.en-us.noversion.mc-apis.meta/mc-apis/postEvent.htm)

## Related Topics

- POST /eventDefinition Resource (atlas.en-us.noversion.mc-apis.meta/mc-apis/createEventDefinition.htm)
- POST /events Resource (atlas.en-us.noversion.mc-apis.meta/mc-apis/postEvent.htm)
