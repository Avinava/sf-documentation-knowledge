---
title: "Secure Coding SQL Injection"
domain: secure-coding-guide
topic: secure-coding-sql-injection
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:44.538Z
estimatedTokens: 3771
keywords: [Secure, Coding, SQL, Injection, Understand, how, SOQL, works, Queries, Sample, Vulnerability, Application, Vulnerable, Alternate, Ensure]
---

# Secure Coding SQL Injection

> Understand how SOQL injection works and how to secure SOQL Queries.

# Secure Coding SQL Injection

Understand how SOQL injection works and how to secure SOQL Queries.

## SQL and SOQL Injection: What is it?

SQL (Structured Query Language) injection is a common application security flaw that results from insecure construction of database queries with user-supplied data. Embedding user data in queries instead of using type-safe bind parameters can let malicious input alter the query structure, bypassing or changing application logic. *SQL injection flaws are serious. A single flaw anywhere in your application can allow an attacker to read, modify, or delete your entire database.*

Apex doesn’t use SQL; it uses its own database query language, SOQL (Salesforce Object Query Language). SOQL was designed to give you most of the power of SQL, while also protecting against most attacks. For example, in SOQL you can only use SELECT instead of UPDATE or DELETE. As a result, you can't delete or modify data. SOQL injection is less risky than SQL injection, but the attacks are nearly identical.

Before we dig into more details of how SOQL injection works, know that we also have great training on Trailhead about it. See: [Mitigate SOQL Injection](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development/mitigate-soql-injection)

## Sample Vulnerability

Consider ‌this code in an Apex controller that constructs a SOQL query to retrieve information about a custom object in Salesforce called 'Personnel. The userInputTitle variable is user input from a web page form, and is concatenated into the query string where clause to form the final request to the database.

```

```

Consider if someone entered into the userInputTitle:

```

```

After concatenating the components together, the final query string is

```

```

The %' finishes up the wildcard matching for Title\_\_c and ends the string. The user input appends to the query, adding a filter for the performance rating of the Personnel object. The attacker’s string has now changed the way the query is behaving and gives them access to information that the developer didn’t intend.

*SOQL injection can be seen as a bypass of CRUD and FLS checks.* Since the only action that is supported is SELECT, the worst that can happen is that a user gets access to data that they can’t see. Similarly, not checking a user’s access levels before returning data can have a significant impact.

## Is My Application Vulnerable?

When you use dynamic queries without enforcing the use of bind variables, also known as parameterized queries, your application becomes vulnerable to security threats. To keep your data safe, it's important to always use parameterized queries when working with dynamic queries.

## How to Secure my SOQL Queries

When designing SOQL (Salesforce Object Query Language) queries, there are three main areas where you can customize the behavior of the query based on user input:

-   Select fields: Choose which fields to select from an object.
-   From object: Specify the object the query is running against.
-   Where clause: Modify the behavior of the WHERE clause to filter which subset of objects is returned.

The where clause is the simplest to secure, and, to customize the WHERE clause, use a parameterized query. This feature exists in most query language frameworks. For now, let’s look at how it works in Apex. Let’s revisit the example from earlier, and see how it can be written securely

```

```

You’ll notice there’s less code here than in our manual example. In Apex, writing a query inside braces will directly execute the query inside it without calling database.query(). The variable prepended with a colon is a bind variable. The database layer, which in this case is SOQL, treats everything in that variable as data. This applies even if there are unusual characters in the variable. However, no matter what the user types in, they can’t break out of the intended behavior of the query and manipulate the query.

Parameterized queries are limited to binding a variable inside the WHERE clause of the query. This means that if you want dynamic fields or object names, you can’t replace your dynamic query with a parameterized one. So, how can you make sure that your queries are safe? In Apex, you can write a sanitizing function:

```

```

For your actual database query, you could construct it as follows:

```

```

Ensure that the object name provided by the user is valid and that the user has the necessary access permissions. Check for any invalid characters that could be used for SOQL injection and confirm that the user has access to the object. This not only protects against SOQL injection but also serves as a CRUD check.

As previously mentioned, SOQL injection can be seen as another form of CRUD/FLS bypass. However, there’s one final customization scenario for your SOQL queries to consider. If you know the object and the filtering criteria, but you don’t know if you must access the field, then it’s similar scenario as this code:

```

```

And then again, for the query:

```

```

Again, in this example, we haven’t only prevented SOQL injection but also have carried out our CRUD and FLS checks for the object and the associated fields.

Use the methods that we’ve discussed so far in situations. If you're considering alternative methods to prevent SOQL injection, you're likely to approach the problem correctly, increasing your chances of success with these methods. However, for other languages and frameworks if you don’t have the APIs that Salesforce provides, we ’ll briefly cover other sanitization methods.

## Alternate Methods to Secure SOQL Queries

| Method | description |
| --- | --- |
| Escape Single Quotes | If you have a dynamic query with a variable in a String, such as:String query = 'select Name, Title from myObject__c where Name like \'%'+name+'%\''; Here the name variable is being concatenated inside two single quotes in the query. One way to stop injection is to avoid single quotes. It's best to use a library made for the language you're using. If Apex, implement the following String.escapeSingleQuotes() function call. The result is:String query = 'select Name, Title from myObject__c where Name like \'%'+String.escapeSingleQuotes(name)+'%\''; This safeguards your data from query tampering. However, it doesn't prevent users from accessing unauthorized data.It only applies when a variable is within single quotes. If you have a boolean or otherwise unquoted field with user input, escaping single quotes won’t help protect against injection. Thus, it isn’t recommended to use this method. |
| Typecasting / Whitelisting | Consider using typecasting and/or whitelisting variables as another method. Typecasting involves converting user input to expected types like boolean or integer. If there's an issue converting data types, it means the data is wrong. You can then safely stop the process.Whitelisting is similar, if you have an input that you know the structure of. For example, you can select fields from an object by verifying user input against a predefined list of field names.Typecasting example:String query = 'SELECT Name, Address FROM Object__c WHERE isActive = ' + (input ? 'TRUE' : 'FALSE'); Whitelisting example:Set<String> fields = new Set<String>(); fields.add('myField1'); fields.add('myField2'); fields.add('myField3');  if (!fields.contains(inputField)) {      throw new CustomException('Invalid field: ' + inputField); // Customize error handling as needed } |

These methods are good for preventing injection attacks, but don’t guarantee that the user will have access to the objects returned. Hence we also don’t recommend using these methods except in edge cases.

## How to Ensure SOQL Query Security with Third-Party Libraries and APIs

There are a number of third-party libraries that can help you write SOQL queries. In general, refactor these libraries before you try to use them. Verifying injection fixes is easiest and safest when you validate fields in the same location that you run your database queries.

Most libraries will expose a SOQL layer that’s easy to use, but doesn’t provide any validation. If you want to use these libraries, you must modify them so that the framework level is secure. You can now use the library without having to worry about sanitizing every database call in your code.

The REST and SOAP APIs allow end users to submit arbitrary SOQL strings. However, because the APIs include built-in checks for sharing and CRUD/FLS permissions, it won’t result to SOQL injection. This means that end users are only allowed to see or modify records and fields that they already have access to. Alternatively, when making SOQL calls in Apex Code, no CRUD/FLS checks are performed (and sharing checks are only performed if the 'with sharing' keyword is used). Allowing end users to control the contents of a SOQL query issued in Apex code is a serious security vulnerability, but it’s not a vulnerability when end users control the contents of a SOQL query via the API.

## How Do I Protect My Non-Salesforce Application?

Using platform-specific solutions for typed, parameterized queries is the best way to prevent SQL injection. Filtering and sanitizing user input before queries is essential, especially if your platform lacks native support for parameterized queries.

Allowing only “known good” characters (such as with a regular expression, where that’s sufficient) is the best defense strategy. For example, a phone number could be validated to only include numerals and a name to include only letters and spaces. Attempting to filter out “known bad” characters or strings (also known as “blacklisting”) can be prone to error. Attackers can use alternate encodings, double-up quotes, or other tricks to foil such filters. Remove single-quote, double-quote, hyphen, NULL, and newline characters.

For more information on SQL injection attacks and defense see:

-   [https://owasp.org/www-community/attacks/SQL\_Injection](https://owasp.org/www-community/attacks/SQL_Injection)
-   [http://www.owasp.org/index.php/Blind\_SQL\_Injection](http://www.owasp.org/index.php/Blind_SQL_Injection)
-   [http://technet.microsoft.com/en-us/library/ee391960.aspx](http://technet.microsoft.com/en-us/library/ee391960.aspx)

## Best Practices for Preventing SQL Injection Across Various Technologies

| Technology | Best Practices | References |
| --- | --- | --- |
| ASP.NET | Sanitize input data before querying.Use type-safe SQL parameters consistently, whether with stored procedures or dynamic SQL.Use SqlParameterCollection for type checking and length validation. | How To: Protect From SQL Injection in ASP.NET |
| LINQ | Use Language-Integrated Query (LINQ) to prevent SQL injection attacks in ASP.NET applications.LINQ technology enables database constructs to be treated as native objects in .NET programming languages.LINQ to SQL abstracts interactions with the database into an object model that avoids SQL injection by automatically building parameterized queries. | LINQ to SQL: .NET Language-Integrated Query for Relational Data |
| Java | Use commercial source code analysis tools (for example, Checkmarx, Coverity, Fortify, Klocwork, Ounce Labs) for large applications and codebases.For smaller applications, manual review and enforcement of coding standards are sufficient.Review all JDBC code; using java.sql.Statement for queries handling user data poses a risk.Use java.sql.CallableStatement and java.sql.PreparedStatement exclusively for user data. Example:java<br>PreparedStatement pstmt = con.prepareStatement("UPDATE USERS SET SALARY = ? WHERE ID = ?"); pstmt.setBigDecimal(1, new BigDecimal("30000.00")); pstmt.setInt(2, 20487); pstmt.executeUpdate();-Use Hibernate and other ORM frameworks to help prevent SQL injection with prepared statements.Be cautious when using query languages like HQL directly. Avoid deprecated methods like session.find and use overloads that support bind variables instead.Always validate and sanitize inputs even when using ORMs. | OWASP SQL Injection Prevention Cheat SheetOWASP Hibernate Security Guidance |
| PHP (PDO) | Use the PHP Data Objects (PDO) extension for parameterized queries and prepared statements. Note thatPDO::prepare provides good SQL injection defenses, but this only guarantees protection if the underlying PDO driver and database support parameterized queries natively.Always sanitize data before passing it to PDO::prepare as a defense-in-depth measure.Use regular expressions to limit input values to expected formats. | PHP Security guidance for Prepared Statements and Stored Procedures |
| Ruby on Rails | Active Record objects provide limited automatic protection from SQL injection.When using Model.find(id) or Model.find_by_X(X), an escaping routine is applied automatically to eliminate ', ", the NULL character and line breaks.For SQL fragments, such as conditions fragments (:conditions => "..."), connection.execute or Model.find_by_sql, sanitization must be applied manually.Use conditions as an array or hash form for sanitization. Example:ruby<br>Model.find(:first, :conditions => ["login = ? AND password = ?", entered_user_name, entered_password])<br>Note that in other cases, you can call sanitize_sql_array or sanitize_sql_for_conditions manually (for Rails 2.0) or use the deprecated sanitize_sql for earlier versions. | OWASP Ruby on Rails Cheat Sheet |

## How Can I Test My Application?

Some testing for SQL injection can be performed in a black-box manner. Putting characters like single quotes and dashes into form fields and looking for database error messages will find the most obvious SQL injection flaws. Unfortunately, these techniques can’t find all SQL injection flaws. Client-side validation, escaping or double-quoting blocks are simple attacks but can be bypassed easily by an attacker.

The most reliable way to identify SQL injection flaws is through manual code review or with a static code analysis tool. Code analysis tools (commercial and free) are listed for individual development platforms in the following section. *Developers on the Lightning Platform can use the first on-demand source code analysis tool build solely for Platform as a Service*. Visit the [Security Source Code Scanner](https://security.secure.force.com/security/tools/forcecom/scannerhttp://security.force.com/sourcescanner) page for more details.

If performing manual source code review, verify that all queries that include user data are built using bind variables instead of string concatenation. A bind variable is a placeholder in a query that allows the database engine to insert dynamic values in a type-safe manner. The exact syntax varies somewhat from platform to platform, but typically these placeholders are question marks or a colon-prefixed variable name. For example, the following construct is safe from SQL injection:

```

```

Stored procedures that only use static SQL text are also acceptable, but beware of stored procedures that use exec or similar constructs to build dynamic SQL internally.

## Code Examples

```apex
public List<Personnel__c> whereclause_records { get; set; }
public String userInputTitle { get; set; }

public PageReference whereclause_search() {
    String query = 'SELECT Name, Role__c, Title__c, Age__c FROM Personnel__c';
    
    if (!Schema.sObjectType.Personnel__c.fields.Name.isAccessible() || 
        !Schema.sObjectType.Personnel__c.fields.Role__c.isAccessible() || 
        !Schema.sObjectType.Personnel__c.fields.Title__c.isAccessible() || 
        !Schema.sObjectType.Personnel__c.fields.Age__c.isAccessible()) {
        return null; // You might want to handle this more gracefully
    }
    
    String whereClause = '';
    
    if (userInputTitle != null && userInputTitle != '') {
        whereClause += 'Title__c LIKE \'%' + userInputTitle + '%\'';
        whereclause_records = Database.query(query + ' WHERE ' + whereClause);
    }
    
    return null; // Consider returning a specific PageReference if applicable
}
```

```
'% OR Performance_rating__c < 2 OR Name LIKE '%'
```

```
SELECT Name, Role__c, Title__c, Age__c 
FROM Personnel__c 
WHERE Title__c LIKE '%%' 
   OR Performance_rating__c < 2 
   OR Name LIKE '%%'
```

```apex
public List<Personnel__c> whereclause_records { get; set; }
public String userInputTitle { get; set; }

public PageReference whereclause_search() {
    if (!Schema.sObjectType.Personnel__c.fields.Name.isAccessible() ||
        !Schema.sObjectType.Personnel__c.fields.Role__c.isAccessible() || 
        !Schema.sObjectType.Personnel__c.fields.Title__c.isAccessible() ||
        !Schema.sObjectType.Personnel__c.fields.Age__c.isAccessible()) {
        return null;
    }
    
    if (userInputTitle != null && userInputTitle != '') {
        String qTitle = '%' + userInputTitle + '%'; // Fixed variable name to match usage
        whereclause_records = [SELECT Name, Role__c, Title__c, Age__c 
                               FROM Personnel__c   
                               WHERE Title__c LIKE :qTitle];
    }

    return null; // Consider returning a meaningful PageReference
}
```

```apex
public boolean isSafeObject(String objName) {
    Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
    Schema.SObjectType myObj = schemaMap.get(objName);
    
    return myObj != null && myObj.getDescribe().isAccessible();
}
```
