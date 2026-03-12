---
title: "Dynamic SOQL"
domain: apex-guide
topic: dynamic-soql
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:33.372Z
estimatedTokens: 1703
keywords: [Dynamic, SOQL, refers, creation, run, time, Apex, code, flexible, applications, search, input, end, user, records]
---

# Dynamic SOQL

> Dynamic SOQL refers to the creation of a SOQL string at run time with Apex
            code. Dynamic SOQL enables you to create more flexible applications. For example, you
            can create a search based on input from an end user or update records with varying field
            names.

# Dynamic SOQL

Dynamic SOQL refers to the creation of a SOQL string at run time with Apex code. Dynamic SOQL enables you to create more flexible applications. For example, you can create a search based on input from an end user or update records with varying field names.

To create a dynamic SOQL query at run time, use the Database.query or Database.queryWithBinds methods, in one of the following ways.

-   Return a single sObject when the query returns a single record:

    ```

    ```

-   Return a list of sObjects when the query returns more than a single record:

    ```

    ```

-   Return a list of sObjects using a map of bind variables:

    List<sObject> sobjList = Database.queryWithBinds(string, bindVariablesMap, accessLevel);


The Database.query and Database.queryWithBinds methods can be used wherever an inline SOQL query can be used, such as in regular assignment statements and for loops. The results are processed in much the same way as static SOQL queries are processed.

With API version 55.0 and later, as part of the User Mode for Database Operations feature, use the accessLevel parameter to run the query operation in user or system mode. The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

Dynamic SOQL results can be specified as concrete sObjects, such as Account or MyCustomObject\_\_c, or as the generic sObject data type. At run time, the system validates that the type of the query matches the declared type of the variable. If the query doesn’t return the correct sObject type, a run-time error is thrown. Therefore, you don’t have to cast from a generic sObject to a concrete sObject.

Dynamic SOQL queries have the same governor limits as static queries. For more information on governor limits, see [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").

For a full description of SOQL query syntax, see [Salesforce Object Query Language (SOQL)](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql.htm "html (New Window)") in the SOQL and SOSL Reference.

## Dynamic SOQL Considerations

You can use simple bind variables in dynamic SOQL query strings when using Database.query. Bind variables in the query must be within the scope of the database operation. The following is allowed:

```

```

However, unlike inline SOQL, you can’t use bind variable fields in the query string with Database.query. The following example isn’t supported and results in a Variable does not exist error.

```

```

You can instead resolve the variable field into a string and use the string in your dynamic SOQL query:

```

```

(API version 57.0 and later) Another option is to use the Database.queryWithBinds method. With this method, bind variables in the query are resolved from a Map parameter directly with a key, rather than from Apex code variables. This removes the need for the variables to be in scope when the query is executed. This example shows a SOQL query that uses a bind variable for an Account name; its value is passed in with the acctBinds Map.

```

```

These considerations apply when using the Map parameter in the Database.queryWithBinds method:

-   Although map keys of type String are case-sensitive,the queryWithBinds method doesn’t support Map keys that differ only in case. In a queryWithBinds method, comparison of Map keys is case-insensitive. If duplicate Map keys exist, the method throws a runtime QueryException. This example throws this runtime exception: System.QueryException: The bindMap consists of duplicate case-insensitive keys: \[Acctname, acctName\].

    Map<String, Object> bindVars = new Map<String, Object>{'acctName' => 'Acme Corporation'}; bindVars.put('Acctname', 'Foo'); string query = 'Select Id from Contact where Name like :acctName'; List<Contact> contacts = Database.queryWithBinds(query, bindVars, AccessLevel.USER\_MODE);

-   Map keys must follow naming standards: they must start with an ASCII letter, can’t start with a number, must not use [reserved keywords](atlas.en-us.apexcode.meta/apexcode/apex_reserved_words.htm "These words can be used only as keywords."), and must adhere to [variable naming requirements](atlas.en-us.apexcode.meta/apexcode/langCon_apex_variables.htm "Local variables are declared with Java-style syntax.").
-   Although currently supported, Salesforce recommends against using the dot notation with Map keys.

## SOQL Injection

SOQL injection is a technique by which a user causes your application to execute database methods you didn’t intend by passing SOQL statements into your code. This can occur in Apex code whenever your application relies on end-user input to construct a dynamic SOQL statement and you don’t handle the input properly.

To prevent SOQL injection, use the escapeSingleQuotes method. This method adds the escape character (\\) to all single quotation marks in a string that is passed in from a user. The method ensures that all single quotation marks are treated as enclosing strings, instead of database commands.

## Additional Dynamic SOQL Methods

The Dynamic SOQL examples in this topic show how to use the Database.query and Database.queryWithBinds methods. These methods also use Dynamic SOQL:

-   Database.countQuery and Database.countQueryWithBinds: Return the number of records that a dynamic SOQL query would return when executed.
-   Database.getQueryLocator and Database.getQueryLocatorWithBinds: Create a QueryLocator object used in batch Apex or Visualforce.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_data_categories.htm "Accessing All Data Categories Associated with an sObject")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_sosl.htm "Dynamic SOSL")

#### See Also

-   [*Apex Reference Guide*: System.Database Methods](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_database.htm#apex_System_Database_methods "Apex Reference Guide: System.Database Methods - HTML (New Window)")

## Code Examples

```apex
sObject s = Database.query(string);
```

```apex
List<sObject> sobjList = Database.query(string);
```

```apex
String myTestString = 'TestName';
List<sObject> sobjList = Database.query('SELECT Id FROM MyCustomObject__c WHERE Name = :myTestString');
```

```apex
MyCustomObject__c myVariable = new MyCustomObject__c(field1__c ='TestField');
List<sObject> sobjList = Database.query('SELECT Id FROM MyCustomObject__c WHERE field1__c = :myVariable.field1__c');
```

```apex
String resolvedField1 = myVariable.field1__c;
List<sObject> sobjList = Database.query('SELECT Id FROM MyCustomObject__c WHERE field1__c =  :resolvedField1');
```

## Related Topics

- Execution
                Governors and Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- reserved keywords (atlas.en-us.apexcode.meta/apexcode/apex_reserved_words.htm)
- variable naming requirements (atlas.en-us.apexcode.meta/apexcode/langCon_apex_variables.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_data_categories.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_sosl.htm)
