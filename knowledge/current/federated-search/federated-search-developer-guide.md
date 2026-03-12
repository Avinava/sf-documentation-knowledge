---
title: "Federated Search Developer Guide"
domain: federated-search
topic: federated-search-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.719Z
estimatedTokens: 786
keywords: [Federated, Search, Developer, API, connects, Salesforce, connector, external, provider, data, repositories, searched, providers, partnered, provide]
---

# Federated Search Developer Guide

> The Federated Search API connects the Salesforce federated search connector to the
        external search provider. The API enables data from external repositories be searched and
        returned within Salesforce. External search providers have partnered with Salesforce to
        provide a search service that conforms to the Salesforce API.

# Federated Search Developer Guide

The Federated Search API connects the Salesforce federated search connector to the external search provider. The API enables data from external repositories be searched and returned within Salesforce. External search providers have partnered with Salesforce to provide a search service that conforms to the Salesforce API.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=federated_search)

#### Important

Use this API only if your company doesn’t have an existing search provider, such as Docurated, Swiftype, or Squirro search. If your company manages its own external data source, developers use this API to create a compliant external search provider.

This API follows the OpenSearch specification with optional Salesforce extensions. The external providers must conform to this API and remain fully compliant to the OpenSearch specification. As long as the external providers are compliant, any OpenSearch clients can query them at the same URL endpoint.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=federated_search)

#### Note

A Salesforce org trusts the target host only when presented with a certificate signed by a root Certification Authority (CA). For more information, including a list of trusted CAs, see the [SSL Certificates Salesforce Supports Knowledge article](https://help.salesforce.com/HTViewSolution?id=000007225&language=en_US).

The federated search connector sends an HTTPS GET request to the external search provider URL endpoint. The search request is encoded in UTF-8. The request includes the OAuth token in the request header bearer token in the authorization request header.

This request also sets the values of the URL template parameters, as defined by the OpenSearchDescription. The values include the search terms and the user identity. Other parameters can be part of the URL. The values also set the Salesforce ID, login, and email address of the user who issued the search query.

The external search provider is expected to respond within less than 1 second, up to a maximum of 120 seconds. After the time period expires, a timeout message is displayed. The admin can change the maximum delay when configuring the external data source.

The external search provider returns results in Atom or RSS format encoded in UTF-8, as defined by the OpenSearch and Atom and RSS specifications.

## More External Resources

-   [Set Up and Manage Federated Search Salesforce Help website](https://help.salesforce.com/articleView?id=search_federated_parent.htm&language=en_US)
-   [OpenSearch website](http://www.opensearch.org)
-   [Atom specification website](https://tools.ietf.org/html/rfc4287)
-   [RSS 2.0 specification website](https://validator.w3.org/feed/docs/rss2.html)
-   [Bearer Token specification for the authorization request header field website](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-23#section-2.1)
-   [E.123: Notation for national and international telephone numbers, email addresses, and web addresses website](http://www.itu.int/rec/T-REC-E.123/en)
