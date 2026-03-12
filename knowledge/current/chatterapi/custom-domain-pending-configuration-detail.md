---
title: "Custom Domain Pending Configuration Detail"
domain: chatterapi
topic: custom-domain-pending-configuration-detail
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:18.160Z
estimatedTokens: 556
keywords: [Custom, Domain, Pending, Configuration, Detail, Detailed]
---

# Custom Domain Pending Configuration Detail

> Detailed description of the pending configuration for a custom domain.

# Custom Domain Pending Configuration Detail

Detailed description of the pending configuration for a custom domain.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| associateType | String | Type of org that contains the Experience Cloud site or Salesforce Site content that the custom domain serves. Custom domains exist only in production orgs.Production—The custom domain serves content from a site on the same org.Sandbox—The custom domain serves content from a site on a sandbox. | Small, 66.0 | 66.0 |
| cdnPartnerOptions | CDN Partner Options | If the configurationOption is CdnPartner, the content delivery network (CDN) partner for the pending configuration. | Small, 66.0 | 66.0 |
| configurationOption | String | The pending domain configuration option.CdnPartner—A Salesforce content delivery network (CDN) partner serves the domain.ExternalHttps—A non-Salesforce service or host serves your custom domain. This option includes third-party CDNs and proxy solutions.NoHttps—The custom domain uses a temporary non-HTTPS configuration for initial setup.SitesRuntime—The custom domain is served on Salesforce servers with your HTTPS certificate. | Small, 66.0 | 66.0 |
| domainId | String | ID of the custom domain. | Small, 66.0 | 66.0 |
| domainName | String | Domain name. For example, www.example.com | Small, 66.0 | 66.0 |
| domainStatus | String | Custom domain status. Valid values for a custom domain with a pending configuration are:AwaitingActivation—The domain provisioning process is complete. To use the updated domain, activate the domain.AwaitingCustomURL—The custom domain requires a custom URL to start provisioning. Only applies to custom domains with the SitesRuntime configurationOption.DomainNameValidated—​​domainName ownership has been validated by Salesforce.Provisioning—Salesforce is provisioning the custom domain. In other words, Salesforce is getting the domain ready for activation. | Small, 66.0 | 66.0 |

#### See Also

-   [Custom Domain Pending Configuration](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_pending_configuration.htm "Get the pending configuration for a custom domain.")

## Related Topics

- CDN Partner
                  Options (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_custom_domain_cdn_partner_options.htm)
- Custom Domain Pending Configuration (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_custom_domain_pending_configuration.htm)
