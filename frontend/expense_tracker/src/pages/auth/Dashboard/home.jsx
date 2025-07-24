import React from "react";
import Dashboardlayout from "../../../components/Layouts/Dashboardlayout";
import { useUserAuth } from "../../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosinstance";
import { API_PATHS } from "../../../utils/apiPaths";
import { useEffect } from "react";
import Infocard from "../../../components/Cards/Infocard";
import { useState } from "react";

import { LuHand, LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../../utils/helper";
import RecentTransactions from "../../../DashComponents/RecentTransactions";
import FinanceOverview from "../../../DashComponents/FinanceOverview";
import ExpenseTransactions from "../../../DashComponents/ExpenseTransactions";
import Last30DaysExpenses from "../../../DashComponents/Last30DaysExpenses";
import RecentIncomeWithChart from "../../../DashComponents/RecentIncomeWithChart";

const Home = () => {
  useUserAuth();
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );

      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };
  //Handles dashboard data fetching by first checking the loading state to prevent duplicate requests, then makes an API call, updates the state with the received data,
  // catches any errors for logging, and ensures the loading state is properly reset using a finally block for consistent UI behavior.
  useEffect(() => {
    fetchDashboardData(); //fetches data
    return () => {}; // clean up function
  }, []);

  return (
    <Dashboardlayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 grap-6">
          <Infocard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-purple-500"
          />

          <Infocard
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />
          <Infocard
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpenses || 0)}
            color="bg-red-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransactions
            transactions={dashboardData?.recentTransactions}
            onSeeMore={() => navigate("/expense")}
          />
          <FinanceOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpenses || 0}
          />
          <ExpenseTransactions
            transactions={dashboardData?.last30DaysExpenses?.transactions || []}
            onSeeMore={() => navigate("/expenses")}
          />

          <Last30DaysExpenses
            transactions={dashboardData?.last30DaysExpenses?.transactions || []}
          />

          <RecentIncomeWithChart
            transactions={
              dashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []
            }
            totalIncome={dashboardData?.totalIncome || 0}
          />
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default Home;
