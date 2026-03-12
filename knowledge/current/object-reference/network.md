---
title: "Network"
domain: object-reference
topic: network
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:13.165Z
estimatedTokens: 4909
keywords: [Network, Experience, Cloud, site, Salesforce, lets, branded, spaces, employees, customers, partners, customize, experiences, whether, they’re]
---

# Network

> Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create
			experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. Experience Cloud sites let you share information,
			records, and files with coworkers and stakeholders all in one place.
		This object is available in API version 26.0 and later.

# Network

Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. Experience Cloud sites let you share information, records, and files with coworkers and stakeholders all in one place. This object is available in API version 26.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), update()

## Special Access Rules

This object is available only when your org has digital experiences enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AllowedExtensions | TypetextareaPropertiesFilter, Nillable, Sort, UpdateDescriptionSpecifies the types of files allowed in your site. This list of file types lets you control what members upload and also prevents spammers from polluting your site with inappropriate files. Available in API version 36.0 and later.Separate file types with a comma (for example: jpg,docx,txt). You can enter lowercase and uppercase letters. You can enter up to 1,000 characters. To allow all file types, leave this field empty. |
| CaseCommentEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template used when submitting a comment on a case. This field is available in API version 28.0 and later. |
| ChangePasswordEmailTemplateId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the email template used when notifying users that their password has been reset. |
| ChgEmailVerNewEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template used when notifying users that their email address has been changed. This email is sent to the user’s new email address. |
| ChgEmailVerOldEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template used when notifying users that their email address has been changed. This email is sent to the user’s old email address. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionDescription of the site. |
| DeviceActEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template used when users log in from an unrecognized browser, app, or IP address. The email contains a one-time password that users enter to verify their identity.This field is available in API version 53.0 and later. |
| EmailFooterLogoId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the Document object that displays as an image in the footer of Chatter emails. |
| EmailFooterText | TypestringPropertiesFilter, Nillable, Sort, UpdateDescriptionText that displays in the footer of Chatter emails. |
| EmailSenderAddress | TypeemailPropertiesFilter, Group, SortDescriptionRead only. Email address from which emails are sent.NoteTo change the EmailSenderAddress value, you must first specify NewSenderAddress, which triggers the sending of an address change verification email. After you complete the address verification process, EmailSenderAddress changes to the specified NewSenderAddress. |
| EmailSenderName | TypestringPropertiesFilter, Group, Sort, UpdateDescriptionName from which emails are sent. |
| enableImageOptimizationCDN | TypebooleanPropertiesFilter, UpdateDescriptionThe setting that optimizes cached images for guest users on all devices when a site uses Salesforce’s CDN for Digital Experiences.This field is available in API version 56.0 and later. |
| FirstActivationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date the site was first activated.This field is available in API version 34.0 and later. If the site was activated or inactive before the release of API version 34.0, this field returns the date that the site was first created. |
| ForgotPasswordEmailTemplateId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the email template used when users forget their password. |
| HeadlessForgotPasswordTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template to use with the Headless Forgot Password Flow.This field is available in API version 57.0 and later. |
| HeadlessRegistrationTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template to use for identity verification during the Headless Registration Flow.This field is available in API version 59.0 and later. |
| LockoutEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template used when users try to reset their password after locking themselves out because of too many login attempts.This field is available in API version 43.0 and later. |
| MaxFileSizeKb | TypeintPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionSpecifies the maximum file size (in KBs) that members can upload in your site. Available in API version 36.0 and later.Enter a number between 3072 KB and your org’s maximum file size. To use the default limit of 2 GB, leave this field empty. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionThe name of the site. |
| NewSenderAddress | TypeemailPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionEmail address that has been entered as the new value for EmailSenderAddress but hasn’t been verified yet. After a user has requested to change the sender email address and has successfully responded to the verification email, the NewSenderAddress value overwrites the value in EmailSenderAddress. This value becomes the email address from which emails are sent.NoteIf verification is pending for a new email address and you set NewSenderAddress to null, the verification request is canceled.NewSenderAddress is automatically set to null after EmailSenderAddress has been set to the new verified address.If verification is pending for a new email address, and you specify a different new address for this field, only the latest value is retained and used for verification. |
| OptionsActionOverrideEnabled | TypebooleanPropertiesFilter, UpdateDescriptionOverride the action that occurs when users click a default button, like New or Edit, with a Lightning component. For example, show a custom window instead of the one that Salesforce provides. Assign action overrides in the Object Manager. In the UI, this setting is available in the Administration Workspace, under Administration \| Preferences under Experience ManagementThis field is available in API version 49.0 and later. |
| OptionsAllowInternalUserLogin | TypebooleanPropertiesFilter, UpdateDescriptionSpecifies whether internal users can log in with their internal credentials on the site login page.This field is available in API version 37.0 and later. |
| OptionsAllowMembersToFlag | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether users can flag posts, comments, or files as inappropriate.This field is available in API version 29.0 and later. The ability to flag files is available in version 30.0 and later. |
| OptionsApexCDNCachingEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether public data from @wire calls to Apex methods is cached only for guest users. This setting applies only to sites using Salesforce's CDN for Digital Experiences.This field is available in API version 55.0 and later. |
| OptionsDirectMessagesEnabled | TypebooleanPropertiesFilter, UpdateDescriptionControls the availability of direct messages in an Experience Builder site.This field is available in API version 39.0 and later. |
| OptionsEmbeddedLoginEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether the Embedded Login feature is enabled in a site. When true, Embedded Login is turned on.This field is available in API version 61.0 and later. |
| OptionsEnableTalkingAboutStats | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether site users see how many people are discussing a topic. The number of people discussing the topic appears as the user types the topic and the system gives topic suggestions.This field is available in API version 41.0 and later. |
| OptionsEnableTopicAssignmentRules | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, displays knowledgeable people in key areas, for example, on Topic Detail pages. |
| OptionsExpFriendlyUrlsAsDefault | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, URL slugs are on by default forProduct and Category pages of LWR Commerce stores (available in API version 58.0 and later)Custom object pages on enhanced LWR sites (available in API version 60.0 and later)Account and contact pages on enhanced LWR sites (available in API version 61.0 and later) |
| OptionsExperienceBundleBasedSnaOverrideEnabled | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, the Service Not Available Page is an auto-generated Experience Builder-based page. When false, the Service Not Available page uses a static resource page that is set in Workspaces \| Administration \| Pages. The default value is true. Available in API version 52.0 and later. |
| OptionsGatherCustomerSentimentData | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, collects data about user likes, upvotes, and downvotes. |
| OptionsGuestChatterEnabled | TypebooleanPropertiesFilter, UpdateDescriptionSpecifies whether guest users can access public Chatter groups in the site without logging in. |
| OptionsGuestFileAccessEnabled | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, lets guest users view asset files and CMS content that’s available to the site. Guest users can access shared asset files and published CMS content that’s made for external use, even if it isn’t used. Shared asset files include images that are associated with topics, recognition badges, branding, and account branding. This preference is automatically enabled if public access is enabled at the page or site level in Experience Builder. |
| OptionsGuestMemberVisibility | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, lets guest users see who else is part of the site, including non-guest users. In the UI, this setting appears in the Administration Workspace under Administration \| Preferences .Available in API version 47.0 and later. |
| OptionsHeadlessFrgtPswEnabled | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, Headless Forgot Password Flow is enabled.This field is available in API version 57.0 and later. |
| OptionsImageOptimizationCDNEnabled | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, cached images are optimized to suit any device that guest users use to access your site. This feature is available only for sites that use Salesforce’s CDN for Digital Experiences. In the UI, this setting appears in the Administration Workspace under Administration \| Preferences.Available in API version 56.0 and later. |
| OptionsInvitationsEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether users can invite others to the site. |
| OptionsKnowledgeableEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether users can see knowledgeable people for topics and endorse people for topics. |
| OptionsLWRExperienceConnectedAppEnabled | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, enhances the performance and scalability of Connect API calls made from Lightning web components in an enhanced LWR site. This field is available in API version 58.0 and later.NoteThis feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms. |
| OptionsMemberVisibility | TypebooleanPropertiesFilter, UpdateDescriptionControls user visibility on a per-site basis. If true, the See other members of this site preference is enabled for the selected site. This field is available in API version 45.0 and later. |
| OptionsMobileImageOptimizationEnabled | TypebooleanPropertiesFilter, UpdateDescriptionIf true, file asset images are optimized for mobile display. This field is available in API version 45.0 and later. |
| OptionsNetworkSentimentAnalysis | TypebooleanPropertiesFilter, UpdateDescriptionIf true, enables sentiment analysis in a site. In the UI, this setting is available in the Administration Workspace, under Administration \| Preferences. This field is available in API version 40.0 and later. |
| OptionsNicknameDisplayEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether user nicknames display instead of their first and last names in most places in the site.A few restrictions to keep in mind about nickname display:Records and user lookups on records show full names. Keep in mind, though, that you can control record and user visibility with sharing rules.Mobile notifications in the Salesforce mobile app show full names. You can turn off mobile notifications in the app to avoid this display.Searches by first, last, and full names aren’t restricted and return matches, but the search results display only nicknames. Global search auto-complete recommendations show any first, last, and full names that the user has searched by or accessed via a record or another location. The recent items list also shows first, last, and full under the same conditions. |
| OptionsPrivateMessagesEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether users can send and receive Chatter messages in the site. |
| OptionsProfileBasedLayoutsForKnowledgeSearchEnabled | TypebooleanPropertiesFilter, UpdateDescriptionWhen true, provides a grid layout for Knowledge search results. With grid layout in place, you can edit search profile layouts on the Knowledge object to show and hide different search result fields for different profiles. When you enable the standard grid layout, search-term highlighting isn’t available. This field is available in API version 51.0 and later. |
| OptionsRecognitionBadgingEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether Recognition Badges is enabled for the site. |
| OptionsReputationEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines if reputation is calculated and displayed for members. This field is available in API version 31.0 and later. |
| OptionsReputationRecordConversationsDisabled | TypebooleanPropertiesFilter, UpdateDescriptionDisables the feed on reputation records. |
| OptionsSelfRegistrationEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether customers and partners can self-register to join the site. Customers and partners are users with External Identity, Community, Customer Portal, or partner portal licenses. If true, displays a Not a member? link on the login page that points to the default self-registration page. This field is available in API version 28.0 and later. |
| OptionsSendWelcomeEmail | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether a welcome email is sent when a new user is added to the site. |
| OptionsShowAllNetworkSettings | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether settings in Experience Management that were hidden based on how you set up your site are visible or remain hidden.This field is available in API version 33.0 and later. |
| OptionsSiteAsContainerEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether the site is an Experience Builder site (true) or a Salesforce Tabs + Visualforce site (false).This field is available in API version 29.0 and later. |
| OptionsThreadedDiscussionsEnabled | TypebooleanPropertiesFilter, UpdateDescriptionIndicates whether threaded discussions are enabled for the site. Available in API version 44.0 and later. |
| OptionsTopicFilteringForKnowledgeSearchEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether topic filtering is enabled for Knowledge search.This field is available in API version 55.0 and later. |
| OptionsTopicSuggestionsEnabled | TypebooleanPropertiesFilter, UpdateDescriptionEnables topic suggestions when users write posts.This field is available in API version 41.0 and later. |
| OptionsUpDownVoteEnabled | TypebooleanPropertiesFilter, UpdateDescriptionDetermines whether up and down voting is enabled for the site.This field is available in API version 41.0 and later. |
| PwdlessRegEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template for the welcome email that users receive when they sign up with passwordless registration. This field is available in API version 61.0 and later. |
| SelfRegMicroBatchSubErrorEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the profile assigned to users who self-register using micro-batchng. Only applies if self-registration using micro-batching is enabled for the site.This field is available in API version 54.0 and later. |
| SelfRegProfileId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the profile assigned to users who self-register. Only applies if self-registration is enabled for the site.This field is available in API version 29.0 and later. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionStatus of the site. Available values are:Live—The site is online and members can access it. Label is Published.DownForMaintenance—The site was previously published, but was taken offline. Members with the Create and Set Up Experiences permission can still access the setup for offline sites regardless of profile or membership. Members aren’t able to access offline sites, but they still appear in the user interface dropdown menu as SiteName (Offline). Label is Offline.UnderConstruction—The site hasn’t yet been published. When a user’s profile is associated with the site, and they’ve Create and Set Up Experiences permission, they can access sites in this status.After a site is published, it can never be in this status again. Label is Preview. |
| UrlPathPrefix | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe UrlPathPrefix is a unique string at the end of the URL for the site. For example, in the site URL MyDomainName.my.site.com/customers, customers is the UrlPathPrefix. |
| VerificationEmailTemplateId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the email template used when users must verify their identity, for example, when they log in without a password.This field is available in API version 44.0 and later. |
| WelcomeEmailTemplateId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the email template used when sending welcome emails to new members. |

## Usage

Use this object to find, view, and update sites in your org. If you’re assigned the Modify All Data, View All Data, or Create and Set Up Experiences permission, you can view all sites in the org. Users without these permissions see only the Preview or Published sites that they’re members of. If you’re assigned the Create and Set Up Experiences permission, you can customize site settings.

#### See Also

-   [WebStoreNetwork](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorenetwork.htm "Represents the relationship between a web store and an experience site. This object is available in API version 49.0 and later.")

## Related Topics

- WebStoreNetwork (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_webstorenetwork.htm)
