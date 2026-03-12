---
title: "process()"
domain: api
topic: process
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.443Z
estimatedTokens: 1266
keywords: [process, Submits, array, approval, instances, processes, approved, rejected, removed, Salesforce, Help, Usage, Sample, Code—Java, Code—C#]
---

# process()

> Submits an array of approval process instances for approval, or
         processes an array of approval process instances to be approved, rejected, or removed.
      For more information, see Set Up an Approval Process in Salesforce Help.

# process()

Submits an array of approval process instances for approval, or processes an array of approval process instances to be approved, rejected, or removed. For more information, see Set Up an Approval Process in Salesforce Help.

## Syntax

```

```

processType can be either [ProcessSubmitRequest](#processsubmitrequest) or [ProcessWorkitemRequest](#processworkitemrequest)

## Usage

Use the process() call to perform either of the following two tasks:

-   Submit an array of objects to the approval process. Objects cannot already be in an approval process when submitted. Use the ProcessSubmitRequest signature.
-   Process an object that has been submitted to the approval process by performing an approval action (Approve or Reject). Use the ProcessWorkitemRequest signature.

Requests are processed and a [ProcessResult](atlas.en-us.api.meta/api/sforce_api_calls_process_processresult.htm) is returned with the same process instances as sent in the request.

The failure of a particular record doesn’t cause failure of the entire request.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Because you can fire Apex triggers with this call, you can update fields that contain strings.

Starting with API version 15.0, if you specify a value for a field that contains a string, and the value is also too large for the field, the call fails, and an error is returned. In previous versions of the API the value was truncated and the call succeeded. If you wish to keep the old behavior with versions 15.0 and later, use the [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.") SOAP header.

## Sample Code—Java

This sample accepts the ID of the sObject to process the approval for and an array containing the IDs of the next approvers. It creates a process approval request and submits it for approval. Finally, it parses the results of the process() call.

```

```

## Sample Code—C#

This sample accepts the ID of the sObject to process the approval for and an array containing the IDs of the next approvers. It creates a process approval request and submits it for approval. Finally, it parses the results of the process() call.

```

```

## ProcessSubmitRequest Arguments

| Name | Type | Description |
| --- | --- | --- |
| comments | string | Text that you want to accompany the submission. Don’t reference merge fields or formula expressions.Submission comments appear in the approval history for the specified record. This text also appears in the initial approval request email if the template uses the {!ApprovalRequest.Comments} merge field. |
| nextApproverIds | ID | If the process requires specification of the next approval, the ID of the user to be assigned the next request. |
| objectId | ID | The record to submit for approval. |
| processDefinitionNameOrId | string | The unique name or ID of the specific approval process to which you want the record to be submitted. The process must have the same object type as the record you specified in objectId.Required if skipEntryCriteria is true. |
| skipEntryCriteria | boolean | If true, the record isn’t evaluated against the entry criteria set on the process that is defined in processDefinitionNameOrId. |
| submitterId | ID | The ID for the user who submitted the record for approval. The user receives notifications about responses to the approval request.The user must be one of the allowed submitters for the process. |

## ProcessWorkitemRequest Arguments

| Name | Type | Description |
| --- | --- | --- |
| action | string | For processing an item after being submitted for approval, a string representing the kind of action to take: Approve, Reject, or Removed. Only Salesforce admins can specify Removed. If the Allow submitters to recall approval requests option is selected for the approval process, the submitter can also specify Removed. |
| comments | string | Text that you want to accompany the submission. Don’t reference merge fields or formula expressions.Submission comments appear in the approval history for the specified record. This text also appears in the initial approval request email if the template uses the {!ApprovalRequest.Comments} merge field. |
| nextApproverIds | ID | If the process requires specification of the next approval, the ID of the user to be assigned the next request. |
| workitemId | ID | The ID of the ProcessInstanceWorkitem to be approved, rejected, or removed. |

## Response

[ProcessResult](atlas.en-us.api.meta/api/sforce_api_calls_process_processresult.htm)\[\]

## Faults

[ALREADY\_IN\_PROCESS](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#already_in_process)

[NO\_APPLICABLE\_PROCESS](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#no_applicable_process)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
ProcessResult = connection.process( processType processRequest[])
```

```apex
public void processRecords(String id, String[] approverIds) {
   ProcessSubmitRequest request = new ProcessSubmitRequest();
   request.setComments("A comment about this approval.");
   request.setObjectId(id);
   request.setNextApproverIds(approverIds);
   try {
      ProcessResult[] processResults = connection
            .process(new ProcessSubmitRequest[] { request });
      for (ProcessResult processResult : processResults) {
         if (processResult.isSuccess()) {
            System.out.println("Approval submitted for: " + id + ":");
            for (int i = 0; i < approverIds.length; i++) {
               System.out
                     .println("\tBy: " + approverIds[i] + " successful.");
            }
            System.out.println("Process Instance Status: "
                  + processResult.getInstanceStatus());
         } else {
            System.out.println("Approval submitted for: " + id
                  + ", approverIds: " + approverIds.toString() + " FAILED.");
            System.out.println("Error: "
                  + processResult.getErrors()[0].toString());
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void processRecords(String id, String[] approverIds)
{
   ProcessSubmitRequest request = new ProcessSubmitRequest();
   request.comments = "A comment about this approval.";
   request.objectId = id;
   request.nextApproverIds = approverIds;
   try
   {
      ProcessResult[] processResults = binding.process(
                     new ProcessSubmitRequest[] { request });
      foreach (ProcessResult processResult in processResults)
      {
         if (processResult.success)
         {
            Console.WriteLine("Approval submitted for: " + id + ":");
            for (int i = 0; i < approverIds.Length; i++)
            {
               Console.WriteLine("\tBy: " + approverIds[i] + " successful.");
            }
            Console.WriteLine("Process Instance Status: "
                  + processResult.instanceStatus);
         }
         else
         {
            Console.WriteLine("Approval submitted for: " + id
                  + ", approverIds: " + approverIds.ToString() + " FAILED.");
            Console.WriteLine("Error: "
                  + processResult.errors.ToString());
         }
      }
   }
   catch (SoapException e)
   {
      Console.WriteLine("An unexpected error has occurred: " +
                                 e.Message + "
" + e.StackTrace);
   }
}
```

## Related Topics

- ProcessResult (atlas.en-us.api.meta/api/sforce_api_calls_process_processresult.htm)
- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- ALREADY_IN_PROCESS (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- NO_APPLICABLE_PROCESS (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
