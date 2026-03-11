---
title: "Datetime Methods"
domain: apex-reference
topic: datetime-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.272Z
keywords: [Datetime, Methods, Adds, specified, number, days, Datetime., addDays, additionalDays, Signature, Parameters, Return, Value, Example, addHours, additionalHours, addMinutes, additionalMinutes, addMonths, additionalMonths]
---

# Datetime Methods

> Adds the specified number of days to a Datetime.

## Datetime Methods

The following are methods for Datetime.

-   **[addDays(additionalDays)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addDays)**  
    Adds the specified number of days to a Datetime.
-   **[addHours(additionalHours)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addHours)**  
    Adds the specified number of hours to a Datetime.
-   **[addMinutes(additionalMinutes)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addMinutes)**  
    Adds the specified number of minutes to a Datetime.
-   **[addMonths(additionalMonths)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addMonths)**  
    Adds the specified number of months to a Datetime.
-   **[addSeconds(additionalSeconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addSeconds)**  
    Adds the specified number of seconds to a Datetime.
-   **[addYears(additionalYears)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_addYears)**  
    Adds the specified number of years to a Datetime.
-   **[date()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_date)**  
    Returns the Date component of a Datetime in the local time zone of the context user.
-   **[dateGMT()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dateGMT)**  
    Return the Date component of a Datetime in the GMT time zone.
-   **[day()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_day)**  
    Returns the day-of-month component of a Datetime in the local time zone of the context user.
-   **[dayGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dayGmt)**  
    Returns the day-of-month component of a Datetime in the GMT time zone.
-   **[dayOfYear()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dayOfYear)**  
    Returns the day-of-year component of a Datetime in the local time zone of the context user.
-   **[dayOfYearGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_dayOfYearGmt)**  
    Returns the day-of-year component of a Datetime in the GMT time zone.
-   **[format()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_format)**  
    Converts the date to the local time zone and returns the converted date as a formatted string using the locale of the context user. If the time zone cannot be determined, GMT is used.
-   **[format(dateFormatString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_format_2)**  
    Converts the date to the local time zone and returns the converted date as a string using the supplied Java simple date format. If the time zone cannot be determined, GMT is used.
-   **[format(dateFormatString, timezone)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_format_3)**  
    Converts the date to the specified time zone and returns the converted date as a string using the supplied Java simple date format. If the supplied time zone is not in the correct format, GMT is used.
-   **[formatGmt(dateFormatString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_formatGmt)**  
    Returns a Datetime as a string using the supplied Java simple date format and the GMT time zone.
-   **[formatLong()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_formatLong)**  
    Converts the date to the local time zone and returns the converted date in long date format.
-   **[getTime()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_getTime)**  
    Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this DateTime object.
-   **[hour()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_hour)**  
    Returns the hour component of a Datetime in the local time zone of the context user.
-   **[hourGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_hourGmt)**  
    Returns the hour component of a Datetime in the GMT time zone.
-   **[isSameDay(dateToCompare)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_isSameDay)**  
    Returns true if the Datetime that called the method is the same as the specified Datetime in the local time zone of the context user.
-   **[millisecond()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_millisecond)**  
    Return the millisecond component of a Datetime in the local time zone of the context user.
-   **[millisecondGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_millisecondGmt)**  
    Return the millisecond component of a Datetime in the GMT time zone.
-   **[minute()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_minute)**  
    Returns the minute component of a Datetime in the local time zone of the context user.
-   **[minuteGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_minuteGmt)**  
    Returns the minute component of a Datetime in the GMT time zone.
-   **[month()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_month)**  
    Returns the month component of a Datetime in the local time zone of the context user (1=Jan).
-   **[monthGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_monthGmt)**  
    Returns the month component of a Datetime in the GMT time zone (1=Jan).
-   **[newInstance(milliseconds)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance)**  
    Constructs a Datetime and initializes it to represent the specified number of milliseconds since January 1, 1970, 00:00:00 GMT.
-   **[newInstance(date, time)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance_2)**  
    Constructs a DateTime from the specified date and time in the local time zone.
-   **[newInstance(year, month, day)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance_3)**  
    Constructs a Datetime from Integer representations of the specified year, month (1=Jan), and day at midnight in the local time zone.
-   **[newInstance(year, month, day, hour, minute, second)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstance_4)**  
    Constructs a Datetime from Integer representations of the specified year, month (1=Jan), day, hour, minute, and second in the local time zone.
-   **[newInstanceGmt(date, time)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstanceGmt)**  
    Constructs a DateTime from the specified date and time in the GMT time zone.
-   **[newInstanceGmt(year, month, date)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstanceGmt_2)**  
    Constructs a Datetime from Integer representations of the specified year, month (1=Jan), and day at midnight in the GMT time zone
-   **[newInstanceGmt(year, month, date, hour, minute, second)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_newInstanceGmt_3)**  
    Constructs a Datetime from Integer representations of the specified year, month (1=Jan), day, hour, minute, and second in the GMT time zone
-   **[now()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_now)**  
    Returns the current Datetime based on a GMT calendar.
-   **[parse(datetimeString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_parse)**  
    Constructs a Datetime from the given String in the local time zone and in the format of the user locale.
-   **[second()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_second)**  
    Returns the second component of a Datetime in the local time zone of the context user.
-   **[secondGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_secondGmt)**  
    Returns the second component of a Datetime in the GMT time zone.
-   **[time()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_time)**  
    Returns the time component of a Datetime in the local time zone of the context user.
-   **[timeGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_timeGmt)**  
    Returns the time component of a Datetime in the GMT time zone.
-   **[valueOf(dateTimeString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_valueOf)**  
    Returns a Datetime that contains the value of the specified string.
-   **[valueOf(fieldValue)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_valueOf_2)**  
    Converts the specified object to a Datetime. Use this method to convert a history tracking field value or an object that represents a Datetime value.
-   **[valueOfGmt(dateTimeString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_valueOfGmt)**  
    Returns a Datetime that contains the value of the specified String.
-   **[year()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_year)**  
    Returns the year component of a Datetime in the local time zone of the context user.
-   **[yearGmt()](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_System_Datetime_yearGmt)**  
    Returns the year component of a Datetime in the GMT time zone.

### addDays(additionalDays)

Adds the specified number of days to a Datetime.

#### Signature

public Datetime addDays(Integer additionalDays)

#### Parameters

additionalDays

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### addHours(additionalHours)

Adds the specified number of hours to a Datetime.

#### Signature

public Datetime addHours(Integer additionalHours)

#### Parameters

additionalHours

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### addMinutes(additionalMinutes)

Adds the specified number of minutes to a Datetime.

#### Signature

public Datetime addMinutes(Integer additionalMinutes)

#### Parameters

additionalMinutes

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### addMonths(additionalMonths)

Adds the specified number of months to a Datetime.

#### Signature

public Datetime addMonths(Integer additionalMonths)

#### Parameters

additionalMonths

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### addSeconds(additionalSeconds)

Adds the specified number of seconds to a Datetime.

#### Signature

public Datetime addSeconds(Integer additionalSeconds)

#### Parameters

additionalSeconds

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### addYears(additionalYears)

Adds the specified number of years to a Datetime.

#### Signature

public Datetime addYears(Integer additionalYears)

#### Parameters

additionalYears

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### date()

Returns the Date component of a Datetime in the local time zone of the context user.

#### Signature

public Date date()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Example

```

```

### dateGMT()

Return the Date component of a Datetime in the GMT time zone.

#### Signature

public Date dateGMT()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Example

```

```

### day()

Returns the day-of-month component of a Datetime in the local time zone of the context user.

#### Signature

public Integer day()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### dayGmt()

Returns the day-of-month component of a Datetime in the GMT time zone.

#### Signature

public Integer dayGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### dayOfYear()

Returns the day-of-year component of a Datetime in the local time zone of the context user.

#### Signature

public Integer dayOfYear()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

For example, February 5, 2008 08:30:12 would be day 36.

```

```

### dayOfYearGmt()

Returns the day-of-year component of a Datetime in the GMT time zone.

#### Signature

public Integer dayOfYearGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### format()

Converts the date to the local time zone and returns the converted date as a formatted string using the locale of the context user. If the time zone cannot be determined, GMT is used.

#### Signature

public String format()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The sample is executed in an org where the “Enable ICU Locale Formats” crucial update is enabled. See [https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn\_forcecom\_globalization\_enable\_icu\_cruc.htm](https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_forcecom_globalization_enable_icu_cruc.htm).

```

```

### format(dateFormatString)

Converts the date to the local time zone and returns the converted date as a string using the supplied Java simple date format. If the time zone cannot be determined, GMT is used.

#### Signature

public String format(String dateFormatString)

#### Parameters

dateFormatString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information on the Java simple date format, see [Java SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html "html (New Window)").

#### Example

```

```

### format(dateFormatString, timezone)

Converts the date to the specified time zone and returns the converted date as a string using the supplied Java simple date format. If the supplied time zone is not in the correct format, GMT is used.

#### Signature

public String format(String dateFormatString, String timezone)

#### Parameters

dateFormatString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

timezone

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Valid time zone values for the timezone argument are the time zones of the Java TimeZone class that correspond to the time zones returned by the [TimeZone.getAvailableIDs](http://docs.oracle.com/javase/6/docs/api/java/util/TimeZone.html#getAvailableIDs\(\) "HTML (New Window)") method in Java. We recommend you use full time zone names, not the three-letter abbreviations.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information on the Java simple date format, see [Java SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html "html (New Window)").

#### Example

This example uses format to convert a GMT date to the America/New\_York time zone and formats the date using the specified date format.

```

```

### formatGmt(dateFormatString)

Returns a Datetime as a string using the supplied Java simple date format and the GMT time zone.

#### Signature

public String formatGmt(String dateFormatString)

#### Parameters

dateFormatString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

For more information on the Java simple date format, see [Java SimpleDateFormat](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html "html (New Window)").

#### Example

```

```

### formatLong()

Converts the date to the local time zone and returns the converted date in long date format.

#### Signature

public String formatLong()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### getTime()

Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this DateTime object.

#### Signature

public Long getTime()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Example

```

```

### hour()

Returns the hour component of a Datetime in the local time zone of the context user.

#### Signature

public Integer hour()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### hourGmt()

Returns the hour component of a Datetime in the GMT time zone.

#### Signature

public Integer hourGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### isSameDay(dateToCompare)

Returns true if the Datetime that called the method is the same as the specified Datetime in the local time zone of the context user.

#### Signature

public Boolean isSameDay(Datetime dateToCompare)

#### Parameters

dateToCompare

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

```

```

### millisecond()

Return the millisecond component of a Datetime in the local time zone of the context user.

#### Signature

public Integer millisecond()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### millisecondGmt()

Return the millisecond component of a Datetime in the GMT time zone.

#### Signature

public Integer millisecondGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### minute()

Returns the minute component of a Datetime in the local time zone of the context user.

#### Signature

public Integer minute()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### minuteGmt()

Returns the minute component of a Datetime in the GMT time zone.

#### Signature

public Integer minuteGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### month()

Returns the month component of a Datetime in the local time zone of the context user (1=Jan).

#### Signature

public Integer month()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### monthGmt()

Returns the month component of a Datetime in the GMT time zone (1=Jan).

#### Signature

public Integer monthGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### newInstance(milliseconds)

Constructs a Datetime and initializes it to represent the specified number of milliseconds since January 1, 1970, 00:00:00 GMT.

#### Signature

public static Datetime newInstance(Long milliseconds)

#### Parameters

milliseconds

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```

```

### newInstance(date, time)

Constructs a DateTime from the specified date and time in the local time zone.

#### Signature

public static Datetime newInstance(Date date, Time time)

#### Parameters

date

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

time

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```

```

### newInstance(year, month, day)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), and day at midnight in the local time zone.

#### Signature

public static Datetime newInstance(Integer year, Integer month, Integer day)

#### Parameters

year

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

month

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

day

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```

```

### newInstance(year, month, day, hour, minute, second)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), day, hour, minute, and second in the local time zone.

#### Signature

public static Datetime newInstance(Integer year, Integer month, Integer day, Integer hour, Integer minute, Integer second)

#### Parameters

year

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

month

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

day

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

hour

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

minute

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

second

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

```

```

### newInstanceGmt(date, time)

Constructs a DateTime from the specified date and time in the GMT time zone.

#### Signature

public static Datetime newInstanceGmt(Date date, Time time)

#### Parameters

date

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

time

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### newInstanceGmt(year, month, date)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), and day at midnight in the GMT time zone

#### Signature

public static Datetime newInstanceGmt(Integer year, Integer month, Integer date)

#### Parameters

year

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

month

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

date

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### newInstanceGmt(year, month, date, hour, minute, second)

Constructs a Datetime from Integer representations of the specified year, month (1=Jan), day, hour, minute, and second in the GMT time zone

#### Signature

public static Datetime newInstanceGmt(Integer year, Integer month, Integer date, Integer hour, Integer minute, Integer second)

#### Parameters

year

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

month

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

date

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

hour

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

minute

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

second

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Example

```

```

### now()

Returns the current Datetime based on a GMT calendar.

#### Signature

public static Datetime now()

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The format of the returned datetime is: 'MM/DD/YYYY HH:MM PERIOD'

#### Example

```

```

### parse(datetimeString)

Constructs a Datetime from the given String in the local time zone and in the format of the user locale.

#### Signature

public static Datetime parse(String datetimeString)

#### Parameters

datetimeString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Example

This example uses parse to create a Datetime from a date passed in as a string and that is formatted for the English (United States) locale. You may need to change the format of the date string if you have a different locale.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This sample is executed in an org where the “Enable ICU Locale Formats” crucial update is enabled. See [https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn\_forcecom\_globalization\_enable\_icu\_cruc.htm](https://releasenotes.docs.salesforce.com/en-us/spring20/release-notes/rn_forcecom_globalization_enable_icu_cruc.htm).

```

```

### second()

Returns the second component of a Datetime in the local time zone of the context user.

#### Signature

public Integer second()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### secondGmt()

Returns the second component of a Datetime in the GMT time zone.

#### Signature

public Integer secondGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### time()

Returns the time component of a Datetime in the local time zone of the context user.

#### Signature

public Time time()

#### Return Value

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```

```

### timeGmt()

Returns the time component of a Datetime in the GMT time zone.

#### Signature

public Time timeGmt()

#### Return Value

Type: [Time](atlas.en-us.apexref.meta/apexref/apex_methods_system_time.htm#apex_methods_system_time "Contains methods for the Time primitive data type.")

#### Example

```

```

### valueOf(dateTimeString)

Returns a Datetime that contains the value of the specified string.

#### Signature

public static Datetime valueOf(String dateTimeString)

#### Parameters

dateTimeString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The returned date is in the GMT time zone.

#### Usage

The specified string should use the standard date format “yyyy-MM-dd HH:mm:ss” in the local time zone.

#### Example

```

```

### valueOf(fieldValue)

Converts the specified object to a Datetime. Use this method to convert a history tracking field value or an object that represents a Datetime value.

#### Signature

public static Datetime valueOf(Object fieldValue)

#### Parameters

fieldValue

Type: Object

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Usage

Use this method with the OldValue or NewValue fields of history sObjects, such as AccountHistory, when the field is a Date/Time field.

#### Example

```

```

### valueOfGmt(dateTimeString)

Returns a Datetime that contains the value of the specified String.

#### Signature

public static Datetime valueOfGmt(String dateTimeString)

#### Parameters

dateTimeString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [Datetime](#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

#### Usage

The specified string should use the standard date format “yyyy-MM-dd HH:mm:ss” in the GMT time zone.

#### Example

```

```

### year()

Returns the year component of a Datetime in the local time zone of the context user.

#### Signature

public Integer year()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```

### yearGmt()

Returns the year component of a Datetime in the GMT time zone.

#### Signature

public Integer yearGmt()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Example

```

```