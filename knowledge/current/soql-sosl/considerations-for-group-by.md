---
title: "Considerations for  GROUP BY"
domain: soql-sosl
topic: considerations-for-group-by
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.722Z
estimatedTokens: 558
keywords: [Considerations, GROUP, Understand, special, behavior, limitations, clause, SOQL, queries]
---

# Considerations for  GROUP BY

> Understand the special behavior and limitations for using the GROUP BY clause in SOQL queries.

# Considerations for GROUP BY

Understand the special behavior and limitations for using the GROUP BY clause in SOQL queries.

-   Some object fields have a field type that doesn’t support grouping. You can't include fields with these field types in a GROUP BY clause.

    To check whether a field supports grouping, you can use SOAP API or REST API to make a describe call for the object that contains the field. For each field, the response includes a boolean groupable attribute that defines whether you can include the field in a GROUP BY clause. To check whether a field supports grouping for standard objects, you can also check the properties for the field in the Object Reference for Salesforce and Lightning Platform.

-   You must use a GROUP BY clause if your query has a LIMIT clause and an aggregated function. For example, the following query is valid:

    ```

    ```

    The following query is invalid as there’s no GROUP BY clause:

    ```

    ```

-   You can't use child relationship expressions that use the \_\_r syntax in a query that uses a GROUP BY clause. For more information, see [Understanding Relationship Names, Custom Objects, and Custom Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_custom_objects.htm#sforce_api_calls_soql_relationships_and_custom_objects "Custom objects can participate in relationship queries. Salesforce ensures that your custom object names, custom field names, and the relationship names that are associated with them remain unique, even if a standard object with the same name is available now or in the future. Having unique relationship queries is important in cases where the query traverses relationships that use the object, field, and relationship names.").
-   In SOAP API, queries that include a GROUP BY clause can't use the [queryMore()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_querymore.htm) call to get more results.
-   In REST API, queries that include a GROUP BY clause can’t use the [query locator](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_query_more_results.htm) to get more results.
-   Formula fields can't be grouped.

## Code Examples

```
SELECT Name, Max(CreatedDate)
FROM Account
GROUP BY Name
LIMIT 5
```

```
SELECT MAX(CreatedDate)
FROM Account LIMIT 1
```

## Related Topics

- Understanding Relationship Names, Custom Objects, and Custom Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_custom_objects.htm)
