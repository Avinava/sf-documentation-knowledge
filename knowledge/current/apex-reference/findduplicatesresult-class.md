---
title: "FindDuplicatesResult Class"
domain: apex-reference
topic: findduplicatesresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.170Z
estimatedTokens: 1684
namespace: Datacloud
keywords: [FindDuplicatesResult, Output, rule-based, searches, duplicate, records., contains, results, detecting, duplicates, instances, FindDuplicates, FindDuplicatesByIds, classes., duplicateresults, errors, success, getDuplicateResults, Example, getErrors]
---

# FindDuplicatesResult Class

> Output for rule-based searches for duplicate records. FindDuplicatesResult contains results of detecting duplicates
      using instances of FindDuplicates or FindDuplicatesByIds classes.

**Namespace:** `Datacloud`

# FindDuplicatesResult Class

Output for rule-based searches for duplicate records. FindDuplicatesResult contains results of detecting duplicates using instances of FindDuplicates or FindDuplicatesByIds classes.

## Namespace

[Datacloud](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm "The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.")

-   **[FindDuplicatesResult Properties](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_properties)**

-   **[FindDuplicatesResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_Datacloud_FindDuplicatesResult_methods)**


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

## Code Examples

```apex
Account acct = new Account(name='Salesforce');
List<Account> acctList = new List<Account>();
acctList.add(acct);

Datacloud.FindDuplicatesResult[] results = Datacloud.FindDuplicates.findDuplicates(acctList);
for (Datacloud.FindDuplicatesResult findDupeResult : results) {
  for (Datacloud.DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
    for (Datacloud.MatchResult matchResult : dupeResult.getMatchResults()) {
      for (Datacloud.MatchRecord matchRecord : matchResult.getMatchRecords()) {
          System.debug('Duplicate Record: ' + matchRecord.getRecord());
      }
    }
  }
}
```

## Related Topics

- Datacloud (atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm)
- FindDuplicatesResult Properties (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm)
- FindDuplicatesResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm)
- duplicateresults (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm)
- errors (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm)
- success (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- DuplicateResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm)
- Database.Error (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
