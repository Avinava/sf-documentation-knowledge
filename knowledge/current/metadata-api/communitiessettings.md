---
title: "CommunitiesSettings"
domain: metadata-api
topic: communitiessettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.532Z
estimatedTokens: 1744
keywords: [CommunitiesSettings, community, settings, org, Enable, digital, experiences, workspaces, Manage, moderation, guest, user, partner, extends, Metadata]
---

# CommunitiesSettings

> Represents community settings for an org. Enable digital experiences and workspaces.
    Manage moderation, guest user and partner settings, and more. This type extends the Metadata metadata type and inherits its
                        fullName field.

# CommunitiesSettings

Represents community settings for an org. Enable digital experiences and workspaces. Manage moderation, guest user and partner settings, and more. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

CommunitiesSettings values are stored in the Communities.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

CommunitiesSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| applyLoginPageTypeToEmbeddedLogin | boolean | When true, applies the Experience Cloud site login page type (default, Login Discovery, Experience Builder, or Visualforce) to all Embedded Login implementations. When false, applies the username and password login page type to all Embedded Login implementations.For orgs created before the Salesforce Summer ‘20 release, the default setting is false. For new orgs, the default setting is true. Available in API version 49.0 and later. |
| blockEmbeddedLoginUnknownURLRedirect | boolean | When true, blocks redirects to unknown URLs that are provided in the state parameter of the OAuth response during a server-side callback. Redirects are allowed when the URL is in the same host or domain as the site, or is allow-listed in the Embedded Login salesforce-allowed-domains meta tag. When false, all redirects are allowed.For orgs created before the Salesforce Summer ‘21 release, the default setting is false. For new orgs, the default setting is true. Available in API version 52.0 and later. |
| canModerateAllFeedPosts | boolean | When true, allows moderation features, such as flags and rules, to be set on all feed posts including posts that are visible in Experience Cloud sites. When set to false, only feed posts in sites can be moderated. Default is false. |
| canModerateInternalFeedPosts | boolean | When true, allows moderation features, such as flags and rules, to be set on record feed posts created by internal users. Such posts can also be visible in multiple sites. Default is false. |
| embeddedVisualforcePages | boolean | When true, allows links to Visualforce pages from other Visualforce pages in Salesforce via the API. Default is false. Available in API version 48.0 and later. |
| enableCommunityWorkspaces | boolean | When true, allows admins to enable Experience Workspaces. Available in API version 48.0 and later. |
| enableCspContactVisibilityPref | boolean | When true, allows users to see contacts from private accounts that they have read access to, when the contact is controlled by the parent record. Available in API version 48.0 and later. |
| enableCspNotesOnAccConPref | boolean | When true, allows customer users to access notes and attachments associated with accounts and contacts. Available in API version 48.0 and later. |
| enableEnablePRM | boolean | When true, allows admins to enable partner users. Available in API version 48.0 and later. |
| enableExternalAccHierPref | boolean | When true, enables the External Account Hierarchy object. Available in API version 48.0 and later. |
| enableGuestRecordReassignOrgPref | boolean | Deprecated in API version 63.0 and later. When true, allows admins to set a default owner for records created by guest users. Available in API version 48.0 through 63.0. |
| enableGuvSecurityOptOutPref | boolean | When true, guest user visibility can be turned off. Available in API version 49.0 and later. |
| enableInviteChatterGuestEnabled | boolean | When true, allows guest users to be invited to use Chatter. Available in API version 48.0 and later. |
| enableNetPortalUserReportOpts | boolean | When true, allows external users in Experience Cloud sites, with permission, to run reports. Available in API version 48.0 and later. |
| enableNetworksEnabled | boolean | When true, allows users to enable digital experiences. Available in API version 47.0 and later. |
| enableOotbProfExtUserOpsEnable | boolean | When true, allows use of standard external profiles for self-registration and user creation. Available in API version 48.0 and later. |
| enablePreventBadgeGuestAccess | boolean | When true, hides badges from guest users in Experience Builder sites. Available in API version 53.0 and later. |
| enablePowerCustomerCaseStatus | boolean | When true, allows users with Customer Community Plus licenses to change case status. Available in API version 48.0 and later. |
| enablePRMAccRelPref | boolean | When true, enables Account Relationship object and Account Relationship Data Sharing Rule setup options. Available in API version 48.0 and later. |
| enableRelaxPartnerAccountFieldPref | boolean | When true, allows editing for partner account fields on and opportunities and leads. Available in API version 48.0 and later. |
| enableUnsupportedBrowserModalPref | boolean | When true, warnings about unsupported browsers are displayed in Experience Cloud sites. Available in API version 48.0 and later. |
| enableUsernameUniqForOrgPref | boolean | When true, username uniqueness is set at the org level. Available in API version 48.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a CommunitiesSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<CommunitiesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <canModerateAllFeedPosts>true</canModerateAllFeedPosts>
    <canModerateInternalFeedPosts>true</canModerateInternalFeedPosts>
</CommunitiesSettings>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>Communities</members>
<name>Settings</name>
</types>
<version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
