---
title: "Installed Package Definitions"
domain: mc-app-development
topic: installed-package-definitions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.408Z
estimatedTokens: 1080
keywords: [Installed, Package, Definitions, Items]
---

# Installed Package Definitions

| Term | Definition |
| --- | --- |
| App Center | Previously, an external site for managing Marketing Cloud packages. Packages are now installed and managed in Marketing Cloud Setup. |
| Component | An installed package comprises one or more components. Each component contains basic configuration details for the API integration or app that you are creating. |
| Enhanced Package | An enhanced package includes the following functionality and enhancements. All installed packages created after August 1, 2019 are enhanced packages.OAuth 2.0 flows for public apps, web apps, and server-to-server API integrations.Single server-to-server integration to work on behalf of all your business units. |
| JWT signing secret | Use the JWT signing secret on the installed package to validate the signature for the JWT sent on a Marketing Cloud app. Journey Builder also uses the JWT signing secret from the package containing the activity as the default signing key for the JWT. The JWT signing secret was called App Signature in App Center. |
| Legacy Package | One of two types of installed packages. All installed packages created before the Marketing Cloud January 2019 release are legacy packages. All installed packages created after August 1, 2019 are enhanced packages. Legacy packages use legacy functionality and can make requests to legacy endpoints, such as v1/requestToken for authentication. |
| Package | A bundling of one or more components, including a Marketing Cloud app, Journey Builder entry sources and activities, and API Integrations. A package is installed from AppExchange or created in Marketing Cloud. |
| Package ID | Unique identifier for the package. The package ID was called App ID in App Center. |
| Public App Integration | A type of OAuth 2.0 API integration in enhanced packages. A public app allows applications that can’t securely store a client secret to integrate with Marketing Cloud on behalf of an end user using the intersection of the app’s and the user’s permissions. Examples of public apps include a single-page application or a native mobile application. |
| Scope | Your package only accesses the scope you specify when creating the package. Scope was called Data Access in App Center. |
| Server-to-Server Integration | A type of OAuth 2.0 API integration in enhanced packages. A server-to-server integration performs tasks on behalf of the integration without an end-user context, user interaction, or user interface. |
| Source Account | Name of the business unit that created this package. |
| Status | In Development - Status for any package that isn't on AppExchange.Published - Package is available on AppExchange. |
| Tenant | Depending on your tenant type, your top-level Enterprise account and its business units, your Core account, your top-level Agency account, or your Client account. |
| Tenant-specific endpoint (TSE) | An endpoint that uses a tenant-specific subdomain. An alternative to legacy endpoints that include www.exacttargetapis.com. There are three types of TSEs for APIs:Auth Base URI - https://YOUR_SUBDOMAIN.auth.marketingcloudapis.comREST Base URI - https://YOUR_SUBDOMAIN.rest.marketingcloudapis.comSOAP Base URI - https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com |
| Tenant-specific subdomain, or subdomain | A unique system-generated 28-character string that represents a customer’s tenant. |
| Type | Custom - You or another user in your enterprise created this package.Third Party - This package came from AppExchange or an external website. |
| Unique Key | This read-only key is auto-assigned to custom Journey Builder activities and events when they are created. Journey Builder automatically uses this value as the applicationExtensionKey on the activity and overrides the applicationExtensionKey in the config.json if it is incorrect. |
| Web App Integration | A type of OAuth 2.0 API integration in enhanced packages. A web app allows applications that can securely store a client secret to integrate with Marketing Cloud on behalf of an end user using the intersection of the app’s and the user’s permissions. |

## Related Items

-   [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
