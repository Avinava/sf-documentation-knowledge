---
title: "Verification Context Output"
domain: health-cloud-object-reference
topic: verification-context-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.794Z
estimatedTokens: 200
keywords: [Verification, Context, Output, resource]
---

# Verification Context Output

> Represents the Verification Context resource output.

# Verification Context Output

Represents the Verification Context resource output.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isSuccess | Boolean | Indicates whether the request is successful (true) or not (false). | Small, 54.0 | 54.0 |
| message | String | The request response message. | Small, 54.0 | 54.0 |
| processDefinition | Process Definition Output | Represents the definition of the identity verification process. | Small, 54.0 | 54.0 |
| selectedSearchResult | Selected Search Result Output | Represents the selected object and fields in the search result. | Small, 54.0 | 54.0 |
| verifiedResult | Verified Result Output | Represents the verified result.NoteReserved for future use. | Small, 54.0 | 54.0 |

## Related Topics

- Process Definition
                        Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_process_definition_output.htm)
- Selected Search Result
                           Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_selected_search_result_output.htm)
- Verified Result
                        Output (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_responses_verified_result_output.htm)
