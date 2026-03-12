---
title: "Write Efficient Apex and SOQL"
domain: pages
topic: write-efficient-apex-and-soql
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:21.862Z
estimatedTokens: 275
keywords: [Write, Efficient, Apex, SOQL, improve, overall, performance, Visualforce]
---

# Write Efficient Apex and SOQL

> To
    improve the overall performance of
    a
    Visualforce
    page, write efficient
    Apex and SOQL.

# Write Efficient Apex and SOQL

To improve the overall performance of a Visualforce page, write efficient Apex and SOQL.

When you write Apex or SOQL for use within a Visualforce page:

-   Perform calculations in SOQL instead of in Apex whenever possible.
-   Never perform Data Manipulation Language (DML) operations inside a loop.
-   Filter in SOQL first, then in Apex, and finally in Visualforce.

#### See Also

-   [*Apex Developer Guide*: Working with Data in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_data_intro.htm "Apex Developer Guide: Working with Data in Apex - HTML (New Window)")

-   [*Apex Developer Guide*: Working with Very Large SOQL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm "Apex Developer Guide: Working with Very Large SOQL Queries - HTML (New Window)")

-   [*SOQL and SOSL Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_sosl_intro.htm "SOQL and SOSL Reference - HTML (New Window)")
