---
title: "FindDuplicatesResult Methods"
domain: apex-reference
topic: findduplicatesresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.739Z
keywords: [FindDuplicatesResult, Methods, Returns, list, DuplicateResult, objects, representing, results, calling, FindDuplicates.findDuplicates, sObjects, FindDuplicatesByIds.findDuplicatesByIds, ids, Elements, correspond, IDs, input, list., getDuplicateResults, Example]
---

# FindDuplicatesResult Methods

> Returns  a list of DuplicateResult objects representing the results of calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids). Elements in the
      list correspond to sObjects or IDs in the input list.

## FindDuplicatesResult Methods

The following are methods for FindDuplicatesResult.

-   **[getDuplicateResults()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_getDuplicateResults)**  
    Returns a list of DuplicateResult objects representing the results of calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids). Elements in the list correspond to sObjects or IDs in the input list.
-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_getErrors)**  
    Returns a list of DatabaseError objects containing errors resulting from calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids), if errors were encountered.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_isSuccess)**  
    Returns a Boolean signifying whether the call to FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids) was successful.

### getDuplicateResults()

Returns a list of DuplicateResult objects representing the results of calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids). Elements in the list correspond to sObjects or IDs in the input list.

#### Example

```

```

#### Signature

public List<Datacloud.DuplicateResult> getDuplicateResults()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[DuplicateResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.")\>

### getErrors()

Returns a list of DatabaseError objects containing errors resulting from calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids), if errors were encountered.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\>

### isSuccess()

Returns a Boolean signifying whether the call to FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids) was successful.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")