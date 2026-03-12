---
title: "Data Cloud Module of the Salesforce Interactions SDK"
domain: data-cloud
topic: data-cloud-module-of-the-salesforce-interactions-sdk
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:13.435Z
estimatedTokens: 990
keywords: [Data, Cloud, Module, Salesforce, Interactions, SDK, extension, adds, features, convert, Event, Structure, compatible, ingestion, authenticate]
---

# Data Cloud Module of the Salesforce Interactions SDK

> The Data Cloud Module of the Salesforce Interactions SDK is an extension
    that adds features to the SDK. You can convert the Event Structure into a compatible format for
    ingestion by Data Cloud and authenticate and deliver events over HTTP to a Data Cloud Web Connector.

# Data Cloud Module of the Salesforce Interactions SDK

The Data Cloud Module of the Salesforce Interactions SDK is an extension that adds features to the SDK. You can convert the Event Structure into a compatible format for ingestion by Data Cloud and authenticate and deliver events over HTTP to a Data Cloud Web Connector.

The extension module is automatically included and configured with the instrumentation script provided when setting up a web connector in Data Cloud. There are some important details to know:

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")
-   [Profile Event Routing](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_apit_profile_event_routing.htm "Profile Events described in a Web Connector Schema are mapped to individual data streams when deployed. To route profile data collected in Salesforce Interactions SDK to the proper data stream, add the eventType field to any user.attributes data captured.")
-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")

## Recommended Schema

To use the power of a unified data model across Salesforce, use this [schema](https://cdn.c360a.salesforce.com/cdp/schemas/250/web-connector-schema.json) when configuring a Web Connector:

This schema contains mappings for:

-   Engagement Events
    -   Cart Interaction Mapping
    -   Catalog Interaction Mapping
    -   Order Interaction Mapping
    -   Consent Event Mapping

-   Profile Events
    -   Contact Point Email Mapping
    -   Contact Point Phone Mapping
    -   Identity Mapping
    -   Party Identification Mapping

-   **[Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm)**
    Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.
-   **[Profile Event Routing](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_apit_profile_event_routing.htm)**
    Profile Events described in a Web Connector Schema are mapped to individual data streams when deployed. To route profile data collected in Salesforce Interactions SDK to the proper data stream, add the eventType field to any user.attributes data captured.
-   **[Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm)**
    Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

## Related Topics

- Translation of SDK Events to Web Connector Schemas (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm)
- Profile Event Routing (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_apit_profile_event_routing.htm)
- Custom Events (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm)
