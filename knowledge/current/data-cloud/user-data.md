---
title: "User Data"
domain: data-cloud
topic: user-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.530Z
keywords: [User, Data, Example, See]
---

# User Data

# User Data

Track profile data for a user with or without an associated interaction using Salesforce Interactions Web SDK.

```

```

User object fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| anonymousId | string | This field is managed by the SDK and is automatically attached to every event. |
| user.attributes | object | A user-supplied value. |
| user.identities | object | A user-supplied value to link the anonymous user with a known user. |

## Example

Here’s how a user profile data is captured using the Web SDK without Interaction.

```

```

Here’s how a user profile data is captured using the Web SDK with Interaction.

```

```

Here’s how a user profile data is captured using a Sitemap.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")
    
-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")