---
title: "NetworkAuthApiSettings"
domain: sfFieldRef
topic: networkauthapisettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.819Z
estimatedTokens: 879
keywords: [NetworkAuthApiSettings, settings, control, enablement, access, security, Headless, Registration, Flow, Forgot, Password, Passwordless, Login, their, associated]
---

# NetworkAuthApiSettings

> Represents the settings that control enablement, access, and security for the
         Headless Registration Flow, Headless Forgot Password Flow, Headless Passwordless Login
         Flow, and their associated APIs. This object is available in API version 58.0 and
      later.

# NetworkAuthApiSettings

Represents the settings that control enablement, access, and security for the Headless Registration Flow, Headless Forgot Password Flow, Headless Passwordless Login Flow, and their associated APIs. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [NetworkAuthApiSettings](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_networkauthapisettings.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomOtpDeliveryHandlerId | Class ID | reference |  | 18 |  |  |
| DoesForgotPasswordRequireAuth | Does reset password require authentication | boolean |  |  |  |  |
| DoesPasswordLoginRequireAuth | Require reCAPTCHA for Username Password | boolean |  |  |  |  |
| DoesPwdlessLoginRequireAuth | Require authentication for headless passwordless login | boolean |  |  |  |  |
| DoesRegistrationRequireAuth | Require authentication for registration (Is only authenticated user allowed) | boolean |  |  |  |  |
| HeadlessDiscoveryExecutionUserId | User ID | reference |  | 18 |  |  |
| HeadlessDiscoveryHandlerId | Class ID | reference |  | 18 |  |  |
| Id | Network Auth Api Setting ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsFirstPartyAppsAllowed | Enable OAuth 2.0 for First Party Applications | boolean |  |  |  |  |
| IsForgotPwdAllowed | Enable Headless Forgot Password Flow | boolean |  |  |  |  |
| IsForgotPwdEmailTemplateAllowlistingEnabled | Enable forgot password email template allowlisting | boolean |  |  |  |  |
| IsHeadlessUserRegistrationAllowed | Enable headless user registration | boolean |  |  |  |  |
| IsPwdlessLoginAllowed | Enable headless passwordless login | boolean |  |  |  |  |
| IsRecaptchaRequiredForgotPwd | Require reCAPTCHA for Forgot Password | boolean |  |  |  |  |
| IsRecaptchaRequiredPwdlessLogin | Require reCAPTCHA for headless passwordless login | boolean |  |  |  |  |
| IsRecaptchaRequiredRgstr | Require reCAPTCHA for registration | boolean |  |  |  |  |
| IsUniversalClientRgstrAllowed | Allow self-registration and passwordless login via the Universal Registration API | boolean |  |  |  |  |
| IsUserDisambiguationAllowedForgotPwd | Enable User Disambiguation Handler for Forgot Password Flow | boolean |  |  |  |  |
| IsUserDisambiguationAllowedUsernamePwd | Enable User Disambiguation Handler for Username Password Flow | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MaxPasswordResetAttempts | Maximum reset password attempts allowed | int | 9 |  |  |  |
| NetworkId | Network ID | reference |  | 18 |  |  |
| RecaptchaScoreThreshold | ReCAPTCHA score threshold | double |  |  | 18 | 0 |
| RecaptchaSecretKey | ReCAPTCHA secret key | encryptedstring |  | 1020 |  |  |
| RegistrationExecutionUserId | User ID | reference |  | 18 |  |  |
| RegistrationHandlerId | Class ID | reference |  | 18 |  |  |
| RegistrationUserDefaultProfileId | Profile ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
