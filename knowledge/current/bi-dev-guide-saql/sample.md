---
title: "sample"
domain: bi-dev-guide-saql
topic: sample
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.818Z
estimatedTokens: 571
keywords: [sample, random, large, dataset, data, point, equal, probability, selected, keyword, uses, Bernoulli, distribution, Usage, group-by]
---

# sample

> Returns a random sample from a large dataset, where each data point has an equal
  probability of being selected. This keyword uses the Bernoulli distribution.

# sample

Returns a random sample from a large dataset, where each data point has an equal probability of being selected. This keyword uses the Bernoulli distribution.

## Syntax

```

```

sample

Required. Specifies the percentage of the dataset that is returned as a random sample. The percentage size value can be any positive decimal.

repeatable

Optional. To create a random sample deterministically, specify a seed. sample returns the same subset of data each time you pass repeatable the same seed value. The seed value can be any positive integer.

## Usage

Use sample to project a query on a representative sample from your dataset, where each data point has an equal probability of being selected. sample runs pre-projection.

Add sample and repeatable after the load statement. Any operation performed on the query after the load statement affects only the random sample of data. Let’s look at an example.

```

```

| Count of Rows |
| --- |
| 453 |

Here, the query returns the row count of the sample, 453—around 10% of the dataset's 4.6k rows. The repeatable keyword guarantees that the query always returns the same result. Without the repeatable keyword, the query returns a sample of a slightly different size each time you run it. If you modify your dataset and add more data, then repeatable doesn’t return the same result.

## group-by Example

This query returns the counts of opportunities for each stage. Since the query operates on 10% of the dataset, the counts for each stage are approximately 1/10 of the original count.

```

```

| Stage | Count of Rows |
| --- | --- |
| Closed Lost | 89 |
| Closed Won | 254 |
| Id. Decision Makers | 13 |
| Needs Analysis | 15 |
| Negotiation/Review | 6 |
| Perception Analysis | 13 |
| Proposal/Price Quote | 9 |
| Prospecting | 10 |
| Qualification | 25 |
| Value Proposition | 19 |

## filter Example

This query returns only the won opportunities for each stage. Since the query operates on 10% of the dataset, the count for each stage is approximately 1/10 of the original count.

```

```

| Stage | Count of Rows |
| --- | --- |
| Closed Won | 275 |

#### See Also

-   [Keywords](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_keywords.htm "Keywords are case-sensitive and must be lowercase.")

## Code Examples

```
sample(percentage-size-of-dataset) repeatable(seed)
```

```
q = load "Opportunity" sample(10) repeatable(1);
q = group q by all;
q = foreach q generate count() as 'count';
q = limit q 2000;
```

```
q = load "Opportunity" sample(10) repeatable(1);
q = group q by 'StageName';
q = foreach q generate 'StageName', count() as 'count';
q = limit q 2000;
```

```
q = load "Opportunity" sample(10);
q = filter q by 'IsWon' == "true";
q = group q by 'StageName';
q = foreach q generate 'StageName', count() as 'count';
q = limit q 2000;
```

## Related Topics

- Keywords (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_keywords.htm)
