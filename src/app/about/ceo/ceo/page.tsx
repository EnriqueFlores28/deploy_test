"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const CEOMessage = () => {
    const [activeTab, setActiveTab] = useState("chairman");

    const backgroundImage = activeTab === "ceo" ? "/images/background.png" : "/images/backgr.png";

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start relative bg-gray-100 pb-16">
            <div
                className="w-full h-[50vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <div className="w-full flex justify-center relative z-20 mt-[-280px]">
                <div className="bg-white shadow-md rounded-full px-6 py-3 flex space-x-8">
                    <button
                        className={`text-lg font-semibold px-4 py-2 ${activeTab === "chairman" ? "text-red-600 border-b-2 border-red-600" : "text-gray-600"}`}
                        onClick={() => setActiveTab("chairman")}
                    >
                        Chairman Message
                    </button>
                    <button
                        className={`text-lg font-semibold px-4 py-2 ${activeTab === "ceo" ? "text-red-600 border-b-2 border-red-600" : "text-gray-600"}`}
                        onClick={() => setActiveTab("ceo")}
                    >
                        CEO Message
                    </button>
                </div>
            </div>

            <div className="w-full flex justify-center relative mt-12 px-4">
                <Card className="max-w-4xl w-full bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <Image
                        src={activeTab === "ceo" ? "/images/profile.png" : "/images/profpic.png"}
                        alt={activeTab === "ceo" ? "I.S. Park - CEO" : "D.Y. Jung - Chairman"}
                        width={192}
                        height={192}
                        className="object-cover rounded-full border-4 border-gray-300"
                    />
                    <CardContent className="text-gray-700 space-y-4">
                        {activeTab === "ceo" ? (
                            <>
                                <p className="text-lg font-light">
                                    Dear Clients, Partners, and Team, Welcome to Casapia. Since our establishment in 2000, we have been committed to excellence in industrial construction, specializing in serving the Korean maquiladora industry in Mexico. Over the past 25 years, our dedication to quality, innovation, and client satisfaction has been the foundation of our success.
                                </p>
                                <p className="text-lg font-light">
                                    At Casapia, we don’t just build facilities—we build long-term relationships based on trust, transparency, and reliability. Every project we undertake reflects our passion for precision and efficiency, ensuring that we meet the highest industry standards while adapting to the evolving needs of our clients.
                                </p>
                                <p className="text-lg font-light">
                                    As we continue to grow, our focus remains on delivering cutting-edge solutions, optimizing processes, and maintaining an unwavering commitment to excellence. We are grateful for the trust our clients place in us, and we look forward to shaping the future of industrial construction together.
                                </p>
                                <p className="text-lg font-semibold text-gray-900">Best regards,</p>
                                <p className="text-lg font-semibold text-gray-900">I.S. Park</p>
                                <p className="text-sm text-gray-600">Chief Executive Officer, Casapia Construction</p>
                            </>
                        ) : (
                            <>
                                <p className="text-lg font-light">
                                    Dear Valued Clients, Partners, and Friends, It is with great pride and gratitude that I welcome you to Casapia.
                                </p>
                                <p className="text-lg font-light">
                                    For over 25 years, we have been dedicated to building excellence, delivering high-quality industrial facilities tailored to the specific needs of the Korean maquiladora industry in Mexico.
                                </p>
                                <p className="text-lg font-light">
                                    Since our founding in 2000, our mission has been clear: to provide innovative, efficient, and sustainable construction solutions that drive the success of our clients. Through unwavering commitment, technical expertise, and a deep understanding of our industry, we have established ourselves as a trusted partner in industrial construction.
                                </p>
                                <p className="text-lg font-light">
                                    At Casapia, we believe that success is built on strong relationships, integrity, and continuous improvement. Our team is committed to maintaining the highest standards of quality, safety, and efficiency in every project we undertake. As we look toward the future, we remain focused on innovation and adapting to the evolving needs of the industry, ensuring that we continue to exceed expectations.
                                </p>
                                <p className="text-lg font-light">
                                    We appreciate your trust and partnership, and we look forward to working together to build a stronger, more sustainable future.
                                </p>
                                <p className="text-lg font-semibold text-gray-900">Sincerely,</p>
                                <p className="text-lg font-semibold text-gray-900">D.Y. Jung</p>
                                <p className="text-sm text-gray-600">Chairman, Casapia Construction</p>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default CEOMessage;
