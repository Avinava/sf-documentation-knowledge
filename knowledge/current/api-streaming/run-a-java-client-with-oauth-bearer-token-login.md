---
title: "Run a Java Client with OAuth Bearer Token Login"
domain: api-streaming
topic: run-a-java-client-with-oauth-bearer-token-login
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.303Z
estimatedTokens: 534
keywords: [Run, Java, Client, OAuth, Bearer, Token, Login, uses, EMP, Connector, subscribe, channel, authentication]
---

# Run a Java Client with OAuth Bearer Token Login

> Run a Java client that uses EMP Connector to subscribe to the channel with OAuth
        authentication.

# Run a Java Client with OAuth Bearer Token Login

Run a Java client that uses EMP Connector to subscribe to the channel with OAuth authentication.

Obtain an OAuth bearer access token for your Salesforce user. You supply this access token in the connector example.

See [Set Up Authorization with OAuth 2.0](atlas.en-us.api_streaming.meta/api_streaming/code_sample_auth_oauth.htm). Also see [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US).

Let’s run an example that uses OAuth bearer token login.

1.  Get the EMP Connector project from GitHub. See [Step 3: Download and Build the Project](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_download_jars.htm "Before you can run the connector examples, download the Java source files and build the Java project.").
2.  In the /src/main/java/com/salesforce/emp/connector/example folder, open the [BearerTokenExample.java](https://github.com/forcedotcom/EMP-Connector/blob/master/src/main/java/com/salesforce/emp/connector/example/BearerTokenExample.java) Java source file.
3.  Run the BearerTokenExample class, and provide the following argument values.

    | Argument | Value |
    | --- | --- |
    | username | Username of the logged-in user. |
    | password | Password for the username (or logged-in user). |
    | channel | /u/notifications/ExampleUserChannel |

    Optionally, to receive different events, you can include a replay ID as the last argument. Valid values are:

    -   –1 — Get all new events sent after subscription. This option is the default.
    -   –2 — Get all new events sent after subscription and all past events within the retention window. Use -2 sparingly. If a large volume of event messages is stored, retrieving all event messages can slow performance.
    -   Specific number — Get all events that occurred after the event with the specified replay ID.

4.  When you run this client app and generate notifications using the REST resource, the output will look something like:

    ```

    ```


In the next step, you learn how to generate notifications using REST.

## Code Examples

```
Subscribed: Subscription [/u/notifications/ExampleUserChannel:-1]
Received:
{payload=Broadcast message to all subscribers, event={createdDate=2016-12-13T00:57:36.020Z, replayId=1}}
Received:
{payload=Another message, event={createdDate=2016-12-13T00:58:16.591Z, replayId=2}}
```

## Related Topics

- Set Up Authorization with OAuth 2.0 (atlas.en-us.api_streaming.meta/api_streaming/code_sample_auth_oauth.htm)
- Step 3: Download and Build the Project (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_download_jars.htm)
