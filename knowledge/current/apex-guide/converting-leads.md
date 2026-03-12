---
title: "Converting Leads"
domain: apex-guide
topic: converting-leads
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:34.685Z
estimatedTokens: 1100
keywords: [Converting, Leads, convertLead, DML, operation, converts, lead, account, contact, well, optionally, opportunity., only, Database, statement., Example, Convert, Considerations]
---

# Converting Leads

> The convertLead DML operation
                converts a lead into an account and contact, as well as (optionally) an
                opportunity.
            convertLead is available only as a method on
            the Database class; it is not available as a DML
            statement.

# Converting Leads

The convertLead DML operation converts a lead into an account and contact, as well as (optionally) an opportunity. convertLead is available only as a method on the Database class; it is not available as a DML statement.

Converting leads involves the following basic steps:

1.  Your application determines the IDs of any lead(s) to be converted.
2.  Optionally, your application determines the IDs of any account(s) into which to merge the lead. Your application can use SOQL to search for accounts that match the lead name, as in the following example:

    ```

    ```

3.  Optionally, your application determines the IDs of the contact or contacts into which to merge the lead. The application can use SOQL to search for contacts that match the lead contact name, as in the following example:

    ```

    ```

4.  Optionally, the application determines whether opportunities should be created from the leads.
5.  The application uses the query (SELECT ... FROM LeadStatus WHERE IsConverted=true) to obtain the leads with converted status.
6.  The application calls convertLead.
7.  The application iterates through the returned result or results and examines each LeadConvertResult object to determine whether conversion succeeded for each lead.
8.  Optionally, when converting leads owned by a queue, the owner must be specified. This is because accounts and contacts can’t be owned by a queue. Even if you are specifying an existing account or contact, you must still specify an owner.

## Example

This example shows how to use the Database.convertLead method to convert a lead. It inserts a new lead, creates a LeadConvert object, sets its status to converted, and then passes it to the Database.convertLead method. Finally, it verifies that the conversion was successful.

```

```

## Convert Leads Considerations

-   Field mappings: The system automatically maps standard lead fields to standard account, contact, and opportunity fields. For custom lead fields, your Salesforce administrator can specify how they map to custom account, contact, and opportunity fields. For more information about field mappings, see Salesforce Help.
-   Merged fields: If data is merged into existing account and contact objects, only empty fields in the target object are overwritten—existing data (including IDs) are not overwritten. The only exception is if you specify setOverwriteLeadSource on the LeadConvert object to true, in which case the LeadSource field in the target contact object is overwritten with the contents of the LeadSource field in the source LeadConvert object.
-   Record types: If the organization uses record types, the default record type of the new owner is assigned to records created during lead conversion. The default record type of the user converting the lead determines the lead source values available during conversion. If the desired lead source values are not available, add the values to the default record type of the user converting the lead. For more information about record types, see Salesforce Help.
-   Picklist values: The system assigns the default picklist values for the account, contact, and opportunity when mapping any standard lead picklist fields that are blank. If your organization uses record types, blank values are replaced with the default picklist values of the new record owner.
-   Automatic feed subscriptions: When you convert a lead into a new account, contact, and opportunity, the lead owner is unsubscribed from the lead record’s Chatter feed. The lead owner, the owner of the generated records, and users that were subscribed to the lead aren’t automatically subscribed to the generated records, unless they have automatic subscriptions enabled in their Chatter feed settings. They must have automatic subscriptions enabled to see changes to the account, contact, and opportunity records in their news feed. To subscribe to records they create, users must enable the Automatically follow records that I create option in their personal settings. A user can subscribe to a record so that changes to the record display in the news feed on the user's home page. This is a useful way to stay up-to-date with changes to records in Salesforce.

#### See Also

-   [*Apex Reference Guide*: Database Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm)

## Code Examples

```
SELECT Id, Name FROM Account WHERE Name='CompanyNameOfLeadBeingMerged'
```

```
SELECT Id, Name FROM Contact WHERE FirstName='FirstName' AND LastName='LastName' AND AccountId = '001...'
```

```apex
Lead myLead = new Lead(LastName = 'Fry', Company='Fry And Sons');
insert myLead;

Database.LeadConvert lc = new database.LeadConvert();
lc.setLeadId(myLead.id);

LeadStatus convertStatus = [SELECT Id, ApiName FROM LeadStatus WHERE IsConverted=true LIMIT 1];
lc.setConvertedStatus(convertStatus.ApiName);

Database.LeadConvertResult lcr = Database.convertLead(lc);
System.assert(lcr.isSuccess());
```
