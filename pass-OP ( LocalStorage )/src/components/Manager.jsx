import React from 'react';
import { useRef, useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setForm] = useState({ siteName: "", username: "", password: "" })
  const [passwordsArray, setPasswordsArray] = useState([])

  const showPswdsFromLS = () => {
    const passwords = localStorage.getItem("passwords")
    if (passwords) {
      setPasswordsArray([...JSON.parse(passwords)])
    }
  }

  useEffect(() => {
    showPswdsFromLS()
  }, [])

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    ref.current.src = './public/icons/eyecross.png'
  }

  const showPassword = () => {
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = './public/icons/eyecross.png'
      passwordRef.current.type = "password"
    }
    else {
      ref.current.src = './public/icons/eye.png'
      passwordRef.current.type = "text"
    }
  }

  const saveToLS = () => {
    if (form.siteName.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setPasswordsArray([...passwordsArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordsArray, { ...form, id: uuidv4() }]))
      setForm({ siteName: "", username: "", password: "" })
      toast.success('password saved', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      alert("length too short")
    }
  }

  const copyText = (text) => {
    console.log(text)
    navigator.clipboard.writeText(text)
    toast.success('copied to clipboard!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const handleDelete = (id) => {
    const cnf = confirm("are you sure you want to delete this password ?")
    if (cnf) {
      setPasswordsArray(passwordsArray.filter(PAitem => id != PAitem.id))
      localStorage.setItem("passwords", JSON.stringify(passwordsArray.filter(PAitem => id != PAitem.id)))
      toast.success('password deleted', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  // my edit functionality => also correct :- ( pass item instead of item.id in the handleEdit parameter in jsx mp function )

  // const handleEdit = (item) => {
  //   setForm(item)
  //   const newArray = passwordsArray.filter((PAitem) => {
  //     return PAitem.id != item.id
  //   })
  //   setPasswordsArray(newArray)
  // }

  // harry's handleEdit :-
  const handleEdit = (id) => {
    alert("edit where you typed")
    setForm(passwordsArray.filter(item => item.id == id)[0])
    setPasswordsArray(passwordsArray.filter(PAitem => id != PAitem.id))
  }

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] min-h-screen"></div> */}

      <div className="p-2 md:p-0 md:mycontainer mt-8 mb-10 min-h-[calc(100vh-217px)] md:min-h-[77.2vh]">
        <h1 className='logo text-center font-bold text-4xl'>
          <span className='text-green-700'> &lt;</span>
          <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>your own password manager</p>
        <div className="p-4 flex flex-col items-center gap-8 text-black">
          <input onChange={handleForm} value={form.siteName} placeholder='Enter website name/URL' className='border border-black w-full rounded-full px-4 py-1' type="text" name="siteName" />
          <div className="flex flex-col md:flex-row w-full gap-8">
            <input onChange={handleForm} value={form.username} placeholder='Enter username' className='border border-black w-full rounded-full px-4 py-1' type="text" name="username" />
            <div className="relative">
              <input ref={passwordRef} onChange={handleForm} value={form.password} placeholder='Enter password' className='border border-black w-full rounded-full px-4 pr-10 py-1' type="password" name="password" />
              <span className="absolute right-[10px] top-[8px] cursor-pointer" onClick={showPassword}>
                <img ref={ref} width={20} src="./public/icons/eyecross.png" alt="" />
              </span>
            </div>
          </div>
          <button onClick={saveToLS} className='flex justify-center items-center w-fit px-2 pr-4 py-2 bg-green-400 hover:bg-green-300 transition-colors duration-200 rounded-full border border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              state="hover-swirl"
              colors="primary:#121331,secondary:#000000">
            </lord-icon>
            Save password
          </button>
        </div>

        {passwordsArray.length == 0 && <div>No passwords to show</div>}
        {passwordsArray.length !== 0 && <div className='passwords mt-5 overflow-x-auto'>
          <h1 className='text-2xl font-bold py-4'>Your passwords</h1>
          <div className="min-w-[200px]"></div>
          <table className="table w-full overflow-hidden rounded-xl">
            <thead className='text-center bg-green-600 text-white'>
              <tr>
                <th className='w-1/4 p-2'>website name</th>
                <th className='w-1/4 p-2'>username</th>
                <th className='w-1/4 p-2'>passwords</th>
                <th className='w-1/4 p-2'>actions</th>
              </tr>
            </thead>
            <tbody className='text-center bg-green-100'>
              {passwordsArray.map((item) => {
                return <tr key={item.id}>
                  <td>
                    <div className='p-2 pl-4 flex justify-center items-center gap-5'>
                      <a href={item.siteName} target='_blank'>
                        <span className="break-words whitespace-normal md:max-w-[300px] max-w-[50px]">
                          {item.siteName}
                        </span>
                      </a>
                      <img onClick={() => copyText(item.siteName)} className='copyIcon cursor-pointer' src="icons/copy.svg" alt="" />
                    </div>
                  </td>
                  <td>
                    <div className='p-2 pl-4 flex justify-center items-center gap-5'>
                      <span className="break-words whitespace-normal max-w-[300px]">
                        {item.username}
                      </span>
                      <img onClick={() => copyText(item.username)} className='copyIcon cursor-pointer' src="icons/copy.svg" alt="" />
                    </div>
                  </td>
                  <td>
                    <div className='p-2 pl-4 flex justify-center items-center gap-5'>
                      <span className="break-words whitespace-normal max-w-[300px]">
                        {item.password}
                      </span>
                      <img onClick={() => copyText(item.password)} className='copyIcon cursor-pointer' src="icons/copy.svg" alt="" />
                    </div>
                  </td>
                  <td>
                    <div className='p-2 pl-4 flex justify-center items-center gap-5'>
                      <button onClick={() => handleEdit(item.id)} className='flex justify-center items-center border border-green-600 rounded-full pr-3 px-2 py-1 text-sm'>
                        <lord-icon
                          className="w-5"
                          src="https://cdn.lordicon.com/exymduqj.json"
                          trigger="hover"
                          stroke="bold"
                          state="hover-line"
                          colors="primary:#121331,secondary:#000000">
                        </lord-icon>
                        <span>Edit</span>
                      </button>
                      <button onClick={() => handleDelete(item.id)} className='flex justify-center items-center border border-green-600 rounded-full pr-3 px-2 py-1 text-sm'>
                        <lord-icon
                          className='w-5'
                          src="https://cdn.lordicon.com/jzinekkv.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#121331,secondary:#000000">
                        </lord-icon>
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>}

      </div>
    </>
  );
};

export default Manager;
