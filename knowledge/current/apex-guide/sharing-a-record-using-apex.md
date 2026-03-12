---
title: "Sharing a Record Using Apex"
domain: apex-guide
topic: sharing-a-record-using-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.276Z
estimatedTokens: 2826
keywords: [Sharing, Record, Apex, Where, possible, changed, noninclusive, terms, align, company, Equality., maintained, certain, avoid, any, effect, customer, implementations., Important, Creating]
---

# Sharing a Record Using Apex

> Where possible, we changed noninclusive terms to align with our
            company value of Equality. We maintained certain terms to avoid any effect on
            customer implementations.

# Sharing a Record Using Apex

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

To access sharing programmatically, you must use the share object associated with the standard or custom object for which you want to share. For example, AccountShare is the sharing object for the Account object, ContactShare is the sharing object for the Contact object. In addition, all custom object sharing objects are named as follows, where MyCustomObject is the name of the custom object:

MyCustomObject\_\_Share

Objects on the detail side of a master-detail relationship don’t have an associated sharing object. The detail record’s access is determined by the master’s sharing object and the relationship’s sharing setting. For more information, see “Custom Object Security” in the Salesforce Help.

A share object includes records supporting all three types of sharing: managed sharing, user managed sharing, and Apex managed sharing. Sharing that is granted to users implicitly through organization-wide defaults, the role hierarchy, and permissions such as the “View All Records” and “Modify All Records” permissions for the given object, “View All Data,” and “Modify All Data” aren’t tracked with this object.

Every share object has the following properties:

| Property Name | Description |
| --- | --- |
| objectNameAccessLevel | The level of access that the specified user or group has been granted for a share sObject. The name of the property is AccessLevel appended to the object name. For example, the property name for LeadShare object is LeadAccessLevel. Valid values are:EditReadAllNoteThe All access level is an internal value and can’t be granted.This field must be set to an access level that’s higher than the organization’s default access level for the parent object. For more information, see Understanding Sharing. |
| ParentID | The ID of the custom object. This field can’t be updated. |
| RowCause | The reason why the user or group is being granted access. The reason determines the type of sharing, which controls who can alter the sharing record. This field can’t be updated. |
| UserOrGroupId | The user or group IDs to which you’re granting access. A group can be:A public group or a sharing group associated with a role.A territory group.This field can’t be updated.NoteYou can't grant access to unauthenticated guest users using Apex. |

You can share a standard or custom object with users or groups. For more information about the types of users and groups you can share an object with, see [User](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_user.htm "HTML (New Window)") and [Group](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_group.htm "HTML (New Window)") in the [Object Reference for Salesforce](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/ "HTML (New Window)").

## Creating User Managed Sharing Using Apex

It’s possible to manually share a record to a user or a group using Apex or SOAP API. If the owner of the record changes, the sharing is automatically deleted. The following example class contains a method that shares the job specified by the job ID with the specified user or group ID with read access. It also includes a test method that validates this method. Before you save this example class, create a custom object called Job.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Manual shares written using Apex contains RowCause="Manual" by default. Only shares with this condition are removed when ownership changes.

```

```

```

```

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

The object’s organization-wide default access level must not be set to the most permissive access level. For custom objects, this level is Public Read/Write. For more information, see [Understanding Sharing](atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_understanding.htm "Sharing enables record-level access control for all custom objects, as well as many standard objects (such as Account, Contact, Opportunity and Case). Administrators first set an object’s organization-wide default sharing access level, and then grant additional access based on record ownership, the role hierarchy, sharing rules, and manual sharing. Developers can then use Apex managed sharing to grant additional access programmatically with Apex.").

## Creating Apex Managed Sharing

Apex managed sharing enables developers to programmatically manipulate sharing to support their application’s behavior through either Apex or SOAP API. This type of sharing is similar to managed sharing. Only users with “Modify All Data” permission can add or change Apex managed sharing on a record. Apex managed sharing is maintained across record owner changes.

Apex managed sharing must use an *Apex* sharing reason. Apex sharing reasons are a way for developers to track why they shared a record with a user or group of users. Using multiple Apex sharing reasons simplifies the coding required to make updates and deletions of sharing records. They also enable developers to share with the same user or group multiple times using different reasons.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex sharing reasons aren’t available in Lightning Experience. Use Salesforce Classic to create sharing reasons within the UI. See [Point and Click Customization](https://help.salesforce.com/s/articleView?id=xcloud.lex_gaps_limitations_ui_customization.htm&type=5&language=en_US) for the complete list of differences in features and settings between Salesforce Classic and Lightning Experience.

Apex sharing reasons are defined on an object's detail page. Each Apex sharing reason has a label and a name:

-   The label displays in the Reason column when viewing the sharing for a record in the user interface. This label allows users and administrators to understand the source of the sharing. The label is also enabled for translation through the Translation Workbench.
-   The name is used when referencing the reason in the API and Apex.

All Apex sharing reason names have the following format:

```

```

Apex sharing reasons can be referenced programmatically as follows:

```

```

For example, an Apex sharing reason called Recruiter for an object called Job can be referenced as follows:

```

```

For more information, see [System.Schema Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_schema.htm).

To create an Apex sharing reason:

1.  From the management settings for the custom object, click **New** in the Apex Sharing Reasons related list.
2.  Enter a label for the Apex sharing reason. The label displays in the Reason column when viewing the sharing for a record in the user interface. The label is also enabled for translation through the Translation Workbench.
3.  Enter a name for the Apex sharing reason. The name is used when referencing the reason in the API and Apex. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.
4.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex sharing reasons and Apex managed sharing recalculation are only available for custom objects.

## Apex Managed Sharing Example

For this example, suppose that you’re building a recruiting application and have an object called Job. You want to validate that the recruiter and hiring manager listed on the job have access to the record. The following trigger grants the recruiter and hiring manager access when the job record is created. This example requires a custom object called Job, with two lookup fields associated with User records called Hiring\_Manager and Recruiter. Also, the Job custom object must have two sharing reasons added called Hiring\_Manager and Recruiter.

```

```

Under certain circumstances, inserting a share row results in an update of an existing share row. Consider these examples:

-   A manual share access level is set to Read and you insert a new one set to Write. The original share rows are updated to Write, indicating the higher level of access.
-   Users can access an account because they can access its child records (contact, case, opportunity, and so on). If an account sharing rule is created, the sharing rule row cause (which is a higher access level) replaces the parent implicit share row cause, indicating the higher level of access.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

The object’s organization-wide default access level must not be set to the most permissive access level. For custom objects, this level is Public Read/Write. For more information, see [Understanding Sharing](atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_understanding.htm "Sharing enables record-level access control for all custom objects, as well as many standard objects (such as Account, Contact, Opportunity and Case). Administrators first set an object’s organization-wide default sharing access level, and then grant additional access based on record ownership, the role hierarchy, sharing rules, and manual sharing. Developers can then use Apex managed sharing to grant additional access programmatically with Apex.").

## Creating Apex Managed Sharing for Customer Community Plus users

Customer Community Plus users are previously known as Customer Portal users. Share objects, such as AccountShare and ContactShare, aren’t available to these users. If you must use share objects as a Customer Community Plus user, consider using a trigger, which operates with the without sharing keyword by default. Otherwise, use an inner class with the same keyword to enable the DML operation to run successfully. A separate utility class can also be used to enable this access.

Granting visibility via manual or apex shares written to the share objects is supported but the objects themselves aren't available to Customer Community Plus users. However, other users can add shares that grant access to Customer Community Plus users.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

After enabling digital experiences, records accessible to Roles and Subordinates via Apex managed sharing are automatically made accessible to Roles, Internal, and Portal Subordinates. To secure external users’ access, update your Apex code so that it creates shares to the Role and Internal Subordinates group. Because this conversion is a large-scale operation, consider using [batch Apex](atlas.en-us.apexcode.meta/apexcode/apex_batch.htm).

## Code Examples

```apex
public class JobSharing {
   
   public static boolean manualShareRead(Id recordId, Id userOrGroupId){
      // Create new sharing object for the custom object Job.
      Job__Share jobShr  = new Job__Share();
   
      // Set the ID of record being shared.
      jobShr.ParentId = recordId;
        
      // Set the ID of user or group being granted access.
      jobShr.UserOrGroupId = userOrGroupId;
        
      // Set the access level.
      jobShr.AccessLevel = 'Read';
        
      // Set rowCause to 'manual' for manual sharing.
      // This line can be omitted as 'manual' is the default value for sharing objects.
      jobShr.RowCause = Schema.Job__Share.RowCause.Manual;
        
      // Insert the sharing record and capture the save result. 
      // The false parameter allows for partial processing if multiple records passed 
      // into the operation.
      Database.SaveResult sr = Database.insert(jobShr,false);

      // Process the save results.
      if(sr.isSuccess()){
         // Indicates success
         return true;
      }
      else {
         // Get first save result error.
         Database.Error err = sr.getErrors()[0];
         
         // Check if the error is related to trival access level.
         // Access level must be more permissive than the object's default.
         // These sharing records are not required and thus an insert exception is acceptable. 
         if(err.getStatusCode() == StatusCode.FIELD_FILTER_VALIDATION_EXCEPTION  &&  
                  err.getMessage().contains('AccessLevel')){
            // Indicates success.
            return true;
         }
         else{
            // Indicates failure.
            return false;
         }
       }
   }
   
}
```

```apex
@isTest
private class JobSharingTest {
   // Test for the manualShareRead method
   static testMethod void testManualShareRead(){
      // Select users for the test.
      List<User> users = [SELECT Id FROM User WHERE IsActive = true LIMIT 2];
      Id User1Id = users[0].Id;
      Id User2Id = users[1].Id;
   
      // Create new job.
      Job__c j = new Job__c();
      j.Name = 'Test Job';
      j.OwnerId = user1Id;
      insert j;    
                
      // Insert manual share for user who is not record owner.
      System.assertEquals(JobSharing.manualShareRead(j.Id, user2Id), true);
   
      // Query job sharing records.
      List<Job__Share> jShrs = [SELECT Id, UserOrGroupId, AccessLevel, 
         RowCause FROM job__share WHERE ParentId = :j.Id AND UserOrGroupId= :user2Id];
      
      // Test for only one manual share on job.
      System.assertEquals(jShrs.size(), 1, 'Set the object\'s sharing model to Private.');
      
      // Test attributes of manual share.
      System.assertEquals(jShrs[0].AccessLevel, 'Read');
      System.assertEquals(jShrs[0].RowCause, 'Manual');
      System.assertEquals(jShrs[0].UserOrGroupId, user2Id);
      
      // Test invalid job Id.
      delete j;   
   
      // Insert manual share for deleted job id. 
      System.assertEquals(JobSharing.manualShareRead(j.Id, user2Id), false);
   }  
}
```

```
MyReasonName__c
```

```
Schema.CustomObject__Share.rowCause.SharingReason__c
```

```
Schema.Job__Share.rowCause.Recruiter__c
```

## Related Topics

- Understanding Sharing (atlas.en-us.apexcode.meta/apexcode/apex_bulk_sharing_understanding.htm)
- batch Apex (atlas.en-us.apexcode.meta/apexcode/apex_batch.htm)
