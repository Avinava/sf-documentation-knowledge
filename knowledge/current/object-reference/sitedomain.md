---
title: "SiteDomain"
domain: object-reference
topic: sitedomain
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.214Z
estimatedTokens: 485
keywords: [SiteDomain, read-only, one-to-many, replacement, Site.TopLevelDomain, API, version, 21.0, deprecated, 26.0, later, Domain, DomainSite, objects, instead]
---

# SiteDomain

> SiteDomain is a read-only object, and a one-to-many replacement for the
  Site.TopLevelDomain field. This object is available in API version 21.0, and has been
   deprecated as of API version 26.0. In API version 26.0 and later, use the Domain and DomainSite objects
  instead.

# SiteDomain

SiteDomain is a read-only object, and a one-to-many replacement for the Site.TopLevelDomain field. This object is available in API version 21.0, and has been deprecated as of API version 26.0. In API version 26.0 and later, use the [Domain](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domain.htm "Read-only object that represents a custom Web address assigned to a site in your organization. This object is available in API version 26.0 and later.") and [DomainSite](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domainsite.htm "Read-only junction object that joins the Site and Domain objects. This object is available in API version 26.0 and later.") objects instead.

To access this object, Digital Experiences, Salesforce Sites, or Site.com must be enabled.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

-   Customer Portal users can’t access this object.
-   To view this object, you must have the View Setup and Configuration permission.

## Fields

| Field | Description |
| --- | --- |
| Domain | TypeurlPropertiesFilter, SortDescriptionThe branded custom Web address within the global namespace identified by this domain's type. In the Domain Name System (DNS) global namespace, this field is the custom Web address that you registered with a third-party domain name registrar. The custom Web address can be used to access the site of this domain. |
| SiteId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the associated Site. |
| DomainType | TypepicklistPropertiesFilter, Group, Sort, NillableDescriptionThe global namespace that this custom Web address belongs to. This value is set to DNS for custom Web addresses in the global DNS. This field is available in version 24.0 of the API. |

## Usage

Use this read-only object to query the domains that are associated with each site in your organization.

## Related Topics

- Domain (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domain.htm)
- DomainSite (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domainsite.htm)
