---
title: "CommunitiesUtil Methods"
domain: apex-reference
topic: communitiesutil-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.241Z
keywords: [CommunitiesUtil, Methods, Returns, page, display, after, current, Experience, Cloud, user, logs, out., getLogoutUrl, Signature, Return, Value, getUserDisplayName, isGuestUser, isInternalUser]
---

# CommunitiesUtil Methods

> Returns the page to display after the current Experience
   Cloud user logs out.

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