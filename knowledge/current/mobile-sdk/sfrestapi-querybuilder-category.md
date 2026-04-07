---
title: "SFRestAPI (QueryBuilder) Category"
domain: mobile-sdk
topic: sfrestapi-querybuilder-category
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.160Z
estimatedTokens: 1187
keywords: [SFRestAPI, QueryBuilder, Category, you’re, unsure, correct, SOQL, query, SOSL, search, help, build, strings, basic, conditions]
---

# SFRestAPI (QueryBuilder) Category

> If you’re unsure of the correct syntax for a SOQL query or a SOSL search, you can get help
      from the SFRestAPI (QueryBuilder) category methods. These
      methods build query strings from basic conditions that you specify, and return the formatted
      string. You can pass the returned string

# SFRestAPI (QueryBuilder) Category

If you’re unsure of the correct syntax for a SOQL query or a SOSL search, you can get help from the SFRestAPI (QueryBuilder) category methods. These methods build query strings from basic conditions that you specify, and return the formatted string. You can pass the returned string to SFRestAPI or RestClient request methods for query or search.

SFRestAPI (QueryBuilder) provides two static methods each for SOQL queries and SOSL searches: one takes minimal parameters, while the other accepts a full list of options. Swift versions of these methods are not defined explicitly by Mobile SDK. To code these methods in Swift, use the autocomplete suggestions offered by the Xcode compiler. These suggested method and parameter names are determined by Swift compiler heuristics and can differ from their Objective-C equivalents.

## SOSL Methods

SOSL query builder methods are:

Swift (Compiler-generated)

```

```

Objective-C

```

```

Parameters for the SOSL search methods are:

-   | Swift | Objective-C |
    | --- | --- |
    | withSearchTerm | term |

    The search string. This string can be any arbitrary value. The method escapes any SOSL reserved characters before processing the search.

-   | Swift | Objective-C |
    | --- | --- |
    | fieldScope | fieldScope |

    Indicates which fields to search. It’s either nil or one of the IN search group expressions: “IN ALL FIELDS”, “IN EMAIL FIELDS”, “IN NAME FIELDS”, “IN PHONE FIELDS”, or “IN SIDEBAR FIELDS”. A nil value defaults to “IN NAME FIELDS”. See [Salesforce Object Search Language (SOSL)](https://developer.salesforce.com/docs?filter_text=sosl).

-   | Swift | Objective-C |
    | --- | --- |
    | objectScope | objectScope |

    Specifies the objects to search. Acceptable values are:

    -   nil—No scope restrictions. Searches all searchable objects.
    -   An NSDictionary object pointer—Corresponds to the SOSL RETURNING fieldspec. Each key is an sObject name; each value is a string that contains a field list as well as optional WHERE, ORDER BY, and LIMIT clauses for the key object.

        If you use an NSDictionary object, each value must contain at least a field list. For example, to represent the following SOSL statement in a dictionary entry:

        ```

        ```

        set the key to “Widget\_\_c” and its value to “name WHERE createddate = “THIS\_FISCAL\_QUARTER”. For example:

        ```

        ```

    -   NSNull—No scope specified.

-   | Swift | Objective-C |
    | --- | --- |
    | limit | limit |

    To limit the number of results returned, set this parameter to the maximum number of results you want to receive.


## SOQL Methods

SOQL QueryBuilder methods that construct SOQL strings are:

Swift (Compiler-generated)

```

```

Objective-C

```

```

Parameters for the SOQL methods correspond to SOQL query syntax. All parameters except withFields/fields and sObject can be set to nil.

-   | Swift | Objective-C |
    | --- | --- |
    | withFields | fields |

    An array of field names to be queried.

-   | Swift | Objective-C |
    | --- | --- |
    | sObject | sObject |

    Name of the object to query.

-   | Swift | Objective-C |
    | --- | --- |
    | whereClause | where |

    An expression specifying one or more query conditions.

-   | Swift | Objective-C |
    | --- | --- |
    | groupBy | groupBy |

    An array of field names to use for grouping the resulting records.

-   | Swift | Objective-C |
    | --- | --- |
    | having | having |

    An expression, usually using an aggregate function, for filtering the grouped results. Used only with groupBy.

-   | Swift | Objective-C |
    | --- | --- |
    | orderBy | orderBy |

    An array of fields name to use for ordering the resulting records.

-   | Swift | Objective-C |
    | --- | --- |
    | limit | limit |

    Maximum number of records you want returned.


See [SOQL SELECT Syntax](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select.htm).

## SOSL Sanitizing

The QueryBuilder category also provides a class method for cleaning SOSL search terms:

Swift

```

```

Objective-C

```

```

This method escapes every SOSL reserved character in the input string, and returns the escaped version. For example:

Swift

```

```

Objective-C

```

```

This call returns “FIND \\{MyProspect\\}”.

The sanitizeSOSLSearchTerm method is called in the implementation of the SOSL and SOQL QueryBuilder methods, so you don’t need to call it on strings that you’re passing to those methods. However, you can use it if, for instance, you’re building your own queries manually. SOSL reserved characters include:

\\ ? & | ! { } \[ \] ( ) ^ ~ \* : " ' + -

## Code Examples

```
RestClient.soslSearch(withSearchTerm:objectScope:)
RestClient.soslSearch(withSearchTerm:fieldScope:objectScope:limit:)
```

```
+ (NSString *) SOSLSearchWithSearchTerm:(NSString *)term 
                            objectScope:(NSDictionary *)objectScope;


+ (NSString *) SOSLSearchWithSearchTerm:(NSString *)term 
                             fieldScope:(NSString *)fieldScope 
                            objectScope:(NSDictionary *)objectScope 
                                  limit:(NSInteger)limit;
```

```
FIND {Widget Smith}
IN Name Fields
RETURNING Widget__c (name Where createddate = THIS_FISCAL_QUARTER)
```

```
[SFRestAPI 
    SOSLSearchWithSearchTerm:@"all of these will be escaped:~{]"
                 objectScope:[NSDictionary 
                              dictionaryWithObject:@"name WHERE 
                                            createddate="THIS_FISCAL_QUARTER" 
                                            forKey:@"Widget__c"]];
```

```
RestClient.soqlQuery(withFields:sObject:whereClause:limit:)
RestClient.soqlQuery(withFields:sObject:whereClause:groupBy:having:orderBy:limit:)
```
