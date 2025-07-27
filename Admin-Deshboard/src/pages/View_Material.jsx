import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import TableHeader from "../common/TableHeader";
import Table from "../common/Table";
import NavBar from "../common/NavBar";
import Tablebody from "../common/Tablebody";
import axios from "axios";
import { Link, useNavigate } from "react-router";

export default function View_Material() {
  const center = "Material";
  const last = "View";
  const linkName = "View Material";

  const [materialData, setMaterialData] = useState([])
  const [ids, setIds] = useState([])
  const [Chaked, setChaked] = useState(false)
  const [searchlName, setSearchName] = useState("")
  
  let navigate = useNavigate()

  // let [materialName, setMaterialName] = useState('')
// console.log("materialName",searchlName)

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let getMaterial = () => {
    axios.get(`${apiBaseUrl}material/view`,{
      params: {
        searchlName
      }
    })
      .then((res) => res.data)
      .then((finalRes) => {
        setMaterialData(finalRes.materialRes)
      })
  }

  // ViewMaterial me searchlName ko console karke dekho input ki value aa rahi h ya nahi



  let getAllCheckedValue = (e) => {
    if (e.target.checked && !ids.includes(e.target.value)) {
      setIds([...ids, e.target.value])
    } else {
      setIds(ids.filter((v) => v != e.target.value))
    }
  }

  let multyDelete = () => {
    axios.post(`${apiBaseUrl}material/multy-delete`, { ids })
      .then((res) => res.data)
      .then((finalData) => {
        getMaterial()
        setIds([])
      })
  }

  let changeStatus = () => {
    axios.post(`${apiBaseUrl}material/change-status`, { ids })
      .then((res) => res.data)
      .then((finalData) => {
        getMaterial()
        setIds([])
      })
  }

  // let updateData = (id) => {
  //   // console.log(e);

  //     navigate("/add_material",id)
  //   // axios.put(`${apiBaseUrl}/update/:id`,{e})
  //   // .then((res) => res.data)
  //   // .then((finalRes) => {
  //   //   // console.log(finalRes);
  //   //   // setMaterialData(finalRes.materialRes)
  //   //   })
  // }

  useEffect(() => {
    getMaterial()
  }, [searchlName])


  useEffect(() => {
    multyDelete()
  }, [])

  // let handelChaked = (e) => {
  //   // if(e.checked){
  //   if (e.target.Chaked) {
  //     let materialDataChaked = materialData.map((item) => item._id)
  //     console.log(materialDataChaked);
  //   } else {
  //     setIds([])

  //   }
  //   setChaked(!Chaked)
  // }
  // }

  let handelChaked = (e) => {
    setChaked(!Chaked)
    if (e.target.checked) {
      let materialDataChaked = materialData.map((item) => item._id)
      setIds(materialDataChaked);
    } else {
      setIds([])
    }
  }

  useEffect(() => {
    if (materialData.length == ids.length && materialData.length >=1) {
      setChaked(true)
    } else {
      setChaked(false)
    }
  }, [ids])



  return (
    <>
      <div>
        <NavBar center={center} last={last} />
        <div className="max-w-[1000px] m-auto mt-4 overflow-x-scroll">
          {/* <TableHeader linkName={linkName} multyDelete={multyDelete} changeStatus={changeStatus} setSearchName={setSearchName} /> */}
          <TableHeader linkName={linkName} multyDelete={multyDelete} changeStatus={changeStatus} setSearchName={setSearchName} />

          <div className="w-full ">
            <table className="w-full text-left ">

              <thead className=" bg-[#F9FAFB] text-[15px]">
                <tr className=" ">
                  <th scope="col" className="p-3 w-0">
                    <input type="checkbox" onClick={handelChaked} checked={Chaked} />
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Material Name
                  </th>
                  <th scope="col" className="p-3 w-[12%]">
                    Order
                  </th>
                  <th scope="col" className="p-3 w-[11%] ">
                    Status
                  </th>
                  <th scope="col" className="p-3 w-[10%] ">
                    Action
                  </th>
                </tr>
              </thead>


              <tbody>
                {materialData.length >= 1 ?
                  materialData.map((item, index) => (
                    <tr key={index} className="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <input type="checkbox" value={item._id} checked={ids.includes(item._id)} onChange={getAllCheckedValue} />
                      </td>
                      <th scope="row" className="p-4">
                        {item.materialName}
                      </th>
                      <td className="px-6 py-4">{item.materialOrder}</td>
                      <td className="py-4">
                        {item.materialStatus ?

                          <button className="bg-[#18aa4ee8] hover:bg-[#18AA4E] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                            Active
                          </button>
                          :
                          <button className="bg-[#b91c1ce0] hover:bg-[#b91c1c] text-white py-2 px-4 rounded-[8px] cursor-pointer ml-2 font-[500]">
                            Deactive
                          </button>
                        }
                      </td>
                      <td className=" p-4">
                        <Link to={`/add_material/${item._id}`}>
                          <button className="bg-[#1D4ED8] hover:bg-[#1d33d8] text-white p-3 rounded-[50%] cursor-pointer">
                            <FaPen />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))
                  :
                  <tr >
                    <td colSpan={6} className="p-4 text-center">No Data</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}