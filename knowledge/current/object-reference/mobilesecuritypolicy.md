---
title: "MobileSecurityPolicy"
domain: object-reference
topic: mobilesecuritypolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.997Z
estimatedTokens: 1267
keywords: [MobileSecurityPolicy, mobile, security, policies, Salesforce, app, Enhanced, API, version, 50.0, later, Calls, Special, Access, Rules]
---

# MobileSecurityPolicy

> Enables mobile security policies on the Salesforce mobile app with
         Enhanced Mobile Security. This object is available in API version 50.0 and
      later.

# MobileSecurityPolicy

Enables mobile security policies on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 50.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Accessing this object requires the Enhanced Mobile App Security add-on subscriptions and the Enforce Enhanced Mobile App Security user permission.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| EffectiveDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date a mobile security policy is enforced. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionA value indicating whether a mobile security policy is enabled.The default value is 'false'. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe two-to five-character code that represents the language and locale ISO. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the mobile security policy. |
| MobilePlatform | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe mobile operating system.Possible values are:AndroidiOS |
| MobileSecurityAssignmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the ID of the mobile security assignment.This is a relationship field.Relationship NameMobileSecurityAssignmentRelationship TypeLookupRefers ToMobileSecurityAssignment |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| RuleValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionValue of the mobile security policy rule. |
| RuleValueType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of mobile security policy rule.Possible values are:BooleanTextTextList |
| SeverityLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe severity level of a mobile security policy.Possible values are:CriticalErrorInfoWarn |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of mobile security policy.Possible values are:AllowedDeviceList—Allowed Device ListBlock3dTouch—Block 3D TouchBlockCalendar—Block CalendarBlockCamera—Block CameraBlockContacts—Block ContactsBlockCustomKeyboard—Block Custom KeyboardBlockFileBackup—Block File BackupBlockMicrophone—Block MicrophoneBlockOsSharing—Block OS Share ActionsBlockedDeviceList—Blocked Device ListBrowserUriScheme—Mobile Browser URI SchemeCheckBiometric—Check Biometric Login DataDevicePasscode—Require Device PasscodeDisableUrlCaching—Disable URL CachingJailbrokenDevice—Block Jailbroken DeviceLogCertPin—Log Certificate PinningLogEmail—Log EmailLogPhonecall—Log Phone CallLogPolicyResult—Log Security Policy Evaluation ResultLogScreenshot—Log ScreenshotLogTextmessage—Log SMSLogoutAfterRestart—Log Out User After Device RestartLogoutOnBiometricChange—Log Out User After Changing Biometric Login DataMalwareDetection—Malware DetectionManInMiddle—Block Man In The Middle AttackMaxOffline—Maximum Days Offline Without Policy RefreshMaximumAppVersion—Maximum Application VersionMaximumOsVersion—Maximum OS VersionMinimumAppVersion—Minimum Application VersionMinimumOsVersion—Minimum OS VersionMinimumSecurityPatchVersion—Minimum Security Patch VersionPhonecallUriScheme—Phone Call Application HandlerScreenshot—Block Screenshot |
