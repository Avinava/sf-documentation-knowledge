---
title: "ChannelLayout"
domain: metadata-api
topic: channellayout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.636Z
keywords: [ChannelLayout, File, Suffix, Directory, Location, Version, Fields, ChannelLayoutItem, Declarative, Metadata, Sample, Definition]
---

# ChannelLayout

# ChannelLayout

Represents the metadata associated with a communication channel layout. Communication channel layouts let admins share article content inline into communication channels (for example, in email publishers, Experience Builder sites, or social media publishers). Admins can create a list of fields for an article type or record type that they want to share for each communication channel. You can customize the order of the fields.

## File Suffix and Directory Location

Channel layout components have the suffix .channelLayout and are stored in the channelLayouts folder of the corresponding package directory. The prefix must match with the article type API name. In Lightning Knowledge, the prefix must match the API name for the knowledge object.

## Version

Channel layout components are available in API version 32.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| doesExcludeFieldLabels | boolean | Indicates whether field labels are excluded from the field contents in the communication channels where this layout applies (true) or not (false). The default is false, meaning field labels are inserted. Available when Lightning Knowledge is enabled in API version 48.0 and later. |
| doesExcludeFiles | boolean | Indicates whether related files are left off emails (true) or attached to emails (false). The default is false, meaning related files are attached. Available when Lightning Knowledge is enabled in API version 48.0 and later. |
| enabledChannels | string[] | The communication channels where this layout applies. In API version 32.0 to 46.0, the only valid value is Email. When Lightning Knowledge is enabled in API version 47.0 and later, Chat, Messaging, and Social are added valid values. |
| label | string | Required. The label for this configuration. |
| layoutItems | ChannelLayoutItem[] | The article fields contained in the layout. The order here determines the field order. |
| recordType | string | The name of the record type that the channel layout applies to. The default is the primary record type. Available in API version 41.0 and later. |

## ChannelLayoutItem

| Field Name | Field Type | Description |
| --- | --- | --- |
| field | string | Required. Name of the field. The format is ArticleTypeName.FieldName or, in Lightning Knowledge, KnowledgeBaseName.FieldName. |

## Declarative Metadata Sample Definition

The following is an example of a ChannelLayout component.

```

```

The following is an example package.xml that references the previous definition.

```

```