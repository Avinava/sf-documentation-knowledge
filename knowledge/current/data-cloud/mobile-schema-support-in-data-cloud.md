---
title: "Mobile Schema Support in Data Cloud"
domain: data-cloud
topic: mobile-schema-support-in-data-cloud
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.229Z
estimatedTokens: 1832
keywords: [Mobile, Schema, Support, Data, Cloud, unified, data, model, across, Salesforce, recommended, Connector, configuring, Connector., Translating, SDK, Events, Schemas, Automatic, Population]
---

# Mobile Schema Support in Data Cloud

> To use a unified data model across Salesforce, we recommended using the Mobile
    Connector Schema when configuring a Mobile Connector.

# Mobile Schema Support in Data Cloud

To use a unified data model across Salesforce, we recommended using the Mobile Connector Schema when configuring a Mobile Connector.

Download the [Mobile Connector](https://cdn.c360a.salesforce.com/cdp/schemas/250/mobile-connector-schema.json) schema.

Event schema mappings:

-   Engagement
    -   [Cart Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_cart_schema.htm "Map an Engagement Mobile SDK cart event to the cart schema.")
    -   [Catalog Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_catalog_schema.htm "Map an Engagement Mobile SDK catalog event to the catalog schema.")
    -   [Order Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_order_schema.htm "An order interaction is a commerce action that captures actions performed by a user to manage new, in progress, or completed orders.")
    -   [Custom Event Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_custom_event_schema.htm "Use the event data models provided by the Engagement Mobile SDK for cart event, catalog event, and order event to use the unified data model across Salesforce. You can create and capture a custom event.")
    -   [Consent Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_schema.htm "Consent Management is used to either grant or revoke consent in the Engagement Mobile SDK. When a customer opts in to tracking, the mobile application sends a consentLog event indicating the choice along with other events that got collected. When a customer opts out, a consentLog event is sent containing their choice and no other events are sent to Data Cloud.")
    -   [Behavior Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_behavior_schema.htm "Behavior events are sent to Data Cloud as a customer navigates the application where the Data Cloud Module for the Engagement Mobile SDK is running. Behavior events can include screen view, and application launch.")
-   Profile
    -   [Contact Point Email Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_contact_point_email_schema.htm "Use the contact point email schema to capture profile data to map to individual data streams.")
    -   [Contact Point Phone Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_contact_point_phone_schema.htm "Use the contact point phone schema to capture profile data to map to individual data streams.")
    -   [Contact Point Address Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_contact_point_address_schema.htm "Use the contact point address schema to capture profile data to map to individual data streams. An address contains a mix of required and optional fields. In order to create the contact point and map it to the individual, all required fields must be provided.")
    -   [Party Identification Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_party_identification_schema.htm "Use the party identification schema to capture profile data to map to individual data streams.")
    -   [Identity Schema](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_identity_schema.htm "Capturing profile data is achieved through the mobile SDK’s identity component. The component sets and tracks various profile attributes and emit identity events, which the Data Cloud Module listens for. These identity events can contain an aggregate for several contact point profile data streams.")

## Translating SDK Events to Mobile Connector Schemas

Understanding how the events from the Engagement Mobile SDK are converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code and for extending your schema to capture extra data not covered by the Recommended Schema.

The Data Cloud event beacon requires fields to be present on all events.

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| <Automatically Assigned> | eventId | text | Required. Typically the primary key for the engagement events. |
| <Automatically Assigned> | dateTime | date | Required. Used for data partitioning for engagement events. ISO8601 supported format. |
| <Automatically Assigned> | eventType | text | Required. The developerName of an event defined in the Web Connector schema. |
| <Automatically Assigned> | sessionId | text | Required. The identifier of the session. |
| <Automatically Assigned> | deviceId | text | Required. Typically the primary key for profile events. |
| <Automatically Assigned> | category | text | Required. Possible values are:EngagementProfile |

The Data Cloud Module for the Engagement Mobile SDK automatically sets these fields on events sent to Data Cloud.

## Automatic Population of the Data Cloud Module for Engagement Mobile SDK Fields

These fields are automatically attached to all profile and engagement events. To enable attaching location data to events, learn more with [Location Tracking](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_location_tracking.htm "The Data Cloud Module for the Engagement Mobile SDK supports location tracking for all events. Enable this functionality using the setLocation method on the Data Cloud Module to set coordinates and expiresIn.").

| Source Event Property | Target Schema Developer Name | Field Type | Description |
| --- | --- | --- | --- |
| <Automatically Assigned> | channel | text | The SDK event channel. For Engagement Mobile SDK the value is mobile. |
| <Automatically Assigned> | longitude | number | The longitudinal coordinate in decimal degrees reported by the device at the time the event was captured. |
| <Automatically Assigned> | latitude | number | The latitudinal coordinate in decimal degrees reported by the device at the time the event was captured. |

## Schema Field Naming Rules

In order for events to be properly ingested, the data format used with a Data Cloud event beacon is a flattened JSON structure that imposes certain limitations on how fields are named. The Data Cloud Module for the Engagement Mobile SDK transforms all event data before sending to conform to these naming rules. We recommend keeping field names simple and avoid nested data, when possible.

-   CamelCase: Field names constructed using snake case or all capitalized, the field name is transformed to camel case and the casing is normalized. For instance, the field name PROMO\_CODE is referenced in the schema as promoCode.
-   Special Characters and Extra Spacing: Field names consist of extra spacing or special characters are removed. For instance, the field name special #size's is transformed to specialSizes.
-   Nested Properties: The schema names for nested attribute arrays are attribute is constructed using the parent child relationship. For instance, the schema name paperColor giftWrapOptionsPaperColor.

    ```

    ```

-   Array Values: If an array is a simple string array such as "list": \["aaa", "bbb"\], the schema name references the particular elements in numeric order. For instance, "list0": "aaa", "list1": "bbb".

## Code Examples

```
"giftWrapOptions": {
    "paperColor": "green"
}
```

## Related Topics

- Cart Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_cart_schema.htm)
- Catalog Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_catalog_schema.htm)
- Order Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_order_schema.htm)
- Custom Event Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_custom_event_schema.htm)
- Consent Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_consent_schema.htm)
- Behavior Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_behavior_schema.htm)
- Contact Point Email Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_contact_point_email_schema.htm)
- Contact Point Phone Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_contact_point_phone_schema.htm)
- Contact Point Address Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_contact_point_address_schema.htm)
- Party Identification Schema (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk_party_identification_schema.htm)
