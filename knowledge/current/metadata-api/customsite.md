---
title: "CustomSite"
domain: metadata-api
topic: customsite
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:42.268Z
estimatedTokens: 4055
keywords: [CustomSite, Salesforce, site, websites, applications, directly, integrated, organization, don't, require, users, log, username, password, Declarative]
---

# CustomSite

> Represents a Salesforce site. Create public websites and
      applications that are directly integrated with your Salesforce organization, but don't require
      users to log in with a username and password.

# CustomSite

Represents a Salesforce site. Create public websites and applications that are directly integrated with your Salesforce organization, but don't require users to log in with a username and password.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

This Metadata API Type applies only to Salesforce sites and [Visualforce sites](https://help.salesforce.com/s/articleView?id=experience.exp_cloud_basics_glossary.htm&type=5&language=en_US). For Digital Experiences, also known as Experience Cloud sites, see [Network](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_network.htm).

For more information, see [Salesforce Sites](https://help.salesforce.com/s/articleView?id=platform.sites_overview.htm&type=5&language=en_US) in Salesforce Help. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

CustomSite doesn’t currently support syndication feeds.

## Declarative Metadata File Suffix and Directory Location

Lightning Platform CustomSite components are stored in the sites directory of the corresponding package directory. The file name matches the site name, and the extension is .site.

## Version

Lightning Platform CustomSite components are available in API version 14.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. Determines whether the site is active. |
| allowHomePage | boolean | Required. Determines whether the standard home page is visible to public users. This field is available in API version 15.0 and later. |
| allowStandardAnswersPages | boolean | Determines whether the standard answer pages are visible to public users. This field is available in API version 19.0 and later. |
| allowStandardIdeasPages | boolean | Required. Determines whether the standard Ideas pages are visible to public users. This field is available in API version 15.0 and later. |
| allowStandardLookups | boolean | Required. Determines whether the standard lookup pages are visible to public users. This field is available in API version 15.0 and later. |
| allowStandardPortalPages | boolean | Required. When enabled, authenticated users in this site can access standard Salesforce pages as allowed by their access controls. When disabled, authenticated users in this site can't access standard Salesforce pages, even if their access controls allow it. If your site serves only Visualforce pages, disabling this setting helps add a layer of access protection to your site. This field is available in API version 39.0 and later. |
| allowStandardSearch | boolean | Required. Determines whether the standard search pages are visible to public users. This field is available in API version 15.0 and later. |
| analyticsTrackingCode | string | The tracking code associated with your site. Services such as Google Analytics can use this code to track page request data for your site. This field is available in API version 17.0 and later. |
| authorizationRequiredPage | string | The name of the Visualforce page to display when the guest user tries to access a page for which they aren’t authorized. |
| bandwidthExceededPage | string | The name of the Visualforce page to display when the site has exceeded its bandwidth quota. |
| browserXssProtection | boolean | Required. Determines whether protection against reflected cross-site scripting attacks is enabled. If a reflected cross-site scripting attack is detected, the browser shows a blank page with no content. Available in API version 41.0 and later. |
| cachePublicVisualforcePagesInProxyServers | boolean | Indicates whether proxy servers cache this site’s publicly available pages only for unauthenticated guest users (true) or not (false). When this field is false, this site’s cache-enabled Visualforce pages are cached in the web browser for both authenticated and unauthenticated users. The default is true. See Configure Site Caching in Salesforce Help for more information.This field is available in API version 52.0 and later. |
| changePasswordPage | string | The name of the Visualforce page to display when the portal user attempts to change their password for either the portal or for Chatter Answers, when enabled. |
| chatterAnswersForgotPasswordConfirmPage | string | The name of the Visualforce page that informs the user that an email has been sent to them with a temporary password. This field is available if Chatter Answers is enabled for your organization. This field is available in API version 27.0 and later. |
| chatterAnswersForgotPasswordPage | string | The name of the Visualforce page to display when a user clicks the link to retrieve a forgotten password. This field is available if Chatter Answers is enabled for your organization. This field is available in API version 27.0 and later. |
| chatterAnswersHelpPage | string | The name of the Visualforce page to display when the user clicks the help link. This field is available if Chatter Answers is enabled for your organization. This field is available in API version 27.0 and later. |
| chatterAnswersLoginPage | string | The name of the Visualforce page to display where users can log in to the portal. This field is available if Chatter Answers is enabled for your organization. This field is available in API version 27.0 and later. |
| chatterAnswersRegistrationPage | string | The name of the Visualforce page to display where users can register themselves and access the portal. This field is available in API version 27.0 and later. |
| clickjackProtectionLevel | SiteClickjackProtectionLevel (enumeration of type string) | Required. Sets the clickjack protection level. The options are:AllowAllFraming — Allow framing by any page (no protection)External — Allow framing of site or Experience Cloud site pages on external domains (good protection)SameOriginOnly — Allow framing by the same origin only (recommended)NoFraming — Don’t allow framing by any page (most protection)This field is available in API version 30.0 and later. |
| contentSniffingProtection | boolean | Required. Determines whether the browser is prevented from inferring the MIME type from the document content. If enabled, it also prevents the browser from executing some malicious files (JavaScript, Stylesheet) as dynamic content. This field is available in API version 41.0 and later. |
| cspUpgradeInsecureRequests | boolean | This field is removed in API version 52.0 and later. In API version 51.0 and earlier, the value in the field is ignored. |
| customWebAddresses | SiteWebAddress[] | The root custom URLs associated with the site. Saving or deploying a CustomSite replaces all root custom URLs in the site with the root custom URLs in this list. Custom URLs that use a non-root path prefix aren’t included in this list and aren’t affected when saving or deploying a CustomSite. This field is available in API version 21.0 and later. |
| description | string | The site description. |
| enableAuraRequests | boolean | Determines whether guest users can view features available only in Lightning (true). If set to false, Lightning features don’t load. This field is available in API version 46.0 and later. |
| favoriteIcon | string | The name of the static resource, without the extension, for the icon that appears in next to the site’s name in browser tabs, bookmarks, and search results.To update a site’s favorite icon, create a 16px by 16px ICO file. Then store that images a static resource at the base path for the site. For example, if the icon file name is favico.ico, https://myDomainName.my.site.com/store/favicon.ico is the required path for a site with the URL https://myDomainName.my.site.com/store. To use that icon, set favoriteIcon to favicon.If the specified the ICO file doesn’t exist in the required location, a 404 error is returned. Otherwise, if the file isn’t present, no favorite icon is used. |
| fileNotFoundPage | string | The name of the Visualforce page to display when the guest user tries to access a non-existent page. |
| forgotPasswordPage | string | The name of the Visualforce page to display when a user clicks the Forgot Password link on the site’s login page. This field is only applicable for Experience Cloud sites. |
| genericErrorPage | string | The name of the Visualforce page to display for errors not otherwise specified. |
| guestProfile | string | Read only. The name of the profile associated with the guest user. |
| inMaintenancePage | string | The name of the Visualforce page to display when the site is down for maintenance. |
| inactiveIndexPage | string | The name of the Visualforce page set as the inactive site home page. |
| indexPage | string | Required. The name of the Visualforce page set as the active site home page. |
| masterLabel | string | Required. The name of the site label in the Salesforce user interface. |
| myProfilePage | string | The name of the Visualforce page to display as the site user’s profile page, where users can update their contact information. This field is available in API version 20.0 and later. |
| portal | string | The name of the portal associated with this site for login access. |
| redirectToCustomDomain | boolean | Indicates whether requests for this site’s system-managed URLs are redirected to the HTTPS custom domain serving this site (true) or not (false). System-managed site URLs end in *.my.salesforce-sites.com or *.my.site.com. In Experience Cloud sites, the default is false. In Salesforce Sites, the default is true.If multiple custom domains serve this site and this field is set to true, requests are routed to the site’s primary custom URL only if it’s an HTTPS custom domain. Otherwise, requests are redirected to the first HTTPS custom domain associated with this site, in alphanumeric order. If no HTTPS custom domain serves this site, this option has no effect.This field is available in API version 52.0 and later. |
| referrerPolicyOriginWhenCrossOrigin | boolean | Required. Determines whether the referrer header shows only Salesforce.com rather than the entire URL when loading a page. This feature eliminates the potential for a referrer header to reveal sensitive information that could be present in a full URL, such as an org ID. This field is available in API version 41.0 and later. |
| requireHttps | boolean | This field is removed in API version 52.0 and later. In API version 51.0 and earlier, the value in the field is ignored. |
| requireInsecurePortalAccess | boolean | Determines whether to override your organization's security settings and exclusively use HTTP when logging in to the associated portal from your site. Removed in API version 50.0 and later. |
| robotsTxtPage | string | The name of the Visualforce page to display for the robots.txt file used by web crawlers. |
| selfRegPage | string | Visualforce page used for self-registration. |
| serverIsDown | string | The name of the static resource to be displayed from the cache server when Salesforce servers are down. The static resource must be a public zip file 1 MB or smaller and must contain a page named maintenance.html at the root level of the zip file. Other resources in the zip file, such as images or CSS files, can follow any directory structure. This field is available in API version 17.0 and later. |
| siteAdmin | string | The username of the site administrator. |
| siteGuestRecordDefaultOwner | string | The username of the user who owns all new records that unauthenticated guest users create. This field is available in API version 51.0 and later. |
| siteIframeWhiteListUrls | SiteIframeWhiteListUrl[] | The list of external domains that you allow to frame your Salesforce site. This field is available in API 49.0 and later. |
| siteRedirectMappings | SiteRedirectMapping[] | An array of all URL redirect rules set for your site. This field is available in API version 20.0 and later. |
| siteTemplate | string | The name of the Visualforce page to be used as the site template. |
| siteType | siteType | Required. Identifies whether the site is a Visualforce (Salesforce Sites), Site.com site, or ChatterNetwork (Salesforce Sites).This field is available in API version 27.0 and later. |
| subdomain | string | Read only. The previous custom subdomain prefix for the site. For example, if your site URL is mycompany.force.com/partners, mycompany is the subdomain.This field is applicable and required only when the myDomainSuffix MyDomainSettings field is set to MySalesforceLimited, CloudforceLimited, or DatabaseLimited.If you enabled Salesforce Sites or Digital Experiences when the myDomainSuffix MyDomainSettings field was set to one of those values, this field returns this site’s previous subdomain. Otherwise, this field returns a null value. |
| urlPathPrefix | string | The first part of the path on the site's URL that distinguishes this site from other sites. For example, if your site URL is MyDomainName.my.salesforce-sites.com/partners, partners is the urlPathPrefix. |

## SiteIframeWhiteListUrl

Represents the external domains that you allow to frame your site or experience pages.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

| Field | Field Type | Description |
| --- | --- | --- |
| url | string | Required. The trusted domain that you allow to frame your site or Experience Cloud site pages. Accepts these formats: example, example.com, *example.com, and https://example.com. |

## SiteRedirectMapping

SiteRedirectMapping represents a URL redirect rule on your Salesforce site.” in Salesforce Help.

| Field | Field Type | Description |
| --- | --- | --- |
| action | SiteRedirect (enumeration of type string) | Required. The type of the redirect. Available string values are:PermanentTemporary |
| isActive | boolean | The status of the redirect: active or inactive. |
| source | string | Required. The URL that you want to redirect. It must be a relative URL, but can have any valid extension type, such as .html or .php. |
| target | string | Required. The new URL you want users to visit. It can be a relative URL or a fully-qualified URL with an http:// or https:// prefix. |

## SiteWebAddress

Represents the web address of a Salesforce site.

| Field | Field Type | Description |
| --- | --- | --- |
| certificate | string | Identifies the certificate associated with the custom domain. If the custom domain is set up for Salesforce to serve HTTPS, this field indicates which certificate to use. |
| domainName | string | Required. The domain of the website, in the form of www.acme.com. |
| primary | boolean | Required. Indicates whether this is the primary domain (true). If false, this is not the primary domain. |

## Declarative Metadata Sample Definition

Here is a sample XML definition of a site.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Portal](atlas.en-us.api_meta.meta/api_meta/meta_portal.htm "The Portal metadata type represents a partner portal.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomSite xmlns="http://soap.sforce.com/2006/04/metadata">
    <active>true</active>
    <allowHomePage>true</allowHomePage>
    <allowStandardAnswersPages>true</allowStandardAnswersPages>
    <allowStandardIdeasPages>true</allowStandardIdeasPages>
    <allowStandardLookups>true</allowStandardLookups>
    <allowStandardPortalPages>true</allowStandardPortalPages>
    <allowStandardSearch>true</allowStandardSearch>
    <analyticsTrackingCode>UA-000000-2</analyticsTrackingCode>
    <authorizationRequiredPage>Unauthorized</authorizationRequiredPage>
    <bandwidthExceededPage>BandwidthExceeded</bandwidthExceededPage>
    <browserXssProtection>true</browserXssProtection>
    <cachePublicVisualforcePagesInProxyServers>false</cachePublicVisualforcePagesInProxyServers>
    <changePasswordPage>ChangePassword</changePasswordPage>
    <chatterAnswersForgotPasswordConfirmPage>ChatterAnswersForgotPasswordConfirm</chatterAnswersForgotPasswordConfirmPage>
    <chatterAnswersForgotPasswordPage>ChatterAnswersForgotPassword</chatterAnswersForgotPasswordPage>
    <chatterAnswersHelpPage>ChatterAnswersHelp</chatterAnswersHelpPage>
    <chatterAnswersLoginPage>ChatterAnswersLogin</chatterAnswersLoginPage>
    <chatterAnswersRegistrationPage>ChatterAnswersRegistration</chatterAnswersRegistrationPage>
    <clickjackProtectionLevel>SameOriginOnly</clickjackProtectionLevel>
    <contentSniffingProtection>true</contentSniffingProtection>
    <customWebAddresses>
      <domainName>www.testing123.com</domainName>
      <primary>true</primary>
    </customWebAddresses>
    <description>Partners portal for My Company</description>
    <enableAuraRequests>true</enableAuraRequests>
    <favoriteIcon>favicon</favoriteIcon>
    <fileNotFoundPage>FileNotFound</fileNotFoundPage>
    <forgotPasswordPage>ForgotPassword</forgotPasswordPage>
    <genericErrorPage>Exception</genericErrorPage>
    <guestProfile>Guest</guestProfile>
    <inMaintenancePage>InMaintenance</inMaintenancePage>
    <inactiveIndexPage>Inactive</inactiveIndexPage>
    <indexPage>UnderConstruction</indexPage>
    <masterLabel>customSite</masterLabel>
    <myProfilePage>UserProfile</myProfilePage>
    <portal>Customer Portal</portal>
    <redirectToCustomDomain>true</redirectToCustomDomain>
    <referrerPolicyOriginWhenCrossOrigin>true</referrerPolicyOriginWhenCrossOrigin>
    <robotsTxtPage>RobotsTxt</robotsTxtPage>
    <selfRegPage>SelfReg</selfRegPage>
    <serverIsDown>MyServerDownResource</serverIsDown>
    <siteAdmin>admin@myco.org</siteAdmin>
    <siteGuestRecordDefaultOwner>admin@myco.org</siteGuestRecordDefaultOwner>
    <siteIframeWhiteListUrl>
      <url>example.com</url>
    </siteIframeWhiteListUrl>
    <siteTemplate>SiteTemplate</siteTemplate>
    <siteType>Siteforce</siteType>
    <subdomain>myco</subdomain>
    <urlPathPrefix>partners</urlPathPrefix>
</CustomSite>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Portal (atlas.en-us.api_meta.meta/api_meta/meta_portal.htm)
