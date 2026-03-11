---
title: "DMLOptions Class"
domain: apex-reference
topic: dmloptions-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.191Z
keywords: [DMLOptions, Class, Specifies, whether, operation, allows, partial, success., optAllOrNone, Signature, Property, Value, Usage]
---

# DMLOptions Class

> Specifies whether the operation allows for partial success.

### optAllOrNone

Specifies whether the operation allows for partial success.

#### Signature

public Boolean optAllOrNone {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Usage

If optAllOrNone is set to true, all changes are rolled back if any record causes errors. The default for this property is false and successfully processed records are committed while records with errors aren't. If optAllOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed.

This property is available in Apex saved against Salesforce API version 20.0 and later.