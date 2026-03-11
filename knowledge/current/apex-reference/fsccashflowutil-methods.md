---
title: "FSCCashFlowUtil Methods"
domain: apex-reference
topic: fsccashflowutil-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.565Z
keywords: [FSCCashFlowUtil, Methods]
---

# FSCCashFlowUtil Methods

# FSCCashFlowUtil Methods

The FSCCashFlowUtil has these methods.

-   **[GetPartyIncomeFrequencyLabel](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_getpartyincomefrequencylabel.htm)**  
    Returns the picklist values for the party income frequency field on the party income entity.
-   **[GetPartyIncomeTypeLabel](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_getpartyincometypelabel.htm)**  
    Returns the picklist values for the party income type field on the party income entity.
-   **[GetPartyIncomeStatusLabel](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_getpartyincomestatuslabel.htm)**  
    Returns the picklist values for the party income status field on the party income entity.
-   **[CalculateIncomeExpenseSummary](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_calculateincomeexpensesummary.htm)**  
    Calculates the monthly income, total income, average monthly income, monthly expense, total expense, average monthly expense from a list of income and expenses provided.
-   **[GetPartyExpenseFrequencyLabel](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_getpartyexpensefrequencylabel.htm)**  
    Returns the picklist values for the party expense frequency field on the party expense entity.
-   **[GetPartyExpenseTypeLabel](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_getpartyexpensetypelabel.htm)**  
    Returns the picklist values for the party expense type field on the party expense entity.
-   **[GetPartyExpenseStatusLabel](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_GetPartyExpenseStatusLabel.htm)**  
    Returns the picklist values for the party expense status field on the party expense entity.
-   **[PerformIncomeValidation](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_performincomevalidation.htm)**  
    Performs validations on Party Income records. Ensure that the start date is not earlier than the end date.
-   **[PerformExpenseValidation](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_performexpensevalidation.htm)**  
    Performs validations on Party Income records.
-   **[GetDurationDateRange](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_getdurationdaterange.htm)**  
    Returns the start and end date given a duration.For example, if you input the number 3 on the date 10/29/2024, it will return a start date of 7/1/2024 and an end date of 10/1/2024.
-   **[HandleUpsertError](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_handleupserterror.htm)**  
    Helper method that constructs the error response for upsert of a partyIncome or partyExpense record.
-   **[CheckReadAccess](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_checkreadaccess.htm)**  
    Checks for read access on the partyIncome and partyExpense entities.
-   **[CheckCrudOnIncome](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_checkcrudonincome.htm)**  
    Checks create, update and delete access on partyIncome entity.
-   **[CheckCrudOnExpense](atlas.en-us.apexref.meta/apexref/apex_fsccashflow_checkcrudonexpense.htm)**  
    Checks create, update and delete access on partyExpense entity.