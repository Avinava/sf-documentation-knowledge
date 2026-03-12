---
title: "DomainSite"
domain: object-reference
topic: domainsite
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.238Z
estimatedTokens: 460
keywords: [DomainSite, Read-only, junction, joins, Site, Domain, objects, API, version, 26.0, later, Calls, Special, Access, Rules]
---

# DomainSite

> Read-only junction object that joins the Site and Domain objects. This object is available in API version 26.0 and later.

# DomainSite

Read-only junction object that joins the Site and Domain objects. This object is available in API version 26.0 and later.

To access this object, Salesforce Sites, Digital Experiences, or Site.com must be enabled. DomainSite contains records for domains that serve your Experience Cloud sites only when enhanced domains are deployed. The system-managed site hostnames for those Experience Cloud sites end in .my.site.com. This object doesn’t contain records for legacy domains that serve Experience Cloud sites with hostnames that end in .force.com.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

-   Customer Portal users can’t access this object.
-   To view this object, you must have either the View Setup and Configuration or Manage Custom Domains permission.
-   Site.com Publisher users have read-only API access to the [Domain](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domain.htm "Read-only object that represents a custom Web address assigned to a site in your organization. This object is available in API version 26.0 and later.") and DomainSite objects.

## Fields

| Field | Description |
| --- | --- |
| DomainId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the associated Domain.This is a relationship field.Relationship NameDomainRelationship TypeLookupRefers ToDomain |
| PathPrefix | TypestringPropertiesFilter, Group, SortDescriptionShows where a site’s root exists on a domain. Can only be set for custom Web addresses. Always begins with a /. |
| SiteId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the associated Site.This is a relationship field.Relationship NameSiteRelationship TypeLookupRefers ToSite |

## Usage

Use this read-only object to query or retrieve information about your sites.

## Related Topics

- Domain (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domain.htm)
