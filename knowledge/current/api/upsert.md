---
title: "upsert()"
domain: api
topic: upsert
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:57.624Z
estimatedTokens: 2297
keywords: [upsert, Creates, records, updates, uses, custom, determine, presence, cases, recommend, instead, avoid, creating, unwanted, duplicate]
---

# upsert()

> Creates records and updates existing records; uses a custom field to determine the
		presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call
		is available in API version 7.0 and later.

# upsert()

Creates records and updates existing records; uses a custom field to determine the presence of existing records. In most cases, we recommend that you use upsert() instead of create() to avoid creating unwanted duplicate records (idempotent). This call is available in API version 7.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Starting with API version 15.0, if you specify a value for a field that contains a string, and the value is too large for the field, the call fails, and an error is returned. In previous versions of the API the value was truncated and the call succeeded. If you wish to keep the old behavior with versions 15.0 and later, use the [AllowFieldTruncationHeader](atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm "Specifies that for some fields, when a string is too large, the operation fails. Without the header, strings for these fields are truncated.") SOAP header.

## Syntax

```

```

## Usage

Upsert is a merging of the words insert and update. This call is available for objects if the object has an external ID field or a field with the [idLookup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/access_for_fields.htm#access_lookup) field property.

On custom objects, this call uses an indexed custom field called an external ID to determine whether to create a record or update an existing record. On standard objects, this call can use the name of any field with the idLookup instead of the external ID.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

External ID fields can’t be used with merge().

For more information about adding custom fields, including external ID fields, to objects, see the “Adding Fields” topic in Salesforce Help.

Using this call can dramatically reduce how many calls you must make, particularly when:

-   You’re integrating your organization's Salesforce data with ERP (enterprise resource planning) systems such as accounting and manufacturing.
-   You’re importing data and want to prevent the creation of duplicate objects.

If you’re upserting a record for an object that has a custom field with both the External ID and Unique attributes selected (a unique index), you don’t need any special permissions, because the Unique attribute prevents the creation of duplicates. If you’re upserting a record for an object that has the External ID non-unique index) your client application must have the permission “View All Data” to execute this call.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api)

#### Note

Matching by external ID is case-insensitive only if the external ID field has the Unique attribute and the Treat "ABC" and "abc" as duplicate values (case insensitive)) option selected. These options are selected in the Salesforce user interface during field creation. If these options are selected, “ABC123” is matched with “abc123.” Before performing an operation, if you have external ID fields without the case-insensitive option selected, review your external IDs for any values that would be matched if the case wasn't considered. If such values exist, consider modifying them to make them unique, or select the case-sensitive option for your external ID fields. For more information about field attributes, see “Custom Field Attributes” in Salesforce Help.

## How Upsert Chooses to update() or create()

Upsert uses the external ID to determine whether it creates a record or updates an existing one:

-   If the external ID isn’t matched, then a new record is created.
-   If the external ID is matched one time, then the existing record is updated.
-   If the external ID is matched multiple times, then an error is reported.
-   When batch updating multiple records where the external ID is the same for two or more records in your batch call, those records are marked as errors in the [UpsertResult](atlas.en-us.api.meta/api/sforce_api_calls_upsert_upsertresult.htm "The upsert() call returns an array of UpsertResult objects. Each element in the array corresponds to the sObject[] array passed as the sObjects parameter in the upsert() call. For example, the object returned in the first index in the UpsertResult array matches the object specified in the first index of the sObject[] array.") file. The records are neither created.

## Rollback on Error

The [AllOrNoneHeader](atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm "Allows a call to roll back all changes unless all records are processed successfully.") header lets you roll back all changes unless all records are processed successfully. This header is available in API version 20.0 and later.

## Automatic Subscriptions for Chatter Feeds

To subscribe to records they create, users must enable the Automatically follow records that I create option in their personal settings. If users have automatic subscriptions enabled, they automatically follow the records they create and see changes to those records in their Chatter feed on the Home tab.

When you update the owner of a record, the new owner isn’t automatically subscribed to the record, unless the new owner has automatic subscriptions for records enabled in his or her Chatter feed settings. The previous owner isn’t automatically unsubscribed. If the new owner has automatic subscriptions for records enabled, the new and previous owners both see any changes to the record in their news feed.

A user can subscribe to a record or to another user. Changes to the record and updates from the users are displayed in the Chatter feed on the user's home page, which is a useful way to stay up to date with other users and with changes made to records in Salesforce. Feeds are available in API version 18.0 and later.

## upsert() and Foreign Keys

You can use external ID fields as a foreign key, which lets you create or update a record and relate it to another existing record in a single step instead of querying the parent record ID first. To use an external ID field as a foreign key, set the foreign key to an instance of the parent sObject that has only the external ID field specified. This external ID must match the external ID value on the parent record. Unlike create(), the parent record must currently exist when using upsert() to create or update a child record related by a foreign key.

The following Java and C# examples upsert an opportunity. In this case, the opportunity doesn't exist in the database, so the upsert() call creates it. The opportunity references an existing account. Rather than specify the account ID, which would require a separate query to obtain, we specify an external ID for the account, in this example the MyExtId\_\_c custom field.

Java Example

```

```

C# Example

```

```

## Sample Code—Java

This sample upserts two accounts using a custom external ID field called MyExtId\_\_c. The upsert() call matches the accounts based on the MyExtId\_\_c field in order to determine whether to create or update the accounts. Before running this sample, change the MyExtId\_\_c field name to an existing custom ID field name in your org.

```

```

## Sample Code—C#

This sample upserts two accounts using a custom external ID field called MyExtId\_\_c. The upsert() call matches the accounts based on the MyExtId\_\_c field in order to determine whether to create or update the accounts. Before running this sample, change the MyExtId\_\_c field name to an existing custom ID field name in your org.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| ExternalIDFieldName | string | Contains the name of the field on this object with the external ID field attribute for custom objects or the idLookup field property for standard objects. The idLookup field property is usually on a field that is the object's ID field or name field, but there are exceptions, so check for the presence of the property in the object you wish to upsert(). |
| sObjects | sObject[] | Array of one or more records (maximum of 200) to create or update. All records must have the same object type. |

## Response

[UpsertResult](atlas.en-us.api.meta/api/sforce_api_calls_upsert_upsertresult.htm "The upsert() call returns an array of UpsertResult objects. Each element in the array corresponds to the sObject[] array passed as the sObjects parameter in the upsert() call. For example, the object returned in the first index in the UpsertResult array matches the object specified in the first index of the sObject[] array.")\[\]

## Faults

[InvalidSObjectFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421599)

[UnexpectedErrorFault](atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm#i1421680)

#### See Also

-   [create()](atlas.en-us.api.meta/api/sforce_api_calls_create.htm "Adds one or more new records to your organization’s data.")

-   [update()](atlas.en-us.api.meta/api/sforce_api_calls_update.htm "Updates one or more existing records in your organization's data.")

-   [API Call Basics](atlas.en-us.api.meta/api/calls.htm)

## Code Examples

```
UpsertResult[] = connection.upsert(String externalIdFieldName, sObject[] sObjects);
```

```apex
public void upsertForeignKeySample() {
   try {
      Opportunity newOpportunity = new Opportunity();
      newOpportunity.setName("UpsertOpportunity");
      newOpportunity.setStageName("Prospecting");
      Calendar dt = connection.getServerTimestamp().getTimestamp();
      dt.add(Calendar.DAY_OF_MONTH, 7);
      newOpportunity.setCloseDate(dt);
      newOpportunity.setMyExtId__c("UPSERTID001");

      // Parent Account record must already exist
      Account parentAccountRef = new Account();
      parentAccountRef.setMyExtId__c("SAP111111");
      newOpportunity.setAccount(parentAccountRef);

      SaveResult[] results = connection
            .upsert("MyExtId__c", new SObject[] { newOpportunity });         
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void upsertForeignKeySample()
{
   try
   {
      Opportunity newOpportunity = new Opportunity();
      newOpportunity.Name = "UpsertOpportunity";
      newOpportunity.StageName = "Prospecting";
      DateTime dt = (DateTime)binding.getServerTimestamp().timestamp;
      newOpportunity.CloseDate = dt.AddDays(7);
      newOpportunity.CloseDateSpecified = true;
      newOpportunity.MyExtId__c = "UPSERTID001";

      // Parent Account record must already exist
      Account parentAccountRef = new Account();
      parentAccountRef.MyExtId__c = "SAP111111";
      newOpportunity.Account = parentAccountRef;

      SaveResult[] results = binding
            .upsert("MyExtId", new sObject[] { newOpportunity });
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
public void upsertRecords() {
   SObject[] upserts = new Account[2];

   Account upsertAccount1 = new Account();
   upsertAccount1.setName("Begonia");
   upsertAccount1.setIndustry("Education");
   upsertAccount1.setMyExtId__c("1111111111");
   upserts[0] = upsertAccount1;

   Account upsertAccount2 = new Account();
   upsertAccount2 = new Account();
   upsertAccount2.setName("Bluebell");
   upsertAccount2.setIndustry("Technology");
   upsertAccount2.setMyExtId__c("2222222222");
   upserts[1] = upsertAccount2;

   try {
      // Invoke the upsert call and save the results.
      // Use External_Id custom field for matching records.
      UpsertResult[] upsertResults = connection.upsert(
                                  "MyExtId__c", upserts);
      for (UpsertResult result : upsertResults) {
         if (result.isSuccess()) {
            System.out.println("
Upsert succeeded.");
            System.out.println((result.isCreated() ? "Insert" : "Update")
                  + " was performed.");
            System.out.println("Account ID: " + result.getId());
         } else {
            System.out.println("The Upsert failed because: "
                  + result.getErrors()[0].getMessage());
         }
      }
   } catch (ConnectionException ce) {
      ce.printStackTrace();
   }
}
```

```apex
public void upsertRecords()
{
   sObject[] upserts = new Account[2];

   Account upsertAccount1 = new Account();
   upsertAccount1.Name = "Begonia";
   upsertAccount1.Industry = "Education";
   upsertAccount1.MyExtId__c = "1111111111";
   upserts[0] = upsertAccount1;

   Account upsertAccount2 = new Account();
   upsertAccount2 = new Account();
   upsertAccount2.Name = "Bluebell";
   upsertAccount2.Industry = "Technology";
   upsertAccount2.MyExtId__c = "2222222222";
   upserts[1] = upsertAccount2;

   try
   {
      // Invoke the upsert call and save the results.
      // Use External_Id custom field for matching records.
      UpsertResult[] upsertResults =
            binding.upsert("MyExtId__c", upserts);
      foreach (UpsertResult result in upsertResults)
      {
         if (result.success)
         {
            Console.WriteLine("
Upsert succeeded.");
            Console.WriteLine(
                  (result.created ? "Insert" : "Update") +
                  " was performed."
            );
            Console.WriteLine("Account ID: " + result.id);
         }
         else
         {
            Console.WriteLine("The Upsert failed because: " +
                  result.errors[0].message);
         }
      }
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

- AllowFieldTruncationHeader (atlas.en-us.api.meta/api/sforce_api_header_allowfieldtruncation.htm)
- UpsertResult (atlas.en-us.api.meta/api/sforce_api_calls_upsert_upsertresult.htm)
- sObject (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- AllOrNoneHeader (atlas.en-us.api.meta/api/sforce_api_header_allornoneheader.htm)
- InvalidSObjectFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- UnexpectedErrorFault (atlas.en-us.api.meta/api/sforce_api_calls_concepts_core_data_objects.htm)
- create() (atlas.en-us.api.meta/api/sforce_api_calls_create.htm)
- update() (atlas.en-us.api.meta/api/sforce_api_calls_update.htm)
- API Call Basics (atlas.en-us.api.meta/api/calls.htm)
