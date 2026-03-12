---
title: "FormulaGlobal Enum"
domain: apex-reference
topic: formulaglobal-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.693Z
estimatedTokens: 346
keywords: [FormulaGlobal, variable, references, data, organization, withGlobalVariables, formulaGlobals]
---

# FormulaGlobal Enum

> Specifies a global variable that references data in your organization in the withGlobalVariables(formulaGlobals) method.

# FormulaGlobal Enum

Specifies a global variable that references data in your organization in the withGlobalVariables(formulaGlobals) method.

## Enum Values

The following are the values of the FormulaEval.FormulaGlobal enum.

| Value | Description |
| --- | --- |
| CUSTOMMETADATA | A custom metadata record. |
| LABEL | A global variable to use when referencing a custom label. |
| ORGANIZATION | A global variable to use when referencing information about your company profile, such as organization’s city, fax, ID, or other details. |
| PERMISSION | A global variable to use when referencing information about the current user’s custom permission access. |
| PROFILE | A global variable to use when referencing information about the current user’s profile, such as license type or name. |
| SETUP | A global variable to use when referencing a custom setting of type hierarchy. |
| SYSTEM | A global variable that exposes OriginDateTime and represents the literal value of 1900-01-01 00:00:00. Use this global variable when performing date/time offset calculations, or to assign a literal value to a date/time field. |
| USER | A global variable to use when referencing information about the current user, such as alias, title, and ID. |
| USERROLE | A global variable to use when referencing information about the current user’s role, such as role name, description, and ID. |
