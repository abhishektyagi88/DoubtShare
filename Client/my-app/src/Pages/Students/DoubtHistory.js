import React, { useEffect, useState } from "react";
import moment from 'moment';
import { message, Table, Input } from "antd";
import { DeleteDoubt, GetAllDoubts } from "../../ApiCalls/doubts";


function DoubtHistory() {
    const [doubt, setDoubt] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDoubts, setFilteredDoubts] = useState([]);


    const getData = async () => {
        try {
            const response = await GetAllDoubts();
            if (response.success) {
                message.success(response.message);
                setDoubt(response.data);
            } else {
                message.error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    }

    const handleDelete = async (doubtId) => {
        try {
            const response = await DeleteDoubt(doubtId);
            if (response.success) {
                message.success(response.message);
                getData();
            } else {
                message.error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    }

    const sortByDate = () => {
        const temp = [...doubt];
        const updatedList = temp.sort((a, b) => new Date(b.date) - new Date(a.date));
        setDoubt(updatedList);
    }

    const SearchDoubt = () => {
        const temp = [...doubt];
        const newFilteredDoubts = temp.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredDoubts(newFilteredDoubts);
    }

    const resetFilteredDoubts = () => {
        setFilteredDoubts([]);
    }


    useEffect(() => {
        getData();
    }, []);


    const columns = [
        {
            title: 'Doubt Title',
            dataIndex: 'title',
        },
        {
            title: 'Doubt Description',
            dataIndex: 'description',
        },
        {
            title: 'Issue Type',
            dataIndex: 'issue',
        },
        {
            title: 'Language',
            dataIndex: 'language',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            render: (text, record) => {
                return moment(record.date).format("DD-MM-YYYY");
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record) => {
                return (
                    <div>
                        <i className="ri-delete-bin-line cursor-pointer text-xl hover:text-red-500"
                            onClick={() => { handleDelete(record._id) }}
                        >
                        </i>
                    </div>
                )
            }
        },
    ];
    return (
        <div>
            <div className="flex justify-between">
                <button type="button" className="ml-[20px] hover:scale-110 duration-300 w-[250px] text-white bg-gradient-to-br from-orange-600 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
             focus:ring-orange-300 dark:focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={sortByDate}
                >
                    Sort By Date</button>
                <Input className=" mr-[20px] mb-[5px] border-4 border-orange-600 w-[250px]"
                    type="text" placeholder="search by title" value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if (e.target.value.trim() === "") {
                            resetFilteredDoubts();
                        } else {
                            SearchDoubt();
                        }
                    }}

                />
            </div>

            <Table columns={columns} dataSource={filteredDoubts.length > 0 ? filteredDoubts : doubt} />
        </div>
    )
}

export default DoubtHistory;