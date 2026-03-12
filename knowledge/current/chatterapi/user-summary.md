---
title: "User Summary"
domain: chatterapi
topic: user-summary
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.503Z
estimatedTokens: 1831
keywords: [User, Summary, subset, Detail]
---

# User Summary

> The User Summary response body is a subset of the User Detail response
    body.

# User Summary

The User Summary response body is a subset of the User Detail response body.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| additional​Label | String | If one exists, an extra label for the user, for example, “Customer,” “Partner,” or “Acme Corporation.” | Small, 30.0 | 30.0 |
| community​Nickname | String | User’s nickname in the site. | Medium, 32.0 | 32.0 |
| companyName | String | Name of the company. | Small, 29.0 | 23.0 |
| displayName | String | User’s name that is displayed in the site. If nicknames are enabled, the nickname is displayed. If nicknames aren’t enabled, the full name is displayed. | Small, 32.0 | 32.0 |
| firstName | String | User's first name. In version 39.0 and later, if nicknames are enabled, firstName is null. | Small, 29.0 | 23.0 |
| id | String | 18-character ID of the user. | Small, 29.0 | 23.0 |
| isActive | Boolean | true if user is active, false otherwise. | Small, 29.0 | 25.0 |
| isChatter​Guest | Boolean | true if user is a Chatter customer, false otherwiseIn version 26.0 and later, user the userType property. |  | 23.0–26.0 |
| isInThis​Community | Boolean | true if the user is in the same Experience Cloud site as the context user; false otherwise. Can be false for record feed @mentions on posts with the scope “All Users.” | Small, 29.0 | 28.0 |
| lastName | String | User's last name. In version 39.0 and later, if nicknames are enabled, lastName is null. | Small, 29.0 | 23.0 |
| motif | Motif | Small, medium, and large icons indicating that the object is a user. The motif can also contain the object’s base color.The motif icon is not the user’s profile photo. | Small, 29.0 | 27.0 |
| mySubscription | Reference | If the context user is following this user, contains information about the subscription, otherwise null. | Medium, 29.0 | 23.0 |
| name | String | Locale-based concatenation of first and last names. In version 39.0 and later, if nicknames are enabled, name is the nickname. | Small, 29.0 | 23.0 |
| outOfOffice | Out of Office | If one exists, extra out-of-office message for the user. | Small, 40.0 | 40.0 |
| photo | Photo | Information about the user's photo. | Small, 29.0 | 23.0 |
| reputation | Reputation | Reputation of the user in the Experience Cloud site, which is determined by the number of points earned from events and actions performed in the site. | Big, 32.0 | 32.0 |
| stamps | Stamp[] | Collection of the user’s stamps.In version 44.0 and later, use SOQL to get a user’s stamps. | Small, 39.0 | 39.0–43.0 |
| title | String | Title of the user. | Small, 29.0 | 23.0 |
| type | String | Value is User. | Small, 29.0 | 23.0 |
| url | String | URL to the user's Chatter profile. | Small, 29.0 | 23.0 |
| userType | String | Type of user. Valid values are:ChatterGuest—User is an external user in a private group.ChatterOnly—User is a Chatter Free customer.Guest—User is unauthenticated.Internal—User is a standard org member.Portal—User is an external user in an Experience Cloud site.System—User is Chatter Expert or a system user.Undefined—User is a user type that is a custom object. | Medium, 29.0 | 26.0 |

## Example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

If the user's name is Chatter Expert and the return contains mostly null values, it indicates that the Chatter Expert user is either deactivated or taken over by an administrator, or the org was created before Salesforce introduced the Chatter Expert user. This is a special user that offers tips, tricks, and sample posts to help users get started with Chatter.

#### See Also

-   [User Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm "User detail. If the context user doesn’t have permission to see a property, the property is set to null.")

-   [Case Comment Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm "If a feed element has this capability, it has a case comment on the case feed.")

-   [Comment](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm "A comment.")

-   [Conversation Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_detail.htm "Conversation detail.")

-   [Conversation Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_summary.htm "Conversation summary.")

-   [Dashboard Component Snapshot](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot.htm "Represents both dashboard component snapshots and alerts you receive when a dashboard component value crosses a threshold.")

-   [Favorite](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_favorite.htm "Chatter favorite.")

-   [File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

-   [Group Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_detail.htm "Chatter group detail.")

-   [Group Member](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_member.htm "Chatter group member.")

-   [Group Membership Request](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_group_membership_request.htm "Group membership request.")

-   [Knowledgeable People](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_knowledgeable.htm "User that is knowledgeable about a topic.")

-   [Like](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_like.htm "Chatter like.")

-   [Message Segment: Mention](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ms_mention.htm "Represents an inline @mention.")

-   [Origin Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_origin_capability.htm "If a feed element has this capability, it was created by a feed action.")

-   [Direct Message Member Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_member_collection.htm "A collection of direct message members.")

-   [Direct Message Membership Activity](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_membership_activity.htm "Direct message membership activity.")

-   [Message](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_message.htm "Message.")

-   [Platform Action](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_action_link.htm "A platform action instance with state information for the context user.")

-   [Question and Answers Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_question_and_answers_capability.htm "If a feed element has this capability, it has a question and comments on the feed element are answers to the question.")

-   [Social Post Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_capability.htm "If a feed element has this capability, it can interact with a social post on a social network.")

-   [Topic Endorsement](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_endorsement.htm "Represents one user endorsing another user for a single topic.")

-   [Topic Opt Out](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_topics_opt_out.htm "An “opt out” from a topic. Indicates that a user doesn’t want to be identified as knowledgeable about a topic.")

## Related Topics

- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Out of Office (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_out_of_office.htm)
- Photo (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_pictures.htm)
- Reputation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reputation.htm)
- Stamp (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_stamp.htm)
- User Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_detail.htm)
- Case Comment Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm)
- Comment (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment.htm)
- Conversation Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_convo_detail.htm)
