---
title: "Record Access Calculation"
domain: salesforce-record-access-under-the-hood
topic: record-access-calculation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.084Z
estimatedTokens: 252
keywords: [Record, Access, Calculation, Every, time, user, attempts, open, run, report, view, search, data, API, Salesforce]
---

# Record Access Calculation

> Every time a user attempts to open a record, run a report, access a list view, or search for
   data using the user interface or API, Salesforce checks the configuration of its
   record access features to determine which records the user can access. These configurations can
   be elaborate, especia

# Record Access Calculation

Every time a user attempts to open a record, run a report, access a list view, or search for data using the user interface or API, Salesforce checks the configuration of its record access features to determine which records the user can access. These configurations can be elaborate, especially in large organizations with hundreds of hierarchy nodes, thousands of sharing rules, millions of data rows, and portals for customers and business partners. Processing such dissimilar data and complex relationships would require far more time than the 300-millisecond Salesforce benchmark for rendering pages.

Rather than applying every sharing rule, traversing all hierarchies, and analyzing record access inheritance in real time, Salesforce calculates record access data only when configuration changes occur. The calculated results persist in a way that facilitates rapid scanning and minimizes the number of database table joins necessary to determine record access at run time.
