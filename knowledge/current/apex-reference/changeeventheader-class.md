---
title: "ChangeEventHeader Class"
domain: apex-reference
topic: changeeventheader-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.462Z
keywords: [ChangeEventHeader, Class, string, uniquely, identifies, Salesforce, transaction., key, identify, group, changes, were, made, same, transactionkey, Signature, Property, Value]
---

# ChangeEventHeader Class

> A string that uniquely identifies each Salesforce transaction. You can use this key to
    identify and group all changes that were made in the same transaction.

### transactionkey

A string that uniquely identifies each Salesforce transaction. You can use this key to identify and group all changes that were made in the same transaction.

#### Signature

public String transactionkey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")