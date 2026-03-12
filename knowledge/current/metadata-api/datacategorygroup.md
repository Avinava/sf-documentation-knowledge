---
title: "DataCategoryGroup"
domain: metadata-api
topic: datacategorygroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:38.426Z
estimatedTokens: 2388
keywords: [DataCategoryGroup, Represents, data, category, group., Warning, Note, File, Suffix, Directory, Location, Version, Fields, DataCategory, ObjectUsage, Declarative, Metadata, Sample, Definition, Usage]
---

# DataCategoryGroup

> Represents a data category group.

# DataCategoryGroup

Represents a data category group.

This type extends the Metadata metadata type and inherits its fullName field.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api_meta)

#### Warning

Using Metadata API to deploy category changes from one organization to another permanently removes categories and record categorizations that are not specified in your XML file. Salesforce recommends that you manually create data categories and record associations in an organization from Setup by entering Data Categories in the Quick Find box, then selecting **Data Categories** rather than deploying changes from a sandbox to a production organization. For more information, see Usage.

Data category groups are provided to:

-   Classify and filter data.
-   Share data among users.

Every data category group contains items or data categories that can be organized hierarchically.

The example below shows the Geography data category group and its data categories.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

See "Work with Data Categories" in the Salesforce online help for more information on data category groups, data categories, parent and sub categories.

## File Suffix and Directory Location

The file suffix is .datacategorygroup. There is one file for each data category group stored in the datacategorygroups folder in the corresponding package directory.

## Version

Data category groups are available in API version 18.0 and later.

## Fields

This metadata type contains the following fields:

| Field Name | Field Type | Description |
| --- | --- | --- |
| active | boolean | Required. The status of the category group. Indicates whether this category group is active, (true), or not active (false). |
| dataCategory | DataCategory | Required. The top-level category within the data category group. |
| description | string | The description of the data category group. |
| fullName | string | Required. The unique name of the data category group. When creating a data category group, the fullName field and the file name (without its suffix) must match.The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| label | string | Required. Label that represents the object in Salesforce. |
| objectUsage | ObjectUsage | The objects that are associated with the data category group. |

## DataCategory

Represents an item (or data category) in the data category group. A data category can recursively contain a list of other data categories.

| Field Name | Field Type | Description |
| --- | --- | --- |
| dataCategory | DataCategory[] | A recursive list of sub data categories. For example, a list of countries within a continent. You can create up to 100 categories in a data category group and have up to 5 levels in a data category group hierarchy. |
| label | string | Required. Label for the data category throughout the Salesforce user interface. |
| name | string | Required. The developer name of the data category used as a unique identifier for API access. The name can only contain characters, letters, and the underscore (_) character, must start with a letter, and cannot end with an underscore or contain two consecutive underscore characters.ImportantThe value for this field is defined once and cannot be changed later.WarningIf you deploy a category group that already exists in an organization, any category that is not defined in the XML file is permanently removed from your organization. For more information see Usage. |

## ObjectUsage

Represents the objects that can be associated with the data category group. This association allows the object to be classified and filtered using the data categories.

| Field Name | Field Type | Description |
| --- | --- | --- |
| object | string[] | A list of the object names that can be associated with the data category group. Valid values are:KnowledgeArticleVersion—to associate articles. See "Modify Default Category Group Assignments for Articles" in the Salesforce online help for more information on data category groups association to articles.Question—to associate questions. You can associate the Question object with at most one category group.WarningIf you deploy a category group that already exists in an organization, any object association that is not defined in the XML file is permanently removed from your organization. Ensure that your XML file specifies all the records associated with your category group in the organization. For more information see Usage. |

## Declarative Metadata Sample Definition

This sample is the definition of the Geography data category group and its data categories:

```

```

## Usage

When you deploy a category group XML file, Metadata API checks whether the category group exists in the target organization. If the category group does not exist, it is created. If the category group already exists, then Metadata API:

-   Adds any new category or object defined in the XML file.
-   Deletes any category that is not defined in the XML file. Records associated with the deleted categories are re-associated with the parent category.
-   Deletes any object association that is not defined in the XML file.
-   Moves any category if its hierarchical position differs from the position specified in the XML file.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

    #### Note

    When a category moves to a new parent category, users that have no visibility on the new parent category lose their visibility to the repositioned category.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

For more information about category deletion, category repositioning and its impact on record categorization and visibility see "Delete a Data Category" and "Modify and Arrange Data Categories" in the Salesforce online help.

Using Metadata API to deploy category changes from one organization to another permanently removes categories and record categorizations that are not specified in your XML file. Salesforce recommends that you manually create data categories and record associations in an organization from Setup by entering Data Categories in the Quick Find box, then selecting **Data Categories** rather than deploying changes from a sandbox to a production organization.

The following example illustrates what happens if you deploy an XML representation of a Geography data category group hierarchy to an organization that already has this data category group defined. Note that the organization contains a US category, while the XML file includes a USA category in the same hierarchical position. The Metadata API deployment process deletes the US category from the organization and moves associations for any records from US to the parent AMER category. It also adds the USA category under AMER. Note that all records that were previously categorized with US are now associated with the AMER category.

![The Geography category group with the category US in the organization and the category USA in the XML file](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2Fcategory_remove.png&folder=api_meta)

The next example illustrates what can happen when you delete or move a category in a data category group and deploy its XML representation from a sandbox to a production organization that already has this data category group defined. Hierarchy 1 shows the initial data category group in the sandbox organization. In hierarchy 2, we add an EU category under EMEA and move FR, SP and UK below EU. In hierarchy 3, we delete FR and associate its records with its new parent, EU. Finally, we deploy the changes from the sandbox to the production organization.

![Moving and deleting "FR" in the Geography category group](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_meta%2Fimages%2Fcategory_miscategorization.png&folder=api_meta)

Metadata API has no concept of the order of the changes made to the sandbox organization. It just deploys the changes from one organization to another. During the deployment, it first notices the deletion of the FR category and removes it from the production organization. Consequently, it moves associations for any records from FR to its parent on the production organization, EMEA. Metadata API then adds the EU category and moves SP and UK below it. Although the category group hierarchy looks the same in both organizations, record categorization in production is different from the sandbox organization. The records that were originally associated with FR in hierarchy 1 are associated with EU in the sandbox organization, but are associated with EMEA in the production organization.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
Geography
    Worldwide
        North America
            United States of America
            Canada
            Mexico
        Europe
        Asia
```

```
<?xml version="1.0" encoding="UTF-8"?>
<DataCategoryGroup xmlns="http://soap.sforce.com/2006/04/metadata">
   <label>Geography</label>
   <description>Geography structure of service center locations</description>
   <fullName>geo</fullName>

   <dataCategory> <name>WW</name> <label>Worldwide</label>
      <dataCategory> <name>AMER</name> <label>North America</label>
         <dataCategory>
             <name>USA</name>
             <label>United States of America</label>
         </dataCategory> 
         <dataCategory>
             <name>CAN</name>
             <label>Canada</label>
         </dataCategory>
         <dataCategory>
             <name>MEX</name>
             <label>Mexico</label>
         </dataCategory>
      </dataCategory> 
      <dataCategory> <name>EMEA</name> <label>Europe, Middle East, Africa</label> 
         <dataCategory>
             <name>FR</name>
             <label>France</label>
         </dataCategory> 
         <dataCategory>
             <name>SP</name>
             <label>Spain</label>
        </dataCategory>
         <dataCategory>
            <name>UK</name>
            <label>United-Kingdom</label>
         </dataCategory>
      </dataCategory>
      <dataCategory>
          <name>APAC</name>
          <label>Asia</label>
      </dataCategory>
   </dataCategory>

   <objectUsage>
      <object>KnowledgeArticleVersion </object>
   <objectUsage>
</DataCategoryGroup>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
