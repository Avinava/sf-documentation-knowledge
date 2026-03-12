---
title: "ChatterActivity"
domain: object-reference
topic: chatteractivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.479Z
estimatedTokens: 850
keywords: [ChatterActivity, number, posts, comments, made, user, likes, received, API, version, 23.0, later, Calls, Usage]
---

# ChatterActivity

> ChatterActivity represents the number of
    posts and comments made by a user and the number of comments and likes on posts and comments
    received by the same user.
  This object is available in API version 23.0 and
   later.

# ChatterActivity

ChatterActivity represents the number of posts and comments made by a user and the number of comments and likes on posts and comments received by the same user. This object is available in API version 23.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| CommentCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of FeedComments made by the ParentId. |
| CommentReceivedCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of FeedComments received by the ParentId. |
| InfluenceRawRank | TypeintPropertiesFilter, Group, SortDescriptionNumber indicating the ParentId’s Chatter influence rank, which is calculated based on the ParentId’s ChatterActivity statistics, relative to the other users in the organization. This field is available in API version 26.0 and later. |
| LikeReceivedCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of FeedLikes received by the ParentId. |
| NetworkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the Experience Cloud site to which the ChatterActivity belongs. This field is available only if digital experiences is enabled in your org. This field is available in API version 26.0 and later. |
| ParentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the object type to which the ChatterActivity is related. In API version 66.0, the ParentId must be a UserId or SelfServiceUser ID. |
| PostCount | TypeintPropertiesFilter, Group, SortDescriptionThe number of FeedItems made by the ParentId. |

## Usage

-   Use this object to reference the Chatter activity statistics, which include the number of posts and comments made by a user and the number of comments and likes on posts and comments received by the same user.
-   You can directly query for ChatterActivity.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    To query ChatterActivity, you must provide the ParentId. In API version 66.0, the ParentId must be a UserId or SelfServiceUser ID.

-   A ChatterActivity record is created for users the first time they post or comment. Users who have never posted or commented don’t have ChatterActivity records. If users make only one post and then delete it, they do have ChatterActivity records. In both cases, the user interface displays zeros for their Chatter activity.
-   Use the InfluenceRawRank field to reference a user’s Chatter influence rank. This field is available in API version 26.0 and later.

#### See Also

-   [FeedItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm "FeedItem represents an entry in the feed, such as changes in a record feed, including text posts, link posts, and content posts. This object is available in API version 21.0 and later. This object replaces FeedPost.")

-   [FeedComment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedcomment.htm "Represents a comment added to a feed by a user.This object is available in API version 18.0 and later.")

-   [FeedLike](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedlike.htm "Indicates that a user has liked a feed item. This object is available in API version 21.0 and later.")

## Code Examples

```
SELECT Id, PostCount, LikeReceivedCount 
FROM ChatterActivity 
WHERE ParentId = UserId
```

## Related Topics

- FeedItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm)
- FeedComment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedcomment.htm)
- FeedLike (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feedlike.htm)
