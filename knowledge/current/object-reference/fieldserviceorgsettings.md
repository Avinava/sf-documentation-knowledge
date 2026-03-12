---
title: "FieldServiceOrgSettings"
domain: object-reference
topic: fieldserviceorgsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.195Z
estimatedTokens: 997
keywords: [FieldServiceOrgSettings, org, settings, Service, Appointment, Assistant, enabled, read-only, record, API, version, 51.0, later, Calls, Special]
---

# FieldServiceOrgSettings

> Represents the org settings for Field Service, such as Appointment Assistant
         settings. If Field Service is enabled, the org contains one read-only record of this
      object. This object is available in API version 51.0 and later.

# FieldServiceOrgSettings

Represents the org settings for Field Service, such as Appointment Assistant settings. If Field Service is enabled, the org contains one read-only record of this object. This object is available in API version 51.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To see this object, Field Service must be enabled. For specified fields in the table, Appointment Assistant must also be enabled.

## Fields

| Field | Details |
| --- | --- |
| ApptAssistantExpiration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe expiry time in minutes of when the customer stops seeing the mobile worker’s location. Appointment Assistant must also be enabled to see this field. |
| ApptAssistantInfoUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe page URL that enables Appointment Assistant. Appointment Assistant must also be enabled to see this field. |
| ApptAssistantRadiusUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of the radius of the service appointment that prompts the Last Mile event for Appointment Assistant. Appointment Assistant must also be enabled to see this field.Possible values are:KilometerMeterMileYard |
| ApptAssistantRadiusValue | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe radius of the service appointment that prompts the Last Mile event for Appointment Assistant. Appointment Assistant must also be enabled to see this field. |
| ApptAssistantStatus | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, SortDescriptionThe value that prompts the En Route event for Appointment Assistant. Appointment Assistant must also be enabled to see this field.Possible values are:CanceledCannot CompleteCompletedDispatchedIn ProgressNoneScheduledTestSharingThe default value is 'None'. |
| CanPopulateGoogleAddress | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows desktop and mobile to send geolocation and map data to Google and Apple. Available in API version 57.0 and later.The default value is true. |
| CanSendAppCenterCrashReports | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows Salesforce to send crash reports to Microsoft App Center. Available in API version 57.0 and later.The default value is true. |
| CanStoreMobileAnalytics | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAllows third parties to store mobile analytics. Available in API version 57.0 and later.The default value is true. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| DoesAvlCalcInclOvertime | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether overtime is included in work capacity availability calculations. Available in API version 59.0 and later.The default value is false. |
| DoesAvlCalcInclPrimOnly | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if primary members only are included in work capacity availability calculations. If the value is false both primary and secondary members of the service territory are included. Available in API version 59.0 and later.The default value is false. |
|  |  |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the field service org settings.The format for the values is a two-letter language code in small letters, for example, fr for French. If the language has regional dialects, add the two-letter country code in capital letters, for example, use fr_BE for Belgian French. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the field service org settings. |
