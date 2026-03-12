---
title: "Explanation Details"
domain: chatterapi
topic: explanation-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.499Z
estimatedTokens: 713
keywords: [Explanation, detailed, Chatter, recommendations]
---

# Explanation Details

> A detailed explanation for some Chatter recommendations.

# Explanation Details

A detailed explanation for some Chatter recommendations.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data | Various | More information about the Chatter recommendation. The value of the type property determines what is returned.UserFollowsSameUsers—people that both the user and recommended person are following. See User Summary.GroupMembersFollowed—people that the user is following and that are members of the recommended group. See User Summary.UserViewingSameRecords—records that the user and the recommended person have recently viewed. See Record Summary.RecordParentOfFollowed—records that the user is following and that are child records of the recommended record. See Record Summary. | Small, 29.0 | 24.0 |
| summary | String | Summary explanation for the Chatter recommendation. | Small, 29.0 | 24.0 |
| type | String | Indicates the reason for the Chatter recommendation.ArticleHasRelatedContent—Articles with related content to a context article.ArticleViewedTogether—Articles often viewed together with the article that the context user just viewed.ArticleViewedTogetherWithViewers—Articles often viewed together with other records that the context user views.Custom—Custom recommendations.FilePopular—Files with many followers or views.FileViewedTogether—Files often viewed at the same time as other files that the context user views.FollowedTogetherWithFollowees—Users often followed together with other records that the context user follows.GroupMembersFollowed—Groups with members that the context user follows.GroupNew—Recently created groups.GroupPopular—Groups with many active members.ItemViewedTogether—Records often viewed at the same time as other records that the context user views.PopularApp—Applications that are popular.RecordOwned—Records that the context user owns.RecordParentOfFollowed—Parent records of records that the context user follows.RecordViewed—Records that the context user recently viewed.TopicFollowedTogether—Topics often followed together with the record that the context user just followed.TopicFollowedTogetherWithFollowees—Topics often followed together with other records that the context user follows.TopicPopularFollowed—Topics with many followers.TopicPopularLiked—Topics on posts that have many likes.UserDirectReport—Users who report to the context user.UserFollowedTogether—Users often followed together with the record that the context user followed .UserFollowsSameUsers—Users who follow the same users as the context user.UserManager—The context user’s manager.UserNew—Recently created users.UserPeer—Users who report to the same manager as the context user.UserPopular—Users with many followers.UserViewingSameRecords—Users who view the same records as the context user. | Small, 29.0 | 24.0 |

## Related Topics

- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- Record Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_summary.htm)
