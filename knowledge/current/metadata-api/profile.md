---
title: "Profile"
domain: metadata-api
topic: profile
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:41.386Z
estimatedTokens: 8406
keywords: [Profile, user, user’s, permission, perform, different, functions, Salesforce, extends, Metadata, inherits, fullName, Declarative, File, Suffix]
---

# Profile

> Represents a user profile. A profile defines a user’s
        permission to perform different functions within Salesforce. This type extends the Metadata 
        metadata type and inherits its fullName field.

# Profile

Represents a user profile. A profile defines a user’s permission to perform different functions within Salesforce. This type extends the Metadata metadata type and inherits its fullName field.

In API version 29.0 and later, you can retrieve and deploy access settings for these managed components in profiles and permission sets:

-   Apex classes
-   Apps
-   Custom field permissions
-   Custom object permissions
-   Custom tab settings
-   External data sources
-   Record types
-   Visualforce pages

In API version 51.0 and later, you can retrieve and deploy access settings for login flows. For more information, see Managed Component Access in the Components in a Module section of [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.").

As of API version 50.0 and later, only users with correct permissions can view profile names other than their own if the Profile Filtering setting is enabled.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Profile names are also exposed when users with permissions to perform the following tasks take these actions:

-   Create a tab or record type with a wizard step that includes the assignment of tabs and record types to profiles.
-   Configure a login flow where viewing profile lists is required to make flow associations.
-   Set up delegated admins where looking up profiles is needed to identify assignable profiles.
-   Administer an org as a delegated customer admin.
-   Administer an org as a delegated admin to view and assign profiles of the delegated group.

## Declarative Metadata File Suffix and Directory Location

The file suffix is .profile. There's one file for each profile, stored in the profiles folder in the corresponding package directory.

## Version

Profiles are available in API version 10.0 and later.

## Special Access Rules

As of Summer ’20 and later, Customer Portal and Partner Portal users can’t access this type.

To view the following settings, assignments, and permissions for standard and custom objects in a specified profile, the View Setup and Configuration permission is required.

-   Client settings
-   Field permissions
-   Layout assignments
-   Object permissions
-   Permission dependencies
-   Permission set tab settings
-   Permission set group components
-   Record types

## Fields

The content of a profile returned by Metadata API depends on the content requested in the [RetrieveRequest](atlas.en-us.api_meta.meta/api_meta/meta_retrieve_request.htm "The RetrieveRequest parameter specified on a retrieve() call encapsulates options for determining which packages or files are retrieved.") message. For example, profiles only include field-level security for fields included in custom objects returned in the same RetrieveRequest as the profiles. The profile definition contains the following fields:

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

We designed Profile metadata deployment to overlay the existing Profile settings in a target org. For example, if you disable permissions for a profile, the newly disabled permission information isn't exported. To force all Profile changes to deploy through metadata, including permission disablement, add code that explicitly indicates disabled permissions. For example, add this code to the Profile metadata .xml file before deploying into a target org: <value>false</value>.

If you deploy a profile that doesn’t exist in the target org and don't specify any permissions or settings, then the resulting profile contains all permissions and settings in the standard Minimum Access - Salesforce profile (API version 60.0 and later) or the standard Standard User profile (API version 59.0 and earlier).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

As of API version 38.0, you can change field permissions to make a field editable using the Metadata API for fields that you can't change through the user interface. For example, you can deploy Asset.ProductCode as an editable field even though you can't through the user interface.

| Field Name | Field Type | Description |
| --- | --- | --- |
| agentAccesses | ProfileAgentAccess[] | Indicates which agents are visible to users assigned to this profile. Available in API version 63.0 and later. |
| applicationVisibilities | ProfileApplicationVisibility[] | Indicates which apps are visible to users assigned to this profile. In API version 29.0 and earlier, this field supports custom apps only. In API version 30.0 and later, this field supports both standard and custom apps. |
| categoryGroupVisibilities | ProfileCategoryGroupVisibility[] | Indicates which data category groups are visible to users assigned to this profile. Available in API version 41.0 and later. |
| classAccesses | ProfileApexClassAccess[] | Indicates which top-level Apex classes have methods that users assigned to this profile can execute. |
| custom | boolean | Indicates whether the profile is a custom (true) or standard (false) profile. Available in API version 30.0 and later. |
| customMetadataTypeAccesses | ProfileCustomMetadataTypeAccess[] | Indicates the custom metadata types that are read-accessible to a user assigned to this profile. Available in API version 47.0 and later. |
| customPermissions | ProfileCustomPermissions[] | Indicates which custom permissions are available to users assigned to this profile. Available in API version 31.0 and later. |
| customSettingAccesses | ProfileCustomSettingAccesses[] | Indicates the custom settings that are read-accessible to a user assigned to this profile. Available in API version 47.0 and later. |
| description | string | The profile description. Limit: 255 characters. Available in API version 30.0 and later. |
| externalDataSourceAccesses | ProfileExternalDataSourceAccess[] | Indicates which data sources with identity type of Per User are available to users assigned to this profile. Available in API version 27.0 and later. |
| fieldLevelSecurities | ProfileFieldLevelSecurity[] | Indicates which fields are visible to a user assigned to this profile, and the kind of access available (editable or hidden). This field is available in API version 22.0 and earlier. |
| fieldPermissions | ProfileFieldLevelSecurity[] | Indicates which fields are visible to a user assigned to this profile, and the kind of access available (editable or readable). This field is available in API version 23.0 and later. |
| flowAccesses | ProfileFlowAccess[] | Indicates which flows can be accessed by a user assigned to this profile. Available in API version 47.0 and later. |
| fullName | string | The name can only contain characters, letters, and the underscore (_) character. The name must start with a letter, and can’t end with an underscore or contain two consecutive underscore characters.Inherited from the Metadata component, this field isn’t defined in the WSDL for this component. It must be specified when creating, updating, or deleting. See create() to see an example of this field specified for a call. |
| layoutAssignments | ProfileLayoutAssignments[] | Indicates which layout to use for this profile. |
| loginFlows | LoginFlow[] | Indicates a business process that you direct users to before they access Salesforce. |
| loginHours | ProfileLoginHours[] | Indicates the hours within which a user with this profile can log in. If not specified, the profile doesn’t restrict a user’s login hours.This field is available in API version 25.0 and later. |
| loginIpRanges | ProfileLoginIpRange[] | The list of IP address ranges from which users with a particular profile can log in.This field is available in API version 17.0 and later. |
| objectPermissions | ProfileObjectPermissions[] | Indicates which objects are accessible to a user assigned to this profile, and the kind of access available (create, read, edit, delete, and so on). In API version 28.0 and later, this field is only retrieved when allowRead is true.In API version 50.0 and later, editing standard objects on standard profiles is disabled. |
| pageAccesses | ProfileApexPageAccess[] | Indicates which Visualforce pages that users assigned to this profile can execute. |
| profileActionOverrides | ProfileActionOverride[] | A list of the Lightning Experience Home page action overrides that are assigned to this profile. When a user logs in with a profile, a matching ProfileActionOverride assignment takes precedence over existing overrides for the Home tab specified in ActionOverride.This field is available in API versions 37.0 to 44.0. |
| recordTypeVisibilities | ProfileRecordTypeVisibility[] | Indicates the visibility of record types for users assigned to this profile. In API version 29.0 and later, this field isn’t retrieved or deployed for inactive record types. |
| ServicePresenceStatusAccesses | ProfileServicePresenceStatusAccess[] | Indicates which Service presence statuses that the user assigned to this profile can execute. Available in API version 64.0 and later. |
| tabVisibilities | ProfileTabVisibility[] | Indicates which record types are visible to a user assigned to this profile, and therefore which tabs within an app are visible. |
| userLicense | string | The User License for the profile. A user license determines the baseline of features that the user can access. Every user must have exactly one user license.This field is available in API version 17.0 and later. |
| userPermissions | ProfileUserPermission[] | Specifies a user permission (such as “API Enabled”) and whether it’s enabled for this profile. This field retrieves only enabled user permissions. Available in API version 29.0 and later. |

## LoginFlow

LoginFlow represents a business process that you direct users to before they access Salesforce. You can use Metadata API to define existing flows as login flows and to edit login flow definitions. To delete login flow definitions, use the [Login Flow page](https://help.salesforce.com/articleView?id=security_login_flow_associate.htm&language=en_US "HTML (New Window)").

| Field Name | Field Type | Description |
| --- | --- | --- |
| flow | string | Required only if the uiLoginFlowType is VisualWorkflow. The fullName of the Flow.Before you can deploy the LoginFlow, the Flow referenced here must be deployed in your org and its status must be Active. |
| flowtype | LoginFlowType (enumeration of type string) | Required. The value is UI. |
| friendlyname | string | Required. The name of the LoginFlow. |
| uiLoginFlowType | UiLoginFlowType (enumeration of type string) | Required. The type of login flow. These are valid values.VisualWorkflow—Indicates a Salesforce Flow. You can create these flows using Flow Builder.VisualForce—Indicates a flow created using Visualforce. |
| useLightningRuntime | boolean | Indicates if Lightning Runtime is used (true) or not (false (default)). Used only if uiLoginFlowType is VisualWorkflow. |
| vfFlowPage | string | Required only if the uiLoginFlowType is VisualForce. The name of the VisualForce page. |
| vfFlowPageTitle | string | Required only if the uiLoginFlowType is VisualForce. The name of the VisualForce page. |

## ProfileActionOverride

ProfileActionOverride represents a user profile-based override of an [ActionOverride](atlas.en-us.api_meta.meta/api_meta/actionoverride.htm#actionoverride "Represents an action override on a standard or custom object. Use it to create, update, edit, or delete action overrides. You can access ActionOverride only by accessing its encompassing CustomObject.") on a standard Home tab in Lightning Experience.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   ProfileActionOverride can be defined only on Profile for API version 39.0 to 44.0. In API version 45.0 and later, ProfileActionOverride must be defined for CustomApplication instead. Beginning with API version 45.0, Home page assignments related to user profile must also have a corresponding app assignment because more granular Home page assignments are supported. As a result, ProfileActionOverride is defined for CustomApplication rather than Profile.
-   ProfileActionOverride settings aren’t retrieved in the .profile file unless a Lightning page is referenced in the package.xml file.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionName | string | Required. The possible values are the same as the actions you can override:acceptclonedeleteeditlistnewtabview |
| content | string | Set this field if type is set to flexipage, lightningcomponent, scontrol, or visualforce. It refers to the name of the Lightning page, Lightning component, s-control, or Visualforce page to use as the override. To reference installed components, use this format: Component_namespace__Component_name. |
| formFactor | FormFactor (enumeration of type string) | The size of the page being overridden.The Large value represents the Lightning Experience desktop environment and is valid only for the flexipage and lightningcomponent types. The Small value represents the Salesforce mobile app on a phone or tablet. The Medium value is reserved for future use. The null value (which is the same as specifying no value) represents Salesforce Classic. |
| pageOrSobjectType | string | The name of the sObject type being overridden. Valid values are standard and custom.This value must be standard-home when actionName is tab. |
| recordType | string | The record type assigned to the ProfileActionOverride. If the PageOrSobjectType is standard-home, this field is null. |
| type | ActionOverrideType (enumeration of type string) | Required. Represents the type of action override. Valid values are described in ActionOverrideType. |

## ProfileAgentAccess

ProfileAgentAccess represents the agent access configuration for users assigned through a profile.

| Field Name | Field Type | Description |
| --- | --- | --- |
| agentName | string | Required. The name of the employee agent. |
| enabled | boolean | Required. Indicates whether users assigned to this profile can use the Agentforce Employee Agent (true) or not (false). |

## ProfileApplicationVisibility

ProfileApplicationVisibility determines whether an app is visible to a user assigned to this profile.

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The name of the app. |
| default | boolean | Required. Indicates whether the app is the default app (true) or not (false). Only one app per profile can be set to true. |
| visible | boolean | Required. Indicates whether this app is visible to users assigned to this profile (true) or not (false). |

## ProfileCategoryGroupVisibility

ProfileCategoryGroupVisibility determines whether a data category group is visible to a user assigned to this profile. Available in API version 41.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataCategories | string[] | Array of one or more data category names. |
| dataCategoryGroup | string | Required. The name of the data category group. |
| visibility | CategoryGroupVisibility (enumeration of type string) | Required. Indicates the visibility of the data category. Valid values are:ALLCUSTOMNONE |

## ProfileCustomMetadataTypeAccess

[ProfileCustomMetadataTypeAccess](#ProfileCustomMetadataTypeAccess_title) represents the custom metadata type access for users assigned to a profile. Available in API version 47.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the records for this custom metadata type are readable (true) or not (false). |
| name | string | Required. The custom metadata type name. |

## ProfileApexClassAccess

ProfileApexClassAccess determines which top-level Apex classes have methods that users assigned to this profile can execute.

| Field Name | Field Type | Description |
| --- | --- | --- |
| apexClass | string | Required. The Apex class name. |
| enabled | boolean | Required. Indicates whether users assigned to this profile can execute methods in the top-level class (true) or not (false). |

## ProfileCustomPermissions

ProfileCustomPermissions represents the custom permissions access for users assigned to a profile. Only enabled custom permissions are retrieved.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the custom permission is enabled (true) or not (false). |
| name | string | Required. The custom permission name. |

## ProfileCustomSettingAccesses

ProfileCustomSettingAccesses represents the custom setting access for users assigned to a profile. Available in API version 47.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the records for this custom setting are readable (true) or not (false). |
| name | string | Required. The custom setting name. |

## ProfileExternalDataSourceAccess

ProfileExternalDataSourceAccess represents the data source access for users with identity type of Per User. Available in API version 27.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the data source is enabled (true) or not (false). |
| externalDataSource | string | The name of the external data source. |

## ProfileFieldLevelSecurity

ProfileFieldLevelSecurity represents the field level security for users assigned to a profile. In API version 30.0 and later, permissions for required fields can’t be retrieved or deployed.

| Field Name | Field Type | Description |
| --- | --- | --- |
| editable | boolean | Required. Indicates whether this field is editable (true) or not (false).In API version 30.0 and later, when deploying a new custom field, this field is false by default. |
| field | string | Required. Indicates the name of the field.When referencing shared Activity fields, specify Event or Task. For example, Event.Meeting__c. |
| hidden | boolean | Indicates whether this field is hidden (true) or not (false). This field is available in API version 22.0 and earlier.For portal profiles, this field is set to true by default in API version 19.0 and later. |
| readable | boolean | Indicates whether this field is readable (true) or not (false). This field is available in API version 23.0 and later. It replaces the hidden field.In API version 30.0 and later, when deploying a new custom field, this field is false by default.For portal profiles, this field is set to false by default. |

## ProfileFlowAccess

[ProfileFlowAccess](#ProfileFlowAccess_title) represents which flows a profile grants access to. Available in API version 47.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether users assigned this profile can access the flow (true) or not (false). The default value is false. |
| flow | string | Required. The name of the flow to which access is granted. |

## ProfileLayoutAssignments

ProfileLayoutAssignments determines which layout to use for a profile and a given entity.

| Field Name | Field Type | Description |
| --- | --- | --- |
| layout | string | Required. Indicates the layout for this particular entity. |
| recordType | string | This field is optional. If the recordType of the record matches a layout assignment rule, it uses the specified layout. |

## ProfileLoginHours

ProfileLoginHours restricts the days and times within which users with a particular profile can log in.

| Field Name | Field Type | Description |
| --- | --- | --- |
| weekdayStart | string | Specifies the earliest time on that day that a user with this profile can log in. If a start time for a particular day is specified, an end time for that day also must be specified. Start can’t be greater than end for a particular day.Valid values for weekday: monday, tuesday, wednesday, thursday, friday, saturday, or sunday. For example, mondayStart indicates the beginning of the login period for Monday.Valid values for Start: the number of minutes since midnight. Must be evenly divisible by 60 (full hours). For example, 300 is 5:00 AM. |
| weekdayEnd | string | Specifies the time on that day that a user with this profile must log out by.Valid values for weekday: monday, tuesday, wednesday, thursday, friday, saturday, or sunday. For example, mondayEnd indicates the close of the login period for Monday.Valid values for End: the number of minutes since midnight. Must be evenly divisible by 60 (full hours). For example, 1020 is 5:00 PM. |

To delete login hour restrictions from a profile that previously had them, you must explicitly include an empty loginHours tag without any start or end times.

## ProfileLoginIpRange

ProfileLoginIpRange IP defines an IP address range that users with a particular profile can log in from.

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Use this field to identify the purpose of the range, such as which part of a network corresponds to this range. This field is available in API version 31.0 and later. |
| endAddress | string | Required. The end IP address for the range. |
| startAddress | string | Required. The start IP address for the range. |

## ProfileObjectPermissions

ProfileObjectPermissions represents a user's access to objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

-   In API version 18.0 and later, these permissions are disabled in new custom objects for any profiles where “View All Data” or “Modify All Data” is disabled.
-   In API version 50.0 and later, editing standard objects on standard profiles is disabled.

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowCreate | boolean | Indicates whether the object referenced by the object field can be created by the users assigned to this profile (true) or not (false).This field is named revokeCreate before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| allowDelete | boolean | Indicates whether the object referenced by the object field can be deleted by the users assigned to this profile (true) or not (false).This field is named revokeDelete before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| allowEdit | boolean | Indicates whether the object referenced by the object field can be edited by the users assigned to this profile (true) or not (false).This field is named revokeEdit before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| allowRead | boolean | Indicates whether the object referenced by the object field can be seen by the users assigned to this profile (true) or not (false).This field is named revokeRead before version 14.0 and the logic is reversed. The field name change and the update from true to false and the reverse is automatically handled between versions and doesn’t require any manual editing of existing XML component files. |
| modifyAllRecords | boolean | Indicates whether all records for the object referenced by the object field can be read, edited, or deleted by the users assigned to this profile (true) or not (false), regardless of the sharing settings for the object. This setting is equivalent to the Modify All Data user permission limited to the individual object level. Available in API version 15.0 and later.This field isn’t available for all objects. Refer to the profile in the user interface to determine which objects currently support these permissions. Profiles with Modify All Data ignore modifyAllRecords entries in Metadata API and don't return an error if Modify All Data is enabled on the profile. |
| object | string | Required. The name of the object whose permissions are altered by this profile, for example, MyCustomObject__c. |
| viewAllFields | boolean | Indicates whether all fields and field data for the object referenced by the object field can be read by the users assigned to this profile (true) or not (false). Available in API version 63.0 and later. |
| viewAllRecords | boolean | Indicates whether all records for the object referenced by the object field can be read by the users assigned to this profile (true) or not (false), regardless of the sharing settings for the object. This setting includes private records (records with no parent object). This setting is equivalent to the View All Data user permission limited to the individual object level. Available in API version 15.0 and later.This field isn’t available for all objects. Refer to the profile in the user interface to determine which objects currently support these permissions. Profiles with "View All Data" ignore viewAllRecords entries in the Metadata API and don't return an error if View All Data is enabled on the profile. |

## ProfileApexPageAccess

ProfileApexPageAccess determines which Visualforce pages that users assigned to this profile can execute.

| Field Name | Field Type | Description |
| --- | --- | --- |
| apexPage | string | Required. The Visualforce page name. |
| enabled | boolean | Required. Indicates whether users assigned to this profile can execute the Visualforce page (true) or not (false). |

## ProfileRecordTypeVisibility

ProfileRecordTypeVisibility represents the visibility of record types for this profile. Record types let you offer different business processes, picklist values, and page layouts to different users.

| Field Name | Field Type | Description |
| --- | --- | --- |
| default | boolean | Required. Indicates whether the record type is the default when users with this profile create records for this object (true) or not (false). |
| personAccountDefault | boolean | When Person Accounts is enabled, this field indicates whether the record type is this profile’s default person account record type (true) or not (false). When Person Accounts is disabled, this field’s value has no impact.Person accounts aren’t enabled by default in Salesforce. To request person accounts, contact Salesforce. |
| recordType | string | Required. The record type name, for example Account.MyRecordType. |
| visible | boolean | Required. Indicates whether this record type is visible to users assigned to this profile (true) or not (false). |

## ProfileTabVisibility

ProfileTabVisibility represents the visibility of tabs for this profile. For version 17.0 and later, ProfileTabVisibility supports visibility of tabs for standard objects. The manifest file must include the standard object corresponding to a standard tab to retrieve the tab visibility in a profile.

| Field Name | Field Type | Description |
| --- | --- | --- |
| tab | string | Required. The name of the tab. |
| visibility | TabVisibility (enumeration of type string) | Required. Indicates the visibility of the tab. Valid values are:DefaultOff—The tab is available on the All Tabs page. Users can individually customize their display to make the tab visible in any app.DefaultOn—The tab is available on the All Tabs page and appears in the visible tabs for its associated app. Users can individually customize their display to hide the tab or make it visible in other apps.Hidden—The tab isn’t available on the All Tabs page or visible in any apps.In API version 36.0 and earlier, Hidden is returned only if visibility was set using the API. If it was set to Hidden from the profile in Salesforce, the API doesn’t return a visibility value. For version 37.0 and later, when tab visibility is set to hidden, the API returns Hidden, regardless of how the value was set. |

## ProfileUserPermission

ProfileUserPermission represents an app or system permission for a profile. Use one of these elements for each permission.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the permission is enabled (true) or disabled (false). |
| name | string | Required. The permission name. |

## ProfileServicePresenceStatusAccess

Represents the presence statuses that reps assigned to this profile have access. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| servicePresenceStatus | string | Required. The name of Service Presence Status. |
| enabled | boolean | Required. Indicates whether the rep assigned to this profile has access to the presence status (true) or not (false). |

## Java Sample

This sample uses picklists, profiles, record types, and a custom app:

```

```

## Declarative Metadata Sample Definition

The definition of a profile in an organization with a custom app, custom object, record type, tab, and user permission is:

```

```

## Usage

To create custom profiles, we recommend that you use the Profile object instead of the [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") call on the Profile Metadata type. The Profile object allows you to create empty profiles that start without any permissions enabled except for required permissions for the profile’s user license.

When you use the [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") call to get information about profiles, the returned .profile files only include security settings for the other metadata types referenced in the retrieve request. Exceptions include user permissions, IP address ranges, and login hours, which are always retrieved. For example, the following package.xml file contains a types element that matches all custom objects. The returned profiles contain object and field permissions for all custom objects in your organization but don’t include permissions for standard objects, such as Account, and standard fields.

```

```

The wildcard “\*” on CustomObject doesn’t match standard objects. This wildcard behavior helps you to avoid making unintended, high-impact profile changes. If you create a few custom objects in a Developer Edition organization, [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") the information, and later [deploy()](atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm "Uses file representations of components to create, update, or delete those components in a Salesforce org.") the custom objects to your production org, the profile and field-level security for all your standard objects and fields aren’t overwritten. You can only overwrite these standard objects and fields by explicitly creating separate types elements for the objects or fields.

Metadata API intentionally makes it difficult to include standard fields in [retrieve()](atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm "The retrieve() call retrieves XML file representations of components in an organization.") calls to prevent unexpected profile changes. But you can still retrieve and deploy profile permissions for custom and standard fields in standard objects, such as Account.

This package.xml file allows you to return profile permissions for Account standard and custom fields. Note how the standard Account object is defined in a types element by specifying it as a member of a CustomObject type.

```

```

This package.xml file allows you to return profile permissions for the MyCustomField\_\_c custom field in the Account object.

```

```

To retrieve field permissions for relationship fields, remove the “Id” part of the field. For example, in this package.xml file, to retrieve field permissions for the AccountId field for Contacts, you reference this field as Contact.Account not Contact.AcccountId.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [*Salesforce DX Developer Guide*: Retrieve Changes to Profiles with Source Tracking](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_tracking_source_tracking_profiles.htm "Salesforce DX Developer Guide: Retrieve Changes to
    Profiles with Source Tracking - HTML (New Window)")

## Code Examples

```apex
public void profileSample() {
  try {
    // Create an expense report record, tab and app...
    CustomObject expenseRecord = new CustomObject();
    expenseRecord.setFullName("ExpenseReport__c");
    expenseRecord.setLabel("Expense Report");
    expenseRecord.setPluralLabel("Expense Reports");
    
    expenseRecord.setDeploymentStatus(DeploymentStatus.Deployed);
    expenseRecord.setSharingModel(SharingModel.ReadWrite);
    
    CustomField nameField = new CustomField();
    nameField.setType(FieldType.AutoNumber);
    nameField.setLabel("Expense Report Number");
    nameField.setDisplayFormat("ER-{0000}");
    expenseRecord.setNameField(nameField);
    
    AsyncResult[] arsExpenseRecord =
        metadataConnection.create(new Metadata[] {expenseRecord});
    
    Picklist expenseStatus = new Picklist();
    PicklistValue unsubmitted = new PicklistValue();
    unsubmitted.setFullName("Unsubmitted");
    PicklistValue submitted = new PicklistValue();
    submitted.setFullName("Submitted");
    PicklistValue approved = new PicklistValue();
    approved.setFullName("Approved");
    PicklistValue rejected = new PicklistValue();
    rejected.setFullName("Rejected");
    expenseStatus.setPicklistValues(new PicklistValue[] {
        unsubmitted, submitted, approved, rejected}
    );
    
    CustomField expenseStatusField = new CustomField();
    expenseStatusField.setFullName(
        "ExpenseReport__c.ExpenseStatus__c"
    );
    expenseStatusField.setLabel("Expense Report Status");
    expenseStatusField.setType(FieldType.Picklist);
    expenseStatusField.setPicklist(expenseStatus);
    AsyncResult[] arsStatusField =
        metadataConnection.create(new Metadata[] 
            {expenseStatusField});
    
    CustomTab expenseTab = new CustomTab();
    expenseTab.setFullName("ExpenseReport__c");
    expenseTab.setMotif("Custom70: Handsaw");
    expenseTab.setCustomObject(true);
    AsyncResult[] arsTab =
        metadataConnection.create(new Metadata[] {expenseTab});
    
    CustomApplication application = new CustomApplication();
    application.setFullName("ExpenseForce");
    application.setTab(new String[] {expenseTab.getFullName()});
    AsyncResult[] arsApp =
        metadataConnection.create(new Metadata[] {application});
    
    // Employees and managers have the same app visibility...
    ProfileApplicationVisibility appVisibility =
        new ProfileApplicationVisibility();
    appVisibility.setApplication("ExpenseForce");
    appVisibility.setVisible(true);
    
    Profile employee = new Profile(); 
    employee.setFullName("Employee");
    employee.setApplicationVisibilities(
        new ProfileApplicationVisibility[] {appVisibility}
    );
    AsyncResult[] arsProfileEmp =
    metadataConnection.create(new Metadata[] {employee});
    
    Profile manager = new Profile();
    manager.setFullName("Manager");
    manager.setApplicationVisibilities(
        new ProfileApplicationVisibility[] {appVisibility}
    );
    AsyncResult[] arsProfileMgr =
        metadataConnection.create(new Metadata[] {manager});
    
    // But employees and managers have different access
    // to the state of the expense sheet
    RecordType edit = new RecordType();
    edit.setFullName("ExpenseReport__c.Edit");
    RecordTypePicklistValue editStatuses =
        new RecordTypePicklistValue();
    editStatuses.setPicklist("ExpenseStatus__c");
    editStatuses.setValues(new PicklistValue[] 
        {unsubmitted, submitted});
    edit.setPicklistValues(new RecordTypePicklistValue[] 
        {editStatuses});
    AsyncResult[] arsRecTypeEdit =
        metadataConnection.create(new Metadata[] {edit});
    
    RecordType approve = new RecordType();
    approve.setFullName("ExpenseReport__c.Approve");
    RecordTypePicklistValue approveStatuses =
        new RecordTypePicklistValue();
    approveStatuses.setPicklist("ExpenseStatus__c");
    approveStatuses.setValues(new PicklistValue[] 
        {approved, rejected});
    approve.setPicklistValues(new RecordTypePicklistValue[]
        {approveStatuses});
    AsyncResult[] arsRecTypeApp =
        metadataConnection.create(new Metadata[] {approve});
  } catch (ConnectionException ce) {
    ce.printStackTrace();
  }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <applicationVisibilities>
        <application>PubApps__Myriad_Publishing</application>
        <default>false</default>
        <visible>true</visible>
    </applicationVisibilities>
    <custom>true</custom>
    <objectPermissions>
        <object>TestWeblinks__c</object>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <viewAllRecords>false</viewAllRecords>
        <modifyAllRecords>false</modifyAllRecords>
        <viewAllFields>false</viewAllFields>
    </objectPermissions>
    <recordTypeVisibilities>
        <default>true</default>
        <recordType>TestWeblinks__c.My First Recordtype</recordType>
        <visible>true</visible>
    </recordTypeVisibilities>
    <tabVisibilities>
        <tab>Myriad Publications</tab>
        <visibility>DefaultOn</visibility>
    </tabVisibilities>
    <userPermissions>
        <enabled>true</enabled>
        <name>APIEnabled</name>
    </userpermissions>
</Profile>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>CustomObject</name>
    </types>
   <types>
        <members>*</members>
        <name>Profile</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Account</members>
        <name>CustomObject</name>
    </types>
   <types>
        <members>*</members>
        <name>Profile</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
        <members>Account.MyCustomField__c</members>
        <name>CustomField</name>
   </types>
   <types>
        <members>*</members>
        <name>Profile</name>
   </types>
   <version>66.0</version>
</Package>
```

## Related Topics

- Sample
                        package.xml Manifest Files (atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm)
- RetrieveRequest (atlas.en-us.api_meta.meta/api_meta/meta_retrieve_request.htm)
- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- create() (atlas.en-us.api_meta.meta/api_meta/meta_create.htm)
- ActionOverride (atlas.en-us.api_meta.meta/api_meta/actionoverride.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- ActionOverrideType (atlas.en-us.api_meta.meta/api_meta/actionoverride.htm)
- deploy() (atlas.en-us.api_meta.meta/api_meta/meta_deploy.htm)
- retrieve() (atlas.en-us.api_meta.meta/api_meta/meta_retrieve.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
