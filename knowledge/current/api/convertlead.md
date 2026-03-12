---
title: "convertLead()"
domain: api
topic: convertlead
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.912Z
estimatedTokens: 3505
keywords: [convertLead, Converts, Lead, another, Usage, Mappings, Record, Picklist, Errors, Automatic, Subscriptions, Chatter, Feeds, Basic, Steps]
---

# convertLead()

> Converts a Lead into another object.

# convertLead()

Converts a Lead into another object.

Converts a [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)") into an [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)"), [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)"), or (optionally) an [Opportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "HTML (New Window)").

## Syntax

```

```

## Usage

Use [convertLead()](# "Converts a Lead into another object.") to convert a [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)") into an [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") and [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)"), and (optionally) an [Opportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "HTML (New Window)"). If appropriate for your business, you can also use convertLead() to convert a lead to an account and a person account instead of a contact. To convert a [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)"), your client application must be logged in with the “Convert Leads” permission and the “Edit” permission on leads, as well as “Create” and “Edit” on the [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)"), [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)"), and [Opportunity](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "HTML (New Window)") objects.

This call provides an easy way to convert the information in a qualified lead to a new or updated account, contact, and opportunity. Your organization can set its own guidelines for determining when a lead is qualified. Typically, a lead can be converted when it becomes a real opportunity that you want to forecast.

If data is merged into existing account, contact, and opportunity objects, then only empty fields in the target object are overwritten—existing data (including IDs) aren’t overwritten. The only exception is if your client application sets overwriteLeadSource to true. In this case, the LeadSource field in the target [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)") object is overwritten with the contents of the LeadSource field in the source [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)") object.

When converting leads, consider these rules and guidelines.

## Field Mappings

The system automatically maps standard lead fields to standard account, contact, and opportunity fields. For custom lead fields, your Salesforce administrator can specify how they map to custom account, contact, and opportunity fields.

## Record Types

If the organization uses record types, the default record type of the new owner is assigned to records created during lead conversion. For more information about record types, see [Salesforce Help](https://help.salesforce.com/s/articleView?id=platform.recordtypes_example.htm&language=en_US) .

## Picklist Values

The system assigns the default picklist values for the account, contact, and opportunity when mapping any standard lead picklist fields that are blank. If your organization uses record types, blank values are replaced with the default picklist values of the new record owner.

## String Values

Starting with API version 15.0, if you specify a value for a field that contains a string, and the value is too large for the field, the call fails, and an error is returned. In previous versions of the API the value was truncated and the call succeeded. If you wish to keep the old behavior with versions 15.0 and later, use the [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.") SOAP header.

## Errors

If any of the leads fail to convert as part of a bulk operation, the lead conversion is retried for each lead individually.

## Automatic Subscriptions for Chatter Feeds

When you convert a lead into a new account, contact, and opportunity, the lead owner is unsubscribed from the lead record’s Chatter feed. The lead owner, the owner of the generated records, and users that were subscribed to the lead aren't automatically subscribed to the generated records, unless they have automatic subscriptions enabled in their Chatter feed settings. They must have automatic subscriptions enabled to see changes to the account, contact, and opportunity records in their news feed.

A user can subscribe to a record or to another user. Changes to the record and updates from the users are displayed in the Chatter feed on the user's home page, which is a useful way to stay up to date with other users and with changes made to records in Salesforce. Feeds are available in API version 18.0 and later.

## Basic Steps for Converting Leads

Converting leads involves these basic steps.

1.  The client application determines the IDs of any leads to be converted.
2.  Optionally, the client application determines the IDs of any accounts to merge the lead into. The client application can use SOSL or SOQL to search for accounts that match the lead name, as in this example.

    ```

    ```

3.  Optionally, the client application determines the IDs of contacts to merge the lead into. The client application can use SOSL or SOQL to search for contacts that match the lead contact name, as in this example.

    ```

    ```

4.  Optionally, the client application determines whether opportunities must be created from the lead, or the ID of an opportunity to merge the lead into. The client application can use SOSL or SOQL to search for contacts that match the lead contact name, as in this example.

    ```

    ```

5.  The client application queries the LeadStatus table to obtain the possible converted status options (

    ```

    ```

    ), and then selects a value for the Converted Status.
6.  The client application calls [convertLead()](# "Converts a Lead into another object.").
7.  The client application iterates through the returned result and examines each [LeadConvertResult](atlas.en-us.api.meta/api/sforce_api_calls_convertlead_leadconvertresult.htm "The convertLead() call returns an array of LeadConvertResult objects. Each element in the LeadConvertResult array corresponds to the LeadConvert[] array passed as the leadConverts parameter in the convertLead() call. For example, the object returned in the first index in the LeadConvertResult array matches the object specified in the first index of the LeadConvert[] array.") object to determine whether conversion succeeded for each lead.
8.  As an optional best practice, the client application creates tasks in which the WhoId is the ContactId and, if an opportunity is created, the WhatId is the OpportunityId.
9.  Optionally, when converting leads owned by a queue, the owner must be specified. Accounts and contacts can’t be owned by a queue. Even if you are specifying an existing account or contact, you must still specify an owner.

## Sample Code—Java

This sample shows how to convert leads. It creates two leads and converts them. Next, it iterates through the lead conversion results and writes the IDs of the account, contact, and opportunity created for each lead.

```

```

## Sample Code—C#

This sample shows how to convert leads. It creates two leads and converts them. Next, it iterates through the lead conversion results and writes the IDs of the account, contact, and opportunity created for each lead.

```

```

## LeadConvert Arguments

This call accepts an array of LeadConvert objects (100 maximum). A LeadConvert object contains these properties.

| Name | Type | Description |
| --- | --- | --- |
| accountId | ID | ID of the Account into which the lead is merged. Required only when updating an existing account, including person accounts. If no accountID is specified, then the API creates an account. To create an account, the client application must be logged in with sufficient access rights. To merge a lead into an existing account, the client application must be logged in with read/write access to the specified account. The account name and other existing data are not overwritten. For information on IDs, see ID Field Type. |
| accountRecord | Entity | For internal use only. |
| bypassAccountDedupeCheck | boolean | For internal use only. |
| bypassContactDedupeCheck | boolean | For internal use only. |
| contactId | ID | ID of the Contact into which the lead is merged (this contact must be associated with the specified accountId, and an accountId must be specified). Required only when updating an existing contact.If you’re converting a lead into a person account, don’t specify the contactId or an error results. Specify only the accountId of the person account.If no contactID is specified, then the API creates a contact that is implicitly associated with the Account. To create a contact, the client application must be logged in with sufficient access rights. To merge a lead into an existing contact, the client application must be logged in with read/write access to the specified contact. The contact name and other existing data aren’t overwritten (unless overwriteLeadSource is set to true, in which case only the LeadSource field is overwritten). |
| contactRecord | Entity | For internal use only. |
| convertedStatus | string | Valid LeadStatus value for a converted lead. Required. To obtain the list of possible values, the client application queries the LeadStatus object. For example:SELECT Id, MasterLabel FROM LeadStatus WHERE IsConverted=true |
| doNotCreateOpportunity | boolean | Specifies whether to create an Opportunity during lead conversion (false, the default) or not (true). Set this flag to true only if you don’t want to create an opportunity from the lead. An opportunity is created by default. |
| leadId | ID | ID of the Lead to convert. Required. For information on IDs, see ID Field Type. |
| opportunityId | ID | The ID of an existing opportunity to relate to the lead. The opportunityId and opportunityName arguments are mutually exclusive. Specifying a value for both results in an error. If doNotCreateOpportunity argument is true, then no Opportunity is created and this field must be left blank; otherwise, an error is returned. |
| opportunityName | string | Name of the opportunity to create. If no name is specified, then this value defaults to the company name of the lead. The maximum length of this field is 80 characters. The opportunityId and opportunityName arguments are mutually exclusive. Specifying a value for both results in an error. If doNotCreateOpportunity argument is true, then no Opportunity is created and this field must be left blank; otherwise, an error is returned. |
| opportunityRecord | Entity | For internal use only. |
| overwriteLeadSource | boolean | Specifies whether to overwrite the LeadSource field on the target Contact object with the contents of the LeadSource field in the source Lead object (true), or not (false, the default). To set this field to true, the client application must specify a contactId for the target contact. |
| ownerId | ID | Specifies the ID of the person to own any newly created account, contact, and opportunity. If the client application doesn’t specify this value, then the owner of the new object is the owner of the lead. Not applicable when merging with existing objects—if an ownerId is specified, the API doesn’t overwrite the ownerId field in an existing account or contact. For information on IDs, see ID Field Type. |
| relatedPersonAccountId | ID | When converting a lead to a business account and a person account instead of a contact, specifies the ID of the existing person account to convert the lead to. |
| relatedPersonAccountRecord | Entity | When converting a lead to a business account and a person account instead of a contact, specifies the entity record of the new person account to convert the lead to. |
| sendNotificationEmail | boolean | Specifies whether to send a notification email to the owner specified in the ownerId (true) or not (false, the default). |

## Response

[LeadConvertResult](atlas.en-us.api.meta/api/sforce_api_calls_convertlead_leadconvertresult.htm "The convertLead() call returns an array of LeadConvertResult objects. Each element in the LeadConvertResult array corresponds to the LeadConvert[] array passed as the leadConverts parameter in the convertLead() call. For example, the object returned in the first index in the LeadConvertResult array matches the object specified in the first index of the LeadConvert[] array.")\[\]

## Fault

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
LeadConvertResult[] = connection.convertLead(leadConverts LeadConvert[]);
```

```
select id, name from account where name='CompanyNameOfLeadBeingMerged'
```

```
select id, name from contact where firstName='FirstName' and lastName='LastName' and accountId = '001...'
```

```
select id, name from opportunity where name='OpportunityNameOfOpportunityBeingMerged'
```

```apex
public String[] convertLeadRecords() {
   String[] result = new String[4];
   try {

      // Create two leads to convert
      Lead[] leads = new Lead[2];
      Lead lead = new Lead();
      lead.setLastName("Mallard");
      lead.setFirstName("Jay");
      lead.setCompany("Wingo Ducks");
      lead.setPhone("(707) 555-0328");
      leads[0] = lead;
      lead = new Lead();
      lead.setLastName("Platypus");
      lead.setFirstName("Ogden");
      lead.setCompany("Denio Water Co.");
      lead.setPhone("(775) 555-1245");
      leads[1] = lead;
      SaveResult[] saveResults = connection.create(leads);

      // Create a LeadConvert array to be used
      // in the convertLead() call
      LeadConvert[] leadsToConvert = new LeadConvert[saveResults.length];

      for (int i = 0; i < saveResults.length; ++i) {
         if (saveResults[i].isSuccess()) {
            System.out
                  .println("Created new Lead: " + saveResults[i].getId());
            leadsToConvert[i] = new LeadConvert();
            leadsToConvert[i].setConvertedStatus("Closed - Converted");
            leadsToConvert[i].setLeadId(saveResults[i].getId());
            result[0] = saveResults[i].getId();
         } else {
            System.out.println("
Error creating new Lead: "
                  + saveResults[i].getErrors()[0].getMessage());
         }
      }
      // Convert the leads and iterate through the results
      LeadConvertResult[] lcResults = connection.convertLead(leadsToConvert);
      for (int j = 0; j < lcResults.length; ++j) {
         if (lcResults[j].isSuccess()) {
            System.out.println("Lead converted successfully!");
            System.out.println("Account ID: " + lcResults[j].getAccountId());
            System.out.println("Contact ID: " + lcResults[j].getContactId());
            System.out.println("Opportunity ID: "
                  + lcResults[j].getOpportunityId());
         } else {
            System.out.println("
Error converting new Lead: "
                  + lcResults[j].getErrors()[0].getMessage());
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
   return result;
}
```

## Related Topics

- LeadConvertResult (atlas.en-us.api.meta/api/sforce_api_calls_convertlead_leadconvertresult.htm)
- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- person account (atlas.en-us.api.meta/api/sforce_api_guidelines_personaccounts.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
