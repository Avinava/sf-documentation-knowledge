---
title: "Custom Events"
domain: data-cloud
topic: custom-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.135Z
keywords: [Custom, Events, Note]
---

# Custom Events

# Custom Events

Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.

Define the shape of the custom event in the Web Connector schema. For example:

```

```

Then, in Salesforce Interactions SDK, specify the eventType or name field, and required fields that aren’t set via Automatic Population of Required Fields to capture this event.

```

```

This drives the SDK to emit an event such as this to Data Cloud:

```

```

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

If eventType isn’t provided but name is, then eventType defaults to the value of name.