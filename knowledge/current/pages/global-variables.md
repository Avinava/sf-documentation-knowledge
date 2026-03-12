---
title: "Global Variables"
domain: pages
topic: global-variables
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.319Z
estimatedTokens: 1578
keywords: [Variables, general, current, user, organization]
---

# Global Variables

> Use global variables to reference general information about
the current user and your organization on a page.

# Global Variables

Use global variables to reference general information about the current user and your organization on a page.

Global variables must be referenced using Visualforce expression syntax to be evaluated, for example, {!$User.FirstName}.

-   **[$Action](atlas.en-us.pages.meta/pages/pages_variables_global_action.htm)**
    A global merge field type to use when referencing standard Salesforce actions, such as displaying the Accounts tab home page, creating accounts, editing accounts, and deleting accounts.
-   **[$Api](atlas.en-us.pages.meta/pages/pages_variables_global_api.htm)**
    A global merge field type to use when referencing API URLs.
-   **[$Asset](atlas.en-us.pages.meta/pages/pages_variables_global_asset.htm)**
    A global merge field to use when referencing images and other assets that are part of the Lightning Design System.
-   **[$Cache.Org](atlas.en-us.pages.meta/pages/pages_variables_global_cacheorg.htm)**
    A global merge field to access an org cache from a Visualforce page. Retrieve cached values from a specified partition’s org cache in the referenced org.
-   **[$Cache.Session](atlas.en-us.pages.meta/pages/pages_variables_global_cachesession.htm)**
    A global merge field to access an org’s session cache from a Visualforce page. Retrieve cached values from a specified partition’s session cache in the referenced org.
-   **[$Component](atlas.en-us.pages.meta/pages/pages_variables_global_component.htm)**
    A global merge field type to use when referencing a Visualforce component.
-   **[$ComponentLabel](atlas.en-us.pages.meta/pages/pages_variables_global_componentlabel.htm)**
    A global merge field to use when referencing the label of an inputField component on a Visualforce page that is associated with a message.
-   **[$CurrentPage](atlas.en-us.pages.meta/pages/pages_variables_global_currentpage.htm)**
    A global merge field type to use when referencing the current Visualforce page or page request.
-   **[$FieldSet](atlas.en-us.pages.meta/pages/pages_variables_global_fieldset.htm)**
    Provides access to a field set defined in your organization.
-   **[$Label](atlas.en-us.pages.meta/pages/pages_variables_global_label.htm)**
    A global merge field type to use when referencing a custom label.
-   **[$Label.Site](atlas.en-us.pages.meta/pages/pages_variables_global_labelsite.htm)**
    A global merge field type used to reference a standard Sites label in a Visualforce page. As with all standard labels, the label’s message displays according to the user’s language and locale. You can’t modify the message of a standard Sites label. To use a custom message, create a custom label, and then reference the label with the $Label global variable.
-   **[$MessageChannel](atlas.en-us.pages.meta/pages/pages_variables_global_messagechannel.htm)**
    A global merge field type to provide access to a message channel defined in your organization.
-   **[$Network](atlas.en-us.pages.meta/pages/pages_variables_global_network.htm)**
    A global merge field type to use when referencing Experience Cloud site details in a Visualforce email template.
-   **[$ObjectType](atlas.en-us.pages.meta/pages/pages_variables_global_objecttype.htm)**
    A global merge field type to use when referencing standard or custom objects (such as Accounts, Cases, or Opportunities) and the values of their fields.
-   **[$Organization](atlas.en-us.pages.meta/pages/pages_variables_global_organization.htm)**
    A global merge field type to use when referencing information about your company profile. Use organization merge fields to reference your organization’s city, fax, ID, or other details.
-   **[$Page](atlas.en-us.pages.meta/pages/pages_variables_global_page.htm)**
    A global merge field type to use when referencing a Visualforce page.
-   **[$Permission](atlas.en-us.pages.meta/pages/pages_variables_global_permission.htm)**
    A global merge field type to use when referencing information about the current user’s custom permission access. Use permission merge fields to reference information about the user’s current access to any of your organization’s custom permissions.
-   **[$Profile](atlas.en-us.pages.meta/pages/pages_variables_global_profile.htm)**
    A global merge field type to use when referencing information about the current user’s profile. Use profile merge fields to reference information about the user’s profile such as license type or name.
-   **[$Resource](atlas.en-us.pages.meta/pages/pages_variables_global_resource.htm)**
    A global merge field type to use when referencing an existing static resource by name in a Visualforce page. You can also use resource merge fields in URLFOR functions to reference a particular file in a static resource archive.
-   **[$SControl](atlas.en-us.pages.meta/pages/pages_variables_global_scontrol.htm)**
    A global merge field type to use when referencing an existing custom s-control by name. This merge field type results in a URL to a page where the s-control executes.
-   **[$Setup](atlas.en-us.pages.meta/pages/pages_variables_global_setup.htm)**
    A global merge field type to use when referencing a custom setting of type “hierarchy.”
-   **[$Site](atlas.en-us.pages.meta/pages/pages_variables_global_site.htm)**
    A global merge field type to use when referencing information about the current Salesforce site.
-   **[$System.OriginDateTime](atlas.en-us.pages.meta/pages/pages_variables_global_systemorigindatetime.htm)**
    A global merge field that represents the literal value of 1900-01-01 00:00:00.
-   **[$User](atlas.en-us.pages.meta/pages/pages_variables_global_user.htm)**
    A global merge field type to use when referencing information about the current user. User merge fields can reference information about the user such as alias, title, and ID.
-   **[$User.UITheme and and $User.UIThemeDisplayed](atlas.en-us.pages.meta/pages/pages_variables_global_useruitheme.htm)**
    These global merge fields identify the Salesforce look and feel a user sees on a given Web page.
-   **[$UserRole](atlas.en-us.pages.meta/pages/pages_variables_global_userrole.htm)**
    A global merge field type to use when referencing information about the current user’s role. Role merge fields can reference information such as role name, description, and ID.

## Related Topics

- $Action (atlas.en-us.pages.meta/pages/pages_variables_global_action.htm)
- $Api (atlas.en-us.pages.meta/pages/pages_variables_global_api.htm)
- $Asset (atlas.en-us.pages.meta/pages/pages_variables_global_asset.htm)
- $Cache.Org (atlas.en-us.pages.meta/pages/pages_variables_global_cacheorg.htm)
- $Cache.Session (atlas.en-us.pages.meta/pages/pages_variables_global_cachesession.htm)
- $Component (atlas.en-us.pages.meta/pages/pages_variables_global_component.htm)
- $ComponentLabel (atlas.en-us.pages.meta/pages/pages_variables_global_componentlabel.htm)
- $CurrentPage (atlas.en-us.pages.meta/pages/pages_variables_global_currentpage.htm)
- $FieldSet (atlas.en-us.pages.meta/pages/pages_variables_global_fieldset.htm)
- $Label (atlas.en-us.pages.meta/pages/pages_variables_global_label.htm)
