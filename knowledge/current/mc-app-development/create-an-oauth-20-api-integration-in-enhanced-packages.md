---
title: "Create an OAuth 2.0 API Integration in Enhanced Packages"
domain: mc-app-development
topic: create-an-oauth-20-api-integration-in-enhanced-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.962Z
estimatedTokens: 271
keywords: [OAuth, 2.0, API, Integration, Enhanced, Packages, Items]
---

# Create an OAuth 2.0 API Integration in Enhanced Packages

# Create an OAuth 2.0 API Integration in Enhanced Packages

1.  [Create an installed package](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/install-packages.htm) with enhanced functionality, or navigate to an existing package created with enhanced functionality.
2.  Under Components, click **Add Component**.
3.  Select **API Integration**. After you add an API integration component, it can’t be removed.
4.  Select an integration type.
5.  Set the properties for the integration, including scopes and the redirect URIs for web and public apps. You can’t use a redirect URI that is URL encoded. You can use `https://127.0.0.1:80/` as a valid redirect URI for local testing.
6.  Save the component.

## Related Items

-   [Installed Packages Scope](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/data-access-permissions.htm)
-   [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
