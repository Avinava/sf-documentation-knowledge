---
title: "Introduction"
domain: sfFieldRef
topic: introduction
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.687Z
estimatedTokens: 700
keywords: [Introduction, standard, objects, Salesforce, Terminology, API, versus, User]
---

# Introduction

> This guide lists important details for standard objects in Salesforce.

# Introduction

This guide lists important details for standard objects in Salesforce.

-   All the fields (except the standard System fields such Id, IsDeleted, LastModifedDate, etc., which are described in [System Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/system_fields.htm "HTML (New Window)") in the Object Reference).
-   The data type for each field.
-   Any applicable size restrictions for each field.

Use this guide along with these other resources:

-   The [Object Reference for Salesforce and Lightning Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "HTML (New Window)"), which provides the primary information about the objects and how they are used in the Salesforce APIs.
-   Salesforce Help, which describes how the objects are used in the Salesforce user interface.

Depending on your org settings and Salesforce Edition, some of these objects and fields might not be available.

The columns in this guide are:

| Field Label | How the field is displayed in the user interface in areas such as record detail pages, search results, and list views. |
| --- | --- |
| API Field Name | The name of the field, as represented in the Salesforce APIs. |
| Type | The data type of a field.For more information, see Primitive Data Types and Field Types in the Object Reference. |
| Digits | The maximum number of digits in the field. |
| Length | The maximum number of characters in the field. For example, the Shipping Zip/Postal Code field on the Account object has a length of 20. You can't set it to a value longer than 20 characters. |
| Precision | The maximum total number of digits in the number, including digits both to the left and right of the decimal point.For example, 12345.67 has a precision of seven, five for the numbers to the left of the decimal place and two for the numbers to the right. |
| Scale | The number of digits to the right of the decimal place. A scale of two means that two digits to the right of the decimal place are displayed. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfFieldRef)

#### Note

Not all fields have information in every column. For example, a picklist field does not have a precision or scale.

## Terminology in the API versus the User Interface

Some places in the user interface, such as the New Custom Field screen, use different terminology. On that screen, **length** refers to the number of digits to the left of the decimal place and **decimal places** refers to the number of digits to the right.

![comparison of terms as used in the API and the UI](/docs/resources/img/en-us/260.0?doc_id=images%2Fprecision_and_scale.png&folder=sfFieldRef)
