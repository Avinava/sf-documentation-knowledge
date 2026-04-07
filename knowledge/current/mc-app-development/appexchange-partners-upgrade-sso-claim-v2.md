---
title: "AppExchange Partners, Upgrade SSO Claim v2"
domain: mc-app-development
topic: appexchange-partners-upgrade-sso-claim-v2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:26.200Z
estimatedTokens: 541
keywords: [AppExchange, Partners, Upgrade, SSO, Claim, instructions, apply, multi-tenant, applications, apps, Decoded, JWT, Items]
---

# AppExchange Partners, Upgrade SSO Claim v2

> These instructions apply only to multi-tenant applications, such as apps on AppExchange.

# AppExchange Partners, Upgrade SSO Claim v2

> These instructions apply only to multi-tenant applications, such as apps on AppExchange.

Ensure that your multi-tenant applications are prepared to adopt the dynamic, tenant-specific endpoints returned in the Claim v2 JWT for new customers on an instance other than S1 through S10. For customers on S1 through S10, your multi-tenant applications continue to make calls against the legacy ExactTarget endpoints.

To support customers using tenant-specific Marketing Cloud endpoints, your app must:

-   Use the SSO Claim v2 JSON Web Token, or JWT, found on the Marketing Cloud App component. To update your app, contact your Partner Account Manager and see [Upgrade SSO Claim Version](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/upgrade-sso.htm).
-   Correctly consume the Claim v2 JWT with tenant-specific endpoints. Use the following example JSON as a guide.

For REST API requests, make sure that your app constructs its requests using the dynamic, customer-specific values for the authEndpoint and the apiEndpointBase parameters.

For SOAP API requests, make a REST call to request an access token. Then call the [/platform/v1/endpoints route](https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-apis.meta/mc-apis/getendpoint.htm) to discover the customer's SOAP endpoint.

## Decoded JWT Before and After Upgrade

![Example Claims v2 JWT before without tenant-specific endpoints and after with tenant-specific endpoints](/docs/resources/img/en-us/noversion?doc_id=images%2FClaimsv2JWT_sidebyside_Oct2018Release_10-31.png&folder=mc-app-development)

## Related Items

-   [Upgrade SSO Claim Version](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/upgrade-sso.htm)
-   [Single Sign-On](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/single-sign-on.htm)
-   [Explanation of Decoded JWT](atlas.en-us.noversion.mc-app-development.meta/mc-app-development/explanation-decoded-jwt.htm)
-   [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)

## Related Topics

- Upgrade SSO Claim Version (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/upgrade-sso.htm)
- Single Sign-On (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/single-sign-on.htm)
- Explanation of Decoded JWT (atlas.en-us.noversion.mc-app-development.meta/mc-app-development/explanation-decoded-jwt.htm)
