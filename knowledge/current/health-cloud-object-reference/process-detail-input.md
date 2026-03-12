---
title: "Process Detail Input"
domain: health-cloud-object-reference
topic: process-detail-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.124Z
estimatedTokens: 426
keywords: [Process, Detail, Input, representation, verification]
---

# Process Detail Input

> Input representation of the verification process
    details.

# Process Detail Input

Input representation of the verification process details.

Root XML tag

<processDetailInput>

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apexClassName | String | The Apex class that’s used to search and verify data in an external system.NoteReserved for future use. | Optional | 54.0 |
| dataSourceType | String | The source type of the data.Possible values are:Salesforce | Required | 54.0 |
| optionalVerifierCount | Integer | The number of optional verifiers that must be checked. | OptionalNoteThis field is required, if you specify optional verifiers. | 54.0 |
| searchObjectName | String | The name of a Salesforce object or custom object on which the search is performed and data is verified. | Required | 54.0 |
| searchResultFilter | String | A comma-separated list of predefined filter conditions that are used to refine the scope of the search. | Optional | 54.0 |
| searchResultSortOrder | String | The values that are used to sort the search results. | Optional | 54.0 |
| searchResultUniqueIdField | String | The field containing the unique identifier of a record displayed in the search results. | Required | 54.0 |
| searchSequenceNo | Integer | The sequence in which the search is performed and the search result is displayed. | Optional | 54.0 |
| searchType | String | The type of search being performed.Possible values are:Text-Based | Required | 54.0 |
| verificationProcessFieldList | Verification Process Field Input[] | List of fields necessary to configure the questions that an administrator asks the caller before providing them the information they need. | Required | 54.0 |

## Related Topics

- Verification Process Field Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_process_field_input.htm)
