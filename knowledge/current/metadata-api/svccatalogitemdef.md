---
title: "SvcCatalogItemDef"
domain: metadata-api
topic: svccatalogitemdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:43.085Z
estimatedTokens: 2063
keywords: [SvcCatalogItemDef, Represents, entity, associated, specific, individual, service, Service, Catalog., File, Suffix, Directory, Location, Version, Fields, SvcCatalogItemDefFiltrCrit, SvcCatalogCategoryItem, SvcCatalogItemDefDataCategorySelection, SvcCatalogItemAttribute, SvcCatalogItemAttrDetail]
---

# SvcCatalogItemDef

> Represents the entity associated with a specific, individual service available in the
    Service Catalog.

# SvcCatalogItemDef

Represents the entity associated with a specific, individual service available in the Service Catalog.

## File Suffix and Directory Location

SvcCatalogItemDef components have the suffix catalogItem and are stored in the svcCatalogItems folder.

## Version

SvcCatalogItemDef components are available in API version 53.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| apiVersion | Field TypedoubleDescriptionThe API version in which this catalog item was created. The value for this field updates based on the value of fulfillmentFlow. For catalog items created before version 57.0, the value for this field is null. Available in version 57.0 and later. |
| catalogFilterCriteria | Field TypeSvcCatalogItemDefFiltrCrit[]DescriptionThe eligibility rule associated with a catalog item. Eligibility rules customize access to catalog items for different audiences, based on the User object. Available in API version 59.0 and later. |
| categories | Field TypeSvcCatalogCategoryItem[]DescriptionA list of catalog categories that contain this catalog item. |
| dataCategories | Field TypeSvcCatalogItemDefDataCategorySelection[]DescriptionA list of data categories for this catalog item. Available in API version 59.0 and later. |
| description | Field TypestringDescriptionDescription of the catalog item. |
| flow | Field TypestringDescriptionThe screen flow associated with the catalog item. Available in API version 53.0 to 58.0. |
| fulfillmentFlow | Field TypestringDescriptionName of the related SvcCatalogFulfillmentFlow, which represents the flow associated with a specific catalog item in the Service Catalog. Available in API version 56.0 and later. |
| image | Field TypestringDescriptionThe developer name of a content document to be displayed in the Service Catalog for this item. |
| inputs | Field TypeSvcCatalogItemAttribute[]DescriptionRepresents attributes of a catalog item version. Available in API version 57.0 and later. |
| internalNotes | Field TypestringDescriptionIntended to describe what the catalog item does and its implementation. That value is meant for other catalog builders. |
| isAvailableToAllCustomers | Field TypebooleanDescriptionRequired. Controls catalog item access for internal users. To share with all internal users, set the value to True. This value corresponds to the Allow Access for All Users option for Internal Access in the Catalog Item Builder. Available in API version 61.0 and later. |
| isFeatured | Field TypebooleanDescriptionDetermines if the catalog item is part of the featured catalog items. |
| isGuestAccessible | Field TypebooleanDescriptionRequired. Controls catalog item access for guest users. To share with guests, set the value to True. This value corresponds to Guest Visibility option for External Access in the Catalog Item Builder. Available in API version 61.0 and later. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value. This value has no impact. |
| masterLabel | Field TypestringDescriptionRequired. The primary label for the catalog item record. |
| sharedTo | Field TypeSharedToDescriptionDescribes how the catalog item is shared across multiple catalog categories. SvcCatalogItemDef only supports sharing with groups. |
| status | Field TypePublishStatusType (enumeration of type string)DescriptionRequired. Displays the publishing status of a catalog item.Values are:DeprecatedDraftPendingChangesPublished |

## SvcCatalogItemDefFiltrCrit

Represents the association of an eligibility rule with a catalog item. Eligibility rules customize access to catalog items for different audiences, based on the User object. Available in version 59.0 and later.

| Field Name | Description |
| --- | --- |
| svcCatalogFilterCriteria | Field TypestringDescriptionThe name of the associated catalogFilerCriteria eligibility filter. |

## SvcCatalogCategoryItem

Represents the assignment of this service to a category within the Service Catalog.

| Field Name | Description |
| --- | --- |
| isPrimaryCategory | Field TypebooleanDescriptionDetermines if the catalog category (svcCatalogCategory) is the primary category for this catalog item. Exactly one category per SvcCatalogItemDef component must set this attribute to true. |
| sortOrder | Field TypeintDescriptionThe position of the catalog item relative to other catalog items in the catalog category. |
| svcCatalogCategory | Field TypestringDescriptionRequired. The catalog category the catalog item is assigned to. |

## SvcCatalogItemDefDataCategorySelection

Represents a list of data categories for this catalog item. This subtype is available in API version 59.0 and later.

| Field Name | Description |
| --- | --- |
| category | Field TypestringDescriptionAPI name of a data category. |
| categoryGroup | Field TypestringDescriptionAPI Name of a data category group. |

## SvcCatalogItemAttribute

Represents an attribute of a catalog item version. It can be a static input filled by the catalog builder user or additional questions that end users answer at runtime. Available in API version 57.0 and later.

| Field Name | Description |
| --- | --- |
| field | Field TypestringDescriptionApplicable when the display type is Lookup/Reference. |
| inputType | Field TypeSvcCatalogItemAttrDataType (enumeration of type string)DescriptionRequired.Values are:AttachmentCheckboxCurrencyDateDatetimeDisplayTextEmailIPAddressIntegerListOfAttachment(available in API version 65.0 and later)ListOfBooleanListOfDoubleListOfIntegerListOfMapsListOfStringLookupMapMultilineTextMultiSelectPicklist(available in API version 65.0 and later)NumberNumericScalePassword(available in API version 65.0 and later)PercentagePicklistQueueRadioButton(available in API version 65.0 and later)SingleCheckbox (available in API version 59.0 and later)SinglelineTextTextToggle (available in API version 59.0 and later)Url |
| inputVariable | Field TypestringDescriptionReferences the input variable to which the attribute value is forwarded. |
| isRequired | Field TypebooleanDescriptionDetermines if an answer is required for this question. |
| label | Field TypestringDescriptionA translatable label for rendering the attribute to users. |
| maxValue | Field TypedoubleDescriptionApplicable when the display type is slider. |
| minValue | Field TypedoubleDescriptionApplicable when the display type is slider. |
| name | Field TypestringDescriptionRequired. Applicable when the display type is Lookup/Reference. |
| object | Field TypestringDescriptionA picklist object’s custom API Name. Applies when inputType is set to Picklist. |
| options | Field TypeSvcCatalogItemAttrDetailDescriptionThe values attached to an attribute of an item version. |
| type | Field TypeSvcCatalogItemAttrType (enumeration of type string)DescriptionRequired. Type of the attribute; used to determine if it's a pre-filled input or questions to ask users.Values are:FulfillmentInputUserQuestion |
| value | Field TypestringDescriptionAttribute value defined by the catalog builder. |

## SvcCatalogItemAttrDetail

Represents the details for an attribute of an item version. Used for options displayed in picklist or checkbox groups.

| Field Name | Description |
| --- | --- |
| isDefault | Field TypebooleanDescriptionRequired. Marks the attribute detail as the default. Applicable when the input display type is picklist or checkbox. |
| label | Field TypestringDescriptionRequired. Picklist option label when the input type is picklist or checkbox. |
| value | Field TypestringDescriptionAttribute value defined by the catalog builder. |

## Declarative Metadata Sample Definition

The following is an example of a SvcCatalogItemDef component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<SvcCatalogItemDef xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>57.0</apiVersion>
    <categories>
        <isPrimaryCategory>true</isPrimaryCategory>
        <sortOrder>3</sortOrder>
        <svcCatalogCategory>Category1</svcCatalogCategory>
    </categories>
    <dataCategories>
        <category>France</category>
        <categoryGroup>World</categoryGroup>
    </dataCategories>
    <masterLabel>Item Draft Update</masterLabel>
    <description>Item with a Draft state</description>
    <fulfillmentFlow>TestQuestions</fulfillmentFlow>
    <isFeatured>false</isFeatured>
    <isProtected>false</isProtected>
    <status>Published</status>
    <inputs>
        <name>Input1</name>
        <type>FulfillmentInput</type>
        <inputVariable>input1</inputVariable>
        <label>Input Static</label>
        <inputType>Text</inputType>
        <isRequired>false</isRequired>
    </inputs>
    <inputs>
        <type>UserQuestion</type>
        <inputType>Picklist</inputType>
        <isRequired>false</isRequired>
        <label>My First Question</label>
        <name>first_question</name>
        <options>
            <label>Option 1</label>
            <value>option_1</value>
            <isDefault>true</isDefault>
        </options>
        <options>
            <label>Option 2</label>
            <value>option_2</value>
            <isDefault>false</isDefault>
        </options>
        <options>
            <label>Option 3</label>
            <value>option_3</value>
            <isDefault>false</isDefault>
        </options>
    </inputs>
</SvcCatalogItemDef>
```

## Related Topics

- SvcCatalogFulfillmentFlow (atlas.en-us.api_meta.meta/api_meta/meta_svccatalogfulfillmentflow.htm)
- SharedTo (atlas.en-us.api_meta.meta/api_meta/meta_sharedto.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
