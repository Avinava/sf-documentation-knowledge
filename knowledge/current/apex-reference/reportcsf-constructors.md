---
title: "ReportCsf Constructors"
domain: apex-reference
topic: reportcsf-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.776Z
keywords: [ReportCsf, Constructors, Creates, instance, Reports.ReportCsf, class, specified, parameters., label, description, formulaType, decimalPlaces, downGroup, downGroupType, acrossGroup, acrossGroupType, formula, Signature, Parameters]
---

# ReportCsf Constructors

> Creates an instance of the Reports.ReportCsf class using the specified parameters.

## ReportCsf Constructors

The following are constructors for ReportCsf.

-   **[ReportCsf(label, description, formulaType, decimalPlaces, downGroup, downGroupType, acrossGroup, acrossGroupType, formula)](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportCsf.htm#apex_reports_ReportCsf_ctor)**  
    Creates an instance of the Reports.ReportCsf class using the specified parameters.
-   **[ReportCsf()](atlas.en-us.apexref.meta/apexref/apex_class_reports_ReportCsf.htm#apex_reports_ReportCsf_ctor_2)**  
    Creates an instance of the Reports.ReportCsf class. You can then set values by using the class’s set methods.

### ReportCsf(label, description, formulaType, decimalPlaces, downGroup, downGroupType, acrossGroup, acrossGroupType, formula)

Creates an instance of the Reports.ReportCsf class using the specified parameters.

#### Signature

public ReportCsf(String label, String description, Reports.FormulaType formulaType, Integer decimalPlaces, String downGroup, Reports.CsfGroupType downGroupType, String acrossGroup, Reports.CsfGroupType acrossGroupType, String formula)

#### Parameters

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user-facing name of the custom summary formula.

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The user-facing description of the custom summary formula.

formulaType

Type: [Reports.FormulaType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_FormulaType.htm#apex_enum_reports_FormulaType "The format of the numbers in a custom summary formula.")

The format of the numbers in the custom summary formula.

decimalPlaces

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of decimal places to include in numbers.

downGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of a row grouping when the downGroupType is CUSTOM; null otherwise.

downGroupType

Type: [Reports.CsfGroupType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_CsfGroupType.htm#apex_enum_reports_CsfGroupType "The group level at which the custom summary format aggregate is displayed in a report.")

Where to display the aggregate of the custom summary formula.

acrossGroup

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of a column grouping when the accrossGroupType is CUSTOM; null otherwise.

acrossGroupType

Type: [Reports.CsfGroupType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_CsfGroupType.htm#apex_enum_reports_CsfGroupType "The group level at which the custom summary format aggregate is displayed in a report.")

Where to display the aggregate of the custom summary formula.

formula

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The operations performed on values in the custom summary formula.

### ReportCsf()

Creates an instance of the Reports.ReportCsf class. You can then set values by using the class’s set methods.

#### Signature

public ReportCsf()