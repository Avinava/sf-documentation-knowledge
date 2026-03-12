---
title: "ModerationRule"
domain: metadata-api
topic: moderationrule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.749Z
estimatedTokens: 1556
keywords: [ModerationRule, rule, Experience, Cloud, site, moderate, member-generated, content, criteria, enforce, moderation, action, take, rules, help]
---

# ModerationRule

> Represents a rule used in your Experience Cloud site to moderate member-generated
    content. Each rule specifies the member-generated content the rule applies to, the criteria to
    enforce the rule on, and the moderation action to take. Moderation rules help protect your site
    from spammers, bots, and offensive or inappropriate content. This type extends the Metadata
    metadata type and inherits its fullName field.

# ModerationRule

Represents a rule used in your Experience Cloud site to moderate member-generated content. Each rule specifies the member-generated content the rule applies to, the criteria to enforce the rule on, and the moderation action to take. Moderation rules help protect your site from spammers, bots, and offensive or inappropriate content. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Moderation rules created with the Metadata API are more powerful than moderation rules set up in the Experience Management UI. For example, in the UI you could create a rule that moderates posts and comments. In the Metadata API you could create a rule that moderates only the Link Name of a Link feed type. Use the Metadata API to express complex moderation rules.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Don’t update moderation rules you create using the Metadata API in the Experience Management UI. If you do, you overwrite relevant Metadata API fields or the fields are ignored.

Keep the following things in mind when creating moderation rules:

-   Your org can have up to 30 rules. This limit is per org, not per site. This limit includes both content rules and rate rules.
-   Each rule can have up to three keyword criteria.
-   Rules that block content run first, followed by rules to review and approve content, then rules that replace content, and last by rules that flag content. If two or more rules perform the same action, the oldest rule runs first, based on the date the rule was created. Rules to replace content don’t run when the content also applies to a review rule—we want community managers to review the original content.

## File Suffix and Directory Location

ModerationRule components have the suffix .rule and are stored in the moderation directory of the corresponding package directory. The file name format follows site\_name.moderation\_rule\_developer\_name.rule.

## Version

ModerationRule components are available in API version 36.0 and later.

## Special Access Rules

To view, create, edit, and delete moderation rules, you need the Manage Experiences or Create and Set Up Experiences permission. As of Spring ’20 and later, only users with permission to edit moderation rules can access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| action | ModerationRuleAction (enumeration of type string) | Required. Indicates the moderation action that you want to take. The valid values are:BlockReviewReplaceFlagFreezeAndNotify (Reserved for future use.) |
| actionLimit | int | Indicates the moderation action limit. Available in API 39.0 and later. |
| active | boolean | Required. Indicates whether the moderation rule is active (true) or inactive (false). |
| description | string | A description of the moderation rule. |
| entitiesAndFields | ModerateEntityField[] | Indicates the types of user-generated content this moderation rule applies to. |
| masterLabel | string | Required. Label for the moderation rule. |
| notifyLimit | int | Indicates the notification limit of the moderation rule. Available in API 39.0 and later. |
| userCriteria | string | Represents the member criteria to use in moderation rules. Available in API 39.0 and later. |
| userMessage | string | The message you want your members to see when their content is blocked. Use the %BLOCKED_KEYWORD% variable to display up to five blocked words in the user message. If you don’t specify a message, the member sees the standard message: “You can’t use %BLOCKED_KEYWORD% or other inappropriate words in this site. Review your content and try again.” |

## ModeratedEntityField

The fields and entities you want to moderate.

| Field Name | Field Type | Description |
| --- | --- | --- |
| entityName | string | Required. Indicates the types of user-generated content the moderation rule applies to. Post and comments only apply to content created in groups and user profiles. All feed types, such as polls and links, are supported. |
| fieldName | string | Indicates the field the moderation rule applies to.NoteTo moderate feed posts, use entityName FeedItem with fieldName RawBody. To moderate feed comments, use entityName FeedComment with fieldName RawCommentBody. The RawBody and RawCommentBody fields aren’t available in any other API. |
| keywordList | KeywordList string | Indicates the keyword list that you want to moderate against. |

## ModerationRuleType

Required. Indicates the type of rule to run on user-generated content.

| Field Name | Field Type | Description |
| --- | --- | --- |
| type | (enumeration of type string) | Required. Indicates the type of rule to run on user-generated content. Valid values are:ContentRateAvailable in API 39.0 and later. |

## RateLimitTimePeriod

Required. Indicates the time period that is applied to the rate limit.

| Field Name | Field Type | Description |
| --- | --- | --- |
| timePeriod | (enumeration of type string) | Required. Indicates the time period that is applied to the rate limit. Valid values are:ShortMediumAvailable in API 39.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a ModerationRule component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ModerationRule xmlns="http://soap.sforce.com/2006/04/metadata">
   <description>Blocks Bad Word List in posts, comments, Link URLs, titles, and poll choices.</description>
   <masterLabel>Blocking Rule</masterLabel>
   <action>Block</action>
   <active>true</active>
   <userMessage>You can't use %BLOCKED_KEYWORD% or other inappropriate words in this site. Review your content and try again.</userMessage>
   <!-- Applies the rule to FeedComment.RawCommentBody (an internal only field), if it contains words from the keyword list specified -->
   <entitiesAndFields>
     <entityName>FeedComment</entityName>
     <fieldName>RawCommentBody</fieldName>
     <keywordList>site1.badword_list</keywordList>
   </entitiesAndFields>
   <entitiesAndFields>
     <entityName>FeedItem</entityName>
     <fieldName>LinkUrl</fieldName>
     <keywordList>site1.badword_list</keywordList>
   </entitiesAndFields>
   <!-- Applies the rule to FeedItem.RawBody (an internal only field), if it contains words from the keyword list specified -->
   <entitiesAndFields>
     <entityName>FeedItem</entityName>
     <fieldName>RawBody</fieldName>
     <keywordList>site1.badword_list</keywordList>
   </entitiesAndFields>
   <entitiesAndFields>
     <entityName>FeedItem</entityName>
     <fieldName>Title</fieldName>
     <keywordList>site1.badword_list</keywordList>
   </entitiesAndFields>
   <entitiesAndFields>
     <entityName>FeedPollChoice</entityName>
     <fieldName>ChoiceBody</fieldName>
     <keywordList>site1.badword_list</keywordList>
   </entitiesAndFields>
</ModerationRule>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
     <name>ModerationRule</name>
     <members>site1.blocking_rule</members>
   </types>
   <version>36.0</version>
</Package>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
