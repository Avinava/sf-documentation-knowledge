---
title: "requestVersion()"
domain: apex-reference
topic: requestversion
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.928Z
keywords: [requestVersion, Returns, two-part, version, contains, major, minor, numbers, package., Applies, first-generation, managed, packages., Signature, Return, Value, Usage]
---

# requestVersion()

> Returns a two-part version that contains the major and minor
         version numbers of a package. Applies to first-generation managed
      packages.

### requestVersion()

Returns a two-part version that contains the major and minor version numbers of a package. Applies to first-generation managed packages.

#### Signature

public static System.Version requestVersion()

#### Return Value

Type: [System.Version](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_methods_system_version "Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.")

#### Usage

Using this method, you can determine the version of an installed instance of your package from which the calling code is referencing your package. Based on the version that the calling code has, you can customize the behavior of your package code. See [Version Apex Code Behavior](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_manpkgs_behavior.htm "HTML (New Window)") in the Apex Developer Guide.

The requestVersion method isn’t supported for unmanaged packages. If you call it from an unmanaged package, an exception will be thrown.