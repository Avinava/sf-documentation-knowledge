---
title: "SOQL Injection"
domain: pages
topic: soql-injection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.170Z
estimatedTokens: 496
keywords: [SOQL, Injection, programming, languages, previous, flaw, known, SQL, Apex, doesn’t, uses, own, database, query, language]
---

# SOQL Injection

> In other programming languages, the previous flaw is known as SQL injection. Apex doesn’t use
    SQL, but uses its own database query language, SOQL. SOQL is simpler and more limited in
    functionality than SQL. The risks are lower for SOQL injection than for SQL injection, but the
    attacks ar

# SOQL Injection

In other programming languages, the previous flaw is known as SQL injection. Apex doesn’t use SQL, but uses its own database query language, SOQL. SOQL is simpler and more limited in functionality than SQL. The risks are lower for SOQL injection than for SQL injection, but the attacks are nearly identical to traditional SQL injection. SQL/SOQL injection takes user-supplied input and uses those values in a dynamic SOQL query. If the input isn’t validated, it can include SOQL commands that effectively modify the SOQL statement and trick the application into performing unintended commands.

## SOQL Injection Vulnerability in Apex

Here’s a simple example of Apex and Visualforce code vulnerable to SOQL injection.

```

```

This simple example illustrates the logic. The code is intended to search for contacts that weren’t deleted. The user provides one input value called name. The value can be anything provided by the user, and it’s never validated. The SOQL query is built dynamically and then executed with the Database.query method. If the user provides a legitimate value, the statement executes as expected.

```

```

But what if the user provides unexpected input, such as:

```

```

In that case, the query string becomes:

```

```

Now the results show all contacts, not just the non-deleted ones. A SOQL Injection flaw can be used to modify the intended logic of any vulnerable query.

## SOQL Injection Defenses

To prevent a SOQL injection attack, avoid using dynamic SOQL queries. Instead, use static queries and binding variables. The preceding vulnerable example can be rewritten using static SOQL.

```

```

If you must use dynamic SOQL, use the escapeSingleQuotes method to sanitize user-supplied input. This method adds the escape character (\\) to all single quotation marks in a string that is passed in from a user. The method ensures that all single quotation marks are treated as enclosing strings, instead of database commands.

## Code Examples

```apex
<apex:page controller="SOQLController" >
    <apex:form>
        <apex:outputText value="Enter Name" />
        <apex:inputText value="{!name}" />
        <apex:commandButton value="Query" action="{!query}“ />
    </apex:form>
</apex:page>
public class SOQLController {
    public String name {
        get { return name;}
        set { name = value;}
    } 
    public PageReference query() {
        String qryString = 'SELECT Id FROM Contact WHERE ' +
            '(IsDeleted = false and Name like \'%' + name + '%\')';
        List<Contact> queryResult = Database.query(qryString);
        System.debug('query result is ' + queryResult);
        return null;
    }
}
```

```
// User supplied value: name = Bob 
// Query string
SELECT Id FROM Contact WHERE (IsDeleted = false and Name like '%Bob%')
```

```
// User supplied value for name: test%') OR (Name LIKE '
```

```
SELECT Id FROM Contact WHERE (IsDeleted = false AND Name LIKE '%test%') OR (Name LIKE '%')
```

```apex
public class SOQLController { 
    public String name { 
        get { return name;} 
        set { name = value;} 
    } 
    public PageReference query() { 
        String queryName = '%' + name + '%';
        List<Contact> queryResult = [SELECT Id FROM Contact WHERE 
           (IsDeleted = false and Name like :queryName)];
        System.debug('query result is ' + queryResult);
        return null; 
    } 
}
```
