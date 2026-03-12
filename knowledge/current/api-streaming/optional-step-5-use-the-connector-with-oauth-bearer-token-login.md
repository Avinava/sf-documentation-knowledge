---
title: "(Optional) Step 5: Use the Connector with OAuth Bearer Token
            Login"
domain: api-streaming
topic: optional-step-5-use-the-connector-with-oauth-bearer-token-login
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.259Z
estimatedTokens: 750
keywords: [Step, Connector, OAuth, Bearer, Token, Login, authentication, alternative, username, password, requires]
---

# (Optional) Step 5: Use the Connector with OAuth Bearer Token
            Login

> You can use the connector with OAuth authentication as an alternative to username and
        password authentication. This step is optional and requires an OAuth token.

# (Optional) Step 5: Use the Connector with OAuth Bearer Token Login

You can use the connector with OAuth authentication as an alternative to username and password authentication. This step is optional and requires an OAuth token.

Obtain an OAuth bearer access token for your Salesforce user. You supply this access token in the connector example.

See [Set Up Authorization with OAuth 2.0](atlas.en-us.api_streaming.meta/api_streaming/code_sample_auth_oauth.htm). Also see [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US).

Let’s run an example that uses OAuth bearer token login.

1.  In the /src/main/java/com/salesforce/emp/connector/example folder, open the [BearerTokenExample.java](https://github.com/forcedotcom/EMP-Connector/blob/master/src/main/java/com/salesforce/emp/connector/example/BearerTokenExample.java) Java source file.
2.  Run the BearerTokenExample class, and provide the following argument values.

    | Argument | Value |
    | --- | --- |
    | url | URL of the Salesforce instance of the logged-in user |
    | token | The access token returned by the OAuth authentication flow |
    | channel | The channel name for the PushTopic: /topic/InvoiceStatementUpdatesNoteThis quick start is based on a PushTopic event. Alternatively, you can use EMP Connector to listen to any event type. The following lists channel name formats for a sample of streaming events available in the Lightning Platform.Platform eventFor a custom platform event—/event/EventName__eFor a standard platform event—/event/EventNameFor a custom channel—/event/ChannelName__chnChange Data Capture eventFor all change events—/data/ChangeEventsFor a specific standard object—/data/ObjectNameChangeEventFor a specific custom object—/data/CustomObjectName__ChangeEventFor a custom channel—/data/ChannelName__chnPushTopic event/topic/PushTopicNameGeneric event/u/notifications/GenericStreamingChannel |

    Optionally, to receive different events, you can include a replay ID as the last argument. Valid values are:

    -   –1 — Get all new events sent after subscription. This option is the default.
    -   –2 — Get all new events sent after subscription and all past events within the retention window. Use -2 sparingly. If a large volume of event messages is stored, retrieving all event messages can slow performance.
    -   Specific number — Get all events that occurred after the event with the specified replay ID.

3.  In a browser window, create or modify an invoice statement. After you create or change data that corresponds to the query in your PushTopic, the output looks similar to the following.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

    #### Note

    If you’re listening to another event type, the output would look a bit different. Some events require that you publish the notification instead of Salesforce, such as with platform events.

## Code Examples

```
Subscribed: Subscription [/topic/InvoiceStatementUpdates:-1]
Received:
{event={createdDate=2016-12-12T22:31:48.035Z, replayId=1, type=created}, sobject={Status__c=Open, Id=a070P00000pn0hyQAA, Name=INV-0001, Description__c=blah}}
Received:
{event={createdDate=2016-12-12T22:32:06.440Z, replayId=2, type=updated}, sobject={Status__c=Negotiating, Id=a070P00000pn0hyQAA, Name=INV-0001, Description__c=blah}}
Received:
{event={createdDate=2016-12-12T22:32:57.404Z, replayId=3, type=created}, sobject={Status__c=Open, Id=a070P00000pn0lfQAA, Name=INV-0002, Description__c=Laptops and accessories.}}
```

## Related Topics

- Set Up Authorization with OAuth 2.0 (atlas.en-us.api_streaming.meta/api_streaming/code_sample_auth_oauth.htm)
