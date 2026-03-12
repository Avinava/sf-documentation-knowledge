---
title: "Using Apex Variables in SOQL and SOSL Queries"
domain: apex-guide
topic: using-apex-variables-in-soql-and-sosl-queries
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.562Z
estimatedTokens: 340
keywords: [Apex, Variables, SOQL, SOSL, Queries, statements, reference, code, variables, expressions, they’re, preceded, colon, local, variable, within, statement, called, bind., parser]
---

# Using Apex Variables in SOQL and SOSL Queries

> SOQL and SOSL statements in Apex can reference Apex code
            variables and expressions if they’re preceded by a colon (:). This use of a local code variable within a SOQL
            or SOSL statement is called a bind. The Apex parser first evaluates the
            local variable in code co

# Using Apex Variables in SOQL and SOSL Queries

SOQL and SOSL statements in Apex can reference Apex code variables and expressions if they’re preceded by a colon (:). This use of a local code variable within a SOQL or SOSL statement is called a bind. The Apex parser first evaluates the local variable in code context before executing the SOQL or SOSL statement. Bind expressions can be used as:

-   The search string in FIND clauses.
-   The filter literals in WHERE clauses.
-   The value of the IN or NOT IN operator in WHERE clauses, allowing filtering on a dynamic set of values. Note that this is of particular use with a list of IDs or Strings, though it works with lists of any type.
-   The division names in WITH DIVISION clauses.
-   The numeric value in LIMIT clauses.
-   The numeric value in OFFSET clauses.

For example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex bind variables aren’t supported for the units parameter in the DISTANCE function. This query doesn’t work.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm "Working with Polymorphic Relationships in SOQL Queries")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm "Querying All Records with a SOQL Statement")

## Code Examples

```apex
Account A = new Account(Name='xxx');
insert A;
Account B;

// A simple bind
B = [SELECT Id FROM Account WHERE Id = :A.Id];

// A bind with arithmetic
B = [SELECT Id FROM Account 
     WHERE Name = :('x' + 'xx')];

String s = 'XXX';

// A bind with expressions
B = [SELECT Id FROM Account 
     WHERE Name = :'XXXX'.substring(0,3)];

// A bind with INCLUDES clause
B = [SELECT Id FROM Account WHERE :A.TYPE INCLUDES (‘Customer – Direct; Customer – Channel’)];

// A bind with an expression that is itself a query result
B = [SELECT Id FROM Account
     WHERE Name = :[SELECT Name FROM Account
                    WHERE Id = :A.Id].Name];

Contact C = new Contact(LastName='xxx', AccountId=A.Id);
insert new Contact[]{C, new Contact(LastName='yyy', 
                                    accountId=A.id)};

// Binds in both the parent and aggregate queries
B = [SELECT Id, (SELECT Id FROM Contacts
                 WHERE Id = :C.Id)
     FROM Account
     WHERE Id = :A.Id];

// One contact returned
Contact D = B.Contacts;

// A limit bind
Integer i = 1;
B = [SELECT Id FROM Account LIMIT :i];

// An OFFSET bind
Integer offsetVal = 10;
List<Account> offsetList = [SELECT Id FROM Account OFFSET :offsetVal];

// An IN-bind with an Id list. Note that a list of sObjects
// can also be used--the Ids of the objects are used for 
// the bind
Contact[] cc = [SELECT Id FROM Contact LIMIT 2];
Task[] tt = [SELECT Id FROM Task WHERE WhoId IN :cc];

// An IN-bind with a String list
String[] ss = new String[]{'a', 'b'};
Account[] aa = [SELECT Id FROM Account 
                WHERE AccountNumber IN :ss];

// A SOSL query with binds in all possible clauses

String myString1 = 'aaa';
String myString2 = 'bbb';
Integer myInt3 = 11;
String myString4 = 'ccc';
Integer myInt5 = 22;

List<List<SObject>> searchList = [FIND :myString1 IN ALL FIELDS 
                                  RETURNING 
                                     Account (Id, Name WHERE Name LIKE :myString2
                                              LIMIT :myInt3), 
                                     Contact, 
                                     Opportunity, 
                                     Lead 
                                  WITH DIVISION =:myString4 
                                  LIMIT :myInt5];
```

```apex
String units = 'mi';
List<Account> accountList = 
    [SELECT ID, Name, BillingLatitude, BillingLongitude 
     FROM Account 
     WHERE DISTANCE(My_Location_Field__c, GEOLOCATION(10,10), :units) < 10];
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_polymorphic_relationships.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_query_all_rows.htm)
