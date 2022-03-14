import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MonthlyReport from "../pages/MonthlyReport";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";
import { Notice } from "../pages/notice/Notice";
import Rating from "../pages/Rating";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="rating" element={<Rating />} />
        <Route path="report/*" element={<MonthlyReport />} />
        <Route path="notice/*" element={<Notice />} />
        <Route path="mypage/*" element={<Mypage />} />
      </Routes>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f5f5f5;
  height: 100%;
  overflow: scroll;
  @media screen and (max-width: 667px) {
  }
`;

export default ReportMain;
