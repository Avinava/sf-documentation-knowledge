---
title: "convertTimezone()"
domain: soql-sosl
topic: converttimezone
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.657Z
estimatedTokens: 150
keywords: [convertTimezone, SOQL, queries, client, application, dateTime, Coordinated, Universal, Time, UTC, date, function, convert, user’s, zone]
---

# convertTimezone()

> SOQL queries in a client application return dateTime field values as Coordinated
		Universal Time (UTC) values. You can use convertTimezone() in a date function to convert dateTime fields to the user’s
		time zone.

# convertTimezone()

SOQL queries in a client application return dateTime field values as Coordinated Universal Time (UTC) values. You can use convertTimezone() in a date function to convert dateTime fields to the user’s time zone.

For example, you could use the convertTimezone(dateTimeField) function to find the sum of the Amount values for all your opportunities for each hour of the day, where the hour is converted to the user's time zone.

```

```

Note that you can only use convertTimezone() in a date function. The following query doesn't work because there is no date function.

```

```

## Code Examples

```
SELECT HOUR_IN_DAY(convertTimezone(CreatedDate)), SUM(Amount)
FROM Opportunity
GROUP BY HOUR_IN_DAY(convertTimezone(CreatedDate))
```

```
SELECT convertTimezone(CreatedDate)
FROM Opportunity
```
