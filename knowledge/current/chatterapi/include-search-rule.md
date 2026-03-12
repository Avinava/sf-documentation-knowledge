---
title: "Include Search Rule"
domain: chatterapi
topic: include-search-rule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.091Z
estimatedTokens: 189
keywords: [Include, Search, Rule]
---

# Include Search Rule

> Include search rule.

# Include Search Rule

Include search rule.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| locales | String[] | Comma-separated list of up to 10 locales that the include search rule applies to. | Medium, 58.0 | 58.0 |
| ruleDefinition | String[] | Comma-separated list of terms that the include search rule applies to. Valid number of unique strings is from 2 through 5. | Medium, 58.0 | 58.0 |
| searchResultRuleId | String | ID of the include search rule. | Small, 58.0 | 58.0 |
| type | String | Type of search rule. Value is:Include—When a term in a query matches any term in a ruleDefinition, Commerce Search returns results for all terms in the list. | Small, 58.0 | 58.0 |
