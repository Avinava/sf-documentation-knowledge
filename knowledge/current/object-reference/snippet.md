---
title: "Snippet"
domain: object-reference
topic: snippet
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.295Z
estimatedTokens: 597
keywords: [Snippet, container, rich, text, reused, across, Account, Engagement, emails, email, templates, API, version, 47.0, later]
---

# Snippet

> Represents a snippet, which is a container for rich text that can be
			reused across Account Engagement emails and email templates. This object is
		available in API version 47.0 and later.

# Snippet

Represents a snippet, which is a container for rich text that can be reused across Account Engagement emails and email templates. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Snippets are available in Account Engagement business units with the Sales, CRM, or Service permission set license.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the snippet. Limited to 32 KB. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. This field value is unique to your org and is required for a Snippet to be resolved in marketing content. Label is API Name. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the snippet. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of content a snippet includes. Allowable values are: Date, Image, Link, Text. This field is for organizational purposes. |
| Value | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe body content of a snippet. This field can contain plain or rich text. The value of a snippet is resolved when a marketing email is sent. The field does not support emojis, HTML, or image files. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[SnippetFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- SnippetFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
