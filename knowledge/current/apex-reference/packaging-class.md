---
title: "Packaging Class"
domain: apex-reference
topic: packaging-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.683Z
estimatedTokens: 363
namespace: System
keywords: [Packaging, obtaining, managed, unlocked, packages, Usage, getCurrentPackageId]
---

# Packaging Class

> Contains a method for obtaining information about managed and
      unlocked packages.

**Namespace:** `System`

# Packaging Class

Contains a method for obtaining information about managed and unlocked packages.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

In the context of a package, use the getCurrentPackageId method to retrieve the packageID.

-   **[Packaging Methods](atlas.en-us.apexref.meta/apexref/apex_class_system_Packaging.htm#apex_System_Packaging_methods)**


## Packaging Methods

The following are methods for Packaging.

-   **[getCurrentPackageId()](atlas.en-us.apexref.meta/apexref/apex_class_system_Packaging.htm#apex_System_Packaging_getCurrentPackageId)**
    Returns the context packageID in managed and unlocked packages.

### getCurrentPackageId()

Returns the context packageID in managed and unlocked packages.

#### Signature

public String getCurrentPackageId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For managed packages, this method can be combined with [isCurrentUserLicensedForPackage(packageId)](#apex_System_Packaging_getCurrentPackageId "Returns the context packageID in managed and unlocked packages.") to retrieve the packageId at runtime. Then, use packageId to confirm that the contextual user is licensed to use that managed package.

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- Packaging Methods (atlas.en-us.apexref.meta/apexref/apex_class_system_Packaging.htm)
- getCurrentPackageId() (atlas.en-us.apexref.meta/apexref/apex_class_system_Packaging.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
