import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon } from "./icons";
import { LogoPython } from "@/app/icons";
import { Button } from "./ui/button";

interface OverviewProps {
  onResumeCrafting: () => void;
  onJobSearch: () => void;
}

export const Overview = ({ onResumeCrafting, onJobSearch }: OverviewProps) => {
  return (
    <motion.div
      key="overview"
      className="flex justify-center items-start md:mt-20 px-4 md:px-8"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <LogoPython size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <p className="text-xl font-semibold">Career Titan</p>
        <p>
          Personal agents for peak productivity. Career Titan builds task-focused
          agents for job discovery, resume crafting, research, and outreach—so
          you move faster with less friction.
        </p>
        <p>
          Powered by Python (FastAPI) and modern React with streaming for a
          smooth, low‑latency chat experience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
          <Button
            size="lg"
            className="px-6 py-3 font-semibold"
            onClick={onResumeCrafting}
          >
            Resume Crafting
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 py-3 font-semibold"
            onClick={onJobSearch}
          >
            Job Search
          </Button>
        </div>
      </div>
    </motion.div>
  );
};