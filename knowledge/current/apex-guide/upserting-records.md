---
title: "Upserting Records"
domain: apex-guide
topic: upserting-records
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.084Z
keywords: [Upserting, Records, Note, Examples]
---

# Upserting Records

# Upserting Records

Using the upsert operation, you can either insert or update an existing record in one call. To determine whether a record already exists, the upsert statement or Database method uses the record’s ID as the key to match records, a custom external ID field, or a standard field with the idLookup attribute set to true.

-   If the key isn’t matched, then a new object record is created.
-   If the key is matched once, then the existing object record is updated.
-   If the key is matched multiple times, then an error is generated and the object record is not inserted or updated.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Custom field matching is case-insensitive only if the custom field has the **Unique** and **Treat "ABC" and "abc" as duplicate values (case insensitive)** attributes selected as part of the field definition. If this is the case, “ABC123” is matched with “abc123.” For more information, see [Create Custom Fields](https://help.salesforce.com/apex/HTViewHelpDoc?id=adding_fields.htm&language=en_US).

## Examples

The following example updates the city name for all existing accounts in the city formerly known as Bombay, and also inserts a new account in San Francisco:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

For more information on processing DmlExceptions, see [Bulk DML Exception Handling](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dml_bulk_exceptions.htm).

This next example uses the Database.upsert method to upsert a collection of leads that are passed in. This example allows for partial processing of records, that is, in case some records fail processing, the remaining records are still inserted or updated. It iterates through the results and adds a task to each record that was processed successfully. The task sObjects are saved in a list, which is then bulk inserted. This example is followed by a test class that contains a test method for testing the example.

```

```

```

```

Use of upsert with an external ID can reduce the number of DML statements in your code, and help you to avoid hitting governor limits (see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.")).

This example uses upsert and an external ID field Line\_Item\_Id\_\_c on the Asset object to maintain a one-to-one relationship between an asset and an opportunity line item. Before running the sample, create a custom text field on the Asset object named Line\_Item\_Id\_\_c and mark it as an external ID. For information on custom fields, see Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

External ID fields used in upsert calls must be unique or the user must have the View All Data permission.

```

```