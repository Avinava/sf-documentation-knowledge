---
title: "CalculateIncomeExpenseSummary"
domain: apex-reference
topic: calculateincomeexpensesummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.541Z
keywords: [CalculateIncomeExpenseSummary, Signature, Return, Value, Examples]
---

# CalculateIncomeExpenseSummary

# CalculateIncomeExpenseSummary

Calculates the monthly income, total income, average monthly income, monthly expense, total expense, average monthly expense from a list of income and expenses provided.

## Signature

call(String action, Map<String, Object\> args

## Return Value

Returns income and expense details.

## Examples

Input and output JSON example of the actions are as follows.

Input format:

\[ { "Duration": "12", "PartyExpenseList": \[ { "Name": "PE-0000000004", "UsageType": "CashFlow", "RecurrenceInterval": "Monthly", "Type": "Child Care", "Id": "2n3SG000007dkzpYAA", "TotalAmount": 999.99, "PartyId": "001SG000004TCczYAG", "Status": "Active", "StartDate": "2024-01-29T08:00:00.000Z" } \], "PartyIncomeList": \[ { "Name": "PI-0000000003", "UsageType": "CashFlow", "IncomeFrequency": "Monthly", "IncomeType": "Salary", "Id": "2m3SG000007dkzpYAA", "IncomeAmount": 999.99, "PartyId": "001SG000004TCczYAG", "IncomeStatus": "Active", "StartDate": "2024-01-29T08:00:00.000Z" } \] } \]

Output format:

\[ { "MonthlyIncome": { "Nov 2023": 0, "Aug 2024": 999.99, "Oct 2023": 0, "Jan 2024": 96.7732258064516, "Mar 2024": 999.99, "Jul 2024": 999.99, "Apr 2024": 999.99, "Dec 2023": 0, "Jun 2024": 999.99, "Sep 2024": 999.99, "Feb 2024": 999.99, "May 2024": 999.99 }, "MonthlyExpense": { "Nov 2023": 0, "Aug 2024": 999.99, "Oct 2023": 0, "Jan 2024": 96.7732258064516, "Mar 2024": 999.99, "Jul 2024": 999.99, "Apr 2024": 999.99, "Dec 2023": 0, "Jun 2024": 999.99, "Sep 2024": 999.99, "Feb 2024": 999.99, "May 2024": 999.99 }, "AvgMonthlyExpense": 674.72, "TotalIncome": 8096.69, "TotalSurplus": 0, "AvgMonthlyIncome": 674.72, "AvgMonthlySurplus": 0, "TotalExpense": 8096.69 } \]