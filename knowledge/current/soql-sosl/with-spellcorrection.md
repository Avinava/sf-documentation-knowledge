---
title: "WITH SPELL_CORRECTION"
domain: soql-sosl
topic: with-spellcorrection
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.974Z
estimatedTokens: 192
keywords: [SPELL_CORRECTION, clause, added, SOSL, query, spell, correction, enabled, searches, support, API, version, later, _CORRECTION, APIs]
---

# WITH SPELL_CORRECTION

> WITH
                SPELL_CORRECTION is an optional clause that can be added to a SOSL query.
            When set to true, spell correction is enabled for
            searches that support spell correction. When set to false, spell correction is not enabled. The default value is true. The WITH
                SPELL_CORRECTION clause can be used in API version 40 or
        later.

# WITH SPELL\_CORRECTION

WITH SPELL\_CORRECTION is an optional clause that can be added to a SOSL query. When set to true, spell correction is enabled for searches that support spell correction. When set to false, spell correction is not enabled. The default value is true. The WITH SPELL\_CORRECTION clause can be used in API version 40 or later.

## Example

The following SOSL statement disables spell correction on a search of accounts for the term San Francisco.

```

```

## Supported APIs

The WITH SPELL\_CORRECTION clause in SOSL is supported in SOAP API, REST API, and Apex.

#### See Also

-   [*Einstein Search Help*: Einstein Search Terms: Spelling Correction](https://help.salesforce.com/s/articleView?id=ai.search_glossary.htm&type=5&language=en_US)

## Code Examples

```
FIND {San Francisco} IN ALL FIELDS RETURNING Account WITH SPELL_CORRECTION = false
```
