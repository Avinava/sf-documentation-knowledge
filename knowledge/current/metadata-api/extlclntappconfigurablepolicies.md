---
title: "ExtlClntAppConfigurablePolicies"
domain: metadata-api
topic: extlclntappconfigurablepolicies
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.525Z
keywords: [ExtlClntAppConfigurablePolicies, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ExtlClntAppConfigurablePolicies

# ExtlClntAppConfigurablePolicies

Represents the policies for an external client app to disable or enable plugins.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ExtlClntAppConfigurablePolicies components have the suffix .ecaPlcy and are stored in the extlClntAppPolicies folder.

## Version

ExtlClntAppConfigurablePolicies components are available in API version 60.0 and later.

## Special Access Rules

The View all External Client Apps, view their settings, and edit their policies user permission is required for users with admin roles to configure OAuth policies.

## Fields

| Field Name | Description |
| --- | --- |
| externalClientApplication | Field TypestringDescriptionRequired.The name of the external client app associated with the plugins. |
| isEnabled | Field TypebooleanDescriptionRequired.If true, all plugins are enabled unless individually disabled. If false, all plugins are disabled. The default value is true. Available in API version 60.0 and later. |
| isCanvasPluginEnabled | Field TypebooleanDescriptionIf true, the Canvas app plugin is enabled. If false, the Canvas app plugin is disabled. The default value is true. Available in API version 66.0 and later. |
| isMobilePluginEnabled | Field TypebooleanDescriptionIf true, the Mobile plugin is enabled. If false, the Mobile plugin is disabled. The default value is true. Available in API version 63.0 and later. |
| isNotificationPluginEnabled | Field TypebooleanDescriptionIf true, the Notification plugin is enabled. If false, the Notification plugin is disabled. The default value is true. Available in API version 63.0 and later. |
| isOauthPluginEnabled | Field TypebooleanDescriptionIf true, the OAuth plugin is enabled. If false, the OAuth plugin is disabled. The default value is true. Available in API version 60.0 and later. |
| isPushPluginEnabled | Field TypebooleanDescriptionIf true, the Push Notification plugin is enabled. If false, the Push Notification plugin is disabled. The default value is true. Available in API version 63.0 and later. |
| isSamlPluginEnabled | Field TypebooleanDescriptionIf true, the SAML plugin is enabled. If false, the SAML plugin is disabled. The default value is true. Available in API version 63.0 and later. |
| label | Field TypestringDescriptionThe OAuth policies name for the external client app. |
| startPage | Field TypeExtlClntAppStartPage (enumeration type of string)DescriptionDetermines which URL to use for the start page.CustomNoneOAuthAvailable in API version 63.0 and later. |
| startUrl | Field TypestringDescriptionThe custom URL where users are directed after they authenticate. For example, direct users to a specific page in the service provider app. Available in API version 63.0 and later. |

## Declarative Metadata Sample Definition

This example shows an ExtlClntAppConfigurablePolicies component.

```

```

This example package.xml references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").