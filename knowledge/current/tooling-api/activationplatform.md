---
title: "ActivationPlatform"
domain: tooling-api
topic: activationplatform
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.111Z
keywords: [ActivationPlatform, Important, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# ActivationPlatform

# ActivationPlatform

Represents metadata about ActivationPlatform, such as platform name, delivery schedule, output format, and destination folder. This object is available in API version 54.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionThe description for this ActivationPlatform. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for the ActivationPlatform object.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| Enabled | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this Activation Platform is enabled (true) or not (false).The default value is false. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated ActivationPlatform in Metadata API. The full name can include a namespace prefix. |
| IncludeSegmentNames | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to include the segment name in the metadata (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the ActivationPlatform. The value for this field is the language value of the org. |
| LogoUrl | TypetextareaPropertiesNillableDescriptionLogo for the activation channel destination. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package.Possible values are:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the ActivationPlatform. In the UI, this field is ActivationPlatform. |
| Metadata | TypeActivationPlatformPropertiesCreate, Nillable, UpdateDescriptionProvides access to the associated type. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the ActivationPlatform. |
| Notes | TypetextareaPropertiesNillableDescriptionNotes for this ActivationPlatform. |
| OutputFormat | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe output format of the file.Possible values are:CSVJSONPARQUET |
| OutputGrouping | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe grouping of the output.Possible values are:PER_ACCOUNTPER_SEGMENT |
| PeriodicRefreshFrequecy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe full refresh frequency in days for incremental refresh mode. Available in API version 54.0 and later.Possible values are:REFRESH_30 - Full refresh every 30 daysREFRESH_60 - Full refresh every 60 daysThis field applies only when outputGrouping is PER_SEGMENT and refreshMode is INCREMENTAL. |
| RefreshFrequency | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates how often the activation platform accepts data delivery in hours.Possible values are:TWENTY_FOUR |
| RefreshMode | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe mode of refreshing the file.Possible values are:INCREMENTAL |