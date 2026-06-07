---
title: "Define a Constraint for a Ramp Segment"
domain: revenue-cloud
topic: define-a-constraint-for-a-ramp-segment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-07T00:37:37.061Z
estimatedTokens: 158
keywords: [Define, Constraint, Ramp, Segment, rule, defined, conditions, ItemSegmentType, attribute]
---

> To define a rule that applies to a ramp segment for defined conditions, use the
  ItemSegmentType attribute.

# Define a Constraint for a Ramp Segment

To define a rule that applies to a ramp segment for defined conditions, use the ItemSegmentType attribute.

In this example, Enclosure is included in the group with GeneratorSet only if ItemSegmentType for GeneratorSet isn’t Trial. To set a value for ItemSegmentType, the type must be in a ramp group and be ramped.

![Note](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

Groups don’t support rules such as Hide, Disable, or Recommend, that perform an action when specified conditions are true.

## Example

```

```

## Code Examples

```
type LineItem {
@(tagName = "SalesTransactionItemGroup")
string SalesTransactionItemGroup;
@(tagName = "ItemSegmentType")
string ItemSegmentType;
}

type GeneratorSet : LineItem;
type Enclosure : LineItem;

// Transaction scoped container
@(virtual = true) type Quote;

// Group scoped container
@(virtual = true, groupBy = SalesTransactionItemGroup)
type QuoteGroup {
string SalesTransactionItemGroup; // Needed for the require rule to save

@(sourceContextNode = "SalesTransaction.SalesTransactionItem") relation generators : GeneratorSet;
@(sourceContextNode = "SalesTransaction.SalesTransactionItem") relation enclosures : Enclosure;

require(generators[GeneratorSet].ItemSegmentType != "Trial", enclosures[Enclosure] {SalesTransactionItemGroup = SalesTransactionItemGroup});
}
```
