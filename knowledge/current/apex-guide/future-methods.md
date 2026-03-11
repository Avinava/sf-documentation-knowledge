---
title: "Future Methods"
domain: apex-guide
topic: future-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.256Z
keywords: [Future, Methods, Important, Method, Limits, Note, Testing, Performance, Best, Practices]
---

# Future Methods

# Future Methods

A future method runs asynchronously. You can call a future method to run long-running operations, such as callouts to external web services or any operation that you want to run in its own thread. You can also use future methods to isolate Data Manipulation Language (DML) operations on different sObject types to prevent the mixed DML error. Each future method is queued and runs when system resources become available. That way, the execution of your code doesn’t wait for the completion of a long-running operation. A benefit of future methods is that some governor limits are higher, such as SOQL query limits and heap size limits.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexcode)

#### Important

Salesforce now recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer more benefits, including job IDs, support for non-primitive types, and job chaining.

See [Queueable Apex](atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm "Take control of your asynchronous Apex processes by using the Queueable interface. Salesforce recommends that you use Queueable Apex instead of Apex future methods. Queueables have the same use cases as future methods but offer extra benefits, including job IDs, support for non-primitive types, and job chaining.").

To define a future method, annotate it with the Future annotation.

```

```

Methods with the Future annotation must be static methods, and can only return a void type. The specified parameters must be primitive data types, arrays of primitive data types, or collections of primitive data types. Methods with the Future annotation can’t take sObjects or objects as arguments.

The reason why sObjects can’t be passed as arguments to future methods is because the sObject can change between the time that you call the method and the time that it executes. In this case, the future method gets the old sObject values and can overwrite them. To work with sObjects that already exist in the database, pass the sObject ID or the collection of IDs instead. Then use the ID to perform a query for the most up-to-date record. This example shows how to do so with a list of IDs.

```

```

Here’s a skeletal example of a future method that makes a callout to an external service. Notice that the annotation takes an extra parameter (callout\=true) to indicate that callouts are allowed. To learn more about callouts, see [Invoking Callouts Using Apex](atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm).

```

```

Insert a user with a non-null role in a separate thread from DML operations on other sObjects. In this example, the future method, insertUserWithRole, which is defined in the Util class, performs the insertion of a user with the COO role. This future method requires the COO role to be defined in the org. The useFutureMethod method in MixedDMLFuture inserts an account and calls the future method insertUserWithRole.

This Util class contains the future method for inserting a user with a non-null role.

```

```

This class contains the main method that calls the future method.

```

```

You can invoke future methods the same way that you invoke any other method. However, a future method can’t invoke another future method.

## Future Method Limits

Methods with the Future annotation have these limits.

-   No more than 0 in batch and future contexts; 50 in queueable context method calls per Apex invocation. Asynchronous calls, such as Future or executeBatch, that are called in a startTest or stopTest block don’t count against your limits for the number of queued jobs.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)
    
    #### Note
    
    Having multiple future methods fan out from a queueable job isn’t a recommended practice as it can rapidly add many future methods to the asynchronous queue. Request processing can be delayed and you can quickly hit the daily maximum limit for asynchronous Apex method executions. See [Future Method Performance Best Practices](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_invoking_future_methods.htm "HTML (New Window)") and [Lightning Platform Apex Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm#in_topic_non_transactional_gov_limits_section "HTML (New Window)").
    
-   The maximum number of Future method invocations per a 24-hour period is 250,000 or the number of user licenses in your organization multiplied by 200, whichever is greater. This limit is for your entire org and is shared with all asynchronous Apex: Batch Apex, Queueable Apex, scheduled Apex, and future methods. To check how many asynchronous Apex executions are available, make a request to REST API limits resource. See [List Organization Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "HTML (New Window)") in the [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/ "HTML (New Window)"). If the number of asynchronous Apex executions needed by a job exceeds the available number that’s calculated by using the 24-hour rolling limit, an exception is thrown. For example, if your async job requires 10,000 method executions and the available 24-hour rolling limit is 9,500, you get the AsyncApexExecutions Limit exceeded exception. The license types that count toward this limit include full Salesforce and Salesforce Platform user licenses, App Subscription user licenses, Chatter Only users, Identity users, and Company Communities users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

-   Future jobs queued by a transaction aren’t processed if the transaction rolls back.
-   Future method jobs queued before a Salesforce service maintenance downtime remain in the queue. After service downtime ends and when system resources become available, the queued future method jobs are executed. If a future method was running when downtime occurred, the future method execution is rolled back and restarted after the service comes back up.

## Testing Future Methods

To test methods defined with the Future annotation, call the class containing the method in a [startTest()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_startTest "HTML (New Window)"), [stopTest()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_stopTest "HTML (New Window)") code block. All asynchronous calls made after the startTest method are collected by the system. When stopTest is executed, all asynchronous processes are run synchronously.

For our example, here’s the test class.

```

```

## Future Method Performance Best Practices

Salesforce uses a queue-based framework to handle asynchronous processes from such sources as future methods and batch Apex. This queue is used to balance request workload across organizations.To ensure that your organization is efficiently using the queue for your asynchronous processes:

-   Avoid adding large numbers of future methods to the asynchronous queue, if possible. If more than 2,000 unprocessed requests from a single organization are in the queue, any additional requests from the same organization will be delayed while the queue handles requests from other organizations.
-   Make sure that future methods run as fast as possible. To ensure fast execution of batch jobs, minimize web service callout times and tune queries used in your future methods. The longerthe future method runs, the more likely other queued requests are delayed when there are many requests in the queue.
-   Test your future methods at scale. To help determine if delays can occur, test by using an environment that generates the maximum number of future methods that you expect to handle.
-   Consider using batch Apex instead of future methods to process large numbers of records.