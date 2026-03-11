---
title: "BatchResult Methods"
domain: apex-reference
topic: batchresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.035Z
keywords: [BatchResult, Methods]
---

# BatchResult Methods

# BatchResult Methods

These are instance methods for BatchResult.

-   **[getError()](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result_get_error.htm)**  
    If an error occurred, returns a ConnectApi.ConnectApiException object providing the error code and description.
-   **[getErrorMessage()](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result_get_error_message.htm)**  
    Returns a String that contains an error message.
-   **[getErrorTypeName()](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result_get_error_type_name.htm)**  
    Returns a String that contains the name of the error type.
-   **[getResult()](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result_get_result.htm)**  
    Returns an object that contains the results of the batch operation. The object is typed according to the batch method. For example, if you call getMembershipBatch(), a successful call to BatchResult getResult() returns a ConnectApi.GroupMembership object.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_batch_result_is_success.htm)**  
    Returns a Boolean that is set to true if the batch operation was successful for this object, false otherwise.