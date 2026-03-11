---
title: "FindDuplicatesResult Properties"
domain: apex-reference
topic: findduplicatesresult-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.739Z
keywords: [FindDuplicatesResult, Properties, list, DuplicateResult, objects, representing, results, calling, FindDuplicates.findDuplicates, sObjects, FindDuplicatesByIds.findDuplicatesByIds, ids, Elements, correspond, IDs, input, list., duplicateresults, Signature, Property]
---

# FindDuplicatesResult Properties

> A list of DuplicateResult objects
      representing the results of calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids). Elements in the list correspond to
      sObjects or IDs in the input list.

## FindDuplicatesResult Properties

The following are properties for FindDuplicatesResult.

-   **[duplicateresults](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_duplicateresults)**  
    A list of DuplicateResult objects representing the results of calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids). Elements in the list correspond to sObjects or IDs in the input list.
-   **[errors](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_errors)**  
    A list of Database.Error objects holding errors resulting from calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids).
-   **[success](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_success)**  
    Boolean signifying whether the call to FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids) was successful.

### duplicateresults

A list of DuplicateResult objects representing the results of calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids). Elements in the list correspond to sObjects or IDs in the input list.

#### Signature

public List<Datacloud.DuplicateResult> duplicateresults

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[DuplicateResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.")\>

### errors

A list of Database.Error objects holding errors resulting from calling FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids).

#### Signature

public List<Database.Error> errors {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\>

### success

Boolean signifying whether the call to FindDuplicates.findDuplicates(sObjects) or FindDuplicatesByIds.findDuplicatesByIds(ids) was successful.

#### Signature

public Boolean success {get; set;}

#### Property Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")