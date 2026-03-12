---
title: "How Do Visualforce Pages Compare to S-Controls?"
domain: pages
topic: how-do-visualforce-pages-compare-to-s-controls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.718Z
estimatedTokens: 614
keywords: [How, Visualforce, Pages, Compare, S-Controls, supersede, Organizations, haven't, previously, can’t, unaffected, edited]
---

# How Do Visualforce Pages Compare to S-Controls?

> Visualforce pages supersede s-controls. Organizations that haven't
                    previously used s-controls can’t create them. Existing s-controls are
                    unaffected and can still be edited.

# How Do Visualforce Pages Compare to S-Controls?

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Visualforce pages supersede s-controls. Organizations that haven't previously used s-controls can’t create them. Existing s-controls are unaffected and can still be edited.

Visualforce pages are considered the next-generation of s-controls and should be used instead of s-controls whenever possible, both for their increased performance and the ease with which they can be written. The following table outlines the differences between Visualforce pages and s-controls.

|  | Visualforce Pages | S-Controls |
| --- | --- | --- |
| Required technical skills | HTML, XML | HTML, JavaScript, Ajax Toolkit |
| Language style | Tag markup | Procedural code |
| Page override model | Assemble standard and custom components using tags | Write HTML and JavaScript for entire page |
| Standard Salesforce component library | Yes | No |
| Access to built-in platform behavior | Yes, through the standard controller | No |
| Data binding | YesDevelopers can bind an input component (such as a text box) with a particular field (such as Account Name). If a user saves a value in that input component, it is also saved in the database. | NoDevelopers can't bind an input component with a particular field. Instead, they must write JavaScript code that uses the API to update the database with user-specified field values. |
| Stylesheet inheritance | Yes | No, must bring in Salesforce stylesheets manually |
| Respect for field metadata, such as uniqueness | Yes, by defaultIf a user attempts to save a record that violates uniqueness or requiredness field attributes, an error message is automatically displayed and the user can try again. | Yes, if coded in JavaScript using a describe API callIf a user attempts to save a record that violates uniqueness or requiredness field attributes, an error message is only displayed if the s-control developer wrote code that checked those attributes. |
| Interaction with Apex | Direct, by binding to a custom controller | Indirect, by using Apex webService methods through the API |
| Performance | More responsive because markup is generated on the Lightning Platform | Less responsive because every call to the API requires a round trip to the server—the burden rests with the developer to tune performance |
| Page container | Native | In an iFrame |
