---
title: "FeedRevision"
domain: object-reference
topic: feedrevision
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.110Z
estimatedTokens: 672
keywords: [FeedRevision, Holds, revision, history, specific, feed, item, comment, including, attributes, changed, API, version, 34.0, later]
---

# FeedRevision

> Holds the revision history of a specific feed item or comment,
      including a list of attributes that changed for each revision. This object is available in API version 34.0 and
    later.

# FeedRevision

Holds the revision history of a specific feed item or comment, including a list of attributes that changed for each revision. This object is available in API version 34.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| Action | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionHolds the type of modification to the underlying feed item or comment attribute. Action can have the value Changed. |
| EditedAttribute | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIdentifies the part of the feed item or comment which was modified. A single revision can have many edited attributes. |
| FeedEntityId | TypereferencePropertiesFilter, Group, SortDescriptionIdentifies the modified feed item or comment. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record has been moved to the Recycle Bin (true) or not (false). This field is a standard system field. |
| IsValueRichText | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the feed item Body contains rich text. If you post a rich text feed comment using SOAP API, set IsRichText to true and escape HTML entities from the body. Otherwise, the post is rendered as plain text.Rich text supports the following HTML tags:<p>TipThough the <br> tag isn’t supported, you can use <p>&nbsp;</p> to create lines.<a><b><code><i><u><s><ul><ol><li><img>The <img> tag is accessible only through the API and must reference files in Salesforce similar to this example: <img src="sfdc://069B0000000omjh"></img>NoteIn API version 35.0 and later, the system replaces special characters in rich text with escaped HTML. In API version 34.0 and prior, all rich text appears as a plain-text representation. |
| OriginNetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Experience Cloud site in which a user modified the feed item or comment. This field is only available, if digital experiences is enabled for your org. |
| Revision | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe revision number of the feed item or comment. |
| Value | TypetextareaPropertiesNillableDescriptionIdentifies the value of the EditedAttribute field before the update. |

## Usage

This object tracks the changes made to a feed item or feed comment and stores a list of attributes that changed for each revision.

-   To query the FeedRevision object, users need the View All Data permission or supply a WHERE clause on the FeedEntityId.

## Related Topics

- IsDeleted (atlas.en-us.object_reference.meta/object_reference/system_fields.htm)
- reference (atlas.en-us.object_reference.meta/object_reference/field_types.htm)
- Filter (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
- Group (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
- Nillable (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
- Sort (atlas.en-us.object_reference.meta/object_reference/access_for_fields.htm)
