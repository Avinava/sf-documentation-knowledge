---
title: "OwnerChangeOptions"
domain: api
topic: ownerchangeoptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.739Z
estimatedTokens: 1396
keywords: [OwnerChangeOptions, actions, performed, record’s, owner, changed, options, API, version, 35.0, later, Calls, OwnerChangeOption, Usage, Sample]
---

# OwnerChangeOptions

> Represents actions that can be performed when a record’s owner is changed. Available with
            these options in API version 35.0 and later.

# OwnerChangeOptions

Represents actions that can be performed when a record’s owner is changed. Available with these options in API version 35.0 and later.

## API Calls

[update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm#sforce_api_calls_update "Updates one or more existing records in your organization's data."), [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm#sforce_api_calls_upsert "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.")

## Fields

| Element Name | Type | Description |
| --- | --- | --- |
| options | OwnerChangeOption[] | Represents a flag for a specific action performed when changing a record owner through an update or upsert call. |

## OwnerChangeOption Fields

| Element Name | Type | Description |
| --- | --- | --- |
| execute | boolean | If true, the action represented by the type field is performed. If false, the action represented by the type field is skipped. |
| type | enum of a string | Represents the action performed or skipped, according to the given value for the execute field, when changing a record owner during an update or upsert call. The following types can be used.EnforceNewOwnerHasReadAccessIf true, the record’s new owner must have at least read access on the record. Available in API version 36.0 and later.KeepAccountTeamIf true, the account team is kept with the account when the account owner is changed. If false, the account team is deleted. Default is false. This action only applies to team members added by a Salesforce admin, the account owner, or someone higher in the role hierarchy. Team members added by users with group-based access are removed even if true. Available for accounts in API version 45.0 and later.KeepSalesTeamIf true, the opportunity team is kept with the opportunity when the account owner is changed. If false, the opportunity team is deleted. Default is false. Available for opportunities in API version 45.0 and later.KeepSalesTeamGrantCurrentOwnerReadWriteAccessIf true, the opportunity’s previous owner retains read/write access after the owner is changed. Default is false. Can be true only when KeepSalesTeam is true. Available for opportunities in API version 44.0 and later.SendEmailIf true, an email notification is sent to the new owner. Default is false.TransferAllOwnedCasesIf true, all cases (open and closed) owned by the account owner are transferred to the new owner. Default is false. When TransferAllOwnedCases is true, TransferOwnedOpenCases must also be true. Available for accounts in API version 45.0 and later.TransferArticleOwnedPublishedVersionIf true and the record is a Knowledge article, the article owner's published version for the language of the current draft is transferred to the new owner, in addition to the current draft.TransferArticleOwnedArchivedVersionsIf true and the record is a Knowledge article, the article owner's archived versions for the language of the current draft are transferred to the new owner, in addition to the current draft.TransferArticleAllVersionsIf true and the record is a Knowledge article, all published and archived versions owned by anyone for the language of the current draft ﻿are transferred to the new owner, in addition to the current draft.TransferContactsIf true and the record is a business account, contacts associated with the account are transferred to the new owner.TransferContractsIf true and the record is an account, contracts associated with the account and owned by the account owner are transferred to the new owner.TransferNotesAndAttachmentsIf true, the record’s notes, attachments, and Google Docs are transferred to the new record owner. If false, the original record owner retains ownership.TransferOpenActivitiesIf true, the record’s open activities are transferred to the new owner.TransferOrdersIf true and the record is an account, the draft standalone orders associated with the account and draft orders associated with transferred contracts owned by the account owner are transferred to the new owner.TransferOthersOpenOpportunitiesIf true and the record is an account, open opportunities associated with the account and not owned by the current owner are transferred to the new owner. When this option is executed, TransferOwnedOpenOpportunities must be set to execute. Default is false.TransferOwnedClosedOpportunitiesIf true and the record is an account, closed opportunities owned by the account owner are transferred to the new owner. Default is false. Available for API version 45.0 and later.TransferOwnedOpenCasesIf true and the record is an account, open cases owned by the account owner are transferred to the new owner. Default is false. Available for API version 45.0 and later.TransferOwnedOpenOpportunitiesIf true and the record is an account, open opportunities associated with the account and owned by the account owner are transferred to the new owner. |

## Usage

When changing the owners of multiple accounts, all accounts must have the same old owner and the same new owner. To change ownership of accounts with different owners, use separate API requests.

## Sample Code—Java

This sample creates an account, a note, an opportunity, and task for the account. It sets the owner change options so that the note, opportunity, and task are transferred to the new owner along with the account.

```

```

## Code Examples

```apex
public void ownerChangeOptionsHeaderSample() {
     
    // Create account. Accounts don't transfer activities, notes, or attachments by default

   
    Account account = new Account();
    account.setName("Account");
    com.sforce.soap.enterprise.SaveResult[] sr = connection.create(new com.sforce.soap.enterprise.sobject.SObject[] { account } );
    String accountId = null;

    if(sr[0].isSuccess()) {
        System.out.println("Successfully saved the account");
        accountId = sr[0].getId();
         
        // Create a note, a task, and an opportunity for the account
         
        Note note = new Note();
        note.setTitle("Note Title");
        note.setBody("Note Body");
        note.setParentId(accountId);
         
        Task task = new Task();
        task.setWhatId(accountId);

	 Opportunity opportunity = new Opportunity();
        opportunity.setName("Opportunity");
        opportunity.setStageName("Prospecting");
        Calendar dt = connection.getServerTimestamp().getTimestamp();
        dt.add(Calendar.DAY_OF_MONTH, 7);
        opportunity.setCloseDate(dt);
        opportunity.setAccountId(accountId);

        sr = connection.create(new com.sforce.soap.enterprise.sobject.SObject[] { note, task, opportunity } );

        if(sr[0].isSuccess()) {
           System.out.println("Successfully saved the note, task, and opportunity");
         
          
           com.sforce.soap.enterprise.QueryResult qr = connection.query("SELECT Id FROM User WHERE FirstName = 'Jane' AND LastName = 'Doe'");
           String newOwnerId = qr.getRecords()[0].getId();
           account.setId(accountId);
           account.setOwnerId(newOwnerId);
            
           // Set owner change options so account's child note, task, and opportunity transfer to new owner
    	   OwnerChangeOption opt1 = new OwnerChangeOption();
	       opt1.setExecute(true);
	       opt1.setType(OwnerChangeOptionType.TransferOwnedOpenOpportunities); // Transfer Open opportunities owned by the account's owner

    	   OwnerChangeOption opt2 = new OwnerChangeOption();
	       opt2.setExecute(true);
	       opt2.setType(OwnerChangeOptionType.TransferOpenActivities);

    	   OwnerChangeOption opt3 = new OwnerChangeOption();
	       opt3.setExecute(true);
	       opt3.setType(OwnerChangeOptionType.TransferNotesAndAttachments);

    	   connection.setOwnerChangeOptions(new OwnerChangeOption[] {opt1, opt2, opt3});
           connection.update(new com.sforce.soap.enterprise.sobject.SObject[] { account } );
            
           // The account's note, task, and opportunity should be transferred to the new owner.
        }
        
   } else {
       System.out.println("Account save failed: " + sr[0].getErrors().toString());
    }
}
```

## Related Topics

- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- upsert() (atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm)
