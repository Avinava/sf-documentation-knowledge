---
title: "TimeZone Methods"
domain: apex-reference
topic: timezone-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.984Z
keywords: [TimeZone, Methods, Returns, time, zone’s, display, name., getDisplayName, Signature, Return, Value, Versioned, Behavior, Changes, getID, getOffset, date, Parameters, Usage, Note]
---

# TimeZone Methods

> Returns this time zone’s display name.

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