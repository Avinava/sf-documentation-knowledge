---
title: "URL Class"
domain: apex-reference
topic: url-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.472Z
estimatedTokens: 4607
namespace: System
keywords: [URL, canonical, org., example, https, MyDomainName.my.salesforce.com., Usage, Example, Versioned, Behavior, Changes, Url, spec, context, protocol, host, file, port, getAuthority, getCurrentRequestUrl]
---

# URL Class

> Returns the canonical URL for your org. For example,
          https://MyDomainName.my.salesforce.com.

**Namespace:** `System`

# URL Class

Represents a uniform resource locator (URL) and provides access to parts of the URL. Enables access to the base URL used to access your Salesforce org.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Use the methods of the System.URL class to create links to objects in your organization. Such objects can be files, images, logos, or records that you want to include in external emails, in activities, or in Chatter posts. For example, you can create a link to a file uploaded as an attachment to a Chatter post by concatenating the Salesforce base URL with the file ID:

```

```

The following example creates a link to a Salesforce record. The full URL is created by concatenating the Salesforce base URL with the record ID.

```

```

## Example

In this example, the base URL and the full request URL of the current Salesforce server instance are retrieved. Next, a URL pointing to a specific account object is created. Finally, components of the base and full URL are obtained. This example prints out all the results to the debug log output.

```

```

## Versioned Behavior Changes

In API version 41.0 and later, Apex URL objects are represented by the java.net.URI type, not the java.net.URL type. The API version in which the URL object was instantiated determines the behavior of subsequent method calls to the specific instance. Salesforce strongly encourages you to use API 41.0 and later versions for fully RFC-compliant URL parsing that includes proper handling of edge cases of complex URL structures. API 41.0 and later versions also enforce that inputs are valid, RFC-compliant URL or URI strings.

-   **[URL Constructors](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_constructors)**

-   **[URL Methods](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_URL_methods)**


#### See Also

-   [DomainCreator Class](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm#apex_class_System_DomainCreator "Use the DomainCreator class to return a hostname specific to the org. For example, get the org’s Visualforce hostname. Values are returned as a hostname, such as MyDomainName.lightning.force.com.")


## URL Constructors

The following are constructors for URL.

-   **[Url(spec)](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_Url_ctor_4)**
    Creates a new instance of the URL class using the specified string representation of the URL.
-   **[Url(context, spec)](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_Url_ctor_3)**
    Creates a new instance of the URL class by parsing the specified spec within the specified context.
-   **[Url(protocol, host, file)](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_Url_ctor_2)**
    Creates a new instance of the URL class using the specified protocol, host, and file on the host. The default port for the specified protocol is used.
-   **[Url(protocol, host, port, file)](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_System_Url_ctor)**
    Creates a new instance of the URL class using the specified protocol, host, port, and file on the host.

### Url(spec)

Creates a new instance of the URL class using the specified string representation of the URL.

#### Signature

public Url(String spec)

#### Parameters

spec

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string to parse as a URL.

### Url(context, spec)

Creates a new instance of the URL class by parsing the specified spec within the specified context.

#### Signature

public Url(Url context, String spec)

#### Parameters

context

Type: [URL](#apex_methods_system_url "Represents a uniform resource locator (URL) and provides access to parts of the URL. Enables access to the base URL used to access your Salesforce org.")

The context in which to parse the specification.

spec

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The string to parse as a URL.

#### Usage

The new URL is created from the given context URL and the spec argument as described in RFC2396 "Uniform Resource Identifiers : Generic \* Syntax" :

```

```

For more information about the arguments of this constructor, see the corresponding [URL(java.net.URL, java.lang.String)](http://download.oracle.com/javase/6/docs/api/java/net/URL.html#URL%28java.net.URL,%20java.lang.String%29 "HTML (New Window)") constructor for Java.

### Url(protocol, host, file)

Creates a new instance of the URL class using the specified protocol, host, and file on the host. The default port for the specified protocol is used.

#### Signature

public Url(String protocol, String host, String file)

#### Parameters

protocol

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The protocol name for this URL.

host

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The host name for this URL.

file

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The file name for this URL.

### Url(protocol, host, port, file)

Creates a new instance of the URL class using the specified protocol, host, port, and file on the host.

#### Signature

public Url(String protocol, String host, Integer port, String file)

#### Parameters

protocol

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The protocol name for this URL.

host

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The host name for this URL.

port

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The port number for this URL.

file

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The file name for this URL.

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

## Code Examples

```apex
// Get a file uploaded through Chatter.
ContentDocument doc = [SELECT Id FROM ContentDocument 
          WHERE Title = 'myfile' WITH USER_MODE];
// Create a link to the file.
String fullFileURL = URL.getOrgDomainURL().toExternalForm() +
   '/' + doc.id;
System.debug(fullFileURL);
```

```
Account acct = [SELECT Id FROM Account WHERE Name = 'Acme' WITH USER_MODE LIMIT 1];
String fullRecordURL = URL.getOrgDomainURL().toExternalForm() + '/' + acct.Id;
```

```apex
// Create a new account called Acme that we will create a link for later.
Account myAccount = new Account(Name='Acme');
insert as user myAccount;

// Get the base URL.
String sfdcBaseURL = URL.getOrgDomainURL().toExternalForm();
System.debug('Base URL: ' + sfdcBaseURL );       

// Get the URL for the current request.
String currentRequestURL = URL.getCurrentRequestUrl().toExternalForm();
System.debug('Current request URL: ' + currentRequestURL);        

// Create the account URL from the base URL.
String accountURL = URL.getOrgDomainURL().toExternalForm() + 
                       '/' + myAccount.Id;
System.debug('URL of a particular account: ' + accountURL); 

// Get some parts of the base URL.
System.debug('Host: ' + URL.getOrgDomainURL().getHost());   
System.debug('Protocol: ' + URL.getOrgDomainURL().getProtocol());

// Get the query string of the current request.
System.debug('Query: ' + URL.getCurrentRequestUrl().getQuery());
```

```
<scheme>://<authority><path>?<query>#<fragment>
```

```
String fileURL = 
  URL.getFileFieldURL(
    '087000000000123' ,
    'AttachmentBody');
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- URL Constructors (atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm)
- URL Methods (atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm)
- DomainCreator Class (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainCreator.htm)
- Url(spec) (atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm)
- Url(context, spec) (atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm)
- Url(protocol, host, file) (atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm)
- Url(protocol, host, port, file) (atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
