---
title: "ListView"
domain: metadata-api
topic: listview
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.355Z
keywords: [ListView, Note, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, ListViewFilter, FilterScope, Sample, Definition, Usage, Wildcard, Support, Manifest, See]
---

# ListView

# ListView

ListView allows you to see a filtered list of records, such as contacts, accounts, or custom objects.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field. See “Create a Custom List View in Salesforce Classic” in Salesforce Help.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

List views with the Visible only to me Restrict Visibility option aren’t accessible in Metadata API. Each of these list views is associated with a particular user.

## Declarative Metadata File Suffix and Directory Location

List views are stored within a CustomObject component. The component can represent a custom object or a standard object, such as an account.

## Version

ListView components for custom objects are available in API version 14.0 and later. ListView components for standard objects, such as accounts, are available in API version 17.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| booleanFilter | string | This field represents an Advanced Option for a filter. Advanced Options in filters allow you to build up filtering conditions that use a mixture of AND and OR boolean operators across multiple filter line items. For example, (1 AND 2) OR 3 finds records that match both the first two filter line items or the third. |
| columns | string[] | The list of fields in the list view. The field name relative to the object name, for example MyCustomField__c, is specified for each custom field.Field names in the ListView columns don’t always match their API name counterparts. If person accounts are enabled in your organization, standard fields merged from a contact into an account start with the PC_ prefix, while the corresponding API name starts with the Person prefix. For example, the ListView column name is PC_Email for a corresponding API field name of PersonEmail. |
| division | string | If your organization uses divisions to segment data and you’ve got the “Affected by Divisions” permission, records in the list view must match this division. This field is only available if you’re searching all records.This field is available in API version 17.0 and later. |
| filterScope | FilterScope (enumeration of type string) | Required. This field indicates whether you’re filtering by owner or viewing all records. |
| filters | ListViewFilter[] | The list of filter line items. |
| fullName | string | Required. Inherited from Metadata Metadata, this field is defined in the WSDL for this metadata type. It must be specified when creating, updating, or deleting. See createMetadata() to see an example of this field specified for a call. |
| label | string | Required. The list view name. |
| language | Language | The language used for filtering if your organization uses the Translation Workbench and you’re using the startsWith or contains operator. The values entered as search terms must be in the same language as the filter language.For a list of valid language values, see Language.This field is available in API version 17.0 and later. |
| queue | string | The name of a queue. Objects are sometimes assigned to a queue so that the users who have access to the queue can monitor and manage them. When you create a queue, a corresponding list view is automatically created. See “Create Queues” in Salesforce Help. |
| sharedTo | SharedTo | Sharing access for the list view.This field is available in API version 17.0 and later. |

## ListViewFilter

ListViewFilter represents a filter line item.

| Field | Field Type | Description |
| --- | --- | --- |
| filter | string | Required. Represents the field specified in the filter. |
| operation | FilterOperation (enumeration of type string) | Required. The operation used by the filter, such as equals. The valid values are:equalsnotEquallessThangreaterThanlessOrEqualgreaterOrEqualcontainsnotContainstartsWithincludesexcludeswithin (DISTANCE criteria only) |
| value | string | Represents the value of the filter item being operated upon, for example, if the filter is my_number_field__c > 1, the value of value is 1. |

## FilterScope

The FilterScope is an enumeration of type string that represents the filtering criteria for the records. The valid values are listed in the table:

| Enumeration Value | Description |
| --- | --- |
| Everything | All records, for example All Opportunities. |
| Mine | Records owned by the user running the list view, for example My Opportunities. |
| MineAndMyGroups | Records owned by the user running the list view, and records assigned to the user’s queues. |
| AssignedToMe | Records assigned to the user running the list view.The AssignedToMe scope is supported for the ServiceAppointment object only. |
| Queue | Records assigned to a queue. |
| Delegated | Records delegated to another user for action: for example, a delegated task. This option is available in API version 17.0 and later. |
| MyTerritory | Records in the territory of the user seeing the list view. This option is available if territory management is enabled for your organization. Opportunities can’t be filtered by MyTerritory. This option is available in API version 17.0 and later. |
| MyTeamTerritory | Records in the territory of the team of the user seeing the list view. This option is available if territory management is enabled for your organization. Opportunities can’t be filtered by MyTeamTerritory. This option is available in API version 17.0 and later. |
| Team | Records assigned to a team. In the Lightning Experience UI, the corresponding list view filter is My team’s opportunities. This option is available in API version 17.0 and later. |
| SalesTeam | Opportunities assigned to an opportunity team. In the Lightning Experience UI, the corresponding list view filter is My opportunity teams. This option is available in API version 49.0 and later. |
| ScopingRule | Records that meet a scoping rule's record criteria. In Lightning Experience, scoping rules are applied to list views only if the user selects Filter by scope. |

## Declarative Metadata Sample Definition

A sample XML definition of a list view in a custom object is shown.

```

```

## Usage

In general, avoid including unedited default list views in managed packages. We discourage including a modified default list view in a managed package, as it can result in duplicated list views in the target org. See [Incorrect List View Loads Due to Possibility of Existing Duplicate List Views](https://help.salesforce.com/s/articleView?id=000386164&type=1&language=en_US).

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_index.htm "Index")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/namedfilter.htm "NamedFilter")

#### See Also

-   [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.")
    
-   [Sample package.xml Manifest Files](atlas.en-us.api_meta.meta/api_meta/manifest_samples.htm "This section includes sample package.xml manifest files that show you how to work with different subsets of metadata. A manifest file can include multiple <types> elements so you could combine the individual samples into one package.xml manifest file if you want to work with all the metadata in one batch.")