---
title: "URL Methods"
domain: apex-reference
topic: url-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.020Z
keywords: [URL, Methods, Returns, authority, portion, current, URL., getAuthority, Signature, Return, Value, getCurrentRequestUrl, Usage, getDefaultPort, getFile, getFileFieldURL, entityId, fieldName, Parameters, Example]
---

# URL Methods

> Returns the authority portion of the current URL.

## URL Methods

The following are methods for URL.

-   **[getAuthority()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getAuthority)**  
    Returns the authority portion of the current URL.
-   **[getCurrentRequestUrl()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getCurrentRequestUrl)**  
    Returns the URL of an entire request on a Salesforce instance.
-   **[getDefaultPort()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getDefaultPort)**  
    Returns the default port number of the protocol associated with the current URL.
-   **[getFile()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getFile)**  
    Returns the file name of the current URL.
-   **[getFileFieldURL(entityId, fieldName)](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getFileFieldURL)**  
    Returns the download URL for a file attachment.
-   **[getHost()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getHost)**  
    Returns the host name of the current URL.
-   **[getOrgDomainUrl()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_Url_getOrgDomainUrl)**  
    Returns the canonical URL for your org. For example, https://MyDomainName.my.salesforce.com.
-   **[getPath()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getPath)**  
    Returns the path portion of the current URL.
-   **[getPort()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getPort)**  
    Returns the port of the current URL.
-   **[getProtocol()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getProtocol)**  
    Returns the protocol name of the current URL, such as, https.
-   **[getQuery()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getQuery)**  
    Returns the query portion of the current URL.
-   **[getRef()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getRef)**  
    Returns the anchor of the current URL.
-   **[getSalesforceBaseUrl()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getSalesforceBaseUrl)**  
    In API version 59.0 and later, this method is deprecated and versioned out. Use getOrgDomainUrl() to get the canonical URL for your org or use getCurrentRequestUrl() to get the URL of an entire request on a Salesforce instance. Returns the URL of the current connection to the Salesforce org.
-   **[getUserInfo()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_getUserInfo)**  
    Gets the UserInfo portion of the current URL.
-   **[sameFile(URLToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_sameFile)**  
    Compares the current URL with the specified URL object, excluding the fragment component.
-   **[toExternalForm()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_toExternalForm)**  
    Returns a string representation of the current URL.

### getAuthority()

Returns the authority portion of the current URL.

#### Signature

public String getAuthority()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getCurrentRequestUrl()

Returns the URL of an entire request on a Salesforce instance.

#### Signature

public static System.URL getCurrentRequestUrl()

#### Return Value

Type: System.URL

#### Usage

An example of a URL for an entire request is https://yourInstance.salesforce.com/apex/myVfPage.apexp.

### getDefaultPort()

Returns the default port number of the protocol associated with the current URL.

#### Signature

public Integer getDefaultPort()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

Returns -1 if the URL scheme or the stream protocol handler for the URL doesn't define a default port number.

### getFile()

Returns the file name of the current URL.

#### Signature

public String getFile()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getFileFieldURL(entityId, fieldName)

Returns the download URL for a file attachment.

#### Signature

public static String getFileFieldURL(String entityId, String fieldName)

#### Parameters

entityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the ID of the entity that holds the file data.

fieldName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Specifies the API name of a file field component, such as AttachmentBody.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Example:

#### Example

```

```

### getHost()

Returns the host name of the current URL.

#### Signature

public String getHost()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOrgDomainUrl()

Returns the canonical URL for your org. For example, https://MyDomainName.my.salesforce.com.

#### Signature

public static System.Url getOrgDomainUrl()

#### Return Value

Type: System.URL

getOrgDomainUrl() always returns the login URL for your org, regardless of context. Use that URL when making API calls to your org.

#### Usage

Use getOrgDomainUrl() to interact with Salesforce REST and SOAP APIs in Apex code. Get endpoints for User Interface API calls, for creating and customizing picklist value sets and custom fields, and more.

getOrgDomainUrl() can access the domain URL only for the org in which the Apex code is running.

You don't need a RemoteSiteSetting for your org to interact with the Salesforce APIs using domain URLs retrieved with this method.

#### Example

This example uses the Salesforce REST API to get organization limit values. For information on limits, see [Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_limits.htm "HTML (New Window)") in the REST API Developer Guide.

```

```

#### See Also

-   [*Lightning Aura Components Developer Guide*: Making API Calls from Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/apex_api_calls.htm "Lightning Aura Components Developer Guide: Making API Calls from
    Apex - HTML (New Window)")
    
-   [*User Interface API Developer Guide*: Get Default Values to Clone a Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_record_defaults_clone.htm "User Interface API Developer Guide: Get Default Values to Clone a
    Record - HTML (New Window)")
    
-   [*User Interface API Developer Guide*: Get Values for a Picklist Field](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_picklist_values.htm "User Interface API Developer Guide: Get Values for a Picklist
    Field - HTML (New Window)")
    
-   [*User Interface API Developer Guide*: User Inteface API Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_resources_overview.htm "User Interface API Developer Guide: User Inteface API Resources - HTML (New Window)")
    

### getPath()

Returns the path portion of the current URL.

#### Signature

public String getPath()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getPort()

Returns the port of the current URL.

#### Signature

public Integer getPort()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getProtocol()

Returns the protocol name of the current URL, such as, https.

#### Signature

public String getProtocol()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getQuery()

Returns the query portion of the current URL.

#### Signature

public String getQuery()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns null if no query portion exists.

### getRef()

Returns the anchor of the current URL.

#### Signature

public String getRef()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns null if no query portion exists.

### getSalesforceBaseUrl()

In API version 59.0 and later, this method is deprecated and versioned out. Use getOrgDomainUrl() to get the canonical URL for your org or use getCurrentRequestUrl() to get the URL of an entire request on a Salesforce instance. Returns the URL of the current connection to the Salesforce org.

#### Signature

public static System.URL getSalesforceBaseUrl()

#### Return Value

Type: System.URL

Returns the URL for the current connection: for example, https://MyDomainName.my.salesforce.com or https://MyDomainName.lightning.force.com.

#### See Also

-   [getOrgDomainUrl()](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_Url_getOrgDomainUrl "Returns the canonical URL for your org. For example, https://MyDomainName.my.salesforce.com.")
    

### getUserInfo()

Gets the UserInfo portion of the current URL.

#### Signature

public String getUserInfo()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

Returns null if no UserInfo portion exists.

### sameFile(URLToCompare)

Compares the current URL with the specified URL object, excluding the fragment component.

#### Signature

public Boolean sameFile(System.URL URLToCompare)

#### Parameters

URLToCompare

Type: [System.URL](#apex_methods_system_url "Represents a uniform resource locator (URL) and provides access to parts of the URL. Enables access to the base URL used to access your Salesforce org.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if both URL objects reference the same remote resource; otherwise, returns false.

#### Usage

For more information about the syntax of URIs and fragment components, see [RFC3986](http://tools.ietf.org/html/rfc3986 "HTML (New Window)").

### toExternalForm()

Returns a string representation of the current URL.

#### Signature

public String toExternalForm()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")