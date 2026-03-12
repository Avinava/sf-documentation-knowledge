---
title: "Things You Should Know about Data in Apex"
domain: apex-guide
topic: things-you-should-know-about-data-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.727Z
estimatedTokens: 2131
keywords: [Things, Should, Know, Data, Apex, upsert, statement, consists, two, operations, inserting, records, updating, records., subject, runtime, limits, insert, update, respectively.]
---

# Things You Should Know about Data in Apex

> Each upsert statement consists of two operations, one for inserting records and
            one for updating records. Each of these operations is subject to the runtime limits for
              insert and update, respectively. For example, if you upsert more than 10,000 records
            and all o

# Things You Should Know about Data in Apex

Non-Null Required Fields Values and Null Fields

When inserting new records or updating required fields on existing records, you must supply non-null values for all required fields.

Unlike the SOAP API, Apex allows you to change field values to null without updating the fieldsToNull array on the sObject record. The API requires an update to this array due to the inconsistent handling of null values by many SOAP providers. Because Apex runs solely on the Lightning Platform, this workaround is unnecessary.

DML Not Supported with Some sObjects

DML operations are not supported with certain sObjects. See [sObjects That Don’t Support DML Operations](atlas.en-us.apexcode.meta/apexcode/apex_dml_non_dml_objects.htm).

String Field Truncation and API Version

Apex classes and triggers saved (compiled) using API version 15.0 and higher produce a runtime error if you assign a String value that is too long for the field.

sObject Properties to Enable DML Operations

To be able to insert, update, delete, or undelete an sObject record, the sObject must have the corresponding property (createable, updateable, deletable, or undeletable respectively) set to true.

ID Values

The insert statement automatically sets the ID value of all new sObject records. Inserting a record that already has an ID—and therefore already exists in your organization's data—produces an error. See [Lists](atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm "A list is an ordered collection of elements that are distinguished by their indices. List elements can be of any data type—primitive types, collections, sObjects, user-defined types, and built-in Apex types.") for more information.

The insert and update statements check each batch of records for duplicate ID values. If there are duplicates, the first five are processed. For the sixth and all additional duplicate IDs, the SaveResult for those entries is marked with an error similar to the following: Maximum number of duplicate updates in one batch (5 allowed). Attempt to update Id more than once in this API call: number\_of\_attempts.

The ID of an updated sObject record cannot be modified in an update statement, but related record IDs can.

Fields With Unique Constraints

For some sObjects that have fields with unique constraints, inserting duplicate sObject records results in an error. For example, inserting CollaborationGroup sObjects with the same names results in an error because CollaborationGroup records must have unique names.

System Fields Automatically Set

When inserting new records, system fields such as CreatedDate, CreatedById, and SystemModstamp are automatically updated. You cannot explicitly specify these values in your Apex. Similarly, when updating records, system fields such as LastModifiedDate, LastModifiedById, and SystemModstamp are automatically updated.

Maximum Number of Records Processed by DML Statement

You can pass a maximum of 10,000 sObject records to a single insert, update, delete, and undelete method.

Each upsert statement consists of two operations, one for inserting records and one for updating records. Each of these operations is subject to the runtime limits for insert and update, respectively. For example, if you upsert more than 10,000 records and all of them are being updated, you receive an error. (See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled."))

Upsert and Foreign Keys

You can use foreign keys to upsert sObject records if they have been set as reference fields. For more information, see [Field Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/field_types.htm "html (New Window)") in the Object Reference for Salesforce.

Creating Records for Multiple Object Types

As with the SOAP API, you can create records in Apex for multiple object types, including custom objects, in one DML call with API version 20.0 and later. For example, you can create a contact and an account in one call. You can create records for up to 10 object types in one call.

Records are saved in the same order that they’re entered in the sObject input array. If you’re entering new records that have a parent-child relationship, the parent record must precede the child record in the array. For example, if you’re creating a contact that references an account that’s also being created in the same call, the account must have a smaller index in the array than the contact does. The contact references the account by using an External ID field.

You can’t add a record that references another record of the same object type in the same call. For example, the Contact object has a Reports To field that’s a reference to another contact. You can’t create two contacts in one call if one contact uses the Reports To field to reference a second contact in the input array. You can create a contact that references another contact that has been previously created.

Records for multiple object types are broken into multiple chunks by Salesforce. A chunk is a subset of the input array, and each chunk contains records of one object type. Data is committed on a chunk-by-chunk basis. Any Apex triggers that are related to the records in a chunk are invoked once per chunk. Consider an sObject input array that contains the following set of records:

```

```

Salesforce splits the records into five chunks:

1.  account1, account2
2.  contact1, contact2, contact3
3.  case1
4.  account3, account4
5.  contact4

Each call can process up to 10 chunks. If the sObject array contains more than 10 chunks, you must process the records in more than one call. For additional information about this feature, see [Creating Records for Different Object Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_create.htm#MixedSaveTitle "HTML (New Window)") in the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_quickstart_intro.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For Apex, the chunking of the input array for an insert or update DML operation has two possible causes: the existence of multiple object types or the default chunk size of 200. If chunking in the input array occurs because of both of these reasons, each chunk is counted toward the limit of 10 chunks. If the input array contains only one type of sObject, you won’t hit this limit. However, if the input array contains at least two sObject types and contains a high number of objects that are chunked into groups of 200, you might hit this limit. For example, if you have an array that contains 1,001 consecutive leads followed by 1,001 consecutive contacts, the array will be chunked into 12 groups: Two groups are due to the different sObject types of Lead and Contact, and the remaining are due to the default chunking size of 200 objects. In this case, the insert or update operation returns an error because you reached the limit of 10 chunks in hybrid arrays. The workaround is to call the DML operation for each object type separately.

DML and Knowledge Objects

To execute DML code on knowledge articles (KnowledgeArticleVersion types such as the custom FAQ\_\_kav article type), the running user must have the Knowledge User feature license. Otherwise, calling a class method that contains DML operations on knowledge articles results in errors. If the running user isn’t a system administrator and doesn’t have the Knowledge User feature license, calling any method in the class returns an error even if the called method doesn’t contain DML code for knowledge articles but another method in the class does. For example, the following class contains two methods, only one of which performs DML on a knowledge article. A non-administrator non-knowledge user who calls the doNothing method will get the following error: DML operation UPDATE not allowed on FAQ\_\_kav

```

```

As a workaround, cast the input array to the DML statement from an array of FAQ\_\_kav articles to an array of the generic sObject type as follows:

```

```

## Code Examples

```
account1, account2, contact1, contact2, contact3, case1, account3, account4, contact4
```

```apex
public class KnowledgeAccess {
 
  public void doNothing() {
  }
  
  public void DMLOperation() {  
    FAQ__kav[] articles = [SELECT Id FROM FAQ__kav WHERE PublishStatus = 'Draft' and Language = 'en_US'];
    update articles;
  }
 
}
```

```apex
public void DMLOperation() {  
    FAQ__kav[] articles = [SELECT id FROM FAQ__kav WHERE PublishStatus = 'Draft' and Language = 'en_US'];
    update (sObject[]) articles;
}
```

## Related Topics

- sObjects That Don’t Support DML Operations (atlas.en-us.apexcode.meta/apexcode/apex_dml_non_dml_objects.htm)
- Lists (atlas.en-us.apexcode.meta/apexcode/langCon_apex_collections_lists.htm)
- Execution Governors and Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
