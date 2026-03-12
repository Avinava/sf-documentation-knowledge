---
title: "Employee"
domain: object-reference
topic: employee
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.529Z
estimatedTokens: 3064
keywords: [Employee, company, organization, API, version, 48.0, later, 49.0, supports, reports, criteria-based, sharing, rules, history, tracking]
---

# Employee

> Represents an employee within a company or organization. This object is
    available in API version 48.0 and later. In API version 49.0 and later, this object supports
    reports, criteria-based sharing rules, and history tracking, plus you can exclude individual
    fields from custom page layouts.

# Employee

Represents an employee within a company or organization. This object is available in API version 48.0 and later. In API version 49.0 and later, this object supports reports, criteria-based sharing rules, and history tracking, plus you can exclude individual fields from custom page layouts.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search() undelete(), update(), upsert()

## Special Access Rules

To access this object, you must have a Workplace Command Center permission set license and the Provides access to Workplace Command Center features system permission or have the Employee Management and Employee User add-on licenses.

## Fields

| Field | Details |
| --- | --- |
| AboutMe | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionInformation about the employee, such as areas of interest or skills. Values can be provided on Employee’s profile page. This field is available even if Chatter is disabled. |
| AlternateEmail | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s alternate email address. |
| Availability | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s availability status.Possible values are:In The OfficeOut Of OfficeOut SickPTOVolunteering Time OffWorking Remotely |
| AvailabilityEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end date of the Employee’s availability, inclusive of the date. |
| AvailabilityStartDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start date of the Employee’s availability, inclusive of the date. |
| BannerPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionRead only. The URL for the employee's banner photo. Available in API v51.0 and later. |
| CurrentWellnessStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s current wellness status.Possible values are:Available To WorkRemote Work OnlyUnavailableUnknown |
| DateOfBirth | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s date of birth. |
| Email | TypeemailPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe employee’s email address. This field is unique within your organization. |
| EmployeeNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The employee's employment ID for the organization they were hired into. This field is unique within your organization. |
| EmployeeStatus | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The employee's current work status.Possible values are:ActiveInactiveLeaveTerminated |
| EmploymentType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee's full-time or part-time status.Possible values are:Full-TimePart-Time |
| FirstName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The employee’s first name. |
| FullPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionRead only. The URL for the employee's profile photo. The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo has been uploaded, the URL returned for an older photo isn’t guaranteed to return a photo. Query this field for the URL of the most recent photo. Available in API v51.0 and later. |
| Gender | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s gender.Possible values are:FemaleMaleNon-Binary / Non-ConformingOtherPrefer Not to StateTransgender FemaleTransgender Male |
| HomeAddress | TypeaddressPropertiesFilter, NillableDescriptionThe employee’s home address. |
| HomeCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city for the employee’s home address. |
| HomeCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe county for the employee’s home address. |
| HomeGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of an employee’s home address geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| HomeLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with HomeLongitude to specify the precise geolocation of the employee’s home address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| HomeLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with HomeLatitude to specify the precise geolocation of the employee’s home address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| HomePhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s home phone number. |
| HomePostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code for the employee’s home address. |
| HomeState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state for the employee’s home address. |
| HomeStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe street for the employee’s home address. |
| IndividualId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Individual record that this employee is assigned to. |
| InternalOrganizationUnitId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the InternalOrganizationUnit this employee is assigned to. |
| JobProfile | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s job profile at the company. |
| LastName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The employee’s last name. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LocationId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Location that this employee is assigned to. |
| ManagerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA reference to the Employee record of the employee's manager. |
| MediumPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionRead only. The URL for the medium-sized employee's profile photo. The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo has been uploaded, the URL returned for an older photo isn’t guaranteed to return a photo. Query this field for the URL of the most recent photo. Available in API v51.0 and later. |
| MiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s middle name. |
| Name | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionA compound field of Employee.FirstName, Employee.MiddleName, and Employee.LastName. |
| NameSuffix | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee’s suffix. |
| OutOfOfficeMessage | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe message portion of the employee availability. This message can provide reasons or details about the change in availability. The maximum length of this string is 40 characters. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API to perform the create operation. |
| PreferredFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name the employee prefers to be called. |
| PreferredPronoun | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee's preferred pronoun.Possible values are:He/Him/HisOther/Ask MeShe/Her/HersThey/Them/Theirs |
| RelatedPersonId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLinks an employee to a person account with a unique value. Reserved for future use. Don’t edit it. |
| SmallPhotoUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionRead only. The URL for the small-sized employee's profile photo. The URL is updated every time a photo is uploaded and reflects the most recent photo. If a newer photo has been uploaded, the URL returned for an older photo isn’t guaranteed to return a photo. Query this field for the URL of the most recent photo. Available in API v51.0 and later. |
| StatusAsOf | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. Start date of the employee’s current status. |
| StatusEndDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPlanned end date for the employee’s status. |
| TimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time zone which the employee’s work hours fall within. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field to associate an Employee record with a user in the org. The field is optional and unique. |
| WorkPhone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe employee's formatted work phone number including country code and extension. |
| WorkerType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of worker for the employee.Possible values are:AlumnusContractorEmployeeInternTemporary |
| WorkingHoursEnd | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe end time of the employee’s working hours. |
| WorkingHoursStart | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe start time of the employee’s working hours. |

## Associated Objects

This object has the following associated objects. Unless noted, they’re available in the same API version as this object.

[EmployeeHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 49.0)

History is available for tracked fields of the object.

[EmployeeOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[EmployeesShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.") (API version 49.0)

Sharing is available for the object.

#### See Also

-   [*Workplace Command Center for Work.com Developer Guide*: Extend Work.com with Custom Solutions](https://developer.salesforce.com/docs/atlas.en-us.260.0.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_dev_workplace_cc_solution.htm "
    Workplace Command Center for Work.com Developer Guide: Extend
    Work.com with Custom Solutions - HTML (New Window)")

## Related Topics

- EmployeeHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- EmployeeOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- EmployeesShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
