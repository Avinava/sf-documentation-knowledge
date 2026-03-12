---
title: "Learn More About EMP Connector"
domain: api-streaming
topic: learn-more-about-emp-connector
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.282Z
estimatedTokens: 549
keywords: [EMP, Connector, Let’s, take, closer, look, components, Authenticating, Listening, Events, Subscribing, Channel, Debug, Logging]
---

# Learn More About EMP Connector

> Let’s take a closer look at the components of EMP Connector.

# Learn More About EMP Connector

Let’s take a closer look at the components of EMP Connector.

## Authenticating

The LoginExample class logs in to production by default using the passed-in user-credential information.

After initial authentication, LoginExample reauthenticates the user if the authentication becomes invalid, such as when a Salesforce session is invalidated or an access token is revoked. LoginExample listens to 401::Authentication invalid error messages that Streaming API sends when the authentication is no longer valid. The class reauthenticates after a 401 error is received. The token provider performs the reauthentication and is set using the EmpConnector.setBearerTokenProvider() method.

```

```

For OAuth authentication, the BearerTokenExample uses the BayeuxParameters constructor to override the methods in the BayeuxParameters class and provides the token and URL values.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

BearerTokenExample doesn’t support reauthentication, but you can add this support. Reauthentication is implemented only in LoginExample and DevLoginExample.

## Listening to Events

To listen to events, the connector uses the Java event in a lambda expression. This statement prints the event message to the output for each received event notification. Place this statement before the statement that subscribes to the channel.

```

```

## Subscribing to a Channel

The EmpConnector class is the main class that exposes the functionality of starting a connection and subscribing. The class contains functions to create a connection, subscribe to a channel, cancel a subscription, and stop a connection.

```

```

To end a subscription, call these functions.

```

```

## Debug Logging

To aid in debugging, the LoggingListener class logs Bayeux messages to the console. BearerTokenExample and DevLoginExample use logging but not LoginExample. DevLoginExample is part of the EMP Connector GitHub project, but is not covered in this walkthrough. For more information, see the [EMP Connector Readme page](https://github.com/forcedotcom/EMP-Connector "HTML (New Window)").

## Code Examples

```apex
BearerTokenProvider tokenProvider = new BearerTokenProvider(() -> {
    try {
        return login(argv[0], argv[1]);
    } catch (Exception e) {
        e.printStackTrace(System.err);
        System.exit(1);
        throw new RuntimeException(e);
    }
});

BayeuxParameters params = tokenProvider.login();
// . . . 
connector.setBearerTokenProvider(tokenProvider);
```

```apex
BayeuxParameters params = new BayeuxParameters() {

    @Override
    public String bearerToken() {
        return "<token>";
    }

    @Override
    public URL host() {
        try {
            return new URL("<URL>");
        } catch (MalformedURLException e) {
            throw new IllegalArgumentException(
                String.format("Unable to create url: %s", argv[0]), e);
        }
    }
};
```

```apex
Consumer<Map<String, Object>> consumer = event -> System.out.println(
        String.format("Received:
%s", JSON.toString(event)));
```

```
// Instantiate the EMP connector
EmpConnector connector = new EmpConnector(params);

connector.setBearerTokenProvider(tokenProvider);

// Wait for handshake with Streaming API
connector.start().get(5, TimeUnit.SECONDS);

// Subscribe to a channel
// Block and wait for the subscription to succeed for 5 seconds
TopicSubscription subscription = connector.subscribe("<Channel_Name>", 
    replayFrom, consumer).get(5, TimeUnit.SECONDS);
```

```
// Cancel a subscription
subscription.cancel();

// Stop the connector
connector.stop();
```
