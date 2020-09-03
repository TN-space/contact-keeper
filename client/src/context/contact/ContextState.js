import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "HARRY WHITE",
        email: "harry@gmail.com",
        phone: "555-666-7777",
        type: "professional",
      },
      {
        id: 2,
        name: "Hadley WHITE",
        email: "hadley@gmail.com",
        phone: "555-666-7777",
        type: "personal",
      },
      {
        id: 3,
        name: "Kaley WHITE",
        email: "Kaley@gmail.com",
        phone: "555-666-7777",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Update contact

  // Set current contact

  // Clear current contact

  // Filter contacts

  // Clear filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
