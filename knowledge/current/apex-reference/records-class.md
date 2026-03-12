---
title: "Records Class"
domain: apex-reference
topic: records-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.854Z
estimatedTokens: 901
namespace: ConnectApi
keywords: [Records, Access, information, record, motifs, which, small, icons, used, distinguish, types, Salesforce, UI., getMotif, communityId, idOrPrefix, API, Version, Requires, Chatter]
---

# Records Class

> Access information about record motifs, which are small
icons used to distinguish record types in the Salesforce UI.

**Namespace:** `ConnectApi`

# Records Class

Access information about record motifs, which are small icons used to distinguish record types in the Salesforce UI.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Records Methods

These methods are for Records. All methods are static.

-   **[getMotif(communityId, idOrPrefix)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Records_static_methods.htm#apex_ConnectAPI_Records_getMotif)**
    Get a motif that contains the URLs for a set of small, medium, and large motif icons for a record. It can also contain a base color for the record.
-   **[getMotifBatch(communityId, idOrPrefixList)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Records_static_methods.htm#apex_ConnectAPI_Records_getMotifBatch)**
    Get a motif for a list of objects.

### getMotif(communityId, idOrPrefix)

Get a motif that contains the URLs for a set of small, medium, and large motif icons for a record. It can also contain a base color for the record.

#### API Version

28.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.Motif getMotif(String communityId, String idOrPrefix)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

idOrPrefix

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

An ID or key prefix.

#### Return Value

Type: [ConnectApi.​Motif](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm "The motif properties contain URLs for small, medium, and large icons that indicate the Salesforce record type. Common record types are files, users, and groups, but all record types have a set of motif icons. Custom object records use their tab style icon. All icons are available to unauthenticated users so that, for example, you can display the motif icons in an email. The motif can also contain the record type’s base color.")

#### Usage

Each Salesforce record type has its own set of motif icons.

### getMotifBatch(communityId, idOrPrefixList)

Get a motif for a list of objects.

#### API Version

31.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.BatchResult\[\] getMotifBatch(String communityId, List<String\> idOrPrefixList)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

idOrPrefixList

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of object IDs or prefixes.

#### Return Value

Type: [ConnectApi.BatchResult](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm "The result of an operation returned by a batch method.")\[\]

The ConnectApi.BatchResult.getResult() method returns a ConnectApi.Motif object and errors for motifs that didn’t load.

#### Example

```

```

## Code Examples

```apex
String communityId = null;
List<String> prefixIds = new List<String> { '001', '01Z', '069' };

// Get info about the motifs of all records in the list.
ConnectApi.BatchResult[] batchResults = ConnectApi.Records.getMotifBatch(communityId, prefixIds);
    
for (ConnectApi.BatchResult batchResult : batchResults) {
    if (batchResult.isSuccess()) {
        // Operation was successful. 
        // Print the color of each motif.
        ConnectApi.Motif motif;
        if(batchResult.getResult() instanceof ConnectApi.Motif) {
            motif = (ConnectApi.Motif) batchResult.getResult();
        }
        System.debug('SUCCESS');
        System.debug(motif.color);
    }
    else {
        // Operation failed. Print errors.
        System.debug('FAILURE');
        System.debug(batchResult.getErrorMessage());
    }
}
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getMotif(communityId, idOrPrefix) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Records_static_methods.htm)
- getMotifBatch(communityId, idOrPrefixList) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Records_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​Motif (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_motif.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.BatchResult (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result.htm)
