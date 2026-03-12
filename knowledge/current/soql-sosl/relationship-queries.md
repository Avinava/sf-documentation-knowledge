---
title: "Relationship Queries"
domain: soql-sosl
topic: relationship-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.555Z
estimatedTokens: 1306
keywords: [Relationship, Queries, Client, applications, able, query, time, SOQL, support, against, standard, objects, custom, traverse, parent-to-child]
---

# Relationship Queries

> Client applications need to be able to query for more than a single type of
                object at a time. SOQL provides syntax to support these types of queries, called
                        relationship queries, against standard objects and custom
                objects. Relationship queries traverse parent-to-child and child-to-parent
                relationships between objects to filter and return results.

# Relationship Queries

Client applications need to be able to query for more than a single type of object at a time. SOQL provides syntax to support these types of queries, called relationship queries, against standard objects and custom objects. Relationship queries traverse parent-to-child and child-to-parent relationships between objects to filter and return results.

Relationship queries are similar to SQL joins. However, you cannot perform arbitrary SQL joins. The relationship queries in SOQL must traverse a valid relationship path as defined in the rest of this section.

You can use relationship queries to return objects of one type based on criteria that applies to objects of another type, for example, “return all accounts created by Bob Jones and the contacts associated with those accounts.” There must be a parent-to-child or child-to-parent relationship connecting the objects. You can’t write arbitrary queries such as “return all accounts and users created by Bob Jones.”

Use the following topics to understand and use relationship queries in SOQL.

-   [Understanding Relationship Names](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_understanding.htm#sforce_api_calls_soql_relationships_understanding "Parent-to-child and child-to-parent relationships exist between many types of objects. For example, Account is a parent of Contact.")
-   [Using Relationship Queries](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_using.htm#sforce_api_calls_soql_relationships_query_using "Use SOQL to query several relationship types.")
-   [Understanding Relationship Names, Custom Objects, and Custom Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_custom_objects.htm#sforce_api_calls_soql_relationships_and_custom_objects "Custom objects can participate in relationship queries. Salesforce ensures that your custom object names, custom field names, and the relationship names that are associated with them remain unique, even if a standard object with the same name is available now or in the future. Having unique relationship queries is important in cases where the query traverses relationships that use the object, field, and relationship names.")
-   [Understanding Query Results](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_results.htm#sforce_api_calls_soql_relationships_query_results "Query results are returned as nested objects. The primary or “driving” object of the main SELECT statement in a SOQL query contains query results of subqueries.")
-   [null Values in Lookup Relationships and Outer Joins](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_lookup.htm#sforce_api_calls_soql_relationships_lookup "Relationship SOQL queries return records, even if the relevant foreign key field has a null value, as with an outer join.")
-   [Identifying Parent and Child Relationships](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_parent_child.htm#sforce_api_calls_soql_relationships_parent_child "Identify parent-child relationships by viewing Entity Relationship Diagrams (ERD) or by examining the enterprise WSDL for your organization.")
-   [Understanding Relationship Fields and Polymorphic Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm#sforce_api_calls_soql_relationships_and_polymorph_keys "In a polymorphic relationship, the referenced object of the relationship can be one of several different types of object.")
-   [Understanding Relationship Query Limitations](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm#sforce_api_calls_soql_relationships_query_limits "When you design SOQL relationship queries, there are several limitations to consider.")
-   [Using Relationship Queries with History Objects](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_hist.htm#sforce_api_calls_soql_relationships_query_hist "Custom objects and some standard objects have an associated history object that tracks changes to an object record. You can use SOQL relationship queries to traverse a history object to its parent object.")
-   [Using Relationship Queries with Data Category Selection Objects](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_datacat.htm#sforce_api_calls_soql_relationships_query_datacat "Data categories are used to classify records. In SOQL, you can use the Article__DataCategorySelection or QuestionDataCategorySelection objects. You can also build a relationship query with the DataCategorySelections relationship name in a FROM clause.")
-   [Using Relationship Queries with the Partner WSDL](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_partner_wsdl.htm#sforce_api_calls_soql_relationships_query_partner_wsdl "The partner WSDL doesn’t contain the detailed type information that’s available in the enterprise WSDL which you need for a relationship SOQL query. You must first execute a describeSObjects() call, and from the results, gather the information you need to create your relationship query:")

## Related Topics

- Understanding Relationship Names (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_understanding.htm)
- Using Relationship Queries (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_using.htm)
- Understanding Relationship Names, Custom Objects, and Custom Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_custom_objects.htm)
- Understanding Query Results (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_results.htm)
- null Values in Lookup Relationships and Outer Joins (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_lookup.htm)
- Identifying Parent and Child Relationships (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_parent_child.htm)
- Understanding Relationship Fields and Polymorphic Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_and_polymorph_keys.htm)
- Understanding Relationship Query Limitations (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm)
- Using Relationship Queries with History Objects (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_hist.htm)
- Using Relationship Queries with Data Category Selection Objects (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_datacat.htm)
