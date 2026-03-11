---
title: "ObjectLinkingSettings (Beta)"
domain: metadata-api
topic: objectlinkingsettings-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.764Z
keywords: [ObjectLinkingSettings, Beta, Note, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition]
---

# ObjectLinkingSettings (Beta)

# ObjectLinkingSettings (Beta)

Represents the channel-object linking settings for an org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

As a beta feature, Channel-Object Linking is a preview and isn’t part of the “Services” under your Main Services Agreement with Salesforce. Use this feature at your sole discretion, and make your purchase decisions only on the basis of generally available products and features. Salesforce doesn’t guarantee general availability of this feature within any particular time frame or at all, and we can discontinue it at any time. This feature is for evaluation purposes only, not for production use. It’s offered as is and isn’t supported, and Salesforce has no liability for any harm or damage arising out of or in connection with it. All restrictions, Salesforce reservation of rights, obligations concerning the Services, and terms for related Non-Salesforce Applications and Content apply equally to your use of this feature. For information on enabling this feature, contact Salesforce.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

ObjectLinkingSettings values are stored in the ObjectLinking.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ObjectLinkingSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableObjectLinking | boolean | Indicates whether Channel-Object Linking is enabled, allowing you to link channel interactions to objects such as Contacts. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of an ObjectLinkingSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```