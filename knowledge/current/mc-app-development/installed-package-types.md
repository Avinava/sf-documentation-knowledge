---
title: "Installed Package Types"
domain: mc-app-development
topic: installed-package-types
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:21.401Z
estimatedTokens: 746
keywords: [General, Installed, Package, Marketing, Cloud, two, packages, enhanced, functionality, legacy, Various, easy, tell, whether, you’re, looking, banner, top, indicating, it’s, Comparing, API, Integration, App, Items]
---

> Marketing Cloud has two types of installed packages: packages with enhanced functionality and packages with legacy functionality. Various details make it easy to tell whether you’re looking at a legacy package or enhanced package. All legacy packages have a banner at the top indicating that it’s a l

# Installed Package Types

Marketing Cloud has two types of installed packages: packages with enhanced functionality and packages with legacy functionality. Various details make it easy to tell whether you’re looking at a legacy package or enhanced package. All legacy packages have a banner at the top indicating that it’s a legacy package and a Licenses tab. Enhanced packages have an Access tab.

We recommend creating packages with enhanced functionality to use the latest updates and enhancements, including OAuth 2.0 functionality.

> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages.

## Comparing Legacy and Enhanced Packages

### API Integration Component

|  | Legacy Packages | Enhanced Packages |
| --- | --- | --- |
| Grant Types | Legacy OAuth client credentials | OAuth 2.0 client credentials, OAuth 2.0 authorization code |
| API Integration Types | Legacy server-to-server | Public app, web app, server-to-server |
| Credentials | Client ID and client secret | Public apps – Client ID and authorization code; Web apps – Client ID, client secret, and authorization code; Server-to-server – Client ID and client secret |
| Access Token TTL | 1-hour time-to-live | 20-minute time-to-live |
| Business Unit Support | Unique credential set per business unit | Unique credential set per many business units |
| Endpoint | v1/requestToken | v2/token or v2/authorize |
| Host | exacttargetapis.com or marketingcloudapis.com | marketingcloudapis.com |

### Marketing Cloud App Component

|  | Legacy Packages | Enhanced Packages |
| --- | --- | --- |
| Login Endpoint | Marketing Cloud posts JWT to login endpoint and iframes into app | Marketing Cloud iframes into app |
| Acquire End User Details | JWT that was posted to app’s login endpoint | v2/userinfo endpoint |

### General

|  | Legacy Packages | Enhanced Packages |
| --- | --- | --- |
| Manage User Licensing | Supported on Licenses tab | Supported on Access tab |
| Assign User Licenses for API Integrations | Not supported | Supported for web and public app integrations |
| Manage Server-to-Server Integration Enablement | Not supported | Supported |
| Enable Server-to-Server Integration for Multiple Business Units | Not supported | Supported |

## Related Items

-   [Set Up Your Development Environment for Legacy Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/mc-dev-setup.htm)
-   [Set Up Your Development Environment for Enhanced Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-getting-started.meta/mc-getting-started/mc-dev-setup-enhanced.htm)
-   [API Integration](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/api-integration.htm)
-   [Manage Licensing for Installed Packages](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/license-installed-packages.htm)
