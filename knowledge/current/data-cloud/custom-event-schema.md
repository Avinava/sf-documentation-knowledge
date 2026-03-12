---
title: "Custom Event Schema"
domain: data-cloud
topic: custom-event-schema
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.194Z
estimatedTokens: 517
keywords: [Custom, Event, Schema, event, data, models, provided, Engagement, Mobile, SDK, cart, catalog, order, unified, model, across, Salesforce., create, capture, custom]
---

# Custom Event Schema

> Use the event data models provided by the Engagement Mobile SDK for cart event, catalog
    event, and order event to use the unified data model across Salesforce. You can create and
    capture a custom event.

# Custom Event Schema

Use the event data models provided by the Engagement Mobile SDK for cart event, catalog event, and order event to use the unified data model across Salesforce. You can create and capture a custom event.

Define the custom event in the Mobile Connector schema:

| Source Event Property | Target Schema Developer Name | Field Type | Description | CIM Object / Attribute |
| --- | --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. | - |
| <Automatically Assigned> | dateTime | datetime | Required. Used for data partitioning for engagement events. ISO8601 supported format. | - |
| name | eventType = <what the user defined in name property> | text | Required. The name defined in property suffixed with eventType. Example: The name Custom Event is transformed to: "eventType": "Custom Event". | - |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. | - |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. | - |
| <Automatically Assigned> | category = "Engagement" | text | Required. Possible values are:EngagementProfile | - |
| <Automatically Assigned> | channel = "mobile" | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. | - |
| <user defined attributes array>NoteAttributes array can contain nested arrays. | <attributes as defined by user> | <user defined> | Custom Event | - |
| <Automatically Assigned when Location Tracking is allowed> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Device Longitude |
| <Automatically Assigned when Location Tracking is allowed> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. | Device Latitude |

If eventType isn’t provided but name is then eventType defaults to the value of name. For example, the schema could look like:

```

```

## Code Examples

```
{
  "masterLabel": "CustomEvent",  
  "developerName": "Custom Event",  
  "category": "Engagement",  
  "externalDataTranFields": [
    {
      "masterLabel": "category",     
      "developerName": "category",      
      "dataType": "Text",      
      "isDataRequired": true    
    },    
    {
      "masterLabel": "channel",      
      "developerName": "channel",      
      "dataType": "Text",      
      "isDataRequired": false    
    },    
    {
      "masterLabel": "dateTime",      
      "developerName": "dateTime",      
      "dataType": "DateTime",      
      "isDataRequired": true    
    },    
    {
      "masterLabel": "deviceId",      
      "developerName": "deviceId",      
      "dataType": "Text",      
      "isDataRequired": true,      
      "primaryIndexOrder": 1    
    },    
    {
      "masterLabel": "eventId",      
      "developerName": "eventId",      
      "dataType": "Text",      
      "isDataRequired": true    
    },    
    {
      "masterLabel": "eventType",      
      "developerName": "eventType",      
      "dataType": "Text",      
      "isDataRequired": true    
    },    
    {
      "masterLabel": "latitude",      
      "developerName": "latitude",      
      "dataType": "Number",      
      "isDataRequired": false    
    },    
    {
      "masterLabel": "longitude",      
      "developerName": "longitude",      
      "dataType": "Number",      
      "isDataRequired": false    
    },        
    {
      "masterLabel": "sessionId",      
      "developerName": "sessionId",      
      "dataType": "Text",      
      "isDataRequired": true    
    },
    {
      "masterLabel": "giftMessage",      
      "developerName": "giftMessage",      
      "dataType": "Text",      
      "isDataRequired": false   
    },
    {
      "masterLabel": "giftWrap",      
      "developerName": "giftWrap",      
      "dataType": "Text",      
      "isDataRequired": false   
    },
    {
      "masterLabel": "giftWrapOptionsPaperColor",      
      "developerName": "giftOptionsPaperColor",      
      "dataType": "Text",      
      "isDataRequired": false   
    },
    {
      "masterLabel": "giftWrapOptionsRibbon",      
      "developerName": "giftOptionsRibbon",      
      "dataType": "bool",      
      "isDataRequired": false   
    }
  ]
}
```

## Related Topics

- Custom Event (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_custom_event.htm)
- Location Tracking (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_location_tracking.htm)
