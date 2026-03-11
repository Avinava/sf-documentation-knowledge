---
title: "ChatterSettings"
domain: metadata-api
topic: chattersettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.094Z
keywords: [ChatterSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ChatterSettings

# ChatterSettings

Represents an org’s settings for their Chatter instance when Chatter is enabled for the org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

The ChatterSettings component appears in the Chatter.settings file, and is stored in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

ChatterSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowChatterGroupArchiving | boolean | Indicates whether manual and automatic group archiving are allowed on all Chatter groups (true) or aren’t allowed (false).In Setup, allowChatterGroupArchiving equates to the Chatter setting Allow Group Archiving. |
| allowRecordsInChatterGroup | boolean | Indicates whether records can be associated with groups (true), or not (false). If groups already have record data, setting this field to false doesn’t delete it.In Setup, allowRecordsInChatterGroup equates to the Chatter setting Allow Records in Groups. |
| allowSharingInChatterGroup | boolean | Removed. The setting of this field has no effect on the org. Available in API version 47.0 only. |
| enableApprovalRequest | boolean | Indicates whether Approvals in Chatter are enabled for the org. When the value is true, users see approval requests as posts in Chatter feeds. Users can update their own Chatter feeds settings to opt out of receiving approval requests as Chatter posts. When the value is false, approval requests aren’t posted to Chatter. The default value is false.In Setup, enableApprovalRequest equates to the Chatter setting Allow Approvals. |
| enableCaseFeedRelativeTimestamps | boolean | In Case feeds, indicates whether to use relative (true) or absolute (false) date and time stamp formats on Case feed items. When the value is true, Case feed items show a relative timestamp (for example, 10m ago). When the value is true, users can hover over the relative timestamp to see the absolute. When the value is false, Case feed items show an absolute timestamp (for example, January 7, 2020 at 12:15PM). When you change this setting, all timestamps in Case feeds reflect that change. The default value is true. This field is available in API version 48.0 and later.In Setup, enableCaseFeedRelativeTimestamps equates to the Chatter setting Show relative timestamp. |
| enableChatter | boolean | Indicates whether Chatter is enabled for your org (true) or not (false). |
| enableChatterEmoticons | boolean | Indicates whether the automatic conversion of text characters, such as :), into a graphic emoticon is allowed in Chatter (true) or isn’t allowed (false).In Setup, enableChatter equates to the Chatter setting Allow Emoticons. |
| enableFeedEdit | boolean | Indicates whether qualified users can edit feed posts and comments (true) or not (false). Qualified users include:The author of the post or commentThe person who owns the record that was posted to or commented onThe Chatter or site moderatorIn Setup, enableFeedEdit equates to the Chatter setting Allow users to edit posts and comments. |
| enableFeedPinning | boolean | Indicates whether to allow the pinning of posts in a feed (true) or not (false). When set to true:Authorized users can pin posts to the top of the feed.The feed supports up to three pinned posts.Pinned posts stay pinned until they’re unpinned.After post pinning is enabled, authorized users include admins and group owners and managers. Admins can also assign post pinning permission through permission sets or user profiles.In Setup, enableFeedPinning equates to the Chatter setting Allow post pinning. |
| enableFeedsDraftPosts | boolean | Indicates whether draft posts are automatically saved every seven seconds (true) or not (false). When set to true:Adds the My Drafts feed to the Chatter tabSaves draft posts automatically every seven secondsMakes drafts available in the My Drafts feedWhen the user posts the entry, the draft is automatically removed from the My Drafts feed.In Setup, enableFeedsDraftPosts equates to the Chatter setting Allow draft posts. |
| enableFeedsRichText | boolean | Indicates whether to use the Rich Text Editor in the Chatter Publisher (true) or not (false). The rich text editor supports text formats, inline images, hyperlinks, and, when enabled for the org, code snippets.In Setup, enableFeedsRichText equates to the Chatter setting Allow users to compose rich text posts. |
| enableInviteCsnUsers | boolean | Indicates whether a licensed user can invite customers to private groups that the licensed user owns or manages (true) or not (false). When the value is set to true, licensed users can invite customers who are from outside org email domains. Invited customers can see information only in the groups that they're invited to. They can interact only with members of those groups.In Setup, enableInviteCsnUsers equates to the Chatter setting Allow customer invitations. |
| enableOutOfOfficeEnabledPref | boolean | Indicates whether to add an Out of Office setting to a user profile page (true), or to omit it (false). When the value is set to true, this option adds a control to user profile pages for setting a personal out-of-office message.In Setup, enableOutOfOfficeEnabledPref equates to the Chatter setting Users can set Out of Office message. |
| enableRichLinkPreviewsInFeed | boolean | Indicates whether to convert links in posts into embedded videos, images, and article previews (true) or not to convert the links (false).In Setup, enableRichLinkPreviewsInFeed equates to the Chatter setting Allow Rich Link Previews. |
| enableTodayRecsInFeed | boolean | Indicates whether to allow the posting of recommendations for using the Salesforce Today app in users’ feeds (true) or not (false). When set to true, automatically posts recommendations for using the Salesforce Today app in users’ feeds.In Setup, enableTodayRecsInFeed equates to the Chatter setting Allow Today Recommendations. |
| unlistedGroupsEnabled | boolean | Indicates whether to allow the creation of unlisted groups (true) or to prevent their creation (false). When the value is set to true, users can create unlisted groups. Unlisted groups don’t appear on the Groups list page. Membership in unlisted groups is by invitation only.In Setup, unlistedGroupsEnabled equates to the Chatter setting Enable Unlisted Groups. |

## Declarative Metadata Sample Definition

The following is an example of a Chatter.settings file.

```

```

The following is an example package.xml manifest that references the ChatterSettings definitions:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").