---
title: "LoyaltyClient"
domain: loyalty
topic: loyaltyclient
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:52.530Z
estimatedTokens: 149
keywords: [LoyaltyClient, authentication, network, requests, uses, ForceAuthenticator, handle, access, tokens, Salesforce, API, creates, retrofit, instance, invoke]
---

# LoyaltyClient

> Create authentication network requests by using the LoyaltyClient class. LoyaltyClient uses ForceAuthenticator, which is an interface that defines the methods
  to handle access tokens in the Salesforce API. LoyaltyClient
  creates a retrofit instance to invoke Force APIs.

# LoyaltyClient

Create authentication network requests by using the LoyaltyClient class. LoyaltyClient uses ForceAuthenticator, which is an interface that defines the methods to handle access tokens in the Salesforce API. LoyaltyClient creates a retrofit instance to invoke Force APIs.

| Available in: all editions that have Loyalty Management enabled |
| --- |


Use this signature to define the LoyaltyClient class.

public final class LoyaltyClient extends NetworkClient

## getNetworkClient Method

Gives an implementation of the retrofit interface using an instance of retrofit.

```

```

## Code Examples

```
LoyaltyApiInterface getNetworkClient()
```
