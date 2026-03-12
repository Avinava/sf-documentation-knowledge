---
title: "Process Detail Output"
domain: health-cloud-object-reference
topic: process-detail-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.724Z
estimatedTokens: 405
keywords: [Process, Detail, Output, Identity, Verification, record]
---

# Process Detail Output

> Represents the Identity Verification Process Detail
    record.

# Process Detail Output

Represents the Identity Verification Process Detail record.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| apexClassName | String | The Apex class name. | Small, 54.0 | 54.0 |
| dataSourceType | String | The data source type. Possible values are:ExternalNoteIn API version 54.0, an external data source type isn’t supported.Salesforce | Small, 54.0 | 54.0 |
| optionalVerifierCount | Integer | The minimum number of optional verifiers that must be checked. | Small, 54.0 | 54.0 |
| searchObjectName | String | The API name of the object on which search is performed. | Small, 54.0 | 54.0 |
| searchResultFilter | String | The conditions used to filter search results. For example, if the search is to be performed only on person accounts, use isPerson = true. | Small, 54.0 | 54.0 |
| searchResultSortOrder | String | The values used to sort and order search results. For example, if you want to sort the results by policy date and arrange them in a descending order, use PolicyDate__c Desc | Small, 54.0 | 54.0 |
| searchResultUniqueIdField | String | The unique identifying field of the selected search result. | Small, 54.0 | 54.0 |
| searchSequenceNo | Integer | The search sequence number. | Small, 54.0 | 54.0 |
| searchType | String | Indicates whether the search is text-based or object-based.NoteIn API version 54.0, object-based search isn’t supported. | Small, 54.0 | 54.0 |
| verificationProcessFieldList | Verification Process Field List Output | List of verification process fields. | Small, 54.0 | 54.0 |

## Related Topics

- Verification
                  Process Field List Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verification_process_field_list_output.htm)
