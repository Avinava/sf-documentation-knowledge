---
title: "Define Constraints for Quote Groups, Ramps, and Ramp Segments"
domain: revenue-cloud
topic: define-constraints-for-quote-groups-ramps-and-ramp-segments
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-07-26T01:59:39.983Z
estimatedTokens: 321
keywords: [Define, Constraints, Quote, Groups, Ramps, Ramp, Segments, Apply, SalesTransactionItemGroup, context, tag, Assign, groupby, messages, defined, Constraint, Engine, include, grouping, strategies]
---

> Apply rules to quote groups, ramps, and ramp segments by using the
  SalesTransactionItemGroup context tag. Assign a groupby value to messages defined in Constraint
  Rules Engine to include the messages in custom grouping strategies.

# Define Constraints for Quote Groups, Ramps, and Ramp Segments

Apply rules to quote groups, ramps, and ramp segments by using the SalesTransactionItemGroup context tag. Assign a groupby value to messages defined in Constraint Rules Engine to include the messages in custom grouping strategies.

-   **[Define a Constraint for a Quote Group](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_quote_group_constraint.htm)**
    To define a constraint for a quote group, use the require rule to assign the SalesTransactionItemGroup attribute that’s contained on a type to the value of the QuoteGroup container.
-   **[Define a Constraint for a Ramp Group](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_ramp_group_constraint.htm)**
    To define a constraint that applies to a ramp group, use the IsLineGroupRamped\_\_std attribute in the require rule to specify that the group is a ramp group.
-   **[Define a Constraint for a Ramp Segment](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_ramp_segment_constraint.htm)**
    To define a rule that applies to a ramp segment for defined conditions, use the ItemSegmentType attribute.

## Related Topics

- Define a Constraint for a Quote Group (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_quote_group_constraint.htm)
- Define a Constraint for a Ramp Group (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_ramp_group_constraint.htm)
- Define a Constraint for a Ramp Segment (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/cml_ramp_segment_constraint.htm)
