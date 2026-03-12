---
title: "Set Up Authentication for Developer Testing"
domain: api-streaming
topic: set-up-authentication-for-developer-testing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.179Z
estimatedTokens: 265
keywords: [Authentication, Developer, Testing, authorization, simple, recommended, code, quickly, However, recommend, OAuth, 2.0, production, environment, robust]
---

# Set Up Authentication for Developer Testing

> This
                authorization method is simple to use and recommended for testing your code quickly.
                However, we recommend that you use OAuth 2.0 in a production environment for more
                robust security. The OAuth authentication method with a connected app provides
 

# Set Up Authentication for Developer Testing

To set up authorization for developer testing:

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

#### Important

This authorization method is simple to use and recommended for testing your code quickly. However, we recommend that you use OAuth 2.0 in a production environment for more robust security. The OAuth authentication method with a connected app provides restricted access and other benefits.

1.  Log in using the SOAP API login() and get the session ID.
2.  Set up the HTTP authorization header using this session ID:

    ```

    ```

    The CometD endpoint requires a session ID on all requests, plus any additional cookies set by the Salesforce server.

    For more information, see [Step 4: Use the Connector with Username and Password Login](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_add_source.htm "Now that you’ve downloaded and built EMP Connector, use it to connect to CometD and subscribe to the PushTopic.").

## Code Examples

```
Authorization: Bearer sessionId
```

## Related Topics

- Step 4: Use the Connector with Username and Password Login (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_add_source.htm)
