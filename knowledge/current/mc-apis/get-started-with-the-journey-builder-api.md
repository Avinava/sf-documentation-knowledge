---
title: "Get Started with the Journey Builder API"
domain: mc-apis
topic: get-started-with-the-journey-builder-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:17.069Z
estimatedTokens: 710
keywords: [Prerequisites, Started, Journey, Builder, API, APIs, Marketing, Cloud, authentication, process, Items]
---

> To use the Journey Builder APIs, complete the Marketing Cloud API authentication process.

# Get Started with the Journey Builder API

## Prerequisites

To use the Journey Builder APIs, complete the Marketing Cloud API authentication process.

1.  To get a client ID and secret, create an installed package with an API Integration component.
2.  Using the above credentials, get an OAuth access token for authenticating your API calls.
3.  Use the access token in the header to authenticate each subsequent call.

## Use the Journey Builder API

1.  [Create your sendable data extension in Marketing Cloud](https://help.salesforce.com/articleView?id=mc_es_de_enhanced_subscriber.htm&type=5).
2.  [Create your event definition in Marketing Cloud](https://help.salesforce.com/articleView?id=mc_jb_entry_sources.htm&type=5). The event definition determines entry settings for the journey, controlling who gets in and when. Use the sendable data extension created in step 1 as the entry source. If using a custom application for Journey Builder functionality, you can also define an entry event via the API using the POST /eventDefinitions resource.
3.  [Build the journey](atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm). Use the Journey Specification to build out the JSON of your journey.
    -   Define the activities. Activities determine the pace and content of contact messaging and data updates as the journey executes. Marketers create a chain of activities by dragging and dropping activities onto the Canvas.
    -   Define a goal (optional). A Goal measures the journey's effectiveness. The Marketing Cloud continually evaluates journeys. The Journey Builder dashboard displays their performance toward meeting goal targets.
4.  [Publish the journey](atlas.en-us.noversion.mc-apis.meta/mc-apis/postPublishInteractionById.htm). Once a journey is active, Marketing Cloud continually evaluates Contacts using the entry event criteria to determine if a journey should be invoked.
5.  [Fire an entry event](atlas.en-us.noversion.mc-apis.meta/mc-apis/how-to-fire-an-event.htm). A journey begins when the event it is configured to detect occurs. Use the event definition key created for the event definition in step 2.

## Related Items

-   [Get a Client ID and Secret](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm)
-   [Server-to-Server Integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-s2s-client-credentials.htm)
-   [Web and Public App Integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-app-auth-code.htm)
-   [API Specification](atlas.en-us.noversion.mc-apis.meta/mc-apis/jb-api-specification.htm)
-   [Event Definition Overview](atlas.en-us.noversion.mc-apis.meta/mc-apis/event-definition-key.htm)

## Related Topics

- Build the journey (atlas.en-us.noversion.mc-apis.meta/mc-apis/getting-started-spec.htm)
- Publish the journey (atlas.en-us.noversion.mc-apis.meta/mc-apis/postPublishInteractionById.htm)
- Fire an entry event (atlas.en-us.noversion.mc-apis.meta/mc-apis/how-to-fire-an-event.htm)
- API Specification (atlas.en-us.noversion.mc-apis.meta/mc-apis/jb-api-specification.htm)
- Event Definition Overview (atlas.en-us.noversion.mc-apis.meta/mc-apis/event-definition-key.htm)
