---
title: "UserInfo Class"
domain: apex-reference
topic: userinfo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.551Z
estimatedTokens: 4193
namespace: TypeException
keywords: [UserInfo, preferred, theme, current, user, getCurrentUvid, getDefaultCurrency, Usage, getFirstName, getLanguage, getLastName, getLocale, getName, getOrganizationId, getOrganizationName]
---

# UserInfo Class

> Returns the preferred theme for the current user.

**Namespace:** `TypeException`

# UserInfo Class

Contains methods for obtaining information about the context user.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## UserInfo Methods

The following are methods for UserInfo. All methods are static.

-   **[getCurrentUvid()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getCurrentUvid)**
    Returns the context guest user’s unique visitor ID (UVID).
-   **[getDefaultCurrency()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getDefaultCurrency)**
    Returns the context user's default currency code for multiple currency organizations or the organization's currency code for single currency organizations.
-   **[getFirstName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getFirstName)**
    Returns the context user's first name
-   **[getLanguage()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getLanguage)**
    Returns the context user's language
-   **[getLastName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getLastName)**
    Returns the context user's last name
-   **[getLocale()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getLocale)**
    Returns the context user's locale.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getName)**
    Returns the context user's full name. The format of the name depends on the language preferences specified for the organization.
-   **[getOrganizationId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getOrganizationId)**
    Returns the context organization's ID.
-   **[getOrganizationName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getOrganizationName)**
    Returns the context organization's company name.
-   **[getProfileId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getProfileId)**
    Returns the context user's profile ID.
-   **[getSessionId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getSessionId)**
    Returns the session ID for the current session.
-   **[getTimeZone()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getTimeZone)**
    Returns the current user’s local time zone.
-   **[getUiTheme()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUiTheme)**
    Returns the preferred theme for the current user. Use getUiThemeDisplayed to determine the theme actually displayed to the current user.
-   **[getUiThemeDisplayed()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUiThemeDisplayed)**
    Returns the theme being displayed for the current user.
-   **[getUserEmail()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserEmail)**
    Returns the current user’s email address.
-   **[getUserId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserId)**
    Returns the context user's ID
-   **[getUserName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserName)**
    Returns the context user's login name.
-   **[getUserRoleId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserRoleId)**
    Returns the context user's role ID.
-   **[getUserType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_getUserType)**
    Returns the context user's type.
-   **[hasPackageLicense(packageId)](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#hasPackageLicense)**
    Returns true if the context user has a license to the managed package via a package license only. Otherwise, returns false.
-   **[isCurrentUserLicensed(namespace)](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isCurrentUserLicensed)**
    Returns true if the context user has a license to any managed package denoted by the namespace. Otherwise, returns false.
-   **[isCurrentUserLicensedForPackage(packageID)](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isCurrentUserLicensedForPackage)**
    Returns true if the context user has a license to the managed package denoted by the package ID. Otherwise, returns false. If the context user has access, it’s determined either via the package license or a namespace permission set license for the package namespace.
-   **[isMultiCurrencyOrganization()](atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm#apex_System_UserInfo_isMultiCurrencyOrganization)**
    Specifies whether the organization uses multiple currencies.

### getCurrentUvid()

Returns the context guest user’s unique visitor ID (UVID).

#### Signature

public static String getCurrentUvid()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If a UVID isn’t available, returns null.

### getDefaultCurrency()

Returns the context user's default currency code for multiple currency organizations or the organization's currency code for single currency organizations.

#### Signature

public static String getDefaultCurrency()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

For Apex saved using Salesforce API version 22.0 or earlier, getDefaultCurrency returns null for single currency organizations.

### getFirstName()

Returns the context user's first name

#### Signature

public static String getFirstName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLanguage()

Returns the context user's language

#### Signature

public static String getLanguage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLastName()

Returns the context user's last name

#### Signature

public static String getLastName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLocale()

Returns the context user's locale.

#### Signature

public static String getLocale()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### getName()

Returns the context user's full name. The format of the name depends on the language preferences specified for the organization.

#### Signature

public static String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

The format is one of the following:

-   FirstName LastName
-   LastName, FirstName

### getOrganizationId()

Returns the context organization's ID.

#### Signature

public static String getOrganizationId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOrganizationName()

Returns the context organization's company name.

#### Signature

public static String getOrganizationName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getProfileId()

Returns the context user's profile ID.

#### Signature

public static String getProfileId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSessionId()

Returns the session ID for the current session.

#### Signature

public static String getSessionId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

You can use getSessionId() both synchronously and asynchronously. In asynchronous Apex (Batch, Future, Queueable, or Scheduled Apex), this method returns the session ID only when the code is run by an active, valid user. When the code is run by an internal user, such as the automated process user or a proxy user, the method returns null.

As a best practice, ensure that your code handles both cases: when a session ID is or is not available.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If you use a JWT-based access token for session authentication, you can’t use UserInfo.getSessionId(). To use UserInfo.getSessionId(), use an opaque access token instead. Ensure that the “Issue JSON Web Token (JWT)-based access tokens for named users” setting isn’t selected for your external client app or connected app.

### getTimeZone()

Returns the current user’s local time zone.

#### Signature

public static System.TimeZone getTimeZone()

#### Return Value

Type: [System.TimeZone](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_methods_system_timezone "Represents a time zone. Contains methods for creating a new time zone and obtaining time zone properties, such as the time zone ID, offset, and display name.")

#### Example

```

```

### getUiTheme()

Returns the preferred theme for the current user. Use getUiThemeDisplayed to determine the theme actually displayed to the current user.

#### Signature

public static String getUiTheme()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The preferred theme for the current user.

Valid values include:

-   Theme1—Obsolete Salesforce theme
-   Theme2—Salesforce Classic 2005 user interface theme
-   Theme3—Salesforce Classic 2010 user interface theme
-   Theme4d—Modern “Lightning Experience” Salesforce theme
-   Theme4t—Salesforce mobile app theme
-   Theme4u—Lightning Console theme
-   PortalDefault—Salesforce Customer Portal theme that applies to Customer Portals only and not to Experience Builder sites
-   Webstore—AppExchange theme

### getUiThemeDisplayed()

Returns the theme being displayed for the current user.

#### Signature

public static String getUiThemeDisplayed()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The theme being displayed for the current user

Valid values include:

-   Theme1—Obsolete Salesforce theme
-   Theme2—Salesforce Classic 2005 user interface theme
-   Theme3—Salesforce Classic 2010 user interface theme
-   Theme4d—Modern “Lightning Experience” Salesforce theme
-   Theme4t—Salesforce mobile app theme
-   Theme4u—Lightning Console theme
-   PortalDefault—Salesforce Customer Portal theme that applies to Customer Portals only and not to Experience Builder sites
-   Webstore—AppExchange theme

### getUserEmail()

Returns the current user’s email address.

#### Signature

public static String getUserEmail()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### getUserId()

Returns the context user's ID

#### Signature

public static String getUserId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserName()

Returns the context user's login name.

#### Signature

public static String getUserName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserRoleId()

Returns the context user's role ID.

#### Signature

public static String getUserRoleId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserType()

Returns the context user's type.

#### Signature

public static String getUserType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### hasPackageLicense(packageId)

Returns true if the context user has a license to the managed package via a package license only. Otherwise, returns false.

#### Signature

public static Boolean hasPackageLicense(ID packageID)

#### Parameters

packageID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isCurrentUserLicensed(namespace)

Returns true if the context user has a license to any managed package denoted by the namespace. Otherwise, returns false.

#### Signature

public static Boolean isCurrentUserLicensed(String namespace)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

A TypeException is thrown if namespace is an invalid type.

### isCurrentUserLicensedForPackage(packageID)

Returns true if the context user has a license to the managed package denoted by the package ID. Otherwise, returns false. If the context user has access, it’s determined either via the package license or a namespace permission set license for the package namespace.

#### Signature

public static Boolean isCurrentUserLicensedForPackage(ID packageID)

#### Parameters

packageID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

Retrieve packageID at runtime, with the [getCurrentPackageId()](atlas.en-us.apexref.meta/apexref/apex_class_system_Packaging.htm#apex_System_Packaging_getCurrentPackageId "Returns the context packageID in managed and unlocked packages.") method. Then, use packageId to confirm that the contextual user is licensed to use that managed package.

A TypeException is thrown if packageID is an invalid type or is the ID of an unlocked or unmanaged package.

#### See Also

-   [*Set Up and Maintain Your Salesforce Organization*: Manage Licenses for Installed Packages](https://help.salesforce.com/s/articleView?id=xcloud.distribution_managing_licenses.htm&type=5&language=en_US "Set Up and Maintain Your Salesforce Organization: Manage Licenses for Installed Packages - HTML (New Window)")


### isMultiCurrencyOrganization()

Specifies whether the organization uses multiple currencies.

#### Signature

public static Boolean isMultiCurrencyOrganization()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```apex
String result = UserInfo.getLocale();
System.assertEquals('en_US', result);
```

```apex
TimeZone tz = 
  UserInfo.getTimeZone();
System.debug(
  'Display name: ' + 
  tz.getDisplayName());
System.debug(
  'ID: ' + 
  tz.getID());
```

```apex
String emailAddress = 
  UserInfo.getUserEmail();
System.debug(
  'Email address: ' + 
  emailAddress);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- getCurrentUvid() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getDefaultCurrency() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getFirstName() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getLanguage() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getLastName() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getLocale() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getOrganizationId() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
- getOrganizationName() (atlas.en-us.apexref.meta/apexref/apex_methods_system_userinfo.htm)
