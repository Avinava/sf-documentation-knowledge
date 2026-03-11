---
title: "timeZoneSidKey"
domain: apex-reference
topic: timezonesidkey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.273Z
keywords: [timeZoneSidKey, Stores, default, value, user's, time, zone, such, GMT-07, Pacific, Daylight, Time, America, Los_Angeles, defined, region, key, city, according, ISO]
---

# timeZoneSidKey

> Stores the default value for the user's time zone, such as (GMT-07:00) Pacific Daylight Time (America/Los_Angeles). The time zone is defined
    using region and key city according to ISO standards. The default value is the time zone for the
    registration handler execution user. The execution user is specified in the Run As field in the
    authentication provider definition.

### timeZoneSidKey

Stores the default value for the user's time zone, such as (GMT-07:00) Pacific Daylight Time (America/Los\_Angeles). The time zone is defined using region and key city according to ISO standards. The default value is the time zone for the registration handler execution user. The execution user is specified in the Run As field in the authentication provider definition.

#### Signature

public String timeZoneSidKey {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")