---
title: "Custom Domain Resources"
domain: chatterapi
topic: custom-domain-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:14.864Z
estimatedTokens: 365
keywords: [Custom, Domain, Resources, domains, org, own, https, www.example.com, serves, content, Experience, Cloud, sites, Salesforce]
---

# Custom Domain Resources

> Get information about the custom domains in your org. A custom domain is a domain that
    you own, such as https://www.example.com, that serves content from your
    Experience Cloud sites or Salesforce Sites.

# Custom Domain Resources

Get information about the custom domains in your org. A custom domain is a domain that you own, such as https://www.example.com, that serves content from your Experience Cloud sites or Salesforce Sites.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/custom-domain/domains/domainName​/domainId | Get the ID for the custom domain associated with a domain name. |
| /connect/custom-domain/domains/domainName​/expected-cdn-validation-cname | Get values for the canonical name (CNAME) record that’s required for custom domains that use the Salesforce CDN. |
| /connect/custom-domain/domains/domainName​/expected-cname | Get values for the canonical name (CNAME) record that’s used to verify ownership of a custom domain. |
| /connect/custom-domain/domains | Get a list of the custom domains for the org. |
| /connect/custom-domain/domains/domainId | Get information about a specified custom domain. |
| /connect/custom-domain/domains/domainId​/custom-urls | Get a list of custom URLs for a custom domain. |
| /connect/custom-domain/domains/domainId​/custom-urls/customUrlId | Get information about a specified custom URL. |
| /connect/custom-domain/domains/${domainId}​/pending-configuration | Get the pending configuration options for a custom domain. |
| /connect/custom-domain/domains/sites/​storeOrSiteId/custom-urls | Get a list of custom URLs for a custom domain associated with a site or store. |

## Related Topics

- /connect/custom-domain/domains/domainName​/domainId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_name_domain_id.htm)
- /connect/custom-domain/domains/domainName​/expected-cdn-validation-cname (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_expected_cname_cdn.htm)
- /connect/custom-domain/domains/domainName​/expected-cname (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_expected_cname.htm)
- /connect/custom-domain/domains (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domains.htm)
- /connect/custom-domain/domains/domainId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain.htm)
- /connect/custom-domain/domains/domainId​/custom-urls (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_custom_urls.htm)
- /connect/custom-domain/domains/domainId​/custom-urls/customUrlId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_custom_url.htm)
- /connect/custom-domain/domains/${domainId}​/pending-configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_pending_configuration.htm)
- /connect/custom-domain/domains/sites/​storeOrSiteId/custom-urls (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_custom_urls_site.htm)
