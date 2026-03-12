---
title: "update()"
domain: api
topic: update
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.611Z
estimatedTokens: 3116
keywords: [Updates, records, organization's, data, Usage, Permissions, Special, Handling, Updateable, Objects, Automatically, Updated, Resetting, Assignment, Rules]
---

# update()

> Updates one or more existing records in your organization's data.

# update()

Updates one or more existing records in your organization's data.

## Syntax

```

```

## Usage

Use this call to update one or more existing records, such as accounts or contacts, in your organization's data. The update() call is analogous to the UPDATE statement in SQL.

## Permissions

Your client application must be logged in with sufficient access rights to update() records objects for the specified object, as well as individual fields inside that object. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

## Special Handling

Certain objects—and certain fields within those objects—require special handling or permissions. For example, you need permissions to access an object's parent object. Before you attempt to update a record for a particular object, be sure to read its description in the [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)") and in Salesforce Help.

## Updateable Objects

Certain records can’t be updated via the API. To update a record via the update() call, its object must be configured as updateable (updateable is true). To determine whether an object can be updated, your client application can invoke the describeSObjects() call on the object and inspect its updateable property.

## Required Fields

When updating required fields, you must supply a value—you can’t set the value to null. For more information, see [Required Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/required_fields.htm).

## ID Fields

Fields whose names contain “Id” are either that object's primary key (see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616) ) or a foreign key (see [Reference Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435823)). Client applications can’t update primary keys, but they can update foreign keys. For example, a client application can update the OwnerId of an [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)"), because OwnerID is a foreign key that refers to the user who owns the account record. Use describeSObjects() to confirm whether the field can be updated.

This call checks a batch for duplicate Id values, and if there are duplicates, the first 12 are processed. For additional duplicate Id values, the [SaveResult](atlas.en-us.api.meta/api/sforce_api_calls_update_saveresult.htm "The update() call returns an array of SaveResult objects.") for those entries is marked with an error similar to the following:

```

```

## Automatically Updated Fields

The API updates certain fields automatically, such as LastModifiedDate, LastModifiedById, and SystemModstamp. You can’t explicitly specify these values in your update() call.

## Resetting Values to null

To reset a field value to null, you add the field name to the fieldsToNull array in the sObject. You can’t set required fields (nillable is false) to null.

## Valid Field Values

You must supply values that are valid for the field's data type, such as integers (not alphabetic characters) for integer fields. In your client application, follow the data formatting rules specified for your programming language and development tool (your development tool handles the appropriate mapping of data types in SOAP messages).

## String Values

When storing values in string fields, the API trims any leading and trailing white space. For example, if the value of a name field is entered as " ABC Company ", then the value is stored in the database as "ABC Company".

Starting with API version 15.0, if you specify a value for a field that contains a string, and the value is too large for the field, the call fails, and an error is returned. In previous versions of the API the value was truncated and the call succeeded. If you wish to keep the old behavior with versions 15.0 and later, use the [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.") SOAP header.

## Assignment Rules

When updating Case or Lead objects, your client application can set [AssignmentRuleHeader](atlas.en-us.api.meta/api/sforce_api_header_assignmentruleheader.htm "The AssignmentRuleHeader must be specified in the create() or update() call of a Case or Lead for the specified assignment rule to be applied, and it must be specified in the update() call of an Account for the territory assignment rules to be applied.") options to have the case or lead automatically assigned to one or more users based on assignment rules configured in the Salesforce user interface. For more information, see [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)") or [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)").

## Maximum Number of Objects Updated

Your client application can change up to 200 records in a single update() call. If an update request exceeds 200 records, the entire operation fails.

## Rollback on Error

The [AllOrNoneHeader](atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm "Allows a call to roll back all changes unless all records are processed successfully.") header allows you to roll back all changes unless all records are processed successfully. This header is available in API version 20.0 and later. Lets a call roll back all changes unless all records are processed successfully.

## Automatic Subscriptions for Chatter Feeds

To subscribe to records they create, users must enable the Automatically follow records that I create option in their personal settings. If users have automatic subscriptions enabled, they automatically follow the records they create and see changes to those records in their Chatter feed on the Home tab.

When you update the owner of a record, the new owner isn’t automatically subscribed to the record, unless the new owner has automatic subscriptions for records enabled in their Chatter feed settings. The previous owner isn’t automatically unsubscribed. If the new owner has automatic subscriptions for records enabled, the new and previous owners both see any changes to the record in their news feed.

A user can subscribe to a record or to another user. Changes to the record and updates from the users are displayed in the Chatter feed on the user's home page, which is a useful way to stay up to date with other users and with changes made to records in Salesforce. Feeds are available in API version 18.0 and later.

## Update Records for Different Object Types

You can update records for multiple object types, including custom objects, in one call with API version 20.0 and later. For example, you could update a contact and an account in one call. You can update records for up to 10 object types in one call.

Records are saved in the same order that they’re entered in the sObjects input array.

Salesforce breaks records for different object types into multiple chunks. A chunk is a subset of the sObjects input array and each chunk contains records of one object type. Data is committed on a chunk-by-chunk basis. Any Apex triggers related to the records in a chunk are invoked one time per chunk. Consider an sObjects input array containing this set of records.

```

```

Salesforce splits the records into five chunks.

-   account1, account2
-   contact1, contact2, contact3
-   case1
-   account3, account4
-   contact4

Each call can process up to 10 chunks. If the sObjects array contains more than 10 chunks, you must process the records in more than one call.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api)

#### Warning

You can't update records for multiple object types in one call if one of those types is related to a feature in the Setup area in Salesforce. The only exceptions are the following objects:

-   Custom settings objects, which are similar to custom objects. For more information, see “Create Custom Settings” in Salesforce Help.
-   GroupMember
-   Group
-   User if these fields aren’t being updated:
    -   UserRoleId
    -   IsActive
    -   ForecastEnabled
    -   IsPortalEnabled
    -   Username
    -   ProfileId

## update() and Foreign Keys

You can use external ID fields as a foreign key, which lets you update a record and relate it to another existing record in a single step instead of querying the parent record ID first. To use an external ID as a foreign key, set the foreign key to an instance of the parent sObject that has only the external ID field specified. This external ID must match the external ID value on the parent record.

The following Java and C# examples show you how to update an opportunity and relate it to an existing account using a custom external ID field named MyExtId\_\_c. Each example has a method that accepts the ID of the opportunity to update. It creates an opportunity sObject and sets its ID field so that the object points to an existing opportunity to be updated, sets a new value for the stage name field, and then sets the external ID field to the account object. It then updates the opportunity. After the opportunity is updated, the account becomes its parent and the state name is updated.

Java Example

```

```

C# Example

```

```

## Basic Steps for Updating Records

Use this process to update records.

1.  Determine the ID of each record that you want to [update()](# "Updates one or more existing records in your organization's data."). For example, you can call [query()](atlas.en-us.api.meta/api/sforce_api_calls_query.htm "Executes a query against the specified object and returns data that matches the stated conditions.") to retrieve a set of records (with their IDs), based on specific criteria, that you would want to update. If you know the ID of the record that you want to update, you can call [retrieve()](atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm "Retrieves one or more records based on the specified IDs.") instead. For information on IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).
2.  Create an sObject for each record, and populate its fields with the data that you want to update.
3.  Construct an sObject\[\] array and populate that array with the records that you want to update.
4.  Call [update()](# "Updates one or more existing records in your organization's data."), passing in the sObject\[\] array.
5.  Process the results in the [SaveResult](atlas.en-us.api.meta/api/sforce_api_calls_update_saveresult.htm "The update() call returns an array of SaveResult objects.")\[\] object to verify whether the records have been successfully updated.

## Sample Code—Java

This sample accepts the IDs of the accounts to update. It creates two account sObjects, sets each with one of the passed IDs so that the sObject points to an existing account, and sets other fields. It then makes the update() call and verifies the results.

```

```

## Sample Code—C#

This sample accepts the IDs of the accounts to update. It creates two account sObjects, sets each with one of the passed IDs so that the sObject points to an existing account, and sets other fields. It then makes the update() call and verifies the results.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjects | sObject[] | Array of one or more records (maximum of 200) to update. |

## Response

[SaveResult](atlas.en-us.api.meta/api/sforce_api_calls_update_saveresult.htm "The update() call returns an array of SaveResult objects.")\[\]

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
SaveResult[] = connection.update(sObject[] sObjects);
```

```
Maximum number of duplicate updates in one batch (12 allowed).
```

```
account1, account2, contact1, contact2, contact3, case1, account3, account4, contact4
```

```apex
public void updateForeignKeySample(String oppId) {
   try {
      Opportunity updateOpportunity = new Opportunity();
      // Point to an existing opportunity to update
      updateOpportunity.setId(oppId);
      updateOpportunity.setStageName("Qualification");

      Account parentAccountRef = new Account();
      parentAccountRef.setMyExtId__c("SAP1111111");
      updateOpportunity.setAccount(parentAccountRef);

      SaveResult[] results = connection
            .update(new SObject[] { updateOpportunity });
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void updateForeignKeySample(String oppId)
{
   try
   {
      Opportunity updateOpportunity = new Opportunity();
      // Point to an existing opportunity to update
      updateOpportunity.Id = oppId;
      updateOpportunity.StageName = "Prospecting";

      Account parentAccountRef = new Account();
      parentAccountRef.MyExtId__c = "SAP1111111";
      updateOpportunity.Account = parentAccountRef;

      SaveResult[] results = binding.update(
         new sObject[] { updateOpportunity });
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

- SaveResult (atlas.en-us.api.meta/api/sforce_api_calls_update_saveresult.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- AssignmentRuleHeader (atlas.en-us.api.meta/api/sforce_api_header_assignmentruleheader.htm)
- AllOrNoneHeader (atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm)
- query() (atlas.en-us.api.meta/api/sforce_api_calls_query.htm)
- retrieve() (atlas.en-us.api.meta/api/sforce_api_calls_retrieve.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
