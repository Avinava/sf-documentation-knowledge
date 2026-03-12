---
title: "SocialCustomerServiceSettings"
domain: metadata-api
topic: socialcustomerservicesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.929Z
estimatedTokens: 1108
keywords: [SocialCustomerServiceSettings, Represents, Social, Customer, Service, settings, such, how, format, inbound, content, social, posts, cases., extends, Metadata, metadata, inherits, its, fullName]
---

# SocialCustomerServiceSettings

> Represents Social Customer Service settings such as how to format inbound content
        from social posts to cases. This type extends the Metadata metadata type and inherits its
                        fullName field.

# SocialCustomerServiceSettings

Represents Social Customer Service settings such as how to format inbound content from social posts to cases. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

SocialCustomerServiceSettings components have the suffix settings and are stored in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

SocialCustomerServiceSettings is available in API version 41.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| caseSubjectOption | CaseSubjectOption (enumeration of type string) | Required. Specifies an option from which inbound social content is formatted to appear in case records’ Case Subject field. Valid values are:SocialPostSourceSocialPostContentBuildCustom |
| enableAllFBResponseAccounts | boolean | Indicates whether responses from all Facebook managed accounts are enabled. If this setting is disabled, responses to a Facebook post can only be sent from the account that the original customer post was directed to. The default value is true. Available in API version 56.0 and later. |
| enableSocialApprovals | boolean | Indicates whether social approvals are enabled. To learn more, see Enable Social Post Approvals.The default value is false. Available in API version 47.0 and later. |
| enableSocialCaseAssignmentRules | boolean | Indicates whether case assignment rules are enabled. Use case assignment rules to determine how cases are assigned to users or put into queues as they are created. The default value is false. Available in API version 47.0 and later. |
| enableSocialCustomerService | boolean | Indicates whether to enable the Social Customer Service feature. The default value is false. Available in API version 47.0 and later. |
| enableSocialPersonaHistoryTracking | boolean | Indicates whether to enable Social Persona history tracking. History tracking helps identify who made what changes when, and for differentiating between automatic and manual changes. The default value is false. Available in API version 47.0 and later. |
| enableSocialPostHistoryTracking | boolean | Indicates whether to enable Social Post history tracking. History tracking helps identify who made what changes when, and for differentiating between automatic and manual changes. The default value is false. Available in API version 47.0 and later. |
| enableSocialReceiveParentPost | boolean | Indicates whether to use the original social post that initiated the case as the parent record. The default value is false. Available in API version 47.0 and later. |

## Declarative Metadata Sample Definition

This is a sample of a SocialCustomerServiceSettings.settings file.

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
<SocialCustomerServiceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <caseSubjectOption>SocialPostSource</caseSubjectOption>
    <enableSocialApprovals>true</enableSocialApprovals>
    <enableSocialCaseAssignmentRules>false</enableSocialCaseAssignmentRules>
    <enableSocialCustomerService>true</enableSocialCustomerService>
    <enableSocialPersonaHistoryTracking>false</enableSocialPersonaHistoryTracking>
    <enableSocialPostHistoryTracking>false</enableSocialPostHistoryTracking>
    <enableSocialReceiveParentPost>true</enableSocialReceiveParentPost>
</SocialCustomerServiceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>SocialCustomerService</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
