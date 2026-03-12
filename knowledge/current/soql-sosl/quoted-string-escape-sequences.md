---
title: "Quoted String Escape Sequences"
domain: soql-sosl
topic: quoted-string-escape-sequences
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.788Z
estimatedTokens: 413
keywords: [Quoted, Escape, Sequences, SOQL, several, queries, include, special, characters, new, lines, carriage, tabs, quotes, character]
---

# Quoted String Escape Sequences

> SOQL defines several escape sequences that are valid in queries so that you can  include
  special characters in your queries. You can escape new lines, carriage returns, tabs, quotes, and
  more. The escape character for SOQL is the backslash (\) character.

# Quoted String Escape Sequences

SOQL defines several escape sequences that are valid in queries so that you can include special characters in your queries. You can escape new lines, carriage returns, tabs, quotes, and more. The escape character for SOQL is the backslash (\\) character.

You can use the following escape sequences with SOQL:

| Sequence | Meaning |
| --- | --- |
| or \N | New line |
| \r or \R | Carriage return |
| \t or \T | Tab |
| \b or \B | Bell |
| \f or \F | Form feed |
| " | One double-quote character |
| \' | One single-quote character |
| \\ | Backslash |
| LIKE expression only: \_ | Matches a single underscore character ( _ ) |
| LIKE expression only:\% | Matches a single percent sign character ( % ) |
| \uXXXX | A Unicode character with XXXX as the code (for example, \u00e9 represents the é character) |

If you use a backslash character in any other context, an error occurs.

## Escaped Character Examples

SELECT Id FROM Account WHERE Name LIKE 'Ter%'

Select all accounts whose name begins with the three character sequence 'Ter'.

SELECT Id FROM Account WHERE Name LIKE 'Ter\\%'

Select all accounts whose name exactly matches the four character sequence 'Ter%'.

SELECT Id FROM Account WHERE Name LIKE 'Ter\\%%'

Select all accounts whose name begins with the four character sequence 'Ter%'

#### See Also

-   [*Trailhead*: Secure Server-Side Development](https://trailhead.salesforce.com/content/learn/modules/secure-serverside-development)

-   [*Apex Developer Guide*: SOQL Injection](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/pages_security_tips_soql_injection.htm)
