---
title: "COALESCE()"
domain: bi-dev-guide-sql
topic: coalesce
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.997Z
estimatedTokens: 212
keywords: [COALESCE, function, shorthand, case, statements, replaces, dataset, another, series, arguments]
---

# COALESCE()

> You can use the coalesce() function as shorthand
  for case statements. The coalesce() function replaces null
  values in your dataset with another value. The function takes a series of arguments and returns
  the first value that is not null.

# COALESCE()

You can use the coalesce() function as shorthand for case statements. The coalesce() function replaces null values in your dataset with another value. The function takes a series of arguments and returns the first value that is not null.

In this query, the first case statement says that if the City value is not null, return the City value. Otherwise, return NULL. For the second case, it says if a Country value is not null, return the Country. If it is null, return the string "Unknown."

```

```

Here's the same query rewritten with coalesce().

```

```

There are no null City or Country values in the first five results returned from the query.

| City | Country |
| --- | --- |
| Aberdeen | United States |
| Abilene | United States |
| Akron | United States |
| Albuquerque | United States |
| Alexandria | United States |

## Code Examples

```
SELECT CASE WHEN City
IS NOT NULL
THEN City
ELSE NULL
END AS City,
CASE WHEN Country
IS NOT NULL
ELSE 'Unknown'
END As Country
FROM "Superstore"
Group by City, Country;
```

```
SELECT COALESCE(City, NULL) as City, COALESCE(Country, 'Unknown') as Country
FROM "Superstore"
GROUP BY City, Country;
```
