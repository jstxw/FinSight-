import React from "react";
import { useUserAuth } from "../../hooks/useUserAuth";
import DashboardLayout from "../../components/layouts/DashboardLayout";

const Expense = () => {
  useUserAuth();

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">{/* Expense content goes here */}</div>
    </DashboardLayout>
  );
};

export default Expense;
