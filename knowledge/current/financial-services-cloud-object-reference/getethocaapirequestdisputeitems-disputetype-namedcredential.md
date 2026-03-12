---
title: "getEthocaAPIRequest(disputeItems, disputeType,
      namedCredential)"
domain: financial-services-cloud-object-reference
topic: getethocaapirequestdisputeitems-disputetype-namedcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:28.030Z
estimatedTokens: 253
keywords: [getEthocaAPIRequest, disputeItems, disputeType, namedCredential, Prepares, payload, dispute, flow, integration, provider, retrying, necessary]
---

# getEthocaAPIRequest(disputeItems, disputeType,
      namedCredential)

> Prepares the payload used in the dispute flow and sends it to the integration provider,
    retrying if necessary.

# getEthocaAPIRequest(disputeItems, disputeType, namedCredential)

Prepares the payload used in the dispute flow and sends it to the integration provider, retrying if necessary.

## Signature

public static HttpRequest getEthocaAPIRequest(List<DisputeItem> disputeItems, String disputeType, String namedCredential)

## Parameters

disputeItems

Type: List<DisputeItem>

Disputed transaction data in the following JSON format:

```

```

The keys correspond to DisputeItem object fields.

disputeType

Type: String

A value of the Dispute object’s DisputeType picklist field:

-   Processing Error
-   Consumer Dispute
-   Fraud

namedCredential

Type: String

The named credential for accessing the integration provider.

## Return Value

Type: [HttpRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm)

Returns an HttpRequest that includes the disputed transaction data and sends it to the integration provider, retrying if necessary.

## Code Examples

```
[
  {
    "transaction_date": "2023-01-01",
    "transaction_identifier": "1",
    "transaction_amount": 213.1,
    "transaction_description": "t1"
  },
  {
    "transaction_date": "2023-01-01",
    "transaction_identifier": "2",
    "transaction_amount": 150.94,
    "transaction_description": "t2"
  }
]
```
