---
title: "NetworkAuthApiSettings"
domain: object-reference
topic: networkauthapisettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.208Z
estimatedTokens: 2510
keywords: [NetworkAuthApiSettings, settings, control, enablement, access, security, Headless, Registration, Flow, Forgot, Password, Passwordless, Login, their, associated]
---

# NetworkAuthApiSettings

> Represents the settings that control enablement, access, and security for the
         Headless Registration Flow, Headless Forgot Password Flow, Headless Passwordless Login
         Flow, and their associated APIs. This object is available in API version 58.0 and
      later.

# NetworkAuthApiSettings

Represents the settings that control enablement, access, and security for the Headless Registration Flow, Headless Forgot Password Flow, Headless Passwordless Login Flow, and their associated APIs. This object is available in API version 58.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Headless identity features are set up via Experience Cloud sites. You must have an Experience Cloud site to access Headless Identity APIs and store users, even if users never interact with the site directly.

## Fields

| Field | Details |
| --- | --- |
| CustomOtpDeliveryHandlerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.The ID of a custom one-time password (OTP) delivery handler that implements the Auth.CustomOneTimePasswordDeliveryHandler interface. |
| DoesForgotPasswordRequireAuth | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether authentication is required to access Headless Forgot Password API when a password reset is requested. If true, an access token issued to an internal integration user in your initial POST request to the /services/auth/headless/forgot_password endpoint is required. The access token must include the forgot_password scope.The default value is false. |
| DoesPasswordLoginRequireAuth | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether reCAPTCHA is required for headless username-password login that uses the OAuth 2.0 for First-Party Applications draft protocol. |
| DoesPwdlessLoginRequireAuth | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether authentication is required to access Headless Passwordless Login API when user information is submitted to Salesforce. If true, an access token issued to an internal integration user is required in your initial POST request to the /services/auth/headless/init/passwordless/login endpoint. The access token must include the pwdless_login_api scope.The default value is false. This field is available in API version 59.0 and later. |
| DoesRegistrationRequireAuth | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether authentication is required to access Headless Registration API when user registration information is submitted to Salesforce. If true, an access token issued to an internal integration user in your initial POST request to the /services/auth/headless/init/registration endpoint is required. The access token must include the user_registration_api scope.The default value is false. |
| HeadlessDiscoveryExecutionUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.The ID of an integration user account to run a headless user discovery Apex handler.Relationship NameHeadlessDiscoveryExecutionUserRefers ToUser |
| HeadlessDiscoveryHandlerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field is a relationship field.The ID of an Apex class that implements the Auth.HeadlessUserDiscoveryHandler interface.Relationship NameHeadlessDiscoveryHandlerRefers ToApexClass |
| isFirstPartyAppsAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the Experience Cloud site can use headless identity flows that use the OAuth 2.0 for First-Party Applications draft protocol. |
| IsForgotPwdAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the Headless Forgot Password Flow is enabled.The default value is false. |
| IsForgotPwdEmailTemplateAllowlistingEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionsDetermines whether email template allowlisting is enabled for the Headless Registration Flow, Headless Passwordless Login Flow, and Headless Forgot Password Flow. If true, the initial request to the headless API must include an emailtemplate parameter that contains only allowlisted email templates.The default value is false. |
| IsHeadlessUserRegistrationAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the Headless Registration Flow is enabled.The default value is false. |
| IsPwdlessLoginAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the Headless Passwordless Login Flow is enabled (true) or not (false).The flow is disabled by default. This field is available in API version 59.0 and later. |
| IsRecaptchaRequiredForgotPwd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a reCAPTCHA token is required to access Headless Forgot Password API when a password reset is requested. If true, a reCAPTCHA token is required in your initial POST request to the /services/auth/headless/forgot_password endpoint.The default value is false. |
| IsRecaptchaRequiredPwdlessLogin | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a reCAPTCHA token is required to access Headless Passwordless Login API when user information is submitted to Salesforce. If true, a reCAPTCHA token is required in your initial POST request to the /services/auth/headless/init/passwordless/login endpoint.By default, a reCAPTCHA token isn’t required (false). This field is available in API version 59.0 and later. |
| IsRecaptchaRequiredRgstr | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether a reCAPTCHA token is required to access Headless Registration API when user registration information is submitted to Salesforce. If true, a reCAPTCHA token is required in your initial POST request to the /services/auth/headless/init/registration endpoint.The default value is false. |
| IsUniversalClientRgstrAllowed | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether self-registration and passwordless login via Universal Registration API are enabled.The default value is false. |
| IsUserDisambiguationAllowedForgotPwd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the Headless Forgot Password Flow uses the headless user discovery Apex handler that's specified in the HeadlessDiscoveryHandlerId field. The handler enables users to reset their password with an identifier other than their username, such as an email address, phone number, or order number.The default value is false. |
| IsUserDisambiguationAllowedUsernamePwd | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether headless login flows use the headless user discovery Apex handler that's specified in the HeadlessDiscoveryHandlerId field. The handler enables users to log in with an identifier other than their username, such as an email address, phone number, or order number. This field applies to the Authorization Code and Credentials Flow and the OAuth 2.0 for First-Party Applications login flow.The default value is false. |
| MaxPasswordResetAttempts | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe maximum number of password reset attempts you allow for the Headless Forgot Password Flow before the user must request a new one-time password (OTP). |
| NetworkId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of your Experience Cloud site. This ID is unique within your org.This field is a relationship field.Relationship NameNetworkRelationship TypeLookupRefers ToNetwork |
| RecaptchaScoreThreshold | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe lowest reCAPTCHA score that is accepted before rejecting a request to access Headless Identity APIs. This value must be between 0.5 and 1. Scores closer to 0.5 are more likely to be bots, while scores closer to 1 are more likely to be valid users.You must set a score threshold if DoesForgotPasswordRequireAuth or DoesRegistrationRequireAuth fields are set to true. reCAPTCHA settings apply to both the Headless Registration Flow and the Headless Forgot Password Flow.Google issues a reCAPTCHA score only for reCAPTCHA v3 implementations. If you implement reCAPTCHA v2, this field doesn’t apply. |
| RecaptchaSecretKey | TypeencryptedstringPropertiesCreate, Nillable, UpdateDescriptionThe reCAPTCHA secret key from your API key pair. You get the API key pair from Google when you set up reCAPTCHA. The secret key helps your app securely communicate with Google.You must enter a secret key if DoesForgotPasswordRequireAuth or DoesRegistrationRequireAuth are set to true. reCAPTCHA settings apply to both the Headless Registration Flow and the Headless Forgot Password Flow. |
| RegistrationExecutionUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the user who runs your headless registration Apex handler.This field is a relationship field.Relationship NameRegistrationExecutionUserRelationship TypeLookupRefers ToUser |
| RegistrationHandlerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of your headless registration Apex handler.This field is a relationship field.Relationship NameRegistrationHandlerRelationship TypeLookupRefers ToApexClass |
| RegistrationUserDefaultProfileId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the default profile that gets assigned to new users when they register.This field is a relationship field.Relationship NameRegistrationUserDefaultProfileRelationship TypeLookupRefers ToProfile |
