---
title: "Apex Governor Limits"
domain: salesforce-app-limits-cheatsheet
topic: apex-governor-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.179Z
estimatedTokens: 4658
keywords: [Apex, Governor, Limits, Execution, Governors, Per-Transaction, Certified, Managed, Package, Lightning, Platform, Size-Specific, Push, Notification]
---

# Apex Governor Limits

> Read up on Apex limits details in Execution Governors and Limits

# Apex Governor Limits

Read up on Apex limits details in [Execution Governors and Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_gov_limits.htm)

Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.

## Per-Transaction Apex Limits

These limits count for each Apex transaction. For Batch Apex, these limits are reset for each execution of a batch of records in the execute method.

This table lists limits for synchronous Apex and asynchronous Apex (Batch Apex and future methods) when they’re different. Otherwise, this table lists only one limit that applies to both synchronous and asynchronous Apex.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

-   Although scheduled Apex is an asynchronous feature, synchronous limits apply to scheduled Apex jobs.
-   For Bulk API and Bulk API 2.0 transactions, the effective limit is the higher of the synchronous and asynchronous limits. For example, the maximum number of Bulk Apex jobs added to the queue with System.enqueueJob is the synchronous limit (50), which is higher than the asynchronous limit (1).

| Description | Synchronous Limit | Asynchronous Limit |
| --- | --- | --- |
| Total number of SOQL queries issued1 | 100 | 200 |
| Total number of records retrieved by SOQL queries | 50,000 | 50,000 |
| Total number of records retrieved by Database.getQueryLocator | 10,000 | 10,000 |
| Total number of SOSL queries issued | 20 | 20 |
| Total number of records retrieved by a single SOSL query | 2,000 | 2,000 |
| Total number of DML statements issued2 | 150 | 150 |
| Total number of records processed as a result of DML statements, Approval.process, or database.emptyRecycleBin | 10,000 | 10,000 |
| Total stack depth for any Apex invocation that recursively fires triggers due to insert, update, or delete statements3 | 16 | 16 |
| Total number of callouts (HTTP requests or web services calls) in a transaction | 100 | 100 |
| Maximum cumulative timeout for all callouts (HTTP requests or Web services calls) in a transaction | 120 seconds | 120 seconds |
| Maximum number of methods with the future annotation allowed per Apex invocation | 50 | 0 in batch and future contexts; 50 in queueable context |
| Maximum number of Apex jobs added to the queue with System.enqueueJob | 50 | 1 |
| Total number of sendEmail methods allowed | 10 | 10 |
| Total heap size4 | 6 MB | 12 MB |
| Maximum CPU time on the Salesforce servers5 | 10,000 milliseconds | 60,000 milliseconds |
| Maximum execution time for each Apex transaction | 10 minutes | 10 minutes |
| Maximum number of push notification method calls allowed per Apex transaction | 10 | 10 |
| Maximum number of push notifications that can be sent in each push notification method call | 2,000 | 2,000 |
| Maximum number of EventBus.publish calls for platform events configured to publish immediately | 150 | 150 |
| Maximum number of rows across all Apex cursors per transaction | 50 million | 50 million |
| Maximum number of Apex cursors per day | 10,000 | 10,000 |
| Maximum number of cursor fetch calls per transaction | 10 | 10 |
| Maximum cumulative number of new cursor rows and pagination cursor rows per 24-hour period | 100 million | 100 million |
| Maximum number of rows across all Apex pagination cursors per transaction | 100,000 | 100,000 |
| Maximum number of Apex pagination cursor instances per transaction | 50 | 50 |
| Maximum number of Apex pagination cursor instances per 24-hour period | 200,000 | 200,000 |
| Maximum number of rows retrieved per page from an Apex pagination cursor | 2000 | 2000 |

1 In a SOQL query with parent-child relationship subqueries, each parent-child relationship counts as an extra query. These types of queries have a limit of three times the number for top-level queries. The limit for subqueries corresponds to the value that Limits.getLimitAggregateQueries() returns. The row counts from these relationship queries contribute to the row counts of the overall code execution. This limit doesn’t apply to custom metadata types. In a single Apex transaction, custom metadata records can have unlimited SOQL queries. In addition to static SOQL statements, calls to the following methods count against the number of SOQL statements issued in a request.

-   Database.countQuery, Database.countQueryWithBinds
-   Database.getQueryLocator, Database.getQueryLocatorWithBinds
-   Database.query, Database.queryWithBinds

2 Calls to the following methods count against the number of DML statements issued in a request.

-   Approval.process
-   Database.convertLead
-   Database.emptyRecycleBin
-   Database.rollback
-   Database.setSavePoint
-   delete and Database.delete
-   insert and Database.insert
-   merge and Database.merge
-   undelete and Database.undelete
-   update and Database.update
-   upsert and Database.upsert
-   EventBus.publish for platform events configured to publish after commit
-   System.runAs

3 Recursive Apex that doesn’t fire any triggers with insert, update, or delete statements, exists in a single invocation, with a single stack. Conversely, recursive Apex that fires a trigger spawns the trigger in a new Apex invocation. The new invocation is separate from the invocation of the code that caused it to fire. Spawning a new invocation of Apex is a more expensive operation than a recursive call in a single invocation. Therefore, there are tighter restrictions on the stack depth of these types of recursive calls.

4 Email services heap size is 50 MB.

5 CPU time is calculated for all executions on the Salesforce application servers occurring in one Apex transaction. CPU time is calculated for the executing Apex code, and for any processes that are called from this code, such as package code and workflows. CPU time is private for a transaction and is isolated from other transactions. Application server CPU time spent in DML operations is counted towards the Apex CPU limit. Operations that don't consume application server CPU time aren't counted toward CPU time. For example, the portion of execution time spent in the database for DML, SOQL, and SOSL isn't counted, nor is waiting time for Apex callouts. Bulk API and Bulk API 2.0 consume a unique governor limit for CPU time on Salesforce Servers, with a maximum value of 60,000 milliseconds.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

-   Limits apply individually to each testMethod.
-   To determine the code execution limits for your code while it’s running, use the Limits methods. For example, you can use the getDMLStatements method to determine the number of DML statements that have already been called by your program. Or, you can use the getLimitDMLStatements method to determine the total number of DML statements available to your code.

## Per-Transaction Certified Managed Package Limits

Certified managed packages—managed packages that have passed the security review for AppExchange—get their own set of limits for most per-transaction limits. Salesforce ISV Partners develop certified managed packages, which are installed in your org from AppExchange and have unique namespaces.

Here’s an example that illustrates the separate certified managed package limits for DML statements. If you install a certified managed package, all the Apex code in that package gets its own 150 DML statements. These DML statements are in addition to the 150 DML statements your org’s native code can execute. This limit increase means more than 150 DML statements can execute during a single transaction if code from the managed package and your native org both executes. Similarly, the certified managed package gets its own 100-SOQL-query limit for synchronous Apex, in addition to the org’s native code limit of 100 SOQL queries.

There’s no limit on the number of certified namespaces that can be invoked in a single transaction. However, the number of operations that can be performed in each namespace must not exceed the per-transaction limits. There’s also a limit on the cumulative number of operations that can be made across namespaces in a transaction. This cumulative limit is 11 times the per-namespace limit. For example, if the per-namespace limit for SOQL queries is 100, a single transaction can perform up to 1,100 SOQL queries. In this case, the cumulative limit is 11 times the per-namespace limit of 100. These queries can be performed across an unlimited number of namespaces, as long as any one namespace doesn't have more than 100 queries. The cumulative limit doesn’t affect limits that are shared across all namespaces, such as the limit on maximum CPU time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

-   These cross-namespace limits apply only to namespaces in certified managed packages.
-   Namespaces in non-certified packages don’t have their own separate governor limits. The resources that they use continue to count against the same governor limits used by the org's custom code.

This table lists the cumulative cross-namespace limits.

| Description | Cumulative Cross-Namespace Limit |
| --- | --- |
| Total number of SOQL queries issued | 1,100 |
| Total number of records retrieved by Database.getQueryLocator | 110,000 |
| Total number of SOSL queries issued | 220 |
| Total number of DML statements issued | 1,650 |
| Total number of callouts (HTTP requests or web services calls) in a transaction | 1,100 |
| Total number of sendEmail methods allowed | 110 |

All per-transaction limits count separately for certified managed packages except for:

-   The total heap size
-   The maximum CPU time
-   The maximum transaction execution time
-   The maximum number of unique namespaces

These limits count for the entire transaction, regardless of how many certified managed packages are running in the same transaction.

The code from a package from AppExchange, not created by a Salesforce ISV Partner and not certified, doesn’t have its own separate governor limits. Any resources used by the package count against the total org governor limits. Cumulative resource messages and warning emails are also generated based on managed package namespaces.

For more information on Salesforce ISV Partner packages, see [Salesforce Partner Programs](http://sites.force.com/partners/PP2Page?p=P_PartnerPrograms "HTML (New Window)").

## Lightning Platform Apex Limits

The limits in this table aren't specific to an Apex transaction; Lightning Platform enforces these limits.

| Description | Limit |
| --- | --- |
| The maximum number of asynchronous Apex method executions (batch Apex, future methods, Queueable Apex, and scheduled Apex) per a 24-hour period1,6,7 | 250,000 or the number of user licenses in your org multiplied by 200, whichever is greater |
| Number of synchronous concurrent transactions for long-running transactions that last longer than 5 seconds for each org.2 | Based on the number of applicable licenses8 in an org, the limit is calculated as a ratio of 100 licenses to one concurrent long-running Apex transaction9.Minimum limit is 10Maximum limit is 50 |
| Maximum number of Apex classes scheduled concurrently | 100. In Developer Edition orgs, the limit is 5. |
| Maximum number of batch Apex jobs in the Apex flex queue that are in Holding status | 100 |
| Maximum number of batch Apex jobs queued or active concurrently3 | 5 |
| Maximum number of batch Apex job start method concurrent executions4 | 1 |
| Maximum number of batch jobs that can be submitted in a running test | 5 |
| Maximum number of test classes that can be queued per 24-hour period (production orgs other than Developer Edition)5,6 | The greater of 500 or 10 multiplied by the number of test classes in the org |
| Maximum number of test classes that can be queued per 24-hour period (sandbox and Developer Edition orgs)5,6 | The greater of 500 or 20 multiplied by the number of test classes in the org |

1 For Batch Apex, method executions include executions of the start, execute, and finish methods. This limit is for your entire org and is shared with all asynchronous Apex: Batch Apex, Queueable Apex, scheduled Apex, and future methods. The license types that count toward this limit include full Salesforce and Salesforce Platform user licenses, App Subscription user licenses, Chatter Only users, Identity users, and Company Communities users.

2 If more transactions are started while the default number of long-running transactions are still running, they’re denied. HTTP callout processing time isn’t included when calculating this limit.

3 When batch jobs are submitted, they’re held in the flex queue before the system queues them for processing.

4 Batch jobs that haven’t started yet remain in the queue until they’re started. If more than one job is running, this limit doesn’t cause any batch job to fail.execute methods of batch Apex jobs still run in parallel.

5 This limit applies to tests running asynchronously. This group of tests includes tests started through the Salesforce user interface including the Developer Console or by inserting ApexTestQueueItem objects using SOAP API.

6 To check how many asynchronous Apex executions are available, make a request to REST API limits resource or use Apex methods OrgLimits.getAll() or OrgLimits.getMap(). See [List Organization Limits](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_limits.htm "HTML (New Window)") in the REST API Developer Guide and [OrgLimits Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_OrgLimits.htm) in the Apex Reference Guide.

7 If the number of asynchronous Apex executions needed by a job exceeds the available number that’s calculated using the 24-hour rolling limit, an exception is thrown. Batch Apex preemptively checks the required asynchronous job capacity when Database.executeBatch is called and the start method has returned the workload. The batch won’t start unless there is sufficient capacity for the entire job available. For example, if the batch requires 10,000 executions and the remaining asynchronous limit is 9,500 executions, an AsyncApexExecutions Limit exceeded exception is thrown, and the remaining executions are left unchanged.

8 The license types that count toward this limit include full Salesforce and Salesforce Platform user licenses, App Subscription user licenses, Chatter Only users, Identity users, and Company Communities users.

9 For example, if your org has 4,000 licenses, the concurrent long-running Apex requests limit is set at 40. If your org has 5,000 or more licenses, the concurrent long-running Apex requests limit is set at 50, which is the maximum capped limit. If your org has 1,000 or fewer licenses, the concurrent long-running Apex requests limit is set at 10, which is the minimum floor limit.

## Static Apex Limits

| Description | Limit |
| --- | --- |
| Default timeout of callouts (HTTP requests or Web services calls) in a transaction | 10 seconds |
| Maximum size of callout request or response (HTTP request or Web services call)1 | 6 MB for synchronous Apex or 12 MB for asynchronous Apex |
| Maximum SOQL query run time before Salesforce cancels the transaction | 120 seconds |
| Maximum number of class and trigger code units in a deployment of Apex | 7500 |
| Apex trigger batch size2 | 200 |
| For loop list batch size | 200 |
| Maximum number of records returned for a Batch Apex query in Database.QueryLocator | 50 million |

1 The HTTP request and response sizes count towards the total heap size.

2 The Apex trigger batch size for platform events and Change Data Capture events is 2,000. The trigger batch size doesn’t apply when using [Mass Transfer Records](https://help.salesforce.com/s/articleView?id=platform.admin_transfer.htm&type=5&language=en_US).

## Size-Specific Apex Limits

| Description | Limit |
| --- | --- |
| Maximum number of characters for a class | 1 million |
| Maximum number of characters for a trigger | 1 million |
| Maximum amount of code used by all Apex code in an org1 ,3 ,4 | 6 MB |
| Method size limit2 | 65,535 bytecode instructions in compiled form |

1 This limit doesn’t apply to Apex code in first generation(1GP) or second generation(2GP) managed packages. The code in those types of packages belongs to a namespace unique from the code in your org. This limit also doesn’t apply to any code included in a class defined with the @isTest annotation.

2 Large methods that exceed the allowed limit cause an exception to be thrown during the execution of your code.

3 The default 6 MB limit can be increased by opening a [support case](https://help.salesforce.com/s/) for your org. Before you apply for a limit increase, ensure that you’re following best practices outlined in [Increase Apex Code Character Limit](https://help.salesforce.com/s/articleView?id=000382172&type=1&language=en_US).

4 For scratch orgs, the limit is 10MB. The limit can be increased by opening a [support case](https://help.salesforce.com/s/) for your org. Before you apply for a limit increase, ensure that you’re following the [best practices](https://help.salesforce.com/s/articleView?id=000382172&type=1&language=en_US).

## Push Notification Limits

An org can send up to 20,000 iOS and 10,000 Android push notifications per hour (for example, 4:00 to 4:59 UTC).

Only *deliverable* notifications count toward this limit. For example, a notification is sent to 1,000 employees in your company, but 100 employees haven’t installed the mobile app yet. Only the notifications sent to the 900 employees who have installed the mobile app count toward this limit.

Each test push notification that is generated through the Test Push Notification page is limited to a single recipient. Test push notifications count toward an org’s hourly push notification limit.

When an org's hourly push notification limit is met, any additional notifications are still created for in-app display and retrieval via REST API.

#### See Also

-   [*Salesforce Help*: General Flow Limits](https://help.salesforce.com/s/articleView?id=platform.flow_considerations_limit.htm&type=5&language=en_US "Salesforce Help: General Flow Limits - HTML (New Window)")
