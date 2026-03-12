---
title: "SiteSettings"
domain: metadata-api
topic: sitesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.916Z
estimatedTokens: 1282
keywords: [SiteSettings, Represents, settings, Experience, Cloud, sites, Salesforce, Sites., File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# SiteSettings

> Represents the settings for Experience Cloud sites and for
				Salesforce Sites.

# SiteSettings

Represents the settings for Experience Cloud sites and for [Salesforce Sites](https://help.salesforce.com/articleView?id=sites_overview.htm&type=5&language=en_US "HTML (New Window)").

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

SiteSettings values are stored in a single file named Site.settings in the settings directory. The .settings files are different from other named components because there’s only one .settings file for each settings component.

## Version

SiteSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableEnhancedSitesAndContentPlatform | boolean | Indicates whether the enhanced sites and content platform for Experience Cloud is enabled for your org (true) or not (false). The default is true. When true, new LWR sites and enhanced CMS workspaces are hosted together on a redesigned platform that offers partial deployment, site content search, and easy content management. Enhanced LWR sites are represented by the DigitalExperienceBundle and DigitalExperienceConfig types. Available in API version 56.0 and later. |
| enableExpBuilderCopilot | boolean | Enables Agentforce (beta) in Experience Builder for enhanced LWR sites. The default value is false. Available in API 64.0 and later.NoteAgentforce Experience Builder Agent is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or your written Unified Pilot Agreement, and following terms in the Product Terms Directory: Non-GA Agentforce, the Non-GA Open AI LLM Provider and the Non-GA Credit Consumption. Use of this pilot or beta service consumes Einstein Requests and is at the Customer’s sole discretion. |
| enableExperienceFriendlyUrls | boolean | Indicates whether SEO-friendly URL snippets, or “slugs,” are enabled for your org (true) or not (false). The default is false. When true, available only in B2C Commerce LWR sites. Available only in API version 58.0. In API version 59.0 and later, use expFriendlyUrlsAsDefault in the Network type. |
| enableProxyLoginICHeader | boolean | Indicates whether security tokens for API logins from callouts (in API version 31.0 and earlier) are required (true) or not (false). The default value is true. |
| enableSitesRecordReassignOrgPref | boolean | Deprecated in API version 63.0 and later. When true, indicates when the org assigns records created by guest users of a site to a default owner in the org. When false, the guest user remains the owner of the record. The default value is false. Available in API version 48.0 through 63.0. |
| enableTopicsInSites | boolean | Indicates whether guest and authenticated external users can view topics in Salesforce Sites and Salesforce portals (true) or not (false). The default value is false. |
| enableVisualforceApiAccessAllowed | boolean | Deprecated in API version 52.0 and later. Allow users of Visualforce pages to override API access control restrictions and access APIs when the enableAdminApprovedAppsOnly in ConnectedAppSettings is enabled (true). The default value is false. |
| enableWebruntimeBYOTemplate | boolean | Indicates whether the Build Your Own (LWC) template is available in Experience Builder. The default value is false. Available in API version 48.0 and later. Removed in API version 51.0. |

## Declarative Metadata Sample Definition

The following is an example of a SiteSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SiteSettings xmlns="http://soap.sforce.com/2006/04/metadata">
     <enableProxyLoginICHeader>true</enableProxyLoginICHeader>
     <enableTopicsInSites>false</enableTopicsInSites>
</SiteSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Site</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- DigitalExperienceBundle (atlas.en-us.api_meta.meta/api_meta/meta_digitalexperiencebundle.htm)
- DigitalExperienceConfig (atlas.en-us.api_meta.meta/api_meta/meta_digitalexperienceconfig.htm)
- Network (atlas.en-us.api_meta.meta/api_meta/meta_network.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
