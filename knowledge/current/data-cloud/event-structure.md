---
title: "Event Structure"
domain: data-cloud
topic: event-structure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:12.282Z
estimatedTokens: 879
keywords: [Event, Structure, event, collected, Salesforce, Interactions, Web, SDK, contains, automatically, set, system, optional, you., Developer, Provided, Data, Example]
---

# Event Structure

> An event collected by Salesforce Interactions Web SDK contains properties that are
    automatically set by the system and optional properties that are set by you.

# Event Structure

An event collected by Salesforce Interactions Web SDK contains properties that are automatically set by the system and optional properties that are set by you.

| Fields | Provided By | About | Description |
| --- | --- | --- | --- |
| account | Developer | Account | Captures profile event data for an account. |
| consents | SDK | Consents | Contains a list of consent values attached to the first event captured after a customer consents to tracking or when a customer revokes consent. |
| interaction | Developer | Interaction | Captures customer engagement event data. |
| pageView | SDK | Page View | Indicates if the event was captured during a page load. |
| source | SDK | Source | Contains event metadata about the page. |
| time | SDK | Time | Shows the timestamp of the event in milliseconds elapsed since the UNIX epoch. |
| user | Developer | User | Captures profile event data for of a customer. |

## Developer Provided Data

The interaction field is for capturing customer engagement data. At a minimum, an interaction requires a valid name value. Salesforce Interactions Web SDK come with several specialized interaction types, such as:

-   [Cart Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_cart_interaction.htm "A cart interaction is where a customer modifies the contents of their online shopping cart.")
-   [Catalog Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_catalog_interaction.htm "Use a catalog interaction to capture when a customer interacts with various tracking items. For example, a product or a blog post.")
-   [Order Interaction](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_order_interaction.htm "An order interaction is an ecommerce event that captures actions performed by a user to manage new, in progress, or completed orders.")

The user field captures the customer’s [user](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_user_data.htm "Track profile data for a user with or without an associated interaction using Salesforce Interactions Web SDK.") profile data.

The account field captures profile data at the [account](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_account_data.htm "Account data represent user information at the account level. The account fields allow you to capture data for many customers in one account.") level. The account fields allow you to capture data for many customers in one account.

## Example

Salesforce Interactions Web SDK is used to instrument a site to capture events containing both behavioral and profile data.

```

```

Here’s what the captured results look like for this event structure.

```

```

#### See Also

-   [Translation of SDK Events to Web Connector Schemas](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm "Understanding how the Event Structure from the Salesforce Interactions SDK is converted into data that can be ingested into Data Cloud can be useful for troubleshooting instrumentation code. Knowing this can extend your schema to capture extra data not covered by the recommended schema.")

-   [Custom Events](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm "Use the recommended Cart Interaction, Catalog Interaction, and Order Interaction data models provided by the Salesforce Interactions SDK to use the unified data model across Salesforce. You can create and capture custom events in addition to the recommended interaction data models.")

## Code Examples

```
SalesforceInteractions.sendEvent({
  interaction: {
    name: "View Catalog Object",
    catalogObject: {
      type: "Product",
      id: "product-1"
    }
  },
  user: {
    attributes: {
      email: "user@domain.com"
    }
  }
})
```

```
{
  interaction: {
    name: "View Catalog Object",
    catalogObject: {
      type: "Product",
      id: "product-1"
    }
  },
  source: {
    pageType: "homepage",
    url: "https://my.domain.com/home",
    urlReferrer: "https://my.domain.com/search",
    channel: "Web",
    locale: "en_US"
  },
  user: {
    anonymousId: "aa19dc4fcdc636d8",
    attributes: {
      email: "user@domain.com"
    }
  },
  consents: [{
    purpose: 'Tracking',
    provider: 'Example Provider',
    status: 'Opt In'
  }]
  pageView: 0,
  time: 1628700769593,
}
```

## Related Topics

- Cart Interaction (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_cart_interaction.htm)
- Catalog Interaction (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_catalog_interaction.htm)
- Order Interaction (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_order_interaction.htm)
- user (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_user_data.htm)
- account (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_account_data.htm)
- Translation of SDK Events to Web Connector Schemas (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_translating_sdk_events_to_web_connector_schemas.htm)
- Custom Events (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_custom_events.htm)
