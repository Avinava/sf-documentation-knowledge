---
title: "Community Input"
domain: chatterapi
topic: community-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.353Z
estimatedTokens: 420
keywords: [Community, Input, Experience, Cloud, site]
---

# Community Input

> Create an Experience Cloud site.

# Community Input

Create an Experience Cloud site.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the site. | Optional | 46.0 |
| name | String | Name of the site. | Required | 46.0 |
| templateName | String | Name of the Experience Builder template for the site.Use the Experience Builder Templates resource to get a list of available templates and their names. | Required | 46.0 |
| templateParams | Map<String, String> | Map of template-specific parameters. Valid values are:"AuthenticationType" : "AUTHENTICATED""AuthenticationType" : "UNAUTHENTICATED"(version 52.0–55.0)"AuthenticationType" : "AUTHENTICATED_WITH_PUBLIC​_ACCESS""CreateStoreDefaults" : "ALL""CreateStoreDefaults" : "NONE""WebstoreId" : "WebstoreId"AuthenticationType values are valid when creating an Experience Cloud site using the Build Your Own (LWR) template.CreateStoreDefaults values are valid when creating an Experience Cloud site using the B2B or D2C store template.The WebstoreId value is valid when creating an Experience Cloud site using the B2B Aura, B2B LWR, and D2C templates. The store can't already be associated to a site, and the store type field must match the template. The B2B store type can be used with the B2B Aura and B2B LWR templates, and the D2C store type can be used with the D2C template. | Optional | 52.0 |
| urlPathPrefix | String | URL prefix for the site. For example, in the site URL MyDomainName.my.site.com/​customers, customers is the UrlPathPrefix. | Required if you already have a site that doesn’t have a urlPathPrefix | 46.0 |

## Code Examples

```
{
   "name":"The Capricorn Cafe",
   "urlPathPrefix":"capricorncafe",
   "templateName":"B2B Commerce Template",
   "templateParams":{"CreateStoreDefaults":"ALL"},
   "description":"Coffee and coffee products for the most discerning tastes."
}
```

## Related Topics

- Experience Builder Templates (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_templates.htm)
