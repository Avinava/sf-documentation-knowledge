---
title: "REST Request Class"
domain: mobile-sdk
topic: rest-request-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.175Z
estimatedTokens: 219
keywords: [REST, RestRequest, uncomplicated, way, network, calls, container, metadata, rarely, manipulate, manually, itself, formats, transmission, over]
---

# REST Request Class

> The RestRequest interface provides an uncomplicated way
      to make network calls. This class is the container for your request metadata, but you rarely
      manipulate the request object manually. The request object itself formats its metadata for
      transmission over HTTP. To send your reque

# REST Request Class

| Swift | Objective-C |
| --- | --- |
| RestRequest | SFRestRequest |  |

The RestRequest interface provides an uncomplicated way to make network calls. This class is the container for your request metadata, but you rarely manipulate the request object manually. The request object itself formats its metadata for transmission over HTTP. To send your requests to the Salesforce server, the RestRequest object configures the network parameters and the REST API syntax. If the object was created for a Salesforce resource, the class knows how to calculate the endpoint. Otherwise, you configure a custom path.

RestRequest—not RestClient— provides methods for configuring a REST request that isn’t explicitly supported by Mobile SDK. For example, to use the Connect REST API or an external service, you manually create and configure a RestRequest object.
