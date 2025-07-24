import React from "react";
import Dashboardlayout from "../../../components/Layouts/Dashboardlayout";
import { useUserAuth } from "../../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosinstance";
import { API_PATHS } from "../../../utils/apiPaths";
import { useEffect } from "react";
import Infocard from "../../../components/Infocard";
import { useState } from "react";

import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";

const home = () => {
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
            value={addThousandsSeparator(dashboardData?.totalBalance)}
            color="bg-primary"
          />
        </div>
      </div>
    </Dashboardlayout>
  );
};

export default home;
