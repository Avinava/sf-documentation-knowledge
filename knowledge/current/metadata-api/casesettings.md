---
title: "CaseSettings"
domain: metadata-api
topic: casesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.042Z
keywords: [CaseSettings, File, Suffix, Directory, Location, Version, Fields, EmailToCaseSettings, EmailToCaseRoutingAddress, FeedItemSettings, WebToCaseSettings, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CaseSettings

# CaseSettings

Represents an organization’s case settings, such as the default case owner, which case-related features are enabled, and which Classic email templates are used for various case activities. This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

[CaseSettings](#meta_casesettings "Represents an organization’s case settings, such as the default case owner, which case-related features are enabled, and which Classic email templates are used for various case activities. This type extends the Metadata metadata type and inherits its fullName field.") values are stored in the Case.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

[CaseSettings](#meta_casesettings "Represents an organization’s case settings, such as the default case owner, which case-related features are enabled, and which Classic email templates are used for various case activities. This type extends the Metadata metadata type and inherits its fullName field.") is available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| caseAssignNotificationTemplate | string | Specifies the email template used for case assignment notifications. The format must be folderName/emailTemplateName.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| caseAutoProcUser | boolean | Indicates whether to create an automated response record after a customer’s initial email (true) or not (false). |
| caseCloseNotificationTemplate | string | Specifies the email template used for case close notifications. The format must be folderName/emailTemplateName.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| caseCommentNotificationTemplate | string | Specifies the email template used for case comment notifications. The format must be folderName/emailTemplateName.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| caseCreateNotificationTemplate | string | Specifies the email template used for case create notifications. The format must be folderName/emailTemplateName.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| caseFeedItemSettings | FeedItemSettings[] | Specifies the settings for feed items in feed-based case page layouts. This field is available in API version 32.0 and later. |
| caseFeedReadUnreadLtng | boolean | Indicates whether unread feed items are shown in bold in Lightning Experience (true) or not (false). |
| caseMergeInLightning | boolean | Indicates whether Case Merge is enabled in Lightning Experience (true) or not (false). |
| closeCaseThroughStatusChange | boolean | Indicates whether Closed is included in the Case Status field on case edit pages (true) or not (false). |
| defaultCaseFeedLayoutOn | boolean | Indicates whether the default Case Feed layout is used in the org (true) or not (false). |
| defaultCaseOwner | string | Specifies the default owner of a case when assignment rules fail to locate an owner. |
| defaultCaseOwnerType | string | Specifies whether the default case owner is a user or a queue. |
| defaultCaseUser | string | Specifies the user listed in the Case History related list for automated case changes from:Assignment rulesEscalation rulesOn-Demand Email-to-CaseCases logged in the Self-Service portalLightning email templates aren’t packageable. We recommend using a Classic email template. |
| emailActionDefaultsHandlerClass | string | Use this Apex class name to provide default values for the email action. |
| emailToCase | EmailToCaseSettings | The organization's Email-to-Case settings. |
| enableCaseFeed | boolean | Indicates whether Case Feed is enabled (true) or not (false). |
| enableCollapseEmailThread | boolean | Indicates whether earlier messages in an email thread are removed from email feed items (true) or not (false). Available in API version 47.0 and later. |
| enableDraftEmails | boolean | Indicates whether draft emails are enabled (true) or not (false). Enabling email drafts requires that Case Feed and Email-to-Case are also enabled. |
| enableEarlyEscalationRuleTriggers | boolean | Indicates whether early triggers on escalation rules are enabled (true) or not (false). |
| enableEmailActionDefaultsHandler | boolean | Indicates whether the Email Action Default Handler setting is enabled (true) or not (false). Use this setting to select an Apex class to load a default template or to specify the default target fields for the email action. |
| enableEmailContactOnCasePost | boolean | If true, the case contact is notified by email when someone makes an externally visible post on a case in an Experience Builder site. |
| enableEscalateQfiToCaseInternal | boolean | If true, moderators can create cases from Question feed items in Chatter in your organization. |
| enableEscalateQfiToCaseNetworks | boolean | If true, moderators can create cases from Question feed items in Chatter in all Experience Builder sites where Chatter Questions is enabled. |
| enableExtNetworksCaseFeedEnabled | boolean | If true, site members can see case-related emails, comments, and updates in the case feed. |
| enableMultiLangSolnSrchCSS | boolean | Indicates whether multilingual searching for Solutions in self-service portals is enabled (true) or not (false). |
| enableMultiLangSolnSrchPKB | boolean | Indicates whether multilingual searching for public Solutions is enabled (true) or not (false). |
| enableMultiLangSolution | boolean | Indicates whether multilingual Solutions are enabled (true) or not (false). |
| enableNewEmailDefaultTemplate | boolean | Indicates whether default email templates are enabled (true) or not (false). Default email templates are available only if draft emails are enabled.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| enableSolutionCategory | boolean | Indicates whether browsing for Solutions is enabled (true) or not (false). |
| enableSolutionInlineCategory | boolean | Indicates whether using inline Solutions category breadcrumbs is enabled (true) or not (false). |
| enableSolutionShortSummary | boolean | Indicates whether Solutions summaries are enabled (true) or not (false). |
| enableSuggestedArticlesApplication | boolean | Indicates whether the Suggested Articles list appears on case pages. (true) or not (false). Is only valid if enableSuggestedSolutions=false. |
| enableSuggestedArticlesCustomerPortal | boolean | Indicates whether the Suggested Articles list appears on customer portal pages (true) or not (false). Is only valid if enableSuggestedSolutions=false. |
| enableSuggestedArticlesPartnerPortal | boolean | Indicates whether the Suggested Articles list appears on partner portal pages (true) or not (false). Is only valid if enableSuggestedSolutions=false. |
| enableSuggestedSolutions | boolean | Indicates whether the View Suggested Solutions or Find Articles button appears on case detail pages (true) or not (false). Is only valid if enableSuggestedArticlesApplication, enableSuggestedArticlesCustomerPortal, and enableSuggestedArticlesPartnerPortal=false. |
| escalateCaseBefore | boolean | Indicates whether early triggers are enabled to escalate a case (true) or not (false). |
| genericMessageEnabled | boolean | Indicates whether generic messages are enabled (true) or not (false). |
| keepCaseMergeRecords | boolean | If true, duplicate cases aren’t deleted after a case merge. |
| keepRecordTypeOnAssignmentRule | boolean | When applying assignment rules to manually created records, indicates whether to keep the existing record type (true) or to override the existing record type with the assignee’s default record type (false). |
| newEmailDefaultTemplateClass | string | Specifies the Apex class that defines the default email template for new email messages in Case Feed. This field appears only when enableNewEmailDefaultTemplate=true.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| notifyContactOnCaseComment | boolean | Indicates whether contacts who aren’t members of your Self-Service portal can be notified when a new comment is added to a case (true) or not (false). |
| notifyDefaultCaseOwner | boolean | Indicates whether the default case owner is notified when assigned a new case (true) or not (false). |
| notifyOwnerOnCaseComment | boolean | Indicates whether the case owner is notified when a comment is added to a case (true) or not (false). |
| notifyOwnerOnCaseOwnerChange | boolean | Indicates whether the Send Notification Email checkbox on cases is automatically selected when users change a case owner to another user (true). |
| predictiveSupportEnabled | boolean | Indicates whether predictive support is enabled (true) or not (false). |
| showEmailAttachmentsInCase​AttachmentsRL | boolean | Indicates whether the case Attachments related list shows email attachments. If true, the page displays an email icon next to each attachment from an email in the Attachments related list for cases. The related list’s list view also includes a Source column that identifies the attachment’s origin. If false, email attachments aren’t displayed in the Attachments related list for cases.This field is available in API version 40.0 and later. |
| showFewerCloseActions | boolean | Indicates whether the Save & Close button on case edit pages and the Cls link on Cases related lists are hidden (true) or shown (false). |
| systemUserEmail | string | Specifies the email address used when the default case user is the system user. |
| useSystemEmailAddress | boolean | Indicates whom case comment, case attachment, and case assignment email notifications appear to be sent from. Use true to show notifications as sent from a system address. Use false to show notifications as sent from the user or contact who is updating the case. |
| useSystemUserAsDefaultCaseUser | boolean | Indicates whether the system user is used as the automated case user (true) or not (false). If false, then you must specify a value for the defaultCaseUser field. |
| visibleInCssCheckbox | boolean | Sets the default visibility of a case as indicated by the Visible in CSS option on the case edit page. If false, the case is visible in CSS by default. If true, CSS visibility is off. |
| webToCase | WebToCaseSettings | The organization's Web-to-Case settings. |

## EmailToCaseSettings

Represents an organization's Email-to-Case settings.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableEmailToCase | boolean | Indicates whether Email-to-Case is enabled (true) or not (false). Note: After Email-to-Case is enabled, it can't be disabled. |
| enableE2CAttachmentAsFile | boolean | Indicates whether to save attachments sent using Email-to-Case as Salesforce Files (true) or not (false). |
| enableE2CDeduplicateAttachments | boolean | When Email-to-Case receives an inbound email to thread to an existing case, attachments in the email that already exist on the case are not saved as new records and are instead linked to the new email (true). |
| enableE2CExternalServer | boolean | Indicates whether emails can be sent via an external service such as Gmail or Outlook, rather than the Salesforce email service (true). External outbound email services are available in Lightning Experience only. |
|  |  |
| enableE2CSourceTracking | boolean | Indicates whether Set Case Source to Email is enabled (true) or not (false). After you enable this setting, the Case Source field is updated to Email for all cases that originate from Email-to-Case. Associated emails are marked as Read when the agent opens the case. |
| enableHtmlEmail | boolean | Indicates whether HTML email is enabled (true) or not (false). |
| enableNewtoReadTriggers | boolean | Indicates whether the email status change invokes triggers when emails open in Case feeds or from Email Message records in Lightning (true) or not (false). |
| enableOnDemandEmailToCase | boolean | Indicates whether On-Demand Email-to-Case is enabled (true) or not (false). |
| enableThreadIDInBody | boolean | Indicates whether the Thread ID for a case is inserted in the body of an email (true) or not (false). This is applicable only to orgs that do not use Lightning Threading. |
| enableThreadIDInSubject | boolean | Indicates whether the Thread ID for a case is inserted in the subject line of an email (true) or not (false). This is applicable only to orgs that do not use Lightning Threading. |
| enableThreadTokenInBody | boolean | Indicates whether a threading token is appended in the email body when agents send an email from a Lightning email composer (true) or not (false). This is applicable only to orgs using Lightning Threading. |
| enableThreadTokenInSubject | boolean | Indicates whether a threading token is appended in the email subject when agents send an email from a Lightning email composer (true) or not (false). This is applicable only to orgs using Lightning Threading. |
|  |  |
| notifyOwnerOnNewCaseEmail | boolean | Indicates whether the owner of a case receives a notification when a new email related to the case is received (true) or not (false). |
| overEmailLimitAction | EmailToCaseOnFailureActionType (enumeration of type string) | Specifies what happens to email messages that are received after an organization exceeds its daily Email-to-Case limits. Valid values are:BounceDiscardRequeue |
| preQuoteSignature | boolean | Indicates whether the user signature is inserted after the reply but before the email thread in an outbound email (true) or at the end of the email (false). |
| routingAddresses | EmailToCaseRoutingAddress[] | The organization's Email-to-Case routing addresses and their attributes. Removing an address from this list deletes it from the target org. |
| replyWithNewContentOnly | boolean | Indicates whether previous thread content in excluded from replies, to reduce the size of outgoing emails (true) or not (false). |
| showGeneratedEmailCheckbox | boolean | Indicates whether senders are required to confirm that they reviewed emails written by Einstein (true) or not (false). |
| unauthorizedSenderAction | EmailToCaseOnFailureActionType (enumeration of type string) | Specifies what happens to email messages received from invalid senders. Valid values are:BounceDiscard |
| useEmailHeadersForThreading | boolean | Indicates whether metadata from incoming emails is used to match replies with cases if token-based threading doesn't produce a match (true) or not (false). |

## EmailToCaseRoutingAddress

Represents an organization's Email-to-Case routing address.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| addressType | EmailToCaseRoutingAddressType (enumeration of type string) | Specifies the type of Email-to-Case routing address. Valid values are:EmailToCase—A routing address used with Email-to-Case or On-Demand Email-to-Case.Outlook—A routing address used with Salesforce for Outlook to create cases from Outlook. Requires that On-Demand Email-to-Case is enabled. |
| authorizedSenders | string | Specifies the email addresses or domains from which On-Demand Email-to-Case can receive email. Include multiple entries in a comma-separated list. |
| caseOrigin | string | Specifies the default case origin for cases created through this routing address. |
| caseOwner | string | Specifies the default owner of cases created through this routing address. The case owner can be either a user or a queue. Specify the case owner using a Salesforce username.Specifying a case owner here in the routing address sets a value of defaultCaseOwner in CaseSettings. |
| caseOwnerType | string | Specifies whether the default case owner is a user or a queue. |
| casePriority | string | Specifies the default case priority for cases created through this routing address. |
| createTask | boolean | Indicates whether a task is automatically assigned to the case owner when a case is created through an email (true) or not (false). |
| emailAddress | string | Specifies the email address used to route email messages that are submitted as cases. |
| emailServicesAddress | string | Specifies the Salesforce-generated routing address used for setting up Email-to-Case forwarding. This field value is read-only and can't be modified. |
| fallbackQueue | string | Defines which queue to use when emails can’t be routed with the specified Omni-Channel flow. This queue must use Case as the service channel object.Available in API version 56.0 and later. |
| isPermsetControlled | boolean | Indicates whether users’ access to the email routing address is controlled by a permission set. If true, only users with access via a permission set can use the routing address to send emails. |
| isVerified | boolean | Indicates whether the customer has verified the routing address (typically by clicking a confirmation email). This field value is read-only and can't be modified. |
| newEntityRecordType | string | Sets the Case Record Type used for new Cases that are created from emails sent to that specific routing address.If not provided, Salesforce uses the org’s default Case Record Type for the user/context handling Email-to-Case. Ensure the record type exists and is active on Case. |
| routingFlow | string | Specifies the name of an Omni-Channel flow that routes cases generated in Email-to-Case.Available in API version 56.0 and later. |
| routingName | string | Specifies the name of the Email-to-Case routing address. |
| saveEmailHeaders | boolean | Indicates whether email routing and envelope information are saved (true) or not (false). |
| taskStatus | string | Specifies the default status on tasks automatically assigned to the case owner when email is submitted as a case. Only applies if createTask is set to true. |

## FeedItemSettings

Represents an organization's feed item settings. Available in API version 32.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| characterLimit | int | Specifies the maximum number of characters displayed for each feed item. |
| collapseThread | boolean | Removed. Indicates whether earlier messages in an email thread are removed from email feed items (true) or not (false).Available in API versions 27.0 to 46.0. |
| displayFormat | FeedItemDisplayFormat (enumeration of type string) | Indicates how email feed items are displayed. Valid values are:Default—Blank lines in email feed items are displayed.HideBlankLines—Blank lines in email feed items aren’t displayed. |
| feedItemType | FeedItemType (enumeration of type string) | The type of feed item to which the settings apply. For FeedItemSettings, the only valid feedItemType value is EmailMessageEvent. |

## WebToCaseSettings

Represents an organization's Web-to-Case settings.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| caseOrigin | string | Specifies the default case origin for cases created through this web form. Applies only if enableWebToCase is set to true. |
| defaultResponseTemplate | string | Specifies the default template used for email responses to cases that are submitted through a Self-Service portal. Applies only if enableWebToCase is set to true.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| enableWebToCase | boolean | Indicates whether Web-to-Case is enabled (true) or not (false). |

## Declarative Metadata Sample Definition

This code sample is an example of a case settings file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").