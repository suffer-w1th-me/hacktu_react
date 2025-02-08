import Homepage from "./components/Homepage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Backend from "./components/Backend.jsx";
import StayUpdated from "./components/StayUpdated.jsx";
import ExamResponse from "./components/ExamResponse.jsx";
import Quiz from "./components/Quiz.jsx";

export default function App() {
    return(
        <>
            <BrowserRouter location={history.location}>
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/exam-devta"} element={<Backend />} />
                    <Route path={"/junior-devta"} element={<StayUpdated />} />
                    <Route path={"/senior-devta"} element={<StayUpdated />} />
                    <Route path={"/foundation-devta"} element={<StayUpdated />} />
                    <Route path={"exam-devta/response"} element={<ExamResponse />} />
                    <Route path={"/quiz"} element={<Quiz/>} />
                </Routes>

            </BrowserRouter>
        </>
    )
}