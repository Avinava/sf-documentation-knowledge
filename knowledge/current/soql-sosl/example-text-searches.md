---
title: "Example Text Searches"
domain: soql-sosl
topic: example-text-searches
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.850Z
estimatedTokens: 390
keywords: [Text, Searches, examples, SOSL]
---

# Example Text Searches

> The following are examples of text searches that use SOSL.

# Example Text Searches

The following are examples of text searches that use SOSL.

Look for joe anywhere in the system. Return the IDs of the records where joe is found.

```

```

Look for the name Joe Smith anywhere in the system, in a case-insensitive search. Return the IDs of the records where Joe Smith is found.

```

```

Look for the name Joe Smith in the name field of a lead, return the ID field of the records.

```

```

Look for the name Joe Smith in the name field of a lead and return the name and phone number.

```

```

Look for the name Joe Smith in the name field of a lead. Return the name and phone number of any matching record that was also created in the current fiscal quarter.

```

```

Look for the name Joe Smith or Joe Smythe in the name field of a lead or contact and return the name and phone number. If a people record is called Joe Smith or Joe Smythe, that record isn’t returned.

```

```

Wildcards:

```

```

Delimiting “and” and “or” as literals when used alone:

```

```

Escaping special characters & | ! ( ) { } \[ \] ^ " ~ \* ? : \\ ' + -

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

Apex requires that you surround SOQL and SOSL statements with square brackets to use them in your statements. You can use Apex script variables and expressions when preceded by a colon (:).

#### See Also

-   [*Einstein Search Help*: How Search Results are Ordered](https://help.salesforce.com/s/articleView?id=ai.search_relevancy.htm&type=5&language=en_US)

## Code Examples

```
FIND {Joe Smith}
```

```
FIND {Joe Smith}
IN Name Fields
RETURNING lead
```

```
FIND {Joe Smith}
IN Name Fields
RETURNING lead(name, phone)
```

```
FIND {Joe Smith}
IN Name Fields
RETURNING lead (name, phone Where createddate = THIS_FISCAL_QUARTER)
```

```
FIND {"Joe Smith" OR "Joe Smythe"}
IN Name Fields
RETURNING lead(name, phone), contact(name, phone)
```
