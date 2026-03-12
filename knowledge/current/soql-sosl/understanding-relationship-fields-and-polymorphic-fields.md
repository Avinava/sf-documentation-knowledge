---
title: "Understanding Relationship Fields and Polymorphic Fields"
domain: soql-sosl
topic: understanding-relationship-fields-and-polymorphic-fields
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:36:19.571Z
estimatedTokens: 3005
keywords: [Understanding, Relationship, Polymorphic, referenced, several, different, Common, Qualifier, TYPEOF, Combining, WSDLs]
---

# Understanding Relationship Fields and Polymorphic Fields

> In a polymorphic relationship, the referenced object of the relationship can be one of several different types of object.

# Understanding Relationship Fields and Polymorphic Fields

In a polymorphic relationship, the referenced object of the relationship can be one of several different types of object.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=soql_sosl)

#### Tip

Here's an overview of the terminology used in this document.

-   Name as a label on the Salesforce UI of certain types of objects, such as Tasks. Represents the related person, usually a Lead or Contact.
-   WhoId: The corresponding API name of the Name. Used in code or in API calls.
-   Related To as a label on the Salesforce UI of certain types of objects, such as Tasks. Represents the related object, usually an Account. Not a person object.
-   WhatId: The corresponding API name of the Related To.
-   Who: The value of relationshipName of the Name. Used in queries as a stand-in for Name.
-   What: The value of relationshipName of the Related To. Used in queries as a stand-in for Related To.

Some fields are relationship fields, which means they can be used to get information about a related object. And some of those relationship fields are polymorphic fields. A polymorphic field is one where the related object might be one of several different types of objects. For example, the Who relationship field of a Task can be a Contact or a Lead.

To determine what kind a field is, call describeSObjects() on the object and examine the properties for the field.

1.  If relationshipName is *not* null, the field is a relationship field.
2.  If, in addition, namePointing is true, polymorphicForeignKey is true, and referenceTo has more than one referenced object type, then the field is polymorphic.

**Example of a Relationship Field**

The OwnerId field of the Account object has the following properties:

-   relationshipName = Owner
-   namePointing = false
-   referenceTo = User

This means it is a relationship field. Use the relationshipName as a pseudo field to get information about the related object, whose type is specified in the referenceTo field. For example, you can use the following SOQL query:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

Use the name of the *relationship* (Owner) not the name of the *field* (OwnerId).

**Example of a Polymorphic Field**

The OwnerId field of the Event object has the following properties:

-   relationshipName = Owner
-   namePointing = true
-   polymorphicForeignKey = true
-   referenceTo = Calendar, User

This means it is a polymorphic field. Owner could be a Calendar, or a User. For example, you can use the following SOQL query:

```

```

## Using Polymorphic Fields

You can use polymorphic fields several ways.

-   You can use the polymorphic field for the relationship.
-   You can use the Type qualifier on a polymorphic field.
-   You can use a TYPEOF clause in a query.

You can also combine these techniques for complex queries.

## Common Polymorphic Fields

Common polymorphic fields include:

-   Owner: This field represents the parent of the record. For example:

    ```

    ```

    This example query works for Task records whose owners are either Calendars or Users.

-   Who: This field represents the person associated with the record. For example:

    ```

    ```

    This example query works for Task records whose owners can be either Calendars or Users, and whose Who field can be either Contacts or Leads.

    If you'd like to know the type of object returned in a query, use Who.Type. For example:

    ```

    ```

    Using this example, you can query all the Tasks associated with Contacts:

    ```

    ```

-   What: This field represents nonhuman objects that are associated with the record. For example:

    ```

    ```

    This example query works for Events where What can be an Account or a Solution, or any of another number of object types.


## Using the Type Qualifier

You can use the Type qualifier on a field to determine the object type that’s referenced in a polymorphic relationship. Use the Type qualifier in the WHERE clause of a SELECT statement to conditionally control what’s returned from the query depending on the referenced object type. The following SELECT statement uses Type to filter the query based on the What field in Event.

```

```

At run time, this SELECT statement returns the IDs for Events that reference Accounts or Opportunities in the What field. If an Event referenced a Campaign in the What field, it wouldn’t be returned as part of this SELECT. Unlike the TYPEOF expression, object types are returned as strings from Type. You can apply any WHERE [comparison operator](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm "SOQL queries can include comparison operators, such as =, <, >, IN, and LIKE in the field expression of a WHERE clause, which you use in a SELECT statement. You can also use comparison operators to create complex queries with semi-joins and anti-joins.") to the object type strings, such as \= (Equals) or LIKE.

## Using TYPEOF

SOQL supports polymorphic relationships using the TYPEOF expression in a SELECT statement. TYPEOF is available in API version 46.0 and later. (It is also available in API version 26.0 and later as part of a Developer Preview.)

Use TYPEOF in a SELECT statement to control which fields to query for each object type in a polymorphic relationship. The following SELECT statement returns a different set of fields depending on the object type associated with the What polymorphic relationship field in an Event.

```

```

At run time, this SELECT statement checks the object type referenced by the What field in an Event. If the object type is Account, the referenced Account’s Phone and NumberOfEmployee fields are returned. If the object type is Opportunity, the referenced Opportunity’s Amount and CloseDate fields are returned. If the object type is any other type, the Name and Email fields are returned. Note that if an ELSE clause isn’t provided and the object type isn’t Account or Opportunity, then null is returned for that Event.

Note the following considerations for TYPEOF.

-   TYPEOF can’t be used with a relationship field whose namePointing attribute is false.
-   TYPEOF can’t be used with a relationship field whose relationshipName attribute is false.
-   TYPEOF is only allowed in the SELECT clause of a query. You can filter on the object type of a polymorphic relationship using the Type qualifier in a WHERE clause. For details, see [Filter on Polymorphic Relationship Fields](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_filtering_polymorphic_relationships.htm "You can search polymorphic relationship fields on a SOQL query. A polymorphic relationship is one where the current object can be one of several object types.").
-   TYPEOF isn’t allowed in queries that don’t return objects, such as [COUNT()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "Use aggregate functions in a GROUP BY clause in SOQL queries to generate reports for analysis. Aggregate functions include AVG(), COUNT(), MIN(), MAX(), SUM(), and more.") .
-   TYPEOF can’t be used in SOQL queries that are the basis of [Streaming API PushTopics](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/pushtopic_events_intro.htm).
-   TYPEOF can’t be used in SOQL used in Bulk API.
-   TYPEOF expressions can’t be nested. For example, you can’t use TYPEOF inside the WHEN clause of another TYPEOF expression.
-   TYPEOF isn’t allowed in the SELECT clause of a [semi-join query](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm#semijoin_and_antijoin). You can use TYPEOF in the SELECT clause of an outer query that contains semi-join queries. The following example is not valid because TYPEOF is used in the semi-join query:

    ```

    ```

    The following example is valid because TYPEOF is only used in the outer SELECT clause:

    ```

    ```

-   TYPEOF can’t be used in queries with functions in the SELECT clause. The following example is not valid because the TYPEOF includes the FORMAT function.

    ```

    ```

    Instead, run the same query without functions to retrieve a list of IDs.

    ```

    ```

    Then, run a second query with functions on the resulting ID list.

    ```

    ```

-   TYPEOF can’t be used in queries with [GROUP BY](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby.htm "You can use the GROUP BY option in a SOQL query to avoid iterating through individual query results. That is, you specify a group of records instead of processing many individual records."), [GROUP BY ROLLUP](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_rollup.htm "Use the GROUP BY ROLLUP optional clause in a SOQL query to add subtotals for aggregated data in query results. This action enables the query to calculate subtotals so that you don’t have to maintain that logic in your code."), [GROUP BY CUBE](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_cube.htm "Use the GROUP BY CUBE clause in a SOQL query to add subtotals for all combinations of a grouped field in the query results. This action is useful for compiling cross-tabular reports of data. For example, you can create a cross-tabular query to calculate a sum, an average, or another aggregate function and then group the results by two sets of values: one horizontally, the other, vertically."), and [HAVING](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_having.htm "HAVING is an optional clause that can be used in a SOQL query to filter results that aggregate functions return.").

## Combining TYPEOF and Type

You can combine TYPEOF and Type in a SELECT statement. The following SELECT statement uses both TYPEOF and Type to filter the query and refine the set of returned fields based on the What field in Event.

```

```

At run time, this SELECT statement always returns the ID for an Event, and then either Account.Phone, or Opportunity.Amount, depending on the object type referenced by the Event’s What field. Note that no ELSE clause has been provided. Since this statement filters based on the What field in the WHERE clause, only Events that reference either an Account or Opportunity are returned, so the ELSE clause is not needed. If an ELSE clause was included in this case, it would be ignored at run time.

## Object Types in WSDLs

In the Enterprise and Tooling API WSDLs, the object type of a polymorphic field depends on the version of the API.

1.  In API version 46.0 and later (and in versions where the Developer Preview part of the SOQL Polymorphism feature is enabled), the object type is sObject. For example:

    ```

    ```

2.  In other versions, the type is Name. For example:

    ```

    ```


This affects Java code generated from these WSDLs. For example, in Task.java, the Owner field is now defined as:

```

```

For more information about generating Java code from WSDL files, see [Setting Up Your Java Developer Environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_developer_environment_tipsheet.meta/salesforce_developer_environment_tipsheet/salesforce_developer_environment_overview.htm).

#### See Also

-   [*SOQL and SOSL Reference*: Understanding Relationship Query Limitations](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships_query_limits.htm)

-   [*Apex Reference Guide*: Working with Polymorphic Relationships in SOQL Queries](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm)

-   [*Apex Reference Guide*: getSObject(field)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_getSObject_2)

## Code Examples

```
SELECT Id, Owner.Name FROM Account
```

```
SELECT Id, Owner.Name FROM Event WHERE Owner.Type = 'User'
```

```
SELECT Id, Owner.Name
FROM Task
WHERE Owner.FirstName like 'B%'
```

```
SELECT Id, Who.FirstName, Who.LastName
FROM Task
WHERE Owner.FirstName LIKE 'B%'
```

```
SELECT Id, Who.Id, Who.Type
FROM Task
```

## Related Topics

- comparison
				operator (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm)
- Filter on Polymorphic Relationship
						Fields (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_filtering_polymorphic_relationships.htm)
- COUNT() (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm)
- semi-join query (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm)
- GROUP BY (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby.htm)
- GROUP BY ROLLUP (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_rollup.htm)
- GROUP BY
								CUBE (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_groupby_cube.htm)
- HAVING (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_having.htm)
