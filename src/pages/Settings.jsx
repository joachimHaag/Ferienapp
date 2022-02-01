import styled from "styled-components";
import "../App.css";
import { useState } from "react";
import { saveToLocal, loadFromLocal } from "../components/localStorage";

export default function Settings() {
  return (
    <div class="input">
      <p>Bitte geben Sie Ihre Daten hier ein.</p>
      <input name="Vorname" placeholder="Vorname" type={"text"} />
      <input name="Nachname" placeholder="Nachname" type={"text"} />
      <input name="Kind" placeholder="Kind" type={"text"} />
      <input name="Mail" placeholder="Mail" type={"mail"} />
      <button>Submitt</button>
    </div>
  );
}
