---
title: "YearlyRecurrence"
domain: mc-apis
topic: yearlyrecurrence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:25.889Z
estimatedTokens: 173
keywords: [YearlyRecurrence]
---

# YearlyRecurrence

# YearlyRecurrence

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| ScheduledDay | xsd:int | Indicates the day on which the recurrence is scheduled. |
| ScheduledDayOfWeek | DayOfWeekEnum | Indicates the scheduled day in a weekly recurrence: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday. |
| ScheduledWeek | WeekOfMonthEnum | Indicates the scheduled week in a monthly recurrence. |
| ScheduledMonth | MonthOfYearEnum | Indicates the scheduled month in a yearly recurrence. |
| YearlyRecurrencePatternType | YearlyRecurrencePatternTypeEnum | Defines the recurrence pattern within a specified year. Valid values include: ByDay, ByWeek, or ByMonth. |
