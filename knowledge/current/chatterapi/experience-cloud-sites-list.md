---
title: "Experience Cloud Sites List"
domain: chatterapi
topic: experience-cloud-sites-list
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.652Z
estimatedTokens: 647
keywords: [Experience, Cloud, Sites, context, user, site]
---

# Experience Cloud Sites List

> Get a list of all Experience Cloud sites available to the context
      user. Create an Experience Cloud site.

# Experience Cloud Sites List

Get a list of all Experience Cloud sites available to the context user. Create an Experience Cloud site.

Resource

```

```

Available version

28.0

HTTP methods

GET, POST

POST is available in version 46.0 and later.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | Returns only sites with the specified status. Valid values are:LiveInactiveUnderConstructionOnly users with the Manage Experiences permission can see sites with an Inactive status. | Optional | 28.0 |

Response body for GET

[Community Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_page.htm "Page of Experience Cloud sites.")

Request body for POST

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

Response body for POST

[Community Create](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_create.htm "Result of creating an Experience Cloud site.")

## Code Examples

```
/connect/communities/
```

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

- Community Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_page.htm)
- Experience Builder Templates (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_templates.htm)
- Community Create (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_community_create.htm)
