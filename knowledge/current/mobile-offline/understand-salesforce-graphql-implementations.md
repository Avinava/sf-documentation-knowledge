---
title: "Understand Salesforce GraphQL Implementations"
domain: mobile-offline
topic: understand-salesforce-graphql-implementations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.997Z
estimatedTokens: 1091
keywords: [Understand, Salesforce, GraphQL, Implementations, offers, three, different, ways, LWC, developers, their, components, select, depend, specific]
---

# Understand Salesforce GraphQL Implementations

> Salesforce offers three different ways for LWC developers to use GraphQL in their
  components. Which one you select for your components will depend on the specific needs of your
  application.

# Understand Salesforce GraphQL Implementations

Salesforce offers three different ways for LWC developers to use GraphQL in their components. Which one you select for your components will depend on the specific needs of your application.

**GraphQL API Endpoint**

GraphQL is available using a traditional API endpoint, similar to the UI API. This implementation of GraphQL is the most complete and feature-rich. It also requires you to handle more details yourself: authentication, request submission and response handling, and so on.

The GraphQL API endpoint is accessible to any network-connected client, using any REST-capable tool, framework, or language. It’s also the fastest way to “play” with the API; see [Quick Starts: GraphQL API](https://developer.salesforce.com/docs/platform/graphql/guide/get-started.html "HTML (New Window)") to quickly get started using a REST client.

**GraphQL Wire Adapter for Lightning Web Components**

The GraphQL Wire Adapter lets LWC developers use GraphQL via a wire adapter. Using a wire adapter simplifies the management of your data by using Lightning Data Service (LDS).

Using GraphQL via the wire adapter simplifies making requests and handling responses, and allows your components to leverage other features of LDS, such as caching data and requests for improved performance. The flexibility and expressiveness of GraphQL can enable you to use GQL instead of Apex for advanced data retrieval operations. Preferring LDS and wire adapters over Apex is a best practice, and part of the LWC [Data Guidelines](https://developer.salesforce.com/docs/platform/lwc/guide/data-guidelines.html "HTML (New Window)").

**Offline GraphQL**

Offline GraphQL is an implementation of GraphQL built into LWC Offline, which can run on a mobile device, even when it’s not connected to the Internet. Offline GraphQL uses the same GraphQL wire adapter as online-only components—you don’t have to change your code at all. Indeed, when a mobile device is online, it seamlessly uses the standard (not offline-enabled) GraphQL wire adapter.

However, when a mobile device is offline, and your LWC runs in an LWC Offline-enabled mobile app, Offline GraphQL is used, again, automatically. Offline GraphQL runs client-side, on the mobile device, without a network connection. It uses data and metadata that is already on the device in the Offline Cache, preloaded either by priming or by normal client activity.

Offline GraphQL has a number of limitations you need to be aware of. The standard implementations of GraphQL have access to your org’s complete data and metadata, as well as access to the server-side resources of a vast data center. Offline GraphQL has ... your phone.

That might sound limiting, and it is. Offline GraphQL isn’t magic. There’s no sufficiently advanced GQL query that can load data that’s not already present on the device. But with smart data access strategies you *can* make your custom LWCs perform work that *looks* like magic to folks who need to use them in places without network access.

## How to Choose a GraphQL Implementation

-   For developers working with a framework other than Lightning Web Components, the choice is easy: use the GraphQL API Endpoint. (It’s your only option.)
-   For quickly experimenting with GraphQL, either as your first experience or just to work out a new GQL query, use the GraphQL API Endpoint and a REST client of your choice. (We document using GraphQL with two different REST clients in [Quick Starts: GraphQL API](https://developer.salesforce.com/docs/platform/graphql/guide/get-started.html "HTML (New Window)").)
-   For LWC developers building components that will be used only while connected to the Internet:
    -   Use the GraphQL wire adapter. It’s the recommended, natural method for data access in Lightning Web Components, and leverages many additional features to make using GQL easier and more clear in your code.
    -   If and only if the GraphQL wire adapter is missing a GraphQL feature offered by the GraphQL API Endpoint, and you must use that feature today, then use the GraphQL API Endpoint. We recommend you isolate this code such that it will be easy to refactor to use the wire adapter when the feature catches up.
-   For LWC developers building components that need to work offline, your only option is Offline GraphQL. (Keep reading.)
