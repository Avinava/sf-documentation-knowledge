---
title: "ChatterAnswersActivity"
domain: object-reference
topic: chatteranswersactivity
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.490Z
estimatedTokens: 973
keywords: [ChatterAnswersActivity, reputation, User, Chatter, Answers, zones.This, API, version, 25.0, later, Calls, Usage]
---

# ChatterAnswersActivity

> Represents the reputation of a
        User in Chatter Answers zones.This object is available in API version 25.0 and
    later.

# ChatterAnswersActivity

Represents the reputation of a User in Chatter Answers zones.This object is available in API version 25.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field Name | Details |
| --- | --- |
| BestAnswerReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of best answers the User has received from other users. |
| BestAnswerSelectedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of best answers the User has selected. |
| QuestionsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of Question records posted by the User. |
| QuestionSubscrCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of Question records the User has selected to follow. |
| QuestionSubscrReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of users following Question records posted by the User. |
| QuestionUpVotesCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of up votes the User has marked on Question records posted by other users. |
| QuestionUpVotesReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of up votes the User has received from other users on the Question records he or she has posted. |
| RepliesCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of Reply records posted by the User. |
| ReplyDownVotesCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of down votes the User has marked on Reply records posted by other users. |
| ReplyDownVotesReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of down votes the User has received from other users on the Reply records he or she has posted. |
| ReplyUpVotesCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of up votes the User has marked on the Reply records posted by other users. |
| ReplyUpVotesReceivedCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of up votes the User has received from other users on the Reply records he or she has posted. |
| ReportAbuseOnQuestionsCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of abuses that the User has reported on Question records posted by other users. |
| ReportAbuseOnRepliesCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of abuses that the User has reported on Reply records posted by other users. |
| ReportAbuseReceivedOnQnCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of abuses reported by other users on the Question records posted by the User. |
| ReportAbuseReceivedOnReCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionthe number of abuses reported by other users on the Reply records posted by the User. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe User ID associated with this reputation. |
| CommunityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID for the zone associated with this reputation. |

## Usage

Use this object to view metrics on User activity in Chatter Answers. For example, you can use the ChatterAnswersActivity object to view the number of Question records a user is following in Chatter Answers zones.

#### See Also

-   [Question](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_question.htm "Represents a question in a zone that users can view and reply to.")

-   [Reply](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reply.htm "Represents a reply that a user has submitted to a question in an answers zone.")

-   [User](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm "Represents a user in your organization.")

## Related Topics

- Question (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_question.htm)
- Reply (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_reply.htm)
- User (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_user.htm)
