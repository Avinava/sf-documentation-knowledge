---
title: "Recalculating Apex Managed Sharing"
domain: apex-guide
topic: recalculating-apex-managed-sharing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.345Z
keywords: [Recalculating, Apex, Managed, Sharing, Note, Creating, Class, Important, Recalculation, Example, Testing, Recalculations, Associating, Used]
---

# Recalculating Apex Managed Sharing

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