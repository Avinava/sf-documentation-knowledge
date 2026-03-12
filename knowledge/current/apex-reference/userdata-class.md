---
title: "UserData Class"
domain: apex-reference
topic: userdata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.340Z
estimatedTokens: 4735
namespace: Auth
keywords: [UserData, Stores, user, authentication, provider, registration, handlers, including, implement, Auth.RegistrationHandler, built, Flow, Builder, Usage, identifier]
---

# UserData Class

> Stores user information for authentication provider registration handlers, including
    handlers that implement the Auth.RegistrationHandler
    interface and handlers built using Flow Builder.

**Namespace:** `Auth`

# UserData Class

Stores user information for authentication provider registration handlers, including handlers that implement the Auth.RegistrationHandler interface and handlers built using Flow Builder.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Usage

For more information about using this class with the Auth.RegistrationHandler interface, see [Storing User Information and Getting Access Tokens](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_auth_plugin.htm#apex_auth_plugin_part2) in the RegistrationHandler Interface documentation.

For more information about using this class as an Apex-defined variable in a user registration flow, see [Example: Authentication Provider Registration Handler Flow](https://help.salesforce.com/s/articleView?id=xcloud.sso_flow_registration_handler_example.htm&language=en_US) in Salesforce Help

-   **[UserData Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_constructors)**

-   **[UserData Properties](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_properties)**


## UserData Constructors

The following are constructors for UserData.

-   **[UserData(identifier, firstName, lastName, fullName, email, link, userName, locale, provider, siteLoginUrl, attributeMap)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_ctor)**
    Creates a new instance of the Auth.UserData class using the specified arguments.
-   **[UserData(identifier, firstName, lastName, fullName, email, link, username, locale, provider, siteLoginUrl, attributeMap, idToken, userInfoJSONString)](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#unique_53055439)**
    Creates an instance of the Auth.UserData class that includes the ID token and user info response from the identity provider, if returned during single sign-on.

### UserData(identifier, firstName, lastName, fullName, email, link, userName, locale, provider, siteLoginUrl, attributeMap)

Creates a new instance of the Auth.UserData class using the specified arguments.

#### Signature

public UserData(String identifier, String firstName, String lastName, String fullName, String email, String link, String userName, String locale, String provider, String siteLoginUrl, Map<String,String\> attributeMap)

#### Parameters

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An identifier from the third party for the authenticated user, such as the Facebook user number or the Salesforce user ID.

firstName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The first name of the authenticated user, according to the third party.

lastName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The last name of the authenticated user, according to the third party.

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The full name of the authenticated user, according to the third party.

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The email address of the authenticated user, according to the third party.

link

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A stable link for the authenticated user such as https://www.facebook.com/MyUsername.

userName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The username of the authenticated user in the third party.

locale

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The standard locale string for the authenticated user.

provider

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The service used to log in, such as Facebook or Janrain.

siteLoginUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The site login page URL passed in if used with a site; null otherwise.

attributeMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A map of data from the third party, in case the handler has to access non-standard values. For example, when using Janrain as a provider, the fields Janrain returns in its accessCredentials dictionary are placed into the attributeMap. These fields vary by provider.

### UserData(identifier, firstName, lastName, fullName, email, link, username, locale, provider, siteLoginUrl, attributeMap, idToken, userInfoJSONString)

Creates an instance of the Auth.UserData class that includes the ID token and user info response from the identity provider, if returned during single sign-on.

#### Signature

public UserData(String identifier, String firstName, String lastName, String fullName, String email, String link, String username, String locale, String provider, String siteLoginUrl, Map<String,String> attributeMap, String idToken, String userInfoJSONString)

#### Parameters

identifier

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An identifier from the third party for the authenticated user, such as the Facebook user number or the Salesforce user ID.

firstName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The first name of the authenticated user, according to the third party.

lastName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The last name of the authenticated user, according to the third party.

fullName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The full name of the authenticated user, according to the third party.

email

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The email address of the authenticated user, according to the third party.

link

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A stable link for the authenticated user such as https://www.facebook.com/MyUsername.

username

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The username of the authenticated user in the third party.

locale

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The standard locale string for the authenticated user.

provider

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The service used to log in, such as Facebook or Janrain.

siteLoginUrl

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The site login page URL passed in if used with a site; null otherwise.

attributeMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A map of data from the third party, in case the handler has to access non-standard values. For example, when using Janrain as a provider, the fields Janrain returns in its accessCredentials dictionary are placed into the attributeMap. These fields vary by provider.

idToken

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If provided by the third party, the ID token, formatted as an encoded JWT. The ID token contains claims with information about the authenticated user.

userInfoJSONString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If provided by the third party, the user info response, formatted as a JSON object that has been serialized into a string.

## UserData Properties

The following are properties for UserData.

-   **[identifier](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_identifier)**
    An identifier from the third party for the authenticated user, such as the Facebook user number or the Salesforce user ID.
-   **[firstName](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_firstName)**
    The first name of the authenticated user, according to the third party.
-   **[lastName](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_lastName)**
    The last name of the authenticated user, according to the third party.
-   **[fullName](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_fullName)**
    The full name of the authenticated user, according to the third party.
-   **[email](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_email)**
    The email address of the authenticated user, according to the third party.
-   **[link](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_link)**
    A stable link for the authenticated user such as https://www.facebook.com/MyUsername.
-   **[username](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_username)**
    The username of the authenticated user in the third party.
-   **[locale](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_locale)**
    The standard locale string for the authenticated user.
-   **[provider](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_provider)**
    The service used to log in, such as Facebook or Janrain.
-   **[siteLoginUrl](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_siteLoginUrl)**
    The site login page URL passed in if used with a site; null otherwise.
-   **[attributeMap](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_attributeMap)**
    A map of data from the third party, in case the handler has to access non-standard values. For example, when using Janrain as a provider, the fields Janrain returns in its accessCredentials dictionary are placed into the attributeMap. These fields vary by provider.
-   **[idToken](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_idToken)**
    If provided, the ID token from the third party, formatted as an encoded JWT. The ID token contains claims with information about the authenticated user.
-   **[userInfoJSONString](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_userInfoJSONString)**
    If provided, the user info response from the third party. The user info response is a JSON object containing user attributes. When used in this property, the JSON object is serialized into a string.
-   **[idTokenJSONString](atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm#apex_Auth_UserData_idTokenJSONString)**
    If provided, the ID token from the third party. The ID token is formatted as a JSON Web Token (JWT) containing claims with information about the user. When used in this property, the ID token is serialized into a string.

### identifier

An identifier from the third party for the authenticated user, such as the Facebook user number or the Salesforce user ID.

#### Signature

public String identifier {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### firstName

The first name of the authenticated user, according to the third party.

#### Signature

public String firstName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### lastName

The last name of the authenticated user, according to the third party.

#### Signature

public String lastName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### fullName

The full name of the authenticated user, according to the third party.

#### Signature

public String fullName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### email

The email address of the authenticated user, according to the third party.

#### Signature

public String email {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### link

A stable link for the authenticated user such as https://www.facebook.com/MyUsername.

#### Signature

public String link {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### username

The username of the authenticated user in the third party.

#### Signature

public String username {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### locale

The standard locale string for the authenticated user.

#### Signature

public String locale {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### provider

The service used to log in, such as Facebook or Janrain.

#### Signature

public String provider {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### siteLoginUrl

The site login page URL passed in if used with a site; null otherwise.

#### Signature

public String siteLoginUrl {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### attributeMap

A map of data from the third party, in case the handler has to access non-standard values. For example, when using Janrain as a provider, the fields Janrain returns in its accessCredentials dictionary are placed into the attributeMap. These fields vary by provider.

#### Signature

public Map<String, String\> attributeMap {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### idToken

If provided, the ID token from the third party, formatted as an encoded JWT. The ID token contains claims with information about the authenticated user.

#### Signature

public String idToken {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### userInfoJSONString

If provided, the user info response from the third party. The user info response is a JSON object containing user attributes. When used in this property, the JSON object is serialized into a string.

#### Signature

public String userInfoJSONString {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### idTokenJSONString

If provided, the ID token from the third party. The ID token is formatted as a JSON Web Token (JWT) containing claims with information about the user. When used in this property, the ID token is serialized into a string.

#### Signature

public String idTokenJSONString {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- UserData Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
- UserData Properties (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
- UserData(identifier, firstName, lastName, fullName, email, link, userName, locale, provider, siteLoginUrl, attributeMap) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
- UserData(identifier, firstName, lastName, fullName, email, link, username, locale, provider, siteLoginUrl, attributeMap, idToken, userInfoJSONString) (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- identifier (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
- firstName (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
- lastName (atlas.en-us.apexref.meta/apexref/apex_class_Auth_UserData.htm)
