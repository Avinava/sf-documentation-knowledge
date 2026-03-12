---
title: "Clients and Cookies for Streaming API"
domain: api-streaming
topic: clients-and-cookies-for-streaming-api
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.386Z
estimatedTokens: 309
keywords: [Clients, Cookies, Streaming, API, ensure, continuity, instance, refreshes, org, migrations, recommend, Domain, login, URL]
---

# Clients and Cookies for Streaming API

> To ensure
        continuity during instance refreshes and org migrations, we recommend using your My Domain
        login URL with Streaming API.

# Clients and Cookies for Streaming API

The client you create to work with the Streaming API must obey the standard cookie protocol with the server. The client must accept and send the appropriate cookies for the domain and URI path, for example https://MyDomainName.my.salesforce.com/cometd.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

To ensure continuity during instance refreshes and org migrations, we recommend using your My Domain login URL with Streaming API.

Streaming API requirements on clients:

-   If the content of the post is JSON, the "Content-Type: application/json" header is required on all calls to the cometd servlet.
-   A header containing the Salesforce session ID or OAuth token is required. For example, Authorization: Bearer sessionId.
-   The client must accept and send back all appropriate cookies for the domain and URI path. Clients must obey the standard cookie protocol with the server.
-   The subscribe response and other responses can contain the following fields. These fields aren't contained in the CometD specification.
    -   EventType contains either created or updated.
    -   CreatedDate contains the event's creation date.
