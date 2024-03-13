import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import Users from "./users/pages/users";
import NewPlaces from "./place/pages/newPlaces"
const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Users />} />
      <Route path="/places/new" element={<NewPlaces />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
