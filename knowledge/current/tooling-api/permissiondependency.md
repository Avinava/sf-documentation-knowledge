---
title: "PermissionDependency"
domain: tooling-api
topic: permissiondependency
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.495Z
estimatedTokens: 334
keywords: [PermissionDependency, permission, dependencies, child, Modify, Data, Tooling, API, version, 46.0, later, SOAP, Calls, REST, HTTP]
---

# PermissionDependency

> Represents permission dependencies for a specified permission. For
            example, return all child dependencies for the Modify All Data permission.
        Available in Tooling API version 46.0 and later.

# PermissionDependency

Represents permission dependencies for a specified permission. For example, return all child dependencies for the Modify All Data permission. Available in Tooling API version 46.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve()

## Supported REST HTTP Methods

Query, GET

## Special Access Rules

As of Summer ’20 and later, only users with View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| Permission | TypestringPropertiesFilterDescriptionThe permission that depends on other permissions to be enabled. For example, the permission might be Modify All Data, which requires View All Data and other permissions to be enabled. |
| PermissionType | TypestringPropertiesFilterDescriptionThe permission type. For example, user permissions, such as View All Data, or object permissions. |
| RequiredPermission | TypestringPropertiesFilterDescriptionThe permission that is required to be enabled for the dependent permission to be enabled. |
| RequiredPermissionType | TypestringPropertiesFilterDescriptionThe permission type. For example, user permissions, such as View All Data, or object permissions. |

## Usage

Use the PermissionDependency object to find the permissions on which a specified permission is dependent.
