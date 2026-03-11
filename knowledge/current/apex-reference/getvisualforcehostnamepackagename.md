---
title: "getVisualforceHostname(packageName)"
domain: apex-reference
topic: getvisualforcehostnamepackagename
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.360Z
keywords: [getVisualforceHostname, packageName, Returns, hostname, org’s, Visualforce, pages., Signature, Parameters, Return, Value]
---

# getVisualforceHostname(packageName)

> Returns the hostname for the org’s Visualforce pages.

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