---
title: "QuickAction Namespace"
domain: apex-reference
topic: quickaction-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.575Z
estimatedTokens: 1110
namespace: QuickAction
keywords: [QuickAction, provides, classes, quick, actions.]
---

# QuickAction Namespace

> The QuickAction namespace provides classes and
    methods for quick actions.

**Namespace:** `QuickAction`

# QuickAction Namespace

The QuickAction namespace provides classes and methods for quick actions.

The following are the classes in the QuickAction namespace.

-   **[DescribeAvailableQuickActionResult Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm#apex_class_quickaction_describeavailablequickactionresult)**
    Contains describe metadata information for a quick action that is available for a specified parent.
-   **[DescribeLayoutComponent Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm#apex_class_quickaction_describelayoutcomponent)**
    Represents the smallest unit in a layout—a field or a separator.
-   **[DescribeLayoutItem Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm#apex_class_quickaction_describelayoutitem)**
    Represents an individual item in a QuickAction.DescribeLayoutRow.
-   **[DescribeLayoutRow Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutrow.htm#apex_class_quickaction_describelayoutrow)**
    Represents a row in a QuickAction.DescribeLayoutSection.
-   **[DescribeLayoutSection Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm#apex_class_quickaction_describelayoutsection)**
    Represents a section of a layout and consists of one or more columns and one or more rows (an array of QuickAction.DescribeLayoutRow).
-   **[DescribeQuickActionDefaultValue Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactiondefaultvalue.htm#apex_class_quickaction_describequickactiondefaultvalue)**
    Returns a default value for a quick action.
-   **[DescribeQuickActionParameter Class](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm#apex_class_QuickAction_DescribeQuickActionParameter)**
    Represents the parameters corresponding to a quick action.
-   **[DescribeQuickActionResult Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm#apex_class_quickaction_describequickactionresult)**
    Contains describe metadata information for a quick action.
-   **[QuickActionDefaults Class](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm#apex_class_QuickAction_QuickActionDefaults)**
    Represents an abstract Apex class that provides the context for running the standard Email Action on Case Feed and the container of the Email Message fields for the action payload. You can override the target fields before the standard Email Action is rendered.
-   **[QuickActionDefaultsHandler Interface](atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm#apex_interface_QuickAction_QuickActionDefaultsHandler)**
    The QuickAction.QuickActionDefaultsHandler interface lets you specify the default values for the standard Email and Send Email actions in the case feed. You can use this interface to specify the From address, CC address, BCC address, subject, and email body for the Email action in the case feed. You can use the interface to pre-populate these fields based on the context where the action is displayed, such as the case origin (for example, country) and subject.
-   **[QuickActionRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionrequest.htm#apex_class_quickaction_quickactionrequest)**
    Use the QuickAction.QuickActionRequest class for providing action information for quick actions to be performed by QuickAction class methods. Action information includes the action name, context record ID, and record.
-   **[QuickActionResult Class](atlas.en-us.apexref.meta/apexref/apex_class_quickaction_quickactionresult.htm#apex_class_quickaction_quickactionresult)**
    After you initiate a quick action with the QuickAction class, use the QuickActionResult class for processing action results.
-   **[SendEmailQuickActionDefaults Class](atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_SendEmailQuickActionDefaults.htm#apex_class_QuickAction_SendEmailQuickActionDefaults)**
    Represents an Apex class that provides: the From address list; the original email’s email message ID, provided that the reply action was invoked on the email message feed item; and methods to specify related settings on templates. You can override these fields before the standard Email Action is rendered.

## Related Topics

- DescribeAvailableQuickActionResult Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describeavailablequickactionresult.htm)
- DescribeLayoutComponent Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutcomponent.htm)
- DescribeLayoutItem Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutitem.htm)
- DescribeLayoutRow Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutrow.htm)
- DescribeLayoutSection Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describelayoutsection.htm)
- DescribeQuickActionDefaultValue Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactiondefaultvalue.htm)
- DescribeQuickActionParameter Class (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_DescribeQuickActionParameter.htm)
- DescribeQuickActionResult Class (atlas.en-us.apexref.meta/apexref/apex_class_quickaction_describequickactionresult.htm)
- QuickActionDefaults Class (atlas.en-us.apexref.meta/apexref/apex_class_QuickAction_QuickActionDefaults.htm)
- QuickActionDefaultsHandler Interface (atlas.en-us.apexref.meta/apexref/apex_interface_QuickAction_QuickActionDefaultsHandler.htm)
