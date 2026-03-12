---
title: "Multivalue Field"
domain: bi-dev-guide-saql
topic: multivalue-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.638Z
estimatedTokens: 723
keywords: [Multivalue]
---

# Multivalue Field

> A multivalue field contains more than one value.

# Multivalue Field

A multivalue field contains more than one value.

## Example

One typical use case for multivalue fields is security. For example, you can have a dataset that contains various accounts, and each account has multiple owner IDs. We’ve created a sample dataset called OppRoles where OwnerId is a multivalue field.

| Account ID | Amount | Owner.Name | Opportunity ID | Owner ID | Stage |
| --- | --- | --- | --- | --- | --- |
| 001R00000046CHdIAM | 1,900,013 | Emily Dickinson | 006R0000002OF6eIAG | 005R0000000VU9bIAG, 005R0000000VU9bIAH, 005R0000000VU9bIAI | Closed Won |
| 001R00000046CV6IAM | 70,449 | Albert Einstein | 006R0000002OF6eIAG | 005R0000000VU9UIAW, 005R0000000VU9bIAG, 005R0000000VU9UIAX 005R0000000VU9UIAY | Closed Won |
| 001R00000046CI6IAM | 4,206,995 | Indiana Jones | 006R0000002OF6eIAG | 006R0000002OF6gIAG, 005R0000000VU9RIAW, 005R0000000VU9SIAW | Closed Won |

This query filters on an OwnerId to display only the accounts that it can access.

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=bi_dev_guide_saql)

#### Warning

When using comparison operators in the filter, use in and not in to return the correct values. Using \== and != returns unexpected values when null handling is enabled. See [Group-by with Null Values](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm#GroupByWithNullValues) for more information.

| Account ID | Amount | Owner.Name | Opportunity ID | Owner ID | Stage |
| --- | --- | --- | --- | --- | --- |
| 001R00000046CHdIAM | 1,900,013 | Emily Dickinson | 006R0000002OF6eIAG | 005R0000000VU9bIAG | Closed Won |
| 001R00000046CV6IAM | 70,449 | Albert Einstein | 006R0000002OF6eIAG | 005R0000000VU9bIAG | Closed Won |

The OwnerID value 005R0000000VU9bIAG has access to two of the three accounts, so two of the accounts are displayed.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=bi_dev_guide_saql)

#### Important

Limit multivalue field use to filtering only. Multivalue fields can behave unpredictably with group and foreach.

#### See Also

-   [mv\_to\_string()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_string_mts.htm "Converts multivalue fields to string fields.")

-   [Comparison Operators](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm "Use comparison operators to compare values of the same type. For example, you can compare strings with strings and numbers with numbers.")

-   [Limit Multivalue Fields](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_multivalue_fields.htm "Multivalue fields can cause poor performance. The behavior of these fields is undefined for group-by and foreach statements. If possible, write your query so that the fields are referenced only in filters.")

## Code Examples

```
q = load "OppRoles";
q = filter q by 'OwnerId' in ["005R0000000VU9bIAG"];
q = foreach q generate 'AccountId' as 'AccountId', 'Amount' as 'Amount', 'Id' as 'Id', 'Owner.Name' as 'Owner.Name', 'OwnerId' as 'OwnerId', 'StageName' as 'StageName';
```

## Related Topics

- Group-by with Null
     Values (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_groupby.htm)
- mv_to_string() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_string_mts.htm)
- Comparison Operators (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm)
- Limit Multivalue Fields (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_performance_multivalue_fields.htm)
