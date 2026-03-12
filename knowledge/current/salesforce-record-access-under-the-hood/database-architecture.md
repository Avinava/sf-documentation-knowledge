---
title: "Database Architecture"
domain: salesforce-record-access-under-the-hood
topic: database-architecture
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:43.082Z
estimatedTokens: 942
keywords: [Database, Architecture, possible, changed, noninclusive, terms, align, company, Equality, maintained, certain, avoid, any, effect, customer]
---

# Database Architecture

> Where possible, we changed noninclusive terms to align with our
   company value of Equality. We maintained certain terms to avoid any effect on
   customer implementations.

# Database Architecture

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_record_access_under_the_hood)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Salesforce stores access grants in three types of tables.

Object Record Tables

Tables that store the records of a specific object, and indicate which user, group, or queue owns each record.

Object Sharing Tables

Tables that store the data that supports explicit and implicit grants. Most objects in your organization (to see them, from Setup, enter Sharing Settings in the Quick Find box, then select **Sharing Settings**) get their own Object Sharing table, unless any of the following conditions are also true:

-   The object is a detail in a master-detail relationship. In master-detail relationships, the Object Sharing table for the master object controls access to the detail object.
-   Both organization-wide default settings (internal and external) are Public Read/Write.
-   The object is of a type that doesn’t support Object Sharing tables, such as Activities or Files. These objects have their own access control mechanism.

Group Maintenance Tables

Tables that store the data supporting group membership and inherited access grants. For example, if the Object Sharing table grants Bob explicit access to the Acme account record, Salesforce checks the Group Maintenance tables to see which users inherit record access from Bob and grants users access to the Acme record. These grants are established in advance when you create or change the group (or role, or territory) membership information.

While Object Sharing tables store access grants to individuals and groups, Group Maintenance tables store the list of users or groups that belong to each group, indicating group membership. Both types of tables are used to determine a user’s access to data when they’re searching, querying, or pulling up a report or list view.

When a user tries to retrieve one or more records, Salesforce generates a SQL statement that searches the Object Record table for records matching the user’s search string. If the record exists, Salesforce appends SQL to the statement that joins the Object Records table with the Object Sharing table, and the Object Sharing table with the Group Maintenance tables. Salesforce queries the joined tables for access grants that give the querying user access to the record.

| When you join the following tables... | Salesforce matches on |
| --- | --- |
| Object Record and Object Sharing | Record ID |
| Object Sharing and Group Maintenance | User ID or group ID |

This diagram illustrates that Salesforce matching process in sequence.

![Object Records table, Object Sharing table, and Group Maintenance tables with SQL joins.](/docs/resources/img/en-us/260.0?doc_id=images%2Fjoins.png&folder=salesforce_record_access_under_the_hood)

Salesforce returns only records that satisfy the entire statement, including its appended SQL. To satisfy the statement, the record must exist, and either the Object Sharing table or the Group Maintenance tables must grant access to the querying user.

Even though both the Object Sharing and Group Maintenance tables provide access grants, the ways in which they provide those grants differ significantly.

-   Object Sharing tables simply store each access grant in separate rows called sharing rows, each of which grants a user or group access to a particular record.
-   Group Maintenance tables are more complex because a single group membership or inherited access grant can give several users and groups multiple ways to access a record.
