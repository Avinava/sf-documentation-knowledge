---
title: "parse(url)"
domain: apex-reference
topic: parseurl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.364Z
keywords: [parse, url, Parses, passed, uniform, resource, locator, URL, domain, Salesforce, hosts, org, returns, System.Domain., Signature, Parameters, Return, Value]
---

# parse(url)

> Parses a passed uniform resource locator (URL) of a domain that
      Salesforce hosts for the org, and returns the System.Domain.

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