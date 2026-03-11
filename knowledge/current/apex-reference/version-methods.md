---
title: "Version Methods"
domain: apex-reference
topic: version-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:42.047Z
keywords: [Version, Methods, Compares, current, version, specified, version., compareTo, Signature, Parameters, Return, Value, Usage, major, minor, patch]
---

# Version Methods

> Compares the current version with the specified version.

## Version Methods

The following are methods for Version. All are instance methods.

-   **[compareTo(version)](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_compareTo)**  
    Compares the current version with the specified version.
-   **[major()](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_major)**  
    Returns the major package version of the of the calling code.
-   **[minor()](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_minor)**  
    Returns the minor package version of the calling code.
-   **[patch()](atlas.en-us.apexref.meta/apexref/apex_methods_system_version.htm#apex_System_Version_patch)**  
    Returns the patch package version of the calling code or null if there is no patch version.

### compareTo(version)

Compares the current version with the specified version.

#### Signature

public Integer compareTo(System.Version version)

#### Parameters

version

Type: [System.Version](#apex_methods_system_version "Use the Version methods to get the version of a first-generation managed package (1GP) or a migrated second-generation managed package (2GP), and to compare package versions.")

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Returns one of the following values:

-   zero if the current package version is equal to the specified package version
-   an Integer value greater than zero if the current package version is greater than the specified package version
-   an Integer value less than zero if the current package version is less than the specified package version

#### Usage

If a two-part version is being compared to a three-part version, the patch number is ignored and the comparison is based only on the major and minor numbers.

### major()

Returns the major package version of the of the calling code.

#### Signature

public Integer major()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### minor()

Returns the minor package version of the calling code.

#### Signature

public Integer minor()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### patch()

Returns the patch package version of the calling code or null if there is no patch version.

#### Signature

public Integer patch()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")