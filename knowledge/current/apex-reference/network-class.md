---
title: "Network Class"
domain: apex-reference
topic: network-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.989Z
estimatedTokens: 3181
namespace: System
keywords: [Network, Asynchronously, creates, Experience, Cloud, site, user, account, contact, associates, processes, requests, batches, email, login]
---

# Network Class

> Asynchronously creates an Experience Cloud site user for the given
      account or contact and associates it with the site. This method processes requests in batches
      and then sends an email with login information to the user.

**Namespace:** `System`

# Network Class

Manage Experience Cloud sites.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

-   **[Network Constructors](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_constructors)**
    Create an instance of the System.Network class.
-   **[Network Methods](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_methods)**
    Get the default landing page, login page, and self-registration page of a site. Asynchronously create site users and records. Get the login and logout URLs for a site. Get a user’s current site. Map dashboards and Insights reports.

## Network Constructors

Create an instance of the System.Network class.

The following are constructors for Network.

-   **[Network()](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_ctor)**
    Creates a new instance of the System.Network class.

### Network()

Creates a new instance of the System.Network class.

#### Signature

public Network()

## Network Methods

Get the default landing page, login page, and self-registration page of a site. Asynchronously create site users and records. Get the login and logout URLs for a site. Get a user’s current site. Map dashboards and Insights reports.

The following are methods for Network. All methods are static.

-   **[communitiesLanding()](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_communitiesLanding)**
    Returns a Page Reference to the default landing page for the Experience Cloud site. This is the first tab of the site.
-   **[createExternalUserAsync(user, contact, account)](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_createExternalUserAsync)**
    Asynchronously creates an Experience Cloud site user for the given account or contact and associates it with the site. This method processes requests in batches and then sends an email with login information to the user.
-   **[createRecordAsync(processType, mbObject)](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_createRecordAsync)**
    Asynchronously creates case, lead, and custom object records. This method collects record creation requests and processes them in batches.
-   **[forwardToAuthPage(startURL)](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_forwardToAuthPage)**
    Returns a Page Reference to the default login page. StartURL is included as a query paremeter for where to redirect after a successful login.
-   **[getLoginUrl(networkId)](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_getLoginUrl)**
    Returns the absolute URL of the login page used by the Experience Cloud site.
-   **[getLogoutUrl(networkId)](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_getLogoutUrl)**
    Returns the absolute URL of the logout page used by the Experience Cloud site.
-   **[getNetworkId()](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_getNetworkId)**
    Returns the user’s current Experience Cloud site.
-   **[getSelfRegUrl(networkId)](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_getSelfRegUrl)**
    Returns the absolute URL of the self-registration page used by the Experience Cloud site.
-   **[loadAllPackageDefaultNetworkDashboardSettings()](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_loadAllPackageDefaultNetworkDashboardSettings)**
    Maps the dashboards from the Salesforce Communities Management package onto each Experience Cloud site’s unconfigured dashboard settings. Returns the number of settings it configures.
-   **[loadAllPackageDefaultNetworkPulseSettings()](atlas.en-us.apexref.meta/apexref/apex_classes_network.htm#apex_System_Network_loadAllPackageDefaultNetworkPulseSettings)**
    Maps the Insights reports from the Salesforce Communities Management package onto each Experience Cloud site’s unconfigured Insights settings. Returns the number of settings it configures.

### communitiesLanding()

Returns a Page Reference to the default landing page for the Experience Cloud site. This is the first tab of the site.

#### Signature

public static String communitiesLanding()

#### Return Value

Type: [PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Usage

If digital experiences isn’t enabled for the user’s org or the user is currently in the internal org, returns null.

### createExternalUserAsync(user, contact, account)

Asynchronously creates an Experience Cloud site user for the given account or contact and associates it with the site. This method processes requests in batches and then sends an email with login information to the user.

#### Signature

public static String createExternalUserAsync(SObject user, SObject contact, SObject account)

#### Parameters

user

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") (optional)

Information required to create a user.

contact

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.") (optional)

The contact you want to associate the user with.

account

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The account you want to associate the user with.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Returns the UUID for the site user.

### createRecordAsync(processType, mbObject)

Asynchronously creates case, lead, and custom object records. This method collects record creation requests and processes them in batches.

#### Signature

public static String createRecordAsync(String processType, SObject mbObject)

#### Parameters

processType

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The process you use to create records.

mbObject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The records created for objects. Objects must be supported by the high-volume record creation.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Returns the UUID for the record created.

### forwardToAuthPage(startURL)

Returns a Page Reference to the default login page. StartURL is included as a query paremeter for where to redirect after a successful login.

#### Signature

public static PageReference forwardToAuthPage(String startURL)

#### Parameters

startURL

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [PageReference](atlas.en-us.apexref.meta/apexref/apex_system_pagereference.htm "A PageReference is a reference to an instantiation of a page. Among other attributes, PageReferences consist of a URL and a set of query parameter names and values.")

#### Usage

If digital experiences isn’t enabled for the user’s org or the user is currently in the internal org, returns null.

### getLoginUrl(networkId)

Returns the absolute URL of the login page used by the Experience Cloud site.

#### Signature

public static String getLoginUrl(String networkId)

#### Parameters

networkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the Experience Cloud site you’re retrieving this information for.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns the full URL for the Lightning Platform or Experience Builder page used as the login page in the Experience Cloud site.

### getLogoutUrl(networkId)

Returns the absolute URL of the logout page used by the Experience Cloud site.

#### Signature

public static String getLogoutUrl(String networkId)

#### Parameters

networkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the Experience Cloud site you’re retrieving this information for.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns the full URL for the Lightning Platform page, Experience Builder page, or Web page used as the logout page in the Experience Cloud site.

### getNetworkId()

Returns the user’s current Experience Cloud site.

#### Signature

public static String getNetworkId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

If digital experiences isn’t enabled for the user’s org or the user is currently in the internal org, returns null.

### getSelfRegUrl(networkId)

Returns the absolute URL of the self-registration page used by the Experience Cloud site.

#### Signature

public static String getSelfRegUrl(String networkId)

#### Parameters

networkId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the Experience Cloud site you’re retrieving this information for.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns the full URL for the Lightning Platform or Experience Builder page used as the self-registration page in the Experience Cloud site.

### loadAllPackageDefaultNetworkDashboardSettings()

Maps the dashboards from the Salesforce Communities Management package onto each Experience Cloud site’s unconfigured dashboard settings. Returns the number of settings it configures.

#### Signature

public static Integer loadAllPackageDefaultNetworkDashboardSettings()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If digital experiences is enabled, and the Salesforce Communities Management package is installed, maps the dashboards provided in the package onto each Experience Cloud site’s unconfigured dashboard settings. Returns the number of settings it configures. This method is invoked automatically during site creation and package installation, but isn’t typically invoked manually.

If digital experiences isn’t enabled for the user’s org or the user is in the internal org, returns 0.

### loadAllPackageDefaultNetworkPulseSettings()

Maps the Insights reports from the Salesforce Communities Management package onto each Experience Cloud site’s unconfigured Insights settings. Returns the number of settings it configures.

#### Signature

public static Integer loadAllPackageDefaultNetworkPulseSettings()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

If digital experiences is enabled, and the Salesforce Communities Management package is installed, maps the Insights reports provided in the package onto each Experience Cloud site’s unconfigured Insights settings. Returns the number of settings it configures. This method is invoked automatically during site creation and package installation, but isn’t typically invoked manually.

If digital experiences isn’t enabled for the user’s org or the user is in the internal org, returns 0.

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Network Constructors (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- Network Methods (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- Network() (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- communitiesLanding() (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- createExternalUserAsync(user, contact, account) (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- createRecordAsync(processType, mbObject) (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- forwardToAuthPage(startURL) (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- getLoginUrl(networkId) (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
- getLogoutUrl(networkId) (atlas.en-us.apexref.meta/apexref/apex_classes_network.htm)
