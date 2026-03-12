---
title: "FIND  {SearchQuery}"
domain: soql-sosl
topic: find-searchquery
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.863Z
estimatedTokens: 1933
keywords: [SearchQuery, clause, SOSL, query, specify, word, phrase, search, includes, literal, include, wildcards, logical, operators, Terms]
---

# FIND  {SearchQuery}

> Use the required FIND clause of a SOSL query to specify the word or phrase to search for. A search query includes the literal word or phrase and can
		also include wildcards and logical operators (AND, OR, and AND NOT).

# FIND {SearchQuery}

Use the required FIND clause of a SOSL query to specify the word or phrase to search for. A search query includes the literal word or phrase and can also include wildcards and logical operators (AND, OR, and AND NOT).

A search query includes:

-   The literal text (single word or a phrase) to search for
-   Optionally, wildcards
-   Optionally, logical operators, including grouping parentheses

Searches are evaluated from left to right and use Unicode (UTF-8) encoding. Text searches are case-insensitive. For example, searches for Customer, customer, and CUSTOMER return the same results.

You can’t enter special types of text expressions (such as macros, functions, or regular expressions) that are evaluated at run time in the FIND clause.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

Surround the SearchQuery with curly brackets to distinguish the search expression from other clauses in the text search.

## Search Terms

A SearchQuery can contain:

-   Single words, such as test or hello
-   Phrases that include words and spaces surrounded by double quotes, such as "john smith"

The search engine splits record information separated by spaces or punctuation into separate tokens. The search engine returns accurate search results from searches in East Asian languages that don't include spaces between words using morphological tokenization.

## Example

Consider the problem of indexing the term “Tokyo Prefecture” and a subsequent search for Kyoto in Japanese.
| Index | Search |
| --- | --- |
| 東京都Tokyo Prefecture | 京都Kyoto |

Morphological tokenization segments the term 東京都 (Tokyo Prefecture) into two tokens.
| 東京Tokyo | 都Prefecture |
| --- | --- |
This form of tokenization ensures that a search for 京都 (Kyoto) returns only results that include 京都 (Kyoto) and not 東京都 (Tokyo Prefecture).

## Wildcards

You can specify the following wildcard characters to match text patterns in your search:

| Wildcard | Description |
| --- | --- |
| * | Asterisks match zero or more characters at the middle or end of your search term. For example, a search for john* finds items that start with john, such as, john, johnson, or johnny. A search for mi* meyers finds items with mike meyers or michael meyers.If you are searching for a literal asterisk in a word or phrase, then escape the asterisk (precede it with the \ character). |
| ? | Question marks match only one character in the middle or end of your search term. For example, a search for jo?n finds items with the term john or joan but not jon or johan. You can't use a ? in a lookup search. |

When using wildcards, consider the following notes:

-   The more focused your wildcard search, the faster the search results are returned, and the more likely the results will reflect your intention. For example, to search for all occurrences of the word prospect (or prospects, the plural form), it is more efficient to specify prospect\* in the search string than to specify a less restrictive wildcard search (such as prosp\*) that could return extraneous matches (such as prosperity).
-   Tailor your searches to find all variations of a word. For example, to find property and properties, you would specify propert\*.
-   Punctuation is indexed. To find \* or ? inside a phrase, you must enclose your search string in quotation marks and you must escape the special character. For example, "where are you\\?" finds the phrase where are you?. The escape character (\\) is required in order for this search to work correctly.

## Operators

Combine multiple words with logic and grouping by using operators to form a more complex query. You can use the following special operators to focus your text search. Operator support is case-insensitive.

| Operator | Description |
| --- | --- |
| " " | Use quotation marks around search terms to find matches in the order you entered your search terms. A search for "monday meeting" finds items that contain monday meeting in that order.To include the words “and,” “or,” and “and not” in your search results, surround those words in double quotes. Otherwise they’re interpreted as the corresponding operators. |
| AND | Finds items that match all the search terms. For example, john AND smith finds items with both the word john and the word smith. Usually if an operator isn't specified, AND is the default operator. When searching articles, documents, and solutions, AND must be specified because OR is the default operator. |
| OR | Finds items with at least one of the search terms. For example, john OR smith finds items with either john or smith, or both words. |
| AND NOT | Finds items that do not contain the search term. For example, john AND NOT smith finds items that have the word john but not the word smith. |
| ( ) | Use parentheses around search terms with logical operators to group search terms. For example, you can search for:("Bob" and "Jones") OR ("Sally" and "Smith")—searches for either Bob Jones or Sally Smith.("Bob") and ("Jones" OR "Thomas") and Sally Smith—searches for documents that contain Bob Jones and Sally Smith or Bob Thomas and Sally Smith. |

## SearchQuery Character Limits

If the SearchQuery string is longer than 10,000 characters, no result rows are returned. If SearchQuery is longer than 4,000 characters, any logical operators are removed. For example, the AND operator in a statement with a SearchQuery that’s 4,001 characters defaults to the OR operator, which could return more results than expected.

When you combine multiple operators in a search string, they're evaluated in this order:

1.  Parentheses
2.  AND and AND NOT (evaluated from right to left)
3.  OR

## Reserved Characters

The following characters are reserved:

```

```

Reserved characters, if specified in a text search, must be escaped (preceded by the backslash \\ character) to be properly interpreted. An error occurs if you do not precede reserved characters with a backslash. This is true even if the SearchQuery is enclosed in double quotes.

For example, to search for the following text:

```

```

insert a backslash before each reserved character:

```

```

## Example FIND Clauses

| Type of Search | Examples |
| --- | --- |
| Single term examples | FIND {MyProspect}FIND {mylogin@mycompany.com}FIND {FIND}FIND {IN}FIND {RETURNING}FIND {LIMIT} |
| Single phrase | FIND {John Smith} |
| Term OR Term | FIND {MyProspect OR MyCompany} |
| Term AND Term | FIND {MyProspect AND MyCompany} |
| Term AND Phrase | FIND {MyProspect AND "John Smith"} |
| Term OR Phrase | FIND {MyProspect OR "John Smith"} |
| Complex query using AND/OR | FIND {MyProspect AND "John Smith" OR MyCompany}FIND {MyProspect AND ("John Smith" OR MyCompany)} |
| Complex query using AND NOT | FIND {MyProspect AND NOT MyCompany} |
| Wildcard search | FIND {My*} |
| Escape sequences | FIND {Why not\?} |
| Invalid or incomplete phrase (will not succeed) | FIND {"John Smith} |

## FIND Clauses in Apex

The syntax of the FIND clause in Apex differs from the syntax of the FIND clause in SOAP API and REST API:

-   In Apex, the value of the FIND clause is demarcated with single quotes. For example:

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

    #### Note

    Apex that is running in system mode ignores field-level security while scanning for a match using IN ALL FIELDS.

-   In the API, the value of the FIND clause is demarcated with braces. For example:

    ```

    ```


The Apex Developer Guide has more information about using [SOSL and SOQL with Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL.htm).

## Code Examples

```
? & | ! { } [ ] ( ) ^ ~ * : \ " ' + -
```

```
\{1\+1\}\:2
```

```
FIND 'map*' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead
```

```
FIND {map*} IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead
```
