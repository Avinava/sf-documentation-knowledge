---
title: "VisualEditor Namespace"
domain: apex-reference
topic: visualeditor-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:31.635Z
estimatedTokens: 519
namespace: VisualEditor
keywords: [VisualEditor, provides, classes, interacting, Lightning, App, Builder., operate, components, which, include, web, Aura, components.]
---

# VisualEditor Namespace

> The VisualEditor namespace provides classes and
    methods for interacting with the Lightning App Builder. The classes and methods in this
    namespace operate on Lightning components, which include Lightning web components and Aura
    components.

**Namespace:** `VisualEditor`

# VisualEditor Namespace

The VisualEditor namespace provides classes and methods for interacting with the Lightning App Builder. The classes and methods in this namespace operate on Lightning components, which include Lightning web components and Aura components.

As of Spring ’19 (API version 45.0), you can build Lightning components using two programming models: the Lightning Web Components model, and the original Aura Components model. Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning web components and Aura components can coexist and interoperate on a page.

Configure Lightning web components and Aura components to work in Lightning App Builder and Experience Builder. Admins and end users don’t know which programming model was used to develop the components. To them, they’re simply Lightning components.

The following are the classes in the VisualEditor namespace.

-   **[DataRow Class](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm#apex_class_VisualEditor_DataRow)**
    Contains information about one item in a picklist used in a Lightning component on a Lightning page.
-   **[DesignTimePageContext Class](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm#apex_class_VisualEditor_DesignTimePageContext)**
    A class that provides context information about a Lightning page. It can be used to help define the values of a picklist in a Lightning component on a Lightning page based on the page’s type and the object with which it’s associated.
-   **[DynamicPickList Class](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm#apex_class_VisualEditor_DynamicPickList)**
    An abstract class, used to display the values of a picklist in a Lightning component on a Lightning page.
-   **[DynamicPickListRows Class](atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm#apex_class_VisualEditor_DynamicPickListRows)**
    Contains a list of picklist items in a Lightning component on a Lightning page.

## Related Topics

- DataRow Class (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DataRow.htm)
- DesignTimePageContext Class (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DesignTimePageContext.htm)
- DynamicPickList Class (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickList.htm)
- DynamicPickListRows Class (atlas.en-us.apexref.meta/apexref/apex_class_VisualEditor_DynamicPickListRows.htm)
