---
title: "Network"
domain: metadata-api
topic: network
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:40.878Z
estimatedTokens: 9799
keywords: [Network, Experience, Cloud, site, Salesforce, lets, branded, spaces, employees, customers, partners, customize, experiences, whether, they’re]
---

# Network

> Represents an Experience Cloud site. Salesforce
            Experience Cloud lets you create branded spaces for your employees, customers, and
            partners. You can customize and create experiences, whether they’re communities, sites,
            or portals, to meet your business needs, then transition seamlessly between them. If you
            want to create zones that contain Chatter Answers and Ideas, use the Community (Zone)
            component.

# Network

Represents an Experience Cloud site. Salesforce Experience Cloud lets you create branded spaces for your employees, customers, and partners. You can customize and create experiences, whether they’re communities, sites, or portals, to meet your business needs, then transition seamlessly between them. If you want to create zones that contain Chatter Answers and Ideas, use the Community (Zone) component.

This type extends the Metadata metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

Network components are stored in the networks directory of the corresponding package directory. The file name matches the site name, and the extension is .network.

## Version

This object is available in API version 28.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| allowedExtensions | string | Specifies the types of files allowed in your site. This list of file types lets you control what your members upload and also prevents spammers from polluting your site with inappropriate files. Available in API version 36.0 and later. |
| allowInternalUserLogin | boolean | Determines whether internal users can log in with their internal credentials on the site login page. Available in API version 40.0 and later. |
| allowMembersToFlag | boolean | Determines whether users in the site can flag posts or comments as inappropriate. Flagged items are sent to a moderator for review. Available in API version 29.0 and later. |
| branding | Branding | The color scheme, header, and footer used in the site. Deprecated in API version 41.0 and later. Replaced by the NetworkBranding type. |
| caseCommentEmailTemplate | string | Email template used when notifying members when a case comment has been modified or added to a case.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| changePasswordTemplate | string | Email template used when notifying a user that their password has been reset.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| chgEmailVerNewTemplate | string | Email template used to verify a user’s email address change. This email is sent to the new email address.NoteYou can't update this template via Metadata API. |
| chgEmailVerOldTemplate | string | Email template used to verify a user’s email address change. This email is sent to the old email address.NoteYou can't update this template via Metadata API. |
| communityRoles | CommunityRoles | Identifies users with Customer, Partner, or Employee roles in a site. Available in API version 41.0 and later. |
| description | string | Description of the site. |
| deviceActEmailTemplate | string | The ID of the device activation email template. The template is used to customize the device activation email for community users. Available in API version 53.0 and later. |
| disableReputationRecord​Conversations | boolean | When reputation levels are enabled for the site, determines whether to exclude contributions to records when counting points toward reputation levels. Available in API version 41.0 and later. |
| emailFooterLogo | string | The document name of the logo that appears in the footer of emails. Available in API version 41.0 and later. |
| emailFooterText | string | The text that appears in the footer of emails. Available in API version 41.0 and later. |
| emailSenderAddress | string | Required. Email address from which emails are sent.NoteYou can't update this field via Metadata API. Instead, you can edit the Email Address field on the Emails page of the site's Administration workspace. |
| emailSenderName | string | Required. Name from which emails are sent. |
| embeddedLoginEnabled | boolean | Option to place Salesforce login form directly on an external website. This setting enables users to log in without being redirected to a separate Salesforce page. |
| enableApexCDNCaching | boolean | Determines whether public data from @wire calls to Apex methods is cached for guest users. This setting applies only to sites using Salesforce's CDN for Digital Experiences. |
| enableCustomVFError​PageOverrides | boolean | Determines whether to use custom Visualforce error pages instead of the default Visualforce error pages. Available in API version 41.0 and later. |
| enableDirectMessages | boolean | Determines whether site users can send direct messages to start a private conversation with one or more members. Available in API version 41.0 and later. |
| enableExperienceBundleBasedSnaOverrideEnabled | boolean | Determines whether the Builder-based SNA page is used (true) or not (false) and overrides the existing SNA page when an experience is published. Available in API version 52.0 and later. |
| enableGuestChatter | boolean | Specifies whether guest users can access public Chatter groups in the site without logging in. |
| enableGuestFileAccess | boolean | Determines whether guest users view asset files shared with the site on publicly accessible pages and login pages. If public access is enabled in Experience Builder at the page or site level, this property is automatically enabled. Available in API version 41.0 and later. |
| enableGuestMemberVisibility | boolean | Determines if unauthenticated guest users can see the authenticated members (true) or not (false). Available in API version 47.0 and later. |
| enableImageOptimizationCDN | boolean | Determines whether to optimize cached images for guest users on all devices when a site uses Salesforce’s CDN for Digital Experiences. Available in API version 56.0 and later. |
| enableInvitation | boolean | Determines whether users can invite others to the site. |
| enableKnowledgeable | boolean | Determines if members can see who’s knowledgeable on topics and endorse people for their knowledge on a topic. Available in API version 30.0 and later. |
| enableMemberVisibility | boolean | Controls user visibility on a per-site basis. If true, the See other members of this site preference is enabled for the selected site. Available in API version 45.0 and later. |
| enableNicknameDisplay | boolean | Determines if user nicknames display instead of their first and last names in most places in the site. Set to false by default. Available in API version 32.0 and later. |
| enablePrivateMessages | boolean | Determines if members can send and receive private messages. Available in API version 30.0 and later. |
| enableReputation | boolean | Determines if reputation is calculated and displayed for members. Available in API version 31.0 and later.If enabled, reputationLevels and reputationPointsRules are used. If no reputationLevels or reputationPointsRules are defined in the data file, the default values are used. |
| enableShowAllNetworkSettings | boolean | Shows settings that are hidden by default based on how the site is set up. Available in API version 41.0 and later. |
| enableSiteAsContainer | boolean | Determines whether the site is an Experience Builder site (true) or a Salesforce Tabs + Visualforce site (false). |
| enableTalkingAboutStats | boolean | Determines whether users see how many people are discussing a topic. The number of people discussing the topic appears as the user types the topic and the system gives topic suggestions. Available in API version 41.0 and later. |
| enableTopicAssignmentRules | boolean | Enables the org to use rules to automatically assign topics to articles in a site. After it’s enabled, admins set up rules to map topics to Salesforce Knowledge data categories. This field is available in API version 40.0 and later. |
| enableTopicSuggestions | boolean | Enables topic suggestions when users write posts. Available in API version 41.0 and later. |
| enableUpDownVote | boolean | Replaces the option to like a question or answer with the option to upvote or downvote. Available in API version 41.0 and later. |
| expFriendlyUrlsAsDefault | boolean | Determines whether URL slugs are enabled by default onProduct and Category pages of LWR Commerce stores (available in API version 58.0 and later)Custom object pages on enhanced LWR sites (available in API version 60.0 and later)Account and contact pages on enhanced LWR sites (available in API version 61.0 and later) |
| feedChannel | string | Displays the feed of all channel program record or group interactions, including posts, questions, and attachments. This field is available in API version 28.0 and later. |
| forgotPasswordTemplate | string | Required. The email template used when a user forgets their password.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| gatherCustomerSentimentData | boolean | Gathers data when a customer looks at articles and cases in sites, for use in the Community 360 feature. This field is available in API version 40.0 and later. |
| lockoutTemplate | string | The email template used to communicate with users when they get locked out of their org because of too many failed login attempts. Available in API version 43.0 and later.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| logoutUrl | string | Specifies the URL that members are redirected to when they log out from your site. This field is available in API version 28.0 and later. |
| maxFileSizeKb | int | Specifies the maximum file size (in KBs) that members can upload in your site. Available in API version 36.0 and later. Enter a number between 3072 KB and your org’s maximum file size. To use the default limit of 2 GB, leave this field empty. |
| navigationLinkSet | NavigationLinkSet | Represents the navigation menu in a site. A navigation menu consists of items that users can click to go to other parts of the site. This field is available in API versions 37.0 to 46.0. In API version 47.0 and later, use the NavigationMenu type instead. |
| networkAuthApiSettings | NetworkAuthApiSettings | The settings that control enablement, access, and security for the Headless Registration Flow, Headless Forgot Password Flow, Headless Passwordless Login Flow, and their associated APIs. Available in API version 60.0 and later. |
| networkMemberGroups | NetworkMemberGroups | The profiles and permission sets that have access to the site. Users with these profiles or permission sets are members of the site.NoteIf a Chatter customer (from a customer group) is assigned a permission set that is also associated with a site, the Chatter customer isn’t added to the site. |
| networkPageOverrides | NetworkPageOverride | The settings in the Administration area (in Experience Management or Experience Workspaces) that control which page type Change Password, Forgot Password, Home, and Login each point to. Available in API version 40.0 and later. |
| newSenderAddress | string | Email address that has been entered as the new value for EmailSenderAddress but hasn’t been verified yet. After a user has requested to change the sender email address and has successfully responded to the verification email, the NewSenderAddress value overwrites the value in EmailSenderAddress. This value becomes the email address from which emails are sent. |
| pwdlessRegEmailTemplate | string | The email template used when a user registers without a password. Instead of a password,they use an identity verification method, such as a verification code or link, which the user completes to finalize the registration or login process.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| picassoSite | string | Name of the site of ChatterNetworkPicasso type that's linked to the Experience Cloud site. |
| recommendationAudience | RecommendationAudience | Creates an audience of new members, or can be used to manage customized lists of audience members to organize and target recommendations. Available in API version 41.0 and later. |
| recommendationDefinition | RecommendationDefinition | Represents a custom recommendation to drive engagement. Targets a specific audience and uses channels to specify a location for the recommendation. Available in API version 41.0 and later. |
| reputationLevels | ReputationLevelDefinitions | The reputation levels assigned to members when they accrue points by performing certain actions. |
| reputationPointsRules | ReputationPointsRules | The points members accrue when they perform certain defined actions. |
| selfRegMicroBatchSubErrorEmailTemplate | reference | The email template used to communicate with users when their self-registration request, using micro-batching failed. Available in API version 54.0 and later. |
| selfRegProfile | string | The profile assigned to users who self-register. This value is used only if selfRegistration is enabled for the site. Available in API version 29.0 and later. |
| selfRegistration | boolean | Determines whether self-registration is available for the site. |
| sendWelcomeEmail | boolean | Determines whether a welcome email is sent when a new user is added to the site. |
| site | string | Required. The CustomSite associated with the Experience Cloud site. |
| siteArchiveStatus | SitesArchiveStatus | Specifies whether the site has been archived. Available values are:NotArchived—The site hasn’t been archived.TemporarilyArchived—The site is archived, but can be unarchived in the future. |
| status | NetworkStatus[] | Required. Status of the site. Available values are:Live—The site is online and members can access it.DownForMaintenance—The site was previously published but was taken offline. Members with the Create and Set Up Experiences permission can still access the setup for offline sites regardless of profile or membership. Members aren’t able to access offline sites, but they still appear in the user interface dropdown as SiteName (Offline).UnderConstruction—The site hasn’t yet been published. Users with the Create and Set Up Experiences permission can access sites in this status if their profile is associated with the site.After a site is published, it can never be in this status again. |
| tabs | NetworkTabSet | Required. The tabs that are available in the site. The user that created the site selected these tabs. |
| urlPathPrefix | string | The first part of the path on the site's URL that distinguishes this site from other sites. For example, if your site URL is MyDomainName.my.site.com/partners, then partners is the urlPathPrefix. |
| verificationTemplate | string | The email template used to communicate with users when they must verify their identity, for example, when they log in without a password or from a new device. Available in API version 44.0 and later.Lightning email templates aren’t packageable. We recommend using a Classic email template. |
| welcomeTemplate | string | The email template used when sending welcome emails to new members.Lightning email templates aren’t packageable. We recommend using a Classic email template. |

## Branding

Represents the branding and color scheme applied to the Experience Cloud site. Available in API version 40.0 and earlier. Replaced by NetworkBranding in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| loginFooterText | string | The text that appears in the footer of the login page. |
| loginLogo | string | The logo that appears on the login page for external users. |
| pageFooter | string | An image that appears on the footer of the pages. Must be an .html file. |
| pageHeader | string | An image that appears on the header of the pages. Can be an .html, .gif, .jpg, or .png file. |
| primaryColor | string | The color used for the active tab. |
| primaryComplementColor | string | Font color used with primaryColor. |
| quaternaryColor | string | The background color for pages. |
| quaternaryComplementColor | string | Font color used with quaternaryColor. |
| secondaryColor | string | The color used for the top borders of lists and tables. |
| tertiaryColor | string | The background color for section headers on edit and detail pages. |
| tertiaryComplementColor | string | Font color used with tertiaryColor. |
| zeronaryColor | string | The background color for the header. |
| zeronaryComplementColor | string | Font color used with zeronaryColor. |

## CommunityRoles

The labels used to identify users with Customer, Partner, or Employee roles in an Experience Cloud site. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| customerUserRole | string | The label for the Customer user role. |
| employeeUserRole | string | The label for the Employee user role. |
| partnerUserRole | string | The label for the Partner user role. |

## NavigationLinkSet

Represents the navigation menu in an Experience Cloud site. A navigation menu consists of items that users can click to go to other parts of the site. Available in API versions 37.0 to 46.0. In API version 47.0, use NavigationMenu instead.

| Field | Field Type | Description |
| --- | --- | --- |
| navigationMenuItem | NavigationMenuItem[] | A list of menu items in a NavigationLinkSet. Use this object to create, delete, or update menu items in your site’s navigation menu. |

## NavigationMenuItem

Represents a single menu item in the NavigationLinkSet subtype (API version 37.0 to 46.0) or in the [NavigationMenu](atlas.en-us.api_meta.meta/api_meta/meta_navigationmenu.htm "Represents the navigation menu in an Experience Builder site. A navigation menu consists of items that users can click to go to other parts of the site. This type replaces the NavigationLinkSet subtype on Network. NavigationMenu is available in API version 47.0 and later. This type extends the Metadata metadata type and inherits its fullName field.") type (API version 47.0 and later). Use this subtype to create, delete, or update menu items in your site’s navigation menu.

| Field | Field Type | Description |
| --- | --- | --- |
| defaultListViewId | string | If the value of the type field is SalesforceObject, the value is the ID of the default list view for the object. |
| label | string | Required. The text that appears in the navigation menu for this item. |
| menuItemBranding | NavigationMenuItemBranding | Branding for the navigation menu item. Available in API version 47.0 and later. |
| position | int | Required. The location of the menu item in the navigation menu. |
| publiclyAvailable | boolean | When set to true, gives access to guest users. |
| subMenu | NavigationSubMenu | A list of child menu items. This field is available in API 39.0 and later. |
| target | string | Required if type is ExternalLink, InternalLink, or SalesforceObject. If type is ExternalLink or InternalLink, the target is the URL that the link points to. For ExternalLink, your entry looks like this: https://salesforce.com. For InternalLink, use a relative URL, such as /contactsupport. If type is MenuLabel or NavigationalTopic, target isn’t used. |
| targetPreference | string | Backed by a picklist that includes preferences for the target field. Valid values are:NoneOpenInExternalTab—Used for external links to determine whether to open in an external tab. |
| type | string | Required. The type of navigation menu item. Valid values are:SalesforceObject—Available objects include accounts, cases, contacts, and custom objects.ExternalLink—Links to a URL outside of your site. For example, https://salesforce.com.InternalLink—Links to a relative URL inside your site. For example, /contactsupport.MenuLabel—A parent heading for your navigation menu. See NavigationSubMenu for how to nest items underneath the menu label. This value is available in API 39.0 and later.NavigationalTopic—A dropdown list with links to the navigational topics in your site.You can’t nest other items of type MenuLabel or NavigationalTopic under MenuLabel. |

## NavigationSubMenu

A list of child menu items. Only NavigationMenuItem items of type MenuLabel can have items in a NavigationSubMenu. Available in API 39.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| navigationMenuItem | NavigationMenuItem[] | A list of menu items in a NavigationSubMenu. Use navigationMenuItem to create, delete, or update child items under a parent heading. |

## NetworkAuthApiSettings

Represents the settings that control enablement, access, and security for the Headless Registration Flow, Headless Forgot Password Flow, Headless Passwordless Login Flow, and their associated APIs. Available in API version 60.0 and later.

| Field | Field Type | Details |
| --- | --- | --- |
| doesForgotPasswordRequireAuth | boolean | Determines whether authentication is required to access Headless Forgot Password API when a password reset is requested. If true, an access token issued to an internal integration user in your initial POST request to the /services/auth/headless/forgot_password endpoint is required. The access token must include the forgot_password scope. |
| doesPasswordLoginRequireAuth | boolean | Determines whether reCAPTCHA is required for headless username-password login that uses the OAuth 2.0 for First-Party Applications draft protocol. |
| doesPwdlessLoginRequireAuth | boolean | Determines whether authentication is required to access Headless Passwordless Login API when user information is submitted to Salesforce. If true, an access token issued to an internal integration user is required in your initial POST request to the /services/auth/headless/init/passwordless/login endpoint. The access token must include the pwdless_login_api scope. |
| doesRegistrationRequireAuth | boolean | Determines whether authentication is required to access Headless Registration API when user registration information is submitted to Salesforce. If true, an access token issued to an internal integration user in your initial POST request to the /services/auth/headless/init/registration endpoint is required. The access token must include the user_registration_api scope. |
| emailTmplsAllowlist | NetworkEmailTmplAllowlist[] | The email template allowlist for the Headless Registration Flow, Headless Passwordless Login Flow, and Headless Forgot Password Flow. The allowlist defines which email templates can be used for verification emails sent to end users during these flows. |
| headlessDiscoveryExecutionUser | Id | An integration user account to run a headless user discovery Apex handler. |
| headlessDiscoveryHandler | string | An Apex class that implements the Auth.HeadlessUserDiscoveryHandler interface. |
| isFirstPartyAppsAllowed | boolean | Determines whether the Experience Cloud site can use headless identity flows that use the OAuth 2.0 for First-Party Applications draft protocol. |
| isForgotPwdAllowed | boolean | Determines whether the Headless Forgot Password Flow is enabled. |
| isForgotPwdEmailTemplateAllowlistingEnabled | boolean | Determines whether email template allowlisting is enabled for the Headless Forgot Password Flow. If true, the emailtemplate parameter in the initial request to Headless Forgot Password API can include only allowlisted email templates. |
| isHeadlessUserRegistrationAllowed | boolean | Determines whether the Headless Registration Flow is enabled. |
| IsPwdlessLoginAllowed | boolean | Determines whether the Headless Passwordless Login Flow is enabled (true) or not (false). |
| isRecaptchaRequiredForgotPwd | boolean | Determines whether a reCAPTCHA token is required to access Headless Forgot Password API when a password reset is requested. If true, a reCAPTCHA token is required in your initial POST request to the /services/auth/headless/forgot_password endpoint. |
| isRecaptchaRequiredPwdlessLogin | boolean | Determines whether a reCAPTCHA token is required to access Headless Passwordless Login API when user information is submitted to Salesforce. If true, a reCAPTCHA token is required in your initial POST request to the /services/auth/headless/init/passwordless/login endpoint. |
| isRecaptchaRequiredRgstr | boolean | Determines whether a reCAPTCHA token is required to access Headless Registration API when user registration information is submitted to Salesforce. If true, a reCAPTCHA token is required in your initial POST request to the /services/auth/headless/init/registration endpoint. |
| isUniversalClientRgstrAllowed | boolean | Determines whether self-registration and passwordless login via Universal Registration API are enabled. |
| isUserDisambiguationAllowedForgotPwd | boolean | Determines whether the Headless Forgot Password Flow uses the headless user discovery Apex handler that's specified in the HeadlessDiscoveryHandlerId field. The handler enables users to reset their password with an identifier other than their username, such as an email address, phone number, or order number. |
| isUserDisambiguationAllowedUsernamePwd | boolean | Determines whether headless login flows use the headless user discovery Apex handler that's specified in the HeadlessDiscoveryHandlerId field. The handler enables users to log in with an identifier other than their username, such as an email address, phone number, or order number. This field applies to the Authorization Code and Credentials Flow and the OAuth 2.0 for First-Party Applications login flow. |
| maxPasswordResetAttempts | int | The maximum number of password reset attempts you allow for the Headless Forgot Password Flow before the user must request a new one-time password (OTP). |
| recaptchaScoreThreshold | double | The lowest reCAPTCHA score that is accepted before rejecting a request to access Headless Identity APIs. This value must be between 0.5 and 1. Scores closer to 0.5 are more likely to be bots, while scores closer to 1 are more likely to be valid users.You must set a score threshold if doesForgotPasswordRequireAuth or doesRegistrationRequireAuth fields are set to true. reCAPTCHA settings apply to both the Headless Registration Flow and the Headless Forgot Password Flow.Google issues a reCAPTCHA score only for reCAPTCHA v3 implementations. If you implement reCAPTCHA v2, this field doesn’t apply. |
| recaptchaSecretKey | string | The reCAPTCHA secret key from your API key pair. You get the API key pair from Google when you set up reCAPTCHA. The secret key helps your app securely communicate with Google. You must enter a secret key if doesForgotPasswordRequireAuth or doesRegistrationRequireAuth are set to true. reCAPTCHA settings apply to all headless identity flows for which reCAPTCHA is enabled. |
| registrationExecutionUser | string | The user who runs your headless registration Apex handler. |
| registrationHandler | string | The headless registration Apex handler. |
| registrationUserDefaultProfile | string | The default profile that gets assigned to new users when they register. |

## NetworkEmailTmplAllowlist

Represents the allowlist for one-time password (OTP) email templates sent to end users during the Headless Registration Flow, Headless Passwordless Login Flow, and Headless Forgot Password Flow. Available in API version 60.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| emailTemplate | string | Required. The email templates that can be sent to users during the headless authorization flows for registration, passwordless login, and forgot password. You can list multiple templates. When your app sends its initial request to Headless Registration API or Headless Passwordless Login API, the emailtemplate parameter can include only an email template ID from the allowlist. For Headless Forgot Password API, it works the same way, but only if the isForgotPwdEmailTemplateAllowlistingEnabled field on the NetworkAuthApiSettings metadata type is true. |

## NetworkMemberGroup

Represents the profiles and permission sets that are assigned to the Experience Cloud site. Users with one of the profiles or permission sets are members of the site, unless the user is a Chatter customer (from a customer group).

| Field | Field Type | Description |
| --- | --- | --- |
| permissionSet | string | A permission set that is assigned to the site.NoteIf a Chatter customer (from a customer group) is assigned a permission set that is also associated with a site, the Chatter customer isn’t added to the site. |
| profile | string | A profile that is part of the site. |

## NetworkPageOverride

Represents settings in the Administration area (in Experience Management or Experience Workspaces) that control which page type the Change Password, Forgot Password, Home, and Login pages each point to.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Assigned Visualforce page overrides are specified and deployed via the corresponding CustomSite metadata field.

| Field | Field Type | Description |
| --- | --- | --- |
| changePasswordPageOverrideSetting | NetworkPageOverrideSetting (enumeration of type string) | Required. Specifies the page type that the Change Password page setting applies to. The valid values are:Configurable—a configurable self-registration pageDesigner—an Experience Builder pageStandard—the default pageVisualForce—a Visualforce page |
| forgotPasswordPageOverrideSetting | NetworkPageOverrideSetting (enumeration of type string) | Required. Specifies the page type that the Forgot Password page setting applies to. The valid values are:Configurable—a configurable self-registration pageDesigner—an Experience Builder pageStandard—the default pageVisualForce—a Visualforce page |
| homePageOverrideSetting | NetworkPageOverrideSetting (enumeration of type string) | Required. Specifies the page type that the Experience Home page setting applies to. The valid values are:Configurable—a configurable self-registration pageDesigner—an Experience Builder pageStandard—the default pageVisualForce—a Visualforce page |
| loginPageOverrideSetting | NetworkPageOverrideSetting (enumeration of type string) | Required. Specifies the page type that the Login page setting applies to. The valid values are:Configurable—a configurable self-registration pageDesigner—an Experience Builder pageStandard—the default pageVisualForce—a Visualforce pageNoteTo configure an Experience Builder page for your Home and Login pages, make sure you publish your site. Unpublished pages show up as Default Page from the dropdown menu in Admin settings. |
| selfRegProfilePageOverrideSetting | NetworkPageOverrideSetting (enumeration of type string) | Required. Specifies the page type that the Self Registration page setting applies to. The valid values are:Configurable—a configurable self-registration pageDesigner—an Experience Builder pageStandard—the default pageVisualForce—a Visualforce page |

## RecommendationAudience

Creates an audience of new Experience Cloud site members, or can be used to manage customized lists of audience members to organize and target recommendations. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| recommendationAudienceDetails | RecommendationAudienceDetail | The specific details of an audience for recommendations. |

## RecommendationAudienceDetail

The specific details of an audience for recommendations. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| audienceCriteriaType | AudienceCriteriaType (enumeration of type string) | The criteria for the recommendation audience type. Values are:CustomListMaxDaysInCommunity |
| audienceCriteriaValue | string | For new member criteria, the maximum number of days since a user became a member. Null in case of custom list criteria. |
| setupName | string | Name of the recommendation audience. |

## RecommendationDefinition

Represents a list of custom recommendations to drive engagement for an Experience Cloud site. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| recommendationDefinitionDetails | RecommendationDefinitionDetail[] | A list of custom recommendations and their details. |

## RecommendationDefinitionDetail

The specific details of a custom recommendation. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| actionUrl | string | The URL for the button that lets users act on the recommendation. |
| description | string | An explanation of the recommendation that suggests what users can do. |
| linkText | string | The text label for the button. |
| scheduledRecommendations | ScheduledRecommendation | A list of scheduled recommendations. |
| setupName | string | The name of the recommendation, which appears in Setup. |
| title | string | The title of the recommendation. |

## ReputationBranding

Branding for the reputation level.

| Field | Field Type | Description |
| --- | --- | --- |
| smallImage | string | Custom image associated with a reputation level. Use files with these extensions: .jpeg, .png, or .gif. Images are stored as documents. If not specified, the default reputation level image is used. Available in API version 32.0 and later. |

## ReputationLevelDefinitions

Represents reputation levels members can achieve by performing certain defined actions in an Experience Cloud site.

| Field | Field Type | Description |
| --- | --- | --- |
| level | ReputationLevel[] | Represents reputation levels. |

## ReputationLevel

Represents the name and lower value of the reputation level. The application calculates the upper value.

| Field | Field Type | Description |
| --- | --- | --- |
| branding | ReputationBranding[] | Represents any branding associated with the reputation level, specifically, the custom image for the reputation level.This field is optional. If not specified, the default reputation level image is used. Available in API version 32.0 and later. |
| label | string | Name of the reputation level.This field is optional. If not specified, one of the 10 defaults is used.Level 1Level 2Level 3Level 4Level 5Level 6Level 7Level 8Level 9Level 10 |
| lowerThreshold | double | Required. The lower value in the range for this reputation level. For example, if this reputation level is for points 1–50, 1 is the lowerThreshold. |

## ReputationPointsRules

Represents points rules in an Experience Cloud site’s point system.

| Field | Field Type | Description |
| --- | --- | --- |
| pointsRule | ReputationPointsRule[] | Represents events and their associated points. |

## ReputationPointsRule

Represents the event and associated point value for a points rule. When a user acts, they accrue the associated points.

| Field | Field Type | Description |
| --- | --- | --- |
| eventType | string | Required. The type of event a member has to perform to get points. The available values are:FeedItemWriteAPostFeedItemWriteACommentFeedItemReceiveACommentFeedItemLikeSomethingFeedItemReceiveALikeFeedItemMentionSomeoneFeedItemSomeoneMentionsYouFeedItemShareAPostFeedItemSomeoneSharesYourPostFeedItemPostAQuestionFeedItemAnswerAQuestionFeedItemReceiveAnAnswerFeedItemMarkAnswerAsBestFeedItemYourAnswerMarkedBestFeedItemEndorseSomeoneForKnowledgeOnATopicFeedItemEndorsedForKnowledgeOnATopic |
| points | int | Required. The number of points a member gets for performing the event. The default number of points per event is:FeedItemWriteAPost +1FeedItemWriteAComment: +1FeedItemReceiveAComment: +5FeedItemLikeSomething: +1FeedItemReceiveALike: +5FeedItemMentionSomeone: +1FeedItemSomeoneMentionsYou: +5FeedItemShareAPost: +1FeedItemSomeoneSharesYourPost: +5FeedItemPostAQuestion: +1FeedItemAnswerAQuestion: +5FeedItemReceiveAnAnswer: +5FeedItemMarkAnswerAsBest: +5FeedItemYourAnswerMarkedBest: +20FeedItemEndorseSomeoneForKnowledgeOnATopic: +5FeedItemEndorsedForKnowledgeOnATopic: +20 |

## ScheduledRecommendation

Represents a list of scheduled recommendations. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| scheduledRecommendationDetails | ScheduledRecommendationDetail[] | A list of scheduled recommendations. |

## ScheduledRecommendationDetail

The specific details of a scheduled recommendation. Available in API version 41.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| channel | RecommendationChannel (enumeration of type string) | A way to group recommendations together to determine where they show up in the site. The valid values are:DefaultChannel—The default recommendation channel. Recommendations in the default channel appear in predefined locations, such as directly in the feed in Salesforce mobile web and on the Home and Question Detail pages of the Customer Service (Napili) template.CustomChannel1—A custom recommendation channel. Choose where you want recommendations to appear by adding the Recommendations Carousel component to the page in Experience Builder.CustomChannel2—A custom recommendation channel.CustomChannel3—A custom recommendation channel.CustomChannel4—A custom recommendation channel.CustomChannel5—A custom recommendation channel. |
| enabled | boolean | Indicates whether scheduling is enabled. If true, the recommendation is enabled and appears in sites.If false, recommendations in feeds in Salesforce mobile web aren’t removed, but no new recommendations appear. In sites, disabled recommendations no longer appear. |
| rank | int | The rank of the recommendation within the channel, which determines the order in which it’s displayed.The scheduled recommendation is inserted into the position specified by the rank. The rank of all the scheduled recommendations after it is pushed down. If the specified rank is larger than the size of the list, the scheduled recommendation is put at the end of the list.If a rank isn’t specified, the scheduled recommendation is put at the end of the list. |
| recommendationAudience | string | The name of the audience for this scheduled recommendation. |

## NetworkTabSet

| Field | Field Type | Description |
| --- | --- | --- |
| customTab | string | Custom tab that is part of the site. |
| defaultTab | string | The Home tab for the site. When members log in, this tab is the first page they see. |
| standardTab | string | Standard tab that is part of the site. |

## Declarative Metadata Sample Definition

A sample XML definition of a network.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Community (Zone)](atlas.en-us.api_meta.meta/api_meta/meta_community.htm "Represents a zone that contains Ideas or Chatter Answers objects. Zones are shared by the Ideas, Answers, and Chatter Answers features, allowing you to view and create zones from those locations.This type extends the Metadata metadata type and inherits its fullName field.")

## Code Examples

```apex
<?xml version="1.0" encoding="UTF-8"?>
<Network xmlns="http://soap.sforce.com/2006/04/metadata">
    <allowMembersToFlag>true</allowMembersToFlag>
    <changePasswordTemplate>unfiled$public/CommunityChangePasswordEmailTemplate</changePasswordTemplate>
    <description>Metadata Community</description>
    <emailSenderAddress>admin@networkMetadata.com</emailSenderAddress>
    <emailSenderName>Admin User</emailSenderName>
    <enableInvitation>false</enableInvitation>
    <enableKnowledgeable>true</enableKnowledgeable>
    <enableNicknameDisplay>false</enableNicknameDisplay>
    <enablePrivateMessages>true</enablePrivateMessages>
    <enableReputation>true</enableReputation>
    <enableUpDownVote>true</enableUpDownVote>
    <forgotPasswordTemplate>unfiled$public/CommunityForgotPasswordEmailTemplate</forgotPasswordTemplate>
    <networkMemberGroups>
        <permissionSet>Admin</permissionSet>
        <permissionSet>Standard</permissionSet>
        <permissionSet>ReadOnly</permissionSet>
        <profile>Admin</profile>
        <profile>Standard</profile>
        <profile>ReadOnly</profile>
    </networkMemberGroups>
    <recommendationDefinition>
        <recommendationDefinitionDetails>
            <actionUrl>https://www.apple.com/iphone</actionUrl>
            <description>Better specs and high performance for iPhones</description>
            <linkText>iPhone 7</linkText>
            <scheduledRecommendations>
                <scheduledRecommendationDetails>
                    <channel>DefaultChannel</channel>
                    <enabled>false</enabled>
                    <rank>1</rank>
                    <recommendationAudience>New Member Audience</recommendationAudience>
                </scheduledRecommendationDetails>
            </scheduledRecommendations>
            <setupName>Apple iPhone</setupName>
            <title>iPhone7</title>
        </recommendationDefinitionDetails>
        <recommendationDefinitionDetails>
            <actionUrl>https://www.bose.com/qc35</actionUrl>
            <description>New Amazing Noise cancellation Headphones</description>
            <linkText>Bose QC35</linkText>
            <scheduledRecommendations>
                <scheduledRecommendationDetails>
                    <channel>DefaultChannel</channel>
                    <enabled>true</enabled>
                    <rank>2</rank>
                    <recommendationAudience>Custom Audience</recommendationAudience>
                </scheduledRecommendationDetails>
            </scheduledRecommendations>
            <setupName>Bose Headphones</setupName>
            <title>Bose QC35</title>
        </recommendationDefinitionDetails>
    </recommendationDefinition>
    <reputationLevels>
        <level>
            <branding> 
                <smallImage>communities_shared _document_folder/replevel_beginner.png</smallImage>
            </branding>
            <label>Beginner</label>
            <lowerThreshold>0</lowerThreshold>
        </level>
        <level>
            <branding> 
                <smallImage>communities_shared _document_folder/replevel_apprentice.png</smallImage>
            </branding>
            <label>Apprentice</label>
            <lowerThreshold>51</lowerThreshold>
        </level>
        <level>
            <branding> 
                <smallImage>communities_shared _document_folder/replevel_gettingthere.png</smallImage>
            </branding>
            <label>Getting There</label>
            <lowerThreshold>101</lowerThreshold>
        </level>
        <level>
            <branding> 
                <smallImage>communities_shared _document_folder/replevel_skilled.png</smallImage>
            </branding>
            <label>Skilled</label>
            <lowerThreshold>151</lowerThreshold>
        </level>
        <level>
            <branding> 
                <smallImage>communities_shared _document_folder/replevel_expert.png</smallImage>
            </branding>
            <label>Expert</label>
            <lowerThreshold>201</lowerThreshold>
        </level>
        <level>
            <branding> 
                <smallImage>communities_shared _document_folder/replevel_mentor.png</smallImage>
            </branding>
            <label>Mentor</label>
            <lowerThreshold>251</lowerThreshold>
        </level>
        <level>
            <branding> 
                <smallImage>communities_shared _document_folder/replevel_guru.png</smallImage>
            </branding>
            <label>Guru</label>
            <lowerThreshold>301</lowerThreshold>
        </level>
    </reputationLevels>
    <reputationPointsRules>
        <pointsRule>
            <eventType>FeedItemWriteAPost</eventType>
            <points>5</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemWriteAComment</eventType>
            <points>3</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemReceiveAComment</eventType>
            <points>10</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemLikeSomething</eventType>
            <points>3</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemReceiveALike</eventType>
            <points>5</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemMentionSomeone</eventType>
            <points>5</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemSomeoneMentionsYou</eventType>
            <points>10</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemShareAPost</eventType>
            <points>5</points>
        </pointsRule>
        <pointsRule>
            <eventType>FeedItemSomeoneSharesYourPost</eventType>
            <points>10</points>
        </pointsRule>
    </reputationPointsRules>
    <selfRegistration>false</selfRegistration>
    <sendWelcomeEmail>true</sendWelcomeEmail>
    <site>Network_11</site>
    <status>UnderConstruction</status>
    <tabs>
        <defaultTab>Chatter</defaultTab>
        <standardTab>Chatter</standardTab>
        <standardTab>Account</standardTab>
        <standardTab>Campaign</standardTab>
        <standardTab>Case</standardTab>
        <standardTab>Console</standardTab>
        <standardTab>Contact</standardTab>
        <standardTab>Contract</standardTab>
        <standardTab>Dashboard</standardTab>
        <standardTab>JigsawSearch</standardTab>
        <standardTab>File</standardTab>
        <standardTab>CollaborationGroup</standardTab>
        <standardTab>home</standardTab>
        <standardTab>Idea</standardTab>
        <standardTab>Lead</standardTab>
        <standardTab>Opportunity</standardTab>
        <standardTab>Product2</standardTab>
        <standardTab>UserProfile</standardTab>
        <standardTab>report</standardTab>
        <standardTab>Solution</standardTab>
    </tabs>
    <urlPathPrefix>network1</urlPathPrefix>
    <welcomeTemplate>unfiled$public/CommunityWelcomeEmailTemplate</welcomeTemplate>
</Network>
```

## Related Topics

- NavigationMenu (atlas.en-us.api_meta.meta/api_meta/meta_navigationmenu.htm)
- NavigationMenuItemBranding (atlas.en-us.api_meta.meta/api_meta/meta_navigationmenu.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
- Community (Zone) (atlas.en-us.api_meta.meta/api_meta/meta_community.htm)
