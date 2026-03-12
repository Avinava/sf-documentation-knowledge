---
title: "SOQL and SOSL"
domain: salesforce-large-data-volumes-bp
topic: soql-and-sosl
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:41.969Z
estimatedTokens: 725
keywords: [SOQL, SOSL, filters, specific, terms, queries]
---

# SOQL and SOSL

> Use filters and specific terms in your queries.

# SOQL and SOSL

| GOAL | Best Practice |
| --- | --- |
| Allow indexed searches when SOQL queries with multiple WHERE filters can’t use indexes | Decompose the query. If you use two indexed fields joined by an OR in the WHERE clause, your search results can exceed the index threshold. Break the query into two queries and join the results. |
| Avoid querying on formula fields, which are computed in real time | If you have to query on formula fields, use formulas. Avoid filtering with formula fields that contain dynamic, non-deterministic references. See Standard and Custom Indexed Fields. |
| Use the most appropriate language, SOQL or SOSL, for a given search | See Using SOQL and SOSL. |
| Execute queries with null values in a WHERE filter for picklists or foreign key fields | Use values such as NA to replace NULLS options. (See Using SOQL and SOSL.) |
| Design efficient custom query and search user interfaces | Use SOQL and SOSL where appropriate, keep queries focused, and minimize the amount of data being queried or searched. (See Using SOQL and SOSL.) |
| Build efficient SOQL and SOSL queries | Use filters and specific terms in your queries.For SOQL:Use selective filters, which reduce the number of rows the Query Optimizer has to scan. For example, use filters that reference indexed fields and fields that have a wider range of possible values. If filters aren’t selective, the optimizer doesn’t use indexed columns.When filtering on FirstName and LastName, use the Name field instead. For example, Select id, Email from Lead where Name=’Sam Kennedy’Avoid negative filters. For example, status !=’failed’ or status != NULLUse IN instead of a large list of OR statements. For example, id in (‘001xxx’,‘001xxy’, ‘001xxz’).Avoid cross-object reference formula fields. Don’t filter on these objects. They aren’t indexable.For SOSL:For SOSL, selective filters reduce the number of irrelevant results. If the filters aren’t selective and there are search terms matches for more than 2,000 records, results can be impacted by search crowding.Don’t index custom objects that you don’t want searched. It adds to the number of records available to search, which can lead to search crowding.Filter out objects you don’t want searched.Use specific search terms.Use targeted search groups. Search groups include NAME, EMAIL, and PHONE fields. For example, FIND ‘Avery Smith’ IN NAME FIELDS RETURNING Account(Id,Name), Lead(Id,Name) |
| Avoid timeouts on large SOQL queries | Tune the SOQL query, reducing query scope, and using selective filters. Consider using Bulk API 2.0 with Bulk API 2.0 Query. If you’ve used the previous suggestions and still get timeouts, consider adding a LIMIT clause (starting with 100,000 records) to your queries. If using batch Apex for your queries, use chaining to get sets of records (using LIMIT) or consider moving filter logic to the execute method. |

## Related Topics

- Standard and Custom Indexed
        Fields (atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_indexes.htm)
- Using SOQL and SOSL (atlas.en-us.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_techniques_using_soql_and_sosl.htm)
