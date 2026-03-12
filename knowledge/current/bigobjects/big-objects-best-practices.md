---
title: "Big Objects Best Practices"
domain: bigobjects
topic: big-objects-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:07.826Z
estimatedTokens: 855
keywords: [Big, Objects, Best, Practices, unique, because, ability, scale, massive, amounts, data, Considerations, Design, Resiliency, Mind]
---

# Big Objects Best Practices

> A big object is unique because of its ability to scale for massive amounts of
  data.

# Big Objects Best Practices

A big object is unique because of its ability to scale for massive amounts of data.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions for up to 1 million records |


## Considerations When Using Big Objects

-   To define a big object or add a field to a custom big object, use either Metadata API or Setup.
-   Big objects support custom Lightning and Visualforce components rather than standard UI elements home pages, detail pages, or list views.
-   You can create up to 100 big objects per org. The limits for big object fields are similar to the limits on custom objects and depend on your org’s license type.
-   You can’t use Salesforce Connect external objects to access big objects in another org.
-   Big objects don't support encryption. If you archive encrypted data from a standard or custom object, it’s stored as clear text on the big object.

    If you’re using Salesforce Shield Platform Encryption, standard or custom object field history is encrypted. For field history, data is archived using the Shield field history archive. Big objects respect encryption at rest.

    Shield Platform Encryption isn’t otherwise supported for custom big objects.


## Design with Resiliency in Mind

The big objects database stores billions of records and is a distributed system that favors consistency over availability. The database is designed to ensure row-level consistency.

When working with big data and writing batches of records using APIs or Apex, you can experience a partial batch failure while some records are written and others aren’t. Because the database is highly responsive and consistent at scale, this type of behavior is expected. In these cases, simply retry until all records are written.

Keep these principles in mind when working with big objects.

-   The best practice when writing to a big object is to have a retry mechanism in place. Retry the batch until you get a successful result from the API or Apex method.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bigobjects)

    #### Tip

    To add logging to a custom object and surface errors to users, use the addError() method. See [An Introduction to Exception Handling](https://developer.salesforce.com/page/An_Introduction_to_Exception_Handling "HTML (New Window)").

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bigobjects)

    #### Tip

    To verify that all records are saved, check the Database.SaveResult class. See SaveResult Class Reference.

-   Don’t try to figure out which records succeeded and which failed. Retry the entire batch.
-   Big objects don’t support transactions. If attempting to read or write to a big object using a trigger, process, or flow on a sObject, use asynchronous Apex. Asynchronous Apex has features like the Queueable interface that isolates DML operations on different sObject types to prevent the mixed DML error.
-   Because your client code must retry, use asynchronous Apex to write to a big object. By writing asynchronously, you’re better equipped to handle database lifecycle events.

#### See Also

-   [*Salesforce Help:* Big Objects](https://help.salesforce.com/articleView?id=custom_index.htm&language=en_US "Salesforce Help: Big Objects - HTML (New Window)")
