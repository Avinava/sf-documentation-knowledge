---
title: "FeedComment"
domain: object-reference
topic: feedcomment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.043Z
estimatedTokens: 2414
keywords: [FeedComment, comment, added, feed, user.This, API, version, 18.0, later, Calls, Special, Access, Rules, Usage]
---

# FeedComment

> Represents a comment added to a feed by a
        user.This object is available in API version 18.0 and later.

# FeedComment

Represents a comment added to a feed by a user.This object is available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

Note the following when working with feed comments.

-   You must have read access to the feed’s parent type to see a FeedComment record.
-   You must be able to access the feed to add a comment.
-   If the comment is related to a user record, the user can delete the comment. For example, if John Smith makes a comment on Sasha Jones’ profile feed, Sasha can delete the comment.
-   If the context user has the Insert System Field Values for Chatter Feeds user permission, the create field property is available on CreatedBy and CreatedDate system fields. During migration, the context user can set these fields to the original post’s author and creation date. The fields can’t be updated after migration.

You can delete all feed items you created. To delete feed items you didn’t create, you must have one of these permissions:

-   Modify All Data
-   Modify All Records on the object associated with the feed and delete permission on the parent feed
-   Moderate Chatter

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    Users with the Moderate Chatter permission can delete only the feed items and comments they can see.

-   Manage Unlisted Groups

    Only users with this permission can delete items in unlisted groups.


## Fields

| Field | Details |
| --- | --- |
| CommentBody | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionThe text in the comment. |
| CommentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of comment:ContentComment—an uploaded file on a commentTextComment—a direct text entry on a commentBefore API version 24.0, a text entry was required on a comment. As of version 24.0, a text entry is optional if the CommentType is ContentComment. |
| FeedItemId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the feed item containing the comment. |
| HasEntityLinks | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the feed CommentBody includes at least one link to a record.NoteThis field is available starting in API version 43.0. |
| InsertedById | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who added this item to the feed. For example, if an application migrates posts and comments from another application into a feed, the InsertedBy value is set to the ID of the context user.This is a relationship field.Relationship NameInsertedByRelationship TypeLookupRefers ToUser |
| IsRichText | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the feed CommentBody contains rich text. If you post a rich text feed comment using SOAP API, set IsRichText to true and escape HTML entities from the body. Otherwise, the comment is rendered as plain text.Rich text supports the following HTML tags:<p>TipThough the <br> tag isn’t supported, you can use <p>&nbsp;</p> to create lines.<a><b><code><i><u><s><ul><ol><li><img>The <img> tag is accessible only through the API and must reference files in Salesforce similar to this example: <img src="sfdc://069B0000000omjh"></img>NoteThis attribute is available as of API version 38.0. In API version 38.0 and later, the system replaces special characters in rich text with escaped HTML. In API version 37.0 and prior, all rich text appears as a plain-text representation. |
| IsVerified | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDetermines whether a comment on a question is marked as Company Verified.This field is available in API version 41.0 and later. |
| LastEditById | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the user who last edited the feed comment. |
| LastEditDate | TypedatetimePropertiesCreate, Filter, Nillable, SortDescriptionThe date the feed comment was last edited. |
| ParentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of a record associated with the feed comment. For example, if you are commenting on a change to a field on Account, ParentId is set to the account ID. |
| RelatedRecordId | TypereferencePropertiesCreate, Group, Nillable, SortDescriptionID of the ContentVersion record associated with a ContentComment. This field is null for all comments except ContentComment.For example, set this field to an existing ContentVersion ID and set the CommentType to ContentComment. |
| Revision | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe number of times the comment was revised. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether this feed comment is published and visible to all who can access the parent feed item. To change a comment’s status, the comment’s parent feed item must be in a published state. This field is available in API version 38.0 and later.Possible values are:Published—The comment is visible to all who can access the parent feed item.PendingReview—The comment is visible to its author. Users see the parent feed item and have View All Data or Can Approve Feed Post and Comment permission also see the comment. The author can delete the comment as can users who see the comment and have Can Approve Feed Post and Comment or Modify All Data permission. If the parent feed item is published, the author can edit the comment. Users who see the comment and have Can Approve Feed Post and Comment or Modify All Data permission can also edit the comment. Users with Can Approve Feed Post and Comment or Modify All Data permission can change comment status from Published to PendingReview and from PendingReview to Published.Some actions are blocked when a feed comment is pending review:Select as Best—When a feed comment that is marked as best answer becomes unpublished, it’s removed as the best answer. If the comment is published, its best answer status is not restored.Like and unlikeIsolated—The comment is visible only to admins. After an item is isolated, the author no longer has view or edit access. The admin user can edit, view, and delete isolated feed comments. |
| SystemModstamp | TypedatetimePropertiesDefaulted on create, FilterDescriptionDate and time when a user or automated process (such as a trigger) last modified this record. In this context, "trigger" refers to Salesforce code that runs to implement standard functionality, and not an Apex trigger. SystemModstamp is a read-only system field, available in FeedComment as of API version 37.0. |
| ThreadChildrenCount | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe count of comments associated with this parent feed object. The feed object can be either a Feed Item or a Feed Comment. The count shows how many comments are directly subordinate to the parent. This field is available on the object when Allow discussion threads is selected in the Administration Workspace. This field is available in API version 44.0 and later. |
| ThreadLastUpdatedDate | TypedateTimePropertiesCreate, Filter, Nillable, SortDescriptionThe date and time the thread on this comment was last updated. This field is available on the object when Allow discussion threads is selected in the Administration Workspace. This field is available in API version 44.0 and later. |
| ThreadLevel | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe identifier that shows the level of this Feed Comment in a thread. By default, there are a maximum of three levels in a thread. The ThreadLevel value shows in which of the three levels this comment falls. This field is available on the object when Allow discussion threads is selected in the Administration Workspace. This field is available in API version 44.0 and later. |
| ThreadParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe identifier of the feed item that is the parent of this comment. This field is available on the object when Allow discussion threads is selected in the Administration Workspace. This field is available in API version 44.0 and later.This is a relationship field.Relationship NameThreadParentRelationship TypeLookupRefers ToFeedComment |

## Usage

-   As of API version 23.0 and later, if you have View All Data permission, you can query FeedComment records directly without an ID filter. If you don’t have View All Data permission, you can’t query FeedComment records directly, with or without an ID filter.

    For example, the following query returns general information about a feed:

    ```

    ```

-   You can search for text in comments using SOSL. For example, the following Java class uses search() to find the string “foo” in any field of a record:

    ```

    ```

-   If you use an Apex trigger to modify the Body of a FeedComment object, all mentions hyperlinks are converted to plain text. The mentioned users don't get email notifications.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object is hard deleted. It isn’t sent to the Recycle Bin.

#### See Also

-   [Custom Object \_\_Feed \_\_Feed](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm "Represents the feed, specifically posts and feed-tracked changes, on a custom object.")

## Code Examples

```
SELECT ID, CreatedDate, CreatedById, CreatedBy.FirstName, 
           CreatedBy.LastName, ParentId, Parent.Name, Body 
FROM FeedItem 
WHERE CreatedDate > LAST_MONTH 
ORDER BY CreatedDate DESC, Id DESC
```

```apex
public void searchSample() {
  try {
    SearchResult sr = connection.search("find {foo} in all fields " +
        "returning feedcomment(Id, FeedItemId, CommentBody)");
    // Put the results into an array of SearchRecords
    SearchRecord[] records = sr.getSearchRecords();
    // Check the length of the returned array of records to see
    // if the search found anything
    if (records != null && records.length > 0) {
      System.out.println("Found " + records.length + " comments: ");
      // Display each comment
      for (SearchRecord record : records) {
        FeedComment comment = (FeedComment) record.getRecord();
        System.out.println(comment.getId() + ": " + 
            comment.getCommentBody());
      }
    } else {
      System.out.println("No records were found for the search.");
    }
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

## Related Topics

- Custom Object __Feed __Feed (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_customobject__feed.htm)
