---
title: "AppointmentAssignmentPolicy"
domain: metadata-api
topic: appointmentassignmentpolicy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.955Z
estimatedTokens: 563
keywords: [AppointmentAssignmentPolicy, Represents, information, resource, assignment, rule., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location, Version, Fields]
---

# AppointmentAssignmentPolicy

> Represents the information about a resource assignment
      rule.
    This type extends the Metadata metadata type and inherits its
                        fullName field.

# AppointmentAssignmentPolicy

Represents the information about a resource assignment rule. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

AppointmentAssignmentPolicy components have the suffix .policy and are stored in the appointmentSchedulingPolicies folder.

## Version

AppointmentSchedulingPolicy components are available in API version 53.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| masterLabel | string | Required. The label for the appointment assignment policy. |
| policyApplicableDuration | string | Required. The frequency at which the utilization of service resources is calculated. Valid values are:MonthlyParameterBasedWeekly |
| policyType | string | Required. The type of appointment assignment policy. Valid value is:loadBalancing |
| utilizationFactor | string | Required. Specifies the count type for the resource utilization. Valid values are:NumberOfAppointmentsTotalAppointmentDuration |

## Declarative Metadata Sample Definition

The following is an example of an appointmentAssignmentPolicy component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AppointmentAssignmentPolicy xmlns="http://soap.sforce.com/2006/04/metadata">
   <masterLabel>loadBalancing Assignment Policy</masterLabel>
   <policyType>loadBalancing</policyType>
   <policyApplicableDuration>Weekly</policyApplicableDuration>
   <utilizationFactor>TotalAppointmentDuration</utilizationFactor>
</AppointmentAssignmentPolicy>
```

```
<?xml version="1.0" encoding="UTF-8"?>
 <Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
     <members>sample</members>
     <name>AppointmentAssignmentPolicy</name>
   </types>
   <version>53.0</version>
 </Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
