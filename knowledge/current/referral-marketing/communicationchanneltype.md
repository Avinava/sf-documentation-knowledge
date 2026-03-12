---
title: "CommunicationChannelType"
domain: referral-marketing
topic: communicationchanneltype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.864Z
estimatedTokens: 506
keywords: [CommunicationChannelType, channel, WhatsApp, Telegram, that's, communication, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, SMS, API, version, 63.0, later]
---

# CommunicationChannelType

> Represents the channel type, such as WhatsApp or Telegram
			that's used for communication.

# CommunicationChannelType

Represents the channel type, such as WhatsApp or Telegram that's used for communication.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=referral_marketing)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CommunicationChannelType components have the suffix .communicationChannelType and are stored in the communicationChannelTypes folder.

## Version

CommunicationChannelType components are available in API version 63.0 and later.

## Special Access Rules

To use this metadata type, your org must have at least one of these features enabled:

-   Industries Offer Management
-   Industries Referral Marketing

## Fields

| Field Name | Description |
| --- | --- |
| channelName | Field TypestringDescriptionRequired. Name of the channel that's used for communication, such as WhatsApp or Telegram. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for communication channel type, which is defined when the communication channel type is created. |

## Declarative Metadata Sample Definition

The following is an example of a CommunicationChannelType component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CommunicationChannelType xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Test1</masterLabel>
    <channelName>WhatsApp</channelName>
</CommunicationChannelType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>CommunicationChannelType</name>
    </types>
    <version>66.0</version>
</Package>
```
