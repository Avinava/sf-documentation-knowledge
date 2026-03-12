---
title: "Topic"
domain: object-reference
topic: topic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.237Z
estimatedTokens: 539
keywords: [Topic, Chatter, post, record, API, version, 28.0, later, Calls, Usage, Associated, Objects]
---

# Topic

> Represents a topic on a Chatter post or record. This object is available in API version 28.0 and
			later.

# Topic

Represents a topic on a Chatter post or record. This object is available in API version 28.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDescription of the topic. |
| ManagedTopicType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of managed topic. Values are:ContentFeaturedNavigationalThis field is available in API version 44.0 and later. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateNoteYou can change only the spacing and capitalization of a topic name with the update property.DescriptionName of the topic. |
| NetworkId | TypereferencePropertiesCreate, Filter, Nillable, SortDescriptionIdentifier of the Experience Cloud site to which the topic belongs. This field is available only if digital experiences is enabled in your org. |
| TalkingAbout | TypeintPropertiesFilter, Group, SortDescriptionNumber of people talking about the topic over the last two months, based on factors such as topic additions and comments on posts with the topic. |

## Usage

Use this object to query a specific topic or to get a list of all topics, even those used solely in private groups and on records, and the number of people talking about them.

Use this object to create, edit, or delete topics. To create a topic, you must have the Create Topics permission. To edit a topic, you must have the Edit Topics permission. To delete a topic, you must have the Delete Topics or Modify All Data permission.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[TopicFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.") (API version 29.0)

Feed tracking is available for the object.

## Related Topics

- TopicFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
