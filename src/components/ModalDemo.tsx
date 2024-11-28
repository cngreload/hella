'use client';
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


export default function App ()
{
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={ onOpen }>Open Modal</Button>
            <Modal isOpen={ isOpen } onOpenChange={ onOpenChange }>
                <ModalContent>
                    { ( onClose ) => (
                        <>
                            <div className="bg-black">

                                <ModalBody className="text-lg">
                                    <p>
                                        از طریق ادغام فناوری‌های پیشرفته اینترنت اشیا، هوش مصنوعی و تجزیه و تحلیل داده‌های بزرگ، ویت یک داشبورد دیجیتال و اپلیکیشن موبایل جامع ارائه می‌دهد که به عنوان عصای جادویی شما عمل می‌کند. با یک نگاه، می‌توانید به اطلاعات ارزشمند و داده‌های حیاتی دسترسی داشته باشید، تصمیمات استراتژیک بگیرید و عملکرد تجارت خود را بهینه‌سازی کنید.                                    </p>
                                    <p>
                                        ویت، با ارائه کنترل بی‌نظیر و انعطاف‌پذیری فوق‌العاده، به شما امکان می‌دهد تا با اطمینان و کارایی، هدایت کسب و کار خود را در دست بگیرید و مرزهای موفقیت را جابجا کنید.                                    </p>

                                </ModalBody>

                            </div>
                        </>
                    ) }
                </ModalContent>

            </Modal>
        </>
    );
}
