---
title: "EmailAdministrationSettings"
domain: metadata-api
topic: emailadministrationsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.141Z
keywords: [EmailAdministrationSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, See]
---

# EmailAdministrationSettings

# EmailAdministrationSettings

Represents an organization’s email administration settings, including email deliverability, security compliance, relay configurations, and system notifications. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EmailAdministrationSettings values are stored in the EmailAdminstration.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

EmailAdministrationSettings is available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableComplianceBcc | boolean | Indicates whether a copy of each outbound email message is sent to an email address you specify (true) or not (false). This field has a default value of false.NoteTo use this feature, you must specify an email address in Compliance BCC Email in Setup. |
| enableEmailConsentManagement | boolean | Indicates whether Enforce Email Privacy Settings is enabled (true) or not (false). When enabled, Salesforce respects each recipient’s email privacy preferences. Default value is false. |
| enableEmailSenderIdCompliance | boolean | Indicates whether outgoing emails comply with Sender ID email protocols (true) or not (false). This field has a default value of false. To enable this preference, enableEmailSpfCompliance must be set to true.NoteEvaluate the multiple standard email security protocols (SPF, DKIM, and DMARC) supported by Salesforce before you enable this setting. |
| enableEmailSpfCompliance | boolean | Indicates whether outgoing emails comply with Sender Policy Framework (SPF) email authentication (true) or not (false). This field has a default value of true. |
| enableEmailToSalesforce | boolean | Indicates whether Email to Salesforce is enabled (true) or disabled (false). This field has a default value of false. |
| enableEmailWorkflowApproval | boolean | Indicates whether users can respond to email approval requests directly from their email (true) or not (false). This field has a default value of false. See Considerations for Email Approval before enabling this field. |
| enableEnhancedEmailEnabled | boolean | Indicates whether Enhanced Email is enabled (true) or not (false). Default value is true. |
| enableHandleBouncedEmails | boolean | Indicates whether emails sent from Salesforce to an invalid email address bounce back to Salesforce (true) or not (false) . This field has a default value of true. With bounce handling enabled, reps know which lead, contact, or person account has a bad email address, and they know which specific email wasn’t delivered. |
| enableHtmlEmail | boolean | Indicates whether users receive Email-To-Case emails in HTML format (true) or receive a text version instead (false). This field has a default value of false. When this field is set to true, users receive a warning message about potential malicious HTML before they view incoming HTML email content. |
| enableInternationalEmailAddresses | boolean | Indicates whether non-Latin-based characters are allowed in email addresses (true) or not (false) when sending emails to and from Salesforce. This field has a default value of true in orgs created in Summer '20 or later. In orgs created in Spring '20 or earlier, the default value is false. Available in API version 49.0 and later.NoteReview the Email Address Internationalization prerequisites and considerations in Salesforce Help before enabling this setting. |
| enableListEmailLogActivities | boolean | Indicates whether Salesforce logs sent list emails as activities (true) or not (false). Default value is true. |
| enableResendBouncedEmails | boolean | Indicates whether the system forwards a copy of each bounced email message to the sender (true) or only displays the bounce alert (false). This field has a default value of false. To enable this preference, enableHandleBouncedEmails must be set to true. |
| enableRestrictTlsToDomains | boolean | Indicates whether the selected Transport Layer Security (TLS) setting applies only to specific domains (true) or applies to all domains (false). This field has a default value of false.NoteTo enable this preference, you must specify a TLS Setting other than Preferred and provide the comma-separated list of domains through Deliverability in Setup. When this field is set to true, any domains not in the list use the system default TLS Setting of Preferred. |
| enableSendThroughGmailPref | boolean | Deprecated. |
| enableSendViaExchangePref | boolean | Indicates whether users can use Office 365 to send emails (true) or not (false). Default value is false. |
| enableSendViaGmailPref | boolean | Indicates whether users can use Gmail to send emails (true) or not (false). Default value is false. |
| enableUseOrgFootersForExtTrans | boolean | Indicates whether emails sent through external email services (such as Gmail or Office 365) include the Salesforce footer (true) or not (false). This field has a default value of false. |
| sendMassEmailNotification | boolean | Indicates whether users receive an auto-generated status email from Salesforce for each mass email they send (true) or not (false). This field has a default value of true. |
| sendTextOnlySystemEmails | boolean | Indicates whether all system emails are sent via text only (true) or allow other formats (false). This field has a default value of false. |

## Declarative Metadata Sample Definition

The following is an example of an EmailAdministrationSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [*Salesforce Help*: Email Address Internationalization](https://help.salesforce.com/articleView?id=emailadmin_eai.htm&language=en_US "Salesforce Help: Email Address
    Internationalization - HTML (New Window)")