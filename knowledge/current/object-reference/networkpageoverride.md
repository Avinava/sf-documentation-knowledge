---
title: "NetworkPageOverride"
domain: object-reference
topic: networkpageoverride
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.263Z
estimatedTokens: 445
keywords: [NetworkPageOverride, custom, pages, override, Experience, Cloud, sites, Builder, Visualforce, site, personalized, users, API, version, 34.0]
---

# NetworkPageOverride

> Represents information about custom
				pages used to override the default pages in Experience Cloud sites. You can
			create Experience Builder or Visualforce pages and override the default pages in a site.
			Using custom pages allows you to create a more personalized experience for your
			users. This object is available in API version 34.0 and later.

# NetworkPageOverride

Represents information about custom pages used to override the default pages in Experience Cloud sites. You can create Experience Builder or Visualforce pages and override the default pages in a site. Using custom pages allows you to create a more personalized experience for your users. This object is available in API version 34.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

-   Only users with the Create and Setup Experiences permission can update this object.
-   You can’t override the Change Password Page with a page created using Experience Builder. You can only override it with a Visualforce page.

## Fields

| Field Name | Details |
| --- | --- |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the Experience Cloud site where a custom page is used to override a default page. |
| OverrideSetting | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of the page used to override a default page in the Experience Cloud site. OverrideSetting can take the following values:Standard—The standard page that comes by default with the site.Configurable—The page created when the Configurable Self-Reg registration page type or the Login Discovery login page type is selected.Designer—A custom page created using Experience Builder.Visualforce—A custom page created using Visualforce. |
| OverrideType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe name of the default page in the Experience Cloud site that you want to override with a custom page.OverrideType can take the following values:LoginRequiredChangePasswordForgotPasswordSelfRegHome |
