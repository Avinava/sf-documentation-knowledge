---
title: "Apex Approval Processing Example"
domain: apex-guide
topic: apex-approval-processing-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:33.816Z
estimatedTokens: 65
keywords: [Apex, Approval, Processing, sample, code, initially, submits, record, approves, assumes, pre-existing, process, Account, exists, created]
---

# Apex Approval Processing Example

> The following sample code initially submits a record for approval, then approves the request.
            This example assumes that a pre-existing approval process on Account exists and is valid
            for the Account record created.

# Apex Approval Processing Example

The following sample code initially submits a record for approval, then approves the request. This example assumes that a pre-existing approval process on Account exists and is valid for the Account record created.

```

```

## Code Examples

```apex
public class TestApproval {
    void submitAndProcessApprovalRequest() {
        // Insert an account
        Account a = new Account(Name='Test',annualRevenue=100.0);
        insert a;
           
        User user1 = [SELECT Id FROM User WHERE Alias='SomeStandardUser'];
            
        // Create an approval request for the account
        Approval.ProcessSubmitRequest req1 = 
            new Approval.ProcessSubmitRequest();
        req1.setComments('Submitting request for approval.');
        req1.setObjectId(a.id);
        
        // Submit on behalf of a specific submitter
        req1.setSubmitterId(user1.Id); 
        
        // Submit the record to the existing process named PTO_Request_Process
        req1.setProcessDefinitionNameOrId('PTO_Request_Process');
        
        // Skip the criteria evaluation for the specified process
        req1.setSkipEntryCriteria(true);
        
        // Submit the approval request for the account
        Approval.ProcessResult result = Approval.process(req1);
        
        // Verify the result
        System.assert(result.isSuccess());
        
        System.assertEquals(
            'Pending', result.getInstanceStatus(), 
            'Instance Status'+result.getInstanceStatus());
        
        // Approve the submitted request
        // First, get the ID of the newly created item
        List<Id> newWorkItemIds = result.getNewWorkitemIds();
        
        // Instantiate the new ProcessWorkitemRequest object and populate it
        Approval.ProcessWorkitemRequest req2 = 
            new Approval.ProcessWorkitemRequest();
        req2.setComments('Approving request.');
        req2.setAction('Approve');
        req2.setNextApproverIds(new Id[] {UserInfo.getUserId()});
        
        // Use the ID from the newly created item to specify the item to be worked
        req2.setWorkitemId(newWorkItemIds.get(0));
        
        // Submit the request for approval
        Approval.ProcessResult result2 =  Approval.process(req2);
        
        // Verify the results
        System.assert(result2.isSuccess(), 'Result Status:'+result2.isSuccess());
        
        System.assertEquals(
            'Approved', result2.getInstanceStatus(), 
            'Instance Status'+result2.getInstanceStatus());
    }
}
```
