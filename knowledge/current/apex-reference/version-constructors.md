---
title: "Version Constructors"
domain: apex-reference
topic: version-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.047Z
keywords: [Version, Constructors, Creates, new, instance, class, two-part, package, version, specified, major, minor, numbers., Signature, Parameters, patch]
---

# Version Constructors

> Creates a new instance of the Version class as a two-part package version using the specified
major and minor version numbers.

## Version Constructors

The following are constructors for Version.

-   **[Version(major, minor)](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_ctor_2)**  
    Creates a new instance of the Version class as a two-part package version using the specified major and minor version numbers.
-   **[Version(major, minor, patch)](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_ctor)**  
    Creates a new instance of the Version class as a three-part package version using the specified major, minor, and patch version numbers.

### Version(major, minor)

Creates a new instance of the Version class as a two-part package version using the specified major and minor version numbers.

#### Signature

public Version(Integer major, Integer minor)

#### Parameters

major

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The major version number.

minor

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The minor version number.

### Version(major, minor, patch)

Creates a new instance of the Version class as a three-part package version using the specified major, minor, and patch version numbers.

#### Signature

public Version(Integer major, Integer minor, Integer patch)

#### Parameters

major

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The major version number.

minor

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The minor version number.

patch

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The patch version number.