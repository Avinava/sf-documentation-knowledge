---
title: "Consent Data"
domain: data-cloud
topic: consent-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:12.988Z
estimatedTokens: 502
keywords: [Consent, Data, either, grant, revoke, Salesforce, Interactions, SDK, customer, chooses, opt, tracking, attached, Event, Structure]
---

# Consent Data

> Consent data is used to either grant or revoke consent in Salesforce Interactions SDK.
    When a customer chooses to opt in to tracking these consent details are  attached to the Event
    Structure of the first tracked event.

# Consent Data

Consent data is used to either grant or revoke consent in Salesforce Interactions SDK. When a customer chooses to opt in to tracking these consent details are attached to the Event Structure of the first tracked event.

[Consent](# "Consent data is used to either grant or revoke consent in Salesforce Interactions SDK. When a customer chooses to opt in to tracking these consent details are attached to the Event Structure of the first tracked event.") object fields:

| Fields | Type | Description |
| --- | --- | --- |
| provider | string | Required. A named identifier indicating the consent management system providing the consent to the SDK. |
| purpose | string | Required. What the customer consented to. For example, Tracking. |
| status | string | Required. Values: Opt In or Opt Out |

Here’s a basic structure of the consent data attached to an event.

```

```

The following consent purpose and status names are provided:

| Name | Value |
| --- | --- |
| SalesforceInteractions.ConsentPurpose.Tracking | Tracking |
| SalesforceInteractions.ConsentStatus.OptIn | Opt In |
| SalesforceInteractions.ConsentStatus.OptOut | Opt Out |

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")

## Code Examples

```
{
  provider: "Example Provider",
  purpose: "Tracking",
  status: "Opt In"
}
```

## Related Topics

- Translation of SDK Events to Web Connector Schemas (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm)
- Custom Events (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm)
