---
title: "Packaging Methods"
domain: apex-reference
topic: packaging-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.091Z
keywords: [Packaging, Methods, Returns, context, packageID, managed, unlocked, packages., getCurrentPackageId, Signature, Return, Value, Usage]
---

# Packaging Methods

> Returns the context packageID in managed and unlocked packages.

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