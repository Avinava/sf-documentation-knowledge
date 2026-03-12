---
title: "Site"
domain: object-reference
topic: site
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.206Z
estimatedTokens: 2726
keywords: [Site, website, integrated, org, API, version, 16.0, later, Calls, Special, Access, Rules, Usage, Associated, Objects]
---

# Site

> Represents a public website that is integrated with an org. This object is available in API version 16.0 and later.

# Site

Represents a public website that is integrated with an org. This object is available in API version 16.0 and later.

﻿To access this object, Digital Experiences, Salesforce Sites, or Site.com must be enabled.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

-   Customer Portal users can’t access this object.
-   To view this object, you must have the View Setup and Configuration permission.

## Fields

| Field | Description |
| --- | --- |
| AdminId | TypereferencePropertiesFilter, Group, SortDescriptionThe site administrator designated as the contact for the site. This user receives site-related communications from site visitors and from Salesforce.This is a relationship field.Relationship NameAdminRelationship TypeLookupRefers ToUser |
| AnalyticsTrackingCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe tracking code associated with your site. This code can be used by services like Google Analytics to track page request data for your site. |
| ArchiveStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe archived status of a site. Possible values are:NotArchivedTemporaritlyArchived |
| ArchivedById | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user that archived the site.Relationship Name:ArchivedByRelationship Type:LookupRefers To:User |
| ArchivedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when the site was archived. |
| ClickjackProtectionLevel | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSets the clickjack protection level. The options are:AllowAllFraming—Allow framing by any page (no protection)SameOriginOnly—Allow framing by the same origin only (recommended)NoFraming—Don’t allow framing by any page (most protection)This field is available in API version 30.0 and later. |
| DailyBandwidthLimit | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe rolling 24-hour daily bandwidth limit for the sites in your organization. |
| DailyBandwidthUsed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe current rolling 24-hour daily bandwidth usage for the sites in your organization. |
| DailyRequestTimeLimit | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe rolling 24-hour daily service request time limit for the sites in your organization. Service request time is calculated as the total server time in minutes required to generate pages for the site. |
| DailyRequestTimeUsed | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe current rolling 24-hour daily service request time for the sites in your organization. |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionAn optional description of the site. |
| GuestRecordDefaultOwnerId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionA user in the Salesforce org that is the default owner of records created by unauthenticated (guest) users.This is a relationship field.Relationship NameGuestRecordDefaultOwnerRelationship TypeLookupRefers ToUser |
| GuestUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe site or Experience Cloud sites specific user that anonymous, unauthenticated users run as when interacting with the site.This is a relationship field.Relationship NameGuestUserRelationship TypeLookupRefers ToUser |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe name of the site as it appears in the user interface. |
| MonthlyPageViewsEntitlement | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of page views allowed for the current calendar month for the sites in your organization. |
| Name | TypestringPropertiesFilter, Group, SortDescriptionThe name used when referencing the site in the API. |
| OptionsAllowGuestPaymentsApi | TypebooleanPropertiesFilterDescriptionIndicates whether unauthenticated guest users can access the Payments API (true) or not (false). The default is false. This field is available in API version 49.0 and later. |
| OptionsAllowGuestSupportApi | TypebooleanPropertiesFilterDescriptionThe option to enable unauthenticated users to access the Support API. |
| OptionsAllowHomePage | TypebooleanPropertiesFilterDescriptionThe option to enable the standard page associated with the Home tab (/home/home.jsp). |
| OptionsAllowStandardAnswersPages | TypebooleanPropertiesFilterDescriptionThe option to enable standard pages associated with an answers Experience Cloud site. If you want to use default Answers pages (such as AnswersHome), enable these pages. |
| OptionsAllowStandardIdeasPages | TypebooleanPropertiesFilterDescriptionThe option to enable standard pages associated with an Ideas Experience Cloud site. If you want to use default Ideas pages (such as IdeasHome), enable these pages. |
| OptionsAllowStandardLookups | TypebooleanPropertiesFilterDescriptionThe option to enable the standard lookup pages. These are the windows associated with lookup fields on Visualforce pages. |
| OptionsAllowStandardPortalPages | TypebooleanPropertiesFilterDescriptionThe option to enable authenticated users to access the standard Salesforce pages. |
| OptionsAllowStandardSearch | TypebooleanPropertiesFilterDescriptionThe option to enable the standard search pages. To allow public users to perform standard searches, enable these pages. |
| OptionsBrowserXssProtection | TypebooleanPropertiesFilterDescriptionThe option to enable the browser's cross-site scripting protection. |
| OptionsCachePublicVfPagesInProxies | TypebooleanPropertiesFilterDescriptionIndicates whether proxy servers cache this site’s publicly available pages only for unauthenticated guest users (true) or not (false). When this field is false, this site’s cache-enabled Visualforce pages are cached in the web browser for both authenticated and unauthenticated users. The default is true. See Configure Site Caching in Salesforce Help for more information.This field is available in API version 52.0 and later. |
| OptionsContentSniffingProtection | TypebooleanPropertiesFilterDescriptionThe option to enable content-sniffing protection. |
| OptionsCookieConsent | TypebooleanPropertiesFilterDescriptionIndicates whether only required Salesforce-supplied cookies are allowed within the site (true) or all cookies types are allowed: required, functional, and advertising (false). The default is false. This field is available in API version 52.0 and later. |
| OptionsCspUpgradeInsecureRequests | TypebooleanPropertiesFilterDescriptionThis field is removed in API version 52.0 and later. In API version 51.0 and earlier, the value in the field is ignored. |
| OptionsEnableFeeds | TypebooleanPropertiesFilterDescriptionThe option that displays the Syndication Feeds related list, where you can create and manage syndication feeds for users on your public sites. This field is visible only if you have the feature enabled for your organization. |
| OptionsHasStoredPathPrefix | TypebooleanPropertiesFilterDescriptionIndicates whether this Experience Cloud site has a customized urlPathPrefix (true) or instead uses the Experience Cloud site's UrlPathPrefix plus /s (false). The default is false. In other sites, this field has no effect. This field is available in API version 50.0 and later. |
| OptionsRedirectToCustomDomain | TypebooleanPropertiesFilterDescriptionIndicates whether requests to this site’s system-managed URLs are redirected to the HTTPS custom domain serving this site (true) or not (false). System-managed site URLs end in *.my.salesforce-sites.com or *.my.site.com. In Experience Cloud sites, the default is false. In Salesforce Sites, the default is true.If multiple custom domains serve this site and this field is set to true, requests are routed to the site’s primary custom URL only if it’s an HTTPS custom domain. Otherwise, requests are redirected to the first HTTPS custom domain associated with this site, in alphanumeric order. If no HTTPS custom domain serves this site, this option has no effect.This field is available in API version 52.0 and later. |
| OptionsReferrerPolicyOriginWhenCrossOrigin | TypebooleanPropertiesFilterDescriptionThe option to enable referrer policy (origin-when-cross-origin). |
| OptionsRequireHttps | TypebooleanPropertiesFilterDescriptionThis field is removed in API version 52.0 and later. In API version 51.0 and earlier, the value in the field is ignored. |
| SiteType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionIdentifies whether the site is a Visualforce (Salesforce Sites) or a Site.com site. SiteType is available in API version 21.0 and later. In API version 26.0 and later, if Experience Cloud sites are enabled for your Salesforce org, the site could also be a Network Visualforce or Network Site.com site. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe status for the site. For example, Active or In Maintenance. |
| Subdomain | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf you enabled Salesforce Sites or Digital Experiences before you enabled enhanced domains on your My Domain, this field returns this site’s previous subdomain. For example, if your domain was mycompany.force.com, then mycompany is the subdomain.If you enabled Salesforce Sites or Digital Experiences after you enabled enhanced domains, this field returns a null value. |
| TopLevelDomain | TypeurlPropertiesFilter, NillableDescriptionThe optional branded custom Web address that you registered with a third-party domain name registrar. The custom Web address acts as an alias to your Salesforce address.Beginning with API version 21.0, TopLevelDomain is no longer available. Instead, use the Domain and DomainSite objects. |
| UrlPathPrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique Salesforce URL that the public uses to access this site. |

## Usage

Use this read-only object to query or retrieve information on your site.

## Associated Objects

This object has the following associated objects. Unless noted, these associated objects are available in the same API version as this object.

[SiteFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[SiteHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- Domain (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domain.htm)
- DomainSite (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_domainsite.htm)
- SiteFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- SiteHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
