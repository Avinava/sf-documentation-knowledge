---
title: "LightningMessageChannel"
domain: metadata-api
topic: lightningmessagechannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.358Z
estimatedTokens: 1118
keywords: [LightningMessageChannel, metadata, associated, Lightning, Message, Channel, secure, communicate, across, technologies, Web, Components, Aura, Visualforce, File]
---

# LightningMessageChannel

> Represents the metadata
   associated with a Lightning Message Channel. A Lightning Message Channel
   represents a secure channel to communicate across UI technologies, such as
   Lightning Web Components, Aura Components, and Visualforce.

# LightningMessageChannel

Represents the metadata associated with a Lightning Message Channel. A Lightning Message Channel represents a secure channel to communicate across UI technologies, such as Lightning Web Components, Aura Components, and Visualforce.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Before you include a Lightning Message Channel in a managed package, review these considerations.

-   To pass the [AppExchange Security Review](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/security_review_guidelines.htm "HTML (New Window)"), you must set the isExposed field to false.
-   If you set the isExposed field to true, you can’t change the value to false at a later time. This consideration applies to Lightning Message Channels in managed packages and Lightning Message Channels that other components reference.
-   Visualforce supports only Lightning Message Channels where isExposed is true, so managed packages with a Lightning Message Channel in Visualforce can’t pass the AppExchange Security Review. See [Considerations and Limitations](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/message_channel_considerations.htm "HTML (New Window)") in the *Visualforce Developer Guide*.

## File Suffix and Directory Location

LightningMessageChannel components have the suffix .messageChannel and are stored in the messageChannels folder.

## Version

LightningMessageChannel components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description of the Lightning Message Channel. |
| isExposed | boolean | Indicates whether a Lightning Message Channel is exposed to components in other namespaces (true) or not (false). The default value is false. |
| lightningMessageFields | LightningMessageField[] | A list of message payload fields for a given Lightning Message Channel. |
| masterLabel | string | Required. The label for a Lightning Message Channel. |

## LightningMessageField

Represents a message payload field for a given Lightning Message Channel.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description for a Lightning Message Field. |
| fieldName | string | Required. Unique identifier of the Lightning Message Field. |

## Declarative Metadata Sample Definition

Here’s a simple example of a LightningMessageChannel component.

```

```

Here’s an example of a LightningMessageChannel component with LightningMessageFields.

```

```

Here’s an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [*Lightning Web Components Developer Guide*: Communicate Across the DOM with Lightning Message Service](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel.html "Lightning Web Components Developer Guide:
    Communicate Across the DOM with Lightning Message
    Service - html (New Window)")

-   [*Second-Generation Managed Packaging Developer Guide*: Components Available in Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm "Second-Generation Managed Packaging Developer
    Guide: Components Available in Managed Packages - html (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningMessageChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>SampleMessageChannel</masterLabel>
    <isExposed>true</isExposed>
    <description>This is a sample Lightning Message Channel.</description>
</LightningMessageChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningMessageChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>SampleMessageChannel</masterLabel>
    <isExposed>true</isExposed>
    <description>This is a sample Lightning Message Channel.</description>
    <lightningMessageFields>
        <fieldName>recordId</fieldName>
        <description>This is the record Id that changed</description>
    </lightningMessageFields>
    <lightningMessageFields>
        <fieldName>recordData</fieldName>
        <description>The current data representing the record that changed</description>
    </lightningMessageFields>
</LightningMessageChannel>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>LightningMessageChannel</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
