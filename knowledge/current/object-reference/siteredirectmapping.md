---
title: "SiteRedirectMapping"
domain: object-reference
topic: siteredirectmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.242Z
estimatedTokens: 421
keywords: [SiteRedirectMapping, site, redirect, external, Experience, Cloud, API, version, 52.0, later, Calls, Special, Access, Rules, Usage]
---

# SiteRedirectMapping

> Represents a site redirect from an external site to an Experience Cloud site.
      This object is available in API version 52.0 and later.

# SiteRedirectMapping

Represents a site redirect from an external site to an Experience Cloud site. This object is available in API version 52.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

This object is available only if Digital Experiences is enabled for your org and Create and Set Up Experiences is enabled.

## Fields

| Field | Details |
| --- | --- |
| Action | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe type of the redirect.Possible values are:PermanentTemporary |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the redirect is enabled.Default value is false. |
| IsDynamic | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a redirect rule is dynamic.Default value is false. This field is available in API version 57.0 and later. |
| SiteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the site for the redirect.This field is a relationship field.Relationship NameSiteRelationship TypeLookupRefers ToSite |
| Source | TypeurlPropertiesCreate, Filter, SortDescriptionThe URL of the site you want to redirect. |
| Target | TypeurlPropertiesCreate, Filter, SortDescriptionThe URL of the Experience Cloud site you want to users to visit. |

## Usage

If you build a new site on Experience Cloud but you also have an old site on a different platform, ensure that users visit the new site. Use SiteRedirectMapping to redirect users from the external site to the Experience Cloud site.
