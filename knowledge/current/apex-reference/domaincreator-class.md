---
title: "DomainCreator Class"
domain: apex-reference
topic: domaincreator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.121Z
estimatedTokens: 2407
namespace: System
keywords: [DomainCreator, hostname, specific, org., example, get, org’s, Visualforce, hostname., Values, returned, such, MyDomainName.lightning.force.com., Examples, getContentHostname, getExperienceCloudSitesBuilderHostname, getExperienceCloudSitesHostname, getExperienceCloudSitesLivePreviewHostname, getExperienceCloudSitesPreviewHostname, getLightningContainerComponentHostname]
---

# DomainCreator Class

> Use the DomainCreator class to return a hostname specific to the org.
      For example, get the org’s Visualforce hostname. Values are returned as a hostname, such as
        MyDomainName.lightning.force.com.

**Namespace:** `System`

# DomainCreator Class

Use the DomainCreator class to return a hostname specific to the org. For example, get the org’s Visualforce hostname. Values are returned as a hostname, such as MyDomainName.lightning.force.com.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Examples

This example code fetches the org’s My Domain login hostname and the Visualforce hostname for the uat package.

//Get the My Domain login hostname String myDomainHostname = DomainCreator.getOrgMyDomainHostname(); //Get the Visualforce hostname String vfHostname = DomainCreator.getVisualforceHostname('uat');

In this case, in a production org with a My Domain name of mycompany, myDomainHostname returns mycompany.my.salesforce.com. And in the same production org, vfHostname returns mycompany--uat.vf.force.com.

This example code creates a link to a Salesforce Account record. It gets the Lightning hostname associated with this org. It then gets the Account record ID and uses concatenation to build the link URL.

//Get the org’s Lightning hostname String myLightningHostname = DomainCreator.getLightningHostname(); //Get the ID of a record Account with the name ‘Acme’ Account acct = \[SELECT Id FROM Account WHERE Name = 'Acme' LIMIT 1\]; //Build the URL to view the account record String fullRecordURL = 'https://' + myLightningHostname + '/lightning/r/Account/' + acct.Id + '/view';

-   **[DomainCreator Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_methods)**


## DomainCreator Methods

The following are methods for DomainCreator.

-   **[getContentHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getContentHostname)**
    Returns the hostname for content stored in the org, such as files.
-   **[getExperienceCloudSitesBuilderHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesBuilderHostname)**
    Returns the hostname to access Experience Builder for the org’s Experience Cloud sites.
-   **[getExperienceCloudSitesHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesHostname)**
    Returns the system-managed hostname for the org’s Experience Cloud sites, such as ExperienceCloudSitesSubdomainName.force.com. If Digital Experiences aren’t enabled, this method throws an InvalidParameterValueException.
-   **[getExperienceCloudSitesLivePreviewHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesLivePreviewHostname)**
    Returns the hostname to access Experience Builder Live Preview for the org’s Experience Cloud sites.
-   **[getExperienceCloudSitesPreviewHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getExperienceCloudSitesPreviewHostname)**
    Returns the hostname to access Experience Builder Preview for the org’s Experience Cloud sites.
-   **[getLightningContainerComponentHostname(packageName)](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getLightningContainerComponentHostname)**
    Returns the hostname for the org’s Lightning Container Components.
-   **[getLightningHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getLightningHostname)**
    Returns the hostname for the org’s Lightning pages.
-   **[getOrgMyDomainHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getOrgMyDomainHostname)**
    Returns the hostname for the org’s My Domain login domain.
-   **[getSalesforceSitesHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getSalesforceSitesHostname)**
    Returns the hostname for the org’s Salesforce Sites. If Salesforce Sites aren’t enabled, this method throws an InvalidParameterValueException.
-   **[getSetupHostname()](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getSetupHostname)**
    Returns the hostname for the org’s setup domain, which hosts Setup pages in Salesforce.
-   **[getVisualforceHostname(packageName)](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_System_DomainCreator_getVisualforceHostname)**
    Returns the hostname for the org’s Visualforce pages.

### getContentHostname()

Returns the hostname for content stored in the org, such as files.

#### Signature

public static String getContentHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesBuilderHostname()

Returns the hostname to access Experience Builder for the org’s Experience Cloud sites.

#### Signature

public static String getExperienceCloudSitesBuilderHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesHostname()

Returns the system-managed hostname for the org’s Experience Cloud sites, such as ExperienceCloudSitesSubdomainName.force.com. If Digital Experiences aren’t enabled, this method throws an InvalidParameterValueException.

#### Signature

public static String getExperienceCloudSitesHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesLivePreviewHostname()

Returns the hostname to access Experience Builder Live Preview for the org’s Experience Cloud sites.

#### Signature

public static String getExperienceCloudSitesLivePreviewHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getExperienceCloudSitesPreviewHostname()

Returns the hostname to access Experience Builder Preview for the org’s Experience Cloud sites.

#### Signature

public static String getExperienceCloudSitesPreviewHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningContainerComponentHostname(packageName)

Returns the hostname for the org’s Lightning Container Components.

#### Signature

public static String getLightningContainerComponentHostname(String packageName)

#### Parameters

packageName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The package name for this component.

If packageName is null, this method uses the org’s namespace prefix as the package name. Otherwise, it uses the default namespace.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLightningHostname()

Returns the hostname for the org’s Lightning pages.

#### Signature

public static String getLightningHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOrgMyDomainHostname()

Returns the hostname for the org’s My Domain login domain.

#### Signature

public static String getOrgMyDomainHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSalesforceSitesHostname()

Returns the hostname for the org’s Salesforce Sites. If Salesforce Sites aren’t enabled, this method throws an InvalidParameterValueException.

#### Signature

public static String getSalesforceSitesHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSetupHostname()

Returns the hostname for the org’s setup domain, which hosts Setup pages in Salesforce.

#### Signature

public static String getSetupHostname()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getVisualforceHostname(packageName)

Returns the hostname for the org’s Visualforce pages.

#### Signature

public static String getVisualforceHostname(String packageName)

#### Parameters

packageName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The package name for this component.

If packageName is null, this method uses the org’s namespace prefix as the package name. Otherwise, it uses the default namespace.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- DomainCreator Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getContentHostname() (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getExperienceCloudSitesBuilderHostname() (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getExperienceCloudSitesHostname() (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getExperienceCloudSitesLivePreviewHostname() (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getExperienceCloudSitesPreviewHostname() (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getLightningContainerComponentHostname(packageName) (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getLightningHostname() (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- getOrgMyDomainHostname() (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
