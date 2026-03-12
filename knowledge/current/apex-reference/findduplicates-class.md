---
title: "FindDuplicates Class"
domain: apex-reference
topic: findduplicates-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:20.151Z
estimatedTokens: 1288
namespace: Datacloud
keywords: [FindDuplicates, Performs, rule-based, searches, duplicate, records., input, array, sObjects., sObject, represents, record, want, find, duplicates, of., output, identifies, detected, based]
---

# FindDuplicates Class

> Performs rule-based searches for duplicate records. The input is an
      array of sObjects. Each sObject represents a record you want to find duplicates of. The output
      identifies the detected duplicates for each input sObject based on active duplicate rules for
      the given object.

**Namespace:** `Datacloud`

# FindDuplicates Class

Performs rule-based searches for duplicate records. The input is an array of sObjects. Each sObject represents a record you want to find duplicates of. The output identifies the detected duplicates for each input sObject based on active duplicate rules for the given object.

## Namespace

[Datacloud](atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm "The Datacloud namespace provides classes and methods for retrieving information about duplicate rules. Duplicate rules let you control whether and when users can save duplicate records within Salesforce.")

-   **[FindDuplicates Methods](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicates.htm#apex_Datacloud_FindDuplicates_methods)**


## FindDuplicates Methods

The following are methods for FindDuplicates.

-   **[findDuplicates(sObjects)](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicates.htm#apex_Datacloud_FindDuplicates_findDuplicates)**
    Identifies duplicates for sObjects provided and returns a list of FindDuplicatesResult objects.

### findDuplicates(sObjects)

Identifies duplicates for sObjects provided and returns a list of FindDuplicatesResult objects.

#### Usage

Use FindDuplicates to apply active duplicate rules associated with an object to records represented by input sObjects.

FindDuplicates uses the duplicate rules for the object that has the same type as the input sObjects.

This method doesn’t return custom fields by default. This method identifies duplicate records according to activated standard and custom matching rules. Standard matching rules don’t include custom fields in their matching criteria. You can configure custom matching rules that do include custom fields for matching criteria, and then assign the custom matching rule to a [duplicate rule](https://help.salesforce.com/s/articleView?id=sales.duplicate_rules_map_of_reference.htm&type=5&language=en_US). However, configuring these rules isn’t a part of the Datacloud API.

Input

-   All sObjects in the input array must be of the same object type, and that type must correspond to an object type that supports duplicate rules.
-   The input array is limited to 50 elements. If you exceed this limit, an exception is thrown with the following message: Configuration error: The number of records to check is greater than the permitted batch size.

Output

-   The output of FindDuplicates is an array of objects with the same number of elements as the input array, and in the same order. The output objects encapsulate record IDs for duplicate records. The output objects also contain values from the duplicate records.
-   Each element contains an array of [DuplicateResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") objects, which each represent a duplicate rule that FindDuplicates applied. Within each DuplicateResult object is an array of [MatchResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_class_Datacloud_MatchResult "Represents the duplicate results for a matching rule.") objects, which each represent a matching rule that the duplicate rule applied. If FindDuplicates doesn’t find any duplicates for that matching rule, then the [MatchResult.getMatchRecords()](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm#apex_Datacloud_MatchResult_getMatchRecords "Returns information about the duplicates for the matching rule.") array is empty. Otherwise, the MatchResult.getMatchRecords() array contains [MatchRecord](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm#apex_class_Datacloud_MatchRecord "Represents a duplicate record detected by a matching rule.") elements, which each represent a duplicate record.
-   If no duplicate rule is active for the object type in the input array, a System.HandledException exception is thrown with this message: No active duplicate rules are defined for the {ObjectName} object type.

#### Example

```

```

#### Signature

public static List<Datacloud.FindDuplicatesResult> findDuplicates(List<SObject> sObjects)

#### Parameters

sObjects

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

An array of sObjects for which you want to find duplicates.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[FindDuplicatesResult](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm#apex_class_Datacloud_FindDuplicatesResult "Output for rule-based searches for duplicate records. FindDuplicatesResult contains results of detecting duplicates using instances of FindDuplicates or FindDuplicatesByIds classes.")\>

## Code Examples

```apex
//Create the sObject to check for duplicates.
Account acct = new Account();
acct.Name = 'Test Account 123';
acct.BillingStreet = '123 Test Street';
acct.BillingCity = 'San Francisco';
acct.BillingState = 'CA';
acct.BillingCountry = 'US'; 
 
List<Account> acctList = new List<Account>();
acctList.add(acct); 
 
// Call the findDuplicates method, which returns one FindDuplicatesResult for each sObject in the input list.
List<Datacloud.FindDuplicatesResult> results = Datacloud.FindDuplicates.findDuplicates(acctList);
 
//Get the result for the first record (index 0).
Datacloud.FindDuplicatesResult acctResult = results[0];
 
// Check that findDuplicates() was successfully executed for this account.
if (!acctResult.isSuccess()) {
  List<Database.Error> errs = acctResult.getErrors();
  for (Database.Error err : errs) {
      System.debug(err.getMessage());
  }
} else {
 
  Boolean duplicatesFound = false;
  Boolean matchError = false;
 
  // Iterate through the duplicate rules that were evaluated.
  for (Datacloud.DuplicateResult dupResult : acctResult.getDuplicateResults()) {
    // Iterate through the matching rules that were evaluated for each duplicate rule.
    for (Datacloud.MatchResult matchResult : dupResult.getMatchResults()) {
      // Check that getMatchResults() was successfully executed for this matching rule.
      if (!matchResult.isSuccess()) {
        List<Database.Error> errs = matchResult.getErrors();
        for (Database.Error err : errs) {
          System.debug(err.getMessage());
        }
        matchError = true;
      } else {
        // Check if duplicates are found according to the matching rule.
        if (!matchResult.getMatchRecords().isEmpty()) {
          System.debug('Duplicate record(s) found with matching rule: ' + matchResult.getRule());
          duplicatesFound = true;
          // Get information about the duplicates.
          for (Datacloud.MatchRecord matchRecord : matchResult.getMatchRecords()) {
            System.debug('Duplicate record: ' + matchRecord.getRecord());
          }
        }
      }
    }
  }
 
  // Insert the record only if no duplicates were found and no errors occurred.
  if (!duplicatesFound && !matchError) {
    insert(acct);
    System.debug('Account inserted.');
  }
  
}
```

## Related Topics

- Datacloud (atlas.en-us.apexref.meta/apexref/apex_namespace_datacloud.htm)
- FindDuplicates Methods (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicates.htm)
- findDuplicates(sObjects) (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicates.htm)
- DuplicateResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm)
- MatchResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm)
- MatchResult.getMatchRecords() (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchResult.htm)
- MatchRecord (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_MatchRecord.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- FindDuplicatesResult (atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_FindDuplicatesResult.htm)
