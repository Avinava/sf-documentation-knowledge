---
title: "CustomFeedFilter"
domain: metadata-api
topic: customfeedfilter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.504Z
keywords: [CustomFeedFilter, File, Suffix, Directory, Location, Version, Fields, FeedFilterCriterion, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CustomFeedFilter

# CustomFeedFilter

Represents a custom feed filter that limits the feed view to feeds from the Cases object. The custom feed filter shows only feed items that satisfy the criteria specified in the CustomFeedFilter definition. This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

CustomFeedFilter components have the suffix .feedFilter and are stored in the feedFilters folder.

## Version

CustomFeedFilter components are available in API version 35.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| criteria | FeedFilterCriterion [] | The criterion that defines which feed items are shown when the filter is applied. The feed filter displays all feed items that satisfy the criteria. |
| description | string | The description of the custom feed filter. For example, specify what feed items that filter shows. |
| label | string | Required. The API label of the custom feed filter. |
| isProtected | boolean | An auto-generated value. It currently has no impact. |

## FeedFilterCriterion

Represents the conditions that a feed item must satisfy to be displayed when a feed filter is applied.

| Field Name | Field Type | Description |
| --- | --- | --- |
| feedItemType | FeedItemType (enumeration of type string) | Required. The type of feed items that the filter shows.The feed item type can be one of the following values:AttachArticleEventCallLogPostCanvasPostCaseCommentPostChangeStatusPostChatTranscriptPostContentPostCreateRecordEventEmailMessageEventLinkPostMilestoneEventQuestionPostPollPostReplyPostSocialPostTextPost |
| feedItemVisibility | FeedItemVisibility (enumeration of type string) | The visibility of feed items that the filter shows. For example, you can show only poll posts that are visible internally.Valid values are:AllUsersInternalUsers |
| relatedSObjectType | string | The API name of the object that the feed item refers to. This field is typically used with the CreateRecordEvent feed item type.For example, a feed filter can show CreateRecordEvent feed items for the Cases object. |

## Declarative Metadata Sample Definition

The following is an example of a [CustomFeedFilter](#meta_customfeedfilter "Represents a custom feed filter that limits the feed view to feeds from the Cases object. The custom feed filter shows only feed items that satisfy the criteria specified in the CustomFeedFilter definition. This type extends the Metadata metadata type and inherits its fullName field.") component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").