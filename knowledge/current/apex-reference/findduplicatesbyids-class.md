---
title: "FindDuplicatesByIds Class"
domain: apex-reference
topic: findduplicatesbyids-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.162Z
estimatedTokens: 1326
namespace: Datacloud
keywords: [FindDuplicatesByIds, Performs, rule-based, searches, duplicate, records., input, array, IDs., specifies, records, search, duplicates, among., detected, based, active, rules, applicable, corresponding]
---

# FindDuplicatesByIds Class

> Performs rule-based searches for duplicate records. The input is an
      array of IDs. Each ID specifies records to search for duplicates among. The duplicates are
      detected based on the active duplicate rules applicable to the object type corresponding to
      the input IDs.

**Namespace:** `Datacloud`

# FindDuplicatesByIds Class

Performs rule-based searches for duplicate records. The input is an array of IDs. Each ID specifies records to search for duplicates among. The duplicates are detected based on the active duplicate rules applicable to the object type corresponding to the input IDs.

## Namespace

[Datacloud](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm "The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.")

-   **[FindDuplicatesByIds Methods](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesByIds.htm#apex_Datacloud_FindDuplicatesByIds_methods)**


## FindDuplicatesByIds Methods

The following are methods for FindDuplicatesByIds.

-   **[findDuplicatesByIds(ids)](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesByIds.htm#apex_Datacloud_FindDuplicatesByIds_findDuplicatesByIds)**
    Identifies duplicates of record IDs provided and returns a list of FindDuplicatesResult objects.

### findDuplicatesByIds(ids)

Identifies duplicates of record IDs provided and returns a list of FindDuplicatesResult objects.

#### Usage

FindDuplicatesByIds uses the duplicate rules for the object that has the same type as the input record IDs. For example, if the record ID represents an Account, FindDuplicatesByIds uses the duplicate rules associated with the Account object.

FindDuplicatesByIds identifies duplicate records according to activated standard and custom matching rules. [Standard matching rules](https://help.salesforce.com/s/articleView?id=sales.matching_rules_standard_rules.htm&language=en_US&type=5 "HTML (New Window)") don’t include custom fields in their matching criteria. You can configure custom matching rules that do include custom fields for matching criteria, and then assign the custom matching rule to a [duplicate rule](https://help.salesforce.com/s/articleView?id=sales.duplicate_rules_map_of_reference.htm&type=5&language=en_US). However, configuring these rules isn’t a part of the Datacloud API.

Input

-   All record IDs in the input array must be of the same object type, and that type must correspond to an object type that supports duplicate rules.
-   The input array is limited to 50 elements. If you exceed this limit, an exception is thrown with the following message: Configuration error: The number of records to check is greater than the permitted batch size.

Output

-   The output of FindDuplicatesByIds is an array of objects with the same number of elements as the input array, and in the same order. The output objects encapsulate record IDs for duplicate records. The output objects also contain values from the duplicate records.
-   Each element contains an array of [DuplicateResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") objects, which each represent a duplicate rule that FindDuplicatesByIds applied. Within each DuplicateResult object is an array of [MatchResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_class_Datacloud_MatchResult "Represents the duplicate results for a matching rule.") objects, which each represent a matching rule that the duplicate rule applied. If FindDuplicatesByIds doesn’t find any duplicates for that matching rule, then the [MatchResult.getMatchRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getMatchRecords "Returns information about the duplicates for the matching rule.") array is empty. Otherwise, the MatchResult.getMatchRecords() array contains [MatchRecord](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_class_Datacloud_MatchRecord "Represents a duplicate record detected by a matching rule.") objects, which each represent a duplicate record.
-   If no duplicate rule is active for the object type of the record IDs in the input array, a System.HandledException exception is thrown with this message: No active duplicate rules are defined for the {ObjectName} object type.

#### Example

```

```

#### Signature

public static List<Datacloud.FindDuplicatesResult> findDuplicatesByIds(List<Id> ids)

#### Parameters

ids

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of IDs for which you want to find duplicates.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[FindDuplicatesResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_class_Datacloud_FindDuplicatesResult "Output for rule-based searches for duplicate records. FindDuplicatesResult contains results of detecting duplicates using instances of FindDuplicates or FindDuplicatesByIds classes.")\>

## Code Examples

```apex
// Create list of existing record IDs to check for duplicates
List<Id> idList = new List<Id>();
idList.add('EXISTING_ID'); // Replace placeholder with an existing 18-digit record ID 

// Call the FindDuplicatesByIds method, which returns one FindDuplicatesResult for each ID in the input list.
List<Datacloud.FindDuplicatesResult> results = Datacloud.FindDuplicatesByIds.findDuplicatesByIds(idList);

//Get the result for the first record ID (index 0).
Datacloud.FindDuplicatesResult idResult = results[0];

// Check that findDuplicates() was successfully executed for this record
if (!idResult.isSuccess()) {
  List<Database.Error> errs = idResult.getErrors();
  for (Database.Error err : errs) {
      System.debug(err.getMessage());
  }
} else {

  Boolean duplicatesFound = false;
  Boolean matchError = false;

  // Iterate through the duplicate rules that were evaluated.
  for (Datacloud.DuplicateResult dupResult : idResult.getDuplicateResults()) {
    // Iterate through the matching rules that were evaluated for each duplicate rule
    for (Datacloud.MatchResult matchResult : dupResult.getMatchResults()) {
      // Check that getMatchResults() was successfully executed for this matching rule
      if (!matchResult.isSuccess()) {
        List<Database.Error> errs = matchResult.getErrors();
        for (Database.Error err : errs) {
          System.debug(err.getMessage());
        }
        matchError = true;
      } else {
        // Check if duplicates are found according to the matching rule
        if (!matchResult.getMatchRecords().isEmpty()) {
          System.debug('Duplicate record(s) found with matching rule: ' + matchResult.getRule());
          duplicatesFound = true;
          // Get information about the duplicates
          for (Datacloud.MatchRecord matchRecord : matchResult.getMatchRecords()) {
            System.debug('Duplicate record: ' + matchRecord.getRecord());
          }
        }
      }
    }
  }

  // If no duplicates were found and no errors occurred for first record ID
  if (!duplicatesFound && !matchError) {
    System.debug('No duplicates found for record ID: ' + idList[0]);
  }
}
```

## Related Topics

- Datacloud (atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm)
- FindDuplicatesByIds Methods (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesByIds.htm)
- findDuplicatesByIds(ids) (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesByIds.htm)
- DuplicateResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm)
- MatchResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm)
- MatchResult.getMatchRecords() (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm)
- MatchRecord (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- FindDuplicatesResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm)
