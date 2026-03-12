---
title: "DomainParser Class"
domain: apex-reference
topic: domainparser-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.579Z
estimatedTokens: 1217
namespace: System
keywords: [DomainParser, parse, domain, Salesforce, hosts, org, extract, Examples, hostname, url]
---

# DomainParser Class

> Use the DomainParser class to parse a domain that Salesforce hosts for
      the org and extract information about the domain.

**Namespace:** `System`

# DomainParser Class

Use the DomainParser class to parse a domain that Salesforce hosts for the org and extract information about the domain.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Examples

This example code parses the org’s Lightning domain and gets the My Domain name and domain type from the System.Domain object.

System.Domain d = DomainParser.parse('mycompany.lightning.force.com'); String myDomainName = d.getMyDomainName(); System.DomainType domainType = d.getDomainType();

This example code parses a known Visualforce URL to get the domain type, the org’s My Domain name, and the package name.

//Parse a known URL System.Domain domain = DomainParser.parse('https://mycompany--abcpackage.vf.force.com'); //Get the domain type System.DomainType domainType = domain.getDomainType(); // Returns VISUALFORCE\_DOMAIN //Get the org’s My Domain name String myDomainName = domain.getMyDomainName(); // Returns mycompany //Get the package name String packageName = domain.getPackageName(); // Returns abcpackage

-   **[DomainParser Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm#apex_System_DomainParser_methods)**


## DomainParser Methods

The following are methods for DomainParser.

-   **[parse(hostname)](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm#apex_System_DomainParser_parse)**
    Parses a passed hostname of a domain that Salesforce hosts for the org, and returns the System.Domain.
-   **[parse(url)](atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm#apex_System_DomainParser_parse_2)**
    Parses a passed uniform resource locator (URL) of a domain that Salesforce hosts for the org, and returns the System.Domain.

### parse(hostname)

Parses a passed hostname of a domain that Salesforce hosts for the org, and returns the [System.Domain](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_class_System_Domain "Represents an existing domain hosted by Salesforce that serves the org or its content. Contains methods to obtain information about these domains, such as the domain type, My Domain name, and sandbox name.").

#### Signature

public static System.Domain parse(String hostname)

#### Parameters

hostname

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label that identifies a Salesforce host, including all subdomains but without the protocol, path, or any parameters. For example, mycompany.my.site.com or mycompany--sandbox1.sandbox.my.salesforceforce.com.

If the hostname format is invalid, it isn’t a Salesforce hosted domain, or it isn’t owned by this org, this method throws an InvalidParameterValueException.

#### Return Value

Type: [System.Domain](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_class_System_Domain "Represents an existing domain hosted by Salesforce that serves the org or its content. Contains methods to obtain information about these domains, such as the domain type, My Domain name, and sandbox name.")

### parse(url)

Parses a passed uniform resource locator (URL) of a domain that Salesforce hosts for the org, and returns the [System.Domain](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_class_System_Domain "Represents an existing domain hosted by Salesforce that serves the org or its content. Contains methods to obtain information about these domains, such as the domain type, My Domain name, and sandbox name.").

#### Signature

public static System.Domain parse(System.Url url)

#### Parameters

url

Type: [System.Url](atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm#apex_methods_system_url "Represents a uniform resource locator (URL) and provides access to parts of the URL. Enables access to the base URL used to access your Salesforce org.")

A uniform resource locator (URL) for a Salesforce org, including all subdomains and the protocol. For example, https://mycompany--sandbox1.sandbox.my.salesforceforce.com.

The URL can also include paths and parameters. For example, https://mycompany.my.site.com/en/us/help or https://mycompany.file.force.com/servlet/servlet.FileDownload?file=015300000000xvU.

If the URL format is invalid, it isn’t a Salesforce hosted domain, or it isn’t owned by this org, this method throws an InvalidParameterValueException.

#### Return Value

Type: [System.Domain](atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm#apex_class_System_Domain "Represents an existing domain hosted by Salesforce that serves the org or its content. Contains methods to obtain information about these domains, such as the domain type, My Domain name, and sandbox name.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- DomainParser Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm)
- parse(hostname) (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm)
- parse(url) (atlas.en-us.apexref.meta/apexref/apex_class_System_DomainParser.htm)
- System.Domain (atlas.en-us.apexref.meta/apexref/apex_class_System_Domain.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- System.Url (atlas.en-us.apexref.meta/apexref/apex_methods_system_url.htm)
