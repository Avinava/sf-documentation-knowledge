---
title: "getLightningContainerComponentHostname(packageName)"
domain: apex-reference
topic: getlightningcontainercomponenthostnamepackagename
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.360Z
keywords: [getLightningContainerComponentHostname, packageName, Returns, hostname, org’s, Lightning, Container, Components., Signature, Parameters, Return, Value]
---

# getLightningContainerComponentHostname(packageName)

> Returns the hostname for the org’s Lightning Container
      Components.

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