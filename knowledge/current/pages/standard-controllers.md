---
title: "Standard Controllers"
domain: pages
topic: standard-controllers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.394Z
estimatedTokens: 454
keywords: [Standard, Controllers, Visualforce, controller, instructions, specify, happens, user, interacts, components, associated, markup, clicks, button, link]
---

# Standard Controllers

> A Visualforce controller is a set of instructions that specify what happens when a user
      interacts with the components specified in associated Visualforce markup, such as when a user
      clicks a button or link. Controllers also provide access to the data that should be displayed
      in a p

# Standard Controllers

A Visualforce controller is a set of instructions that specify what happens when a user interacts with the components specified in associated Visualforce markup, such as when a user clicks a button or link. Controllers also provide access to the data that should be displayed in a page, and can modify component behavior.

The Lightning platform provides a number of standard controllers that contain the same functionality and logic that are used for standard Salesforce pages. For example, if you use the standard Accounts controller, clicking a **Save** button in a Visualforce page results in the same behavior as clicking **Save** on a standard Account edit page.

A standard controller exists for every Salesforce object that can be queried using the Lightning Platform API.

-   **[Associating a Standard Controller with a Visualforce Page](atlas.en-us.pages.meta/pages/pages_controller_std_associate.htm)**

-   **[Accessing Data with a Standard Controller](atlas.en-us.pages.meta/pages/pages_controller_std_access_data.htm)**

-   **[Using Standard Controller Actions](atlas.en-us.pages.meta/pages/pages_controller_std_actions.htm)**

-   **[Validation Rules and Standard Controllers](atlas.en-us.pages.meta/pages/pages_controller_std_validation_rules.htm)**

-   **[Styling Pages that Use Standard Controllers](atlas.en-us.pages.meta/pages/pages_controller_std_styling.htm)**

-   **[Checking for Object Accessibility](atlas.en-us.pages.meta/pages/pages_controller_std_checking_accessibility.htm)**
    If a user has insufficient privileges to view an object, any Visualforce page that uses a controller to render that object is inaccessible. To avoid this error, ensure that your Visualforce components only render if a user has access to the object associated with the controller.

## Related Topics

- Associating a Standard Controller with a Visualforce Page (atlas.en-us.pages.meta/pages/pages_controller_std_associate.htm)
- Accessing Data with a Standard Controller (atlas.en-us.pages.meta/pages/pages_controller_std_access_data.htm)
- Using Standard Controller Actions (atlas.en-us.pages.meta/pages/pages_controller_std_actions.htm)
- Validation Rules and Standard Controllers (atlas.en-us.pages.meta/pages/pages_controller_std_validation_rules.htm)
- Styling Pages that Use Standard Controllers (atlas.en-us.pages.meta/pages/pages_controller_std_styling.htm)
- Checking for Object Accessibility (atlas.en-us.pages.meta/pages/pages_controller_std_checking_accessibility.htm)
