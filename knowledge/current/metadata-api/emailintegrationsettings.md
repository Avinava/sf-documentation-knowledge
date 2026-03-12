---
title: "EmailIntegrationSettings"
domain: metadata-api
topic: emailintegrationsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:38.792Z
estimatedTokens: 1860
keywords: [EmailIntegrationSettings, org’s, settings, Outlook, integration, Gmail, Salesforce, Inbox, extends, Metadata, inherits, fullName, File, Suffix, Directory]
---

# EmailIntegrationSettings

> Represents an org’s settings for the
      Outlook integration, Gmail integration, and Salesforce Inbox.
    This type extends the Metadata metadata
      type and inherits its fullName field.

# EmailIntegrationSettings

Represents an org’s settings for the Outlook integration, Gmail integration, and Salesforce Inbox. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

EmailIntegrationSettings values are stored in the EmailIntegration.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

EmailIntegrationSettings fields are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| doesEmailLogAsEmailMessageInOutlook | boolean | Indicates whether the Outlook integration logs emails to the Email Message object (true) or as tasks (false). The default value is true.This field can only be used if the enableOutlookIntegration field is set to true. |
| doesGmailStayConnectedToSalesforce | boolean | Indicates whether Gmail integration users log in to Salesforce from Gmail each time their session expires. If set to true, users log in from the Gmail integration one time, and their credentials are remembered the next time they use the Gmail integration. If set to false, users log in to Salesforce from the Gmail integration each time their Salesforce session expires. The default value is false.This field can only be used if the enableGmailIntegration field is set to true. |
| enableContactAndEventSync | boolean | Indicates whether users can sync calendar events and contacts between Salesforce and their Microsoft and Google accounts ( true) or not (false). Lightning Sync or Einstein Activity Capture must be enabled to use this feature. The default value is false.Available in API version 48.0 and later. |
| enableContextualEverywhere | boolean | Indicates whether contextual insights in Sales Cloud Everywhere, available in the Salesforce Chrome extension, are enabled (true) or not (false).This field is available in API version 58.0 and later. |
| enableEmailTrackingInMobile | boolean | Indicates whether Salesforce Inbox users can track emails (true) or not (false) while in the Outlook integration with Inbox or the Gmail integration with Inbox. It also controls email tracking in the Inbox mobile app and legacy versions of Inbox. The default value is true. |
| enableEngageForOutlook | boolean | Indicates whether Engage For Outlook is enabled (true) or not (false). When set to true, Engage users can connect their Outlook account and send Engage emails from their Outlook inbox. |
| enableExtensionHostUnrestricted | boolean | Indicates whether the contextual web experience is enabled in the chrome extension or not. |
| enableGmailIntegration | boolean | Indicates whether the Gmail integration is enabled (true) or not (false). When set to true, G Suite users with the Gmail integration can connect their Gmail account and work with Salesforce data in their email. The default value is true. |
| enableInboxInternalEmailTracking | boolean | Indicates whether a read-receipt status is shown for emails that are sent within the same domain (true) or not (false).This field is available in API version 58.0 and later. |
| enableInboxMobileIntune | boolean | Indicates whether Inbox is enabled to use Microsoft Intune to manage security settings (true) or not (false). When set to true, Inbox mobile users need a Microsoft Intune license to log in to the app. The default value is false.Available in API version 50.0 and later. |
| enableOutlookIntegration | boolean | Indicates whether the Outlook integration is enabled (true) or not (false). When set to true, Outlook users with the Outlook integration can connect their Outlook account and work with Salesforce data in their email. The default value is false. |
| enableProductivityFeatures | boolean | Indicates whether Inbox features, such as Availability and Send later, are available (true) or not available (false) in the Outlook or Gmail integration. The default value is false.This field can only be used if either the enableOutlookIntegration or enableGmailIntegration field is set to true and if the org has an Inbox license.NoteTo see Inbox features, users must also have either the Inbox with Einstein Activity Capture or the Inbox without Einstein Activity capture permission set. |
| enableSupplementalContactInfoInMobile | boolean | Indicates whether Salesforce Inbox mobile app users see third-party contact information when contacts are shown (true) or not (false) in the Inbox mobile app. The default value is false. |
| isLayoutCustomizationAllowed | boolean | Indicates whether Salesforce admins are allowed (true) or not allowed (false) to create custom email application panes using the Lightning App Builder. The email application pane defines the layout of the Salesforce pane in Outlook and Gmail. The default value is true.This field can only be used if either the enableOutlookIntegration or enableGmailIntegration field is set to true. |
| orgIsSyncingEventsOutbound | boolean | Indicates whether changes to Salesforce events sync to Outlook and Google calendars (true) or not (false).NoteThis field is set by Salesforce. We do not recommend that you set this field manually, as doing so may cause interruptions in your org's event syncing.This field is available in API version 50.0 and later |
|  |  |  |
| shouldUseTrustedDomainsList | boolean | Indicates if the web domains listed in the Outlook Integration & Sync page in Salesforce Setup are supported (true) or not (false). These domains are for users who access email using Outlook on the web. The default value is true.This field can only be used if the enableOutlookIntegration field is set to true. |

## Declarative Metadata Sample Definition

The following is an example of a EmailIntegrationSettings file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EmailIntegrationSettings xmlns="http://soap.sforce.com/2006/04/metadata">
        <enableContactAndEventSync>true</enableContactAndEventSync>
        <enableProductivityFeatures>true</enableProductivityFeatures>
        <doesGmailStayConnectedToSalesforce>true</doesGmailStayConnectedToSalesforce>
        <enableOutlookIntegration>true</enableOutlookIntegration>
        <enableGmailIntegration>true</enableGmailIntegration>
        <isLayoutCustomizationAllowed>true</isLayoutCustomizationAllowed>
        <doesEmailLogAsEmailMessageInOutlook>false</doesEmailLogAsEmailMessageInOutlook>
        <shouldUseTrustedDomainsList>false</shouldUseTrustedDomainsList>
        <enableEmailTrackingInMobile>true</enableEmailTrackingInMobile>
        <enableSupplementalContactInfoInMobile>false</enableSupplementalContactInfoInMobile>
        <enableEngageForOutlook>true</enableEngageForOutlook>
</EmailIntegrationSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>EmailIntegration</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
