---
title: "now()"
domain: bi-dev-guide-saql
topic: now
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.394Z
estimatedTokens: 214
keywords: [now, current, datetime, UTC, function, foreach, statement, Usage, time, zone]
---

# now()

> Returns the current datetime in UTC. This function is only valid in a foreach statement.

# now()

Returns the current datetime in UTC. This function is only valid in a foreach statement.

## Syntax

now()

## Usage

This function is commonly used with daysBetween(​), date\_diff(​), and date\_to\_string().

## Example

How long ago was each opportunity created, in weeks? Use date\_diff(), datepart = week, and now().

```

```

## Example

What is the date today? Use now() inside date\_to\_string().

```

```

#### See Also

-   [date\_diff()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm "Returns the amount of time between two dates. This function is only valid in a foreach statement.")

-   [now()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_now.htm "Returns current datetime in the specified time zone. This function is valid only in a foreach statement.")

## Code Examples

```
q = load "DTC_Opportunity";
q = foreach q generate date_diff("week", toDate(CreatedDate_sec_epoch), now() ) as 'Weeks to Close';
q = order q by 'Weeks to Close';
```

```
q = load "DTC_Opportunity";

-- Notice how the ' character is escaped with the \ character in 'Today\'s
q = foreach q generate date_to_string(now(), "yyyy-MM-dd") as 'Today\'s Date';
```

```
q = foreach q generate Account, daysBetween('OrderDate', now()) as "daysOpened";
```

## Related Topics

- date_diff() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm)
- now() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_now.htm)
- now() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_now.htm)
