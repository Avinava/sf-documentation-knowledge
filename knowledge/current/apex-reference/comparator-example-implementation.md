---
title: "Comparator Example Implementation"
domain: apex-reference
topic: comparator-example-implementation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.691Z
keywords: [Comparator, Example, Implementation, interface, impose, different, kinds, sorting.]
---

# Comparator Example Implementation

> Use the Comparator interface to impose different kinds of sorting.

## Comparator Example Implementation

Use the Comparator interface to impose different kinds of sorting.

This example implements two different ways of sorting employees.

public class Employee { private Long id; private String name; private Integer yearJoined; // Constructor public Employee(Long i, String n, Integer y) { id = i; name = n; yearJoined = y; } public String getName() { return name; } public Integer getYear() { return yearJoined; } }

// Class to compare Employees by name public class NameCompare implements Comparator<Employee> { public Integer compare(Employee e1, Employee e2) { if(e1?.getName() == null && e2?.getName() == null) { return 0; } else if(e1?.getName() == null) { return -1; } else if(e2?.getName() == null) { return 1; } return e1.getName().compareTo(e2.getName()); } } // Class to compare Employees by year joined public class YearCompare implements Comparator<Employee> { public Integer compare(Employee e1, Employee e2) { // Guard against null operands for ‘<’ or ‘>’ operators because // they will always return false and produce inconsistent sorting Integer result; if(e1?.getYear() == null && e2?.getYear() == null) { result = 0; } else if(e1?.getYear() == null) { result = -1; } else if(e2?.getYear() == null) { result = 1; } else if (e1.getYear() < e2.getYear()) { result = -1; } else if (e1.getYear() > e2.getYear()) { result = 1; } else { result = 0; } return result; } }

The following example tests the implementation:

```

```