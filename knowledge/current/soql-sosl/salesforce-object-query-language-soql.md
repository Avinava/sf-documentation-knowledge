---
title: "Salesforce Object Query Language (SOQL)"
domain: soql-sosl
topic: salesforce-object-query-language-soql
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.500Z
estimatedTokens: 1097
keywords: [Salesforce, Query, Language, SOQL, search, organization’s, data, specific, similar, SELECT, statement, widely, Structured, SQL, designed]
---

# Salesforce Object Query Language (SOQL)

> Use the Salesforce Object Query Language (SOQL) to search your organization’s
    Salesforce data for specific information. SOQL is similar to the SELECT statement in the widely
    used Structured Query Language (SQL) but is designed specifically for Salesforce
    data.

# Salesforce Object Query Language (SOQL)

Use the Salesforce Object Query Language (SOQL) to search your organization’s Salesforce data for specific information. SOQL is similar to the SELECT statement in the widely used Structured Query Language (SQL) but is designed specifically for Salesforce data.

With SOQL, you can construct simple but powerful query strings in several environments.

-   Using the queryString parameter of a SOAP API query() call. See [query()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_query.htm) in the SOAP API Developer Guide.
-   Using the q parameter of a REST API query request. See [Query](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query.htm) in the REST API Developer Guide.
-   Using Apex statements. See [SOQL and SOSL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL.htm) in the Apex Developer Guide.
-   Using Visualforce controllers and getter methods. See [Controller Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_controller_methods.htm) in the Visualforce Developer Guide.
-   Using the Salesforce CLI. See [force:data:soql:query](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_data.htm#cli_reference_force_data_soql_query) in the data Commands topic of the Salesforce CLI Command Reference.
-   Using an extension for Visual Studio Code. See [Write SOQL Queries](https://developer.salesforce.com/tools/vscode/en/soql/writing) in Salesforce Extensions for Visual Studio Code.

Similar to the SELECT command in Structured Query Language (SQL), SOQL allows you to specify the source object (such as Account), a list of fields to retrieve, and conditions for selecting rows in the source object.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

SOQL doesn’t support all advanced features of the SQL SELECT command. For example, you can’t use SOQL to perform arbitrary join operations, use wildcards in field lists, or use calculation expressions.

SOQL uses the SELECT statement combined with filtering statements to return sets of data, which can optionally be ordered:

```

```

For example, the following SOQL query returns the value of the Id and Name field for all Account records if the value of Name is Sandy:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

Apex requires that you surround SOQL and SOSL statements with square brackets to use them in your statements. You can use Apex script variables and expressions when preceded by a colon (:).

For a complete description of the syntax, see [SOQL SELECT Syntax](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm "SOQL query syntax consists of a required SELECT statement followed by one or more optional clauses, such as TYPEOF, WHERE, WITH, GROUP BY, and ORDER BY.").

## When to Use SOQL

Use SOSL when you don’t know which object or field the data resides in, and you want to:

-   Retrieve data for a specific term that you know exists within a field. Because SOSL can tokenize multiple terms within a field and build a search index from this, SOSL searches are faster and can return more relevant results.
-   Retrieve multiple objects and fields efficiently where the objects might or might not be related to one another.
-   Retrieve data for a particular division in an organization using the divisions feature.
-   Retrieve data that’s in Chinese, Japanese, Korean, or Thai. Morphological tokenization for CJKT terms helps ensure accurate results.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

With archived data and big objects, you can use only some SOQL features. For more information, see [SOQL with Big Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object_querying.htm).

#### See Also

-   [*Salesforce Developer Limits and Allocations Quick Reference*: SOQL and SOSL Limits for Search Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm)

## Code Examples

```
SELECT one or more fields 
FROM an object 
WHERE filter statements and, optionally, results are ordered
```

```
SELECT Id, Name
FROM Account
WHERE Name = 'Sandy'
```

## Related Topics

- SOQL
          SELECT Syntax (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm)
