---
title: "CommunitiesUtil Class"
domain: apex-reference
topic: communitiesutil-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.159Z
estimatedTokens: 741
namespace: Auth
keywords: [CommunitiesUtil, getting, Experience, Cloud, user, getLogoutUrl, getUserDisplayName, isGuestUser, isInternalUser]
---

# CommunitiesUtil Class

> Contains methods for getting information about an
      Experience  Cloud user.

**Namespace:** `Auth`

# CommunitiesUtil Class

Contains methods for getting information about an Experience Cloud user.

## Namespace

[Auth](atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm "The Auth namespace provides an interface and classes for single sign-on into Salesforce and session security management.")

## Example

The following example directs a guest (unauthenticated) user to one page, and authenticated users of the Experience Cloud site’s parent organization to another page.

```

```

## CommunitiesUtil Methods

The following are methods for CommunitiesUtil. All methods are static.

-   **[getLogoutUrl()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm#apex_Auth_CommunitiesUtil_getLogoutUrl)**
    Returns the page to display after the current Experience Cloud user logs out.
-   **[getUserDisplayName()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm#apex_Auth_CommunitiesUtil_getUserDisplayName)**
    Returns the current user’s Experience Cloud display name.
-   **[isGuestUser()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm#apex_Auth_CommunitiesUtil_isGuestUser)**
    Indicates whether the current user isn’t logged in to the Experience Cloud site. Redirect the user to log in, if necessary.
-   **[isInternalUser()](atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm#apex_Auth_CommunitiesUtil_isInternalUser)**
    Indicates whether the current user is logged in as a member of the parent Salesforce organization, such as an employee.

### getLogoutUrl()

Returns the page to display after the current Experience Cloud user logs out.

#### Signature

public static String getLogoutUrl()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getUserDisplayName()

Returns the current user’s Experience Cloud display name.

#### Signature

public static String getUserDisplayName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### isGuestUser()

Indicates whether the current user isn’t logged in to the Experience Cloud site. Redirect the user to log in, if necessary.

#### Signature

public static Boolean isGuestUser()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isInternalUser()

Indicates whether the current user is logged in as a member of the parent Salesforce organization, such as an employee.

#### Signature

public static Boolean isInternalUser()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Code Examples

```
if (Auth.CommunitiesUtil.isGuestUser())
    // Redirect to the login page if user is an unauthenticated user
    return new PageReference(LOGIN_URL);       

if (Auth.CommunitiesUtil.isInternalUser())
    // Redirect to the home page if user is an internal user
    return new PageReference(HOME_URL);
```

## Related Topics

- Auth (atlas.en-us.apexref.meta/apexref/apex_namespace_Auth.htm)
- getLogoutUrl() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm)
- getUserDisplayName() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm)
- isGuestUser() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm)
- isInternalUser() (atlas.en-us.apexref.meta/apexref/apex_class_Auth_CommunitiesUtil.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
