---
title: "UIBundle (Beta)"
domain: metadata-api
topic: uibundle-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-05-10T00:40:12.979Z
estimatedTokens: 899
keywords: [UIBundle, Beta, Salesforce, Multi-Framework, app, React, Parent, File, Suffix, Directory, Location, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

> Represents a Salesforce Multi-Framework app, such as a React
      app.

# UIBundle (Beta)

Represents a Salesforce Multi-Framework app, such as a React app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Salesforce Multi-Framework is a beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/) or a written Unified Pilot Agreement, if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this beta service is at the Customer’s sole discretion.

The Non-GA Services are used in conjunction with GA Services which consume paid credits or entitlements ("entitlements"). Any corresponding consumption of entitlements arising from Customer's use of the Non-GA Services shall not give rise to any refund or credit rights.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

UIBundle components have the suffix .uibundle-meta.xml and are stored in the uiBundles/your\_app folder.

## Version

UIBundle components are available in API version 66.0 and later.

## Special Access Rules

Salesforce Multi-Framework is supported in sandbox and scratch orgs only. To use this feature, your admin must enable React Development with Salesforce Multi-Framework (Beta) in Setup.

The UIBundle metadata type can contain up to 2,500 files.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA description of what the web application does. |
| isActive | Field TypebooleanDescriptionRequired. Specifies whether the web application is accessible (true) or not (false). |
| isProtected | Field TypebooleanDescriptionFor internal use only. |
| masterLabel | Field TypestringDescriptionRequired. Specifies the web-application name that appears in the UI. |
| target | Field TypestringDescriptionSpecifies the Salesforce target where the app is supported. Valid values are:AppLauncher: Makes the app available in the App Launcher. This is the default target if you don’t specify a value.Experience: Indicates that the app is an external-facing site or portal and makes it available in the Digital Experiences app. |
| version | Field TypestringDescriptionRequired. Indicates the version of the web application. |

## Declarative Metadata Sample Definition

The following is an example of a UIBundle component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

#### See Also

-   [*Agentforce Vibes Developer Guide*: Build a React App with Salesforce Multi-Framework (Beta)](https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/reactdev-overview.html "Agentforce Vibes Developer
    Guide: Build a React App with Salesforce Multi-Framework (Beta) - html (New Window)")

## Code Examples

```
<UIBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>Customer Portal</masterLabel>
    <description>Customer self-service portal built with React.</description>
    <isActive>true</active>
    <target>AppLauncher</target>
    <version>1</version>
</UIBundle>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>UIBundle</name>
    </types>
    <version>66.0</version>
</Package>
```
