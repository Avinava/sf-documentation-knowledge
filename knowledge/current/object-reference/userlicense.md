---
title: "UserLicense"
domain: object-reference
topic: userlicense
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.808Z
estimatedTokens: 1524
keywords: [UserLicense, user, license, organization, entitles, specific, functionality, determines, profiles, permission, Calls, Usage]
---

# UserLicense

> Represents a user license in your organization. A
   user license entitles a user to specific functionality and determines the profiles and permission
   sets available to the user.

# UserLicense

Represents a user license in your organization. A user license entitles a user to specific functionality and determines the profiles and permission sets available to the user.

## Supported Calls

describeSObjects(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| LicenseDefinitionKey | TypestringPropertiesFilter, Group, SortDescriptionA string that uniquely identifies a particular user license. Label is License Def. ID. Values are:AUL: corresponds to the Salesforce Platform user licenseAUL1: corresponds to the Salesforce Platform One user licenseAUL_LIGHT corresponds to the Salesforce Platform Light user licenseFDC_ONE corresponds to the Lightning Platform - One App user licenseFDC_SUB corresponds to the Lightning Platform App Subscription user licenseOverage_Platform_Portal_User corresponds to the Overage Authenticated Website user licensePID_STRATEGIC_PRM: corresponds to the Gold Partner user licensePID_CHATTER corresponds to the Chatter Only user licensePID_CONTENT corresponds to the Content Only user licensePID_Customer_Portal_Basic: corresponds to the Customer Portal Manager Standard user license and the Customer Portal User licensePID_Customer_Portal_Standard: corresponds to the Customer Portal Manager Custom user licensePID_FDC_FREE corresponds to the Lightning Platform Free user licensePID_IDEAS corresponds to the Ideas Only user licensePID_Ideas_Only_Portal corresponds to the Ideas Only Portal user licensePID_Ideas_Only_Site corresponds to the Ideas Only Site user licensePID_KNOWLEDGE corresponds to the Knowledge Only user licensePID_Customer_Community corresponds to the Customer Community license.PID_Customer_Community_Login corresponds to the Customer Community Login license.PID_Partner_Community corresponds to the Partner Community license.PID_Partner_Community_Login corresponds to the Partner Community Login license.PID_Limited_Customer_Portal_Basic: corresponds to the Limited Customer Portal Manager Standard user licensePID_Limited_Customer_Portal_Standard: corresponds to the Limited Customer Portal Manager Custom user licensePID_Overage_Customer_Portal_Basic: corresponds to the Overage Customer Portal Manager Standard user licensePID_Overage_High Volume Customer Portal corresponds to the Overage High Volume Customer Portal user licensePlatform_Portal_User: corresponds to the Authenticated Website user licensePOWER_PRM: corresponds to the Partner user licensePOWER_SSP: corresponds to the Customer Portal Manager user licenseSFDC: corresponds to the Full CRM user license |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe user license label.This field is available in API version 32.0 and later. |
| MonthlyLoginsEntitlement | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe maximum number of customer or partner portal logins allowed per month. A null value in this field means the user license is charged according to the number of users rather than the number of logins.This field is available in API version 20.0 and later.NoteTo be visible and queryable, this field requires:Digital Experiences enabledthe View Setup and Configuration user permission |
| MonthlyLoginsUsed | TypeintPropertiesGroup, Nillable, SortDescriptionThe number of successful logins for all users associated with a customer or partner portal user license. This field has a non-null value if MonthlyLoginsEntitlement has a non-null value.This field is available in API version 20.0 and later.NoteTo be visible and queryable, this field requires:Digital Experiences enabledthe View Setup and Configuration user permission |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe internal name of the user license.NoteYour organization may also include custom user licenses. |
| Status | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe current status of the user license. Valid values for this field are Active and Disabled.This field is available in API version 32.0 and later. |
| TotalLicenses | TypeintPropertiesFilter, Group, SortDescriptionThe number of user licenses in the organization.This field is available in API version 32.0 and later. |
| UsedLicenses | TypeintPropertiesFilter, Group, SortDescriptionThe number of user licenses that are assigned to active users in the organization.This field is available in API version 32.0 and later.This field isn’t filterable in API version 64.0 or later when using it in a WHERE clause in a SOQL query. Instead, you have to process the data after fetching all the records. |
| UsedLicensesLastUpdated | TypedateTimePropertiesaggregate, Filter, SortDescriptionThe timestamp of the query. If your license count exceeds your org’s allotted threshold, the count timestamp reflects the previous day, otherwise the timestamp reflects the current day and time.This field is available in API version 41.0 and later. |

## Usage

Users with the “View Setup and Configuration” permission can use the UserLicense object to view the set of currently defined user licenses in your organization.

The UserLicense object is currently used by bulk user creation to determine the user license to which each profile and permission set belongs. For example, if you use the API to create portal users and you want to know which profile belongs to each portal user license, you can query this object for each profile and check the LicenseDefinitionKey to identify the associated user license.

#### See Also

-   [Profile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm "Represents a profile, which defines a set of permissions to perform different operations. Operations can include creating a custom profile or querying, adding, updating, or deleting information.")

-   [PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.")

## Related Topics

- Profile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm)
- PermissionSet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
