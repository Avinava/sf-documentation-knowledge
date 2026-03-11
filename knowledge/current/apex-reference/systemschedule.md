---
title: "System.Schedule"
domain: apex-reference
topic: systemschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.928Z
keywords: [System.Schedule, schedule, Apex, class, implements, Schedulable, interface, run, time, specified, Cron, expression., jobName, cronExpression, schedulableClass, Signature, Parameters, Return, Value, Usage]
---

# System.Schedule

> Use schedule with an Apex class that
                implements the Schedulable interface to
                schedule the class to run at the time specified by a Cron expression.

### schedule(jobName, cronExpression, schedulableClass)

Use schedule with an Apex class that implements the Schedulable interface to schedule the class to run at the time specified by a Cron expression.

#### Signature

public static String schedule(String jobName, String cronExpression, Object schedulableClass)

#### Parameters

jobName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

cronExpression

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

schedulableClass

Type: Object

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Returns the scheduled job ID (CronTrigger ID).

#### Usage

Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled classes than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time. Use the abortJob method to stop the job after it has been scheduled.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Salesforce schedules the class for execution at the specified time. Actual execution may be delayed based on service availability.

#### Using the System.Schedule Method

After you implement a class with the Schedulable interface, use the System.Schedule method to execute it. The scheduler runs as system—all classes are executed, whether or not the user has permission to execute the class.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Use extreme care if you’re planning to schedule a class from a trigger. You must be able to guarantee that the trigger won’t add more scheduled classes than the limit. In particular, consider API bulk updates, import wizards, mass record changes through the user interface, and all cases where more than one record can be updated at a time.

The System.Schedule method takes three arguments: a name for the job, an expression used to represent the time and date the job is scheduled to run, and the name of the class. This expression has the following syntax:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

Salesforce schedules the class for execution at the specified time. Actual execution may be delayed based on service availability.

The System.Schedule method uses the user's timezone for the basis of all schedules.

The following are the values for the expression:

| Name | Values | Special Characters |
| --- | --- | --- |
| Seconds | 0–59 | None |
| Minutes | 0–59 | None |
| Hours | 0–23 | , - * / |
| Day_of_month | 1–31 | , - * ? / L W |
| Month | 1–12 or the following:JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC | , - * / |
| Day_of_week | 1–7 or the following:SUNMONTUEWEDTHUFRISAT | , - * ? / L # |
| optional_year | null or 1970–2099 | , - * / |

The special characters are defined as follows:

| Special Character | Description |
| --- | --- |
| , | Delimits values. For example, use JAN, MAR, APR to specify more than one month. |
| - | Specifies a range. For example, use JAN-MAR to specify more than one month. |
| * | Specifies all values. For example, if Month is specified as *, the job is scheduled for every month. |
| ? | Specifies no specific value. This is only available for Day_of_month and Day_of_week, and is generally used when specifying a value for one and not the other. |
| / | Specifies increments. The number before the slash specifies when the intervals will begin, and the number after the slash is the interval amount. For example, if you specify 1/5 for Day_of_month, the Apex class runs every fifth day of the month, starting on the first of the month. |
| L | Specifies the end of a range (last). This is only available for Day_of_month and Day_of_week. When used with Day of month, L always means the last day of the month, such as January 31, February 29 for leap years, and so on. When used with Day_of_week by itself, it always means 7 or SAT. When used with a Day_of_week value, it means the last of that type of day in the month. For example, if you specify 2L, you are specifying the last Monday of the month. Do not use a range of values with L as the results might be unexpected. |
| W | Specifies the nearest weekday (Monday-Friday) of the given day. This is only available for Day_of_month. For example, if you specify 20W, and the 20th is a Saturday, the class runs on the 19th. If you specify 1W, and the first is a Saturday, the class does not run in the previous month, but on the third, which is the following Monday.TipUse the L and W together to specify the last weekday of the month. |
| # | Specifies the nth day of the month, in the format weekday#day_of_month. This is only available for Day_of_week. The number before the # specifies weekday (SUN-SAT). The number after the # specifies the day of the month. For example, specifying 2#1 means the class runs on the first Monday of every month. |

The following are some examples of how to use the expression.

| Expression | Description |
| --- | --- |
| 0 0 13 * * ? | Class runs every day at 1 PM. |
| 0 0 22 ? * 6L | Class runs the last Friday of every month at 10 PM. |
| 0 0 10 ? * MON-FRI | Class runs Monday through Friday at 10 AM. |
| 0 0 20 * * ? 2010 | Class runs every day at 8 PM during the year 2010. |

In the following example, the class proschedule implements the Schedulable interface. The class is scheduled to run at 8 AM, on the 13 February.

```

```