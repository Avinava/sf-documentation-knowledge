---
title: "Event Definition Schedule"
domain: mc-apis
topic: event-definition-schedule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:16.885Z
estimatedTokens: 657
keywords: [Event, Definition, Schedule, automation, executes, fire, activity, automatically, created, defined, sample, json, below, inserted]
---

> An automation that executes a fire event activity will automatically be created if a schedule is defined in the Event Definition. The sample json below should be inserted into the Event Definition request body.

# Event Definition Schedule

An automation that executes a fire event activity will automatically be created if a schedule is defined in the Event Definition. The sample json below should be inserted into the Event Definition request body.

## Sample JSON

```json
{
    "schedule": {
        "startDateTime": "02/12/2015T14:30",
        "endDateTime": "11/23/2029T19:45",
        "timezone": "EasternStandardTime",
        "occurrences": 52,
        "endType": "endTime",
        "frequency": "daily",
        "recurrencePattern": "interval",
        "interval": 1,
        "sunday": false,
        "monday": false,
        "tuesday": false,
        "wednesday": false,
        "thursday": false,
        "friday": false,
        "saturday": false,
        "scheduledDay": 17,
        "scheduledDayOfWeek": "Monday",
        "scheduledWeek": "Fourth",
        "scheduledMonth": "February"
    }
}
```
| Field | Required ( Read Only) | Description |
| --- | --- | --- |
| StartDateTime | yes | The first time the scheduled automation should run. |
| EndDateTime | no |
| The last time the scheduled automation should run. Required if EndType = EndDate |
| Occurrences | no | Integer indicating how many times the scheduled automation should run. Required if EndType = Occurrences. |
| EndType | yes | EndDate or Occurrences, indicates if automation schedule should stop after a specified date or a specified number of runs. |
| Frequency | yes | Minutely, Hourly, Daily, Weekly, Monthly, Yearly |
| RecurrencePattern | yes | Interval - used by Minutely, Hourly, DailyEveryWeekDay - used by DailyByDay - used by Weekly, Monthly, YearlyByWeek - used by Monthly, Yearly |
| Interval | no |
| Integer, used for Mintuely, Hourly, Daily, Weekly, and Monthly schedules (not used for Yearly). Required if RecurrencePattern = Interval. |
| Sunday | no | Boolean, may be null, only used for weekly schedules. |
| Monday | no | Boolean, may be null, only used for weekly schedules. |
| Tuesday | no | Boolean, may be null, only used for weekly schedules. |
| Wednesday | no | Boolean, may be null, only used for weekly schedules. |
| Thursday | no | Boolean, may be null, only used for weekly schedules. |
| Friday | no | Boolean, may be null, only used for weekly schedules. |
| Saturday | no | Boolean, may be null, only used for weekly schedules. |
| ScheduledDay | no | Day of month (1 to 31), used for Monthly and Yearly schedules. |
| ScheduledDayOfWeek | no | Name of day of week (Sunday), used for Monthly and Yearly schedules. |
| ScheduledWeek | no | First, Second, Third, Fourth, Last, used for Monthly and Yearly schedules. |
