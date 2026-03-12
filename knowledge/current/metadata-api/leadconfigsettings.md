---
title: "LeadConfigSettings"
domain: metadata-api
topic: leadconfigsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.776Z
estimatedTokens: 878
keywords: [LeadConfigSettings, Represents, configuration, settings, Leads, control, how, they, converted, displayed, actions, available., extends, Metadata, metadata, inherits, its, fullName, field., File]
---

# LeadConfigSettings

> Represents configuration settings for Leads that control how they are converted and
		displayed, and what actions are available. This type extends the Metadata metadata type and inherits its
                        fullName field.

# LeadConfigSettings

Represents configuration settings for Leads that control how they are converted and displayed, and what actions are available. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

LeadConfigSettings values are stored in the LeadConfig.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

LeadConfigSettings is available in API versions 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| doesEnableLeadConvertDefaultSubjectBlankTaskCreation | boolean | Configures whether tasks without a subject are created during lead conversion. If true, tasks are created when the default subject field has no value. If false, only tasks with a subject are created. |
| doesHideOpportunityInConvertLeadWindow | boolean | Hides the opportunity section of the Convert Lead window during the conversion of a lead.Default value is false. |
| doesPreserveLeadStatus | boolean | If your organization uses record types, the lead status changes to the lead status value of the new owner's record type during conversion. Set doesPreserveLeadStatus to true to preserve the value of the lead status during conversion.Orgs that use record types can create a lead process that allows different lead status values for different record types. If doesPreserveLeadStatus is false, the lead status might change during lead conversion if the new owner's record type has a different default value for lead status.Default value is true. |
| doesSelectNoOpportunityOnConvertLead | boolean | Prevents an opportunity from being created when the lead is converted.Default value is false. |
| doesTrackHistory | boolean | Enables field history tracking for leads. When field history tracking is enabled, users can choose the fields they want to track.Default value is false. |
| enableConversionsOnMobile | boolean | Lets a user convert leads on their mobile devices. The Convert Lead action converts qualified leads to contacts.Default value is true. |
| enableOrgWideMergeAndDelete | boolean | Lets a user merge and delete leads. The user must also have the Public Read/Write/Transfer permission.Default value is false. |
| shouldLeadConvertRequireValidation | boolean | Enforces validation rules when converting leads.Default value is true. |
| shouldSendNotificationEmailWhenLeadOwnerUpdatesViaApexInLEX | boolean | Indicates whether an email notification is sent when the lead owner is updated through Apex in Lightning Experience.Default value is false. |

## Declarative Metadata Sample Definition

The following is an example of the LeadConfigSettings type:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the LeadConfig settings metadata for an organization:

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LeadConfigSettings xmlns="http://soap.sforce.com/2006/04/metadata">
<doesEnableLeadConvertDefaultSubjectBlankTaskCreation>false</doesEnableLeadConvertDefaultSubjectBlankTaskCreation>
<doesHideOpportunityInConvertLeadWindow>false</doesHideOpportunityInConvertLeadWindow>
<doesPreserveLeadStatus>true</doesPreserveLeadStatus>
<doesSelectNoOpportunityOnConvertLead>false</doesSelectNoOpportunityOnConvertLead>
<doesTrackHistory>false</doesTrackHistory>
<enableConversionsOnMobile>true</enableConversionsOnMobile>
<enableOrgWideMergeAndDelete>false</enableOrgWideMergeAndDelete>
<shouldLeadConvertRequireValidation>true</shouldLeadConvertRequireValidation>
<shouldSendNotificationEmailWhenLeadOwnerUpdatesViaApexInLEX>false</shouldSendNotificationEmailWhenLeadOwnerUpdatesViaApexInLEX>
</LeadConfigSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!--

<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>LeadConfig</members>
        <name>Settings</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
