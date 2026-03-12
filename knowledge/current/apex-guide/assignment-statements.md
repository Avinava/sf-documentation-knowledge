---
title: "Assignment Statements"
domain: apex-guide
topic: assignment-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:34.526Z
estimatedTokens: 302
keywords: [Assignment, Statements, statement, any, places, variable]
---

# Assignment Statements

> An assignment statement is any statement that places a value into a
        variable.

# Assignment Statements

An assignment statement is any statement that places a value into a variable.

An assignment statement generally takes one of two forms:

```

```

In the forms above, \[LValue\] stands for any expression that can be placed on the left side of an assignment operator. These include:

-   A simple variable. For example:

    ```

    ```

-   A de-referenced list element. For example:

    ```

    ```

-   An sObject field reference that the context user has permission to edit. For example:

    ```

    ```


Assignment is always done by reference. For example:

```

```

Similarly, two lists can point at the same value in memory. For example:

```

```

In addition to \=, other valid assignment operators include +=, \*=, /=, |=, &=, ++, and \--. See [Expression Operators](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm "Expressions can be joined to one another with operators to create compound expressions.").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions.htm "Expressions and Operators")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_rules_of_conversion.htm "Rules of Conversion")

## Code Examples

```
[LValue] = [new_value_expression];
[LValue] = [[inline_soql_query]];
```

```
Integer i = 1;
Account a = new Account();
Account[] accts = [SELECT Id FROM Account];
```

```
ints[0] = 1;
accts[0].Name = 'Acme';
```

```apex
Account a = new Account(Name = 'Acme', BillingCity = 'San Francisco'); 

// IDs cannot be set prior to an insert call
// a.Id = '00300000003T2PGAA0';   

// Instead, insert the record. The system automatically assigns it an ID.
insert a;

// Fields also must be writable for the context user
// a.CreatedDate = System.today();  This code is invalid because
//                                  createdDate is read-only! 

// Since the account a has been inserted, it is now possible to
// create a new contact that is related to it
Contact c = new Contact(LastName = 'Roth', Account = a);

// Notice that you can write to the account name directly through the contact 
c.Account.Name = 'salesforce.com';
```

```apex
Account a = new Account();
Account b;
Account[] c = new Account[]{};
a.Name = 'Acme';
b = a;         
c.add(a);      

// These asserts should now be true. You can reference the data
// originally allocated to account a through account b and account list c.
System.assertEquals(b.Name, 'Acme');          
System.assertEquals(c[0].Name, 'Acme');
```

## Related Topics

- Expression
                Operators (atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_understanding.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_rules_of_conversion.htm)
