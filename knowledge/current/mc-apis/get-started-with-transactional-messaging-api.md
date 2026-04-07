---
title: "Get Started with Transactional Messaging API"
domain: mc-apis
topic: get-started-with-transactional-messaging-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.446Z
estimatedTokens: 1057
keywords: [Started, Transactional, Messaging, API, Ensure, client, secret, stored, securely, Never, expose, side, via, JavaScript, store]
---

# Get Started with Transactional Messaging API

> Ensure that your client ID and secret are stored securely. Never expose this information on the client side via JavaScript or store it in a mobile application.

# Get Started with Transactional Messaging API

-   For transactional emails:
    -   In Content Builder, [create the email message content to send](https://help.salesforce.com/articleView?id=mc_ceb_create_emails.htm&type=5).
    -   In Email Studio, either [create a list](https://help.salesforce.com/articleView?id=mc_es_create_list.htm&type=5) to manage recipient data or [apply the recipient details to all subscribers](https://help.salesforce.com/articleView?id=mc_es_all_subscribers_list.htm&type=5).
-   For transactional SMS:
    -   In MobileConnect, [set up a keyword for your transactional short code](https://help.salesforce.com/articleView?id=mc_moc_create_a_new_keyword.htm&type=5).
-   In Installed Packages, [create an API integration](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm) to get a client ID and client secret. Use the following email permissions settings for the API integration: write, read, and send. Use the following SMS permissions settings for the API integration: write, read, and send.

> Ensure that your client ID and secret are stored securely. Never expose this information on the client side via JavaScript or store it in a mobile application.
>
> Tip: To save the attributes sent in the API request, [create a triggered send data extension](https://help.salesforce.com/articleView?id=mc_co_create_triggered_send_data_extension.htm&type=5) in Email Studio.

## Send a Transactional Email Message

1.  Get an access token to generate API requests: [Server-to-server integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-s2s-client-credentials.htm) and [web and public app integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-app-auth-code.htm). To authenticate all your API requests, use an access token. You can reuse the access token for multiple requests before it expires.
2.  [Set up an email send definition via the API.](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createSendDefinition.htm) The send definition contains the message template and delivery configuration. You must reference a send definition with each message API request.
3.  [Send a transactional email.](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/sendMessageSingleRecipient.htm) Send your email to one or more recipients when triggered by an API.
4.  [Create an optional subscription.](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-get-started.htm) A subscription uses a webhook to send you analytics in real time about whether emails are sent, not sent, or bounced.

## Send a Transactional SMS Message

1.  Get an access token to generate API requests: [Server-to-server integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-s2s-client-credentials.htm) and [web and public app integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-app-auth-code.htm). To authenticate all your API requests, use an access token. You can reuse the access token for multiple requests before it expires.
2.  [Set up a transactional SMS definition via the API](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/createSMSSendDefinition.htm). The send definition contains the message template and delivery configuration. We recommend that you set up a definition for each messaging use case, such as one for two-factor authentication and one for order confirmations. You must reference a send definition with each outbound SMS send API request.
3.  [Send a transactional SMS](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/sendSMSMessageSingleRecipient.htm). Send your SMS to one or more recipients when triggered by the API.
4.  [Create an optional subscription.](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/ens-get-started.htm) A subscription uses a webhook to send you analytics in real time about whether SMS messages are sent, not sent, or bounced.
