---
title: "Null Coalescing Operator"
domain: apex-guide
topic: null-coalescing-operator
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.522Z
estimatedTokens: 904
keywords: [Null, Coalescing, Operator, operator, its, right-hand, side, operand, left-hand, null., Similar, safe, navigation, null, coalescing, replaces, verbose, explicit, checks, references]
---

# Null Coalescing Operator

> The ?? operator returns its right-hand side
        operand when its left-hand side operand is null. Similar to the safe navigation operator
            (?.), the null coalescing operator (??) replaces verbose and explicit checks for null references
        in code.

# Null Coalescing Operator

The ?? operator returns its right-hand side operand when its left-hand side operand is null. Similar to the safe navigation operator (?.), the null coalescing operator (??) replaces verbose and explicit checks for null references in code.

The null coalescing operator is a binary operator in the form a ?? b that returns a if a isn’t null, and otherwise returns b. The operator is left-associative. The left-hand operand is evaluated only one time. The right-hand operand is only evaluated if the left-hand operand is null.

You must ensure type compatibility between the operands. For example, in the expression: objectZ result = objectA ?? objectB, both objectA and objectB must be instances of objectZ to avoid a compile-time error.

Here’s a comparison that illustrates the operator usage. Before the Null Coalescing Operator, you used:

Integer notNullReturnValue = (anInteger != null) ? anInteger : 100;

With the Null Coalescing Operator, use:

Integer notNullReturnValue = anInteger ?? 100;

While using the null coalescing operator, always keep operator precedence in mind. In some cases, using parentheses is necessary to obtain the desired results. For example, the expression top ?? 100 - bottom ?? 0 evaluates to top ?? (100 - bottom ?? 0) and not to (top ?? 100) - (bottom ?? 0).

Apex supports assignment of a single resultant record from a SOQL query, but throws an exception if there are no rows returned by the query. The null coalescing operator can be used to gracefully deal with the case where the query doesn’t return any rows. If a SOQL query is used as the left-hand operand of the operator and rows are returned, then the null coalescing operator returns the query results. If no rows are returned, the null coalescing operator returns the right-hand operand.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexcode)

#### Warning

Salesforce recommends against using multiple SOQL queries in a single statement that also uses the null coalescing operator.

These examples work with Account objects.

Account defaultAccount = new Account(name = 'Acme'); // Left operand SOQL is empty, return defaultAccount from right operand: Account a = \[SELECT Id FROM Account WHERE Id = '001000000FAKEID'\] ?? defaultAccount; Assert.areEqual(defaultAccount, a);

// If there isn't a matching Account or the Billing City is null, replace the value string city = \[Select BillingCity From Account Where Id = '001xx000000001oAAA'\]?.BillingCity; System.debug('Matches count: ' + city?.countMatches('San Francisco') ?? 0 );

## Usage

There are some restrictions on using the null coalescing operator.

-   You can’t use the null coalescing operator as the left side of an assignment operator in an assignment.
    -   foo??bar = 42;// This is not a valid assignment
    -   foo??bar++; // This is not a valid assignment
-   SOQL bind expressions don’t support the null coalescing operator.

    class X { public String query = 'xyz';} X x = new X(); List<Account> accounts = \[SELECT Name FROM Account WHERE Name = :X??query\] List<List<SObject>> moreAccounts = \[FIND :X??query IN ALL FIELDS RETURNING Account(Name)\];


#### See Also

-   [Operator Precedence](atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_precedence.htm "Operators are interpreted in order, according to rules.")

-   [Using SOQL Queries That Return One Record](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm "SOQL queries can be used to assign a single sObject value when the result list contains only one element.")

## Related Topics

- Operator Precedence (atlas.en-us.apexcode.meta/apexcode/langCon_apex_expressions_operators_precedence.htm)
- Using SOQL Queries That Return One Record (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_single_row.htm)
