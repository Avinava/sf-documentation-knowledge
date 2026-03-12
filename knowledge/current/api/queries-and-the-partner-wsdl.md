---
title: "Queries and the Partner WSDL"
domain: api
topic: queries-and-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:57.831Z
estimatedTokens: 631
keywords: [Queries, Partner, WSDL, query, call, consider, guidelines]
---

# Queries and the Partner WSDL

> When using the query() call with the partner WSDL,
            consider the following guidelines:

# Queries and the Partner WSDL

When using the query() call with the partner WSDL, consider the following guidelines:

-   The queryString parameter is case-insensitive. The API will accept field names in the *fieldList* using any combination of uppercase and lowercase letters. However, in the [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call."), the case of field names (both predefined and custom fields) will match exactly the value in the name field of the Field type in the [DescribeSObjectResult](atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm). It is recommended that you use the proper case when specifying fields in the *fieldList*.
-   For the partner WSDL, the ordering of fields in the [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.") is determined by the field order in the *fieldList*, not the field order in the WSDL file.
-   The *fieldList* cannot contain duplicate field names. For example:
    -   Invalid (returns an error): "SELECT Firstname, Lastname, Firstname FROM User"
    -   Valid: "SELECT Firstname, Lastname FROM User"
-   The [QueryResult](atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm "A read-only SObject that contains query results and additional data about the query, returned in response to a query() or queryMore() call.") always contains all of the fields specified in the *fieldList*, even if some of the fields contain no data (null). Although SOAP allows you to omit fields that contain no values in the result set, the API always returns an array containing all fields.

When using the query() call or retrieve() call with the partner WSDL, consider the following guideline:

-   A query that includes ID will return the ID field twice in the SOAP XML response data. Similarly, a query that does not include ID will return a single null ID field in the SOAP XML response data. For example, a query for SELECT ID, FirstName, LastName FROM Contact might return a SOAP XML response with records like:

    ```

    ```

    This is expected behavior and something to be aware of if you are accessing the full SOAP XML response data and not using WSC to access the web service response.

## Code Examples

```
<records xsi:type="sf:sObject" xmlns="urn:partner.soap.sforce.com">
    <sf:type>Contact</sf:type>
    <sf:Id>0038000000FrjoBQRW</sf:Id>
    <sf:Id>0038000000FrjoBQRW</sf:Id>
    <sf:FirstName>John</sf:FirstName>
    <sf:LastName>Smith</sf:LastName>
</records>
```

## Related Topics

- QueryResult (atlas.en-us.api.meta/api/sforce_api_calls_query_queryresult.htm)
- DescribeSObjectResult (atlas.en-us.api.meta/api/sforce_api_calls_describesobjects_describesobjectresult.htm)
