---
title: "MobileSecurityPolicy"
domain: metadata-api
topic: mobilesecuritypolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.716Z
estimatedTokens: 1128
keywords: [MobileSecurityPolicy, mobile, app, security, policy, Salesforce, Enhanced, enabled, full, Enable, Configure, Policies, Parent, File, Suffix]
---

# MobileSecurityPolicy

> Represents a mobile app security policy on
			the Salesforce mobile app with Enhanced Mobile App Security enabled.
			For a full description of each policy, see Enable and Configure Mobile App
				Security Policies.

# MobileSecurityPolicy

Represents a mobile app security policy on the Salesforce mobile app with Enhanced Mobile App Security enabled. For a full description of each policy, see [Enable and Configure Mobile App Security Policies](https://help.salesforce.com/s/articleView?id=xcloud.mobile_security_mam_setup_ui.htm&type=5&language=en_US).

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

MobileSecurityPolicy components have the suffix .mobileSecurityPolicy and are stored in the mobileSecurityPolicies folder.

## Version

MobileSecurityPolicy components are available in API version 53.0 and later.

## Special Access Rules

The Enhanced Mobile App Security add-on subscription and the Enforce Enhanced Mobile App Security user permission are required to use this metadata type.

## Fields

| Field Name | Description |
| --- | --- |
| effectiveDate | Field TypedateTimeDescriptionThe date that a mobile security policy is enforced. |
| isEnabled | Field TypebooleanDescriptionRequired. Indicates whether the mobile security policy is enabled. The default value is false, which means that the policy is disabled. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. ​​A user-friendly name for MobileSecurityPolicy, which is defined when the MobileSecurityPolicy component is created. |
| mobilePlatform | Field TypeMobileSecurityMobilePlatform (enumeration of type string)DescriptionThe mobile operating system of the mobile security policy.Values are:AndroidiOS |
| mobileSecurityAssignment | Field TypestringDescriptionThe name of the mobile security assignment associated with the mobile security policy. See MobileSecurityAssignment. |
| ruleValue | Field TypestringDescriptionRequired. The value of the mobile security policy rule. |
| ruleValueType | Field TypeMobileSecurityPolicyRuleValueType (enumeration of type string)DescriptionRequired. The type of mobile security policy rule.Values are:BooleanTextTextList |
| severityLevel | Field TypeMobileSecurityPolicySeverityLevel (enumeration of type string)DescriptionRequired. The severity level of a mobile security policy.Values are:Critical— Wipes app data and logs user outError—Blocks access to the app until the issue is resolved, but doesn’t log user outInfo— Blocks prohibited action or logs user action and informs userWarn—Notifies the user of the violation and recommends how to resolve, but user is able to continue using the app |
| type | Field TypeMobileSecurityPolicyType (enumeration of type string)DescriptionRequired. The type of mobile security policy.Values are:AllowedDeviceListBlock3dTouchBlockCalendarBlockCameraBlockContactsBlockCustomKeyboardBlockFileBackupBlockMicrophoneBlockOsSharingBlockedDeviceListBrowserUriSchemeCheckBiometricDevicePasscodeDisableUrlCachingJailbrokenDeviceLogCertPinLogEmailLogPhonecallLogPolicyResultLogScreenshotLogTextmessageLogoutAfterRestartLogoutOnBiometricChangeMalwareDetectionManInMiddleMaxOfflineMaximumAppVersionMaximumOsVersionMinimumAppVersionMinimumOsVersionMinimumSecurityPatchVersionMininumAppVersionPhonecallUriSchemeScreenshot |

## Declarative Metadata Sample Definition

The following is an example of a MobileSecurityPolicy component.

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
<MobileSecurityPolicy xmlns="http://soap.sforce.com/2006/04/metadata">
    <effectiveDate>2022-08-09T22:04:56.000Z</effectiveDate>
    <isEnabled>true</isEnabled>
    <isProtected>false</isProtected>
    <masterLabel>MyMobileSecurityPolicy</masterLabel>
    <mobileSecurityAssignment>MyMobileSecurityAssignment</mobileSecurityAssignment>
    <ruleValue>true</ruleValue>
    <ruleValueType>Boolean</ruleValueType>
    <severityLevel>info</severityLevel>
    <type>BlockCalendar</type>
    <mobilePlatform>Android</mobilePlatform>
</MobileSecurityPolicy>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>MobileSecurityPolicy</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- MobileSecurityAssignment (atlas.en-us.api_meta.meta/api_meta/meta_mobilesecurityassignment.htm)
- Deploying and Retrieving Metadata
					with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
