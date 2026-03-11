---
title: "URL Constructors"
domain: apex-reference
topic: url-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.020Z
keywords: [URL, Constructors, Creates, new, instance, class, specified, string, representation, URL., Url, spec, Signature, Parameters, context, Usage, protocol, host, file, port]
---

# URL Constructors

> Creates a new instance of the URL class using the specified string representation of the
URL.

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