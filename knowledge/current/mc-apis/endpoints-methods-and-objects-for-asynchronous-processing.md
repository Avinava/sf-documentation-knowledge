---
title: "Endpoints, Methods, and Objects for Asynchronous Processing"
domain: mc-apis
topic: endpoints-methods-and-objects-for-asynchronous-processing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:15.353Z
estimatedTokens: 333
keywords: [Endpoints, Asynchronous, Processing, sure, support, SOAP, API, Tenant's, Items]
---

> Make sure the endpoints, methods, and objects you use support asynchronous processing.

# Endpoints, Methods, and Objects for Asynchronous Processing

Make sure the endpoints, methods, and objects you use support asynchronous processing.

## SOAP API with Your Tenant's Endpoints

All instances: [https://YOUR\_SUBDOMAIN.soap.marketingcloudapis.com](https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com)

## Methods

These methods support asynchronous processing.

-   Create, passing a properly configured CreateOptions object
-   Update, passing a properly configured UpdateOptions object
-   Delete, passing a properly configured DeleteOptions object
-   Perform, passing a properly configured PerformOptions object

## Objects

All objects available in the WSDL can be processed asynchronously. Use CustomerKey or SubscriberKey instead of ID or ObjectID for objects that you include in a conversation.

These objects have full CRUD Support with CustomerKey or SubscriberKey.

-   TriggeredSendDefinition
-   ImportDefinition
-   EmailSendDefinition
-   SubscriberKey
-   DataExtension

These objects are commonly used for asynchronous processing.

-   TriggeredSend
-   SMSTriggeredSend
-   VoiceTriggeredSend
-   DataExtensionObject

## Related Items

-   [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
