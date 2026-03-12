---
title: "Get the Event Schema with REST API"
domain: platform-events
topic: get-the-event-schema-with-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.774Z
estimatedTokens: 320
keywords: [Event, Schema, REST, API, eventschema, resource, retrieve]
---

# Get the Event Schema with REST API

> Use REST API eventschema resource to retrieve the
  event schema by using the event name or the schema ID.

# Get the Event Schema with REST API

Use REST API eventschema resource to retrieve the event schema by using the event name or the schema ID.

To retrieve the event schema by schema ID, perform a GET request to this REST API resource and supply the schema ID: /services/data/vXX.X/event/eventSchema/schemaId. For more information, see [Platform Event Schema by Schema ID](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_event_eventschema.htm "HTML (New Window)") in the REST API Developer Guide.

To retrieve the event schema by event name, perform a GET request to this REST API resource and supply the event name: /services/data/vXX.X/sobjects/eventName/eventSchema. For more information, see [Platform Event Schema by Event Name](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_sobject_eventschema.htm "HTML (New Window)") in the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/ "HTML (New Window)").

When the schema changes, for example, after an administrator adds a field to the platform event definition, the schema ID changes. You can determine if the schema changed by comparing the schema ID with the previous schema ID value.
