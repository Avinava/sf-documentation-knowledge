---
title: "SOQL Injection Due to Insecure Database Query Construction"
domain: packagingGuide
topic: soql-injection-due-to-insecure-database-query-construction
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:21.177Z
estimatedTokens: 882
keywords: [SOQL, Injection, Due, Insecure, Database, Query, Construction, prevent, Salesforce, Language, bind, variables, input, sanitation, Examples]
---

# SOQL Injection Due to Insecure Database Query Construction

> To prevent Salesforce Object Query Language (SOQL) injection, use bind variables and
    input sanitation.

# SOQL Injection Due to Insecure Database Query Construction

To prevent Salesforce Object Query Language (SOQL) injection, use bind variables and input sanitation.

SOQL injection is a vulnerability in which a user directly controls portions of a SOQL database query. SOQL queries executed in Apex don’t respect user permissions. Therefore, SOQL injections can be used to elevate users’ privileges and allow them to access to data beyond their user permissions.

There are two types of SOQL injection vulnerabilities. Each type requires a different protection approach.

In the first type, the user supplies an incorrect object or field name to query against. Salesforce objects and fields are analogous to database tables and the table columns. When user data identifies an object or field name, you must verify that the user has permission to access the named object or field. Use the strategies outlined in [Securing Data in Apex Controllers: Enforce Object and Field Permissions](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/apex_crud_fls.htm "HTML (New Window)") to check user permissions before executing the query.

In the second type, the user supplies a portion of the SOQL query, such as part of the WHERE clause. When user data is inserted into a quoted string context, the data can break out of the quoted context. For example, you expect to receive a single field name such as Name. Instead, you receive Name, Secret\_Field\_\_c WHERE Secret\_Value\_\_c > 1000000; -- which tries to retrieve an extra-sensitive field and filter by an additional sensitive field.

Protection approaches for this second type depend on the kind of input you’re filtering.

-   For object or field names, create a whitelist of acceptable values to compare input against. For example, use Schema.getGlobalDescribe() to get maps of field lists or object names and use those as a whitelist to compare input against.
-   For user-supplied input strings inserted in the WHERE clause, use bind variables to prevent the input from breaking out of its quoted context. If you can’t use bind variables, use methods such as String.escapeSingleQuotes() to sanitize input. Only use this method for very simple string comparisons. To account for all potential harmful input, combine this approach with other methods.

Never allow users to supply portions of SOQL queries other than object names, field names, and WHERE clause inputs.

Avoid executing user-generated queries in Apex, where they run in system mode. If you must generate more complex client-side SOQL, use the REST or SOAP API, which make SOQL calls safely.

To learn more about SOQL injection and how to prevent it in your code, check out the [Secure Server-Side Development module](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/ "HTML (New Window)") on Trailhead.

## SOQL Examples

In this example, the SOQL query includes a user-supplied table name. The String.escapeSingleQuotes() method is used to sanitize the table name. The method adds the escape character (\\) to all single quotation marks in the user-supplied string. Adding the escape character ensures that all single quotation marks are treated as enclosing strings instead of as database commands.

```

```

This example uses a bind variable to protect a SOQL query that includes a user-supplied name value in the WHERE clause. This example assumes you already validated that the user has read permissions for the object and fields.

```

```

## Code Examples

```apex
/* String.escapeSingleQuotes() helps sanitize the user-supplied table name */
String objectType = String.escapeSingleQuotes(userSuppliedTableName);

/* Check that the object is valid and exists in the schema */
if (!Schema.getGlobalDescribe().containsKey(objectType)) {
	throw new IllegalArgumentException('Object does not exist in the Schema');
}

/* Check that the user has permission to read this object */
Schema.DescribeSObjectResult objectDesc = Schema.getGlobalDescribe().get(objectType).getDescribe();
if (!objectDesc.isAccessible()) {
	throw new IllegalArgumentException('User does not have permission to read this object');
}

/* We can now execute this query safely */
List<SObject> records = Database.query('SELECT Id, Name FROM ' + objectType + ' WHERE CreatedDate = TODAY');
```

```apex
String userSuppliedName = 'My Account';

/* Use a bind variable in the query to add in the userSuppliedName input String */
List<SObject> records = Database.query('SELECT Id, Name FROM Account WHERE Name = :userSuppliedName');
```
