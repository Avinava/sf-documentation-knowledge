---
title: "CareLimitType"
domain: health-cloud-object-reference
topic: carelimittype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.735Z
estimatedTokens: 508
keywords: [CareLimitType, characteristics, limits, benefit, provision, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition, API, version, 53.0, later, SOAP]
---

# CareLimitType

> Defines the characteristics of limits on benefit provision. This object
      is available in API version 53.0 and later.

# CareLimitType

Defines the characteristics of limits on benefit provision. This object is available in API version 53.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated CareLimitType type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the CareLimitType.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LimitType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSource of limit on benefit provision, such as a co-insurance requirement. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel that identifies the CareLimitType throughout the Salesforce user interface. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe CareLimitType’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| MetricType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the quantity used for calculating the benefit limit, such as number of visits, amount spent, or percentage of allowed expenditure.Possible values are:AmountMoneyPercentageText |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[CareLimitTypeChangeEvent](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 60.0)

Change events are available for the object.

#### See Also

-   [*Second-Generation Managed Packaging Developer Guide*: Components Available in Managed Packages](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/packaging_packageable_components.htm "Second-Generation Managed Packaging Developer Guide: Components Available in
    Managed Packages - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CareLimitType xmlns="http://soap.sforce.com/2006/04/metadata">
    <limitType>test</limitType>
    <masterLabel>test</masterLabel>
    <metricType>Money</metricType>
    <isProtected>false</isProtected>
</CareLimitType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>CareLimitType</name>
    </types>
    <version>52.0</version>
</Package>
```

## Related Topics

- CareLimitTypeChangeEvent (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
