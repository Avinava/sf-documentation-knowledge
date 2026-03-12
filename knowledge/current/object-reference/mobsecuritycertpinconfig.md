---
title: "MobSecurityCertPinConfig"
domain: object-reference
topic: mobsecuritycertpinconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.013Z
estimatedTokens: 810
keywords: [MobSecurityCertPinConfig, Configuration, mobile, security, certificate, pinning, Salesforce, app, Enhanced, API, version, 53.0, later, Calls, Special]
---

# MobSecurityCertPinConfig

> Configuration of mobile security certificate pinning on the
         Salesforce mobile app with Enhanced Mobile Security. This object is available in API
      version 53.0 and later.

# MobSecurityCertPinConfig

Configuration of mobile security certificate pinning on the Salesforce mobile app with Enhanced Mobile Security. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

Accessing this object requires the Enhanced Mobile App Security add-on subscriptions and the Enforce Enhanced Mobile App Security user permission.

## Fields

| Field | Details |
| --- | --- |
| CertificateHash | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique identifier for the certificate. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| DomainName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the domain. |
| IsEnabled | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe default value is False. |
| IsSubdomainIncluded | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe default value is False. |
| Language | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe two-to five-character code that represents the language and locale ISO. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label of the mobile security pin. |
| MobilePlatform | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe mobile operating system.Possible values are:AndroidiOS |
| MobileSecurityAssignmentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the ID of the mobile security assignment.This is a relationship field.Relationship NameMobileSecurityAssignmentRelationship TypeLookupRefers ToMobileSecurityAssignment |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| SeverityLevel | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe severity level of a mobile security policy.Possible values are:CriticalErrorInfoWarn |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe type of pinPossible values are:AuthServer—Authentication ServerResource—Resource |
