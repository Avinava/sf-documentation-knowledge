---
title: "CourseWaitlistConfig"
domain: edu-cloud-dev-guide
topic: coursewaitlistconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:26.130Z
estimatedTokens: 610
keywords: [CourseWaitlistConfig, configuration, Course, Waitlists, API, version, 66.0, later, Calls]
---

# CourseWaitlistConfig

> Represents the configuration for Course Waitlists. This object
      is available in API version 66.0 and later.

# CourseWaitlistConfig

Represents the configuration for Course Waitlists. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name for CourseWaitlistConfig. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the CourseWaitlistConfig. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SortOrder | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the order in which the values of the waitlist position criteria are sorted, if the type is Waitlist Position.Possible values are:AscendingDescending |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies how the course waitlist is configured according to type.Possible values are:EnrollmentOfferExpiration—Enrollment Offer ExpirationWaitlistPosition—Waitlist Position |
| Value | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSpecifies the value of a course waitlist configuration attribute based on the type. |
| WaitlistPositionFieldOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the order in which fields on Course Offering Participant are evaluated to determine a student's waitlist position, if the type is Waitlist Position. |
