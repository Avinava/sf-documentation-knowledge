---
title: "CareSystemFieldMapping"
domain: health-cloud-object-reference
topic: caresystemfieldmapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.758Z
estimatedTokens: 704
keywords: [CareSystemFieldMapping, mapping, source, system, Salesforce, objects, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, target, entities, attributes, Calls, external]
---

# CareSystemFieldMapping

> Represents a mapping from fields in external source systems to Salesforce
         target entities and attributes

# CareSystemFieldMapping

Represents a mapping from fields in external source systems to Salesforce target entities and attributes

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
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| ExternalIdField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the field in the external system. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated CareSystemFieldMapping type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the mapping is active.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of CareSystemFieldMapping.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:beta—Managed-Betadeleted—Managed-Proposed-Deleteddeprecated—Managed-Proposed-DeprecateddeprecatedEditable—SecondGen-Installed-Deprecatedinstalled—Managed-InstalledinstalledEditable—SecondGen-Installed-Editablereleased—Managed-Releasedunmanaged—Unmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel that identifies the CareSystemFieldMapping throughout the Salesforce user interface. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe CareSystemFieldMapping’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| Role | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe role that the entity represents. Picklist values RemoteMonitoringDevice and RemoteMonitoringPatient are available from API version 49.0 and later.Possible values are:NotApplicable: This role is used when targetObject is set to CareProgram or Product, which means that there is no applicable role.Patient: When the role field is set to Patient, the Enrollment API uses the value of externalIdField as the patient ID. This role can be used when targetObject is set to Account.RemoteMonitoringDevice: Indicates which externalIdField on the Asset object maps to the Device field in the CareObservation object. This role can be used when targetObject is set to Asset.RemoteMonitoringPatient: Indicates which externalIdField on the Account object maps to the ObservedSubject field in the Care Observation object. This role is used when targetObject is set to Account.ServiceProvider: The Enrollment API uses the value of externalIdField as the provider ID. This role is used when targetObject is set to Account.The default value is NotApplicable. |
| SourceSystem | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSystem from which the record was sourced. |
| TargetObject | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the corresponding object where information from the source system is recorded. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CareSystemFieldMapping xmlns="http://soap.sforce.com/2006/04/metadata">
    <externalIdField>AccountNumber</externalIdField>
    <isActive>true</isActive>
    <isProtected>false</isProtected>
    <masterLabel>Map1</masterLabel>
    <role>Patient</role>
    <sourceSystem>Epic</sourceSystem>
    <targetObject>Account</targetObject>
</CareSystemFieldMapping>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>patient</members>
        <name>CareSystemFieldMapping</name>
    </types>
    <version>49.0</version>
</Package>
```

## Related Topics

- Care Program Enrollments (POST) (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_careprogram_enrollment_intro.htm)
- Enrollments (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_resource_enroll-pantients.htm)
