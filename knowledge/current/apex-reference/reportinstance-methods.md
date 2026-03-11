---
title: "ReportInstance Methods"
domain: apex-reference
topic: reportinstance-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.928Z
keywords: [ReportInstance, Methods, Returns, date, time, instance, report, finished, running., completion, available, only, ran, successfully, couldn’t, run, because, error., Date, information]
---

# ReportInstance Methods

> Returns the date and time when the instance of the report
 finished running. The completion date is available only if the report
instance ran successfully or couldn’t be run because of an
error. Date and time information is in ISO-8601 format.

## ReportInstance Methods

The following are methods for ReportInstance. All are instance methods.

-   **[getCompletionDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_Reports_ReportInstance_getCompletionDate)**  
    Returns the date and time when the instance of the report finished running. The completion date is available only if the report instance ran successfully or couldn’t be run because of an error. Date and time information is in ISO-8601 format.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_Reports_ReportInstance_getId)**  
    Returns the unique ID for an instance of a report that was run asynchronously.
-   **[getOwnerId()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_Reports_ReportInstance_getOwnerId)**  
    Returns the ID of the user who created the report instance.
-   **[getReportId()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_Reports_ReportInstance_getReportId)**  
    Returns the unique ID of the report this instance is based on.
-   **[getReportResults()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_Reports_ReportInstance_getReportResults)**  
    Retrieves results for an instance of an asynchronous report. When you request your report, you can specify whether to summarize data or include details.
-   **[getRequestDate()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_Reports_ReportInstance_getRequestDate)**  
    Returns the date and time when an instance of the report was run. Date and time information is in ISO-8601 format.
-   **[getStatus()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportinstance.htm#apex_Reports_ReportInstance_getStatus)**  
    Returns the status of a report.

### getCompletionDate()

Returns the date and time when the instance of the report finished running. The completion date is available only if the report instance ran successfully or couldn’t be run because of an error. Date and time information is in ISO-8601 format.

#### Syntax

public Datetime getCompletionDate()

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### getId()

Returns the unique ID for an instance of a report that was run asynchronously.

#### Syntax

public Id getId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getOwnerId()

Returns the ID of the user who created the report instance.

#### Syntax

public Id getOwnerId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getReportId()

Returns the unique ID of the report this instance is based on.

#### Syntax

public Id getReportId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getReportResults()

Retrieves results for an instance of an asynchronous report. When you request your report, you can specify whether to summarize data or include details.

#### Syntax

public Reports.ReportResults getReportResults()

#### Return Value

Type: [Reports.ReportResults](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportresults.htm#apex_class_reports_reportresults "Contains the results of running a report.")

### getRequestDate()

Returns the date and time when an instance of the report was run. Date and time information is in ISO-8601 format.

#### Syntax

public Datetime getRequestDate()

#### Return Value

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

### getStatus()

Returns the status of a report.

#### Syntax

public String getStatus()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Usage

-   New if the report run was recently triggered through a request.
-   Success if the report ran.
-   Running if the report is being run.
-   Error if the report run failed. The instance of a report run can return an error if, for example, your permission to access the report was removed after you requested the run.