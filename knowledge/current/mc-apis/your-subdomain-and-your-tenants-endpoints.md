---
title: "Your Subdomain and Your Tenant's Endpoints"
domain: mc-apis
topic: your-subdomain-and-your-tenants-endpoints
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:25.897Z
estimatedTokens: 657
keywords: [Subdomain, Tenant's, Endpoints, customers, S10, continue, legacy, recommend, tenant-specific, Marketing, Cloud, improved, performance, Locate, API]
---

# Your Subdomain and Your Tenant's Endpoints

> While customers on S1 through S10 can continue to use the legacy endpoints, we recommend that you use the tenant-specific Marketing Cloud endpoints for improved performance.

# Your Subdomain and Your Tenant's Endpoints

> While customers on S1 through S10 can continue to use the legacy endpoints, we recommend that you use the tenant-specific Marketing Cloud endpoints for improved performance.

Marketing Cloud automatically assigns a unique, system-generated subdomain to each of its tenants. A tenant represents your top-level Enterprise account and its business units, your Core account, your top-level Agency account, or your Client account, [depending on your tenant type](https://help.salesforce.com/articleView?id=mc_overview_tenant_types.htm&type=5).

Your subdomain is represented by a 28-character string starting with the letters "mc". When your subdomain is appended to Marketing Cloud APIs, it creates endpoints that are unique to your tenant. Use these endpoints to improve the performance of your API requests.

For example, Northern Trail Outfitters’ tenant has this subdomain: mc563885gzs27c5t9-63k636ttgm. These are their endpoints:

-   REST API endpoint: mc563885gzs27c5t9-63k636ttgm.rest.marketingcloudapis.com
-   SOAP API endpoint: mc563885gzs27c5t9-63k636ttgm.soap.marketingcloudapis.com

## Locate Your Subdomain and Endpoints

Locate your tenant’s endpoints, which contain your subdomain, in Marketing Cloud and use them in your API requests. Only your tenant can use your endpoints. No other Marketing Cloud customer can use them for their API requests.

> You can use your subdomain only with the marketingcloudapis.com endpoint structure. You can’t use exacttargetapis.com or exacttarget.com with your subdomain to create your tenant’s endpoints.

### API Integrations with an Access Token

For SOAP and REST API integrations that use access tokens for authorization, locate your tenant’s SOAP, REST, and Authentication Base URIs on the API Integration component of packages created in Installed Packages.

### API Integrations with a Username and Password

For SOAP API integrations that use a username and password for authentication, locate your tenant’s SOAP WSDL and SOAP Service Endpoint either under Account Settings in Setup or under User Settings in Cloud Preferences. API User must be enabled.

## Related Items

-   [Marketing Cloud Tenant Types](https://help.salesforce.com/articleView?id=mc_overview_tenant_types.htm&type=5)
-   [Server-to-Server Integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-s2s-client-credentials.htm)
-   [Web and Public App Integrations](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/integration-app-auth-code.htm)
