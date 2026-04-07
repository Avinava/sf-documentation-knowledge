---
title: "Transactional Messaging API"
domain: mc-apis
topic: transactional-messaging-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:25.441Z
estimatedTokens: 601
keywords: [Transactional, Messaging, API, documentation, triggered, managed, Email, Studio, review, Scenario, Considerations, Items]
---

# Transactional Messaging API

> This documentation applies only to the Transactional Messaging API. For triggered sends that are managed in Email Studio, review the Triggered Email Scenario Guide.

# Transactional Messaging API

> This documentation applies only to the Transactional Messaging API. For triggered sends that are managed in Email Studio, review the [Triggered Email Scenario Guide](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/triggered_email_scenario_guide_for_developers.htm).

Transactional messaging is immediate, automated, non-promotional messaging, such as order confirmation messages, password reset emails, and bank balance inquiry messages. Use the Marketing Cloud Transactional Messaging REST API to send personalized transactional email and SMS messages to your customers. To receive immediate notifications about whether your message was sent and other events, use the Marketing Cloud Event Notification Service.

These features distinguish the Transactional Messaging API from triggered sends in Email Studio and from MobileConnect outbound SMS messages.

-   The API runs on an updated messaging platform, which improves scale and send speed.
-   All messages are sent as quickly as possible. For email, there’s no need to select high, medium, or low priority in a send definition.
-   You can track each message through Marketing Cloud from the client's host system, including the Event Notification Service, using the messageKey attribute.

## Considerations

-   You must use the API to configure the send definition and send messages.
-   A singleton send request, which uses the recipient object attribute rather than the recipients array attribute, must provide a unique messageKey as an ID.
-   The API doesn’t support suppression lists or exclusion scripts.
-   The API supports send logging only if your account is configured for auto send logging. To maintain maximum performance, ensure that your send log is configured with a data retention policy.
-   To deduplicate at send time, use messageKey. Don’t use a primary key on the triggered send data extension.
-   You can create up to 500 total email transactional send definitions plus email triggered send definitions in a seven-day period for one business unit. This limit applies to send definitions created in the Marketing Cloud application and via API. It doesn’t apply to the Journey Builder email activity triggered send definition.

### Related Items

-   [Event Notification Service](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens.htm)
