---
title: "FeedPost"
domain: object-reference
topic: feedpost
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.103Z
estimatedTokens: 1392
keywords: [FeedPost, changes, record, feed, AccountFeed, text, posts, link, content, API, version, 18.0, 21.0, longer, later]
---

# FeedPost

> FeedPost represents the following types of
    changes in a record feed, such as AccountFeed: text posts, link posts, and content
   posts.
  This object is available in API version 18.0 through 21.0. FeedPost
   is no longer available in later versions. Starting with API version 21.0, use FeedItem to
   represent text posts, link posts, and content posts in feeds.

# FeedPost

FeedPost represents the following types of changes in a record feed, such as AccountFeed: text posts, link posts, and content posts. This object is available in API version 18.0 through 21.0. FeedPost is no longer available in later versions. Starting with API version 21.0, use FeedItem to represent text posts, link posts, and content posts in feeds.

## Supported Calls

create(), delete(), describeSObjects(), search()

## Special Access Rules

You can delete all feed items you created. To delete feed items you didn’t create, you must have one of these permissions:

-   “Modify All Data”
-   “Modify All Records” on the object associated with the feed and delete permission on the parent feed
-   “Moderate Chatter”

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    Users with the “Moderate Chatter” permission can delete only the feed items and comments they can see.

-   Manage Unlisted Groups

    Only users with this permission can delete items in unlisted groups.


Only users with the Modify All Data permission can delete a feed item of Type TrackedChange.

If the context user has the Insert System Field Values for Chatter Feeds user permission, the create field property is available on CreatedBy and CreatedDate system fields. During migration, the context user can set these fields to the original post’s author and creation date. The fields can’t be updated after migration.

## Fields

| Field | Details |
| --- | --- |
| Body | TypestringPropertiesCreate, Filter, Nillable, SortDescriptionThe content of the FeedPost. Required when Type is TextPost or AdvancedTextPost. Optional when Type is ContentPost or LinkPost. |
| ContentData | Typebase64PropertiesCreate, NillableDescriptionThis field is required if Type is ContentPost. Encoded file data in any format, and can’t be 0 bytes. Setting this field automatically sets Type to ContentPost. |
| ContentDescription | TypestringPropertiesCreate, Nillable, SortDescriptionThe description of the file specified in ContentData. |
| ContentFileName | TypestringPropertiesCreate, Group, Nillable, SortDescriptionThis field is required if Type is ContentPost. The name of the file uploaded to the feed. Setting ContentFileName automatically sets Type to ContentPost. |
| ContentSize | TypeintPropertiesGroup, Nillable, SortDescriptionThis field is the size of the file (in bytes) uploaded to the feed. This field is read-only and is automatically determined during insert. |
| ContentType | TypestringPropertiesGroup, Nillable, SortDescriptionThis field is the MIME type of the file uploaded to the feed. This field is read-only and is automatically determined during insert. |
| FeedItemId | TypereferencePropertiesFilter, Group, SortDescriptionID of the feed containing the FeedPost. |
| InsertedById | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who added this item to the feed. For example, if an application migrates posts and comments from another application into a feed, the InsertedBy value is set to the ID of the context user. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the record has been moved to the Recycle Bin (true) or not (false). This field is a standard system field. |
| LinkUrl | TypeurlPropertiesCreate, Filter, Nillable, SortDescriptionThe URL of a LinkPost. |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the object type to which the FeedPost is related. For example, set this field to a UserId to post to someone’s profile feed, or an AccountId to post to a specific account. |
| Title | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe title of the FeedPost. When the Type is LinkPost, the Body is the URL and the Title is the label for the link. |
| Type | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe type of FeedPost:UserStatus—automatically generated when a user updates their statusTrackedChange—ignoreTextPost—a direct text entry on a feedLinkPost—a URL posting on a feedContentPost—an uploaded file on a feedNoteIf you set Type to ContentPost, you must specify ContentData and ContentFileName. |

## Usage

-   You can’t directly query for a FeedPost. FeedPosts are always associated with a feed item, so you can query for them through the feeds. The following example returns all feed items for a given account, ordered by date descending:

    ```

    ```

-   A FeedPost of type UserStatus is automatically created when a user adds a post to update the current status. You can’t explicitly create a FeedPost of type UserStatus.
-   The size limit for an attachment on a profile, news, or record feed is 2 GB.
-   You can’t use the content fields to update or delete the content.
-   You can’t filter or update the content fields.
-   Deleting a FeedPost via the API also deletes the associated content and FeedPost objects. Likewise, undeleting a FeedPost restores associated content and FeedPost objects.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    This object is hard deleted. It isn’t sent to the Recycle Bin.

-   After uploading to a feed, it is possible for an attachment or document to be deleted, marked private, or hidden by sharing rules. In this case, all content fields in FeedPost appear as null in a SOQL query.
-   You can’t explicitly create or delete a FeedTrackedChange record.

## Code Examples

```
SELECT Id, Type, FeedPost.Body 
FROM AccountFeed 
WHERE ParentId = AccountId ORDER BY CreatedDate DESC
```
