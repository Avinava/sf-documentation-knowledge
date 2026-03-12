---
title: "Package Version Header"
domain: rest-api
topic: package-version-header
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:35.031Z
estimatedTokens: 192
keywords: [Package, Version, referenced, client, number, identifies, components, behavior, contained, specify, making, calls, Apex, REST, web]
---

# Package Version Header

> Specifies the version of each package referenced by a
   client. A package version is a number that identifies the set of components and behavior
   contained in a package.
  This header can also be used to specify a package version
   when making calls to an Apex REST web service.

# Package Version Header

Specifies the version of each package referenced by a client. A package version is a number that identifies the set of components and behavior contained in a package. This header can also be used to specify a package version when making calls to an Apex REST web service.

The Package Version header can be used with the following resources: Describe Global, sObject Describe, sObject Basic Information, sObject Rows, sObject Layouts, Query, QueryAll, Search, and sObject Rows by External ID.

## Header Field Name and Values

Field name and value

x-sfdc-packageversion-\[namespace\]: xx.x, where \[namespace\] is the unique namespace of the managed package and xx.x is the package version.

Example

x-sfdc-packageversion-clientPackage: 1.0
