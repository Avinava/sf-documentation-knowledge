---
title: "OauthOidcSettings"
domain: metadata-api
topic: oauthoidcsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.448Z
estimatedTokens: 852
keywords: [OauthOidcSettings, Represents, org, settings, disabling, OAuth, OpenID, Connect, authorization, flows., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules]
---

# OauthOidcSettings

> Represents org settings for disabling OAuth
      OpenID Connect authorization flows.

# OauthOidcSettings

Represents org settings for disabling OAuth OpenID Connect authorization flows.

## Parent Type and Manifest Access

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_settings.htm) for more details.

## File Suffix and Directory Location

OauthOidcSettings values are stored in the OauthOidc.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

OauthOidcSettings is available in API version 56.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| agentAuthLinking | Field TypebooleanDescriptionFor internal use only. |
| blockOAuthUnPwFlow | Field TypebooleanDescriptionIndicates whether the username-password flow is blocked (true) or not blocked (false). The default value is false. |
| blockOAuthUsrAgtFlow | Field TypebooleanDescriptionIndicates whether the user-agent flow is blocked (true) or not blocked (false). The default value is false. |
| enableHdlessFgtPswFlow | Field TypebooleanDescriptionFor internal use only. |
| isPkceRequired | Field TypebooleanDescriptionIndicates whether the OAuth 2.0 Proof Key for Code Exchange (PKCE) security extension is required for variations of the OAuth authorization code flow that access this org (true) or not (false). This setting requires PKCE for all supported variations of the authorization code flow, including the web server flow, the Authorization Code and Credentials Flow, and their derivatives. The default value is false. This field is available in API version 59.0 and later. |
| oAuthCdCrdtFlowEnable | Field TypebooleanDescriptionIndicates whether the Authorization Code and Credentials Flow is enabled (true) or blocked (false). The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of the OauthOidcSettings file.

```

```

## Example Package Manifest

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version=“1.0” encoding=“UTF-8"?>
<OauthOidcSettings xmlns=“http://soap.sforce.com/2006/04/metadata”>
    <blockOAuthUnPwFlow>true</blockOAuthUnPwFlow>
    <blockOAuthUsrAgtFlow>true</blockOAuthUsrAgtFlow>
    <oAuthCdCrdtFlowEnable>false</oAuthCdCrdtFlowEnable>
</OauthOidcSettings>
```

```
<?xml version=“1.0" encoding=“UTF-8”?>
<Package xmlns=“http://soap.sforce.com/2006/04/metadata”>
  <types>
    <members>OauthOidc</members>
    <name>Settings</name>
  </types>
  <version>56.0</version>
</Package>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
