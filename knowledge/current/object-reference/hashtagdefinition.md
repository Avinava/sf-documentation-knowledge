---
title: "HashtagDefinition"
domain: object-reference
topic: hashtagdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.019Z
estimatedTokens: 536
keywords: [HashtagDefinition, hashtag, topics, Chatter, posts, comments, include, profiles, groups, records, API, version, 26.0, later, Calls]
---

# HashtagDefinition

> HashtagDefinition represents hashtag (#) topics in public Chatter posts and comments.
  Public posts and comments include those on profiles and in public groups, but not those on records
  or in private groups. This object is available in API version 26.0 and later.

# HashtagDefinition

HashtagDefinition represents hashtag (#) topics in public Chatter posts and comments. Public posts and comments include those on profiles and in public groups, but not those on records or in private groups. This object is available in API version 26.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Starting in Spring ’16, API access to HashtagDefinition is disabled across all API versions. Any integrations relying on API queries to this object stop working. You can continue to use hashtags in posts and comments, and the hashtags continue to create corresponding topics. We recommend that you redirect all API queries and reports using the HashtagDefinition object to use the Topic object instead. For more information, see [Retiring the Legacy HashtagDefinition Object—FAQs](https://help.salesforce.com/apex/HTViewSolution?urlname=Retiring-the-Legacy-HashtagDefinition-Object "HTML (New Window)").

## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| HashtagCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of times a hashtag topic is used. |
| Name | TypestringPropertiesFilter, Nillable, SortDescriptionThe string of characters following the hashtag (#) in a hashtag topic. |
| NameNorm | TypestringPropertiesFilter, Nillable, SortDescriptionThe string of characters following the hashtag (#) in a hashtag topic, normalized to remove capitalization and punctuation. |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIdentifier of the community to which the HashtagDefinition belongs. This field is available only if digital experiences is enabled in your org. |

## Usage

Use this object to identify public hashtag topics and see how often they’re used.

#### See Also

-   [Topic](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topic.htm "Represents a topic on a Chatter post or record. This object is available in API version 28.0 and later.")

## Related Topics

- Topic (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_topic.htm)
