---
title: "Components Automatically Added to First-Generation Managed Packages"
domain: pkg1-dev
topic: components-automatically-added-to-first-generation-managed-packages
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.538Z
estimatedTokens: 1845
keywords: [Components, Automatically, Added, First-Generation, Managed, Packages, adding, package, add, Visualforce, references, custom, controller, Apex]
---

# Components Automatically Added to First-Generation Managed Packages

> When adding components to your first-generation managed package, related components are
    automatically added. For example, if you add a Visualforce page to a package that references a
    custom controller, that Apex class is also added.

# Components Automatically Added to First-Generation Managed Packages

When adding components to your first-generation managed package, related components are automatically added. For example, if you add a Visualforce page to a package that references a custom controller, that Apex class is also added.

To understand what components are automatically included in first-generation managed packages, review the following list:

| When you add this component | These components are automatically added |
| --- | --- |
| Action | Action target object (if it’s a custom object), action target field, action record type, predefined field values, action layout; and any custom fields that the action layout or predefined values refer to on the target object |
| Apex class | Custom fields, custom objects, and other explicitly referenced Apex classes, and anything else that the Apex class references directlyNoteIf an Apex class references a custom label, and that label has translations, you must explicitly package the individual languages desired for those translations to be included. |
| Apex trigger | Custom fields, custom objects, and any explicitly referenced Apex classes, and anything else that the Apex trigger references directly |
| Article type | Custom fields, the default page layout |
| Compact layout | Custom fields |
| Custom app | Custom tabs (including web tabs), documents (stored as images on the tab), documents folder, asset files |
| Custom button or link | Custom fields and custom objects |
| Custom field | Custom objects |
| Custom home page layouts | Custom home page components on the layout |
| Custom settings | Apex sharing reasons, Apex sharing recalculations, Apex triggers, custom fields, list views, page layouts, record types, validation rules, or custom buttons or links. |
| Custom object | Custom fields, validation rules, page layouts, list views, custom buttons, custom links, record types, Apex sharing reasons, Apex sharing recalculations, and Apex triggersNoteApex sharing reasons are unavailable in extensions.When packaged and installed, only public list views from an app are installed. If a custom object has any custom list views that you want to include in your package, ensure that the list view is accessible by all users. |
| Custom object (as an external object) | External data source, custom fields, page layouts, list views, custom buttons, and custom linksNoteWhen packaged and installed, only public list views from an app are installed. If an external object has any custom list views that you want to include in your package, ensure that the list view is accessible by all users.In managed and unmanaged packages, external objects are included in the custom object component. |
| Custom tab | Custom objects (including all of its components), s-controls, and Visualforce pages |
| Dashboard | Folders, reports (including all of its components), s-controls, and Visualforce pages |
| Document | Folder |
| Email template (Classic) | FolderLetterheadCustom fieldsDocuments (stored as images on the letterhead or template) |
| Email template (Lightning) | Custom objectCustom field references (in Handlebars Merge Language syntax)Enhanced folder (except the default public and private folders)Inline images referencing Salesforce FilesAttachments referencing Salesforce FilesFor Lightning email templates created before Spring ’21, attachments aren’t automatically added to the package. Open and resave these templates to turn the attachments into content assets, which are then automatically added to the packageThese items aren’t included and can’t be added to a package:Enhanced letterheadThe associated FlexiPageCMS files (Account Engagement only) |
| Email template (Lightning) created in Email Template Builder | Custom objectCustom field references (in Handlebars Merge Language syntax)Enhanced folder (except the default public and private folders)Inline images referencing Salesforce FilesAttachments referencing Salesforce FilesThe associated FlexiPageThese items aren’t included and can’t be added to a package:Enhanced letterheadCMS files (Account Engagement only) |
| External Credential | Permission set and authentication providerNoteExternal credentials that use the Oauth 2.0 authentication protocol must reference an authentication provider to capture the details of the authorization endpoint. If you add an external credential that references an authentication provider, the authentication provider is added to the package. See Authentication Providers for information on which elements of an authentication provider are and aren’t packageable. |
| Field set | Any referenced fields |
| Lightning page | All Lightning resources referenced by the page, such as record types, actions, custom components, events, and interfaces. Custom fields, custom objects, list views, page layouts, Visualforce pages, and Apex classes referenced by the components on the page. |
| Lightning page tab | Lightning page |
| Flow | Custom objects, custom fields, Apex classes, and Visualforce pages |
| Folder | Everything in the folder |
| Lightning application | All Lightning resources referenced by the application, such as components, events, and interfaces. Custom fields, custom objects, list views, page layouts, and Apex classes referenced by the application. |
| Lightning component | All Lightning resources referenced by the component, such as nested components, events, and interfaces. Custom fields, custom objects, list views, page layouts, and Apex classes referenced by the component. |
| Lightning event | Custom fields, custom objects, list views, and page layouts |
| Lightning interface | Custom fields, custom objects, list views, and page layouts |
| Lightning web component | All Lightning web component resources referenced by the component, such as nested components and modules. Custom fields, custom objects, list views, page layouts, and Apex classes referenced by the component |
| Named Credential | External credential; for legacy named credentials, an authentication provider |
| Page layout | Actions, custom buttons, custom links, s-controls, and Visualforce pages |
| Permission set | Any custom permissions, external data sources, Visualforce pages, record types, and Apex classes that are assigned in the permission set |
| Record type | Record type mappings, compact layout |
| Report | Folder, custom fields, custom objects, custom report types, and custom s-controls |
| Reporting Snapshot | Reports |
| S-control | Custom fields and custom objects |
| Translation | Translated terms for the selected language on any component in the package |
| Validation rule | Custom fields (referenced in the formula) |
| Visualforce home page component | Associated Visualforce page |
| Visualforce pages | Apex classes that are used as custom controllers, Visualforce custom components, and referenced field sets |
| Workflow rule | All associated workflow alerts, field updates, outbound messages, and tasks; also, if the workflow rule is designed for a custom object, the custom object is automatically included |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg1_dev)

#### Note

Some package components, such as validation rules or record types, don’t appear in the list of package components, but are included and install with the other components.
