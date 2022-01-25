import styled from "styled-components";
import { useState } from "react";
import { saveToLocal, loadFromLocal } from "../components/localStorage";

export default function Settings() {
  return (
    <div>
      <input name="Vorname" placeholder="Vorname" type={"text"} />
      <input name="Nachname" placeholder="Vorname" type={"text"} />
      <input name="Kind" placeholder="Kind" type={"text"} />
      <input name="Mail" placeholder="Mail" type={"mail"} />
    </div>
  );
}
