---
title: "Caching Policy in LWR Sites"
domain: exp-cloud-lwr
topic: caching-policy-in-lwr-sites
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:27.788Z
estimatedTokens: 590
keywords: [Caching, Policy, LWR, Sites, Experience, Cloud, heavy, improve, performance, scalability, live, site, Except, initial, document]
---

# Caching Policy in LWR Sites

> LWR sites in Experience Cloud make heavy use of caching to improve performance and
  scalability on the live site. Except for the initial document request and data API calls, all
  requests required to load a page are HTTP cacheable.

# Caching Policy in LWR Sites

LWR sites in Experience Cloud make heavy use of caching to improve performance and scalability on the live site. Except for the initial document request and data API calls, all requests required to load a page are HTTP cacheable.

When the site is published, the JavaScript resources are generated and persisted, and then served at runtime as static, immutable, and cacheable resources.

Any resource is publicly cacheable, provided it’s accessible through a public page in the site. If the Salesforce content delivery network (CDN) is enabled, publicly cacheable resources are cached in the CDN to further improve performance.

See [Serve Your Experience Cloud Site with the Salesforce Content Delivery Network (CDN)](https://help.salesforce.com/articleView?id=domain_mgmt_salesforce_cdn.htm&language=en_US) in Salesforce Help.

This table provides more detailed information about caching time to live (TTL) values.

| Resource | HTTP Caching Policy | Description |
| --- | --- | --- |
| Generated framework scripts, views, and components | 150 days | The site’s framework scripts, views, and components are generated and persisted when the site is published. If its contents change, the resource URL changes, which wipes the cache when the site is republished. |
| HTML document | 1 minute | HTML document caching is enabled only for orgs configured with Salesforce's CDN. See Enable CDN to Load Applications Faster.Salesforce first-party CDNs cache HTML document responses for 60 seconds. To prevent downstream impact, the response from the CDN has the cache headers set to private, must-revalidate, and max-age of 0.However, HTML document caching is disabled while a site is being published. We recommend publishing your site during off-peak hours to avoid serving a stale HTML document during the window of time after the site is published but before the max-age TTL expires. |
| Permissions | 5 minutes | Permissions scoped modules (@salesforce/userPermission/ and @salesforce/customPermission/) aren’t included in the HTML. Instead, they’re fetched as separate resources. These resources are cacheable for 5 minutes on a per-user basis. |
| Org assets | 1 day | Requests to Salesforce static resources (@salesforce/staticResource/) and content assets (@salesforce/contentAsset/) have max-age cache headers set to 1 day. |
