---
domain: soql-sosl
name: SOQL and SOSL Reference
documentCount: 86
lastGenerated: 2026-03-12T09:36:28.703Z
---

# SOQL and SOSL Reference — Knowledge Index

> Query and search your org’s data for specific information with Salesforce Object Query Language and 

## Available Topics

| File | Title | Type | Description |
|---|---|---|---|
| [aggregate-functions.md](./aggregate-functions.md) | Aggregate Functions | developer-guide | Use aggregate functions in a GROUP BY
				clause in SOQL queries to generate rep |
| [alias-notation.md](./alias-notation.md) | Alias Notation | developer-guide | You can use alias notation in SELECT queries. |
| [change-the-batch-size-in-queries.md](./change-the-batch-size-in-queries.md) | Change the Batch Size in Queries | developer-guide | The batch size for a query determines the number of rows that are returned in th |
| [comparison-operators.md](./comparison-operators.md) | Comparison Operators | concept | SOQL queries can include comparison operators, such as =, <, >, IN, and LIKE in  |
| [considerations-for-group-by.md](./considerations-for-group-by.md) | Considerations for  GROUP BY | concept | Understand the special behavior and limitations for using the GROUP BY clause in |
| [considerations-for-querying-currency-data-using-soql.md](./considerations-for-querying-currency-data-using-soql.md) | Considerations for Querying Currency Data Using SOQL | concept | These considerations apply when using SOQL to query Data Cloud objects, such as  |
| [convertcurrency.md](./convertcurrency.md) | convertCurrency() | concept | Use convertCurrency() in the SELECT statement of a SOQL query to convert currenc |
| [converttimezone.md](./converttimezone.md) | convertTimezone() | developer-guide | SOQL queries in a client application return dateTime field values as Coordinated |
| [count-and-countfieldname.md](./count-and-countfieldname.md) | COUNT() and COUNT(fieldName) | api-reference | To discover the number of rows that a query returns, use the aggregate function
 |
| [datacategoryselection.md](./datacategoryselection.md) | dataCategorySelection | developer-guide | The syntax of the data category selection in a WITH DATA
   CATEGORY clause in a |
| [date-formats-and-date-literals-in-where.md](./date-formats-and-date-literals-in-where.md) | Date Formats and Date Literals in WHERE | help-article | You can specify date values or date literals in WHERE
		clauses to filter SOQL q |
| [date-functions.md](./date-functions.md) | Date Functions | developer-guide | Date functions in SOQL queries allow you to group or filter data by date periods |
| [example-text-searches.md](./example-text-searches.md) | Example Text Searches | help-article | The following are examples of text searches that use SOSL. |
| [filter-on-polymorphic-relationship-fields.md](./filter-on-polymorphic-relationship-fields.md) | Filter on Polymorphic Relationship Fields | developer-guide | You can search polymorphic relationship fields on a SOQL query. A polymorphic
   |
| [find-searchquery.md](./find-searchquery.md) | FIND  {SearchQuery} | developer-guide | Use the required FIND clause of a SOSL query to specify the word or phrase to se |
| [for-update.md](./for-update.md) | FOR UPDATE | developer-guide | In Apex, you can use FOR
    UPDATE to lock sObject records while they’re being  |
| [for-view-and-and-for-reference.md](./for-view-and-and-for-reference.md) | FOR VIEW and and FOR REFERENCE | developer-guide | Salesforce stores information about record views in the interface and uses the
  |
| [format.md](./format.md) | FORMAT () | developer-guide | Use FORMAT with the SELECT clause to apply localized formatting to standard and  |
| [format.md](./format.md) | FORMAT() | developer-guide | Use FORMAT with the FIND clause to apply localized formatting to standard and cu |
| [group-by.md](./group-by.md) | GROUP BY | developer-guide | You can use the GROUP BY option in a SOQL query to
		avoid iterating through ind |
| [group-by-cube.md](./group-by-cube.md) | GROUP BY CUBE | help-article | Use the GROUP BY CUBE clause in a SOQL query to
        add subtotals for all co |
| [group-by-rollup.md](./group-by-rollup.md) | GROUP BY ROLLUP | developer-guide | Use the GROUP BY ROLLUP optional clause in a SOQL
    query to add subtotals for |
| [grouping-fieldname.md](./grouping-fieldname.md) | GROUPING( fieldName ) ) | developer-guide | You can use the GROUPING(fieldName) function in SELECT, HAVING, and ORDER BY cla |
| [having.md](./having.md) | HAVING | developer-guide | HAVING is an optional clause that can be used in a
		SOQL query to filter result |
| [identify-subtotals-with-group-by.md](./identify-subtotals-with-group-by.md) | Identify Subtotals with  GROUP BY | developer-guide | When you use the GROUP BY ROLLUP or GROUP BY CUBE clause in a SOQL query to add  |
| [identifying-parent-and-child-relationships.md](./identifying-parent-and-child-relationships.md) | Identifying Parent and Child Relationships | api-reference | Identify parent-child relationships by viewing Entity Relationship Diagrams (ERD |
| [in-searchgroup.md](./in-searchgroup.md) | IN  SearchGroup | developer-guide | In an SOSL query, you can specify which types of text fields to search for using |
| [introduction-to-soql-and-sosl.md](./introduction-to-soql-and-sosl.md) | Introduction to SOQL and SOSL | concept | If you’ve built a custom UI for Salesforce, you can use the Salesforce Object Qu |
| [limit.md](./limit.md) | LIMIT | developer-guide | LIMIT is an optional clause that can be added to a
      SELECT statement of a S |
| [limit-n.md](./limit-n.md) | LIMIT  n | developer-guide | LIMIT is an optional clause that can be added to a
  SOSL query to specify the m |
| [location-based-soql-queries.md](./location-based-soql-queries.md) | Location-Based SOQL Queries | concept | Location-based SOQL queries let you compare and query location values stored in
 |
| [logical-operators.md](./logical-operators.md) | Logical Operators | developer-guide | Logical operators can be used in the field expression of the WHERE clause in a S |
| [null-values-in-lookup-relationships-and-outer-joins.md](./null-values-in-lookup-relationships-and-outer-joins.md) | null Values in Lookup Relationships and Outer
			Joins | developer-guide | Relationship SOQL queries return records, even if the
			relevant foreign key fi |
| [offset.md](./offset.md) | OFFSET | concept | When expecting many records in a query’s results, you can display the results in |
| [offset-n.md](./offset-n.md) | OFFSET  n | concept | When expecting many records in a query’s results, you can display the results in |
| [order-by.md](./order-by.md) | ORDER BY | help-article | Use the optional ORDER BY clause in the SELECT statement of a SOQL query to cont |
| [order-by-clause.md](./order-by-clause.md) | ORDER BY  Clause | developer-guide | You can specify the order in which search results are returned from a SOSL query |
| [query-multi-select-picklists.md](./query-multi-select-picklists.md) | Query Multi-Select Picklists | developer-guide | You can search for individual values in multi-select picklists, which are regula |
| [quoted-string-escape-sequences.md](./quoted-string-escape-sequences.md) | Quoted String Escape Sequences | developer-guide | SOQL defines several escape sequences that are valid in queries so that you can  |
| [relationship-queries.md](./relationship-queries.md) | Relationship Queries | developer-guide | Client applications need to be able to query for more than a single type of
     |
| [reserved-characters.md](./reserved-characters.md) | Reserved Characters | developer-guide | The single quote (’) and backslash (\) characters are reserved in SOQL queries a |
| [returning-fieldspec.md](./returning-fieldspec.md) | RETURNING FieldSpec | help-article | RETURNING is an optional clause that you can add to
    a SOSL query to specify  |
| [salesforce-object-query-language-soql.md](./salesforce-object-query-language-soql.md) | Salesforce Object Query Language (SOQL) | api-reference | Use the Salesforce Object Query Language (SOQL) to search your organization’s
   |
| [salesforce-object-search-language-sosl.md](./salesforce-object-search-language-sosl.md) | Salesforce Object Search Language (SOSL) | concept | Use the Salesforce Object Search Language (SOSL) to construct text-based search  |
| [select.md](./select.md) | SELECT | concept | SOQL query syntax consists of a required SELECT
		statement that specifies the f |
| [soql-object-limits-and-limitations.md](./soql-object-limits-and-limitations.md) | SOQL Object Limits and Limitations | developer-guide | SOQL applies specific limits to objects and situations in search results. SOQL l |
| [soql-select-examples.md](./soql-select-examples.md) | SOQL SELECT Examples | developer-guide | The following are examples of text searches that use SOQL. |
| [soql-select-functions.md](./soql-select-functions.md) | SOQL SELECT Functions | developer-guide | Use functions in SOQL queries to generate reports for analysis, apply localized
 |
| [soql-select-syntax.md](./soql-select-syntax.md) | SOQL SELECT Syntax | api-reference | SOQL query syntax consists of a required SELECT
        statement followed by on |
| [sosl-limits-on-external-object-search-results.md](./sosl-limits-on-external-object-search-results.md) | SOSL Limits on External Object Search Results | developer-guide | SOSL applies specific limits to external objects in search results. |
| [sosl-limits-on-search-results.md](./sosl-limits-on-search-results.md) | SOSL Limits on Search Results | developer-guide | The search engine limits the number of records analyzed at each stage of the sea |
| [sosl-syntax.md](./sosl-syntax.md) | SOSL Syntax | developer-guide | A SOSL query begins with the required FIND clause.
		You can then add optional c |
| [support-for-field-types-in-aggregate-functions.md](./support-for-field-types-in-aggregate-functions.md) | Support for Field Types in Aggregate Functions | developer-guide | Using aggregate functions in SOQL queries is a powerful way to analyze records,  |
| [syndication-feed-soql-and-mapping-syntax.md](./syndication-feed-soql-and-mapping-syntax.md) | Syndication Feed SOQL and Mapping Syntax | api-reference | Syndication feed services use a SOQL query and mapping specification that
  allo |
| [tolabel.md](./tolabel.md) | toLabel() | api-reference | Translate SOQL query results into the language of the user who submits the query |
| [tolabelfields.md](./tolabelfields.md) | toLabel(fields) | api-reference | Use toLabel(fields) to translate SOSL query results into the user’s
  language. |
| [typeof.md](./typeof.md) | TYPEOF | developer-guide | TYPEOF is an optional clause that can be used in a
			SELECT statement of a SOQL |
| [typographical-conventions-in-this-document.md](./typographical-conventions-in-this-document.md) | Typographical Conventions in This Document | developer-guide | This SOQL reference uses custom typographical conventions. |
| [understanding-query-results.md](./understanding-query-results.md) | Understanding Query Results | concept | Query results are returned as nested objects. The primary or “driving”
    objec |
| [understanding-relationship-fields-and-polymorphic-fields.md](./understanding-relationship-fields-and-polymorphic-fields.md) | Understanding Relationship Fields and Polymorphic Fields | concept | In a polymorphic relationship, the referenced object of the relationship can be  |
| [understanding-relationship-names.md](./understanding-relationship-names.md) | Understanding Relationship Names | concept | Parent-to-child and child-to-parent relationships exist between many types of ob |
| [understanding-relationship-names-custom-objects-and-custom-fields.md](./understanding-relationship-names-custom-objects-and-custom-fields.md) | Understanding Relationship Names, Custom Objects, and Custom Fields | concept | Custom objects can participate in relationship queries. Salesforce ensures that  |
| [understanding-relationship-query-limitations.md](./understanding-relationship-query-limitations.md) | Understanding Relationship Query Limitations | concept | When you design SOQL relationship queries, there are several limitations to
     |
| [update.md](./update.md) | UPDATE | developer-guide | Track keywords that are used in Salesforce Knowledge article searches by using t |
| [update-an-articles-keyword-tracking-with-sosl.md](./update-an-articles-keyword-tracking-with-sosl.md) | Update an Article’s Keyword Tracking with SOSL | developer-guide | Track keywords that are used in Salesforce Knowledge  article searches with the  |
| [update-an-articles-viewstat-with-sosl.md](./update-an-articles-viewstat-with-sosl.md) | Update an Article’s Viewstat with SOSL | developer-guide | Determine how many hits a Salesforce Knowledge article has had by using the
     |
| [use-null-in-where-in-where.md](./use-null-in-where-in-where.md) | Use  null in WHERE in WHERE | developer-guide | You can search for null values by using the null
		keyword in SOQL queries. |
| [use-aliases-with-group-by.md](./use-aliases-with-group-by.md) | Use Aliases with  GROUP BY | developer-guide | You can use an alias for any field or aggregated field in a SELECT statement in  |
| [using-listview.md](./using-listview.md) | USING Listview= | developer-guide | Optional clause used to search within a single given object’s
            list v |
| [using-relationship-queries.md](./using-relationship-queries.md) | Using Relationship Queries | developer-guide | Use SOQL to query several relationship types. |
| [using-relationship-queries-with-data-category-selection-objects.md](./using-relationship-queries-with-data-category-selection-objects.md) | Using Relationship Queries with Data Category Selection Objects | developer-guide | Data categories are used to classify records. In SOQL, you can use the
    Artic |
| [using-relationship-queries-with-history-objects.md](./using-relationship-queries-with-history-objects.md) | Using Relationship Queries with History Objects | developer-guide | Custom objects and some standard objects have an associated history object that  |
| [using-relationship-queries-with-the-partner-wsdl.md](./using-relationship-queries-with-the-partner-wsdl.md) | Using Relationship Queries with the Partner WSDL | developer-guide | The partner WSDL doesn’t contain the detailed type information that’s available  |
| [using-scope.md](./using-scope.md) | USING SCOPE | developer-guide | The optional USING SCOPE clause of a SOQL query
		returns records within a speci |
| [where.md](./where.md) | WHERE | developer-guide | By default, a SOSL query on an object retrieves all rows that are visible to the |
| [with.md](./with.md) | WITH | developer-guide | You can filter records based on field values, for example, to filter according t |
| [with-divisionfilter.md](./with-divisionfilter.md) | WITH  DivisionFilter | developer-guide | WITH DivisionFilter is an optional clause that
  can be added to a SOSL query to |
| [with-data-category.md](./with-data-category.md) | WITH DATA CATEGORY | api-reference | You can search for Salesforce Knowledge
        articles and questions by their  |
| [with-data-category-datacategoryspec.md](./with-data-category-datacategoryspec.md) | WITH DATA CATEGORY  DataCategorySpec | help-article | WITH DATA
                CATEGORY is an optional clause that can be added to a  |
| [with-highlight.md](./with-highlight.md) | WITH HIGHLIGHT | developer-guide | WITH HIGHLIGHT is an
            optional clause that can be added to a SOSL que |
| [with-metadata.md](./with-metadata.md) | WITH METADATA | developer-guide | Specifies if metadata is returned in the response. Optional clause. |
| [with-network-networkidspec.md](./with-network-networkidspec.md) | WITH NETWORK NetworkIdSpec | developer-guide | You can search for Experience Cloud site users and feeds by using the WITH NETWO |
| [with-pricebookid.md](./with-pricebookid.md) | WITH PricebookId | developer-guide | Filters product search results by a single price book ID. |
| [with-recordvisibilitycontext.md](./with-recordvisibilitycontext.md) | WITH RecordVisibilityContext | api-reference | You can use RecordVisibilityContext to filter
            WITH clauses to query  |
| [with-snippet.md](./with-snippet.md) | WITH SNIPPET | developer-guide | WITH SNIPPET is an optional
            clause that can be added to a SOSL query |
| [with-spellcorrection.md](./with-spellcorrection.md) | WITH SPELL_CORRECTION | help-article | WITH
                SPELL_CORRECTION is an optional clause that can be added to |

## How to Use

1. Read this index to find the relevant topic for your question
2. Load the specific topic file(s) for detailed information
3. Each file is self-contained — no need to load other files for context

*Tags: platform*