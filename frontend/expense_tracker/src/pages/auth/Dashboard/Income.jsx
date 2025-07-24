import React, { useState } from "react";
import DashboardLayout from "../../../components/Layouts/Dashboardlayout";
import IncomeOverview from "../../../DashComponents/IncomeComponents/IncomeOverview";

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const [openAddIncomeModal, setopenAddIncomeModal] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });
  // Get All Income Details
  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOME}`
      );

      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Add Income
  const handleAddIncome = async (income) => {};

  // Delete Income
  const deleteIncome = async (id) => {};

  // handle download income details
  const handleDownloadIncomeDetails = async () => {};

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Income;
