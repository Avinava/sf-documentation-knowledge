---
title: "Chatter REST API Resources"
domain: chatterapi
topic: chatter-rest-api-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.892Z
estimatedTokens: 1629
keywords: [Chatter, REST, API, Resources, require, different, rate, limit, allocations]
---

# Chatter REST API Resources

> These REST API resources require Chatter and can have different rate limit
  allocations.

# Chatter REST API Resources

These REST API resources require Chatter and can have different rate limit allocations.

Rate limits for Chatter REST API resources can be different from other Connect REST API resources. Chatter REST API resources have a per user, per application, per hour rate limit. When you exceed the rate limit, Chatter REST API resources return a 503 Service Unavailable error code.

For Connect REST API resources, see [Connect REST API Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_overview.htm "Connect REST API resources are sometimes called endpoints.").

-   **[Announcements Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_announcements_list.htm)**
    Get the announcements for the specified parent or create an announcement. Also get information about, update, or delete an announcement.
-   **[Chatter Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_chatter.htm)**
    Get a directory of Chatter feeds, groups, and users resources. Control when Chatter email digests are sent. Get a list of supported emojis. Get extensions. Get link metadata. Get information about, update, and delete Chatter streams.
-   **[Comments Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments.htm)**
    Get information about, edit, like, upvote, verify, or delete a comment. Determine whether the context user can edit a comment.
-   **[Custom Recommendation Audience Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audiences.htm)**
    Target specific audiences for your custom recommendations. Use these resources to get information about, create, update, and delete recommendation audiences.
-   **[Custom Recommendation Definition Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_definitions.htm)**
    Recommendation definitions allow you to create custom recommendations that appear in Experience Cloud sites, encouraging users to watch videos, take training and more. Use these resources to get information about, create, modify, and delete recommendation definitions. Also get information about, upload, modify, and delete recommendation definition photos.
-   **[Dashboard Component Snapshot Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resource_dcs.htm)**
    A snapshot of a dashboard component.
-   **[Experience Cloud Sites Chatter Moderation Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_moderation_chatter.htm)**
    Get information about whether a user has flagged a feed element or comment as inappropriate. Delete flags.
-   **[Feed Elements Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_elements.htm)**
    Information about feed elements. Access, edit, post, search, and delete feed elements. Access a feed element’s capabilities, including bundles and their feed elements.
-   **[Feeds Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feeds.htm)**
    Feeds are made up of feed items. There are many feed types. Each feed type has an algorithm that determines which feed items it contains.
-   **[Followers on Records Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_records_followers.htm)**
    Get information about the followers of the specified record.
-   **[Groups Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_groups.htm)**
    Information about groups, such as the group's members, photo, and the groups in the organization. Create and delete a group, add members to a group, and change the group photo.
-   **[Influence Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_influence.htm)**
    List of the percentile thresholds used to categorize an organization’s users by their influence in Chatter.
-   **[Likes Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_likes.htm)**
    Information about the specified like. Also used to delete a like.
-   **[Mentions Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_mentions.htm)**
    Information about users and groups that a user can mention in a feed item body or comment body. When a user or group is mentioned, they receive notification.
-   **[Missions Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_missions_resources.htm)**
    Update a user’s mission activity count. Export and purge mission activity for a user. Purge mission activity for all users. Get a user’s mission progress.
-   **[Question and Answers Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_question_answers.htm)**
    Get question and answers suggestions. Get top unanswered questions for the context user in an Experience Cloud site.
-   **[Scheduled Custom Recommendations Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendations_scheduled.htm)**
    Get information about, create, update, or delete scheduled custom recommendations.
-   **[Subscriptions Notifications Member Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_subscriptions_notifications.htm)**
    Get information about the frequency with which a user receives subscription notifications. Subscribe or unsubscribe a user from receiving notifications.
-   **[Subscriptions Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_subscriptions.htm)**
    Information about the specified subscription. Also used to delete a subscription, for example, to unfollow a record or a topic.
-   **[Topics Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_topics_chatter.htm)**
    Get endorsements for a topic and endorse someone for a topic. Get the groups recently contributing to a topic. Get knowledgeable people for a topic. Opt out of being knowledgeable about a topic and opt back in.
-   **[User Profiles Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_user_profiles_home.htm)**
    The user profile data populates the profile page (also called the Chatter profile page). This data includes user information (such as address, manager, and phone number), some user capabilities (permissions), and a set of subtab apps, which are custom tabs on the profile page.
-   **[Users Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_chatter.htm)**
    Get information about the user, such as who is following the user and the user’s recommendations. Post feed items and update conversation status.

## Related Topics

- Connect REST API Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_overview.htm)
- Announcements Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_announcements_list.htm)
- Chatter Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_chatter.htm)
- Comments Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_comments.htm)
- Custom Recommendation Audience Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_audiences.htm)
- Custom Recommendation Definition Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_recommendation_definitions.htm)
- Dashboard Component Snapshot Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resource_dcs.htm)
- Experience Cloud Sites Chatter Moderation Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_communities_moderation_chatter.htm)
- Feed Elements Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_elements.htm)
- Feeds Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feeds.htm)
