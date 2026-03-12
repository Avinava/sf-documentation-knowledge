---
title: "Typographical Conventions in This Document"
domain: soql-sosl
topic: typographical-conventions-in-this-document
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.843Z
estimatedTokens: 509
keywords: [Typographical, Conventions, Document, SOQL, uses, custom, SOSL, specific]
---

# Typographical Conventions in This Document

> This SOQL reference uses custom typographical conventions.

# Typographical Conventions in This Document

This SOQL reference uses custom typographical conventions.

| Convention | Description |
| --- | --- |
| SELECT Name FROM Account | Courier font indicates items that you should type as shown. In a syntax statement, Courier font also indicates items that you should type as shown, except for curly braces, square brackets, ellipsis, and other typographical markers explained in this table. |
| SELECT fieldname FROM objectname | Italics represent a variable or placeholder. You supply the actual value. |
| {} | Curly braces group elements to remove ambiguity. For example, in the clause UPDATE {TRACKING\|VIEWSTAT}[,...], the curly braces indicate that the pipe shows a choice between TRACKING and VIEWSTAT after UPDATE, rather than a choice between UPDATE TRACKING and VIEWSTAT. |
| \| | The pipe character separates alternate elements. For example, in the clause UPDATE {TRACKING\|VIEWSTAT}[,...], the \| character indicates that you can use either TRACKING or VIEWSTAT after UPDATE. |
| [] | Square brackets indicate an optional element. For example, [LIMIT rows] means that you can specify zero or one LIMIT clause. Don’t type square brackets as part of a SOQL command. Nested square brackets indicate elements that are optional and can only be used if the parent optional element is present. For example, in the clause [ORDER BY fieldOrderByList [ASC \| DESC] [NULLS {FIRST \| LAST}]] , ASC, DESC, or the NULLS clause cannot be used without the ORDER BY clause. |
| [...] and [,...] | Square brackets containing an ellipsis indicate that the preceding element can be repeated up to the limit for the element. If a comma is also present, the repeated elements must be separated by commas. If the element is a list of choices grouped with curly braces, you can use items from the list in any order. For example, in the clause UPDATE {TRACKING\|VIEWSTAT}[,...], the [,...] indicates that you can use TRACKING, VIEWSTAT, or both:UPDATE TRACKINGUPDATE VIEWSTATUPDATE TRACKING, VIEWSTAT |
