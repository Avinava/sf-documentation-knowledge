---
title: "CustomPermissionDependency"
domain: object-reference
topic: custompermissiondependency
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:07.751Z
estimatedTokens: 440
keywords: [CustomPermissionDependency, dependency, two, custom, permissions, permission, requires, enable, another, API, version, 32.0, later, Calls, Special]
---

# CustomPermissionDependency

> Represents the dependency between two custom permissions when one
			custom permission requires that you enable another custom permission. This object
		is available in API version 32.0 and later.

# CustomPermissionDependency

Represents the dependency between two custom permissions when one custom permission requires that you enable another custom permission. This object is available in API version 32.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only users with View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| CustomPermissionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the custom permission that requires the permission that’s specified in RequiredCustomPermissionId.This is a relationship field.Relationship NameCustomPermissionRelationship TypeLookupRefers ToCustomPermission |
| RequiredCustomPermissionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the custom permission that must be enabled when CustomPermissionId is enabled.This is a relationship field.Relationship NameRequiredCustomPermissionRelationship TypeLookupRefers ToCustomPermission |

## Usage

The following Apex class contains a method that returns the IDs of all custom permissions that are required for the given custom permission ID. To use this class, save it in your organization.

```

```

For more information about using Apex classes, see the [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dev_guide.htm).

#### See Also

-   [CustomPermission](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custompermission.htm "Represents a permission created to control access to a custom process or app, such as sending email. This object is available in API version 31.0 and later.")

## Code Examples

```apex
public class CustomPermissionUtil {
   public String[] getAllRequiredCustomPermissions(String customPermId) {
      return getAllRequiredHelper(new String[]{customPermId});
   }
   
   private String[] getAllRequiredHelper(String[] customPermIds) {
      CustomPermissionDependency[] requiredPerms = [SELECT RequiredCustomPermissionId
                                                    FROM CustomPermissionDependency
                                                    WHERE CustomPermissionId
                                                    IN :customPermIds];
      String[] requiredPermIds = new String[]{};
      for (CustomPermissionDependency cpd : requiredPerms) {
         requiredPermIds.add(cpd.RequiredCustomPermissionId);
      }
      if (requiredPermIds.size() > 0) {
         customPermIds.addall(getAllRequiredHelper(requiredPermIds));
         return customPermIds;
      } else {
         return customPermIds;
      }
   }
}
```

## Related Topics

- CustomPermission (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custompermission.htm)
