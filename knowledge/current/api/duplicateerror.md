---
title: "DuplicateError"
domain: api
topic: duplicateerror
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.760Z
estimatedTokens: 463
keywords: [DuplicateError, error, occurred, attempt, made, save, duplicate, record, organization, rules, part, Management, feature, Usage, Java]
---

# DuplicateError

> Contains information about an error that occurred when an attempt was made to save a
      duplicate record. Use if your organization has set up duplicate rules, which are part of the
      Duplicate Management feature.

# DuplicateError

Contains information about an error that occurred when an attempt was made to save a duplicate record. Use if your organization has set up duplicate rules, which are part of the Duplicate Management feature.

## Fields

| Field | Details |
| --- | --- |
| duplicateResult | TypeDuplicateResultDescriptionThe details of a duplicate rule and duplicate records found by the duplicate rule. |
| fields | Typestring[]DescriptionArray of one or more field names. Identifies which fields in the object, if any, affected the error condition. |
| message | TypestringDescriptionError message text. |
| statusCode | TypeStatusCodeDescriptionA code that characterizes the error. The full list of status codes is available in the WSDL file for your organization (see Generating the WSDL File for Your Organization). |

## Usage

DuplicateError and its constituent objects are available to organizations that use duplicate rules.

DuplicateError is a data type of Error.

To process duplicates, loop through all the Error objects in the errors field on SaveResult. An Error object with a data type of DuplicateError contains information about an error that occurred when an attempt was made to save a duplicate record. To access information about the duplicates, use the duplicateResult field.

## Java Sample

Here’s a sample that shows how to see if there are any errors on the saveResult with a data type of DuplicateError. If so, duplicates were detected. See [DuplicateResult](atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm#sforce_api_objects_duplicateresult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") for a full code sample that shows how to block users from entering duplicate leads and display an alert and a list of duplicates.

```

```

## Code Examples

```apex
if (!saveResult.isSuccess()) {
    for (Error e : saveResult.getErrors()) {
        if (e instanceof DuplicateError) {
            System.out.println("Duplicate(s) Detected for lead with ID: " + leads[i].getId());
            System.out.println("ERROR MESSAGE: " + e.getMessage());
            System.out.println("STATUS CODE: " + e.getStatusCode());
            DuplicateResult dupeResult = ((DuplicateError)e).getDuplicateResult();
            System.out.println("Found the following duplicates...");
            for (MatchResult m : dupeResult.getMatchResults()) {
                if (m.isSuccess()) {
                    System.out.println("The match rule that was triggered was " + m.getRule());
                    for (MatchRecord mr : m.getMatchRecords()) {
                        System.out.println("Your record matched " + mr.getRecord().getId() + " of type "
                            + mr.getRecord().getType());
                        System.out.println("The match confidence is " + mr.getMatchConfidence());
                    }
                }
            }
        }
    }
}
```

## Related Topics

- DuplicateResult (atlas.en-us.api.meta/api/sforce_api_objects_duplicateresult.htm)
- StatusCode (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Generating the
                                    WSDL File for Your Organization (atlas.en-us.api.meta/api/sforce_api_quickstart_steps_generate_wsdl.htm)
