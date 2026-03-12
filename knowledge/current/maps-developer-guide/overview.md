---
title: "Overview"
domain: maps-developer-guide
topic: overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:53.839Z
estimatedTokens: 376
keywords: [sales, service, teams, spend, time, building, customer, relationships, less, road, fine-tune, Salesforce, Maps, implementation, Apex]
---

# Overview

> Get your sales and service teams to spend more time building customer relationships and
  less time on the road when you fine-tune your Salesforce Maps implementation using Apex. For
  example, return estimated travel distances and times between locations, get geographical
  coordinates for addresses, and retrieve geometric data for areas and perimeters.

# Overview

Get your sales and service teams to spend more time building customer relationships and less time on the road when you fine-tune your Salesforce Maps implementation using Apex. For example, return estimated travel distances and times between locations, get geographical coordinates for addresses, and retrieve geometric data for areas and perimeters.

## API Performance Considerations and Guidelines

If your processes rely heavily on the API, you can experience decreased performance and server errors. Apex methods don’t count against org API limits.

| Server Error | Potential Resolution |
| --- | --- |
| (5xx) or throttling | Retry your requests.For better flow control, you can implement an exponential back-off algorithm. Such algorithms use progressively longer wait times between retries for consecutive error responses. Implement a maximum delay interval and a maximum number of retries.You can base those maximums on performed operations and other local factors, such as throughput capacities or request throttling. |
| (4xx) | Revise your requests to correct any problems before trying again. |

#### See Also

-   [*Salesforce Help:* Salesforce Maps](https://help.salesforce.com/articleView?id=sales.salesforce_maps_intro.htm&type=5&language=en_US "Salesforce Help: Salesforce Maps - HTML (New Window)")

-   [*Apex Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm "Apex Developer Guide - HTML (New Window)")
