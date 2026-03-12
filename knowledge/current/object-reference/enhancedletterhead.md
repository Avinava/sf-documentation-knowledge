---
title: "EnhancedLetterhead"
domain: object-reference
topic: enhancedletterhead
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.681Z
estimatedTokens: 441
keywords: [EnhancedLetterhead, enhanced, letterhead, associated, Lightning, email, template, doesn’t, Salesforce, Merge, Language, SML, API, version, 46.0]
---

# EnhancedLetterhead

> Represents an enhanced letterhead that can be associated with a
			Lightning email template that doesn’t use the Salesforce Merge Language (SML). This
		object is available in API version 46.0 and later.

# EnhancedLetterhead

Represents an enhanced letterhead that can be associated with a Lightning email template that doesn’t use the Salesforce Merge Language (SML). This object is available in API version 46.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), describeLayout(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription of the contents of the header and footer. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when this enhanced letterhead was last used. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate and time when this enhanced letterhead was last viewed. |
| LetterheadFooter | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe contents of the enhanced letterhead’s footer. |
| LetterheadHeader | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe contents of the enhanced letterhead’s header. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the enhanced letterhead, such as Standard Company Letterhead. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[EnhancedLetterheadFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

## Related Topics

- EnhancedLetterheadFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
