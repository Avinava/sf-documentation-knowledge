---
title: "Apex Transactions and Governor Limits"
domain: apex-guide
topic: apex-transactions-and-governor-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.272Z
keywords: [Apex, Transactions, Governor, Limits]
---

# Apex Transactions and Governor Limits

# Apex Transactions and Governor Limits

Apex Transactions ensure the integrity of data. Apex code runs as part of atomic transactions. Governor execution limits ensure the efficient use of resources on the Lightning Platform multitenant platform.

Most of the governor limits are per transaction, and some aren’t, such as 24-hour limits.

To make sure Apex adheres to governor limits, certain design patterns should be used, such as bulk calls and foreign key relationships in queries.

-   **[Apex Transactions](atlas.en-us.apexcode.meta/apexcode/apex_transaction.htm)**  
    An Apex transaction represents a set of operations that are executed as a single unit. All DML operations in a transaction must complete successfully. If an error occurs in one operation, the entire transaction is rolled back and no data is committed to the database. The boundary of a transaction can be a trigger, a class method, an anonymous block of code, a Visualforce page, or a custom Web service method.
-   **[Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)**  
    Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.
-   **[Set Up Governor Limit Email Warnings](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits_emails.htm)**  
    You can specify users in your organization to receive an email notification when they invoke Apex code that surpasses 50% of allocated governor limits. Only per-request limits are checked for sending email warnings; per-org limits like concurrent long-running requests are not checked. These email notifications do not count against the daily single email limit.
-   **[Running Apex within Governor Execution Limits](atlas.en-us.apexcode.meta/apexcode/apex_limits_tips.htm)**  
    When you develop software in a multitenant cloud environment such as the Lightning platform, you don’t have to scale your code, because the Lightning platform does it for you. Because resources are shared in a multitenant platform, the Apex runtime engine enforces some limits to ensure that no one transaction monopolizes shared resources.