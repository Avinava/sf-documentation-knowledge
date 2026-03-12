---
title: "findDuplicates()"
domain: api
topic: findduplicates
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.289Z
estimatedTokens: 1512
keywords: [findDuplicates, Performs, rule-based, searches, duplicate, records, Usage, Basic, Steps, Sample, Arguments, FindDuplicatesResult, Faults]
---

# findDuplicates()

> Performs rule-based searches for duplicate records.

# findDuplicates()

Performs rule-based searches for duplicate records.

The input is an array of [sObject](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#sobject_topic), each of which specifies the values to search for and the type of object that supplies the duplicate rules. The output identifies the detected duplicates for each object that supplies the duplicate rules. findDuplicates() applies the rules to the values to do the search. The output identifies the detected duplicates for each sObject.

## Syntax

```

```

## Usage

Use findDuplicates() to apply duplicate rules associated with an object to values specified by each sObject. Each sObject also has a type that corresponds to an object.

findDuplicates() uses the duplicate rules for the object that has the same type as the sObject. For example, if the sObject type is Account, findDuplicates() uses the duplicate rules associated with the Account object.

For each input sObject, findDuplicates() adds a FindDuplicatesResult object to the output array.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

-   All the sObject elements in the input array must have the same type, and that type must correspond to an object type that supports duplicate rules.
-   The input array is limited to 50 elements. If you exceed this limit, the SOAP call returns an [API Fault Element](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#api_fault_element) containing these fields.
    -   [ExceptionCode](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#exception_code_topic): LIMIT\_EXCEEDED
    -   exceptionMessage: Configuration error: The number of records to check is greater than the permitted batch size.

The values specified in the sObject control matching. The values can include a record ID, a field map, or both. The specified values determine the behavior of findDuplicates():

Record ID only

findDuplicates() searches the object defined by the duplicate rule for an existing record that has the same ID. Then it loads the values from that record, and searches for duplicates based on those values.

Field Map only

findDuplicates() loads the values from the map and searches for duplicates based on those values.

Record ID and Field Map

findDuplicates() searches the object defined by the duplicate rule for an existing record that has the same ID. It loads any values from that record that aren’t specified in the map, and then loads values from the map. Based on the resulting union of values, findDuplicates() searches for duplicates.

The output of findDuplicates() is an array of FindDuplicatesResult objects with the same number of elements as the input array, and in the same order. The output objects encapsulate record IDs for duplicate records, if any. Optionally, the output objects also contain values from the duplicate records.

Each FindDuplicatesResult element contains a [DuplicateResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicateresult.htm "HTML (New Window)") object. If findDuplicates() doesn't find any duplicates for an sObject, the duplicateRule field in DuplicateResult contains the name of the duplicate rule that findDuplicates() applied, but the matchResults array is empty.

If the includeRecordDetails flag in [DuplicateRuleHeader](atlas.en-us.api.meta/api/sforce_api_header_duplicateruleheader.htm "Determines options for using duplicate rules to detect duplicate records. Duplicate rules are part of the Duplicate Management feature.") is set to false, findDuplicates() only returns the record IDs of the matching records. Otherwise, findDuplicates() returns all the fields specified in the primary [CompactLayout](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_compactlayout.htm) associated with the target object.

## Basic Steps for Use

1.  Create one or more sObject objects with a type that corresponds to the object that has the duplicate rules you want to use.
2.  In each sObject, specify record IDs or field maps (or both) to compare to records in the object.
3.  Set [DuplicateRuleHeader](atlas.en-us.api.meta/api/sforce_api_header_duplicateruleheader.htm "Determines options for using duplicate rules to detect duplicate records. Duplicate rules are part of the Duplicate Management feature.") to control the output you want.

## Sample

The following Java sample demonstrates how to search for duplicates of a Lead, using the standard Leads duplicate rule.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjects | Array of sObject | Required. A list of sObject objects that contain values you want to search for. |

## Response

An array of FindDuplicatesResult objects.

## FindDuplicatesResult

Represents the result of a duplicate search for a single sObject in the input array. Because the object associated with the sObject can have more than one duplicate rule, FindDuplicatesResult contains an array of [DuplicateResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicateresult.htm "HTML (New Window)") objects.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| duplicateResults | Array of DuplicateResult objects | The result of each duplicate rule applied by findDuplicates() to a single sObject. |
| errors | Array of Error objects | Contains an array of errors encountered by findDuplicates(). |
| success | boolean | This field is set to true if the findDuplicates() doesn't encounter any errors. |

## Faults

[InvalidFieldFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421625)

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

## Code Examples

```
FindDuplicatesResult[] duplicateResults = 
    connection.findDuplicates(SObject[] inputSObjectArray);
```

```apex
package wsc;

import com.sforce.soap.partner.*;
import com.sforce.soap.partner.Error;
import com.sforce.soap.partner.sobject.SObject;
import com.sforce.ws.ConnectionException;
import com.sforce.ws.ConnectorConfig;

public class Main {

  private static final String USERNAME = "YOUR-USERNAME";
  private static final String PASSWORD = "YOUR-PASSWORD&SECURITY-TOKEN";
  private static PartnerConnection connection = null;

  public static void main(String[] args) throws ConnectionException {

    // Create the configuration for the partner connection
    ConnectorConfig config = new ConnectorConfig();
    config.setUsername(USERNAME);
    config.setPassword(PASSWORD);

    // Initialize the connection
    connection = new PartnerConnection(config);

    SObject[] inputSObjectArray = new SObject[1];
    // Instantiate an empty Java SObject
    SObject searchCriteria = new SObject();
    // Set its type to Lead. This tells findDuplicates() to use the duplicate rules
    // for Lead
    searchCriteria.setType("Lead");
    /*
     * Set the necessary fields for matching, based on the standard matching rules for Lead (Search
     * help.salesforce.com for "Standard Contact and Lead Matching Rule" to see the rules).
     */
    searchCriteria.setField("FirstName", "Marc");
    searchCriteria.setField("LastName", "Benioff");
    searchCriteria.setField("Company", "Salesforce.com Inc");
    searchCriteria.setField("Title", "CEO");
    searchCriteria.setField("Email", "ceo@salesforce.com");
    // Add the sObject to the input array
    inputSObjectArray[0] = searchCriteria;
    /*
     * By default, findDuplicates() returns only record IDs. To return additional values, set the second parameter
     * to true.
     */
    connection.setDuplicateRuleHeader(
        /*
         * @param allowSave - Not Applicable for this API call
         */
        false,
        /* @param includeRecordDetails */
        false,
        /*
         * @param runAsCurrentUser - Not Applicable for this API call
         */
        false);

    // Invoke findDuplicates() to find duplicates based on the information in the
    // SObject array
    FindDuplicatesResult[] callResults = connection.findDuplicates(inputSObjectArray);

    // Iterate through the results
    // For each SObject in the input array, get the duplicate results
    for (FindDuplicatesResult findDupeResult : callResults) {
      // If errors were found for this SObject, print them out
      if (!findDupeResult.isSuccess()) {
        for (Error findDupError : findDupeResult.getErrors()) {
          System.out.println("FindDuplicatesRule errors detected: " + findDupError.getMessage());
        }
      } else {
        /*
         * Get the DuplicateResult object array for the result. Each element in the array represents the result
         * of testing one duplicate rule for the SObject. Process each DuplicateResult.
         */
        for (DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
          System.out.println("Duplicate rule: " + dupeResult.getDuplicateRule());
          // Print out the name of the object associated with the duplicate
          // rule
          System.out.println("Source of this duplicate rule is: " + dupeResult.getDuplicateRuleEntityType());
          for (MatchResult matchResult : dupeResult.getMatchResults()) {
            if (!matchResult.isSuccess()) {
              for (Error e : matchResult.getErrors()) {
                System.out.println("Errors detected: " + e.getMessage());
              }
            } else {
              System.out.println("Matching rule is: " + matchResult.getRule());
              System.out.println("Object type for this matching rule is: " + matchResult.getEntityType());
              for (MatchRecord matchRecord : matchResult.getMatchRecords()) {
                System.out.println("Duplicate record ID: " + matchRecord.getRecord().getId());
              }
            }
          }
        }
      }
    }
  }
}
```

## Related Topics

- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Fault Element (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- ExceptionCode (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- DuplicateRuleHeader (atlas.en-us.api.meta/api/sforce_api_header_duplicateruleheader.htm)
- InvalidFieldFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
