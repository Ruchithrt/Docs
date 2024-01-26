import React from "react";
import { MdContactPage } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className=" relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-500/40 text-white py-8 px-5 overflow-hidden"
    >
      <MdContactPage size={32} />
      <p className="mt-5 font-semi-bold leading-tight ">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className=" mt-8 flex items-center align-center px-8 py-1 mb-3 justify-between ">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseSharp />
            ) : (
              <MdOutlineFileDownload size="0.8rem" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex item-center justify-center`}
          >
            <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
