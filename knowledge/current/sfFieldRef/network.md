---
title: "Network"
domain: sfFieldRef
topic: network
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.797Z
estimatedTokens: 1781
keywords: [Network, Experience, Cloud, site, Salesforce, lets, branded, spaces, employees, customers, partners, customize, experiences, whether, they’re]
---

# Network

> Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create
			experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. Experience Cloud sites let you share information,
			records, and files with coworkers and stakeholders all in one place.
		This object is available in API version 26.0 and later.

# Network

Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. Experience Cloud sites let you share information, records, and files with coworkers and stakeholders all in one place. This object is available in API version 26.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Network](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_network.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AllowedExtensions | Allowed Extensions | textarea |  | 1000 |  |  |
| CaseCommentEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| ChangePasswordEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| ChgEmailVerNewEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| ChgEmailVerOldEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeviceActEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| EmailFooterLogoId | Document ID | reference |  | 18 |  |  |
| EmailFooterText | Email Footer Text | string |  | 1000 |  |  |
| EmailSenderAddress | From Email Address | email |  | 80 |  |  |
| EmailSenderName | From Email Name | string |  | 80 |  |  |
| FirstActivationDate | First Date Active | date |  |  |  |  |
| ForgotPasswordEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| HeadlessForgotPasswordTemplateId | Email Template ID | reference |  | 18 |  |  |
| HeadlessRegistrationTemplateId | Email Template ID | reference |  | 18 |  |  |
| Id | Network ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LockoutEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| MaxFileSizeKb | Max File Size KB | int | 9 |  |  |  |
| Name | Name | string |  | 40 |  |  |
| NewSenderAddress | Unverified Sender Email Address | email |  | 80 |  |  |
| OptionsActionOverrideEnabled | ActionOverrideEnabled | boolean |  |  |  |  |
| OptionsAdvancedAuthForSiteEnabled | AdvancedAuthForSiteEnabled | boolean |  |  |  |  |
| OptionsAllowInternalUserLogin | Allow Employee Login | boolean |  |  |  |  |
| OptionsAllowMembersToFlag | Allow Members To Flag | boolean |  |  |  |  |
| OptionsApexCDNCachingEnabled | ApexCDNCachingEnabled | boolean |  |  |  |  |
| OptionsCWBannerState | CWBannerState | boolean |  |  |  |  |
| OptionsDirectMessagesEnabled | Direct Messages Enabled | boolean |  |  |  |  |
| OptionsDisableWorkspaceInfo | DisableWorkspaceInfo | boolean |  |  |  |  |
| OptionsEinsteinAnswersEnabled | EinsteinAnswersEnabled | boolean |  |  |  |  |
| OptionsEinsteinAnswersKAEnabled | EinsteinAnswersKAEnabled | boolean |  |  |  |  |
| OptionsEinsteinAnswersQAEnabled | EinsteinAnswersQAEnabled | boolean |  |  |  |  |
| OptionsEinsteinAnswersSnippetEnabled | EinsteinAnswersSnippetEnabled | boolean |  |  |  |  |
| OptionsEmbeddedLoginEnabled | EmbeddedLoginEnabled | boolean |  |  |  |  |
| OptionsEnableTalkingAboutStats | EnableTalkingAboutStats | boolean |  |  |  |  |
| OptionsEnableTopicAssignmentRules | EnableTopicAssignmentRules | boolean |  |  |  |  |
| OptionsExpFriendlyUrlsAsDefault | ExpFriendlyUrlsAsDefault | boolean |  |  |  |  |
| OptionsExperienceBundleBasedSnaOverrideEnabled | ExperienceBundleBasedSnaOverrideEnabled | boolean |  |  |  |  |
| OptionsGatherCustomerSentimentData | Gather Customer Insights Data | boolean |  |  |  |  |
| OptionsGuestChatterEnabled | Guest Chatter Enabled | boolean |  |  |  |  |
| OptionsGuestFileAccessEnabled | Guest File Access Enabled | boolean |  |  |  |  |
| OptionsGuestMemberVisibility | GuestMemberVisibility | boolean |  |  |  |  |
| OptionsHeadlessFrgtPswEnabled | HeadlessFrgtPswEnabled | boolean |  |  |  |  |
| OptionsImageOptimizationCDNEnabled | ImageOptimizationCDNEnabled | boolean |  |  |  |  |
| OptionsInvitationsEnabled | Invitations Enabled | boolean |  |  |  |  |
| OptionsKnowledgeableEnabled | Knowledgeable Enabled | boolean |  |  |  |  |
| OptionsLWRExperienceConnectedAppEnabled | LWRExperienceConnectedAppEnabled | boolean |  |  |  |  |
| OptionsLWRExperienceOnManagedRuntime | LWRExperienceOnManagedRuntime | boolean |  |  |  |  |
| OptionsLWRSearchGenerativeAnswersEnabled | Allow Einstein Search Answers for Knowledge | boolean |  |  |  |  |
| OptionsMemberVisibility | MemberVisibility | boolean |  |  |  |  |
| OptionsMobileImageOptimizationEnabled | MobileImageOptimizationEnabled | boolean |  |  |  |  |
| OptionsNetworkSentimentAnalysis | Sentiment Analysis on Feed Posts and Comments | boolean |  |  |  |  |
| OptionsNicknameDisplayEnabled | NicknameDisplayEnabled | boolean |  |  |  |  |
| OptionsPrivateMessagesEnabled | Private Messages Enabled | boolean |  |  |  |  |
| OptionsProfileBasedLayoutsForKnowledgeSearchEnabled | ProfileBasedLayoutsForKnowledgeSearchEnabled | boolean |  |  |  |  |
| OptionsRecognitionBadgingEnabled | ​Recognition badging for Lightning Experiences | boolean |  |  |  |  |
| OptionsReputationEnabled | Reputation Enabled | boolean |  |  |  |  |
| OptionsReputationRecordConversationsDisabled | ReputationRecordConversationsDisabled | boolean |  |  |  |  |
| OptionsSelfRegistrationEnabled | Self Registration Enabled | boolean |  |  |  |  |
| OptionsSendWelcomeEmail | Send Welcome Email | boolean |  |  |  |  |
| OptionsShowAllNetworkSettings | ShowAllNetworkSettings | boolean |  |  |  |  |
| OptionsSiteAsContainerEnabled | Site.com as Experience Container Enabled | boolean |  |  |  |  |
| OptionsThreadedDiscussionsEnabled | ThreadedDiscussionsEnabled | boolean |  |  |  |  |
| OptionsTopicFilteringForKnowledgeSearchEnabled | TopicFilteringForKnowledgeSearchEnabled | boolean |  |  |  |  |
| OptionsTopicSuggestionsEnabled | TopicSuggestionsEnabled | boolean |  |  |  |  |
| OptionsTwilioCallbackApiEnabled | Allow Twilio Callback API | boolean |  |  |  |  |
| OptionsUpDownVoteEnabled | UpDownVoteEnabled | boolean |  |  |  |  |
| PwdlessRegEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| SelfRegMicroBatchSubErrorEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| SelfRegProfileId | Profile ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UrlPathPrefix | Experience URL Prefix | string |  | 40 |  |  |
| VerificationEmailTemplateId | Email Template ID | reference |  | 18 |  |  |
| WelcomeEmailTemplateId | Email Template ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
