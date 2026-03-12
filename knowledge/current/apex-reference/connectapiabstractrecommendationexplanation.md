---
title: "ConnectApi.AbstractRecommendationExplanation"
domain: apex-reference
topic: connectapiabstractrecommendationexplanation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.895Z
estimatedTokens: 608
keywords: [ConnectApi.AbstractRecommendationExplanation, Explanation, Chatter, recommendation.]
---

# ConnectApi.AbstractRecommendationExplanation

> Explanation for a Chatter recommendation.

# ConnectApi.AbstractRecommendationExplanation

Explanation for a Chatter recommendation.

This class is abstract.

Superclass of [ConnectApi.RecommendationExplanation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec_explanation_summary.htm "Explanation for a Chatter recommendation.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| summary | String | Summary explanation for the Chatter recommendation. | 32.0 |
| type | ConnectApi.​Recommendation​ExplanationType | Indicates the reason for the Chatter recommendation.ArticleHasRelatedContent—Articles with related content to a context article.ArticleViewedTogether—Articles often viewed together with the article that the context user just viewed.ArticleViewedTogetherWithViewers—Articles often viewed together with other records that the context user views.Custom—Custom recommendations.FilePopular—Files with many followers or views.FileViewedTogether—Files often viewed at the same time as other files that the context user views.FollowedTogetherWithFollowees—Users often followed together with other records that the context user follows.GroupMembersFollowed—Groups with members that the context user follows.GroupNew—Recently created groups.GroupPopular—Groups with many active members.ItemViewedTogether—Records often viewed at the same time as other records that the context user views.PopularApp—Applications that are popular.RecordOwned—Records that the context user owns.RecordParentOfFollowed—Parent records of records that the context user follows.RecordViewed—Records that the context user recently viewed.TopicFollowedTogether—Topics often followed together with the record that the context user just followed.TopicFollowedTogetherWithFollowees—Topics often followed together with other records that the context user follows.TopicPopularFollowed—Topics with many followers.TopicPopularLiked—Topics on posts that have many likes.UserDirectReport—Users who report to the context user.UserFollowedTogether—Users often followed together with the record that the context user followed .UserFollowsSameUsers—Users who follow the same users as the context user.UserManager—The context user’s manager.UserNew—Recently created users.UserPeer—Users who report to the same manager as the context user.UserPopular—Users with many followers.UserViewingSameRecords—Users who view the same records as the context user. | 32.0 |

## Related Topics

- ConnectApi.RecommendationExplanation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec_explanation_summary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Recommendation​ExplanationType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
