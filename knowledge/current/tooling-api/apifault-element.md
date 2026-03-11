---
title: "ApiFault Element"
domain: tooling-api
topic: apifault-element
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:46:37.093Z
keywords: [ApiFault, Element, Tooling, API, Faults]
---

# ApiFault Element

# ApiFault Element

An ApiFault element contains information about a fault that occurs when processing a service request.

The ApiFault element has the following properties.

exceptionCode

Type

fns:ExceptionCode

Description

A code that characterizes the exception. The full list of exception codes is available in the Tooling API WSDL file for your org.

exceptionMessage

Type

string

Description

The message text associated with the exception code.

extendedErrorDetails

Type

tns:ExtendedErrorDetails

Description

Reserved for future use.

upgradeURL

Type

string

Description

A URL giving the location for more information about the upgrade.

upgradeMessage

Type

string

Description

Message text describing why an upgrade is needed.

## Tooling API Faults

The following API fault elements represent all the Tooling API faults that can occur. In API version 37.0 and later, these elements are in the Tooling API fns namespace (fault.tooling.soap.sforce.com).

ApiQueryFault

The row and column numbers identifying where the problem occurred.

InvalidFieldFault

An invalid field in a retrieve() or query() call.

InvalidIdFault

A specified ID was invalid in a setPassword() or resetPassword() call.

InvalidNewPasswordFault

The new password specified doesn’t conform to the org’s password requirements. Password requirements can include length, character mix, reuse of old passwords, and so on.

InvalidOldPasswordFault

The password specified doesn’t match the old password.

InvalidQueryLocatorFault

A problem in the queryLocator passed in a queryMore() call.

InvalidSObjectFault

An invalid sObject in a describeSObject(), describeSObjects(), describeLayout(), describeDataCategoryGroups(), describeDataCategoryGroupStructures(), create(), update(), retrieve(), or query() call.

LoginFault

An error occurred during the login() call.

MalformedQueryFault

A problem in the queryString passed in a query() call.

MalformedSearchFault

A problem in the search passed in a search() call.

UnexpectedErrorFault

An unexpected error occurred. The error is not associated with any other API fault.