---
title: "FindDuplicates Methods"
domain: apex-reference
topic: findduplicates-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.724Z
keywords: [FindDuplicates, Methods, Identifies, duplicates, sObjects, provided, returns, list, FindDuplicatesResult, objects., findDuplicates, Usage, Example, Signature, Parameters, Return, Value]
---

# FindDuplicates Methods

> Identifies duplicates for sObjects provided and returns a list of
        FindDuplicatesResult objects.

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