---
title: "create()"
domain: api
topic: create
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.936Z
estimatedTokens: 4150
keywords: [Adds, new, records, organization’s, data, Usage, Permissions, Special, Handling, Createable, Automatically, Maintained, Referential, Integrity, Assignment]
---

# create()

> Adds one or more new records to your organization’s data.

# create()

Adds one or more new records to your organization’s data.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Syntax

```

```

## Usage

Use create() to add one or more records, such as an [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") or [Contact](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contact.htm "HTML (New Window)") record, to your organization's information. The create() call is analogous to the INSERT statement in SQL.

When creating objects, consider the following rules and guidelines.

## Permissions

Your client application must be logged in with sufficient access rights to create records within the specified object. For more information, see [Factors that Affect Data Access](atlas.en-us.api.meta/api/calls.htm).

## Special Handling

Certain objects—and certain fields within those objects—require special handling or permissions. For example, you need permissions to access the object’s parent object. Before you attempt to create() a record for a particular object, be sure to read its description in the [Standard Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_list.htm "HTML (New Window)").

## Createable Fields

Only objects where createable is true can be created via the create() call. To determine whether a given object can be created, your client application can invoke the describeSObjects()[describeSObjects()](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm "An array-based version of describeSObject(); describes metadata (field list and object properties) for the specified object or array of objects. Use this call instead of describeSObject().") call on the object and inspect its createable property.

## Automatically Maintained Fields

The API generates unique values for ID fields automatically. For create(), you cannot explicitly specify an ID value in the sObject. The saveResult\[\] object contains the ID of each record that was successfully created. For information on IDs, see [ID Field Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm#i1435616).

The API populates certain fields automatically, such as CreatedDate, CreatedById, LastModifiedDate, LastModifiedById, and SystemModstamp. You cannot explicitly specify these values.

## Required Fields

For required fields that do not have a preconfigured default value, you must supply a value. For more information, see [Required Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/required_fields.htm).

## Default Values

For some objects, some fields have a default value, such as OwnerID. If you do not specify a value for such fields, the API populates the fields with the default value. For example, if you do not override OwnerID, then the API populates this field with the user ID associated with the user as whom your client application is logged in.

-   For required fields that do not have a preconfigured default value, you must supply a value.
-   For all other fields in the object, if you do not explicitly specify a value, then its value is null (VT\_EMPTY).

## Referential Integrity

Your client application must conform to the rules of referential integrity. For example, if you are creating a record for an object that is the child of a parent object, you must supply the foreign key information that links the child to the parent. For example, when creating a [CaseComment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm "HTML (New Window)"), you must supply the valid case ID for the parent [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)"), and that parent Case must exist in the database.

## Valid Data Values

You must supply values that are valid for the field's data type, such as integers (not alphabetic characters) for integer fields. In your client application, follow the data formatting rules specified for your programming language and development tool (your development tool handles the appropriate mapping of data types in SOAP messages).

## String Values

When storing values in string fields, the API trims any leading and trailing whitespace. For example, if the value of a name field is entered as " ABC Company ", then the value is stored in the database as "ABC Company".

Starting with API version 15.0, if you specify a value for a field that contains a string, and the value is too large for the field, the call fails, and an error is returned. In previous versions of the API the value was truncated and the call succeeded. If you wish to keep the old behavior with versions 15.0 and later, use the [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.") SOAP header.

## Assignment Rules

When creating [Account](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_account.htm "HTML (New Window)") (accounts fire Territory Management assignment rules), [Case](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_case.htm "HTML (New Window)"), or [Lead](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_lead.htm "HTML (New Window)") records, your client application can set options in the [AssignmentRuleHeader](atlas.en-us.api.meta/api/sforce_api_header_assignmentruleheader.htm "The AssignmentRuleHeader must be specified in the create() or update() call of a Case or Lead for the specified assignment rule to be applied, and it must be specified in the update() call of an Account for the territory assignment rules to be applied.") to have the case or lead automatically assigned to one or more users based on assignment rules configured in the Salesforce user interface.

## Maximum Number of Records Created

Your client application can add up to 200 records in a single create() call. If a create request exceeds 200 records, then the entire operation fails.

## Rollback on Error

The [AllOrNoneHeader](atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm "Allows a call to roll back all changes unless all records are processed successfully.") header allows you to roll back all changes unless all records are processed successfully. This header is available in API version 20.0 and later. Lets a call roll back all changes unless all records are processed successfully.

## Automatic Subscriptions for Chatter Feeds

To subscribe to records they create, users must enable the Automatically follow records that I create option in their personal settings. If users have automatic subscriptions enabled, they automatically follow the records they create and see changes to those records in their Chatter feed on the Home tab.

A user can subscribe to a record or to another user. Changes to the record and updates from the users are displayed in the Chatter feed on the user's home page, which is a useful way to stay up to date with other users and with changes made to records in Salesforce. Feeds are available in API version 18.0 and later. The EntitySubscription object represents a subscription of a user following a record or another user.

## Disabling Feed Notifications

If you're processing a large number of records and don't want to track the changes in various feeds related to the records, use [DisableFeedTrackingHeader](atlas.en-us.api.meta/api/sforce_api_header_disablefeedtracking.htm#sforce_api_header_disablefeedtracking "Specifies that changes made in the current call are tracked in feeds."). This header is especially useful for bulk changes.

## Creating Records for Different Object Types

You can create records for multiple object types, including custom objects, in one call with API version 20.0 and later. For example, you could create a contact and an account in one call. You can create records for up to 10 object types in one call.

Records are saved in the same order that they are entered in the sObjects input array. If you are entering new records that have a parent-child relationship, the parent record must precede the child record in the sObjects array. For example, if you are creating a contact that references an account that is also being created in the same call, the account must have a smaller index in the sObjects array than the contact does. The contact references the account by using an External ID field.

You can't add a record that references another record of the same object type in the same call. For example, the Contact object has a Reports To field that is a reference to another contact. You can't create two contacts in one call if one contact uses the Reports To field to reference a second contact in the sObjects array. You can create a contact that references another contact that has been previously created.

Records for different object types are broken into multiple chunks by Salesforce. A chunk is a subset of the sObjects input array and each chunk contains records of one object type. Data is committed on a chunk-by-chunk basis. Any Apex triggers related to the records in a chunk are invoked one time per chunk. Consider an sObjects input array containing the following set of records:

```

```

Salesforce splits the records into five chunks:

-   account1, account2
-   contact1, contact2, contact3
-   case1
-   account3, account4
-   contact4

Each call can process up to 10 chunks. If the sObjects array contains more than 10 chunks, you must process the records in more than one call.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api)

#### Warning

You can't create records for multiple object types in one call if one of those types is related to a feature in the Setup area in Salesforce. The only exceptions are the following objects:

-   Custom settings objects, which are similar to custom objects. For more information, see “Create Custom Settings” in Salesforce Help .
-   GroupMember
-   Group
-   User if the UserRoleId field is not being set.

## create() and Foreign Keys

You can use external ID fields as a foreign key, which allows you to create a record and relate it to another existing record in a single step instead of querying the parent record ID first. Set the foreign key field to an instance of the parent sObject that only has the external ID field specified. This external ID must match the external ID value on the parent record.

The following Java and C# examples show you how to create an opportunity and relate it to an existing account using a custom external ID field named MyExtId\_\_c. Each example creates an opportunity, sets the required fields, and then sets the opportunity external ID field to the account object that has only the external ID field specified. The code then creates the opportunity. When the opportunity is created, the account is its parent.

Java Example

```

```

C# Example

```

```

## Creating Parent and Child Records in a Single Call Using Foreign Keys

You can use external ID fields as foreign keys to create parent and child records of different sObject types in a single call instead of creating the parent record first, querying its ID, and then creating the child record. To use an external ID field as a foreign key to create parent and child records of different sObject types in a single call:

1.  Create the child sObject and populate its required fields, and optionally other fields.
2.  Create the parent reference sObject used only for setting the parent foreign key reference on the child sObject. This sObject has only the external ID field defined and no other fields set.
3.  Set the foreign key field of the child sObject to the parent reference sObject you just created.
4.  Create another parent sObject to be passed to the create() call. This sObject must have the required fields (and optionally other fields) set in addition to the external ID field.
5.  Call create() by passing it an array of sObjects to create. The parent sObject must precede the child sObject in the array, that is, the array index of the parent must be lower than the child’s index.

The parent and child records are records related through a predefined relationship, such as a master-detail or lookup relationship. You can create related records that are up to 10 levels deep. Also, the related records created in a single call must have different sObject types. For more information, see [Creating Records for Different Object Types](#MixedSaveSection).

The following Java and C# examples show you how to create an opportunity with a parent account in the same create() call. Each example creates an Opportunity sObject and populates some of its fields, then creates two Account objects. The first account is only for the foreign key relationship, and the second is for the account creation and has the account fields set. Both accounts have the external ID field, MyExtID\_\_c, set. Next, the sample calls create() by passing it an array of sObjects. The first element in the array is the parent sObject and the second is the opportunity sObject. The create() call creates the opportunity with its parent account in a single call. Finally, the sample checks the results of the call and writes the IDs of the created records to the console, or the first error if record creation fails.

Java Example

```

```

C# Example

```

```

## Basic Steps for Creating Records

Creating records involves these basic steps.

1.  Create an sObject for one or more objects. For each record, populate its fields with the data that you want to add.
2.  Construct an sObject\[\] array and populate that array with the objects that you want to create.
3.  Call create(), passing in the sObject\[\] array.
4.  Process the results in the saveResult\[\] object to verify whether the records have been successfully created.

## Sample Code—Java

This sample shows how to create records. It creates two Account objects and sets their fields. The Name of the second account isn’t set so that an error occurs on creation, since Name is a required field. After making the create() call by passing the array containing the two accounts, the sample iterates over the results and writes the ID of the new account or an error message if the account creation fails. Finally, the sample returns an array of the new account IDs, which in this case contains only one ID.

```

```

## Sample Code—C#

This sample shows how to create records. It creates two Account objects and sets their fields. The Name of the second account isn't set so that an error occurs on creation, since Name is a required field. After making the create() call by passing the array containing the two accounts, the sample iterates over the results and writes the ID of the new account or an error message if the account creation fails. Finally, the sample returns an array of the new account IDs, which in this case contains only one ID.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| sObjects | sObject[] | Array of one or more sObject objects to create(). Limit: 200 sObject values. |

## Response

saveResult\[\]

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [upsert()](atlas.en-us.api.meta/api/sforce_api_calls_upsert.htm "Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.")

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
SaveResult[] = connection.create(sObject[] sObjects);
```

```
account1, account2, contact1, contact2, contact3, case1, account3, account4, contact4
```

```apex
public void createForeignKeySample() {
   try {
      Opportunity newOpportunity = new Opportunity();
      newOpportunity.setName("OpportunityWithFK");
      newOpportunity.setStageName("Prospecting");
      Calendar dt = connection.getServerTimestamp().getTimestamp();
      dt.add(Calendar.DAY_OF_MONTH, 7);
      newOpportunity.setCloseDate(dt);

      Account parentAccountRef = new Account();
      parentAccountRef.setMyExtId__c("SAP1111111");
      newOpportunity.setAccount(parentAccountRef);

      SaveResult[] results = connection
            .create(new SObject[] { newOpportunity });
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void createForeignKeySample()
{
   try
   {
      Opportunity newOpportunity = new Opportunity();
      newOpportunity.Name = "OpportunityWithFK";
      newOpportunity.StageName = "Prospecting";
      DateTime dt = (DateTime)binding.getServerTimestamp().timestamp;
      newOpportunity.CloseDate = dt.AddDays(7);
      newOpportunity.CloseDateSpecified = true;

      // Create the parent reference.
      // Used only for foreign key reference
      //  and doesn't contain any other fields
      Account accountReference = new Account();
      accountReference.MyExtId__c = "SAP1111111";
      newOpportunity.Account = accountReference;

      // Create the account and the opportunity
      SaveResult[] results = binding.create(new sObject[] {
                              newOpportunity });
   }
   catch (SoapException e)
   {
      Console.WriteLine("An unexpected error has occurred: " +
                              e.Message + "
" + e.StackTrace);
   }
}
```

```apex
public void createForeignKeySample() {
   try {
      Opportunity newOpportunity = new Opportunity();
      newOpportunity.setName("OpportunityWithAccountInsert");
      newOpportunity.setStageName("Prospecting");        
      Calendar dt = connection.getServerTimestamp().getTimestamp();
      dt.add(Calendar.DAY_OF_MONTH, 7);
      newOpportunity.setCloseDate(dt);
      
      // Create the parent reference.
      // Used only for foreign key reference
      // and doesn't contain any other fields.
      Account accountReference = new Account();
      accountReference.setMyExtID__c("SAP111111");
      newOpportunity.setAccount(accountReference);
      
      // Create the Account object to insert.
      // Same as above but has Name field.
      // Used for the create call.
      Account parentAccount = new Account();
      parentAccount.setName("Hallie");
      parentAccount.setMyExtID__c("SAP111111"); 
      
      // Create the account and the opportunity.
      SaveResult[] results = connection.create(new SObject[] {
            parentAccount, newOpportunity });
      
      // Check results.
      for (int i = 0; i < results.length; i++) {
         if (results[i].isSuccess()) {
            System.out.println("Successfully created ID: "
                  + results[i].getId());
         } else {
            System.out.println("Error: could not create sobject "
                  + "for array element " + i + ".");
            System.out.println("   The error reported was: "
                  + results[i].getErrors()[0].getMessage() + "
");
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

## Related Topics

- SaveResult (atlas.en-us.api.meta/api/sforce_api_calls_create_saveresult.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- Factors that Affect Data Access (atlas.en-us.api.meta/api/calls.htm)
- describeSObjects() (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects.htm)
- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- AssignmentRuleHeader (atlas.en-us.api.meta/api/sforce_api_header_assignmentruleheader.htm)
- AllOrNoneHeader (atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm)
- DisableFeedTrackingHeader (atlas.en-us.api.meta/api/sforce_api_header_disablefeedtracking.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
