---
title: "TimeZone Class"
domain: apex-reference
topic: timezone-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:31.487Z
estimatedTokens: 1390
namespace: System
keywords: [TimeZone, time, zone, creating, new, obtaining, offset, display, Usage, getDisplayName, Versioned, Behavior, Changes, getID, getOffset]
---

# TimeZone Class

> Represents a time zone. Contains methods for creating a
new time zone and obtaining time zone properties, such as the time
zone ID, offset, and display name.

**Namespace:** `System`

# TimeZone Class

Represents a time zone. Contains methods for creating a new time zone and obtaining time zone properties, such as the time zone ID, offset, and display name.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

You can use the methods in this class to get properties of a time zone, such as the properties of the time zone returned by UserInfo.getTimeZone, or the time zone returned by getTimeZone of this class.

## Example

This example shows how to get properties of the current user’s time zone and display them to the debug log. The output of the sample varies based on the user's time zone.

```

```

This second example shows how to create a time zone for the New York time zone and get the offset of this time zone to the GMT time zone. The example uses two dates to get the offset from. One date is before DST (Daylight Saving Time), and one is after DST. In 2000, DST ended on Sunday, October 29 for the New York time zone. Because the date occurs after DST ends, the offset on the first date is –5 hours to GMT. In 2012, DST ended on Sunday, November 4. Because the date is within DST, the offset on the second date is –4 hours.

```

```

This next example is similar to the previous one except that it gets the offset around the boundary of DST. In 2014, DST ended on Sunday, November 2 at 2:00 AM local time for the New York time zone. The first offset is obtained right before DST ends, and the second offset is obtained right after DST ends. The dates are created by using the DateTime.newInstanceGMT method. This method expects the passed-in date values to be based on the GMT time zone.

```

```

## TimeZone Methods

The following are methods for TimeZone.

-   **[getDisplayName()](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_System_TimeZone_getDisplayName)**
    Returns this time zone’s display name.
-   **[getID()](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_System_TimeZone_getID)**
    Returns this time zone’s ID.
-   **[getOffset(date)](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_System_TimeZone_getOffset)**
    Returns the time zone offset, in milliseconds, of the specified date to the GMT time zone.
-   **[getTimeZone(timeZoneIdString)](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_System_TimeZone_getTimeZone)**
    Returns the time zone corresponding to the specified time zone ID.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm#apex_System_TimeZone_toString)**
    Returns the string representation of this time zone.

### getDisplayName()

Returns this time zone’s display name.

#### Signature

public String getDisplayName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Versioned Behavior Changes

In API version 45.0 and later, getDisplayName displays Daylight Savings Time appropriately when daylight savings are in effect. For example, British Summer Time is displayed for Europe/London and Pacific Daylight Time for America/Los\_Angeles.

### getID()

Returns this time zone’s ID.

#### Signature

public String getID()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getOffset(date)

Returns the time zone offset, in milliseconds, of the specified date to the GMT time zone.

#### Signature

public Integer getOffset(Datetime date)

#### Parameters

date

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date argument is the date and time to evaluate.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

The returned offset is adjusted for daylight saving time if the date argument falls within daylight saving time for this time zone.

### getTimeZone(timeZoneIdString)

Returns the time zone corresponding to the specified time zone ID.

#### Signature

public static TimeZone getTimeZone(String timeZoneIdString)

#### Parameters

timeZoneIdString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The time zone values you can use for the Id argument are any valid time zone values that the [Java TimeZone class](http://docs.oracle.com/javase/6/docs/api/java/util/TimeZone.html "HTML (New Window)") supports.

#### Return Value

Type: [TimeZone](#apex_methods_system_timezone "Represents a time zone. Contains methods for creating a new time zone and obtaining time zone properties, such as the time zone ID, offset, and display name.")

#### Example

```

```

### toString()

Returns the string representation of this time zone.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
TimeZone tz = UserInfo.getTimeZone();
System.debug('Display name: ' + tz.getDisplayName());
System.debug('ID: ' + tz.getID());
// During daylight saving time for the America/Los_Angeles time zone
System.debug('Offset: ' + tz.getOffset(DateTime.newInstance(2012,10,23,12,0,0)));
// Not during daylight saving time for the America/Los_Angeles time zone
System.debug('Offset: ' + tz.getOffset(DateTime.newInstance(2012,11,23,12,0,0)));
System.debug('String format: ' + tz.toString());
```

```
// Get the New York time zone
Timezone tz = Timezone.getTimeZone('America/New_York');

// Create a date before the 2007 shift of DST into November
DateTime dtpre = DateTime.newInstanceGMT(2000, 11, 1, 0, 0, 0);
system.debug(tz.getOffset(dtpre));   //-18000000 (= -5 hours = EST)

// Create a date after the 2007 shift of DST into November
DateTime dtpost = DateTime.newInstanceGMT(2012, 11, 1, 0, 0, 0);
system.debug(tz.getOffset(dtpost));   //-14400000 (= -4 hours = EDT)
```

```
// Get the New York time zone
Timezone tz = Timezone.getTimeZone('America/New_York');

// Before DST ends
DateTime dtpre = DateTime.newInstanceGMT(2014, 11, 2, 5, 59, 59);  //1:59:59AM local EDT
system.debug(tz.getOffset(dtpre));   //-14400000 (= -4 hours = still on DST)

// After DST ends
DateTime dtpost = DateTime.newInstanceGMT(2014, 11, 2, 6, 0, 0); //1:00:00AM local EST
system.debug(tz.getOffset(dtpost));  //-18000000 (= -5 hours = back one hour)
```

```apex
TimeZone tz = TimeZone.getTimeZone('America/Los_Angeles');
String tzName = tz.getDisplayName();
System.assert(tzName.equals('(GMT-08:00) Pacific Standard Time (America/Los_Angeles)') ||
              tzName.equals('(GMT-07:00) Pacific Daylight Time (America/Los_Angeles)'));
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- getDisplayName() (atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm)
- getID() (atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm)
- getOffset(date) (atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm)
- getTimeZone(timeZoneIdString) (atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm)
- toString() (atlas.en-us.apexref.meta/apexref/apex_methods_system_timezone.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
