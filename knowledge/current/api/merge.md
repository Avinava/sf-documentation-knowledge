---
title: "merge()"
domain: api
topic: merge
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:57.421Z
estimatedTokens: 1971
keywords: [merge, Combines, three, records, record, input, array, MergeRequest, elements, combine, output, MergeResult, result, Usage, Rules]
---

# merge()

> Combines up to three records of the same type into one
         record. The input is an array of MergeRequest
         elements, each of which specifies the records to combine. The output is a MergeResult
         object that contains information about the result of the merge.

# merge()

Combines up to three records of the same type into one record. The input is an array of MergeRequest elements, each of which specifies the records to combine. The output is a MergeResult object that contains information about the result of the merge.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

## Syntax

```

```

## Usage

Use merge() to combine records of the same object type into one of the records, known as the main record. merge() deletes the other records, known as the victim records. If a victim record has related records, merge() makes the main record the new parent of the related records.

## Rules and Guidelines

Values from non-main records

Before you call merge(), decide if you want field values in the non-main records to supersede the main record values. If you do, set the field names and values in the record identified by the [masterRecord](#i1429334) of the MergeRequest.

Contacts, Leads, and Data Privacy Records

When you merge contacts or leads that have corresponding data privacy records based on the Individual object, merge() determines the correct data privacy record to associate with the main record.

-   If you selected the option to retain the most recently updated data privacy record for merging leads and contacts, merge() selects the most recently updated data privacy record.
-   Otherwise, merge() selects the data privacy record already associated with the main record.

Successive merges

Because merge() handles each MergeResult element in the input argument as a separate transaction, you can successively merge several records into the same main record.

To perform successive merges, call merge() with an array of MergeResult elements. For each MergeResult element, set:

-   masterRecord to the main record ID.
-   Each element in the recordToMergeIds array to the ID of a record you want to combine into the main record.

Deleted records

Use [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived.") to view records that have been deleted during a merge.

List merged records

To find all records that have been merged since a given point in time, call [queryAll()](atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm "Retrieves data from specified objects, including records that have been deleted or archived.") with a SELECT statement. For example:

```

```

Supported Object Types

The supported object types are [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)"), [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)"), [Account, Person Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)"), and [Individual](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_individual.htm "HTML (New Window)"). You can only merge objects of the same type. For example, leads can be merged only with leads.

Account Hierarchies

When you merge accounts that are part of an account hierarchy, merge() tries to set the victims’ child records as children of the main record. If this action causes a cyclical relationship, merge() returns an error.

Contacts Reports To relationships

When you merge contacts that have a value for the ReportsToId field, merge() tries to add the victims’ ReportsToId value to the main record. If this action causes a cyclical relationship, merge()reports an error.

Contacts and portal users

When you want to merge a contact victim record that has an associated portal user, set AdditionalInformationMap for victim record’s MergeRequest element. You can only merge 1 victim with a portal user into the main record. In Salesforce Classic, you can’t merge person accounts that are enabled to use a Customer Portal.

Considerations

The following limits apply to any merge request:

-   Up to 200 merge requests can be made in a single SOAP call.
-   Up to three records can be merged in a single request, including the main record. This limit is the same as the limit enforced by the Salesforce user interface. To merge more than 3 records, do a successive merge.
-   External ID fields can’t be used with merge().
-   If you selected the option to retain the most recently updated data privacy record for merging leads and contacts, but the caller doesn’t have CRUD permission for the selected data privacy record, the merge process selects the data privacy record already associated with the main record.

Redundant relationships

You can’t merge accounts or person accounts that are related to the same contact. Remove redundant account-contact relationships before you try to merge accounts.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Starting with API version 15.0, if you specify a value for a field that contains a string, and the value is too large for the field, the call fails, and an error is returned. In previous versions of the API the value was truncated and the call succeeded. If you wish to keep the old behavior with versions 15.0 and later, use the [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.") SOAP header.

## Sample Code—Java

This sample merges a victim account with a main account. It creates 2 accounts and attaches a note to the victim. After the merge, the code prints the ID of the victim account and the number of child records updated. In this example, the number of updated records is one, because the note of the merged account is moved to the main account.

```

```

## Sample Code—C#

This sample merges a victim account with a main account. It creates 2 accounts and attaches a note to the victim. After the merge, the code prints the ID of the victim account and the number of child records updated. In this example, the number of updated records is one, because the note of the merged account is moved to the main account.

```

```

## Arguments

This call accepts an array of MergeRequest objects. A MergeRequest object contains the following properties.

| Name | Type | Description |
| --- | --- | --- |
| masterRecord | sObject | Required. Must provide the ID of the object that other records are merged into. Optionally, provide the fields to be updated and their values. |
| recordToMergeIds | ID[] | Required. Minimum of one, maximum of two. The other record or records to be merged into the main record. |
| AdditionalInformationMap | map | A field-value map.Merge a portal user ID:name: PortalUserIdvalue: ID of the portal userIn all other merge cases, set to null. |

## Response

[MergeResult](atlas.en-us.api.meta/api/sforce_api_calls_merge_mergeresult.htm#sforce_api_calls_merge_mergeresult "The merge() call returns an array of MergeResult objects.")\[\]

## Faults

[InvalidIdFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421669)

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
MergeResult[]= connection.merge(MergeRequest[] mergeRequests);
```

```
SELECT Id FROM Contact WHERE isDeleted=true and masterRecordId != null 
   AND SystemModstamp > 2006-01-01T23:01:01+01:00
```

```apex
public Boolean mergeRecords() {
   Boolean success = false;
   // Array to hold the results
   String[] accountIds = new String[2];
   try {
      // Create two accounts to merge
      Account[] accounts = new Account[2];
      Account masterAccount = new Account();
      masterAccount.setName("MasterAccount");
      masterAccount.setDescription("The Account record to merge with.");
      accounts[0] = masterAccount;
      Account accountToMerge = new Account();
      accountToMerge.setName("AccountToMerge");
      accountToMerge
            .setDescription("The Account record that will be merged.");
      accounts[1] = accountToMerge;
      SaveResult[] saveResults = connection.create(accounts);

      if (saveResults.length > 0) {
         for (int i = 0; i < saveResults.length; i++) {
            if (saveResults[i].isSuccess()) {
               accountIds[i] = saveResults[i].getId();
               System.out.println("Created Account ID: "
                     + accountIds[i]);                 
            } else {
               // If any account is not created,
               // print the error returned and exit
               System.out
                     .println("An error occurred while creating account."
                           + " Error message: "
                           + saveResults[i].getErrors()[0].getMessage());
               return success;
            }
         }
      }

      // Set the Ids of the accounts 
      masterAccount.setId(accountIds[0]);
      accountToMerge.setId(accountIds[1]);

      // Attach a note to the account to be merged with the master,
      // which will get re-parented after the merge
      Note note = new Note();
      System.out.println("Attaching note to record " +
            accountIds[1]);
      note.setParentId(accountIds[1]);
      note.setTitle("Merged Notes");
      note.setBody("This note will be moved to the "
            + "MasterAccount during merge");
      SaveResult[] sRes = connection.create(new SObject[] { note });
      if (sRes[0].isSuccess()) {
         System.out.println("Created Note record.");
      } else {
         Error[] errors = sRes[0].getErrors();
         System.out.println("Could not create Note record: "
               + errors[0].getMessage());
      }

      // Perform the merge
      MergeRequest mReq = new MergeRequest();
      masterAccount.setDescription("Was merged");
      mReq.setMasterRecord(masterAccount);
      mReq.setRecordToMergeIds(new String[] { saveResults[1].getId() });
      MergeResult mRes = connection.merge(new MergeRequest[] { mReq })[0];
      
      if (mRes.isSuccess())
      {
         System.out.println("Merge successful.");            
         // Write the IDs of merged records
         for(String mergedId : mRes.getMergedRecordIds()) {
            System.out.println("Merged Record ID: " + mergedId);                           
         }
         // Write the updated child records. (In this case the note.)
         System.out.println(
               "Child records updated: " + mRes.getUpdatedRelatedIds().length);   
         success = true;
      } else {
         System.out.println("Failed to merge records. Error message: " +
               mRes.getErrors()[0].getMessage());
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
   return success;
}
```

```apex
public Boolean mergeRecords()
{
   Boolean success = false;
   // Array to hold the results
   String[] accountIds = new String[2];
   try
   {
      // Create two accounts to merge
      Account[] accounts = new Account[2];
      Account masterAccount = new Account();
      masterAccount.Name = "MasterAccount";
      masterAccount.Description = "The Account record to merge with.";
      accounts[0] = masterAccount;
      Account accountToMerge = new Account();
      accountToMerge.Name = "AccountToMerge";
      accountToMerge
            .Description = "The Account record that will be merged.";
      accounts[1] = accountToMerge;
      SaveResult[] saveResults = binding.create(accounts);

      if (saveResults.Length > 0)
      {
         for (int i = 0; i < saveResults.Length; i++)
         {
            if (saveResults[i].success)
            {
               accountIds[i] = saveResults[i].id;
               Console.WriteLine("Created Account ID: "
                     + accountIds[i]);
            }
            else
            {
               // If any account is not created,
               // print the error returned and exit
               Console.WriteLine("An error occurred while creating account."
                           + " Error message: "
                           + saveResults[i].errors[0].message);
               return success;
            }
         }
      }

      // Set the Ids of the accounts 
      masterAccount.Id = accountIds[0];
      accountToMerge.Id = accountIds[1];

      // Attach a note to the account to be merged with the master,
      // which will get re-parented after the merge
      Note note = new Note();
      Console.WriteLine("Attaching note to record " +
            accountIds[1]);
      note.ParentId = accountIds[1];
      note.Title = "Merged Notes";
      note.Body = "This note will be moved to the "
            + "MasterAccount during merge";
      SaveResult[] sRes = binding.create(new sObject[] { note });
      if (sRes[0].success)
      {
         Console.WriteLine("Created Note record.");
      }
      else
      {
         Error[] errors = sRes[0].errors;
         Console.WriteLine("Could not create Note record: "
               + errors[0].message);
      }

      // Perform the merge
      MergeRequest mReq = new MergeRequest();
      masterAccount.Description = "Was merged";
      mReq.masterRecord = masterAccount;
      mReq.recordToMergeIds = new String[] { saveResults[1].id };      
      
      MergeResult mRes = binding.merge(new MergeRequest[] { mReq })[0];

      if (mRes.success)
      {
         Console.WriteLine("Merge successful.");
         // Write the IDs of merged records
         foreach (String mergedId in mRes.mergedRecordIds)
         {
            Console.WriteLine("Merged Record ID: " + mergedId);
         }
         // Write the updated child records. (In this case the note.)
         Console.WriteLine(
               "Child records updated: " + mRes.updatedRelatedIds.Length);
         success = true;
      }
      else
      {
         Console.WriteLine("Failed to merge records. Error message: " +
               mRes.errors[0].message);
      }
   }
   catch (SoapException e)
   {
      Console.WriteLine("An unexpected error has occurred: " +
                                 e.Message + "
" + e.StackTrace);
   }
   return success;
}
```

## Related Topics

- MergeResult (atlas.en-us.api.meta/api/sforce_api_calls_merge_mergeresult.htm)
- queryAll() (atlas.en-us.api.meta/api/sforce_api_calls_queryall.htm)
- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidIdFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
