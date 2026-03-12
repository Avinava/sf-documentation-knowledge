---
title: "AuthConfiguration Class"
domain: apex-reference
topic: authconfiguration-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.445Z
estimatedTokens: 6294
namespace: Auth
keywords: [AuthConfiguration, Indicates, whether, Experience, Cloud, site, allows, internal, users, log, login, page., enable, admins, configure, setting, Allow, directly, experience, Login]
---

# AuthConfiguration Class

> Indicates whether the Experience Cloud site allows internal users to
      log in using the Experience Cloud site login page. To enable, admins configure the setting
        Allow internal users to log in directly to the experience on the
      Login & Registration page in Experience Workspaces. It’s disabled by
    default.

**Namespace:** `Auth`

# AuthConfiguration Class

Contains methods for configuring settings for users to log in to a Salesforce org using their authentication provider credentials instead of their Salesforce credentials. The authentication provider can be any authentication provider that supports the OpenID Connect protocol, such as Google, Facebook, or Twitter. Users log in to either an Experience Cloud site (https://MyDomainName.my.site.com) or your My Domain login URL (https://MyDomainName.my.salesforce.com).

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Example

This example shows how to call some methods on the Auth.AuthConfiguration class. Before you can run this sample, you must provide valid values for the URLs and developer name.

```

```

## AuthConfiguration Constructors

The following are constructors for AuthConfiguration.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The AuthConfiguration (networkId, startUrl) constructor is deprecated in API version 56.0 and later.

### AuthConfiguration(communityOrCustomUrl, startUrl)

Creates an instance of the AuthConfiguration class using the specified URL for an Experience Cloud site or a My Domain subdomain and the start URL for authenticated users.

#### Signature

public AuthConfiguration(String communityOrCustomUrl, String startUrl)

#### Parameters

communityOrCustomUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL for the domain, which can be a Salesforce subdomain created with My Domain (my.salesforce.com) or a subdomain of an Experience Cloud site (force.com).

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page users see after successfully logging in to the Experience Cloud site or My Domain subdomain.

## AuthConfiguration Methods

The following are methods for AuthConfiguration. Use these methods to manage and customize authentication for a Salesforce community.

-   **[getAllowInternalUserLoginEnabled()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getAllowInternalUserLoginEnabled)**
    Indicates whether the Experience Cloud site allows internal users to log in using the Experience Cloud site login page. To enable, admins configure the setting **Allow internal users to log in directly to the experience** on the Login & Registration page in Experience Workspaces. It’s disabled by default.
-   **[getAuthConfig()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getAuthConfig)**
    Returns the AuthConfig sObject, which represents the authentication options for an Experience Cloud site or Salesforce My Domain subdomain.
-   **[getAuthConfigProviders()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getAuthConfigProviders)**
    Returns the list of authentication providers configured for an Experience Cloud site or Salesforce My Domain subdomain.
-   **[getAuthProviders()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getAuthProviders)**
    Returns the list of authentication providers available for an Experience Cloud site or Salesforce My Domain subdomain.
-   **[getAuthProviderSsoDomainUrl(communityUrl, startUrl, developerName)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getAuthProviderSsoDomainUrl)**
    Returns the single sign-on URL for an Experience Cloud site subdomain.
-   **[getAuthProviderSsoUrl(communityUrl, startUrl, developerName)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getAuthProviderSsoUrl)**
    Returns the single sign-on URL for an Experience Cloud site or Salesforce My Domain subdomain.
-   **[getBackgroundColor()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getBackgroundColor)**
    Returns the color for the background of the login page for a community.
-   **[getCertificateLoginEnabled(domainUrl)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getCertificateLoginEnabled)**
    Returns true if certificate-based authentication is enabled for the My Domain URL.
-   **[getCertificateLoginUrl(domainUrl, startUrl)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getCertificateLoginUrl)**
    Returns the certificate-based authentication endpoint for the My Domain URL if the org has certificate-based authentication enabled.
-   **[getDefaultProfileForRegistration()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getDefaultProfileForRegistration)**
    Returns the profile ID assigned to new community users.
-   **[getFooterText()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getFooterText)**
    Returns the text at the bottom of the login page for a community.
-   **[getForgotPasswordUrl()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getForgotPasswordUrl)**
    Returns the URL for the standard or custom Forgot Password page that is specified for an Experience Cloud site or portal by the administrator.
-   **[getHeadlessForgotPasswordEnabled()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getHeadlessForgotPasswordEnabled)**
    Returns true if the Headless Forgot Password Flow is enabled.
-   **[getHeadlessFrgtPswEnabled()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getHeadlessFrgtPswEnabled)**
    This method will be deprecated in a future release. Use the getHeadlessForgotPasswordEnabled() method in this class instead.
-   **[getHeadlessPasswordlessLoginEnabled()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getHeadlessPasswordlessLoginEnabled)**
    Determines if headless passwordless login is enabled.
-   **[getHeadlessRegistrationEnabled()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getHeadlessRegistrationEnabled)**
    Determines if the Headless Registration Flow is enabled.
-   **[getLogoUrl()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getLogoUrl)**
    Returns the location of the icon image at the bottom of the login page for a community.
-   **[getRightFrameUrl()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getRightFrameUrl)**
    Returns the URL for the right-frame content to display on the right side of the Experience Cloud site login page. The admin supplies the URL.
-   **[getSamlProviders()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getSamlProviders)**
    Returns the list of SAML-based authentication providers available for an Experience Cloud site or Salesforce My Domain subdomain.
-   **[getSamlSsoUrl(communityUrl, startURL, samlId)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getSamlSsoUrl)**
    Returns the single sign-on URL for an Experience Cloud site or Salesforce My Domain subdomain.
-   **[getSelfRegistrationEnabled()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_SessionManagement_getSelfRegistrationEnabled)**
    Indicates whether the current community allows new users to create their own account by filling out a registration form.
-   **[getSelfRegistrationUrl()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getSelfRegistrationUrl)**
    Returns the location of the self-registration page for new users to sign up for an account with a community.
-   **[getStartUrl()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_getStartUrl)**
    Returns the start page of an Experience Cloud site or Salesforce My Domain subdomain. This URL is the first page that users see when they log in.
-   **[getUsernamePasswordEnabled()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_SessionManagement_getUsernamePasswordEnabled)**
    Indicates whether the current community is set to display a login form asking for a username and password. You can configure the community not to request a username and password if it is for unauthenticated users or users logging in with a third-party authentication provider.
-   **[isCommunityUsingSiteAsContainer()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm#apex_Auth_AuthConfiguration_isCommunityUsingSiteAsContainer)**
    Returns true if the Experience Cloud site uses Site.com pages; otherwise, returns false.

### getAllowInternalUserLoginEnabled()

Indicates whether the Experience Cloud site allows internal users to log in using the Experience Cloud site login page. To enable, admins configure the setting **Allow internal users to log in directly to the experience** on the Login & Registration page in Experience Workspaces. It’s disabled by default.

#### Signature

public Boolean getAllowInternalUserLoginEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If true, internal users log in to an Experience Cloud site from the site’s login page with their internal credentials. If they navigate to their internal org from the Experience Cloud site, they don't have to log in again.

### getAuthConfig()

Returns the AuthConfig sObject, which represents the authentication options for an Experience Cloud site or Salesforce My Domain subdomain.

#### Signature

public AuthConfig getAuthConfig()

#### Return Value

Type: AuthConfig

The AuthConfig sObject for the Experience Cloud site or Salesforce My Domain subdomain.

### getAuthConfigProviders()

Returns the list of authentication providers configured for an Experience Cloud site or Salesforce My Domain subdomain.

#### Signature

public List<AuthConfigProviders> getAuthConfigProviders()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<AuthConfigProviders>

A list of authentication providers (AuthConfigProviders sObjects), which are children of the AuthProvider sObject.

### getAuthProviders()

Returns the list of authentication providers available for an Experience Cloud site or Salesforce My Domain subdomain.

#### Signature

public List<AuthProvider> getAuthProviders()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<AuthProvider>

A list of authentication providers (AuthProvider sObjects) for the Experience Cloud site or My Domain subdomain.

### getAuthProviderSsoDomainUrl(communityUrl, startUrl, developerName)

Returns the single sign-on URL for an Experience Cloud site subdomain.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For better performance, we recommend using this method instead of getAuthProviderSsoUrl. If the authentication provider has User Subdomain for Callback enabled, changing the single sign-on URL also changes the callback URL to use the Experience Cloud site subdomain. Before switching to this method, update the callback URL in your third-party applications to avoid getting an invalid callback URL error during single sign-on.

#### Signature

public static String getAuthProviderSsoDomainUrl(String communityUrl, String startUrl, String developerName)

#### Parameters

communityUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL for the Experience Cloud site subdomain. If null or specified as an empty string, you get the single sign-on URL for the org’s My Domain.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page that users see after logging in to the Experience Cloud site subdomain.

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique name of the authentication provider.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The Single Sign-On Initialization URL for the Experience Cloud site subdomain.

### getAuthProviderSsoUrl(communityUrl, startUrl, developerName)

Returns the single sign-on URL for an Experience Cloud site or Salesforce My Domain subdomain.

#### Signature

public static String getAuthProviderSsoUrl(String communityUrl, String startUrl, String developerName)

#### Parameters

communityUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL for the Experience Cloud site or My Domain subdomain. If not null and not specified as an empty string, you get the URL for the Experience Cloud site. If null or specified as an empty string, you get the URL for a custom domain.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page that users see after logging in to the Experience Cloud site or My Domain subdomain.

developerName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique name of the authentication provider.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The Single Sign-On Initialization URL for the Experience Cloud site or Salesforce My Domain subdomain.

### getBackgroundColor()

Returns the color for the background of the login page for a community.

#### Signature

public String getBackgroundColor()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCertificateLoginEnabled(domainUrl)

Returns true if certificate-based authentication is enabled for the My Domain URL.

#### Signature

public Boolean getCertificateLoginEnabled(String domainUrl)

#### Parameters

domainUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The My Domain URL that is being checked for certificate-based authentication.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getCertificateLoginUrl(domainUrl, startUrl)

Returns the certificate-based authentication endpoint for the My Domain URL if the org has certificate-based authentication enabled.

#### Signature

public static String getCertificateLoginUrl(String domainUrl, String startUrl)

#### Parameters

domainUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The My Domain URL being checked for its certificate-based authentication endpoint .

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page that the user is directed to after logging in to the My Domain with certificate-based authentication.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The certificate-based authentication endpoint for the My Domain URL: mydomainURL:8443/services/certauth?startURL=startURLParam

### getDefaultProfileForRegistration()

Returns the profile ID assigned to new community users.

#### Signature

public String getDefaultProfileForRegistration()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The profile ID.

### getFooterText()

Returns the text at the bottom of the login page for a community.

#### Signature

public String getFooterText()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The text string displayed at the bottom of the login page, for example “Log in with an existing account.”

### getForgotPasswordUrl()

Returns the URL for the standard or custom Forgot Password page that is specified for an Experience Cloud site or portal by the administrator.

#### Signature

public String getForgotPasswordUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

URL for the standard or custom Forgot Password page.

### getHeadlessForgotPasswordEnabled()

Returns true if the Headless Forgot Password Flow is enabled.

#### Signature

public Boolean getHeadlessForgotPasswordEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getHeadlessFrgtPswEnabled()

This method will be deprecated in a future release. Use the getHeadlessForgotPasswordEnabled() method in this class instead.

#### Signature

public Boolean getHeadlessFrgtPswEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getHeadlessPasswordlessLoginEnabled()

Determines if headless passwordless login is enabled.

#### Signature

public Boolean getHeadlessPasswordlessLoginEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if headless passwordless login is enabled.

### getHeadlessRegistrationEnabled()

Determines if the Headless Registration Flow is enabled.

#### Signature

public Boolean getHeadlessRegistrationEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if headless registration is enabled.

### getLogoUrl()

Returns the location of the icon image at the bottom of the login page for a community.

#### Signature

public String getLogoUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The path to the icon image.

### getRightFrameUrl()

Returns the URL for the right-frame content to display on the right side of the Experience Cloud site login page. The admin supplies the URL.

#### Signature

public String getLoginRightFrameUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

URL for the right-frame content of the Experience Cloud site login page. Salesforce creates an inline (iframe) on the right side of the login page to display the contents specified by the URL.

### getSamlProviders()

Returns the list of SAML-based authentication providers available for an Experience Cloud site or Salesforce My Domain subdomain.

#### Signature

public List<SamlSsoConfig> getSamlProviders()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<SamlSsoConfig>

A list of SAML-based authentication providers, which are SamlSsoConfig sObjects.

### getSamlSsoUrl(communityUrl, startURL, samlId)

Returns the single sign-on URL for an Experience Cloud site or Salesforce My Domain subdomain.

#### Signature

public static String getSamlSsoUrl(String communityUrl, String startURL, String samlId)

#### Parameters

communityUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The URL for the Experience Cloud site or My Domain subdomain. If not null and not specified as an empty string, you get the URL for the Experience Cloud site. If null or specified as an empty string, you get the URL for a My Domain subdomain.

startUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The page users see after successfully logging in to the Experience Cloud site or My Domain subdomain

samlId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier of the SamlSsoConfig standard object for the Experience Cloud site or My Domain subdomain

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The Single Sign-On Initialization URL for the Experience Cloud site or Salesforce My Domain subdomain.

### getSelfRegistrationEnabled()

Indicates whether the current community allows new users to create their own account by filling out a registration form.

#### Signature

public Boolean getSelfRegistrationEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### getSelfRegistrationUrl()

Returns the location of the self-registration page for new users to sign up for an account with a community.

#### Signature

public String getSelfRegistrationUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The location of the self-registration page.

### getStartUrl()

Returns the start page of an Experience Cloud site or Salesforce My Domain subdomain. This URL is the first page that users see when they log in.

#### Signature

public String getStartUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The location of the start page for the Experience Cloud site or My Domain subdomain.

### getUsernamePasswordEnabled()

Indicates whether the current community is set to display a login form asking for a username and password. You can configure the community not to request a username and password if it is for unauthenticated users or users logging in with a third-party authentication provider.

#### Signature

public Boolean getUsernamePasswordEnabled()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCommunityUsingSiteAsContainer()

Returns true if the Experience Cloud site uses Site.com pages; otherwise, returns false.

#### Signature

public Boolean isCommunityUsingSiteAsContainer()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
String communityUrl = 'MyDomainName.my.site.com';
String startUrl = '<Add URL>';
Auth.AuthConfiguration authConfig = new Auth.AuthConfiguration(communityUrl,startUrl);
List<AuthProvider> authPrvs = authConfig.getAuthProviders();
String bColor = authConfig.getBackgroundColor();
String fText = authConfig.getFooterText();

String sso = Auth.AuthConfiguration.getAuthProviderSsoUrl(communityUrl, startUrl, 'developerName');
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getAllowInternalUserLoginEnabled() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
- getAuthConfig() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
- getAuthConfigProviders() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
- getAuthProviders() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
- getAuthProviderSsoDomainUrl(communityUrl, startUrl, developerName) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
- getAuthProviderSsoUrl(communityUrl, startUrl, developerName) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
- getBackgroundColor() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
- getCertificateLoginEnabled(domainUrl) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_AuthConfiguration.htm)
