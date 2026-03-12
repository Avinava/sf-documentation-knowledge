---
title: "Constraints"
domain: federated-search
topic: constraints
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.705Z
estimatedTokens: 305
keywords: [Constraints, Because, API, follows, OpenSearch, specification, requires, elements, additional, Salesforce, extensions, External, search, providers, conform]
---

# Constraints

> Because this API follows the OpenSearch specification, the API requires the same
  elements as the OpenSearch specification with additional optional Salesforce extensions. External
  search providers who conform to this API remain fully compliant to the OpenSearch specification
  and can be queried by any OpenSearch client at the same URL endpoint. The API supports Atom and
  RSS results, with UTF-encoding. However, there are some limitations to this API.

# Constraints

Because this API follows the OpenSearch specification, the API requires the same elements as the OpenSearch specification with additional optional Salesforce extensions. External search providers who conform to this API remain fully compliant to the OpenSearch specification and can be queried by any OpenSearch client at the same URL endpoint. The API supports Atom and RSS results, with UTF-encoding. However, there are some limitations to this API.

| Element | Constraint |
| --- | --- |
| <OpenSearchDescription> | Required exactly one time. The Salesforce Federated Search namespace http://salesforce.com/2016/federatedsearch/1.0 is optional if it’s used in the OpenSearchDescription. |
| <Url type=”application/atom+xml” rel=”results”> OR <Url type=”application/rss+xml” rel=”results”> | Required exactly one time. Other <Url> elements for type and rel values can be included. You must have exactly one <Url> with either type=”application/atom+xml” or type=”application/rss+xml”, and rel=”results”. API version 1 supports only the HTTPS request GET method. |
| <InputEncoding> and <OutputEncoding> | You must declare at least UTF-8, which is the default encoding when those elements are omitted. |
