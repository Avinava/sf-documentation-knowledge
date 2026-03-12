---
title: "$Site"
domain: pages
topic: site
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.442Z
estimatedTokens: 1542
keywords: [$Site, merge, referencing, current, Salesforce, site, Usage]
---

# $Site

> A global merge field type to use when referencing information about the current
  Salesforce site.

# $Site

A global merge field type to use when referencing information about the current Salesforce site.

## Usage

Use dot notation to access information about the current Salesforce site. Note that only the following site fields are available:

| Merge Field | Description |
| --- | --- |
| $Site.Name | Returns the API name of the current site. |
| $Site.Domain | Returns your Salesforce Sites based URL. |
| $Site.CustomWebAddress | Returns the request's custom URL if it doesn't end in force.com or returns the site's primary custom URL. If neither exist, then this returns an empty string. Note that the URL's path is always the root, even if the request's custom URL has a path prefix. If the current request is not a site request, then this field returns an empty string. This field's value always ends with a / character. Use of $Site.CustomWebAddress is discouraged and we recommend using $Site.BaseCustomUrl instead. |
| $Site.OriginalUrl | Returns the original URL for this page if it’s a designated error page for the site; otherwise, returns null. |
| $Site.CurrentSiteUrl | Returns the base URL of the current site that references and links should use. Note that this field might return the referring page's URL instead of the current request's URL. This field's value includes a path prefix and always ends with a / character. If the current request is not a site request, then this field returns an empty string. Use of $Site.CurrentSiteUrl is discouraged. Use $Site.BaseUrl instead. |
| $Site.LoginEnabled | Returns true if the current site is associated with an active login-enabled portal; otherwise returns false. |
| $Site.RegistrationEnabled | Returns true if the current site is associated with an active self-registration-enabled Customer Portal; otherwise returns false. |
| $Site.IsPasswordExpired | For authenticated users, returns true if the currently logged-in user's password is expired. For non-authenticated users, returns false. |
| $Site.AdminEmailAddress | Returns an empty string. This merge field is deprecated. |
| $Site.Prefix | Returns the URL path prefix of the current site. For example, if your site URL is MyDomainName.my.salesforce-sites.com/partners, /partners is the path prefix. Returns null if the prefix isn’t defined. If the current request is not a site request, then this field returns an empty string. |
| $Site.Template | Returns the template name associated with the current site; returns the default template if no template has been designated. |
| $Site.ErrorMessage | Returns an error message for the current page if it’s a designated error page for the site and an error exists; otherwise, returns an empty string. |
| $Site.ErrorDescription | Returns the error description for the current page if it’s a designated error page for the site and an error exists; otherwise, returns an empty string. |
| $Site.AnalyticsTrackingCode | The tracking code associated with your site. Services such as Google Analytics can use this code to track page request data for your site. |
| $Site.BaseCustomUrl | Returns a base URL for the current site that doesn’t use a subdomain. The returned URL uses the same protocol (HTTP or HTTPS) as the current request if at least one non-force.com custom URL that supports HTTPS exists on the site. The returned value never ends with a / character. If all the custom URLs in this site end in force.com or salesforce-sites.com, or this site has no custom URLs, then this returns an empty string. If the current request is not a site request, then this method returns an empty string.This field replaces CustomWebAddress and includes the custom URL's path prefix. |
| $Site.BaseInsecureUrl | This merge field is deprecated. Returns a base URL for the current site that uses HTTP instead of HTTPS. The current request's domain is used. The returned value includes the path prefix and never ends with a / character. If the current request is not a site request, then this method returns an empty string |
| $Site.BaseRequestUrl | Returns the base URL of the current site for the requested URL. This isn't influenced by the referring page's URL. The returned URL uses the same protocol (HTTP or HTTPS) as the current request. The returned value includes the path prefix and never ends with a / character. If the current request is not a site request, then this method returns an empty string. |
| $Site.BaseSecureUrl | Returns a base URL for the current site that uses HTTPS instead of HTTP. The current request's domain is preferred if it supports HTTPS. Domains that are not force.com subdomains are preferred over force.com subdomains. A force.com subdomain, if associated with the site, is used if no other HTTPS domains exist in the current site. If there are no HTTPS custom URLs in the site, then this method returns an empty string. The returned value includes the path prefix and never ends with a / character. If the current request is not a site request, then this method returns an empty string. |
| $Site.BaseUrl | Returns the base URL of the current site that references and links should use. Note that this field may return the referring page's URL instead of the current request's URL. This field's value includes the path prefix and never ends with a / character. If the current request is not a site request, then this field returns an empty string.This field replaces $Site.CurrentSiteUrl. |
| $Site.MasterLabel | Returns the value of the Master Label field for the current site. If the current request is not a site request, then this field returns an empty string. |
| $Site.SiteId | Returns the ID of the current site. If the current request is not a site request, then this field returns an empty string. |
| $Site.SiteType | Returns the API value of the Site Type field for the current site. If the current request is not a site request, then this field returns an empty string. |
| $Site.SiteTypeLabel | Returns the value of the Site Type field's label for the current site. If the current request is not a site request, then this field returns an empty string. |

## Example

The following example shows how to use the $Site.Template merge field:

```

```

## Code Examples

```
<apex:page title="Job Application Confirmation" showHeader="false" 
    standardStylesheets="true">

    <!-- The site template provides layout & style for the site -->
    <apex:composition template="{!$Site.Template}">

    <apex:define name="body">
        <apex:form>
            <apex:commandLink value="<- Back to Job Search" 
                onclick="window.top.location='{!$Page.PublicJobs}';return false;"/>
            <br/>
            <br/>
            <center>
                <apex:outputText value="Your application has been saved. 
                    Thank you for your interest!"/>
            </center>
            <br/>
            <br/>
        </apex:form>
    </apex:define>
    
    </apex:composition>
</apex:page>
```
