---
title: "Variables"
domain: apex-guide
topic: variables
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:48.193Z
keywords: [Variables, Variable, Naming, Rules, Null, Initial, Values, Note, Scope, Case, Sensitivity, See]
---

# Variables

# Variables

Local variables are declared with Java-style syntax.

For example:

```

```

As with Java, multiple variables can be declared and initialized in a single statement, using comma separation. For example:

```

```

## Variable Naming Rules

When naming variables, follow these rules.

-   Variable names are case-insensitive.
-   Variable names can contain only letters (A-Z or a-z), numbers (0-9), and underscores (\_). Spaces and other special characters, including dollar signs ($) and hyphens (-), aren’t allowed.
-   Variable names must begin with a letter (A-Z or a-z). Names can’t begin with a number (0-9) or an underscore (\_).
-   Variable names can’t end with an underscore (\_).
-   Varable names can’t contain consecutive underscores (\_ \_).
-   [Reserved keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_reserved_words.htm) can’t be used as variable names.
-   Variable names can have a maximum length of 255 characters.
-   Salesforce doesn't recommend sharing the same name between a variable and either its class or a method in its class, although it is permitted to do so.

## Null Variables and Initial Values

If you declare a variable and don't initialize it with a value, it will be null. In essence, null means the absence of a value. You can also assign null to any variable declared with a primitive type. For example, both of these statements result in a variable set to null:

```

```

Many instance methods on the data type will fail if the variable is null. In this example, the second statement generates an exception (NullPointerException)

```

```

All variables are initialized to null if they aren’t assigned a value. For instance, in the following example, i, and k are assigned values, while the integer variable j and the boolean variable b are set to null because they aren’t explicitly initialized.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

A common pitfall is to assume that an uninitialized boolean variable is initialized to false by the system. This isn’t the case. Like all other variables, boolean variables are null if not assigned a value explicitly.

## Variable Scope

Variables can be defined at any point in a block, and take on scope from that point forward. Sub-blocks can’t redefine a variable name that has already been used in a parent block, but parallel blocks can reuse a variable name. For example:

```

```

## Case Sensitivity

To avoid confusion with case-insensitive SOQL and SOSL queries, Apex is also case-insensitive. This means:

-   Variable and method names are case-insensitive. For example:
    
    ```
    
    ```
    
-   References to object and field names are case-insensitive. For example:
    
    ```
    
    ```
    
-   SOQL and SOSL statements are case- insensitive. For example:
    
    ```
    
    ```
    

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

You’ll learn more about sObjects, SOQL, and SOSL later in this guide.

Also note that Apex uses the same filtering semantics as SOQL, which is the basis for comparisons in the SOAP API and the Salesforce user interface. The use of these semantics can lead to some interesting behavior. For example, if an end-user generates a report based on a filter for values that come before 'm' in the alphabet (that is, values < 'm'), null fields are returned in the result. The rationale for this behavior is that users typically think of a field without a value as just a space character, rather than its actual null value. Consequently, in Apex, the following expressions all evaluate to true:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Although s < 'b' evaluates to true in the example above, 'b.'compareTo(s) generates an error because you’re trying to compare a letter to a null value.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_enums.htm "Enums")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_constants.htm "Constants")

#### See Also

-   [Naming Conventions](atlas.en-us.apexcode.meta/apexcode/apex_classes_naming_conventions.htm)