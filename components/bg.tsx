"use client";
// import { motion } from "framer-motion";
// import { HeroHighlight} from "./ui/hero-highlight";
import React from "react";
import { HeroHighlight } from "./ui/hero-highlight";
// import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightDemo({ children }: { children: React.ReactNode }) {
  return <HeroHighlight>{children}</HeroHighlight>;
}
