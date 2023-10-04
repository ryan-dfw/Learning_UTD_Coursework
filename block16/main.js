const BudgetCases = [
  [50, 20, 25],
  [100, 50, 46],
  [500, 230, 230],
  [200, 140, 50],
];

BudgetCases.forEach((BudgetCase) =>
  console.log(`${(BudgetCase[1] + BudgetCase[2]) * 1.08 <= BudgetCase[0]} `)
);
