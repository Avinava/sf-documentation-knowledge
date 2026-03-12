---
title: "findDuplicatesByIds()"
domain: api
topic: findduplicatesbyids
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.299Z
estimatedTokens: 1227
keywords: [findDuplicatesByIds, performs, rule-based, searches, duplicate, records, input, array, record, IDs, search, duplicates, output, identifies, detected]
---

# findDuplicatesByIds()

> findDuplicatesByIds() performs rule-based searches for duplicate records.
            The input is an array of record IDs, each of which specifies what records to search for
            duplicates. The output identifies the detected duplicates for each record
        ID.

# findDuplicatesByIds()

findDuplicatesByIds() performs rule-based searches for duplicate records. The input is an array of record IDs, each of which specifies what records to search for duplicates. The output identifies the detected duplicates for each record ID.

## Syntax

```

```

## Usage

Use findDuplicatesByIds() to apply duplicate rules associated with an object to records represented by the record IDs.

findDuplicatesByIds() uses the duplicate rules for the object that has the same type as the input record IDs. For example, if the record ID represents an Account, findDuplicatesByIds() uses the duplicate rules associated with the Account object.

For each input ID, findDuplicatesByIds() adds an object to the output array.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

-   All record IDs in the input array must have the same object type, and that type must correspond to an object type that supports duplicate rules.
-   The input array is limited to 50 elements. If you exceed this limit, the SOAP call returns an [API Fault Element](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#api_fault_element) contains these fields.
    -   [ExceptionCode](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#exception_code_topic): LIMIT\_EXCEEDED
    -   exceptionMessage: Configuration error: The number of records to check is greater than the permitted batch size.

Matching is controlled by the values specified by the input record ID. The values can include a record ID only.

findDuplicatesByIds() searches the object defined by the duplicate rule for an existing record that has the same ID. Then it loads the values from that record, and searches for duplicates based on those values.

The output of findDuplicatesByIds() is an array of objects with the same number of elements as the input array, and in the same order. The output objects encapsulate record IDs for duplicate records. Optionally, the output objects also contain values from the duplicate records.

Each element contains a [DuplicateResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicateresult.htm "HTML (New Window)") object. If findDuplicatesByIds() doesn’t find any duplicates for an sObject, the duplicateRule field in DuplicateResult contains the name of the duplicate rule that findDuplicatesByIds() applied, but the matchResults array is empty.

If the includeRecordDetails flag in [DuplicateRuleHeader](atlas.en-us.api.meta/api/sforce_api_header_duplicateruleheader.htm "Determines options for using duplicate rules to detect duplicate records. Duplicate rules are part of the Duplicate Management feature.") is set to false, findDuplicatesByIds() returns only the record IDs of the matching records. Otherwise, findDuplicatesByIds() returns all the fields specified in the primary [CompactLayout](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_compactlayout.htm) associated with the target object.

## Basic Steps for Using

1.  Create one or more ID objects that correspond to the object that has the duplicate rules you want to use.
2.  Specify record IDs to compare to records in the object.
3.  Set DuplicateRuleHeader to control the output you want.

## Sample

The following Java sample demonstrates how to search for duplicates of a Lead, using the standard Leads duplicate rule.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| IDs | Array of ID | Required. A list of IDs that contain values you want to search for. |

## Response

An array of FindDuplicatesResult objects.

## FindDuplicatesResult

Represents the result of a duplicate search for a single ID in the input array. Because the object associated with the sObject can have more than one duplicate rule, FindDuplicatesResult contains an array of [DuplicateResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_duplicateresult.htm "HTML (New Window)") objects.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| duplicateResults | Array of DuplicateResult objects | The result of each duplicate rule applied by findDuplicatesByIds() to a single sObject. |
| errors | Array of Error objects | Contains an array of errors encountered by findDuplicatesByIds(). |
| success | boolean | This field is set to true if findDuplicatesByIds() doesn’t encounter any errors. |

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

[InvalidFieldFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421625)

## Code Examples

```
FindDuplicatesResult[] duplicateResults = 
    connection.findDuplicatesByIds(Id[] inputIdArray);
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

    SObject[] objectsToSearch = new SObject[2];
    String[] inputIds = new String[2];
    // Instantiate an empty Java SObject
    SObject searchCriteria = new SObject();
    // Set its type to Lead. This tells findDuplicatesByIds() to use the duplicate rules
    // for Lead
    searchCriteria.setType("Lead");
    /*
     * Set the necessary fields for matching, based on the standard matching rules for Lead
     * (Search help.salesforce.com for "Standard Contact and Lead Matching Rule" to see the
     * rules).
     */
    searchCriteria.setField("FirstName", "Marc");
    searchCriteria.setField("LastName", "Benioff");
    searchCriteria.setField("Company", "Salesforce.com Inc");
    searchCriteria.setField("Title", "CEO");
    searchCriteria.setField("Email", "ceo@salesforce.com");
    // Add the sObjects to the input array
    objectsToSearch[0] = searchCriteria;
    objectsToSearch[1] = searchCriteria;

    SaveResult[] saveResults = connection.create(objectsToSearch);

    for (int i = 0; i < saveResults.length; ++i) {
      if (saveResults[i].isSuccess()) {
        System.out.println("Successfully created ID: " + saveResults[i].getId());
        inputIds[i] = saveResults[i].getId();
      } else {
        System.out.println("Error: could not create SObject.");
        System.out.println("The error reported was: " + 
          saveResults[i].getErrors()[0].getMessage() + "
");
      }
    }
    /*
     * By default, findDuplicatesByIds() returns only record IDs. To return additional values,
     * set the second parameter to true.
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

    // Invoke findDuplicatesByIds() to find duplicates based on the information in the
    // SObject array
    FindDuplicatesResult[] callResults = connection.findDuplicatesByIds(inputIds);

    // Iterate through the results
    /* For each Id in the input array, get the duplicate results. There could be more matches
     * depending on the data in the organization.
     */
    for (FindDuplicatesResult findDupeResult : callResults) {
      // If errors were found for this Id, print them out
      if (!findDupeResult.isSuccess()) {
        for (Error findDupError : findDupeResult.getErrors()) {
          System.out.println("FindDuplicatesRule errors detected: " + findDupError.getMessage());
        }
      } else {
        /*
         * Get the DuplicateResult object array for the result. Each element in the array represents
         * the result of testing one duplicate rule for the Id. Process each DuplicateResult.
         */
        for (DuplicateResult dupeResult : findDupeResult.getDuplicateResults()) {
          System.out.println("Duplicate rule: " + dupeResult.getDuplicateRule());
          // Print out the name of the object associated with the duplicate
          // rule
          System.out.println("Source of this duplicate rule is: " + 
            dupeResult.getDuplicateRuleEntityType());
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

- API Fault Element (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- ExceptionCode (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- DuplicateRuleHeader (atlas.en-us.api.meta/api/sforce_api_header_duplicateruleheader.htm)
- Error (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidFieldFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
