---
title: "Custom Address Fields Requirements and Limitations"
domain: caf-dev-guide
topic: custom-address-fields-requirements-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:09.266Z
estimatedTokens: 1638
keywords: [Custom, Address, Requirements, Limitations, enable, configure, State, Country, Territory, picklists, review, feature, Requirement, Package, Deployment]
---

# Custom Address Fields Requirements and Limitations

> Before you enable Custom Address Fields, configure State and Country/Territory picklists
        and review the limitations of this feature.

# Custom Address Fields Requirements and Limitations

Before you enable Custom Address Fields, configure State and Country/Territory picklists and review the limitations of this feature.

| Available in: all editions. |
| --- |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

To discuss the feature and ask questions, join the [Custom Address Fields Discussion](https://trailhead.salesforce.com/trailblazer-community/groups/0F94S000000H3KISA0) group on the Trailblazer Community.

## Custom Address Fields Requirement: State and Country/Territory Picklists

Custom Address Fields uses picklists for the State and Country address fields. For more information, see [Configure State and Country/Territory Picklists](atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_configure_picklists.htm "Custom Address Fields uses picklists for the State and Country address fields. Before you enable custom address fields, configure State and Country/Territory picklists.").

## Custom Address Fields Requirement: Package Deployment

If a package contains a custom field with the Address field type, package deployment requires that Custom Address Fields is enabled in the target org.

## Custom Address Fields and Org Limits

For custom compound fields, each component counts as one custom field toward your org’s allocations. Thus each custom address field counts as nine custom fields: one each for street, city, postal code, country code, state code, geocode accuracy level, longitude, and latitude, plus one for internal use. For more information on the allocations for your org, see Salesforce Features and Edition Allocations in Salesforce Help.

## Limitations for Custom Address Fields

Before you enable Custom Address Fields or add a custom address field, understand the limitations of this feature.

These items aren’t supported with custom address fields.

-   The conversion of address data into custom fields of type Address from custom fields of other types.
-   [Approvals](https://help.salesforce.com/s/articleView?id=platform.what_are_approvals.htm&type=5&language=en_US)
-   [Data Import Wizard](https://help.salesforce.com/s/articleView?id=xcloud.data_import_wizard.htm&type=5&language=en_US)
-   Fuzzy matching
-   [Composite API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_composite.htm)
-   [Field Encryption](https://developer.salesforce.com/docs/atlas.en-us.260.0.securityImplGuide.meta/securityImplGuide/security_pe_set_up_field_level_encryption.htm)
-   [Field Sets](https://help.salesforce.com/s/articleView?id=platform.fields_about_field_sets.htm&type=5&language=en_US)
-   [Flow Screen Input Component: Address](https://help.salesforce.com/s/articleView?id=platform.flow_ref_elements_screencmp_address.htm&type=5&language=en_US)
-   [Lead Conversion](https://help.salesforce.com/s/articleView?id=sales.leads_convert_parent.htm&type=5&language=en_US)
-   [Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)
-   [Merge Fields](https://help.salesforce.com/s/articleView?id=sales.cpq_merge_fields.htm&type=5&language=en_US)
-   Search, including global search, lookup search, SOSL queries, and Search Manager
-   [Visualforce](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/pages_intro.htm) pages
-   [Workflow](https://help.salesforce.com/s/articleView?id=platform.customize_wf.htm&type=5&language=en_US)

Salesforce hasn’t validated custom address fields with these items.

-   [Schema Builder](https://help.salesforce.com/s/articleView?id=platform.schema_builder.htm&type=5&language=en_US)
-   [Web-to-Case](https://help.salesforce.com/s/articleView?id=service.customize_casecapture.htm&type=5&language=en_US) and [Email-to-Case](https://help.salesforce.com/s/articleView?id=service.customizesupport_email.htm&type=5&language=en_US)
-   [Generating Leads from Your Website](https://help.salesforce.com/s/articleView?id=sales.setting_up_web-to-lead.htm&type=5&language=en_US)
-   Filtering in a related list
-   Bulk API 1.0
-   [Data Loader](https://help.salesforce.com/s/articleView?id=xcloud.data_loader_about.htm&type=5&language=en_US)

This functionality is either unavailable or limited with Custom Address Fields.

-   As with standard address fields, you can’t mark a custom address field as required.
-   You can’t use the DISTANCE function with a custom address field.
-   To export data stored in custom fields of type Address, use API or SOQL queries. Bulk API doesn’t support the export of custom compound fields.
-   The error message when you attempt to export a custom address field with Bulk API incorrectly states that the functionality isn’t enabled. Bulk API doesn’t support the export of custom compound fields.
-   To populate a custom address field with imported data, use REST API or Bulk API 2.0.
-   Search queries only support the data stored within the Street component of custom fields of type Address. The State, City, Postal Code, and Country components aren’t supported for search.
-   In Skinny Tables, you can’t select a component of a custom address field as partition column.
-   When configuring search results for an object, custom address fields aren’t supported in Search Filter Fields (only available in Salesforce Classic). If you specify a custom address field as a Search Filter Field in a search layout, package installation and Metadata deploy() fails.
-   Compound address fields aren’t supported in reports. To include a custom address field in a report, add the individual address components, such as street, city, state, and zip.
-   When using a custom address field in a Data Integration Rule, the Country and State components are unavailable for field mapping.
-   You can’t rename the labels for the individual components of a custom address field.
-   You can localize the label of a custom address field. However, you can’t localize the labels of the individual components within a custom address field.
-   The word “Address” isn’t appended to the section label for a custom address field. If you include the word “Address” in the field label, it’s included in the label for every component. For example, “Warehouse Address (State)” instead of “Warehouse (State)”. These labels are inconsistent with the label behavior for standard address fields.
-   The length of the GeoCodeAccuracy field for custom fields of data type Address isn’t consistent with standard field of type Address.

## Related Topics

- Configure State and Country/Territory Picklists (atlas.en-us.caf_dev_guide.meta/caf_dev_guide/caf_dev_configure_picklists.htm)
