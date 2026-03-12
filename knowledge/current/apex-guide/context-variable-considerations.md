---
title: "Context Variable Considerations"
domain: apex-guide
topic: context-variable-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:34.164Z
estimatedTokens: 640
keywords: [Context, Variable, Considerations, certain, actions, different, trigger, events]
---

# Context Variable Considerations

> The following table lists considerations about certain actions in different trigger events:

# Context Variable Considerations

Be aware of the following considerations for trigger context variables:

-   trigger.new and trigger.old cannot be used in Apex DML operations.
-   You can use an object to change its own field values using trigger.new, but only in before triggers. In all after triggers, trigger.new is not saved, so a runtime exception is thrown.
-   trigger.old is always read-only.
-   You cannot delete trigger.new.

The following table lists considerations about certain actions in different trigger events:

| Trigger Event | Can change fields using trigger.new | Can update original object using an update DML operation | Can delete original object using a delete DML operation |
| --- | --- | --- | --- |
| before insert | Allowed. | Not applicable. The original object has not been created; nothing can reference it, so nothing can update it. | Not applicable. The original object has not been created; nothing can reference it, so nothing can update it. |
| after insert | Not allowed. A runtime error is thrown, as trigger.new is already saved. | Allowed. | Allowed, but unnecessary. The object is deleted immediately after being inserted. |
| before update | Allowed. | Not allowed. A runtime error is thrown. | Not allowed. A runtime error is thrown. |
| after update | Not allowed. A runtime error is thrown, as trigger.new is already saved. | Allowed. Even though bad code could cause an infinite recursion doing this incorrectly, the error would be found by the governor limits. | Allowed. The updates are saved before the object is deleted, so if the object is undeleted, the updates become visible. |
| before delete | Not allowed. A runtime error is thrown. trigger.new is not available in before delete triggers. | Allowed. The updates are saved before the object is deleted, so if the object is undeleted, the updates become visible. | Not allowed. A runtime error is thrown. The deletion is already in progress. |
| after delete | Not allowed. A runtime error is thrown. trigger.new is not available in after delete triggers. | Not applicable. The object has already been deleted. | Not applicable. The object has already been deleted. |
| after undelete | Not allowed. A runtime error is thrown. | Allowed. | Allowed, but unnecessary. The object is deleted immediately after being inserted. |

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm "Trigger Context Variables")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk_idioms.htm "Common Bulk Trigger Idioms")

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_triggers_bulk_idioms.htm)
