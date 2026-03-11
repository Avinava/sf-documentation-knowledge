---
title: "parse(hostname)"
domain: apex-reference
topic: parsehostname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.364Z
keywords: [parse, hostname, Parses, passed, domain, Salesforce, hosts, org, returns, System.Domain., Signature, Parameters, Return, Value]
---

# parse(hostname)

> Parses a passed hostname of a domain that Salesforce hosts for the
      org, and returns the System.Domain.

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