---
title: "Define and Deploy Custom Big Objects"
domain: object-reference
topic: define-and-deploy-custom-big-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:03.157Z
estimatedTokens: 1909
keywords: [Define, Deploy, Custom, Big, Objects, Metadata, API, Setup, view, add, you’ve, deployed, can’t, edit, index]
---

# Define and Deploy Custom Big Objects

> You can define custom big objects with Metadata API or in Setup. After you define and
        deploy a big object, you can view it or add fields in Setup. After you’ve deployed a big
        object, you can’t edit or delete the index. To change the index, start over with a new big
        object. To define a big object in Setup, see Salesforce Help.

# Define and Deploy Custom Big Objects

You can define custom big objects with Metadata API or in Setup. After you define and deploy a big object, you can view it or add fields in Setup. After you’ve deployed a big object, you can’t edit or delete the index. To change the index, start over with a new big object. To define a big object in Setup, see Salesforce Help.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions for up to 1 million records. |


## Define a Custom Big Object

Define a custom big object through Metadata API by creating XML files that contain its definition, fields, and index.

-   object files—Create a file for each object to define the custom big object, its fields, and its index.
-   permissionset/profile files—Create a permission set or profile file to specify permissions for each field. These files aren’t required, but they’re required to grant access to users. By default, access to a custom big object is restricted.
-   package file—Create a file for Metadata API to specify the contents of the metadata you want to migrate.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

    #### Note

    The package file is unrelated to the packaging feature for Salesforce. This file isn’t an unlocked, unmanaged, or managed package. It’s simply a file used by Metadata API.


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

While custom big objects use the CustomObject metadata type, some parameters are unique to big objects and others aren’t applicable. The specific metadata parameters that apply to big objects are outlined in this document.

## Naming Conventions for Custom Big Objects

Object names must be unique across all standard objects, custom objects, external objects, and big objects in the org. In the API, the names of custom big objects have a suffix of two underscores immediately followed by a lowercase “b” (\_\_b). For example, a big object named “HistoricalInventoryLevels” is seen as HistoricalInventoryLevels\_\_b in that organization's WSDL. We recommend that you make object labels unique across all objects in the org - standard, custom, external and big objects.

## CustomObject Metadata

| Field Name | Field Type | Description |
| --- | --- | --- |
| deploymentStatus | DeploymentStatus (enumeration of type string) | Custom big object’s deployment status (Deployed for all big objects) |
| fields | CustomField[] | Definition of a field in the big object |
| fullName | string | Unique API name of the big object |
| indexes | Index[] | Definition of the index |
| label | string | Big object’s name as displayed in the UI |
| pluralLabel | string | Field plural name as displayed in the UI |

## CustomField Metadata

| Field Name | Field Type | Description |
| --- | --- | --- |
| fullName | string | Unique API name of a field. |
| label | string | Field name as displayed in the UI. |
| length | int | Length of a field in characters (Text and LongTextArea fields only). The total number of characters across all text fields in an index can’t exceed 100. To increase this value, contact Salesforce Customer Support.NoteEmail fields are 80 characters. Phone fields are 40 characters. Keep these lengths in mind when designing your index because they count toward the 100 character limit. |
| pluralLabel | string | Field plural name as displayed in the UI. |
| precision | int | Number of digits for a number value. For example, the number 256.99 has a precision of 5 (number fields only). |
| referenceTo | string | Related object type for a lookup field (lookup fields only). |
| relationshipName | string | Name of a relationship as displayed in the UI (lookup fields only). |
| required | boolean | Specifies whether the field is required. All fields that are part of the index must be marked as required. |
| scale | int | Number of digits to the right of the decimal point for a number value. For example, the number 256.99 has a scale of 2 (number fields only). |
| type | FieldType | Field type. Supports DateTime, Email, Lookup, Number, Phone, Text, LongTextArea, and URL.NoteYou can’t include LongTextArea and URL fields in the index. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Uniqueness isn’t supported for custom fields.

## Index Metadata

Represents an index defined within a custom [big object](https://developer.salesforce.com/docs/atlas.en-us.260.0.bigobjects.meta/bigobjects/big_object.htm). Use this metadata type to define the composite primary key (index) for a custom big object.

| Field Name | Field Type | Description |
| --- | --- | --- |
| fields | IndexField[] | The definition of the fields in the index. |
| label | string | Required. This name is used to refer to the big object in the user interface. Available in API version 41.0 and later. |

## IndexField Metadata

Defines which fields make up the index, their order, and sort direction. The order in which the fields are defined determines the order fields are listed in the index.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The total number of characters across all text fields in an index can’t exceed 100. To increase this value, contact Salesforce Customer Support.

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | Required. The API name for the field that’s part of the index. This value must match the fullName value for the corresponding field in the fields section and be marked as required.WarningWhen querying a big object record via SOQL and passing the results as arguments to the delete API, if any index field name has a leading or trailing white space, you can't delete the big object record. |
| sortDirection | string | Required. The sort direction of the field in the index. Valid values are ASC for ascending order and DESC for descending order. |

## Create Metadata Files for Deployment

The following XML excerpts create metadata files that you can deploy. Each Customer Interaction object represents customer data from a single session in an online video game. The Account\_\_c, Game\_Platform\_\_c, and Play\_Date\_\_c fields define the index, and a lookup field relates the Customer Interactions to the Account object.

Customer\_Interaction\_\_b.object

```

```

package.xml

```

```

Customer\_Interaction\_BigObject.permissionset

```

```

## Deploy Custom Big Objects Using Metadata API

Use Metadata API and the [Ant Migration Tool](https://developer.salesforce.com/docs/atlas.en-us.260.0.daas.meta/daas/meta_development.htm "HTML (New Window)") to deploy. When building files to deploy a custom big object, make sure the object file is in a folder called objects and the permissionset file is in a folder called permissionsets. Put the package.xml file in the root directory and not in a subfolder.

## View a Custom Big Object in Setup

After you’ve deployed your custom big object, you can view it by logging in to your organization and, from Setup, entering Big Objects in the Quick Find box, then selecting **Big Objects**.

![List of big objects](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbig_object%2Fimages%2Fbo_setup2.png&folder=object_reference)

To see its fields and relationships, click the name of a big object.

![Big object detail view](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fbig_object%2Fimages%2Fbo_setup.png&folder=object_reference)

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <deploymentStatus>Deployed</deploymentStatus>

    <fields>
        <fullName>In_Game_Purchase__c</fullName>
        <label>In-Game Purchase</label>
        <length>16</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    
    <fields>
        <fullName>Level_Achieved__c</fullName>
        <label>Level Achieved</label>
        <length>16</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    
    <fields>
        <fullName>Lives_This_Game__c</fullName>
        <label>Lives Used This Game</label>
        <length>16</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    
    <fields>
        <fullName>Game_Platform__c</fullName>
        <label>Platform</label>
        <length>16</length>
        <required>true</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>
    
     <fields>
        <fullName>Score_This_Game__c</fullName>
        <label>Score This Game</label>
        <length>16</length>
        <required>false</required>
        <type>Text</type>
        <unique>false</unique>
    </fields>

    <fields>
        <fullName>Account__c</fullName>
        <label>User Account</label>
        <referenceTo>Account</referenceTo>
        <relationshipName>Game_User_Account</relationshipName>
        <required>true</required>
        <type>Lookup</type>
    </fields>

    <fields>
        <fullName>Play_Date__c</fullName>
        <label>Date of Play</label>
        <required>true</required>
        <type>DateTime</type>
    </fields>

    <fields>
        <fullName>Play_Duration__c</fullName>
        <label>Play Duration</label>
        <required>false</required>
        <type>Number</type>
        <scale>2</scale>
        <precision>18</precision>
    </fields>

    <indexes>
        <fullName>CustomerInteractionsIndex</fullName>
        <label>Customer Interactions Index</label>
        <fields>
            <name>Account__c</name>
            <sortDirection>DESC</sortDirection>
        </fields>
        <fields>
            <name>Game_Platform__c</name>
            <sortDirection>ASC</sortDirection>
        </fields>
        <fields>
        <name>Play_Date__c</name>
        <sortDirection>DESC</sortDirection>
        </fields>        
    </indexes>
    
    <label>Customer Interaction</label>
    <pluralLabel>Customer Interactions</pluralLabel>
</CustomObject>
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
        <name>PermissionSet</name>
    </types>
    <version>41.0</version>
</Package>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
     
    <label>Customer Interaction Permission Set</label>
     
    <fieldPermissions>
        <editable>true</editable>
        <field>Customer_Interaction__b.In_Game_Purchase__c</field>
        <readable>true</readable>
    </fieldPermissions>
     
    <fieldPermissions>
        <editable>true</editable>
        <field>Customer_Interaction__b.Level_Achieved__c</field>
        <readable>true</readable>
    </fieldPermissions>
     
    <fieldPermissions>
        <editable>true</editable>
        <field>Customer_Interaction__b.Lives_This_Game__c</field>
        <readable>true</readable>
    </fieldPermissions>
     
     
    <fieldPermissions>
        <editable>true</editable>
        <field>Customer_Interaction__b.Play_Duration__c</field>
        <readable>true</readable>
    </fieldPermissions>
     
    <fieldPermissions>
        <editable>true</editable>
        <field>Customer_Interaction__b.Score_This_Game__c</field>
        <readable>true</readable>
    </fieldPermissions>
     

</PermissionSet>
```
