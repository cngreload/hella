"use client";
import React from "react";
import
{
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { nioclogo } from "@/assets";
import { BackgroundCircles } from "./design/Hero";

export function AnimatedModalDemo ()
{
  const images = [
    { nioclogo }, { BackgroundCircles }

  ];
  return (
    <div className="py-10  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            دستاوردهای
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ⛰️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              از ادعا تا
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                تحقق
              </span>{ " " }

            </h4>
            <div className="flex justify-center items-center">
              { images.map( ( image, idx ) => (
                <motion.div
                  key={ "images" + idx }
                  style={ {
                    rotate: Math.random() * 20 - 10,
                  } }
                  whileHover={ {
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  } }
                  whileTap={ {
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  } }
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  {/** <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                   */}
                </motion.div>
              ) ) }
            </div>
            <p className="text-emerald-700">dafkjdfjkdfj dkjfaksdfjkd dkajfdskfjksjfkdjf</p>
          </ModalContent>

          <ModalFooter className="gap-4 mr-5 justify-start">
            <p className=" text-purple-800">شامگاه با شما</p>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}


