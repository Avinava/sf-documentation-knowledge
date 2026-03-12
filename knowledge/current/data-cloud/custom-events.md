---
title: "Custom Events"
domain: data-cloud
topic: custom-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.002Z
estimatedTokens: 211
keywords: [Custom, Events, recommended, Cart, Interaction, Catalog, Order, data, models, provided, Salesforce, Interactions, SDK, unified, model]
---

# Custom Events

> Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data
    models provided by the Salesforce Interactions SDK to use the unified data model across
    Salesforce. You can create and capture custom events in addition to the recommended interaction
    data models.

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

## Code Examples

```
{
  "records": [
    {
      "developerName": "myCustomEvent",
      "masterLabel": "My Custom Event",
      "category": "Engagement",
      "externalDataTranFields": [
        {
          "masterLabel": "My Custom Field",
          "dataType": "Text",
          "developerName": "myCustomField",
          "isDataRequired": true
        },
        {
          "masterLabel": "My Custom Num Attribute",
          "dataType": "Number",
          "developerName": "attributesMyCustomNum",
          "isDataRequired": true
        },
        {
          "masterLabel": "My Custom Text Attribute",
          "dataType": "Text",
          "developerName": "attributesMyCustomText",
          "isDataRequired": true
        },
        {
          "masterLabel": "eventId",
          "dataType": "Text",
          "developerName": "eventId",
          "isDataRequired": true,
          "primaryIndexOrder": 1
        },
        {
          "masterLabel": "category",
          "dataType": "Text",
          "developerName": "category",
          "isDataRequired": true
        },
        {
          "masterLabel": "dateTime",
          "dataType": "DateTime",
          "developerName": "dateTime",
          "isDataRequired": true
        },
        {
          "masterLabel": "deviceId",
          "dataType": "Text",
          "developerName": "deviceId",
          "isDataRequired": true
        },
        {
          "masterLabel": "eventType",
          "dataType": "Text",
          "developerName": "eventType",
          "isDataRequired": true
        },
        {
          "masterLabel": "sessionId",
          "dataType": "Text",
          "developerName": "sessionId",
          "isDataRequired": true
        }
      ]
    }
  ]
}
```

```
SalesforceInteractions.sendEvent({
  interaction: {
    name: 'myCustomEvent',
    eventType: 'myCustomEvent',
    myCustomField: 'some value'
    attributes: {
        myCustomNum: 1234,
        myCustomText: "abcd"
  }
})
```

```
{
"events": [{
    "eventType": "myCustomEvent",
    "myCustomField": "some value",
    "attributesMyCustomNum": 1234,
    "attributesMyCustomText": "abcd",
    "eventId": "100d237b-e464-44df-9556-7481bbf52685",
    "dateTime": "2022-10-18T18:25:26.680Z",
    "sessionId": "6b6c33bfcfee93f4",
    "deviceId": "6b6c33bfcfee93f4",
    "interactionName": "myCustomEvent",
    "sourceUrl": "https://{my site}",
    "sourceUrlReferrer": "https://{my site}",
    "sourceChannel": "Web",
    "sourcePageType": "test",
    "category": "Engagement"
}]
}
```
