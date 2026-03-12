---
title: "Custom Domain Detail"
domain: chatterapi
topic: custom-domain-detail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.147Z
estimatedTokens: 918
keywords: [Custom, Domain, Detail, Detailed]
---

# Custom Domain Detail

> Detailed description of a custom domain.

# Custom Domain Detail

Detailed description of a custom domain.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| associationType | String | Type of org that contains the Experience Cloud site or Salesforce Site content that the custom domain serves. Custom domains exist only in production orgs.Production—The custom domain serves content from a site on the same org.Sandbox—The custom domain serves content from a site on a sandbox. | Small, 60.0 | 60.0 |
| cnameTarget | String | Canonical name (CNAME) of the external host or server for the custom domain. If configurationOption is ExternalHttps, this field points to the CNAME of the external provider. | Small, 60.0 | 60.0 |
| configurationOption | String | Custom domain configuration option.CdnPartner—A Salesforce content delivery network (CDN) partner serves the domain.ExternalHttps—A non-Salesforce service or host serves your custom domain. This option includes third-party CDNs and proxy solutions.NoHttps—The custom domain uses a temporary non-HTTPS configuration for initial setup.SitesRuntime—The custom domain is served on Salesforce servers with your HTTPS certificate. | Small, 60.0 | 60.0 |
| customUrls | Custom Domain Custom URL Collection[] | List of custom URLs for this domain.If no custom URLs exist for the domain, an empty list is returned. | Small, 62.0 | 62.0 |
| domainName | String | Domain name. For example, www.example.com | Small, 60.0 | 60.0 |
| domainStatus | String | Custom domain status. Values are:AwaitingActivation—The domain provisioning process is complete. To use the updated domain, activate the domain.AwaitingCustomURL—The custom domain requires a custom URL to start provisioning. Only applies to custom domains with the SitesRuntime configurationOption.Completed—The custom domain is active and in use.DomainNameValidated—​​domainName ownership has been validaed by Salesforce.DomainNameValidationFailed—​Salesforce couldn’t validate the domainName. Update the CNAME in DNS and attempt to validate the domain again.DomainNameValidationPending—​domainName validation hasn’t started.Provisioning—Salesforce is provisioning the custom domain. In other words, Salesforce is getting the domain ready for activation.— | Small, 63.0 | 63.0 |
| hstsPreloadEnabled | Boolean | Indicates whether Salesforce includes the Strict-Transport-Security HTTP header with the preload directive for the custom domain (true) or not (false).Only registrable domains are eligible for HTTP Strict Transport Security (HSTS) preloading. Also, to finish configuring HSTS preloading, add your custom domain to the third-party HSTS preload list. For more information, see Enable HSTS Preloading on a Custom Domain in Salesforce Help. | Small, 60.0 | 60.0 |
| lastModifiedDate | String | Date when the custom domain was last modified. | Small, 63.0 | 63.0 |
| sandboxId | String | If associationType is Sandbox, org ID of the sandbox.If associationType is Production, this field is always null. | Small, 60.0 | 60.0 |

#### See Also

-   [Domain Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain.htm "Get information about a custom domain. A custom domain is a domain that you own, such as https://www.example.com, that serves content from your Experience Cloud sites or Salesforce Sites.")

-   [Custom Domain Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_collection.htm "List of custom domains for the org. A custom domain is a domain that you own, such as https://www.example.com, that serves content from your Experience Cloud sites or Salesforce Sites.")

## Related Topics

- Custom Domain
                  Custom URL
                Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_custom_url_collection.htm)
- Domain Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain.htm)
- Custom Domain Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_collection.htm)
