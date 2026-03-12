---
title: "SOSL Operation Limitations"
domain: tooling-api
topic: sosl-operation-limitations
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:44.418Z
estimatedTokens: 443
keywords: [SOSL, Operation, Limitations, Two, Tooling, API, objects, EntityDefinition, FieldDefinition, limitations., ExternalString, MetadataComponentDependency, Beta, don’t, support, searches.]
---

# SOSL Operation Limitations

> Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL
    limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.

# SOSL Operation Limitations

Two Tooling API objects, EntityDefinition and FieldDefinition, have some SOSL limitations. ExternalString and MetadataComponentDependency (Beta) don’t support SOSL searches.

## EntityDefinition and FieldDefinition

EntityDefinition and FieldDefinition support the following SOSL operations:

FIND

-   Literal text search, for example:

    ```

    ```

-   Text search with a single wildcard, for example:

    ```

    ```

    The wildcard can’t be the first character in a search term, consistent with search behavior for all objects.
-   Quotation marks are supported.
-   The escape character \\ (slash) is supported. For example, to search for the character \* (asterisk), include the escape character:

    ```

    ```

    .
-   RETURNING is required.

    ```

    ```

    -   Multiple object type names are supported.

        ```

        ```

    -   A field list is supported.

        ```

        ```

    -   WHERE is supported, though logical operators are not.
    -   LIMIT is supported.

Example

```

```

All other [SOSL operations](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_about.htm) are unsupported. If you include an unsupported expression in a search term, the expression is ignored, except for the following, which cause an error:

-   Multiple wildcards in a search term
-   Unsupported operators OR or NOT
-   Parentheses for grouping operators
-   Morphological tokenization
-   An asterisk wildcard isn’t added at the end of single-character searches.

## ExternalString

ExternalString doesn’t support SOSL searches.

## MetadataComponentDependency (Beta)

MetadataComponentDependency is a virtual entity, so it doesn’t support SOSL searches.

## Code Examples

```
FIND {account}
```

```
FIND {account*} RETURNING EntityDefinition
FIND {account?} RETURNING FieldDefinition
FIND {account*fax} RETURNING EntityDefintion
FIND {account?fax} RETURNING FieldDefinition
```

```
FIND {account\*}
RETURNING EntityDefinition
```

```
FIND {MyString} 
RETURNING FieldDefinition
```

```
...RETURNING EntityDefinition, FieldDefinition
```
