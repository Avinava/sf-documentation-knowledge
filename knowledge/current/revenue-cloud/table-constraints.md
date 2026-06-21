---
title: "Table Constraints"
domain: revenue-cloud
topic: table-constraints
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-06-21T00:39:49.764Z
estimatedTokens: 724
keywords: [Constraints, constraint, Modeling, Language, CML, define, combinations, two, attributes, rows, definition, Import, Salesforce, Populate, Imported, Explanation]
---

> The table constraint in Constraint Modeling Language (CML) is used to define a set of
    valid combinations of values for two or more attributes. These combinations are specified in
    rows within the constraint definition.

# Table Constraints

The table constraint in Constraint Modeling Language (CML) is used to define a set of valid combinations of values for two or more attributes. These combinations are specified in rows within the constraint definition.

The table constraint has this syntax:

```

```

Each row inside {} defines a valid combination of values.

## Example: Table Constraint

In this example:

-   Variables: The attributes Voltage and DutyRating are listed as the columns for the table.
-   Table Rows: Each row defined within the curly braces ({}) specifies a valid combination. For instance, {"7976/13800", "Continuous Power (COP)"} is a valid pairing.
-   Enforcement: If a user attempts to select a high voltage ("7976/13800") while choosing a Prime Power rating ("Prime Power (PRP)"), the table constraint is violated, and the engine displays the error message: "Selected Voltage is not compatible with the required Duty Rating."

```

```

## Import Data from a Salesforce Object to Populate a Table Constraint

Import data from a standard or custom Salesforce object to use in a table constraint in a constraint model. The imported data populates the columns and rows in the table constraint in CML, and saves you the step of manually entering the data.

To import data from a Salesforce object, first assign Read, Create, Edit, and Delete permissions for the object to the Constraint Rules Engine Licenseless permission set. See [Import Data from Salesforce Objects to Use in Constraint Models](https://help.salesforce.com/s/articleView?id=ind.product_configurator_import_object_data.htm&language=en_US "HTML (New Window)") in Salesforce Help.

In CML, use the SalesforceTable keyword and the syntax shown here to import data from a Salesforce object. This example uses the GeneratorSet type to constrain the calculated running capacity (gc\_runningKw) based on a user's selection of the nominal output (Nominal\_Power\_Output), referencing an external Salesforce custom object named PowerCst\_\_c.

## Example: Imported Table Constraint

```

```

## Explanation of the Imported Table

The table constraint ensures that the selected values for Nominal\_Power\_Output and gc\_runningKw must form one of the valid combinations defined in the external source.

-   Table (Nominal\_Power\_Output, gc\_runningKw, ...): These are the CML attributes whose values must correlate. They define the columns of the required combination table.
-   Salesforce Table ("PowerCst\_\_c", "Nominal\_\_c,Running\_\_c"): This function keyword directs the constraint engine to import data from the Salesforce custom object PowerCst\_\_c.
-   Field Mapping: The fields specified ("Nominal\_\_c,Running\_\_c") define the columns in the Salesforce object that correspond to the CML attributes listed in the table function. Nominal\_\_c maps to Nominal\_Power\_Output, and Running\_\_c maps to gc\_runningKw.

## Code Examples

```
table(variable, …, variable, {value, .. value}, …, {value, …, value});
```

```
// --- Component Types ---
type GeneratorSet {
// 1. Attributes whose values must align according to the table
string Voltage = ["220/380", "277/480", "7976/13800"];
string DutyRating = ["Prime Power (PRP)", "Continuous Power (COP)", "Emergency Standby Power (ESP)"];
// 2. Table Constraint
// Defines valid combinations where Voltage and DutyRating are mutually dependent.
constraint validOperationalModes(
table(
Voltage,
DutyRating,
{"220/380", "Prime Power (PRP)"},
{"220/380", "Continuous Power (COP)"},
{"220/380", "Emergency Standby Power (ESP)"},
{"277/480", "Prime Power (PRP)"},
{"277/480", "Emergency Standby Power (ESP)"},
{"7976/13800", "Continuous Power (COP)"}
),
"Selected Voltage is not compatible with the required Duty Rating."
);
}
```

```
type GeneratorSet {
// 1. Attribute storing the user-selected power output (String)
string Nominal_Power_Output = ["100 kW", "300 kW", "500 kW", "700 kW"];
// 2. Attribute storing the resulting Running kW (Decimal, calculated)
@(configurable = false, defaultValue = "0")
decimal(2) gc_runningKw;
// Constraint ensures the pairing of Nominal_Power_Output and gc_runningKw is found in the imported Salesforce table.
constraint(
table(
Nominal_Power_Output, gc_runningKw,
SalesforceTable("PowerCst__c","Nominal__c,Running__c")
)
);
}
```
