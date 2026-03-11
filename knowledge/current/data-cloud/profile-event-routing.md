---
title: "Profile Event Routing"
domain: data-cloud
topic: profile-event-routing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.547Z
keywords: [Profile, Event, Routing, Example, See]
---

# Profile Event Routing

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