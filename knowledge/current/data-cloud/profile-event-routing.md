---
title: "Profile Event Routing"
domain: data-cloud
topic: profile-event-routing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.667Z
estimatedTokens: 397
keywords: [Profile, Event, Routing, Events, described, Web, Connector, Schema, mapped, individual, data, streams, deployed., route, profile, collected, Salesforce, Interactions, SDK, proper]
---

# Profile Event Routing

> Profile Events described in a Web Connector Schema are mapped to individual data
    streams when deployed. To route profile data collected in Salesforce Interactions SDK to the
    proper data stream, add the eventType field to any
      user.attributes data captured.

# Profile Event Routing

Profile Events described in a Web Connector Schema are mapped to individual data streams when deployed. To route profile data collected in Salesforce Interactions SDK to the proper data stream, add the eventType field to any user.attributes data captured.

Match the value of eventType to developerName of a profile event specified in the Web Connector Schema. Any schema-required fields listed for that profile event must be captured.

## Example

For example, you receive this schema with contactPointEmail event.

```

```

You would instrument the capture of the contactPointEmail profile event in Salesforce Interactions SDK.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

-   [Data Collection](atlas.en-us.252.0.c360a_api.meta/c360a_api/c36a_api_data_collection.htm "Before the Salesforce Interactions SDK can begin capturing data, initialize the Salesforce Interactions SDK and gain the user’s consent to track the data.")

-   [User Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_user_data.htm "Track profile data for a user with or without an associated interaction using Salesforce Interactions Web SDK.")

## Code Examples

```
{
  "records": [
    {
      "developerName": "contactPointEmail",
      "masterLabel": "Contact Point Email",
      "category": "Profile",
      "externalDataTranFields": [
        {
          "masterLabel": "eventId",
          "dataType": "Text",
          "developerName": "eventId",
          "isDataRequired": true
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
          "isDataRequired": true,
          "primaryIndexOrder": 1
        },
        {
          "masterLabel": "email",
          "dataType": "Text",
          "developerName": "email",
          "isDataRequired": true
        },
        {
          "masterLabel": "eventType",
          "dataType": "Text",
          "developerName": "eventType",
          "isDataRequired": true
        },
        {
          "masterLabel": "interactionName",
          "dataType": "Text",
          "developerName": "interactionName",
          "isDataRequired": true
        },
        {
          "masterLabel": "pageView",
          "dataType": "Number",
          "developerName": "pageView",
          "isDataRequired": false
        },
        {
          "masterLabel": "sessionId",
          "dataType": "Text",
          "developerName": "sessionId",
          "isDataRequired": true
        },
        {
          "masterLabel": "sourceChannel",
          "dataType": "Text",
          "developerName": "sourceChannel",
          "isDataRequired": false
        },
        {
          "masterLabel": "sourceLocale",
          "dataType": "Text",
          "developerName": "sourceLocale",
          "isDataRequired": false
        },
        {
          "masterLabel": "sourcePageType",
          "dataType": "Text",
          "developerName": "sourcePageType",
          "isDataRequired": false
        },
        {
          "masterLabel": "sourceUrl",
          "dataType": "Text",
          "developerName": "sourceUrl",
          "isDataRequired": false
        },
        {
          "masterLabel": "sourceUrlReferrer",
          "dataType": "Text",
          "developerName": "sourceUrlReferrer",
          "isDataRequired": false
        }
      ]
    }
  ]
}
```

```
SalesforceInteractions.sendEvent({
  user: {
    attributes: {
      eventType: 'contactPointEmail',
      email: 'user@domain.com'
    }
  }
})
```

## Related Topics

- Translation of SDK Events to Web Connector Schemas (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm)
- Data Collection (atlas.en-us.252.0.c360a_api.meta/c360a_api/c36a_api_data_collection.htm)
- User Data (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_user_data.htm)
