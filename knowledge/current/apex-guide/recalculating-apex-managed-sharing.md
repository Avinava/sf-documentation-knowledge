---
title: "Recalculating Apex Managed Sharing"
domain: apex-guide
topic: recalculating-apex-managed-sharing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.287Z
estimatedTokens: 1476
keywords: [Recalculating, Apex, Managed, Sharing, Salesforce, automatically, recalculates, sharing, records, its, organization-wide, default, access, level, changes., recalculation, adds, managed, appropriate., addition]
---

# Recalculating Apex Managed Sharing

> Salesforce automatically recalculates sharing for all records on an object when its
            organization-wide sharing default access level changes. The recalculation adds managed
            sharing when appropriate. In addition, all types of sharing are removed if the access
            they gr

# Recalculating Apex Managed Sharing

Salesforce automatically recalculates sharing for all records on an object when its organization-wide sharing default access level changes. The recalculation adds managed sharing when appropriate. In addition, all types of sharing are removed if the access they grant is considered redundant. For example, manual sharing, which grants Read Only access to a user, is deleted when the object’s sharing model changes from Private to Public Read Only.

To recalculate Apex managed sharing, you must write an Apex class that implements a Salesforce-provided interface to do the recalculation. You must then associate the class with the custom object, on the custom object's detail page, in the Apex Sharing Recalculation related list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex sharing reasons and Apex managed sharing recalculation are only available for custom objects.

You can execute this class from the custom object detail page where the Apex sharing reason is specified. An administrator might need to recalculate the Apex managed sharing for an object if a locking issue prevented Apex code from granting access to a user as defined by the application’s logic. You can also use the Database.executeBatch method to programmatically invoke an Apex managed sharing recalculation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Every time a custom object's organization-wide sharing default access level is updated, any Apex recalculation classes defined for associated custom object are also executed.

To monitor or stop the execution of the Apex recalculation, from Setup, enter Apex Jobs in the Quick Find box, then select **Apex Jobs**.

## Creating an Apex Class for Recalculating Sharing

To recalculate Apex managed sharing, you must write an Apex class to do the recalculation. This class must implement the Salesforce-provided interface Database.Batchable.

The Database.Batchable interface is used for all batch Apex processes, including recalculating Apex managed sharing. You can implement this interface more than once in your organization. For more information on the methods that must be implemented, see [Use Batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm "To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke the class programmatically. To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box and then select Apex Jobs.").

Before creating an Apex managed sharing recalculation class, also consider the [best practices](atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm "To use batch Apex, write an Apex class that implements the Salesforce-provided interface Database.Batchable and then invoke the class programmatically. To monitor or stop the execution of the batch Apex job, from Setup, enter Apex Jobs in the Quick Find box and then select Apex Jobs.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

The object’s organization-wide default access level must not be set to the most permissive access level. For custom objects, this level is Public Read/Write. For more information, see [Understanding Sharing](atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_understanding.htm "Sharing enables record-level access control for all custom objects, as well as many standard objects (such as Account, Contact, Opportunity and Case). Administrators first set an object’s organization-wide default sharing access level, and then grant additional access based on record ownership, the role hierarchy, sharing rules, and manual sharing. Developers can then use Apex managed sharing to grant additional access programmatically with Apex.").

## Apex Managed Sharing Recalculation Example

For this example, suppose that you are building a recruiting application and have an object called Job. You want to validate that the recruiter and hiring manager listed on the job have access to the record. The following Apex class performs this validation. This example requires a custom object called Job, with two lookup fields associated with User records called Hiring\_Manager and Recruiter. Also, the Job custom object should have two sharing reasons added called Hiring\_Manager and Recruiter. Before you run this sample, replace the email address with a valid email address to which you want to send error notifications and job completion notifications.

```

```

## Testing Apex Managed Sharing Recalculations

This example inserts five Job records and invokes the batch job that is implemented in the batch class of the previous example. This example requires a custom object called Job, with two lookup fields associated with User records called Hiring\_Manager and Recruiter. Also, the Job custom object should have two sharing reasons added called Hiring\_Manager and Recruiter. Before you run this test, set the organization-wide default sharing for Job to Private. Note that since email messages aren’t sent from tests, and because the batch class is invoked by a test method, the email notifications won’t be sent in this case.

```

```

## Associating an Apex Class Used for Recalculation

An Apex class used for recalculation must be associated with a custom object.

To associate an Apex managed sharing recalculation class with a custom object:

1.  From the management settings for the custom object, go to Apex Sharing Recalculations.
2.  Choose the Apex class that recalculates the Apex sharing for this object. The class you choose must implement the Database.Batchable interface. You cannot associate the same Apex class multiple times with the same custom object.
3.  Click **Save**.

## Code Examples

```apex
global class JobSharingRecalc implements Database.Batchable<sObject> {
    
    // String to hold email address that emails will be sent to. 
    // Replace its value with a valid email address.
    static String emailAddress = 'admin@yourcompany.com';
    
    // The start method is called at the beginning of a sharing recalculation.
    // This method returns a SOQL query locator containing the records 
    // to be recalculated. 
    global Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator([SELECT Id, Hiring_Manager__c, Recruiter__c 
                                         FROM Job__c]);  
    }
    
    // The executeBatch method is called for each chunk of records returned from start.  
    global void execute(Database.BatchableContext BC, List<sObject> scope){
       // Create a map for the chunk of records passed into method.
        Map<ID, Job__c> jobMap = new Map<ID, Job__c>((List<Job__c>)scope);  
        
        // Create a list of Job__Share objects to be inserted.
        List<Job__Share> newJobShrs = new List<Job__Share>();
               
        // Locate all existing sharing records for the Job records in the batch.
        // Only records using an Apex sharing reason for this app should be returned. 
        List<Job__Share> oldJobShrs = [SELECT Id FROM Job__Share WHERE ParentId IN 
             :jobMap.keySet() AND 
            (RowCause = :Schema.Job__Share.rowCause.Recruiter__c OR
            RowCause = :Schema.Job__Share.rowCause.Hiring_Manager__c)]; 
        
        // Construct new sharing records for the hiring manager and recruiter 
        // on each Job record.
        for(Job__c job : jobMap.values()){
            Job__Share jobHMShr = new Job__Share();
            Job__Share jobRecShr = new Job__Share();
            
            // Set the ID of user (hiring manager) on the Job record being granted access.
            jobHMShr.UserOrGroupId = job.Hiring_Manager__c;
            
            // The hiring manager on the job should always have 'Read Only' access.
            jobHMShr.AccessLevel = 'Read';
            
            // The ID of the record being shared
            jobHMShr.ParentId = job.Id;
            
            // Set the rowCause to the Apex sharing reason for hiring manager.
            // This establishes the sharing record as Apex managed sharing.
            jobHMShr.RowCause = Schema.Job__Share.RowCause.Hiring_Manager__c;
            
            // Add sharing record to list for insertion.
            newJobShrs.add(jobHMShr);
            
            // Set the ID of user (recruiter) on the Job record being granted access.
            jobRecShr.UserOrGroupId = job.Recruiter__c;
            
            // The recruiter on the job should always have 'Read/Write' access.
            jobRecShr.AccessLevel = 'Edit';
            
            // The ID of the record being shared
            jobRecShr.ParentId = job.Id;
            
            // Set the rowCause to the Apex sharing reason for recruiter.
            // This establishes the sharing record as Apex managed sharing.
            jobRecShr.RowCause = Schema.Job__Share.RowCause.Recruiter__c;
            
         // Add the sharing record to the list for insertion.            
            newJobShrs.add(jobRecShr);
        }
        
        try {
           // Delete the existing sharing records.
           // This allows new sharing records to be written from scratch.
            Delete oldJobShrs;
            
           // Insert the new sharing records and capture the save result. 
           // The false parameter allows for partial processing if multiple records are 
           // passed into operation. 
           Database.SaveResult[] lsr = Database.insert(newJobShrs,false);
           
           // Process the save results for insert.
           for(Database.SaveResult sr : lsr){
               if(!sr.isSuccess()){
                   // Get the first save result error.
                   Database.Error err = sr.getErrors()[0];
                   
                   // Check if the error is related to trivial access level.
                   // Access levels equal or more permissive than the object's default 
                   // access level are not allowed. 
                   // These sharing records are not required and thus an insert exception 
                   // is acceptable. 
                   if(!(err.getStatusCode() == StatusCode.FIELD_FILTER_VALIDATION_EXCEPTION  
                                     &&  err.getMessage().contains('AccessLevel'))){
                       // Error is not related to trivial access level.
                       // Send an email to the Apex job's submitter.
                     Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
                     String[] toAddresses = new String[] {emailAddress}; 
                     mail.setToAddresses(toAddresses); 
                     mail.setSubject('Apex Sharing Recalculation Exception');
                     mail.setPlainTextBody(
                       'The Apex sharing recalculation threw the following exception: ' + 
                             err.getMessage());
                     Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
                   }
               }
           }   
        } catch(DmlException e) {
           // Send an email to the Apex job's submitter on failure.
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {emailAddress}; 
            mail.setToAddresses(toAddresses); 
            mail.setSubject('Apex Sharing Recalculation Exception');
            mail.setPlainTextBody(
              'The Apex sharing recalculation threw the following exception: ' + 
                        e.getMessage());
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
        }
    }
    
    // The finish method is called at the end of a sharing recalculation.
    global void finish(Database.BatchableContext BC){  
        // Send an email to the Apex job's submitter notifying of job completion.
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {emailAddress}; 
        mail.setToAddresses(toAddresses); 
        mail.setSubject('Apex Sharing Recalculation Completed.');
        mail.setPlainTextBody
                      ('The Apex sharing recalculation finished processing');
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
    
}
```

```apex
@isTest
private class JobSharingTester {
   
    // Test for the JobSharingRecalc class    
    static testMethod void testApexSharing(){
       // Instantiate the class implementing the Database.Batchable interface.     
        JobSharingRecalc recalc = new JobSharingRecalc();
        
        // Select users for the test.
        List<User> users = [SELECT Id FROM User WHERE IsActive = true LIMIT 2];
        ID User1Id = users[0].Id;
        ID User2Id = users[1].Id;
        
        // Insert some test job records.                 
        List<Job__c> testJobs = new List<Job__c>();
        for (Integer i=0;i<5;i++) {
        Job__c j = new Job__c();
            j.Name = 'Test Job ' + i;
            j.Recruiter__c = User1Id;
            j.Hiring_Manager__c = User2Id;
            testJobs.add(j);
        }
        insert testJobs;
        
        Test.startTest();
        
        // Invoke the Batch class.
        String jobId = Database.executeBatch(recalc);
        
        Test.stopTest();
        
        // Get the Apex job and verify there are no errors.
        AsyncApexJob aaj = [Select JobType, TotalJobItems, JobItemsProcessed, Status, 
                            CompletedDate, CreatedDate, NumberOfErrors 
                            from AsyncApexJob where Id = :jobId];
        System.assertEquals(0, aaj.NumberOfErrors);
      
        // This query returns jobs and related sharing records that were inserted       
        // by the batch job's execute method.     
        List<Job__c> jobs = [SELECT Id, Hiring_Manager__c, Recruiter__c, 
            (SELECT Id, ParentId, UserOrGroupId, AccessLevel, RowCause FROM Shares 
            WHERE (RowCause = :Schema.Job__Share.rowCause.Recruiter__c OR 
            RowCause = :Schema.Job__Share.rowCause.Hiring_Manager__c))
            FROM Job__c];       
        
        // Validate that Apex managed sharing exists on jobs.     
        for(Job__c job : jobs){
            // Two Apex managed sharing records should exist for each job
            // when using the Private org-wide default. 
            System.assert(job.Shares.size() == 2);
            
            for(Job__Share jobShr : job.Shares){
               // Test the sharing record for hiring manager on job.             
                if(jobShr.RowCause == Schema.Job__Share.RowCause.Hiring_Manager__c){
                    System.assertEquals(jobShr.UserOrGroupId,job.Hiring_Manager__c);
                    System.assertEquals(jobShr.AccessLevel,'Read');
                }
                // Test the sharing record for recruiter on job.
                else if(jobShr.RowCause == Schema.Job__Share.RowCause.Recruiter__c){
                    System.assertEquals(jobShr.UserOrGroupId,job.Recruiter__c);
                    System.assertEquals(jobShr.AccessLevel,'Edit');
                }
            }
        }
    }
}
```

## Related Topics

- Use Batch Apex (atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
- best practices (atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
- Understanding Sharing (atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_understanding.htm)
