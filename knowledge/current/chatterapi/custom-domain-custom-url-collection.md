---
title: "Custom Domain Custom URL Collection"
domain: chatterapi
topic: custom-domain-custom-url-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.132Z
estimatedTokens: 251
keywords: [Custom, Domain, URL, Collection, URLs, consists, path, prefix, unique, site, serve, content, least]
---

# Custom Domain Custom URL Collection

> List of custom URLs for a custom domain. A custom URL consists of a domain, a custom
    path prefix, and a unique site path. For a domain to serve content from a site, at least one
    custom URL is required.

# Custom Domain Custom URL Collection

List of custom URLs for a custom domain. A custom URL consists of a domain, a custom path prefix, and a unique site path. For a domain to serve content from a site, at least one custom URL is required.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| customUrls | Custom URL Detail[] | List of custom URLs for a specific domain.If no custom domains exist for the domain, an empty list is returned. | Small, 62.0 | 62.0 |

#### See Also

-   [Custom URLs for a Domain](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_custom_urls.htm "Get a list of custom URLs for a custom domain. For a domain to serve site content, at least one custom URL is required.")

-   [Custom URLs for a Site or Store](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_custom_urls_site.htm "Get a list of custom URLs for a custom domain associated with a site or store.")

## Related Topics

- Custom URL
                  Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_custom_url_detail.htm)
- Custom URLs for a Domain (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_custom_urls.htm)
- Custom URLs for a Site or Store (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_custom_urls_site.htm)
