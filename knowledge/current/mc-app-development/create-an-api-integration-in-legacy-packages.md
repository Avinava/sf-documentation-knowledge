---
title: "Create an API Integration in Legacy Packages"
domain: mc-app-development
topic: create-an-api-integration-in-legacy-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:21.248Z
estimatedTokens: 279
keywords: [API, Integration, Legacy, Packages, August, Marketing, Cloud, removed, ability, new, enhanced, authentication, requests, Items]
---

> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages. You can still use legacy authentication and API requests with existing legacy packages.

# Create an API Integration in Legacy Packages

> As of August 1, 2019, Marketing Cloud has removed the ability to create legacy packages. All new packages are enhanced packages. You can still use legacy authentication and API requests with existing legacy packages.

1.  Navigate to an existing legacy package.
2.  Under Components, click **Add Component**.
3.  Select **API Integration**.
4.  Assign the appropriate scope for your integration.
    -   **Perform server-to-server requests** is automatically selected for all API Integrations.
    -   If this package contains a Marketing Cloud app, select **Perform requests on behalf of the user**.
    -   Select the Marketing Cloud scope for your API calls. Assign only the scope your package needs.
5.  Save the component.

### Related Items

-   [Installed Packages Scope](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/data-access-permissions.htm)
-   [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
