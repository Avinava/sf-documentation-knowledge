---
title: "NetworkMember"
domain: object-reference
topic: networkmember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.247Z
estimatedTokens: 1721
keywords: [NetworkMember, member, Experience, Cloud, site, Members, either, users, company, external, portal, profiles, API, version, 26.0]
---

# NetworkMember

> Represents a member of an Experience Cloud
    site. Members can be either users in your company or external users with portal profiles.
   This object is available in API version 26.0 and later.

# NetworkMember

Represents a member of an Experience Cloud site. Members can be either users in your company or external users with portal profiles. This object is available in API version 26.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), update()

## Special Access Rules

This object is available only when your org has digital experiences enabled.

## Fields

| Field Name | Details |
| --- | --- |
| DefaultGroupNotificationFrequency | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The default frequency for sending the member’s group email notifications when the member joins groups in the Experience Cloud site. The valid values are:P—Email on every postD—Daily digestsW—Weekly digestsN—NeverThe default value is W. In sites, the Email on every post option is disabled once more than 10,000 members choose this setting for the group. All members who had this option selected are automatically switched to Daily digests. However, this field is not currently enabled. These values are reserved for future use. |
| DigestFrequency | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The frequency for sending the member’s personal email digest for the Experience Cloud site. The valid values are:D—DailyW—WeeklyN—NeverThe default value is D. However, daily and weekly personal digests aren’t currently available in sites. These values are reserved for future use. |
| LastChatterActivityDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe last time the member posted or commented in the Experience Cloud site. |
| MemberId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of a person who is a member of an Experience Cloud site. |
| NetworkId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Experience Cloud site that the member is part of. |
| PreferencesDisableAllFeedsEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member can automatically receive email for updates in the Experience Cloud site, based on the types of feed emails and digests the member has enabled. |
| PreferencesDisableBestAnswerEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email when someone selects their answer to a post as best. Available in API 46.0 and later. |
| PreferencesDisableBookmarkEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone comments on a feed item after the member has bookmarked it. |
| PreferencesDisableChangeCommentEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone comments on a change the member has made, such as an update to their profile. |
| PreferencesDisableDirectMessageEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone sends them a direct message in the Experience Cloud site. |
| PreferencesDisableEndorsementEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone endorses them for a topic. |
| PreferencesDisableFollowersEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone in the Experience Cloud site starts following the member. |
| PreferencesDisableItemFlaggedEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the user automatically receives email every time a member flags a post or comment. This setting only applies for community moderators (with the Moderate Experiences Feeds permission) and group owners or managers.This field is available in API version 29.0 and later. |
| PreferencesDisableLaterCommentEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone comments on a feed item after the member has commented on the feed item. |
| PreferencesDisableLikeEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone comments on a feed item after the member has liked the feed item. |
| PreferencesDisableMarketingCloudEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives marketing emails sent by Journey Builder. Available in API version 41.0 and later. |
| PreferencesDisableMentionsPostEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time the member is mentioned in posts. |
| PreferencesDisableMessageEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time the member is sent a Chatter message. |
| PreferencesDisableProfilePostEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone posts to the member’s profile. |
| PreferencesDisableSharePostEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time the member’s post is shared. |
| PreferencesDisCommentAfterLikeEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone comments on a post the member has liked. |
| PreferencesDisMentionsCommentEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time the member is mentioned in comments. |
| PreferencesDisProfPostCommentEmail | TypebooleanPropertiesFilter, UpdateDescriptionWhen false, the member automatically receives email every time someone comments on posts on the member’s profile. |
| ReputationPoints | TypedoublePropertiesFilter, Sort, UpdateDescriptionThe number of reputation points the user has accumulated by performing actions in the Experience Cloud site. |

## Usage

Use this object to query members of a certain Experience Cloud site and to update their email notification settings. If you have Modify All Data, View All Data, or Create and Set Up Experiences, you can view all members of any Experience Cloud site, regardless of your own membership. If you have Modify All Data or Create and Set Up Experiences, you can also update any member’s email settings. Users without these permissions can update their own email settings and can see members of the Experience Cloud sites that they’re also members of.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=object_reference)

#### Tip

You can directly update reputation points for a member via the Salesforce API. You can also use Apex triggers to send custom notifications based on changes to reputation points.
