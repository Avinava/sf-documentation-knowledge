---
title: "SecuritySettings"
domain: metadata-api
topic: securitysettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:42.718Z
estimatedTokens: 8672
keywords: [SecuritySettings, Represents, org’s, security, settings., example, settings, define, trusted, ranges, network, access, password, login, requirements, session, expiration, single, sign-on, File]
---

# SecuritySettings

> Represents an org’s security settings. For
            example, settings define trusted IP ranges for network access, password and login
            requirements, session expiration, and single sign-on settings.

# SecuritySettings

Represents an org’s security settings. For example, settings define trusted IP ranges for network access, password and login requirements, session expiration, and single sign-on settings.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

SecuritySettings values are stored in a single file named Security.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Security settings are available in API version 27.0 and later. API versions 26 and earlier are no longer available.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| canUsersGrantLoginAccess | boolean | If true, users can grant login access to Support. If false, only an admin can grant login access.Users can’t grant login access to managed packages that are licensed to your entire Salesforce org. Only admins with the Manage Users permission enabled on their profiles can grant access to these publishers. Also, some managed packages don’t have login access. If a package isn’t listed on the Login Access Policies page, login access isn’t available for that package. |
| enableAdminLoginAsAnyUser | boolean | If true, the Administrators Can Log in as Any User field is enabled. The default isn’t enabled (false). |
| enableAuditFieldsInactiveOwner | boolean | If true, this setting enables audit fields and updating the owner for records that are owned by inactive users. The default value is false. This field is available in API version 47.0 and later. |
| enableAuraSecureEvalPref | boolean | If true, this setting prevents the creation of function expressions in dynamically created Aura components. The default is false. This field is available in API version 47.0 and later. |
| enableCoepHeader | boolean | Indicates whether the Cross-Origin Embedder Policy (COEP) response header is applied to this org’s custom Visualforce pages (true) or not (false). If true, externally sourced embedded content loads only when the external origin allows it via CORS or CORP. The default value is false.Available in API version 55.0 and later. |
| enableCoopHeader | boolean | Indicates whether the Cross-Origin Opener Policy (COOP) response header is applied to this org’s custom Visualforce pages (true) or not (false). If true, each custom Visualforce page opens in a new browsing context group. The default value is false.Available in API version 55.0 and later. |
| enableCrossOrgRedirects | boolean | Indicates whether redirections to other Salesforce orgs are allowed (true) or blocked (false). In Summer ’24 and later, this field is always false.This setting applies to user redirections to another Salesforce org via a direct link, a post-action URL, or a post-login URL in Salesforce. An example of a direct link with a redirection is <a href="/?startURL=targetUrl">linkText">linkText</a>. Post-action URLs and post-login URLs use a protected URL redirect parameter, such as retURL, startURL, saveURL, cancelURL, and targetURL. Subsequent redirections can’t be verified because they occur outside Salesforce.To allow cross-org redirections, add the URLs for the Salesforce orgs that you own to RedirectWhitelistUrl.Available in API version 59.0 to 60.0. |
| enablePermissionsPolicy | boolean | Indicates whether the pages that Salesforce serves for this org include the Permissions-Policy HTTP header. This HTTP header controls access to browser features such as cameras and microphones. When this field is false, access to the browser features is always permitted. The default value is false.Available in API version 59.0 and later. |
| enableRequireHttpsConnection | boolean | Deprecated in API version 47.0 and later. |
| grantCameraAccess | PermissionsPolicy (enumeration) | When enablePermissionsPolicy is true, indicates when apps and websites loaded from Salesforce can access the user’s camera.Possible values are:Always—All apps and websites loaded from Salesforce can access the user’s camera.Never—No apps or websites, including scripts from Salesforce domains, can access the user’s camera.TrustedUrls—Only CspTrustedSite entries with canAccessCamera set to true can access the user’s camera.If enablePermissionsPolicy is false, this field has no effect.This field is available in API version 59.0 and later. |
| grantMicrophoneAccess | Permissions Policy (enumeration) | When enablePermissionsPolicy is true, indicates when apps and websites loaded from Salesforce can access the user’s microphone.Possible values are:Always—All apps and websites loaded from Salesforce can access the user’s microphone.Never—No apps or websites, including scripts from Salesforce domains, can access the user’s microphone.TrustedUrls—Only CspTrustedSite entries with canAccessMicrophone set to true can access the user’s microphone.If enablePermissionsPolicy is false, this field has no effect.This field is available in API version 59.0 and later. |
| isTLSv12Required | boolean | Indicates whether connections to or from your Salesforce org must use TLS 1.2 or higher (true) or not (false). This field has a default value of false. Removed in API version 51.0 and later. |
| isTLSv12RequiredCommunities | boolean | Indicates whether connections with your Salesforce sites and portals or Experience Cloud sites must use TLS 1.2 or higher (true) or not (false). This field has a default value of false. Removed in API version 51.0 and later. |
| networkAccess | NetworkAccess | The trusted IP address ranges from which users can always log in without requiring computer activation. |
| passwordPolicies | PasswordPolicies | The requirements for passwords and logins, and assistance with retrieving forgotten passwords. |
| sendCspForUncommonClients | boolean | In rare cases, Salesforce can’t identify whether the requesting app or specialized browser supports the Content-Security-Policy: frame-ancestors HTTP header directive. In those cases, this field indicates whether that directive is included in (true) or omitted from (false) the HTTP response header for pages that Salesforce serves for this org. The default value is false.When sendCspForUncommonClients is true, users who access Salesforce via an app or browser that doesn’t support the Content-Security-Policy: frame-ancestors HTTP header directive can experience errors if that lack of support is unclear.This field is available in API version 59.0 and later. |
| sessionSettings | SessionSettings | The settings for session expiration and security. |
| singleSignOnSettings | SingleSignOnSettings | The settings for single sign-on (SSO). |

## NetworkAccess

Represents your org’s trusted IP address ranges for network access.

| Field | Field Type | Description |
| --- | --- | --- |
| ipRanges | IpRange[] | The trusted IP address ranges from which users can always log in without requiring computer activation.To add an IP range, deploy all existing IP ranges, including the one you want to add. Otherwise, the existing IP ranges are replaced with the ones you deploy. To remove all the IP ranges, leave the networkAccess field blank (<networkAccess></networkAccess>). |

## IpRange

Defines a range of trusted IP addresses for network access.

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The description of the trusted IP range. Use this field to identify the range, such as which corporate network corresponds to this range. Available in API version 34.0 and later. |
| end | string | The IP address that defines the high end of a range of trusted addresses. |
| start | string | The IP address that defines the low end of a range of trusted addresses. |

## PasswordPolicies

Represents your org’s password and login policies, which show up under **Security Controls | Password Policies**.

| Field | Field Type | Description |
| --- | --- | --- |
| apiOnlyUserHomePageURL | string | The URL to which users with the API Only User permission are redirected instead of the login page. |
| complexity | Complexity (enumeration of type string) | The types of characters that must be used in a user’s password. Valid values are:NoRestriction—Has no requirements and is the least secure option.AlphaNumeric—The default setting. Requires at least one alphabetic character and one number. This value is the default value.SpecialCharacters—Requires at least one alphabetic character, one number, and one of the following characters: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { \| } ~.UpperLowerCaseNumeric—Requires at least one number, one uppercase letter, and one lowercase letter. This value is available in API version 31.0 and later.UpperLowerCaseNumericSpecialCharacters—Requires at least one number, one uppercase letter, one lowercase letter, and one of the following characters: ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { \| } ~. This value is available in API version 31.0 and later.Any3UpperLowerCaseNumericSpecialCharacters—Requires at least three of the following options: one number, one uppercase letter, one lowercase letter, and one special character (! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { \| } ~). This value is available in API version 46.0 and later. |
| enableSetPasswordInApi | boolean | Deprecated in API version 51.0. Removed in API version 52.0. |
| expiration | Expiration (enumeration of type string) | The length of time until a user password expires and must be changed. Valid values are:NeverThirtyDaysSixtyDaysNinetyDays. This value is the default value.SixMonthsOneYear |
| historyRestriction | string | The number of previous passwords saved for users so that they must always reset a new, unique password. Valid values are 0 through 24 passwords remembered. The maximum value of 24 applies to API version 31.0 and later. In earlier versions, the maximum value is 16. The default value is 3. |
| lockoutInterval | LockoutInterval (enumeration of type string) | The duration of the login lockout. Valid values are:FifteenMinutes. This value is the default value.ThirtyMinutesSixtyMinutesForever (must be reset by admin) |
| maxLoginAttempts | MaxLoginAttempts (enumeration of type string) | The number of login failures allowed for a user before the user is locked out. Valid values are:NoLimitThreeAttemptsFiveAttemptsTenAttempts. This value is the default value. |
| minimumPasswordLength | string | The minimum number of characters required for a password. The number can contain from 5 to 50 characters (default is 8). Available in API version 35.0 and later.Before API version 35.0, specify minimum password length with the enumeration minPasswordLength, with valid values FiveCharacters, EightCharacters (default), TenCharacters, TwelveCharacters (API version 31.0 and later), and FifteenCharacters (API version 34.0 and later). |
| minimumPasswordLifetime | boolean | If Require a minimum 1 day password lifetime is enabled (true), passwords can’t be changed more than one time during a 24-hour period. The default is false. Available in API version 31.0 and later. |
| obscureSecretAnswer | boolean | If enabled (true), hide answers to security questions as the user types. The default is false.If your org uses the Microsoft Input Method Editor (IME) with the input mode set to Hiragana, when you type ASCII characters, they’re converted in to Japanese characters in normal text fields. However, the IME doesn’t work properly in fields with obscured text. If your org’s users can’t properly enter their passwords or other values after enabling this feature, disable the feature. |
| passwordAssistanceMessage | string | The text that appears in the Account Lockout email and at the bottom of the Confirm Identity screen for users resetting their passwords. |
| passwordAssistanceURL | string | The URL that users can click to retrieve forgotten passwords. |
| questionRestriction | QuestionRestriction (enumeration of type string) | The restriction on whether the answer to the password hint question can contain the password itself. Valid values are:NoneDoesNotContainPassword. This value is the default value. |

## SessionSettings

Represents your org’s session expiration and security settings.

| Field | Field Type | Description |
| --- | --- | --- |
| allowUserAuthenticationByCertificate | boolean | If enabled (true), users can authenticate with a PEM-encoded X.509 digital certificate. Not enabled by default. Available in API version 47.0 and later. |
| allowUserCertBasedAuthenticationWithOcspValidation | boolean | If enabled (true), authentication certificates are validated using the Online Certificate Status Protocol (OCSP) or a Certificate Revocation List (CRL). |
| auraBoxcarReductionPref | boolean | If true, dynamic boxcar optimization for the Aura framework is disabled. With dynamic boxcar optimization, a limited number of server-side Aura actions are grouped in a single network request, which improves the performance of Lightning components and apps. For more information, see Boxcar Grouping and Optimization in the Lightning Aura Components Developer Guide.The default value is false. |
| canConfirmEmailChangeInLightningCommunities | boolean | If Require email confirmations for email address changes is enabled (true), when users change their email address, they receive an email at the new address with a link. After they click the link, their new email address takes effect. For orgs created before Winter ’20, the field isn’t enabled by default. For new orgs, this field is always enabled. To disable the field (not recommended), contact Salesforce Customer Support. Available in API version 47.0 and later. |
| canConfirmIdentityBySmsOnly | boolean | Prevents identity verification by email for users who have registered other verification methods, such as SMS or Salesforce Authenticator. If no other verification methods are configured, users are verified by email.By default, this setting is disabled (false) for existing orgs. For new orgs, this setting is enabled (true) by default. Available in API version 48.0 and later. |
| disableTimeoutWarning | boolean | Indicates whether the session timeout warning popup is disabled (true) or enabled (false). |
| enableBuiltInAuthenticator | boolean | Indicates whether users can verify their identity with a built-in authenticator that's already on their device (true), such as Touch ID or Windows Hello, or not (false). The default value is false. |
| enableCSPOnEmail | boolean | Indicates whether a content security policy is enabled for the email template. A content security policy helps prevent cross-site scripting attacks by listing allowed sources of images and other content. |
| enableCSRFOnGet | boolean | Indicates whether Cross-Site Request Forgery (CSRF) protection on GET requests on non-setup pages is enabled (true) or disabled (false). |
| enableCSRFOnPost | boolean | Indicates whether Cross-Site Request Forgery (CSRF) protection on POST requests on non-setup pages is enabled (true) or disabled (false). |
| enableCacheAndAutocomplete | boolean | Indicates whether the user’s browser is allowed to store usernames and auto-fill the User Name field on the login page (true) or not (false). |
| enableClickjackNonsetupSFDC | boolean | Indicates whether clickjack protection for non-setup Salesforce pages is enabled (true) or disabled (false). |
| enableClickjackNonsetupUser | boolean | Indicates whether clickjack protection for customer Visualforce pages with standard headers turned on is enabled (true) or disabled (false). |
| enableClickjackNonsetupUserHeaderless | boolean | Indicates whether clickjack protection for customer Visualforce pages with standard headers turned off is enabled (true) or disabled (false). Available in API version 34.0 and later. |
| enableClickjackSetup | boolean | Indicates whether clickjack protection for setup pages is enabled (true) or disabled (false). |
| enableContentSniffingProtection | boolean | Indicates whether the browser is prevented from inferring the MIME type from the document content and from executing malicious files (JavaScript, Style sheet) as dynamic content.This field is available in API version 39.0 and later. In API version 58.0 and later, enableContentSniffingProtection is always true. |
| enableLightningLogin | boolean | If enabled (true), users can use Lightning Login (Salesforce Authenticator) to log in instead of a password. Available in API Version 47.0 and later. |
| enableLightningLoginOnlyWithUserPerm | boolean | If enabled (true), only users with the Lightning Login User permission can log in with Salesforce Authenticator instead of a password. Available in API version 47.0 and later. |
| enableMFADirectUILoginOptIn | boolean | Requires all users in your Salesforce org to provide an additional verification method when logging in directly to the UI with their username and password. Users who are already enabled via the Multi-Factor Authentication for User Interface Logins user permission experience no change. The Waive Multi-Factor Authentication for Exempt Users user permission overrides this setting. |
| enableOauthCorsPolicy | boolean | If set to true, enables Cross-Origin Resource Sharing (CORS) for these OAuth endpoints:/services/oauth2/token/services/oauth2/revoke/services/oauth2/introspectDefault setting is false. Available in API version 50.0 and later. |
| enablePostForSessions | boolean | Indicates whether cross-domain session information is exchanged using a POST request instead of a GET request, such as when a user is using a Visualforce page. In this context, POST requests are more secure than GET requests. Available in API version 31.0 and later. |
| enableSMSIdentity | boolean | If enabled (true), the default, users can receive a one-time password in a text message (SMS) to verify their identity. Users must verify their mobile phone number before they can receive SMS messages. |
| enableU2F | boolean | If enabled (true), users can use a physical U2F-compatible security key for multi-factor authentication (MFA) and identity verification. The default is false. Available in API version 47.0 and later. |
| enableUpgradeInsecureRequests | boolean | Indicates whether HTTPS is required for connecting to third-party domains.This setting is enabled by default on accounts created after the Summer ’17 release.This field is available in API version 42.0 to 60.0. |
| enableXssProtection | boolean | Indicates whether the HTTP X-XSS-Protection response header is enabled to protect against reflected cross-site scripting attacks.This field is available in API version 39.0 to 59.0. The HTTP X-XSS-Protection response header is deprecated. To help prevent cross-site scripting (XSS) and other code injection attacks, use the CSPTrustedSite metadata type. |
| enforceIpRangesEveryRequest | boolean | If true, the IP addresses in Login IP Ranges are enforced when a user accesses Salesforce (on every page request), including access from a client app. If false, the IP addresses in Login IP Ranges are enforced only when a user logs in. This field affects all user profiles with login IP restrictions. Available in API version 34.0 and later. |
| enforceUserDeviceRevoked | boolean | If enabled, and a UserDevice’s status is set to revoked, that device can’t log in from a Salesforce app. Logins from browsers aren’t affected.This field is available in API version 50.0 and later. |
| forceLogoutOnSessionTimeout | boolean | If enabled (true), the default, when sessions time out for inactive users, current sessions become invalid. The browser refreshes and returns to the login page. To access the org, the user must log in again. Available in API version 31.0 and later. |
| forceRelogin | boolean | If true, an admin who is logged in as another user must log in again to their original session, after logging out as the secondary user. If false, the admin isn’t required to log in again. |
| hasRetainedLoginHints | boolean | If you enable Remember me until logout (true), usernames (login hints) are cached until the user logs out. If a session times out, usernames appear on the Switcher as inactive. If false (default), usernames aren't cached for SSO sessions. |
| hasUserSwitching | boolean | If Enable user switching istrue (default), users can log in to other orgs by selecting their profile picture and using the Switcher. You must also enable the Enable caching and autocomplete on login page setting.If false, the Switcher isn’t enabled and your org doesn’t appear in Switchers on other orgs. |
| hstsOnForcecomSites | boolean | Indicates whether Visualforce, Salesforce sites, or Experience Cloud sites must use HTTPS. Available in API version 41.0 and later. |
| identityConfirmationOnEmailChange | boolean | Indicates whether a user’s identity is confirmed when changing their email address, instead of requiring a relogin.This field is available in API version 42.0 and later. |
| identityConfirmationOnTwoFactorRegistrationEnabled | boolean | Indicates whether users are required to confirm their identities when adding a verification method such as Salesforce Authenticator for multi-factor authentication (MFA), instead of requiring a relogin. (Multi-factor authentication was formerly called two-factor authentication.)This field is available in API version 40.0 and later. |
| lockSessionsToDomain | boolean | Indicates whether the current UI session for a user is associated with a specific domain. This check helps prevent unauthorized use of the session ID in another domain. The value is true by default for orgs created with the Spring ’15 release or later. Available in API version 33.0 and later. |
| lockSessionsToIp | boolean | Indicates whether user sessions are locked to the IP address from which the user logged in (true) or not (false). |
| lockerServiceAPIVersion | string | The API version that Lightning Locker enforces for security of custom Lightning components. The default value matches the Salesforce API version of the current release. Only valid Salesforce API versions between 46.0 and the current release can be specified. The version must be specified as a string in the format "nn.0", such as "48.0". This setting has no effect on the lockerServiceNext setting, which enables Lightning Web Security.This field is available in API version 47.0 and later. |
| lockerServiceCSP | boolean | If true, a stricter Content Security Policy is enabled to disallow the unsafe-inline source for the script-src CSP directive. Script tags can’t be used to load JavaScript, and event handlers can’t use inline JavaScript. Lightning Locker and Lightning Web Security depend on this setting to be enabled to protect Lightning components. |
| lockerServiceNext | boolean | If true, Lightning Web Security is used instead of Lightning Locker to protect Lightning web components. Lightning Locker continues to protect Aura components. If false, Lightning Locker protects Lightning web components and Aura components. Available in API version 53.0 and later. |
| lockerServiceNextControl | boolean | Reserved for internal use. |
| lockerTrustedMode | boolean | Reserved for internal use. |
| lockerTrustedResources | string | Reserved for internal use. |
| logoutURL | string | The URL to which users are redirected when they log out of Salesforce. If no value is specified, the default is https://MyDomainName.my.salesforce.com. Available in API version 34.0 and later. |
| redirectBlockModeEnabled | boolean | If true, users can’t access untrusted URLs outside the Salesforce domains via links in URL or Long Text Area fields. When a user who accesses Salesforce via Salesforce Classic clicks the link, a message informs the user that they can’t access the page because the external site isn’t trusted. The default is false.To specify the URLs that you trust, use the RedirectWhitelistUrl Metadata type.The redirectBlockModeEnabled and redirectionWarning fields are mutually exclusive. Only one of those fields can be true.Available in API 56.0 and later. |
| redirectionWarning | boolean | If true, users who accesses Salesforce via Salesforce Classic see an alert when they click a link in a URL or Long Text Area field that redirects them to an untrusted URL outside the Salesforce domains. The default is true in orgs created in Spring ’18 and later and false in orgs created in Winter ’18 and earlier.To specify the URLs that you trust, use the RedirectWhitelistUrl Metadata type.The redirectBlockModeEnabled and redirectionWarning fields are mutually exclusive. Only one of those fields can be true.Available in API version 42.0 and later. |
| referrerPolicy | boolean | If true, pages served by Salesforce for this org include the referrer-policy HTTP header with the directive defined by referrerPolicyDirective. If false, that HTTP header isn’t included and requests can always see the full URL of the Salesforce page. The default is true. Available in API version 42.0 and later.In API version 42.0–57.0, if referrerPolicy is true, pages served by Salesforce for this org include the referrer-policy HTTP header with the origin-when-cross-origin directive. |
| referrerPolicyDirective | ReferrerPolicy (enumeration of type string) | The HTTP referrer policy directive for pages served by Salesforce. The default is strict-origin-when-cross-origin. If referrerPolicy is false, this value has no effect. Available in API version 58.0 and later.Valid current values are:no-referrer—Never include the referrer.origin—Always send the origin only.same-origin—Omit the referrer for cross-origin requests.strict-origin—For requests with the same protocol level (HTTPS to HTTPS), send the origin only. Omit the referrer when the target website is on a downgraded protocol. An example of a downgraded protocol is a request made from an HTTPS URL to an HTTP site.strict-origin-when-cross-origin—For same-origin requests, send the full referrer URL. For cross-origin requests with the same protocol level (HTTPS to HTTPS), send the origin only. Omit the referrer when the target website is on a downgraded protocol. This is the default.These policies are deprecated. Although the values are valid, they aren’t recommended.no-referrer-when-downgrade—Omit the referrer when the target website is on a downgraded protocol. For example, when making a request to an HTTP site from an HTTPS URL.This referrerPolicyDirective isn’t recommended because this policy exposes the full URL of the page to cross-origin requests to the same or a higher protocol level. For example, requests from HTTPS to HTTPS and requests from HTTP to either HTTP or HTTPS.origin-when-cross-origin—Send the origin only for cross-domain requests or when the target website is on a downgraded protocol. An example of a downgraded protocol is a request made from an HTTPS URL to an HTTP site.This referrerPolicyDirective isn’t recommended because multiple browsers no longer support it. Use strict-origin-when-cross-origin instead.unsafe-url—Always include the full referrer URL.This referrerPolicyDirective isn’t recommended because this policy exposes the full URL of the page to requests from insecure origins.For more information on HTTP referrer policy directives, including examples, see the Referrer-Policy entry in the MDN Docs HTTP Guide. |
| requireHttpOnly | boolean | Sets the HttpOnly attribute on session cookies, making them inaccessible via JavaScript. If true, session ID cookie access is restricted. If false, access is restricted.If you have a custom or packaged application that uses JavaScript to access session ID cookies, your application breaks if requireHttpOnly is set to true. The application can't access the cookie.This field is available in API version 40.0 and later. |
| requireHttps | boolean | Determines whether HTTPS is required to log in to or access Salesforce. This option is enabled by default for security reasons and can’t be disabled. To change to HTTP, contact Salesforce Customer Support.This field is available in API version 40.0 to 60.0. |
| securityCentralKillSession | boolean | Deprecated in API version 36.0 to 50.0. Removed in API version 51.0 and later. |
| sessionTimeout | SessionTimeout (enumeration of type string) | The length of time after which users without activity are prompted to log out or continue working. Valid values are:FifteenMinutesThirtyMinutesSixtyMinutesNinetyMinutes—Available in API version 58.0 and later.TwoHoursFourHoursEightHoursTwelveHoursTwentyFourHours—Available in API version 38.0 and later. |
| sidToken3rdPartyAuraApp | boolean | If true, a Lightning app replaces the authentication cookie with a session token when the Lightning app is in a third-party context, such as Lightning Out.Browsers are restricting the use of third-party cookies. This org setting is an alternative for the authentication cookie to requiring that users disable browser settings, such as Safari’s Prevent cross-site tracking setting.This field is available in API version 59.0 and later. |
| skipSFAWhenMFADirectUILogin | boolean | Indicates which screen users see first when they're prompted to register a verification method for multi-factor authentication (MFA). If true, users see a list of all supported verification methods. If false, users see only the Salesforce Authenticator option. To see a list of all supported verification methods, users must navigate to a new page. |
| terminateUserSessionsWhenAdminResetsPassword | boolean | Indicates what happens to a user's UI sessions when an admin resets that user's password. If true, all of the user's UI sessions are terminated. If false, no UI sessions are terminated. |
| untrustedRedirect | untrustedRedirect (enumeration of type string) | The redirection behavior when a user who accesses Salesforce via Lightning Experience clicks a hyperlink in a URL field with a target URL that isn’t trusted. Valid values are:AlwaysAllowedNeverAllowedWithUserPermissionTo specify the URLs that you trust, use the RedirectWhitelistUrl Metadata type.Available in API version 64.0 and later.Secure redirections to untrusted URLs in Lightning Experience is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| useLocalStorageForLogoutUrl | boolean | Redirects all expired tabs in your browser to your custom logout URL (true). By default, this option is enabled for all new orgs and is available in API version 52.0 and later.For orgs created prior to the Summer ’21 release, the default setting is false. Before enabling this setting, review these considerations.This setting uses the browser’s local storage to store the custom logout URL.Verify that this setting doesn’t interfere with your custom login integrations. |
| welcomeEmailTemplateId | string | Custom email template for the welcome email that new internal users receive when they're registered. This field supports only Classic email templates.Available in API version 63.0 and later. |

## SingleSignOnSettings

Represents your org’s single sign-on (SSO) settings. These settings are available API version 47.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCaseInsensitiveFederationID | boolean | If you enable Make Federation ID case-insensitive (true), the Federation ID field on a user object isn’t case-sensitive. If disabled (false), the Federation ID field remains case-sensitive. The default is false. |
| enableForceDelegatedCallout | boolean | If you enable Force Delegated Authentication Callout (true), a callout to the SSO endpoint occurs regardless of login restriction failures. If disabled (false), the default, and if a user’s first login attempt fails due to login restrictions within the Salesforce org, a call isn’t made to the SSO endpoint. |
| enableMultipleSamlConfigs | boolean | If true (default), you can configure multiple SAML providers. After enabling the setting, it can’t be disabled. |
| enableSamlJitProvisn’tioning | boolean | If you enable User Provisioning Enabled (true), you can provision users through a SAML assertion (called just-in-time provisioning). Requires EnableSamlLogin to be true and enableMultipleSamlConfigs to be false. The default is enabled (false). |
| enableSamlLogin | boolean | If you enable SAML Enabled (true), users can SSO into Salesforce from providers via SAML. The default isn’t enabled (false). |
| isLoginWithSalesforceCredentialsDisabled | boolean | If Disable login with Salesforce credentials is true, users are redirected to third-party identity providers for authentication. The default is enabled (false).If you enabled this feature prior to the Summer ’20 release and want to disable it prior to July 27, 2020, contact Customer Support. |

## Declarative Metadata Sample Definition

Here’s a sample security.settings metadata file.

```

```

The following is an example package.xml manifest that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SecuritySettings xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <canUsersGrantLoginAccess>true</canUsersGrantLoginAccess>
    <enableAdminLoginAsAnyUser xsi:nil="true"/>
    <enableAuditFieldsInactiveOwner xsi:nil="true"/>
    <enableAuraSecureEvalPref xsi:nil="true"/>
    <enableCoopHeader>true</enableCoopHeader>
    <enableCoepHeader>false</enableCoepHeader>
    <enableCrossOrgRedirects>false</enableCrossOrgRedirects>
    <enablePermissionsPolicy>true</enablePermissionsPolicy>
    <grantCameraAccess>TrustedUrls</grantCameraAccess>
    <grantMicrophoneAccess>TrustedUrls</grantMicrophoneAccess>
    <networkAccess/>
    <passwordPolicies>
        <complexity>NoRestriction</complexity>
        <expiration>Never</expiration>
        <historyRestriction>0</historyRestriction>
        <lockoutInterval>FifteenMinutes</lockoutInterval>
        <maxLoginAttempts>TenAttempts</maxLoginAttempts>
        <minimumPasswordLength>5</minimumPasswordLength>
        <minimumPasswordLifetime>false</minimumPasswordLifetime>
        <obscureSecretAnswer>false</obscureSecretAnswer>
        <questionRestriction>DoesNotContainPassword</questionRestriction>
    </passwordPolicies>
    <redirectBlockModeEnabled>false</redirectBlockModeEnabled>
    <sendCspForUncommonClients>false</sendCspForUncommonClients>
    <sessionSettings>
        <allowUserAuthenticationByCertificate>false</allowUserAuthenticationByCertificate>
        <disableTimeoutWarning>false</disableTimeoutWarning>
        <enableBuiltInAuthenticator>false</enableBuiltInAuthenticator>
        <enableCSPOnEmail>true</enableCSPOnEmail>
        <enableCSRFOnGet>true</enableCSRFOnGet>
        <enableCSRFOnPost>true</enableCSRFOnPost>
        <enableCacheAndAutocomplete>true</enableCacheAndAutocomplete>
        <enableClickjackNonsetupSFDC>true</enableClickjackNonsetupSFDC>
        <enableClickjackNonsetupUser>false</enableClickjackNonsetupUser>
        <enableClickjackNonsetupUserHeaderless>false</enableClickjackNonsetupUserHeaderless>
        <enableClickjackSetup>true</enableClickjackSetup>
        <enableContentSniffingProtection>true</enableContentSniffingProtection>
        <enableLightningLogin>true</enableLightningLogin>
        <enableLightningLoginOnlyWithUserPerm>false</enableLightningLoginOnlyWithUserPerm>
        <useLocalStorageForLogoutUrl>false</useLocalStorageForLogoutUrl>
        <enableOauthCorsPolicy>false</enableOauthCorsPolicy>
        <enablePostForSessions>false</enablePostForSessions>
        <enableSMSIdentity>true</enableSMSIdentity>
        <enableU2F>false</enableU2F>
        <enforceIpRangesEveryRequest>false</enforceIpRangesEveryRequest>
        <enforceUserDeviceRevoked>false</enforceUserDeviceRevoked>
        <forceLogoutOnSessionTimeout>true</forceLogoutOnSessionTimeout>
        <forceRelogin>true</forceRelogin>
        <hasRetainedLoginHints>false</hasRetainedLoginHints>
        <hasUserSwitching>true</hasUserSwitching>
        <hstsOnForcecomSites>false</hstsOnForcecomSites>
        <identityConfirmationOnEmailChange>true</identityConfirmationOnEmailChange>
        <identityConfirmationOnTwoFactorRegistrationEnabled>true</identityConfirmationOnTwoFactorRegistrationEnabled>
        <lockSessionsToDomain>true</lockSessionsToDomain>
        <lockSessionsToIp>false</lockSessionsToIp>
        <lockerServiceAPIVersion>56.0</lockerServiceAPIVersion>
        <lockerServiceCSP>true</lockerServiceCSP>
        <lockerServiceNext>true</lockerServiceNext>
        <logoutURL>https://mycompany.com</logoutUrl>
        <redirectionWarning>true</redirectionWarning>
        <referrerPolicy>true</referrerPolicy>
        <referrerPolicyDirective>strict-origin-when-cross-origin</referrerPolicyDirective>        <requireHttps>false</requireHttps>
        <sessionTimeout>TwoHours</sessionTimeout>
        <untrustedRedirect>WithUserPermission</untrustedRedirect>
        <useLocalStorageForLogoutUrl>true</useLocalStorageForLogoutUrl>
        <welcomeEmailTemplateId>X000000000000</welcomeEmailTemplateId>
    </sessionSettings>
    <singleSignOnSettings>
        <enableCaseInsensitiveFederationID>false</enableCaseInsensitiveFederationID>
        <enableForceDelegatedCallout>false</enableForceDelegatedCallout>
        <enableMultipleSamlConfigs>true</enableMultipleSamlConfigs>
        <enableSamlJitProvisioning>false</enableSamlJitProvisioning>
        <enableSamlLogin>false</enableSamlLogin>
        <isLoginWithSalesforceCredentialsDisabled>true</isLoginWithSalesforceCredentialsDisabled>
    </singleSignOnSettings>
</SecuritySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Security</members>
        <name>Settings</name>
    </types>
    <version>65.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- RedirectWhitelistUrl (atlas.en-us.api_meta.meta/api_meta/meta_redirectwhitelisturl.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- CspTrustedSite (atlas.en-us.api_meta.meta/api_meta/meta_csptrustedsite.htm)
- Deploying and Retrieving Metadata with
                    the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
