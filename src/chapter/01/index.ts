import playsData from "../../data/plays.json";
import invoicesData from "../../data/invoices.json";
import statement from "./statement";

statement(invoicesData[0], playsData);
