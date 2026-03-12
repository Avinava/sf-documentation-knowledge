---
title: "SiteHistory"
domain: object-reference
topic: sitehistory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.232Z
estimatedTokens: 357
keywords: [SiteHistory, history, changes, site, generally, API, version, 18.0, later, Calls, Special, Access, Rules]
---

# SiteHistory

> Represents the history of changes to the values in the fields of a site. This object is generally available in API version 18.0 and later.

# SiteHistory

Represents the history of changes to the values in the fields of a site. This object is generally available in API version 18.0 and later.

To access this object, Salesforce Sites must be enabled for your organization.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

You can also enable delete() in API version 42.0 and later. See [Enable delete of Field History and Field History Archive](https://help.salesforce.com/articleView?id=000321814&type=1&mode=1&language=en_US "HTML (New Window)").

## Special Access Rules

-   Customer Portal users can't access this object.
-   To view this object, you must have the “View Setup and Configuration” permission.

## Fields

| Field | Details |
| --- | --- |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionData type of the field that was changed. |
| Field | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe name of the field that was changed. |
| NewValue | TypeanyTypePropertiesNillable, SortDescriptionThe new value of the field that was changed. |
| OldValue | TypeanyTypePropertiesNillable, SortDescriptionThe last value of the field before it was changed. |
| SiteId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the associated Site.This is a relationship field.Relationship NameSiteRelationship TypeLookupRefers ToSite |
