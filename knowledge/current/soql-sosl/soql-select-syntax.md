---
title: "SOQL SELECT Syntax"
domain: soql-sosl
topic: soql-select-syntax
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.615Z
estimatedTokens: 2529
keywords: [SOQL, SELECT, query, consists, statement, followed, clauses, TYPEOF, GROUP, ORDER, Implementation, Tips]
---

# SOQL SELECT Syntax

> SOQL query syntax consists of a required SELECT
        statement followed by one or more optional clauses, such as TYPEOF, WHERE, WITH, GROUP BY, and ORDER BY.

# SOQL SELECT Syntax

SOQL query syntax consists of a required SELECT statement followed by one or more optional clauses, such as TYPEOF, WHERE, WITH, GROUP BY, and ORDER BY.

The SOQL SELECT statement uses the following syntax:

```

```

| Syntax | Description |
| --- | --- |
| fieldList subquery | Specifies a list of one or more fields, separated by commas, that you want to retrieve from the specified object. The bold elements in the following examples are fieldlist values:SELECT Id, Name, BillingCity FROM AccountSELECT count() FROM ContactSELECT Contact.Firstname, Contact.Account.Name FROM ContactSELECT FIELDS(STANDARD) FROM ContactUse valid field names and include read-level permissions for each specified field. The fieldList defines the ordering of fields in the query results.If the query traverses a relationship, fieldList can include a subquery. For example:SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM AccountThe fieldlist can also be an aggregate function, such as COUNT() and COUNT(fieldName), or be wrapped in the toLabel() function to translate returned results. See SELECT for more information. |
| typeOfField | A polymorphic relationship field in objectType or a polymorphic field in a parent of objectType that can reference multiple object types. For example, the Who relationship field of a Task can be a Contact or a Lead.typeOfField can’t reference a relationship field that is also referenced in fieldList. See TYPEOF for more information. |
| whenExpression | A clause of the form WHEN whenObjectType THEN whenFieldList. You can have one or more whenExpression clauses inside a TYPEOF expression. See TYPEOF for more information. |
| elseExpression | A clause of the form ELSE elseFieldList. This clause is optional inside a TYPEOF expression. See TYPEOF for more information. |
| objectType | Specifies the type of object that you want to query(). Provide a valid object, such as Account, and must have read-level permissions to that object. |
| filterScope | Available in API version 32.0 and later. Specifies the filterScope for limiting the results of the query. |
| conditionExpression | If WHERE is specified, determines which rows and values in the specified object (objectType) to filter against. If unspecified, the query() retrieves all the rows in the object that are visible to the user. |
| filteringExpression | If WITH DATA CATEGORY is specified, the query() only returns matching records that are associated with the specified data categories and are visible to the user. If unspecified, the query() returns the matching records that are visible to the user. The WITH DATA CATEGORY clause only filters objects of type:Question—to query questions.KnowledgeArticleVersion—to query articles.See WITH DATA CATEGORY.If WITH DATA CATEGORY isn’t specified, filteringExpression can be used to enforce field- and object-level permission or to specify user- or system-mode access in Apex code.SECURITY_ENFORCEDUse the WITH SECURITY_ENFORCED clause to filter records based on user access permissions on fields or objects being queried within Apex code. See Filter SOQL Queries Using WITH SECURITY_ENFORCED in the Apex Developer Guide.USER_MODE or SYSTEM_MODESpecify user mode or system mode access for Apex database operations. Apex code runs in system mode by default, which means that it runs with substantially elevated permissions over the user running the code. To enhance the security context of Apex, you can specify user mode access using WITH USER_MODE. Field-level security (FLS) and object permissions of the running user are respected and sharing rules are applied in user mode, unlike in system mode. See Enforce User Mode for Database Operations in the Apex Developer Guide.Salesforce recommends that you enforce field- and object-level security permissions by using WITH USER_MODE because it has fewer limitations than WITH SECURITY_ENFORCED. |
| fieldGroupByList | Available in API version 18.0 and later. Specifies a list of one or more fields, separated by commas, that are used to group the query results. A GROUP BY clause is used with aggregate functions to summarize the data. This clause also lets you roll up query results rather than having to process the individual records in your code. See GROUP BY. |
| fieldSubtotalGroupByList | Available in API version 18.0 and later. Specifies a list of up to three fields, separated by commas, that are used to group the query results. The results include extra subtotal rows for the grouped data. See GROUP BY ROLLUP and GROUP BY CUBE. |
| havingConditionExpression | Available in API version 18.0 and later. If the query includes a GROUP BY clause, this conditional expression filters the records that the GROUP BY returns. See HAVING. |
| fieldOrderByList | Specifies a list of one or more fields, separated by commas, that are used to order the query results. For example, you can query for contacts and order the results by last name, and then by first name:SELECT Id, LastName, FirstName FROM Contact ORDER BY LastName, FirstName |

## Implementation Tips for SELECT Statement

-   **Statement Character Limit**—By default, SOQL statements can't exceed 100,000 characters in length. For SOQL statements that exceed this maximum length, the API returns a MALFORMED\_QUERY exception code; no result rows are returned.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

    #### Note

    Long, complex SOQL statements, such as statements that contain many formula fields, can result in a QUERY\_TOO\_COMPLICATED error. The error occurs because the statement is expanded internally when processed by Salesforce, even though the original SOQL statement is under the 100,000 character limit. To avoid this error, reduce the complexity of your SOQL statement.

    Page layouts in Lightning with more than 250 fields can also cause a QUERY\_TOO\_COMPLICATED error. Lightning uses auto-generated SOQL to retrieve fields for a record page layout, so the error can occur even if there isn’t any customer-written SOQL.

    The character limit can also be reached by including too many currency fields. Currency fields require SOQL to use a format method, roughly doubling the field API name length for each currency field.

    The SOQL statement character limit does not apply when using SOQL with dynamic Apex.

-   **Statements Returning Many Results**—If a SELECT statement returns a large amount of data per record, SOQL automatically reduces the number of results. The number of results can also vary based on how a SOQL query is called and on the complexity of the query. When you search a list view, only the first 2,000 records in the list are searched. If the object contains formula fields, derived fields, or CLOB or BLOB fields, large volumes of data can also be returned. To retrieve all the pages of results, use one of these methods:
    -   In SOQL, if you use OFFSET and LIMIT in your SOQL query, the number of records returned can be less than LIMIT. Check the number of returned results and adjust OFFSET as required. Don’t increment OFFSET by LIMIT.
    -   In SOAP API, use [queryMore().](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_querymore.htm#topic-title "HTML (New Window)")
    -   In REST API, use the nextRecordsUrl returned by /query and /queryAll.
    -   In Bulk API 2.0, use the Sforce-Locator response header that is returned in the job’s results.
-   **Localized Results**—SELECT statements can include the [toLabel()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_tolabel.htm "Translate SOQL query results into the language of the user who submits the query using the toLabel function."), [convertCurrency()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_querying_currency_fields.htm "Use convertCurrency() in the SELECT statement of a SOQL query to convert currency fields to the user’s currency. This action requires that the org has multiple currencies enabled."), and [FORMAT()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_format.htm#sforce_api_calls_soql_select_format "Use FORMAT with the SELECT clause to apply localized formatting to standard and custom number, date, time, and currency fields.") functions in support of localized fields.
-   **Dynamic SOQL in Apex**—Apex requires that you surround SOQL and SOSL statements with square brackets to use them in your statements. You can use Apex script variables and expressions when preceded by a colon (:).
-   **Ordered Results**—The order of results isn’t guaranteed unless you use an [ORDER BY](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_orderby.htm "Use the optional ORDER BY clause in the SELECT statement of a SOQL query to control the order of the query results, such as alphabetically beginning with z. If records are null, you can use ORDER BY to display the empty records first or last.") clause in a query.
-   **Picklist Values**—In API version 39.0 and later, query for picklist values by the value’s API name, which can be different from the actual value.
-   **Avoid Query Timeouts**—Consider using [WHERE](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_conditionexpression.htm) or [WITH](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_with.htm) clauses to reduce the query operation time. In REST API, you can also try the explain parameter (beta) to get information on query processing. For more information, see [Get Feedback on Query Performance](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/dome_query_explain.htm) in the REST API Developer Guide.

#### See Also

-   [*Salesforce Developer Limits and Allocations Quick Reference*: SOQL and SOSL Limits for Search Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm)

## Code Examples

```
SELECT fieldList [subquery][...]
[TYPEOF typeOfField whenExpression[...] elseExpression END][...]
FROM objectType[,...] 
    [USING SCOPE filterScope]
[WHERE conditionExpression]
[WITH [DATA CATEGORY] filteringExpression]
[GROUP BY {fieldGroupByList|ROLLUP (fieldSubtotalGroupByList)|CUBE (fieldSubtotalGroupByList)} 
    [HAVING havingConditionExpression] ] 
[ORDER BY fieldOrderByList {ASC|DESC} [NULLS {FIRST|LAST}] ]
[LIMIT numberOfRowsToReturn]
[OFFSET numberOfRowsToSkip]
[{FOR VIEW  | FOR REFERENCE} ]
[UPDATE {TRACKING|VIEWSTAT} ]
[FOR UPDATE]
```

```
SELECT Id, LastName, FirstName
FROM Contact
ORDER BY LastName, FirstName
```

## Related Topics

- TYPEOF (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_typeof.htm)
- SCOPE filterScope (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_using_scope.htm)
- WHERE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_conditionexpression.htm)
- WITH (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_with.htm)
- GROUP BY (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby.htm)
- HAVING (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_having.htm)
- ORDER BY (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_orderby.htm)
- LIMIT (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_limit.htm)
- OFFSET (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_offset.htm)
- {FOR VIEW  | FOR REFERENCE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_for_view_for_reference.htm)
