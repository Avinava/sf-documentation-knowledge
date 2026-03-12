---
title: "Bulk DML Exception Handling"
domain: apex-guide
topic: bulk-dml-exception-handling
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.242Z
estimatedTokens: 756
keywords: [Bulk, DML, Exception, Handling]
---

# Bulk DML Exception Handling

# Bulk DML Exception Handling

Exceptions that arise from a bulk DML call (including any recursive DML operations in triggers that are fired as a direct result of the call) are handled differently depending on where the original call came from:

-   When errors occur because of a bulk DML call that originates directly from the Apex DML statements, or if the allOrNone parameter of a Database DML method is set to true, the runtime engine follows the “all or nothing” rule: during a single operation, all records must be updated successfully or the entire operation rolls back to the point immediately preceding the DML statement. If the allOrNone parameter of a Database DML method is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If the allOrNone parameter of a Database DML method is set to false and a before-trigger assigns an invalid value to a field, the partial set of valid records isn’t inserted.
-   When errors occur because of a bulk DML call that originates from SOAP API with default settings, or if the allOrNone parameter of a Database DML method was specified as false, the runtime engine attempts at least a partial save:

    1.  During the first attempt, the runtime engine processes all records. Any record that generates an error due to issues such as validation rules or unique index violations is set aside.
    2.  If there were errors during the first attempt, the runtime engine makes a second attempt that includes only those records that didn’t generate errors. All records that didn't generate an error during the first attempt are processed, and if any record generates an error (perhaps because of race conditions) it’s also set aside.
    3.  If there were additional errors during the second attempt, the runtime engine makes a third and final attempt that includes only those records that didn’t generate errors during the first and second attempts. If any record generates an error, the entire operation fails with the error message, “Too many batch retries in the presence of Apex triggers and partial failures.”

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    -   During the second and third attempts, governor limits are reset to their original state before the first attempt. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.").
    -   Apex triggers are fired for the first save attempt, and if errors are encountered for some records and subsequent attempts are made to save the subset of successful records, triggers are refired on this subset of records.

## Related Topics

- Execution Governors and
                                    Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
