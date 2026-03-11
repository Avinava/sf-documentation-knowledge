---
title: "Trigger Syntax"
domain: apex-guide
topic: trigger-syntax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:47.764Z
keywords: [Trigger, Syntax]
---

# Trigger Syntax

# Trigger Syntax

To define a trigger, use the following syntax:

```

```

where trigger\_events can be a comma-separated list of one or more of the following events:

For example, the following code defines a trigger for the before insert and before update events on the Account object:

```

```

The code block of a trigger cannot contain the static keyword. Triggers can only contain keywords applicable to an inner class. In addition, you do not have to manually commit any database changes made by a trigger. If your Apex trigger completes successfully, any database changes are automatically committed. If your Apex trigger does not complete successfully, any changes made to the database are rolled back.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk.htm "Bulk Triggers")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm "Trigger Context Variables")