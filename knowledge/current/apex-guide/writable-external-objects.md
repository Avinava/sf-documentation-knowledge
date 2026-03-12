---
title: "Writable External Objects"
domain: apex-guide
topic: writable-external-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.983Z
estimatedTokens: 739
namespace: DataSource
keywords: [Writable, External, Objects, default, external, objects, read, only, writable., Doing, lets, Salesforce, users, APIs, create, update, delete, data, that’s, stored]
---

# Writable External Objects

> By default, external objects are read only, but you can make them writable. Doing so
        lets Salesforce users and APIs create, update, and delete data that’s stored outside the org
        by interacting with external objects within the org. For example, users can see all the
        orders that reside in an SAP system that are associated with an account in Salesforce. Then,
        without leaving the Salesforce user interface, they can place a new order or route an
        existing order. The relevant data is automatically created or updated in the SAP
        system.

**Namespace:** `DataSource`

# Writable External Objects

By default, external objects are read only, but you can make them writable. Doing so lets Salesforce users and APIs create, update, and delete data that’s stored outside the org by interacting with external objects within the org. For example, users can see all the orders that reside in an SAP system that are associated with an account in Salesforce. Then, without leaving the Salesforce user interface, they can place a new order or route an existing order. The relevant data is automatically created or updated in the SAP system.

Access to external data depends on the connections between Salesforce and the external systems that store the data. Network latency and the availability of the external systems can introduce timing issues with Apex write or delete operations on external objects.

Because of the complexity of these connections, Apex can’t execute standard insert(), update(), or create() operations on external objects. Instead, Apex provides a specialized set of database methods and keywords to work around potential issues with write execution. DML insert, update, create, and delete operations on external objects are either asynchronous or executed when specific criteria are met.

This example uses the Database.insertAsync() method to insert a new order into a database table asynchronously. It returns a SaveResult object that contains a unique identifier for the insert job.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Writes performed on external objects through the Salesforce user interface or the API are synchronous and work the same way as for standard and custom objects.

You can perform the following DML operations on external objects, either asynchronously or based on criteria: insert records, update records, upsert records, or delete records. Use classes in the DataSource namespace to get the unique identifiers for asynchronous jobs, or to retrieve results lists for upsert, delete, or save operations.

When you initiate an Apex method on an external object, a job is scheduled and placed in the background jobs queue. The BackgroundOperation object lets you view the job status for write operations via the API or SOQL. Monitor job progress and related errors in the org, extract statistics, process batch jobs, or see how many errors occur in a specified time period.

For usage information and examples, see [Database Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_Database.htm) and [DataSource Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_DataSource.htm).

#### See Also

-   [*Salesforce Help*: Writable External Objects Considerations for Salesforce Connect—All Adapters](https://help.salesforce.com/HTViewHelpDoc?id=platform_connect_considerations_writable_external_objects.htm&language=en_US)

## Code Examples

```apex
​public void createOrder () {​   
    SalesOrder__x order = new SalesOrder__x ();​   
    Database.SaveResult sr = Database.insertAsync (order);​   
    if (! sr.isSuccess ()) {
        String locator =  Database.getAsyncLocator ( sr );​     
        completeOrderCreation(locator);
    }
​}
```
