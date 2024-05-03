import logos from "../../../data/partner-logos";
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  return {
    logos
  }
})
