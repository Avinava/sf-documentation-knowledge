---
title: "FieldServiceMobileSettings"
domain: field-service
topic: fieldservicemobilesettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:47:12.623Z
keywords: [FieldServiceMobileSettings, Supported, Calls, Special, Access, Rules, Fields, Usage, Associated, Objects]
---

# FieldServiceMobileSettings

# FieldServiceMobileSettings

Represents a configuration of settings that control the Field Service iOS and Android mobile app experience. This object is available in API version 38.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Field Service must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| AscAutomaticMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDescribes how status changes are handled. Possible values are:Off—No automatic status changes.Manual—The mobile worker can cancel or update the status change.Timed—The mobile worker has a time period to prevent the status change. When the timer ends, the status changes.Automated—The mobile worker is notified that the status has changed. |
| AscCancellationTimerInSec | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionFor the Timed mode only. Time that the user has to cancel the appointment status change. |
| AscCompletedStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus that indicates that a mobile worker completed a service appointment. Possible values are:CanceledCannot CompleteCompletedDispatchedIn ProgressNoneScheduled |
| AscOnSiteStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus that indicates that a mobile worker is at a service appointment. Possible values are:CanceledCannot CompleteCompletedDispatchedIn ProgressNoneScheduled |
| AscRadiusInMeters | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionService appointment radius that can trigger a status change. |
| AscTimeLimitationInMin | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionA time period when status changes can occur, before an appointment’s scheduled start time and after the scheduled end time. The time is applied only if IsAscTimeLimitEnabled is true. |
| AscTravelStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus that indicates that a mobile worker is traveling to a service appointment. Possible values are:CanceledCannot CompleteCompletedDispatchedIn ProgressNoneScheduled |
| BgGeoLocationAccuracy | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe accuracy of geolocation tracking of services resources while the app is running in the background. Lowering accuracy reduces battery consumption for mobile devices. Available in API version 41.0 and later. Picklist options:Medium—Accurate to within about 100 meters.Coarse—Accurate to within about 1 kilometer.Very Coarse—Accurate to within about 3 kilometers.The default value is Coarse. |
| BgGeoLocationMinUpdateFreqMins | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe frequency of geolocation poling of services resources while the app is running in the background. Less frequent poling decreases battery consumption for mobile devices. The label in the UI is Minimum Update Frequency of Geo Location in Minutes (Background). Available in API version 41.0 and later. |
| BrandInvertedColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of toasts and the contrast color of the floating action button. |
| ContrastInvertedColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of secondary backgrounds in the UI. |
| ContrastPrimaryColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of primary text. |
| ContrastQuaternaryColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of secondary lines that delineate different areas of the UI. |
| ContrastQuinaryColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of primary backgrounds in the UI. |
| ContrastSecondaryColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of secondary text. |
| ContrastTertiaryColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of the icons on the settings screen and of primary lines that delineate different areas of the UI. |
| DaysBeforeCurrentServiceDate | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDays before the current service date during which to prime service documents for offline use. |
| DayAfterCurrentServiceDate | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDays after the current service date during which to prime service documents for offline use. |
| DefaultListViewDeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the default service appointment list view on the schedule screen. |
| DestinationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines if the mobile worker navigates to the destination based on the address or based on the latitude and longitude. Possible values are:AddressLatitude and LongitudeThe default value is Address. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the set of field service mobile settings.Only users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FeedbackPrimaryColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of error messages. |
| FeedbackSecondaryColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of success messages. |
| FeedbackSelectedColor | TypestringPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionThe color indicating the user’s current selection. |
| FutureDaysInDatePicker | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe number of days into the future that a user can select from the date picker on the schedule screen. |
| GeoLocationAccuracy | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe accuracy of service resource geolocation tracking. Lowering accuracy reduces battery consumption for mobile devices. Picklist values:Fine—Accurate to within 10 meters.Medium—Accurate to within 100 meters.Coarse—Accurate to within 1 kilometer.The default value is Medium. |
| GeoLocationMinUpdateFreqMins | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe minimum number of minutes between attempts to poll geolocation. |
| IsAscTimeLimitEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether AscTimeLimitationInMin is applied. Default is true |
| IsAssignmentNotification | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether service appointment notifications are sent when the service resource is assigned the appointment. Default is false. This field is available in API version 46.0 and later. |
| IsDefault | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the set of field service mobile settings is the default set that is automatically assigned to users. You can’t make a different settings record the default, but you can modify the default settings record. Default is false. Available in API version 41.0 and later. |
| IsDispatchNotification | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether service appointment notifications are sent when the service resource is dispatched for the appointment. Default is false. This field is available in API version 46.0 and later. |
| IsLimitedLocTrackingEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhen limited tracking for Appointment Assistant is enabled, the mobile worker’s location is shown only on the way to a service appointment. The default value is false. |
| IsOptimizedImageUploadEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether to configure the size of images uploaded by your mobile workers. To optimize upload speeds, you can limit your file size to a defined maximum size using the OptimizeImageSizeInMb field. Resizing your images affects the resolution of your images. The default value is false. |
| IsScheduleViewResourceAbsences | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether resource absences appear in the Schedule tab of the mobile app. This field is available in API version 55.0 and later. |
| IsSendLocationHistory | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether geolocation tracking of services resources is enabled. Default is false. |
| IsShowEditFullRecord | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether users can edit records with the field service mobile app. Default is false. |
| IsTimeSheetEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether users can access time sheets on their mobile devices (Beta). Default is false. |
| IsTimeZoneEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the time zone of timesheet entries on the mobile app is recorded. The current time zone is recorded in the LocationTimeZone field of the TimeSheetEntry object. Default is false. Available in API version 50.0 and later. |
| IsUseSalesforceMobileActions | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionReserved for future use. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe localization preference for a user. The format is a two letter language code and, if there’s a dialect, followed by the two letter dialect, for example, fr for French, and fr_BE for Belgian French |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label in the UI for the set of field service mobile settings. Available in API version 41.0 and later. |
| MaxNumberOfServiceAppointments | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSets the maximum number of service appointments to use for offline priming of service documents. If you don’t have dates on your service appointments, this setting helps to optimize offline priming in place of DaysBeforeCurrentServiceDate and DaysBeforeCurrentServiceDate fields. |
| MetadataCacheTimeDays | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe number of days that org metadata, such as layouts, is kept in the app’s local cache of memory. |
| NavbarBackgroundColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of the top bar in the app. |
| NavbarInvertedColor | TypestringPropertiesCreate, Defaulted on create, Group, Sort, UpdateDescriptionThe secondary color of the tap bar in the app. |
| OptimizeImageSizeInMb | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionConfigure the size of images uploaded by your mobile workers. To optimize upload speeds, you can limit your file size to a defined maximum size. Resizing your images affects the resolution of your images. Enter 0.2 or higher. Used only if IsOptimizedImageUploadEnabled is true. |
| PastDaysInDatePicker | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe number of days into the past that a user can select from the date picker on the schedule screen. |
| PrimaryBrandColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe main branding color used throughout the UI. |
| QuickStatusChangeFlowName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of an existing Field Service flow with a Quick Status Change action to change the work order or service appointment status or both. This applies to flows invoked on the mobile app only. This field is available in API version 51.0 and later. |
| RecordDataCacheTimeMins | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe number of minutes that record data is kept in the app’s local cache of memory. |
| SecondaryBrandColor | TypestringPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe color of action buttons. |
| TimeIntervalSetupMins | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionControls the spacing of picklist options for time values such as when creating resource absences. |
| UpdateScheduleTimeMins | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe minimum number of minutes between attempts to update a user’s schedule.The user’s schedule might not refresh on this cadence if the user’s device isn’t connected to a network or doesn’t have adequate battery life. |

## Usage

Field Service Mobile settings allow you to create sets of settings to apply to different field service mobile users. The settings apply to both the Android and iOS versions of the app.

For example, suppose you want to accommodate workers that are color blind, or who work in dark or bright conditions. You can choose different branding options for different workers to suit their needs, and assign them to their profiles.

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

FieldServiceMobileSettingsChangeEvent (API version 55.0)

Change events are available for the object.