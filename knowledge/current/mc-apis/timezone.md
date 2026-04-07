---
title: "TimeZone"
domain: mc-apis
topic: timezone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:20.667Z
estimatedTokens: 1305
keywords: [TimeZone, specific, time, zone, application, supplied, precedence, Zones, Items]
---

> The TimeZone object represents a specific time zone in the application. This indicates a specific time zone to the application. If both an ID and Name are supplied, the ID takes precedence.

# TimeZone

The TimeZone object represents a specific time zone in the application. This indicates a specific time zone to the application. If both an ID and Name are supplied, the ID takes precedence.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Client | ClientID | Specifies the account ownership and context of an object. |
| CorrelationID | xsd:string | Identifies correlation of objects across several requests. |
| CreatedDate | xsd:dateTime | Read-only date and time of the object's creation. |
| CustomerKey | xsd:string | User-supplied unique identifier for an object within an object type. This property corresponds to the external key assigned to an object in Marketing Cloud. |
| ID | xsd:int | Read-only identifier for an object. Some objects use the ObjectID property as the Marketing Cloud unique ID. |
| ModifiedDate | Nullable`1 | Indicates the last time object information was modified. |
| Name | xsd:string | Name of the object or property. |
| ObjectID | xsd:string | System-controlled, read-only text string identifier for object. |
| ObjectState | xsd:string | Reserved for future use. |
| Owner | Owner | Describes account ownership of subscriber in an on-your-behalf account. |
| PartnerKey | xsd:string | Unique identifier provided by partner for an object. This property is accessible only via API. |
| PartnerProperties | APIProperty[] | A collection of metadata supplied by the client and stored by the system. These properties are accessible only via API. |

## Available Time Zones

A Retrieve call on this object returns a list of all available time zones.

-   1 (GMT-06:00) Central Standard Time
-   2 (GMT) Casablanca
-   3 (GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London
-   4 (GMT) Monrovia, Reykjavik
-   5 (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
-   6 (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
-   7 (GMT+01:00) Brussels, Copenhagen, Madrid, Paris
-   8 (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
-   9 (GMT+01:00) West Central Africa
-   10 (GMT+02:00) Amman
-   11 (GMT+02:00) Athens, Bucharest, Istanbul
-   12 (GMT+02:00) Beirut
-   13 (GMT+02:00) Cairo
-   14 (GMT+02:00) Harare, Pretoria
-   15 (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
-   16 (GMT+02:00) Jerusalem
-   17 (GMT+02:00) Minsk
-   18 (GMT+02:00) Windhoek
-   19 (GMT+03:00) Baghdad
-   20 (GMT+03:00) Kuwait, Riyadh
-   21 (GMT+03:00) Moscow, St. Petersburg, Volgograd
-   22 (GMT+03:00) Nairobi
-   23 (GMT+03:00) Tbilisi
-   24 (GMT+03:30) Tehran
-   25 (GMT+04:00) Abu Dhabi, Muscat
-   26 (GMT+04:00) Baku
-   27 (GMT+04:00) Caucasus Standard Time
-   28 (GMT+04:00) Port Louis
-   29 (GMT+04:00) Yerevan
-   30 (GMT+04:30) Kabul
-   31 (GMT+05:00) Ekaterinburg
-   32 (GMT+05:00) Islamabad, Karachi
-   33 (GMT+05:00) Tashkent
-   34 (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
-   35 (GMT+05:30) Sri Jayawardenepura
-   36 (GMT+05:45) Kathmandu
-   37 (GMT+06:00) Almaty, Novosibirsk
-   38 (GMT+06:00) Astana, Dhaka
-   39 (GMT+06:30) Yangon (Rangoon)
-   40 (GMT+07:00) Bangkok, Hanoi, Jakarta
-   41 (GMT+07:00) Krasnoyarsk
-   42 (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
-   43 (GMT+08:00) Irkutsk, Ulaan Bataar
-   44 (GMT+08:00) Kuala Lumpur, Singapore
-   45 (GMT+08:00) Perth
-   46 (GMT+08:00) Taipei
-   47 (GMT+09:00) Osaka, Sapporo, Tokyo
-   48 (GMT+09:00) Seoul
-   49 (GMT+09:00) Yakutsk
-   50 (GMT+09:30) Adelaide
-   51 (GMT+09:30) Darwin
-   52 (GMT+10:00) Brisbane
-   53 (GMT+10:00) Canberra, Melbourne, Sydney
-   54 (GMT+10:00) Guam, Port Moresby
-   55 (GMT+10:00) Hobart
-   56 (GMT+10:00) Vladivostok
-   57 (GMT+11:00) Magadan, Solomon Is., New Caledonia
-   58 (GMT+12:00) Auckland, Wellington
-   59 (GMT+12:00) Fiji, Kamchatka, Marshall Is.
-   60 (GMT+13:00) Nukualofa
-   61 (GMT-01:00) Azores
-   62 (GMT-01:00) Cape Verde Is.
-   63 (GMT-02:00) Mid-Atlantic
-   64 (GMT-03:00) Brasilia
-   65 (GMT-03:00) Buenos Aires
-   66 (GMT-03:00) Georgetown
-   67 (GMT-03:00) Greenland
-   68 (GMT-03:00) Montevideo
-   69 (GMT-03:30) Newfoundland
-   70 (GMT-04:00) Atlantic Time (Canada)
-   71 (GMT-04:00) La Paz
-   72 (GMT-04:00) Manaus
-   73 (GMT-04:00) Santiago
-   74 (GMT-04:30) Caracas
-   75 (GMT-05:00) Bogota, Lima, Quito, Rio Branco
-   76 (GMT-05:00) Eastern Time (US & Canada)
-   77 (GMT-05:00) Indiana (East)
-   78 (GMT-06:00) Central America
-   79 (GMT-06:00) Central Time (US & Canada)
-   80 (GMT-06:00) Guadalajara, Mexico City, Monterrey - New
-   81 (GMT-06:00) Guadalajara, Mexico City, Monterrey - Old
-   82 (GMT-06:00) Saskatchewan
-   83 (GMT-07:00) Arizona
-   84 (GMT-07:00) Chihuahua, La Paz, Mazatlan - New
-   85 (GMT-07:00) Chihuahua, La Paz, Mazatlan - Old
-   86 (GMT-07:00) Mountain Time (US & Canada)
-   87 (GMT-08:00) Pacific Time (US & Canada)
-   88 (GMT-08:00) Tijuana, Baja California
-   89 (GMT-09:00) Alaska
-   90 (GMT-10:00) Hawaii
-   91 (GMT-11:00) Midway Island, Samoa
-   92 (GMT-12:00) International Date Line West

## Related Items

-   [Supported Operations for Objects and Methods](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/supported_operations_for_objects_and_methods.htm)
