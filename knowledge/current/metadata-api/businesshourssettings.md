---
title: "BusinessHoursSettings"
domain: metadata-api
topic: businesshourssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.226Z
estimatedTokens: 1799
keywords: [BusinessHoursSettings, metadata, manage, settings, business, hours, holidays, entitlements, entitlement, templates, campaigns, cases, extends, inherits, fullName]
---

# BusinessHoursSettings

> Represents the metadata used to manage settings
            for business hours and holidays in entitlements, entitlement templates, campaigns, and
            cases.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# BusinessHoursSettings

Represents the metadata used to manage settings for business hours and holidays in entitlements, entitlement templates, campaigns, and cases. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

Business hours and holidays settings are stored in a single file named businessHours.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

BusinessHoursSettings is available in API version 29.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| businessHours | BusinessHoursEntry[] | Represents the application of business hours to entitlements, entitlement templates, campaigns, and cases. |
| holidays | Holidays[] | Represents a holiday and its usage in businessHours. |

## BusinessHoursEntry

Represents the application of business hours to entitlements, entitlement templates, campaigns, and cases.

| Field Name | Field Type | Description |
| --- | --- | --- |
| timeZoneId | string | The time zone for the time that defines business hours. |
| name | string | Name of the business hours. This name should be unique. |
| active | string | Indicates whether the business hours are active. |
| default | string | Indicates whether the business hours are used as the default business hours. |
| mondayStartTime | string | Start time for the business hours on Monday. Uses the format HH:mm:ss.SSSZ. |
| mondayEndTime | string | End time for the business hours on Monday. Uses the format HH:mm:ss.SSSZ. The value 00:00:00.000Z specifies midnight on Monday. |
| tuesdayStartTime | string | Start time for the business hours on Tuesday. Uses the format HH:mm:ss.SSSZ. |
| tuesdayEndTime | string | End time for the business hours on Tuesday. Uses the format HH:mm:ss.SSSZ. The value 00:00:00.000Z specifies midnight on Tuesday. |
| wednesdayStartTime | string | Start time for the business hours on Wednesday. Uses the format HH:mm:ss.SSSZ. |
| wednesdayEndTime | string | End time for the business hours on Wednesday. Uses the format HH:mm:ss.SSSZ. The value 00:00:00.000Z specifies midnight on Wednesday. |
| thursdayStartTime | string | Start time for the business hours on Thursday. Uses the format HH:mm:ss.SSSZ. |
| thursdayEndTime | string | End time for the business hours on Thursday. Uses the format HH:mm:ss.SSSZ. The value 00:00:00.000Z specifies midnight on Thursday. |
| fridayStartTime | string | Start time for the business hours on Friday. Uses the format HH:mm:ss.SSSZ. |
| fridayEndTime | string | End time for the business hours on Friday. Uses the format HH:mm:ss.SSSZ. The value 00:00:00.000Z specifies midnight on Friday. |
| saturdayStartTime | string | Start time for the business hours on Saturday. Uses the format HH:mm:ss.SSSZ. |
| saturdayEndTime | string | End time for the business hours on Saturday. Uses the format HH:mm:ss.SSSZ. The value 00:00:00.000Z specifies midnight on Saturday. |
| sundayStartTime | string | Start time for the business hours on Sunday. Uses the format HH:mm:ss.SSSZ. |
| sundayEndTime | string | End time for the business hours on Sunday. Uses the format HH:mm:ss.SSSZ. The value 00:00:00.000Z specifies midnight on Sunday. |

## Holidays

Represents a holiday and its usage in businessHours.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Name of the holiday. This name does not have to be unique. |
| description | string | The description of the holiday. |
| isRecurring | string | Indicates whether the holiday is recurring. |
| activityDate | string | The date of the holiday. Use for non-recurring holidays. Uses the format HH:mm:ss.SSSZ. |
| recurrenceStartDate | string | The date the holiday starts recurring. Uses the format yyyy-mm-dd. |
| recurrenceEndDate | string | The date the holiday stops recurring. Uses the format yyyy-mm-dd. Optional. |
| startTime | string | The start time on the date of the holiday. Uses the format HH:mm:ss.SSSZ. startTime and endTime must be both null or both not null. If they are both null, indicates the whole day. |
| endTime | string | The end time on the date of the holiday. Uses the format HH:mm:ss.SSSZ. startTime and endTime must be both null or both not null. If they are both null, indicates the whole day. |
| recurrenceType | string | The recurrence type of the holiday. Valid values are: RecursDaily, RecursEveryWeekday, RecursMonthly, RecursMonthlyNth, RecursWeekly, RecursYearly, RecursYealyNth. |
| recurrenceInterval | string | The interval of weeks, months, or years the holiday recurs. |
| recurrenceDayOfWeek | string | The day of week the holiday recurs. Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. |
| recurrenceDayOfMonth | string | The day of month the holiday recurs. Valid values: integers 1-31. |
| recurrenceInstance | string | Valid values: First, Second, Third, Fourth, Last. Only used for recurrenceType RecursMonthlyNth and RecursYearlyNth. For example, if the recurenceInstance value is First, the holiday recurs on the first Monday of the month every 3 months. |
| recurrenceMonthOfYear | string | Valid values: January, February, March, April, May, June, July, August, September, October, November, December. |
| businessHours | string | The name of the business hours setting that applies to this holiday. |

## Declarative Metadata Sample Definition

The following is an example businesshours.settings metadata file:

```

```

The following is an example package.xml manifest that references the BusinessHoursSettings definitions:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<BusinessHoursSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <businessHours>
        <active>true</active>
        <default>true</default>
        <fridayEndTime>00:00:00.000Z</fridayEndTime>
        <fridayStartTime>00:00:00.000Z</fridayStartTime>
        <mondayEndTime>00:00:00.000Z</mondayEndTime>
        <mondayStartTime>00:00:00.000Z</mondayStartTime>
        <name>Default</name>
        <saturdayEndTime>00:00:00.000Z</saturdayEndTime>
        <saturdayStartTime>00:00:00.000Z</saturdayStartTime>
        <sundayEndTime>00:00:00.000Z</sundayEndTime>
        <sundayStartTime>00:00:00.000Z</sundayStartTime>
        <thursdayEndTime>00:00:00.000Z</thursdayEndTime>
        <thursdayStartTime>00:00:00.000Z</thursdayStartTime>
        <timeZoneId>America/Los_Angeles</timeZoneId>
        <tuesdayEndTime>00:00:00.000Z</tuesdayEndTime>
        <tuesdayStartTime>00:00:00.000Z</tuesdayStartTime>
        <wednesdayEndTime>00:00:00.000Z</wednesdayEndTime>
        <wednesdayStartTime>00:00:00.000Z</wednesdayStartTime>
    </businessHours>
    <businessHours>
        <active>true</active>
        <default>false</default>
        <fridayEndTime>00:00:00.000Z</fridayEndTime>
        <fridayStartTime>00:00:00.000Z</fridayStartTime>
        <mondayEndTime>15:00:00.000Z</mondayEndTime>
        <mondayStartTime>09:00:00.000Z</mondayStartTime>
        <name>bh1</name>
        <saturdayEndTime>00:00:00.000Z</saturdayEndTime>
        <saturdayStartTime>00:00:00.000Z</saturdayStartTime>
        <sundayEndTime>00:00:00.000Z</sundayEndTime>
        <sundayStartTime>00:00:00.000Z</sundayStartTime>
        <thursdayEndTime>17:00:00.000Z</thursdayEndTime>
        <thursdayStartTime>10:50:00.000Z</thursdayStartTime>
        <timeZoneId>America/Los_Angeles</timeZoneId>
        <tuesdayEndTime>13:00:00.000Z</tuesdayEndTime>
        <tuesdayStartTime>09:00:00.000Z</tuesdayStartTime>
        <wednesdayEndTime>15:00:00.000Z</wednesdayEndTime>
        <wednesdayStartTime>09:00:00.000Z</wednesdayStartTime>
    </businessHours>
    <holidays>
        <activityDate>2013-09-02</activityDate>
        <businessHours>Default</businessHours>
        <businessHours>bh1</businessHours>
        <isRecurring>false</isRecurring>
        <name>Labor Day</name>
    </holidays>
    <holidays>
        <businessHours>bh1</businessHours>
        <isRecurring>true</isRecurring>
        <name>Christmas</name>
        <recurrenceDayOfMonth>25</recurrenceDayOfMonth>
        <recurrenceMonthOfYear>December</recurrenceMonthOfYear>
        <recurrenceStartDate>2013-12-25</recurrenceStartDate>
        <recurrenceType>RecursYearly</recurrenceType>
    </holidays>
</BusinessHoursSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>BusinessHours</members>
        <name>Settings</name>
    </types>
    <version>29.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
