---
title: "RoleOrTerritory"
domain: metadata-api
topic: roleorterritory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:42.532Z
estimatedTokens: 662
keywords: [RoleOrTerritory, Represents, common, base, valid, values, role, territory., Version, Note, Fields, Declarative, Metadata, Sample, Definition]
---

# RoleOrTerritory

> Represents the common base type and valid values for
   role or territory.

# RoleOrTerritory

Represents the common base type and valid values for role or territory.

## Version

RoleOrTerritory components are available in API version 24.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

You can’t create a RoleOrTerritory component directly. Use the Role or Territory metadata types instead.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| caseAccessLevel | string | Specifies whether a user can access other users’ cases that are associated with accounts the user owns. Valid values are:ReadEditNoneThis field is not visible if your organization’s sharing model for cases is Public Read/Write.If no value is set for this field, this field value uses the default access level that is specified in the Manage Territory page in Setup. |
| contactAccessLevel | string | Specifies whether a user can access other users’ contacts that are associated with accounts the user owns. Valid values are:ReadEditNoneThis field is not visible if your organization’s sharing model for contacts is Public Read/Write or Controlled by Parent.If no value is set for this field, this field value uses the default access level that is specified in the Manage Territory page in Setup. |
| description | string | The description of the role or territory. |
| fullName | string | The unique identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. This field is inherited from the Metadata component. |
| mayForecastManagerShare | boolean | Indicates whether the forecast manager can manually share their own forecast. |
| name | string | Required. The name of the role or territory. |
| opportunityAccessLevel | string | Specifies whether a user can access other users’ opportunities that are associated with accounts the user owns. Valid values are:ReadEditNoneThis field is not visible if your organization’s sharing model for opportunities is Public Read/Write.If no value is set for this field, this field value uses the default access level that is specified in the Manage Territory page in Setup. |

## Declarative Metadata Sample Definition

The following is the definition of a role.

```

```

The following is the definition of a territory.

```

```

#### See Also

-   [Role](atlas.en-us.api_meta.meta/api_meta/meta_role.htm "Represents a role in your organization.")

-   [Territory](atlas.en-us.api_meta.meta/api_meta/meta_territory.htm "Represents a territory.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<Role xmlns="http://soap.sforce.com/2006/04/metadata">
    <caseAccessLevel>Edit</caseAccessLevel>
    <contactAccessLevel>Edit</contactAccessLevel>
    <description>Sample Role</description>
    <mayForecastManagerShare>false</mayForecastManagerShare>
    <name>R22</name>
    <opportunityAccessLevel>Read</opportunityAccessLevel>
</Role>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Territory xmlns="http://soap.sforce.com/2006/04/metadata">
    <accountAccessLevel>Edit</accountAccessLevel>
    <caseAccessLevel>Edit</caseAccessLevel>
    <contactAccessLevel>Edit</contactAccessLevel>
    <description>Sample Territory</description>
    <mayForecastManagerShare>false</mayForecastManagerShare>
    <name>T22name</name>
    <opportunityAccessLevel>Read</opportunityAccessLevel>
</Territory>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Role (atlas.en-us.api_meta.meta/api_meta/meta_role.htm)
- Territory (atlas.en-us.api_meta.meta/api_meta/meta_territory.htm)
