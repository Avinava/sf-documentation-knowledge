---
title: "Service Router"
domain: cpq-dev-api
topic: service-router
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.721Z
estimatedTokens: 405
keywords: [Service, Router, SBQQ.ServiceRouter, Apex, serving, entry, point, API, calls, made, code, Visualforce, Remoting, REST, callouts]
---

# Service Router

> SBQQ.ServiceRouter is a global Apex class serving as a single entry point for all API
  calls. You can use it for calls made by Apex code, Visualforce Remoting, or REST
  callouts.

# Service Router

SBQQ.ServiceRouter is a global Apex class serving as a single entry point for all API calls. You can use it for calls made by Apex code, Visualforce Remoting, or REST callouts.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


SBQQ.ServiceRouter contains three global methods.

-   global static String read(String reader, String uid)
-   global static String load(String loader, String uid, String context)
-   global static String save(String saver, String model)

Each method accepts the name of a service provider, such as SBQQ.ProductAPI.ProductLoader as its first parameter. This lets Salesforce CPQ route the API request to the appropriate internal handler. The internal handler isn’t global and can’t be called directly by code outside the Salesforce CPQ package.

Use the read() method only when it needs a simple unique ID as input. For example, you could use read() when querying for a quote from the database. Provide the quote’s ID as the request and, and read() returns the QuoteModel object.

Use the load() method when you need more input information than a simple unique ID, but don’t need to change anything in the database. For example, you could use load() if you wanted to load products for a given currency code and pricebook ID. The load() method passes the unique ID as the second parameter. It then passes the extra information as a serialized JSON string in the third parameter.

Use the save() method when you save a model to the database, such as when you save a quote. The save() method passes the model as a serialized JSON string in the second parameter.
