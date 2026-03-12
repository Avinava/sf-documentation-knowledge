---
title: "EmailMergeFieldService Class"
domain: apex-reference
topic: emailmergefieldservice-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.145Z
estimatedTokens: 429
namespace: ConnectApi
keywords: [EmailMergeFieldService, Extract, list, merge, fields, object., field, put, email, template, mail, custom, link, formula, incorporate, values, record., getMergeFields, objectApiNames, API]
---

# EmailMergeFieldService Class

> Extract a list of merge fields for an object. A merge field is a field you can put in an
  email template, mail merge template, custom link, or formula to incorporate values from a
  record.

**Namespace:** `ConnectApi`

# EmailMergeFieldService Class

Extract a list of merge fields for an object. A merge field is a field you can put in an email template, mail merge template, custom link, or formula to incorporate values from a record.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## EmailMergeFieldService Methods

These methods are for EmailMergeFieldService. All methods are static.

-   **[getMergeFields(objectApiNames)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmailMergeFieldService_static_methods.htm#apex_ConnectAPI_EmailMergeFieldService_getMergeFields_1)**
    Extract the merge fields for a specific object.

### getMergeFields(objectApiNames)

Extract the merge fields for a specific object.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.EmailMergeFieldInfo getMergeFields(List<String\> objectApiNames)

#### Parameters

objectApiNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The API names for the objects being referenced.

#### Return Value

Type: [ConnectApi.EmailMergeFieldInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_merge_field.htm#apex_connectapi_output_email_merge_field "The map for objects and their merge fields.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getMergeFields(objectApiNames) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_EmailMergeFieldService_static_methods.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.EmailMergeFieldInfo (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_merge_field.htm)
