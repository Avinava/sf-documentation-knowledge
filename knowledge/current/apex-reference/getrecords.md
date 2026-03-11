---
title: "getRecords()"
domain: apex-reference
topic: getrecords
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.521Z
keywords: [getRecords, Returns, list, new, sObjects, identical, source, records, except, they, stripped, fields, fail, field-level, security, check, current, user., Usage, Signature]
---

# getRecords()

> Returns a list of new sObjects that are identical to the source
      records, except that they are stripped of fields that fail the field-level security check for
      the current user.

### getRecords()

Returns a list of new sObjects that are identical to the source records, except that they are stripped of fields that fail the field-level security check for the current user.

#### Usage

The [stripInaccessible](atlas.en-us.apexref.meta/apexref/apex_class_System_Security.htm#apex_System_Security_stripInaccessible "Creates a list of sObjects from the source records, which are stripped of fields that fail the field-level security checks for the current user. The method also provides an option to enforce an object-level access check.") method performs field-level access check for the source records in the context of the current user’s operation. The getRecords() method returns the new records that contain only the fields that the current user has access to.

#### Signature

public List<SObject> getRecords()

#### Return Value

Type: [List<SObject>](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

Even if the result list contains only one sObject, the return type is still a list (of size one).

#### Example

In this example, the user doesn’t have permission to update the AnnualRevenue field of an Account.

```

```