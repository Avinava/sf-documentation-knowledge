---
title: "CustomObject"
domain: metadata-api
topic: customobject
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.182Z
estimatedTokens: 8068
keywords: [CustomObject, custom, stores, data, unique, org, external, maps, stored, outside, Declarative, Metadata, File, Suffix, Directory]
---

# CustomObject

> Represents a custom object that stores data unique to
            your org or an external object that maps to data stored outside your
        org.

# CustomObject

Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

Specify all relevant fields when you create or update a custom object. You can’t update a single field on the object. For more information about custom objects, see [Store Information That’s Unique to Your Organization](https://help.salesforce.com/s/articleView?id=platform.dev_object_def.htm&type=5&language=en_US) in Salesforce Help.

You can also use this metadata type to work with customizations of standard objects, such as accounts. For an example, see the section on Standard Objects in [Sample package.xml Manifest Files](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/manifest_samples.htm "HTML (New Window)") in the Metadata API Developer Guide

All metadata components have a [fullName](atlas.en-us.api_meta.meta/api_meta/metadata.htm#meta_fullname) field, which must be fully specified for any custom object.

For example, the following are fully specified names for a standard object and a custom object respectively:

```

```

And the following is a fully specified name for an external object:

```

```

For sample Java code that creates a custom object, see [Step 3: Walk Through the Java Sample Code](atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm).

## Declarative Metadata File Suffix and Directory Location

Custom object names are automatically appended with \_\_c. The file suffix is .object for the custom object or standard object file.

External object names are automatically appended with \_\_x. The file suffix is .object for the external object file.

Custom, standard, and external objects are stored in the objects folder in the corresponding package directory.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Retrieving a component of this metadata type in a project makes the component appear in any Profile and PermissionSet components that are retrieved in the same package.

## Version

Custom objects are available in API version 10.0 and later. External objects are available in API version 32.0 and later.

## Fields

Unless otherwise noted, all fields are creatable, filterable, and nillable.

| Field Name | Field Type | Description |
| --- | --- | --- |
| actionOverrides | ActionOverride[] | A list of action overrides on the object.This field is available in API version 18.0 and later. |
| allowInChatterGroups | boolean | Indicates whether records of this custom object type can be added to Chatter groups.This field is available in API version 34.0 and later. |
| businessProcesses | BusinessProcess[] | A list of business processes associated with the object.This field is available in API version 17.0 and later. |
| compactLayoutAssignment | string | The compact layout assigned to the object.This field is available in API version 29.0 and later. This field is available for external objects in API version 42.0 and later. |
| compactLayouts | CompactLayout[] | A list of compact layouts associated with the object.This field is available in API version 29.0 and later. This field is available for external objects in API version 42.0 and later. |
| customHelp | string | The s-control that contains the help content if the object has customized help content. This field is available in API version 14.0 and later. |
| customHelpPage | string | The Visualforce page that contains the help content if the object has customized help content. This field is available in API version 16.0 and later. |
| customSettingsType | CustomSettingsType (enumeration of type string) | When this field is present, this component isn’t a custom object, but a custom setting. This field returns the type of custom setting. The following string values are valid:List—static data stored in cache, accessed as part of your application, and available org-wide.Hierarchy—static data stored in cache, accessed as part of your application, and available based on a hierarchy of user, profile, or org. This value is the default.This field is available in API version 17.0 and later. |
| customSettingsVisibility | CustomSettingsVisibility (enumeration of type string) | When this field is present, this component isn’t a custom object, but a custom setting. This field returns the visibility of the custom setting. The following string values are valid:Public—if the custom setting is packaged, it’s accessible to all subscribing orgs.Protected—if the custom setting is in a managed package, it’s accessible only to the developer org. Subscribing orgs can’t access it. This value is the default.This field is available in API versions 17.0 through 33.0. In versions 34.0 and later, use the visibility field instead of this field. |
| dataStewardGroup | string | Removed in API version 47.0. |
| dataStewardUser | string | Removed in API version 47.0. |
| deploymentStatus | DeploymentStatus (enumeration of type string) | Indicates the deployment status of the object. |
| deprecated | boolean | Reserved for future use. |
| description | string | A description of the object. Maximum of 1000 characters. |
| enableActivities | boolean | Indicates whether the object is enabled for activities (true) or not (false).Not available for external objects. |
| enableBulkApi | boolean | When enabled, the object is classified as an Enterprise Application object for usage tracking.When enabled, enableSharing and enableStreamingApi must also be enabled.This field is available in API version 31.0 and later. |
| enableDivisions | boolean | Indicates whether the object is enabled for divisions (true) or not (false). See Division in the Salesforce Object Reference. . |
| enableEnhancedLookup | boolean | Indicates whether the object is enabled for enhanced lookups (true) or not (false). The custom object must be searchable for enableEnhancedLookup to work. Set enableSearch as true before setting enableEnhancedLookup as true. In API version 28.0 and later, this field can also be used for the Account, Contact, and User objects. Enhanced lookups provide an updated lookup dialog interface that lets users filter, sort, and page through search results and customize search result columns. For more information about enhanced lookups, see “Enable Enhanced Lookups” in Salesforce Help. |
| enableFeeds | boolean | Indicates whether the object is enabled for feed tracking (true) or not (false). For more information, see “Customize Chatter Feed Tracking” in Salesforce Help.This field is available in API version 18.0 and later. |
| enableHistory | boolean | Indicates whether the object is enabled for history tracking (true) or not (false). Also available for standard objects in API version 29.0 and later. History tracking on the Account object includes person account history tracking. |
| enableLicensing | boolean | Indicates whether this object is licensed by Salesforce and users require a permission set license for it (true) or not (false). This field is available in API version 45.0 and later. |
| enableReports | boolean | Indicates whether the object is enabled for reports (true) or not (false). Support for external objects is available in API version 38.0 and later. |
| enableSearch | boolean | Indicates whether the object’s records can be found via SOSL and Salesforce searches. Corresponds to Allow Search in the user interface.By default, search is disabled for new custom objects. This field is available for custom objects in API version 35.0 and later.To enhance Einstein Search performance, searchability is disabled for custom objects that haven't been searched for more than 120 days. To enable object and field searchability, contact your admin.By default, search is disabled for new external objects. However, you can validate and sync an external data source to automatically create external objects. Syncing always enables search on the external object when search is enabled on the external data source, and vice versa.This field is available for external objects in API version 37.0 and later. |
| enableSharing | boolean | When enabled, the object is classified as an Enterprise Application object for usage tracking.When enabled, enableBulkApi and enableStreamingApi must also be enabled.This field is available in API version 31.0 and later. |
| enableStreamingApi | boolean | When enabled, the object is classified as an Enterprise Application object for usage tracking.When enabled, enableBulkApi and enableSharing must also be enabled.This field is available in API version 31.0 and later. |
| eventType | PlatformEventType (enumeration of type string) | This field applies only to platform events. Indicates the event type. The values are:HighVolume—For a high-volume platform event.StandardVolume—Deprecated. Creating a platform event with this event type is supported and returns an error.This field is available in API version 41.0 and later. |
| externalDataSource | string | Required and available for external objects only. The name of the external data source that stores the data for the external object. The data source is represented by the ExternalDataSource component.This field is available in API version 32.0 and later. |
| externalName | string | Required and available for external objects only. The name of the table in the external data source that contains the data for the external object.This field is available in API version 32.0 and later. |
| externalRepository | string | Available for Salesforce Connect external objects only. Corresponds to Display URL Reference Field in the user interface.The external object’s Display URL standard field values are automatically generated from the external system. For example, with the OData 2.0 adapter for Salesforce Connect, the value is based on the link href that’s defined on the OData producer. You can override the default values with the values of a custom field on the same external object. Select the field name, and make sure that the custom field’s values are valid URLs.This field is available in API version 32.0 and later. |
| externalSharingModel | SharingModel (enumeration of type string) | Indicates the external org-wide defaults for the object, which determines the access level for external users.This field is available in API version 31.0 and later. |
| fields | CustomField[] | Represents one or more fields in the object. |
| fieldSets | FieldSet | Defines the field set that exists on this object. |
| fullName | string | Inherited from Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call.This value can't be null. |
| gender | Gender | Indicates the gender of the noun that represents the object. This is used for languages where words need different treatment depending on their gender. |
| household | boolean | This field supports relationship groups, a feature available only with Salesforce for Wealth Management. For more information, see “Salesforce for Wealth Management” in Salesforce Help. |
| historyRetentionPolicy | HistoryRetentionPolicy | Reserved for future use. |
| indexes | Index[] | Defines the index for a custom big object. |
| label | string | Label that represents the object throughout the Salesforce user interface.We recommend that you make object labels unique across all standard, custom, and external objects in the org. |
| listViews | ListView[] | Represents one or more list views associated with the object. |
| namedFilter | NamedFilter[] | Represents the metadata associated with a lookup filter. This metadata type is used to create, update, or delete lookup filter definitions. This component has been removed as of API version 30.0 and is only available in previous API versions. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField component.This field is available in API version 17.0 and later.This field has been removed as of API version 30.0 and is only available in prior versions. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField component. |
| nameField | CustomField | Required for custom objects. On external objects, the name field can instead be specified by setting isNameField to true in the CustomField component.The field that this object's name is stored in. Every custom object must have a name, usually a string or autonumber.Identifier for the custom object record. This name appears in page layouts, related lists, lookup dialogs, search results, and key lists on tab home pages. By default, this field is added to the custom object page layout as a required field. |
| pluralLabel | string | Plural version of the label value.Custom objects require a plural version of the label to ensure that object names are localizable. |
| profileSearchLayouts | ProfileSearchLayouts | Represents a user profile’s search results layouts for an object. With profile-specific layouts, each user profile can have a different search results layout for an object. Available in API version 47.0 and later. |
| publishBehavior | PlatformEventPublishBehavior (enumeration of type string) | This field applies only to platform events. Indicates when platform event messages are published in a Lightning Platform transaction. This field applies to event messages published through the Lightning Platform, such as Apex, Process Builder, and Flow Builder, but not through Salesforce APIs. Valid values are:PublishAfterCommit—The event message is published only after a transaction commits successfully. If the transaction fails, the event message isn't published.PublishImmediately—The event message is published when the publish call executes, regardless of whether the transaction succeeds.If you don’t specify this field, the default value used is PublishImmediately.This field is available in API version 46.0 and later. |
| recordTypes | RecordType[] | An array of one or more record types defined for this object. |
| recordTypeTrackFeedHistory | boolean | Indicates whether the record type is enabled for feed tracking (true) or not (false). To set this field to true, the enableFeeds field on the associated CustomObject must also be true. For more information, see “Customize Chatter Feed Tracking” in Salesforce Help.This field is available in API version 19.0 and later. |
| recordTypeTrackHistory | boolean | Indicates whether history tracking is enabled for this record type (true) or not (false). To set recordTypeTrackHistory to true, the enableHistory field on the associated custom object must also be true.This field is available in API version 19.0 and later. |
| searchLayouts | SearchLayouts | The Search Layouts related list information for the object. |
| sharingModel | SharingModel(enumeration of type string) | Indicates the org-wide defaults for the object.NoteUsing API version 29.0 and earlier, this field is read-only and can’t be set using the Metadata API; you must use the Salesforce user interface. Using API version 30.0 and later, you can set this field for internal users using the API and the Salesforce user interface. |
| sharingReasons | SharingReason[] | The reasons why the object is being shared. |
| sharingRecalculations | SharingRecalculation[] | A list of custom sharing recalculations associated with the object. |
| startsWith | StartsWith (enumeration of type string) | Indicates whether the noun starts with a vowel, consonant, or is a special character. This is used for languages where words need different treatment depending on the first character. Valid values are listed in StartsWith. |
| validationRules | ValidationRule[] | An array of one or more validation rules on the object. |
| visibility | SetupObjectVisibility (enumeration of type string) | This field returns the visibility of the custom object, custom setting, or custom metadata type. The following values are valid.Public—If the custom object, custom setting, or custom metadata type is packaged, it’s accessible to all subscribing orgs.Protected—If the custom object, custom setting, or custom metadata type is in a managed package, it’s accessible only to the developer org. Subscribing orgs can’t access it.PackageProtected— (Custom metadata type only) If the custom metadata type is PackageProtected, it’s only accessible by the custom Apex code in the package. Use this value to secure secrets such as API access keys and security tokens. Available in API version 47.0 and later.The default value is Public.This field is available in API version 34.0 and later. For custom settings, this field replaces the customSettingsVisibility field. |
| webLinks | WebLink[] | An array of one or more weblinks defined for the object. |

## MktDataModelAttributes

This type is a Data 360 subtype of CustomObject.

| Field Name | Field Type | Description |
| --- | --- | --- |
| creationType | DefinitionCreationType enumeration | Indicates how this object is added.Valid values availble in API version 62.0 and later are:Activation_AudienceAd_Audience_InsightsADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalProblem_RecordsSegment_MembershipSemanticTransformVector_Embedding |
| dataModelTaxonomy | string | When the model is a Standard Data 360 model, a Reference to the Data Model from which this Object was started. Currently only supports the following strings: if the creationType is Standard, it must be Reference, if creationType is Custom, it must be View. |
| description | string | A description of the object. This field can contain a maximum of 521 characters. This field is available in API version 55.0 and later. |
| isEnabled | boolean | True indicates that the Data Model Object is enabled. |
| isSegmentable | boolean | True indicates that the Data Model Object can be used as a target for segmentation. |
| isUsedForMetrics | boolean | Indicates whether the Data Model Object is used for metrics (true) or not (false). This field is used to include additional attributes on the objects that are not present in the Data Model Object POJO. This field is available in API version 55.0 and later. |
| objectCategory | string | Reference to the Object Category. For modeling, the value is Profile, Engagement, or Other. |
| referenceEntityGroup | string | When this is a Standard Object, the Entity Group of the Object from the Reference Model. |
| referenceEntityName | string | When this is a Standard Object, the Name of the Object from the Reference Model. |
| referenceEntitySubjectArea | string | When this is a Standard Object, the Subject Area of the Object from the Reference Model. |

## MktDataLakeAttributes

Represents how Data 360 receives the data. MktDataLakeAttributes is a Data 360 subtype of CustomObject. Its components are available in API version 50.0 and later.

## Special Access Rules

You need an org with a Data Cloud license to access this object.

| Field Name | Description |
| --- | --- |
| creationType | Field TypeDefinitionCreationType enumeration of type stringDescriptionIndicates how this object is added.Values are:Activation_AudienceBridgeCuratedCustomDerivedMl_PredictionSegment_MembershipStandardSystemValid values availble in API version 62.0 and later are:Activation_AudienceAd_Audience_InsightsADGCalculated_InsightCG_AudienceChunkDirectory_TableExternalProblem_RecordsSegment_MembershipSemanticTransformVector_Embedding |
| isEnabled | Field TypebooleanDescriptionIndicates whether the Landing Object is enabled. |
| objectCategory | Field TypestringDescriptionReference to the Object Category. For landing object, these would be Profile, Behavioral, Other. |

## Declarative Metadata Additional Components

CustomObject definitions can include additional components defined in the custom object for declarative metadata. The following components are defined in the CustomObject:

-   [ActionOverride](atlas.en-us.api_meta.meta/api_meta/actionoverride.htm#actionoverride "Represents an action override on a standard or custom object. Use it to create, update, edit, or delete action overrides. You can access ActionOverride only by accessing its encompassing CustomObject.")
-   [BusinessProcess](atlas.en-us.api_meta.meta/api_meta/meta_businessprocess.htm "The BusinessProcess metadata type enables you to display different picklist values for users based on their profile.")
-   [CompactLayout](atlas.en-us.api_meta.meta/api_meta/meta_compactlayout.htm "Represents the metadata associated with a compact layout. This type extends the Metadata metadata type and inherits its fullName field.")
-   [CustomField](atlas.en-us.api_meta.meta/api_meta/customfield.htm "Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.")
-   [FieldSet](atlas.en-us.api_meta.meta/api_meta/meta_fieldset.htm "Represents a field set. A field set is a grouping of fields. For example, you could have a field set that contains fields describing a user's first name, middle name, last name, and business title.")
-   [HistoryRetentionPolicy](atlas.en-us.api_meta.meta/api_meta/meta_historyretentionpolicy.htm "Represents the policy for archiving field history data. When you set a policy, you specify the number of months that you want to keep field history in Salesforce before archiving it. By default, when Field Audit Trail is enabled, all field history is retained.")
-   [ListView](atlas.en-us.api_meta.meta/api_meta/meta_listview.htm "ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.")
-   [RecordType](atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm "Represents the metadata associated with a record type. Record types let you offer different business processes, picklist values, and page layouts to different users. Use this metadata type to create, update, or delete record type definitions for a custom object.")
-   [SearchLayouts](atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm "Represents the metadata associated with the search layouts for an object. You can customize which fields to display for users in search results, search filter fields, lookup dialogs, and recent record lists on tab home pages. You can access SearchLayouts only by accessing its encompassing CustomObject.")
-   [SharingReason](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingreason.htm "Represents an Apex sharing reason, which is used to indicate why sharing was implemented for a custom object. Apex managed sharing allows developers to use Apex to programmatically share custom objects. When you use Apex managed sharing to share a custom object, only users with the “Modify All Data” permission can add or change the sharing on the custom object's record, and the sharing access is maintained across record owner changes.")
-   [SharingRecalculation](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingrecalculation.htm "Represents Apex classes that recalculate the Apex managed sharing for a specific custom object.")
-   [ValidationRule](atlas.en-us.api_meta.meta/api_meta/meta_validationformulas.htm "Represents a validation rule, which is used to verify that the data a user enters in a record is valid and can be saved. A validation rule contains a formula or expression that evaluates the data in one or more fields and returns a value of true or false. Validation rules also include an error message that your client application can display to the user when the rule returns a value of true due to invalid data.")
-   [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "Represents a custom button or link defined in a custom object.")

## Declarative Metadata Sample Definition

```

```

The following is the metadata definition of an external object for Salesforce Connect.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file for Field Sets and Record Types but not for other components. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

1.  [ActionOverride](atlas.en-us.api_meta.meta/api_meta/actionoverride.htm)
    Represents an action override on a standard or custom object. Use it to create, update, edit, or delete action overrides. You can access ActionOverride only by accessing its encompassing CustomObject.
2.  [BusinessProcess](atlas.en-us.api_meta.meta/api_meta/meta_businessprocess.htm)
    The BusinessProcess metadata type enables you to display different picklist values for users based on their profile.
3.  [CompactLayout](atlas.en-us.api_meta.meta/api_meta/meta_compactlayout.htm)
    Represents the metadata associated with a compact layout. This type extends the Metadata metadata type and inherits its fullName field.
4.  [CustomField](atlas.en-us.api_meta.meta/api_meta/customfield.htm)
    Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.
5.  [FieldSet](atlas.en-us.api_meta.meta/api_meta/meta_fieldset.htm)
    Represents a field set. A field set is a grouping of fields. For example, you could have a field set that contains fields describing a user's first name, middle name, last name, and business title.
6.  [HistoryRetentionPolicy](atlas.en-us.api_meta.meta/api_meta/meta_historyretentionpolicy.htm)
    Represents the policy for archiving field history data. When you set a policy, you specify the number of months that you want to keep field history in Salesforce before archiving it. By default, when Field Audit Trail is enabled, all field history is retained.
7.  [Index](atlas.en-us.api_meta.meta/api_meta/meta_index.htm)
    Represents an index defined within a custom [big object](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm). Use this metadata type to define the composite primary key (index) for a custom big object. This type extends the Metadata metadata type and inherits its fullName field.
8.  [ListView](atlas.en-us.api_meta.meta/api_meta/meta_listview.htm)
    ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.
9.  [NamedFilter](atlas.en-us.api_meta.meta/api_meta/namedfilter.htm)
    Represents the metadata associated with a lookup filter. This metadata type is used to create, update, or delete lookup filter definitions. This component has been removed as of API version 30.0 and is only available in previous API versions. The metadata associated with a lookup filter is now represented by the lookupFilter field in the CustomField component.
10.  [Picklist (Including Dependent Picklist)](atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm)
     Deprecated. Represents a picklist (or dependent picklist) definition for a custom field in a custom object or a custom or standard field in a standard object, such as an account.
11.  [ProfileSearchLayouts](atlas.en-us.api_meta.meta/api_meta/meta_profilesearchlayouts.htm)
     Represents a user profile’s search results layouts for an object. ProfileSearchLayouts are similar to SearchLayouts. However, with profile-specific layouts, each user profile can have a different search results layout for an object.
12.  [RecordType](atlas.en-us.api_meta.meta/api_meta/meta_recordtype.htm)
     Represents the metadata associated with a record type. Record types let you offer different business processes, picklist values, and page layouts to different users. Use this metadata type to create, update, or delete record type definitions for a custom object.
13.  [SearchLayouts](atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm)
     Represents the metadata associated with the search layouts for an object. You can customize which fields to display for users in search results, search filter fields, lookup dialogs, and recent record lists on tab home pages. You can access SearchLayouts only by accessing its encompassing CustomObject.
14.  [SharingReason](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingreason.htm)
     Represents an Apex sharing reason, which is used to indicate why sharing was implemented for a custom object. Apex managed sharing allows developers to use Apex to programmatically share custom objects. When you use Apex managed sharing to share a custom object, only users with the “Modify All Data” permission can add or change the sharing on the custom object's record, and the sharing access is maintained across record owner changes.
15.  [SharingRecalculation](atlas.en-us.api_meta.meta/api_meta/meta_apexsharingrecalculation.htm)
     Represents Apex classes that recalculate the Apex managed sharing for a specific custom object.
16.  [ValidationRule](atlas.en-us.api_meta.meta/api_meta/meta_validationformulas.htm)
     Represents a validation rule, which is used to verify that the data a user enters in a record is valid and can be saved. A validation rule contains a formula or expression that evaluates the data in one or more fields and returns a value of true or false. Validation rules also include an error message that your client application can display to the user when the rule returns a value of true due to invalid data.
17.  [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm)
     Represents a custom button or link defined in a custom object.
18.  [Metadata Field Types](atlas.en-us.api_meta.meta/api_meta/meta_field_types.htm)
     These field types extend the field types described in the *Salesforce Object Reference*.

#### See Also

-   [CustomField](atlas.en-us.api_meta.meta/api_meta/customfield.htm "Represents the metadata associated with a field. Use this metadata type to create, update, or delete custom field definitions on standard, custom, and external objects or standard field definitions on standard objects.")

-   [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.")

-   [Picklist (Including Dependent Picklist)](atlas.en-us.api_meta.meta/api_meta/meta_picklist.htm "Deprecated. Represents a picklist (or dependent picklist) definition for a custom field in a custom object or a custom or standard field in a standard object, such as an account.")

-   [SearchLayouts](atlas.en-us.api_meta.meta/api_meta/meta_searchlayouts.htm "Represents the metadata associated with the search layouts for an object. You can customize which fields to display for users in search results, search filter fields, lookup dialogs, and recent record lists on tab home pages. You can access SearchLayouts only by accessing its encompassing CustomObject.")

-   [WebLink](atlas.en-us.api_meta.meta/api_meta/meta_weblink.htm "Represents a custom button or link defined in a custom object.")

-   [CustomObjectTranslation](atlas.en-us.api_meta.meta/api_meta/meta_customobjecttranslation.htm "This metadata type allows you to translate custom objects for a variety of languages.")

-   [ListView](atlas.en-us.api_meta.meta/api_meta/meta_listview.htm "ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.")

-   [CompactLayout](atlas.en-us.api_meta.meta/api_meta/meta_compactlayout.htm "Represents the metadata associated with a compact layout. This type extends the Metadata metadata type and inherits its fullName field.")

## Code Examples

```
Account
MyCustomObject__c
```

```
MyExternalObject__x
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <deploymentStatus>Deployed</deploymentStatus>
    <description>test object with one field for eclipse ide testing</description>
    <fields>
        <fullName>Comments__c</fullName>
        <description>add your comments about this object here</description>
        <inlineHelpText>This field contains comments made about this object</inlineHelpText>
        <label>Comments</label>
        <length>32000</length>
        <type>LongTextArea</type>
        <visibleLines>30</visibleLines>
    </fields>
    <label>MyFirstObject</label>
    <nameField>
        <label>MyFirstObject Name</label>
        <type>Text</type>
    </nameField>
    <pluralLabel>MyFirstObjects</pluralLabel>
    <sharingModel>ReadWrite</sharingModel>
</CustomObject>
```

```apex
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>CancelEdit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Delete</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Edit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Follow</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>List</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>New</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>SaveEdit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Tab</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>View</actionName>
        <type>Default</type>
    </actionOverrides>
    <deploymentStatus>InDevelopment</deploymentStatus>
    <description>Products</description>
    <enableFeeds>false</enableFeeds>
    <externalDataSource>OData</externalDataSource>
    <externalIndexAvailable>false</externalIndexAvailable>
    <externalName>Products</externalName>
    <fields>
        <fullName>DiscontinuedDate__c</fullName>
        <description>DiscontinuedDate</description>
        <externalDeveloperName>DiscontinuedDate</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>DiscontinuedDate</label>
        <required>false</required>
        <type>DateTime</type>
    </fields>
    <fields>
        <fullName>ID__c</fullName>
        <description>ID</description>
        <externalDeveloperName>ID</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>ID</label>
        <precision>18</precision>
        <required>false</required>
        <scale>0</scale>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Name__c</fullName>
        <description>Name</description>
        <externalDeveloperName>Name</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Name</label>
        <length>128</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Price__c</fullName>
        <description>Price</description>
        <externalDeveloperName>Price</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Price</label>
        <precision>16</precision>
        <required>false</required>
        <scale>2</scale>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>Products__c</fullName>
        <externalDeveloperName>Products</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Products</label>
        <length>20</length>
        <referenceTo>Products__x</referenceTo>
        <relationshipLabel>Products</relationshipLabel>
        <relationshipName>Products</relationshipName>
        <type>ExternalLookup</type>
    </fields>
    <fields>
        <fullName>Rating__c</fullName>
        <description>Rating</description>
        <externalDeveloperName>Rating</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>Rating</label>
        <precision>18</precision>
        <required>false</required>
        <scale>0</scale>
        <type>Number</type>
        <unique>false</unique>
    </fields>
    <fields>
        <fullName>ReleaseDate__c</fullName>
        <description>ReleaseDate</description>
        <externalDeveloperName>ReleaseDate</externalDeveloperName>
        <externalId>false</externalId>
        <isFilteringDisabled>false</isFilteringDisabled>
        <isNameField>false</isNameField>
        <isSortingDisabled>false</isSortingDisabled>
        <label>ReleaseDate</label>
        <required>false</required>
        <type>DateTime</type>
    </fields>
    <label>Products</label>
    <pluralLabel>Products</pluralLabel>
    <searchLayouts>
        <customTabListAdditionalFields>ExternalId</customTabListAdditionalFields>
        <lookupDialogsAdditionalFields>ExternalId</lookupDialogsAdditionalFields>
        <lookupPhoneDialogsAdditionalFields>ExternalId</lookupPhoneDialogsAdditionalFields>
        <searchResultsAdditionalFields>ExternalId</searchResultsAdditionalFields>
        <searchResultsAdditionalFields>DisplayUrl</searchResultsAdditionalFields>
        <searchResultsAdditionalFields>ID__c</searchResultsAdditionalFields>
    </searchLayouts>
</CustomObject>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- fullName (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Step 3: Walk Through the Java Sample Code (atlas.en-us.api_meta.meta/api_meta/meta_quickstart_java_sample.htm)
- ActionOverride (atlas.en-us.api_meta.meta/api_meta/actionoverride.htm)
- BusinessProcess (atlas.en-us.api_meta.meta/api_meta/meta_businessprocess.htm)
- CompactLayout (atlas.en-us.api_meta.meta/api_meta/meta_compactlayout.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- CustomField[] (atlas.en-us.api_meta.meta/api_meta/customfield.htm)
- FieldSet (atlas.en-us.api_meta.meta/api_meta/meta_fieldset.htm)
- createMetadata() (atlas.en-us.api_meta.meta/api_meta/meta_createMetadata.htm)
