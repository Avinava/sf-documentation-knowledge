---
title: "Populate a Custom Big Object with Apex"
domain: bigobjects
topic: populate-a-custom-big-object-with-apex
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:07.857Z
estimatedTokens: 1151
keywords: [Populate, Custom, Big, Apex, Considerations, Populating, Objects, Test]
---

# Populate a Custom Big Object with Apex

> Use Apex to populate a custom big object.

# Populate a Custom Big Object with Apex

Use Apex to populate a custom big object.

You can create and update custom big object records in Apex using the [Database.insertImmediate()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_insertImmediate_2 "HTML (New Window)") method. DML operations on big objects are considered callouts, so [Apex execution governors and limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm) for callouts apply. However, DML operations on big objects don’t count towards Apex DML statement limits.

Here’s an example of an insert operation in Apex that assumes a table where the index consists of FirstName\_\_c, LastName\_\_c, and Address\_\_c.

```

```

```

```

```

```

## Considerations for Populating Big Objects with Apex

We recommend that you use the Apex [String.trim()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_string.htm#apex_System_String_trim "HTML (New Window)") method to remove leading and trailing white space before you insert values, especially for values in primary key fields. This best practice ensures that SOQL queries on the big objects later work as you expect.

When you specify an index field in a SOQL query WHERE clause, SOQL removes any leading or trailing white space before it compares it to the actual field value. Even if your filter string matches the value that was inserted, leading and trailing white space isn’t compared, and so no rows are matched by the filter.

Therefore, leading and trailing white space can’t be compared to values that have been stored. Even if your filter string matches the value that was inserted, no rows are matched by the filter.

If you set values to NULL when upserting into a custom big object, the fields aren’t updated if they have existing values. To set these values to NULL, delete the field and recreate it.

Reinserting a record with the same index but different data results in behavior similar to an upsert operation. If a record with the index exists, the insert overwrites the index values with the new data. Insertion is idempotent, so inserting data that exists doesn’t result in duplicates. Reinserting is helpful when uploading millions of records. If an error occurs, the reinsertion reuploads the failed uploads without duplicate data. During the reinsertion, if no record exists for the provided index, a new record is inserted.

If a record insert fails, the Database.insertImmediate() method doesn’t throw an exception. Instead, it returns a [SaveResult](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_saveresult.htm "HTML (New Window)") object that has a getErrors() method that returns a list of [Database.Error](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database_error.htm "HTML (New Window)") objects. Each Database.Error object contains information about an error that occurred as a result of a failed record insert. See the [Returned Database Errors](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_dml_database_error.htm) for more information about SaveResult and an example of iterating through the errors.

## Test Populating Big Objects with Apex

Apex tests that use mixed DML calls, such as the insertion of data into big objects and sObjects within a single transaction, aren’t allowed and fail.

Apex tests are allowed to perform DML on big objects. However, real data is manipulated without any automatic rollback or cleanup. You must manually roll back each test DML operation performed on a big object. Alternatively, you can [build a mocking framework with the Apex stub API](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_stub_api.htm "HTML (New Window)") to mock the database methods and avoid the actual insertion of the big object.

#### See Also

-   [Apex Developer Guide: Build a Mocking Framework with the Stub API](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing_stub_api.htm "Apex Developer Guide: Build a Mocking Framework with the Stub
    API - HTML (New Window)")

-   [*Apex Developer Guide*: Returned Database Errors](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_dml_database_error.htm "Apex Developer Guide: Returned Database Errors - HTML (New Window)")

## Code Examples

```
// Define the record.
PhoneBook__b pb = new PhoneBook__b();
pb.FirstName__c = 'John';
pb.LastName__c = 'Smith';
pb.Address__c = '1 Market St';
pb.PhoneNumber__c = '555-1212';
database.insertImmediate(pb);
// A single record will be created in the big object.
```

```
// Define the record with the same index values but different phone number.
PhoneBook__b pb = new PhoneBook__b();
pb.FirstName__c = 'John';
pb.LastName__c = 'Smith';
pb.Address__c = '1 Market St';
pb.PhoneNumber__c = '415-555-1212';
database.insertImmediate(pb);
// The existing records will be "re-inserted". Only a single record will remain in the big object.
```

```
// Define the record with the different index values and different phone number
PhoneBook__b pb = new PhoneBook__b();
pb.FirstName__c = 'John';
pb.LastName__c = 'Smith';
pb.Address__c = 'Salesforce Tower';
pb.PhoneNumber__c = '415-555-1212';
database.insertImmediate(pb);
// A new record will be created leaving two records in the big object.
```
