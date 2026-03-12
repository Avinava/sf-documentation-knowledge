---
title: "Domain"
domain: object-reference
topic: domain
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.234Z
estimatedTokens: 1140
keywords: [Domain, Read-only, custom, Web, address, assigned, site, organization, API, version, 26.0, later, Calls, Special, Access]
---

# Domain

> Read-only object that represents a custom Web address assigned to a
			site in your organization. This object is available in API version 26.0 and
		later.

# Domain

Read-only object that represents a custom Web address assigned to a site in your organization. This object is available in API version 26.0 and later.

To access this object, Salesforce Sites, Digital Experiences, or Site.com must be enabled for your organization. DomainSite contains records for domains that serve your Experience Cloud sites only when enhanced domains are deployed. The system-managed site hostnames for those Experience Cloud sites end in .my.site.com. This object doesn’t contain records for legacy domains that serve Experience Cloud sites with hostnames that end in .force.com.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

-   Customer Portal users can’t access this object.
-   To view this object, you must have either the View Setup and Configuration or Manage Custom Domains permission.
-   Site.com Publisher users have read-only API access to the Domain and [DomainSite](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domainsite.htm "Read-only junction object that joins the Site and Domain objects. This object is available in API version 26.0 and later.") objects.

## Fields

| Field | Description |
| --- | --- |
| CnameTarget | TypestringPropertiesFilter, Nillable, SortDescriptionThe canonical name (CNAME) of the external host or server. If you use a custom domain with a non-Salesforce provider, such as your own external server or CDN provider, to serve your domain, this field points to the CNAME of the external provider. This field is available in API version 43.0 and later. |
| Domain | TypestringPropertiesFilter, idLookup, SortDescriptionThe branded custom Web address within the global namespace identified by this domain's type. In the Domain Name System (DNS) global namespace, this field is the custom Web address that you registered with a third-party domain name registrar. The custom Web address can be used to access the site of this domain. |
| DomainType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe global namespace that this custom Web address belongs to. This value is set to DNS for custom Web addresses in the global DNS.DomainType can have the following value:DNS—Domain Name System (DNS) |
| HttpsOption | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionCurrent HTTPS option. Values include:CdnPartner—Salesforce serves the custom domain, such as https://www.example.com, with the Salesforce Content Delivery Network (CDN) partner.Community—The system-managed Experience Cloud sites domain that ends in .force.com. This option applies only to orgs without enhanced domains.CommunityAlt—The system-managed Experience Cloud sites domain that ends in .my.site.com. This option applies only to orgs with enhanced domains.ExternalHttps—An external service or CDN serves the custom domain, such as https://www.example.com.LegacyDomain—A previous system-managed domain for this org. This option is rarely used.NoHttps—Salesforce serves the custom domain, such as http://www.example.com, via HTTP. Used to configure your custom domain before selecting a permanent HTTPS option.OrgDomain—The system-managed My Domain login URL for this org.Sites—The system-managed Salesforce Sites domain that ends in .force.com. This option applies only to orgs without enhanced domains.SitesAlt—The system-managed Salesforce Sites domain that ends in .my.salesforce-sites.com. This option applies only to orgs with enhanced domains.SitesRuntime—Salesforce serves the custom domain, such as https://www.example.com, using your HTTPS certificate on Salesforce servers.This field is available in API version 47.0 and higher.To get the current system-managed domains for your org, use the Domain Apex class. |
| OptionsHstsPreload | TypebooleanPropertiesFilterDescriptionIndicates whether the preload directive is added to the HSTS header so that the domain is eligible for HSTS preloading registration (true) or not (false). This field is available in API version 52.0 and later.After this field is set to true, to ensure that HTTPS connections are always used in browsers that support HSTS, you must also register the domain at https://hstspreload.org.We only modify the HSTS headers of domains that are eligible for registration. Domain names can consist of a public suffix plus one additional label. For more information, see Add a Domain in Salesforce Help. |

## Usage

Use this read-only object to query the domains that are associated with each site in your organization.

## Related Topics

- DomainSite (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domainsite.htm)
