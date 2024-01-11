import React, { useState } from "react";
import DoubtForm from "./DoubtForm";

function AskDoubt() {
    const [formModal, setFormModal] = useState(false);

    return (
        <div className="flex flex-col gap-9">
            <p className="p-2 italic">
                Solve Doubts on your own first. This will deepen your
                understanding of the topics and increase your confidence.
                Use the Ask Doubt feature provided by us if you
                get stuck. TAs (Teaching Assistant) are here to help.TA Help
                Requests are accessible to you to clear all your doubts regarding that topic.
            </p>
            <div className="p-5">
                <button type="button" className=" hover:scale-110 duration-300 w-[250px] text-white bg-gradient-to-br from-orange-600 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
             focus:ring-orange-300 dark:focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => { setFormModal(true) }}
                >
                    Ask Doubt</button>
            </div>
            {
                formModal && (
                    <DoubtForm 
                    formModal={formModal}
                    setFormModal={setFormModal}
                    />
                )
            }
        </div>
    )
}

export default AskDoubt;