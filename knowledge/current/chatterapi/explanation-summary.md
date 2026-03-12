---
title: "Explanation Summary"
domain: chatterapi
topic: explanation-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.504Z
estimatedTokens: 647
keywords: [Explanation, Summary, Chatter, recommendation]
---

# Explanation Summary

> A summary explanation for a Chatter recommendation.

# Explanation Summary

A summary explanation for a Chatter recommendation.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| detailsUrl | String | URL to explanation details or null if the Chatter recommendation doesn’t have a detailed explanation. | Small, 29.0 | 24.0 |
| summary | String | Summary explanation for the Chatter recommendation. | Small, 29.0 | 23.0 |
| type | String | Indicates the reason for the Chatter recommendation.ArticleHasRelatedContent—Articles with related content to a context article.ArticleViewedTogether—Articles often viewed together with the article that the context user just viewed.ArticleViewedTogetherWithViewers—Articles often viewed together with other records that the context user views.Custom—Custom recommendations.FilePopular—Files with many followers or views.FileViewedTogether—Files often viewed at the same time as other files that the context user views.FollowedTogetherWithFollowees—Users often followed together with other records that the context user follows.GroupMembersFollowed—Groups with members that the context user follows.GroupNew—Recently created groups.GroupPopular—Groups with many active members.ItemViewedTogether—Records often viewed at the same time as other records that the context user views.PopularApp—Applications that are popular.RecordOwned—Records that the context user owns.RecordParentOfFollowed—Parent records of records that the context user follows.RecordViewed—Records that the context user recently viewed.TopicFollowedTogether—Topics often followed together with the record that the context user just followed.TopicFollowedTogetherWithFollowees—Topics often followed together with other records that the context user follows.TopicPopularFollowed—Topics with many followers.TopicPopularLiked—Topics on posts that have many likes.UserDirectReport—Users who report to the context user.UserFollowedTogether—Users often followed together with the record that the context user followed .UserFollowsSameUsers—Users who follow the same users as the context user.UserManager—The context user’s manager.UserNew—Recently created users.UserPeer—Users who report to the same manager as the context user.UserPopular—Users with many followers.UserViewingSameRecords—Users who view the same records as the context user. | Small, 29.0 | 24.0 |

#### See Also

-   [Non-Entity Recommendation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_non_entity_recommendation.htm "A recommendation for a non-Salesforce entity, such as an application.")

## Related Topics

- explanation details (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_explanation_details.htm)
- Non-Entity Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_non_entity_recommendation.htm)
